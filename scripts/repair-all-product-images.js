const fs = require('fs');
const mysql = require('mysql2/promise');

const productsPath = 'src/data/all-combined-products.json';
const cachePath = 'scripts/icam-products-cache.json';

const prods = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const icam = JSON.parse(fs.readFileSync(cachePath, 'utf8'));

function decodeHtml(html) {
  return (html || '')
    .replace(/&amp;/g, '&')
    .replace(/&#8211;/g, '-')
    .replace(/&#8212;/g, '-')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8243;/g, '"')
    .replace(/&#215;/g, 'x');
}

function normalizeKey(str) {
  return decodeHtml(str || '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// 1. Identify suspicious repeated images
const imageUsage = {};
prods.forEach(p => {
  const img = p.image || p.images?.[0];
  if (img) imageUsage[img] = (imageUsage[img] || 0) + 1;
});
const suspiciousImages = new Set(
  Object.entries(imageUsage)
    .filter(([img, count]) => count > 2)
    .map(([img]) => img)
);

console.log(`Identified ${suspiciousImages.size} suspicious placeholder/repeated image URLs.`);

// 2. Index authentic icamstore items
const icamById = new Map();
const icamByTitle = new Map();

icam.forEach(item => {
  icamById.set(String(item.id), item);
  const norm = normalizeKey(item.name);
  if (norm) {
    if (!icamByTitle.has(norm)) {
      icamByTitle.set(norm, item);
    }
  }
});

let updatedCount = 0;
let unchangedCount = 0;
let preOwnedCount = 0;
const dbUpdates = [];

for (const p of prods) {
  // Never alter authentic Pre-Owned products
  if (p.category === 'pre-owned') {
    preOwnedCount++;
    continue;
  }

  const oldImage = p.image;
  const oldImages = Array.isArray(p.images) ? [...p.images] : (oldImage ? [oldImage] : []);

  let newImage = oldImage;
  let newImages = [...oldImages];

  // Try authentic icam match by ID or Title
  let icamMatch = null;
  if (p.id.startsWith('icam-')) {
    icamMatch = icamById.get(p.id.replace('icam-', ''));
  }
  if (!icamMatch) {
    const norm = normalizeKey(p.name);
    icamMatch = icamByTitle.get(norm);
  }

  // Validate icam match: ensure name aligns
  let validIcamMatch = false;
  if (icamMatch && icamMatch.images && icamMatch.images.length > 0) {
    const matchNorm = normalizeKey(icamMatch.name);
    const prodNorm = normalizeKey(p.name);
    if (p.id === `icam-${icamMatch.id}` || matchNorm === prodNorm) {
      validIcamMatch = true;
    }
  }

  if (validIcamMatch) {
    const authenticMain = icamMatch.images[0].src;
    const authenticAll = icamMatch.images.map(img => img.src);
    newImage = authenticMain;
    newImages = authenticAll;
  }

  // If newImage is still one of the suspicious placeholders, but gallery has better photos:
  if (suspiciousImages.has(newImage) && newImages.length > 1) {
    const betterImg = newImages.find(img => !suspiciousImages.has(img));
    if (betterImg) {
      newImage = betterImg;
      newImages = [betterImg, ...newImages.filter(img => img !== betterImg && !suspiciousImages.has(img))];
    }
  }

  // If first image does not match main image, fix order
  if (newImages.length > 0 && newImages[0] !== newImage) {
    newImages = [newImage, ...newImages.filter(img => img !== newImage)];
  }

  // If no images array existed or empty, set to [newImage]
  if (newImages.length === 0 && newImage) {
    newImages = [newImage];
  }

  // Check if modified
  const imagesChanged = JSON.stringify(oldImages) !== JSON.stringify(newImages);
  const imageChanged = oldImage !== newImage;

  if (imageChanged || imagesChanged) {
    p.image = newImage;
    p.images = newImages;
    updatedCount++;
    dbUpdates.push({
      id: p.id,
      image_url: newImage,
      images_json: JSON.stringify(newImages)
    });
  } else {
    unchangedCount++;
  }
}

console.log(`\nCatalog image repair complete:`);
console.log(`- Products repaired with authentic front photos: ${updatedCount}`);
console.log(`- Products already valid: ${unchangedCount}`);
console.log(`- Pre-owned products preserved: ${preOwnedCount}`);

// Save back to JSON
fs.writeFileSync(productsPath, JSON.stringify(prods, null, 2), 'utf8');
console.log(`Saved repaired catalog to ${productsPath}`);

// Update products.ts
const tsPath = 'src/data/products.ts';
const tsContent = `import rawProducts from "./all-combined-products.json";

export type ProductCategory = 
  | "all"
  | "cameras"
  | "lenses"
  | "filters"
  | "accessories"
  | "audio"
  | "dental"
  | "deals"
  | "bags"
  | "gimbals"
  | "flashes"
  | "lighting"
  | "memory-cards"
  | "tripods"
  | "drones"
  | "pre-owned";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  images?: string[];
  items?: string[];
  bundleProducts?: string[];
  bundleProductIds?: string[];
  badge?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  isSale?: boolean;
  stockStatus?: "in-stock" | "low-stock" | "out-of-stock" | "pre-order";
  stockCount?: number;
  shortDescription: string;
  specs: { label: string; value: string }[];
  features: string[];
  inTheBox: string[];
  mount?: string;
  sensor?: string;
  resolution?: string;
}

export const HERO_HIGHLIGHTS = [
  {
    id: "esa-5745",
    name: "Sony FX3 Cinema Line",
    subtitle: "Full-Frame 4K/120p Compact Cine Body",
    price: 3899,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80",
    tag: "Flagship Choice",
    specs: [
      "12.1MP Full-Frame BSI",
      "15+ Stops S-Log3",
      "4K 120p / FHD 240p",
      "Active Cooling Fan",
    ],
  },
  {
    id: "esa-5746",
    name: "Canon EOS R5 C",
    subtitle: "8K60 RAW Internal Cine System",
    price: 4299,
    image: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=1000&q=80",
    tag: "8K Monster",
    specs: [
      "45MP Full-Frame Dual Pixel",
      "8K 60p RAW Light",
      "Canon RF Cinema",
      "Timecode & Waveform",
    ],
  },
  {
    id: "esa-5747",
    name: "RED V-Raptor 8K",
    subtitle: "Multi-Format VV & 6K S35 Sensor",
    price: 5995,
    image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=1000&q=80",
    tag: "Hollywood Standard",
    specs: [
      "35.4MP VistaVision",
      "17+ Stops RAW",
      "8K 120fps / 4K 240fps",
      "CFexpress Type B",
    ],
  },
];

export const CATEGORIES_LIST = [
  {
    id: "cameras" as ProductCategory,
    name: "Cinema & Mirrorless Bodies",
    tag: "Cinema Tier",
    itemCount: "92+ Systems",
    brands: "Sony • Canon • Nikon • RED • BMPCC",
    title: "Cinema & Mirrorless Bodies",
    description: "Full-frame 8K/4K cinema cameras from Sony, Canon, RED & Blackmagic",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    badge: "Cinema Tier",
  },
  {
    id: "lenses" as ProductCategory,
    name: "Cinema & Master Primes",
    tag: "Optics Hub",
    itemCount: "240+ Primes & Zooms",
    brands: "Sony GM • Canon RF • Viltrox • Sigma • Tamron",
    title: "Cinema & Master Primes",
    description: "Anamorphic, Cine Primes, and fast f/1.2 & f/1.4 zoom lenses",
    image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80",
    badge: "Optics Hub",
  },
  {
    id: "filters" as ProductCategory,
    name: "Lens Filters & Optics",
    tag: "Optical Grade",
    itemCount: "130+ Filters",
    brands: "K&F Concept • NiSi • Freewell • Green.L • PolarPro",
    title: "Lens Filters & Optics",
    description: "CPL, Variable ND, Black Mist, UV and Cinema magnetic filter systems",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80",
    badge: "Optical Grade",
  },
  {
    id: "lighting" as ProductCategory,
    name: "Studio & Location Lighting",
    tag: "Pro Output",
    itemCount: "20+ Lighting Fixtures",
    brands: "Godox • Aputure • Nanlite • Amaran",
    title: "Studio & Location Lighting",
    description: "High-CRI LED monolights, tube lights, and Bowens mount softboxes",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
    badge: "Pro Output",
  },
  {
    id: "audio" as ProductCategory,
    name: "Broadcast & Wireless Audio",
    tag: "32-Bit Float",
    itemCount: "15+ Pro Audio Systems",
    brands: "DJI • RØDE • Boya • Hollyland • Zoom",
    title: "Broadcast & Wireless Audio",
    description: "Dual-channel wireless mics, shotgun mics, and 32-bit float field recorders",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
    badge: "32-Bit Float",
  },
  {
    id: "gimbals" as ProductCategory,
    name: "Gimbals & Cinema Rigs",
    tag: "4.5kg Payload",
    itemCount: "16+ Stabilizer Kits",
    brands: "DJI Ronin • RS 4 Pro • Zhiyun • Tilta",
    title: "Gimbals & Cinema Rigs",
    description: "3-axis carbon stabilizers, follow focus systems, and shoulder rigs",
    image: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&w=800&q=80",
    badge: "4.5kg Payload",
  },
  {
    id: "accessories" as ProductCategory,
    name: "Power, Media & Monitor Rigs",
    tag: "Mission Critical",
    itemCount: "100+ Production Essentials",
    brands: "SmallRig • SanDisk • Lexar • Feelworld",
    title: "Power, Media & Monitor Rigs",
    description: "V-mount batteries, CFexpress Type A/B cards, and daylight viewable monitors",
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=800&q=80",
    badge: "Mission Critical",
  },
];

export const PRODUCTS: Product[] = rawProducts as unknown as Product[];

export const OFFERS: Product[] = [];
`;
fs.writeFileSync(tsPath, tsContent, 'utf8');
console.log(`Updated ${tsPath}`);

async function syncToDatabase() {
  console.log(`\nConnecting to live MySQL database...`);
  const conn = await mysql.createConnection({
    host: '92.113.22.70',
    port: 3306,
    user: 'u808756286_esa',
    password: '2!83>q;>Gl',
    database: 'u808756286_esa'
  });

  console.log(`Connected. Applying ${dbUpdates.length} image updates in batches...`);
  const BATCH_SIZE = 250;

  for (let i = 0; i < dbUpdates.length; i += BATCH_SIZE) {
    const chunk = dbUpdates.slice(i, i + BATCH_SIZE);
    const ids = chunk.map(c => c.id);

    let imgCase = 'CASE id ';
    let imgsCase = 'CASE id ';
    const params = [];

    for (const c of chunk) {
      imgCase += 'WHEN ? THEN ? ';
      params.push(c.id, c.image_url);
    }
    imgCase += 'ELSE image_url END';

    for (const c of chunk) {
      imgsCase += 'WHEN ? THEN ? ';
      params.push(c.id, c.images_json);
    }
    imgsCase += 'ELSE images_json END';

    const placeholders = ids.map(() => '?').join(',');
    const sql = `UPDATE products SET 
      image_url = ${imgCase},
      images_json = ${imgsCase}
      WHERE id IN (${placeholders})`;

    params.push(...ids);
    await conn.execute(sql, params);
    console.log(`  Updated ${Math.min(i + BATCH_SIZE, dbUpdates.length)} / ${dbUpdates.length} in DB`);
  }

  // Verification queries
  const checkIds = ['esa-612', 'esa-601', 'esa-626', 'esa-349', 'esa-637'];
  console.log('\n--- VERIFICATION IN DATABASE ---');
  for (const cid of checkIds) {
    const [rows] = await conn.query('SELECT id, name, image_url FROM products WHERE id = ?', [cid]);
    if (rows.length > 0) {
      console.log(`[DB] ${rows[0].id} - ${rows[0].name}`);
      console.log(`     Image: ${rows[0].image_url}`);
    }
  }

  await conn.end();
  console.log('✅ Database sync complete!');
}

syncToDatabase().catch(err => {
  console.error('Database sync error:', err);
  process.exit(1);
});

