const https = require('https');
const fs = require('fs');
const mysql = require('mysql2/promise');

const TOTAL_PAGES = 28;
const PER_PAGE = 100;
const cachePath = 'scripts/icam-products-cache.json';
const productsPath = 'src/data/all-combined-products.json';
const tsPath = 'src/data/products.ts';

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

function fetchPage(page, retries = 3) {
  return new Promise((resolve, reject) => {
    const url = `https://icamstore.net/wp-json/wc/store/v1/products?per_page=${PER_PAGE}&page=${page}`;
    const req = https.get(
      url,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'application/json'
        },
        timeout: 25000
      },
      res => {
        if (res.statusCode !== 200) {
          if (retries > 0) {
            console.log(`[Retry] Page ${page} failed with status ${res.statusCode}, retrying...`);
            setTimeout(() => resolve(fetchPage(page, retries - 1)), 2000);
            return;
          }
          reject(new Error(`Failed to fetch page ${page}: status ${res.statusCode}`));
          return;
        }

        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          try {
            const data = JSON.parse(body);
            resolve(data);
          } catch (err) {
            if (retries > 0) {
              console.log(`[Retry] JSON parse failed on page ${page}, retrying...`);
              setTimeout(() => resolve(fetchPage(page, retries - 1)), 2000);
            } else {
              reject(err);
            }
          }
        });
      }
    );

    req.on('timeout', () => {
      req.destroy();
      if (retries > 0) {
        setTimeout(() => resolve(fetchPage(page, retries - 1)), 2000);
      } else {
        reject(new Error(`Timeout on page ${page}`));
      }
    });

    req.on('error', err => {
      if (retries > 0) {
        setTimeout(() => resolve(fetchPage(page, retries - 1)), 2000);
      } else {
        reject(err);
      }
    });
  });
}

async function scrapeAllIcam() {
  console.log(`📡 Fetching ${TOTAL_PAGES} pages live from icamstore.net for fresh stock status...`);
  const allItems = [];
  const concurrency = 4;

  for (let i = 1; i <= TOTAL_PAGES; i += concurrency) {
    const batch = [];
    for (let p = i; p < i + concurrency && p <= TOTAL_PAGES; p++) {
      batch.push(
        fetchPage(p).then(items => {
          console.log(`  ✓ Page ${p}/${TOTAL_PAGES} fetched (${items.length} items)`);
          return items;
        })
      );
    }
    const results = await Promise.all(batch);
    results.forEach(items => allItems.push(...items));
    await new Promise(r => setTimeout(r, 300));
  }

  console.log(`Total live items scraped from ICAM: ${allItems.length}`);
  fs.writeFileSync(cachePath, JSON.stringify(allItems, null, 2), 'utf8');
  console.log(`Saved fresh ICAM data to ${cachePath}`);
  return allItems;
}

async function main() {
  const icamItems = await scrapeAllIcam();

  // Index ICAM items
  const icamById = new Map();
  const icamByTitle = new Map();

  for (const item of icamItems) {
    icamById.set(String(item.id), item);
    const norm = normalizeKey(item.name);
    if (norm && !icamByTitle.has(norm)) {
      icamByTitle.set(norm, item);
    }
  }

  // Load our catalog
  const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  console.log(`Loaded ${products.length} products from ${productsPath}`);

  let setOutOfStockCount = 0;
  let setInStockCount = 0;
  let preOwnedCount = 0;
  let unmatchedCount = 0;

  const dbUpdates = [];

  for (const prod of products) {
    // Preserve authentic Used / Pre-owned products
    if (prod.category === 'pre-owned') {
      preOwnedCount++;
      continue;
    }

    let icamMatch = null;
    if (prod.id.startsWith('icam-')) {
      const rawId = prod.id.replace('icam-', '');
      icamMatch = icamById.get(rawId);
    }
    if (!icamMatch) {
      const norm = normalizeKey(prod.name);
      icamMatch = icamByTitle.get(norm);
    }

    if (icamMatch) {
      const isOutOfStock = icamMatch.is_in_stock === false;
      const targetStatus = isOutOfStock ? 'out-of-stock' : 'in-stock';
      const targetCount = isOutOfStock ? 0 : 5;

      const hasChanged = prod.stockStatus !== targetStatus || prod.stockCount !== targetCount;

      prod.stockStatus = targetStatus;
      prod.stockCount = targetCount;

      if (isOutOfStock) {
        setOutOfStockCount++;
      } else {
        setInStockCount++;
      }

      if (hasChanged) {
        dbUpdates.push({
          id: prod.id,
          stock_status: targetStatus,
          stock_count: targetCount
        });
      }
    } else {
      unmatchedCount++;
      // If unmatched, default to in-stock unless already specified
      if (!prod.stockStatus || prod.stockStatus === 'pre-order') {
        prod.stockStatus = 'in-stock';
        prod.stockCount = prod.stockCount ?? 5;
        dbUpdates.push({
          id: prod.id,
          stock_status: 'in-stock',
          stock_count: 5
        });
      }
    }
  }

  console.log(`\nCatalog Stock Summary:`);
  console.log(`- Products set to OUT OF STOCK (matching ICAM): ${setOutOfStockCount}`);
  console.log(`- Products set to IN STOCK (matching ICAM): ${setInStockCount}`);
  console.log(`- Pre-owned items safely preserved: ${preOwnedCount}`);
  console.log(`- Unmatched items: ${unmatchedCount}`);
  console.log(`- Total items needing MySQL DB update: ${dbUpdates.length}`);

  // Save updated catalog to JSON
  fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), 'utf8');
  console.log(`Saved updated stock to ${productsPath}`);

  // Update src/data/products.ts
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

  // Connect to MySQL and update in batches
  if (dbUpdates.length > 0) {
    console.log(`\nConnecting to MySQL database to apply ${dbUpdates.length} stock status updates...`);
    const conn = await mysql.createConnection({
      host: '92.113.22.70',
      port: 3306,
      user: 'u808756286_esa',
      password: '2!83>q;>Gl',
      database: 'u808756286_esa'
    });

    const BATCH_SIZE = 250;
    for (let i = 0; i < dbUpdates.length; i += BATCH_SIZE) {
      const chunk = dbUpdates.slice(i, i + BATCH_SIZE);
      const ids = chunk.map(c => c.id);

      let statusCase = 'CASE id ';
      let countCase = 'CASE id ';
      const params = [];

      for (const c of chunk) {
        statusCase += 'WHEN ? THEN ? ';
        params.push(c.id, c.stock_status);
      }
      statusCase += 'ELSE stock_status END';

      for (const c of chunk) {
        countCase += 'WHEN ? THEN ? ';
        params.push(c.id, c.stock_count);
      }
      countCase += 'ELSE stock_count END';

      const placeholders = ids.map(() => '?').join(',');
      const sql = `UPDATE products SET 
        stock_status = ${statusCase},
        stock_count = ${countCase}
        WHERE id IN (${placeholders})`;

      params.push(...ids);
      await conn.execute(sql, params);
      console.log(`  Updated ${Math.min(i + BATCH_SIZE, dbUpdates.length)} / ${dbUpdates.length} in DB`);
    }

    // Verify
    const [counts] = await conn.query(`SELECT stock_status, COUNT(*) as cnt FROM products GROUP BY stock_status`);
    console.log('\n--- VERIFICATION IN DATABASE ---');
    console.log('Stock distribution in DB:', counts);

    await conn.end();
  }

  console.log('✅ Stock synchronization complete!');
}

main().catch(err => {
  console.error('Error during stock sync:', err);
  process.exit(1);
});

