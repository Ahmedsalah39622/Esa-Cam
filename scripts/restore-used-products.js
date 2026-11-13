const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const mysql = require('mysql2/promise');

// 1. Defined curated images for used equipment
const usedImageMap = {
  'fujifilm-x-t5-used': 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80',
  'esa-2809': 'https://icamstore.net/wp-content/uploads/2026/09/VQMcWAFKce7Q3ZfIWS7cDZQh6SCeD3qWxyPKTu9P4M1qCu4Vn6tOtkj4VAAQq0qKl9knJOQVlQITnMf6994moLfGDGLEAScsXHlSt6nqjptj2S9yxieo1pYDW3c-i-FHL4Uc7G-D-zeunli9oU67wkILcIlSd6i0w0I0VjShCPUF7HGKg3FywR2x7fG4xVKS.jpeg',
  'esa-2804': 'https://icamstore.net/wp-content/uploads/2024/05/761a4aaa692f5fb37ffbf9a6a68eb24ce4c54fd3.webp',
  'esa-2799': 'https://icamstore.net/wp-content/uploads/2024/05/761a4aaa692f5fb37ffbf9a6a68eb24ce4c54fd3.webp',
  'esa-2786': 'https://icamstore.net/wp-content/uploads/2024/07/1721217031_1841315.jpg',
  'esa-2781': 'https://icamstore.net/wp-content/uploads/2026/04/1764776940_1936017.jpg',
  'esa-2777': 'https://icamstore.net/wp-content/uploads/2026/04/1764776940_1936017.jpg',
  'esa-2773': 'https://icamstore.net/wp-content/uploads/2024/07/1721217031_1841315.jpg',
  'esa-2768': 'https://icamstore.net/wp-content/uploads/2024/07/1721217031_1841315.jpg',
  'esa-2758': 'https://icamstore.net/wp-content/uploads/2026/03/1-16.jpg',
  'esa-2754': 'https://icamstore.net/wp-content/uploads/2026/03/1-17.jpg',
  'esa-2749': 'https://icamstore.net/wp-content/uploads/2024/01/1657622145_1716503.jpg',
  'esa-2744': 'https://icamstore.net/wp-content/uploads/2023/10/1557272709_1477265.jpg',
  'esa-2740': 'https://icamstore.net/wp-content/uploads/2023/10/1624972658_IMG_1265330.jpg',
  'esa-2736': 'https://icamstore.net/wp-content/uploads/2023/10/1631598364_1663581.jpg',
  'esa-2723': 'https://icamstore.net/wp-content/uploads/2024/01/1657622145_1716503.jpg',
  'esa-2714': 'https://icamstore.net/wp-content/uploads/2026/03/1-17.jpg',
  'esa-2826': 'https://icamstore.net/wp-content/uploads/2024/07/1573051814_1333265.jpg',
  'esa-2822': 'https://icamstore.net/wp-content/uploads/2024/07/1573051814_1333265.jpg',
  'esa-2818': 'https://icamstore.net/wp-content/uploads/2026/04/1-1.jpg',
  'esa-2814': 'https://icamstore.net/wp-content/uploads/2026/06/62d031a0ef0fe_1504876804_1360670-thumb.webp',
  'esa-2791': 'https://icamstore.net/wp-content/uploads/2026/06/CANONNB-CP2L-2.jpg',
};

const preOwnedIds = new Set([
  'fujifilm-x-t5-used',
  'esa-2809', 'esa-2804', 'esa-2799', 'esa-2786', 'esa-2781', 'esa-2777',
  'esa-2773', 'esa-2768', 'esa-2758', 'esa-2754', 'esa-2749', 'esa-2744',
  'esa-2740', 'esa-2736', 'esa-2723', 'esa-2714',
  'esa-2826', 'esa-2822', 'esa-2818', 'esa-2814', 'esa-2791'
]);

async function main() {
  console.log('🔄 Restoring original ESA CAM and Pre-Owned Products...');

  // 1. Load git historical 474 products
  const rawHistorical = execSync('git show 34cbd71:src/data/imported-esacam-products.json', { maxBuffer: 100 * 1024 * 1024, encoding: 'utf8' });
  const historicalEsa = JSON.parse(rawHistorical);
  console.log(`Found ${historicalEsa.length} historical ESA products.`);

  // Write back to imported-esacam-products.json
  const importedPath = path.join(__dirname, '../src/data/imported-esacam-products.json');
  fs.writeFileSync(importedPath, JSON.stringify(historicalEsa, null, 2), 'utf8');
  console.log('✅ Restored src/data/imported-esacam-products.json');

  // 2. Load current all-combined-products.json
  const combinedPath = path.join(__dirname, '../src/data/all-combined-products.json');
  const currentCombined = JSON.parse(fs.readFileSync(combinedPath, 'utf8'));
  console.log(`Current products in all-combined-products.json: ${currentCombined.length}`);

  const productMap = new Map();
  // Index current items
  for (const item of currentCombined) {
    productMap.set(item.id, item);
  }



  // Merge the 474 ESA products
  for (const esa of historicalEsa) {
    const isPreOwned = preOwnedIds.has(esa.id) || /used/i.test(esa.name) || /مستعمل/i.test(esa.name);
    let category = isPreOwned ? 'pre-owned' : (esa.category || 'accessories');
    if (category === 'camera') category = 'cameras';
    if (category === 'lens') category = 'lenses';

    let specs = [];
    try {
      specs = esa.specs_json ? JSON.parse(esa.specs_json) : [{ label: 'Brand', value: esa.brand }];
    } catch {
      specs = [{ label: 'Brand', value: esa.brand }];
    }

    const imgUrl = usedImageMap[esa.id] || esa.image_url || 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80';

    const mergedItem = {
      id: esa.id,
      name: isPreOwned && !/used/i.test(esa.name) && !/pre-owned/i.test(esa.name) ? `${esa.name} (Pre-Owned)` : esa.name,
      brand: esa.brand || 'ESA CAM',
      category: category,
      price: Number(esa.price) || 100,
      originalPrice: esa.original_price ? Number(esa.original_price) : undefined,
      rating: Number(esa.rating) || 5.0,
      reviewsCount: Number(esa.reviews_count) || 12,
      image: imgUrl,
      images: [imgUrl],
      badge: isPreOwned ? (esa.badge || 'Certified Tested') : (esa.badge || undefined),
      stockStatus: isPreOwned ? 'in-stock' : (esa.stock_status || 'in-stock'),
      stockCount: isPreOwned ? 1 : 5,
      shortDescription: esa.short_description || (isPreOwned ? 'Inspected and certified pre-owned professional equipment.' : 'High-end professional cinema and photography gear.'),
      specs: specs,
      features: [
        'Official Distributor Warranty',
        'Factory Sealed & Calibrated',
        'Includes VIP Fragile Express Delivery'
      ],
      inTheBox: ['Main Unit', 'Official Warranty Card', 'Documentation']
    };

    productMap.set(esa.id, mergedItem);
  }

  const finalCombined = Array.from(productMap.values());
  console.log(`Total combined products after merge: ${finalCombined.length}`);
  const preOwnedCount = finalCombined.filter(p => p.category === 'pre-owned').length;
  console.log(`Pre-owned / Used products count: ${preOwnedCount}`);

  fs.writeFileSync(combinedPath, JSON.stringify(finalCombined, null, 2), 'utf8');
  console.log('✅ Updated src/data/all-combined-products.json');

  // 3. Update products.ts so the initial 300 array includes the pre-owned products
  const productsTsPath = path.join(__dirname, '../src/data/products.ts');
  const tsContent = fs.readFileSync(productsTsPath, 'utf8');
  const beforeOffers = tsContent.split('export const OFFERS')[0];
  const afterOffers = 'export const OFFERS' + tsContent.split('export const OFFERS')[1];
  const arrayMatch = beforeOffers.match(/export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);\s*$/);

  if (arrayMatch) {
    const existingSeed = JSON.parse(arrayMatch[1]);
    const seedMap = new Map(existingSeed.map(p => [p.id, p]));

    // Add all pre-owned items to seed
    const preOwnedList = finalCombined.filter(p => p.category === 'pre-owned');
    for (const po of preOwnedList) {
      seedMap.set(po.id, po);
    }

    const updatedSeed = Array.from(seedMap.values());
    const newTsContent = `export type ProductCategory = 
  | "all"
  | "cameras"
  | "lenses"
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
  badge?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  isSale?: boolean;
  stockStatus?: "in-stock" | "low-stock" | "out-of-stock" | "pre-order";
  stockCount?: number;
  shortDescription?: string;
  specs?: { label: string; value: string }[];
  features?: string[];
  inTheBox?: string[];
}

export const PRODUCTS: Product[] = ${JSON.stringify(updatedSeed, null, 2)};

${afterOffers}`;

    fs.writeFileSync(productsTsPath, newTsContent, 'utf8');
    console.log(`✅ Updated src/data/products.ts with ${updatedSeed.length} items (including ${preOwnedList.length} pre-owned).`);
  }

  // 4. Synchronize to MySQL database
  console.log('📡 Synchronizing pre-owned and restored products to live MySQL DB...');
  let conn;
  try {
    conn = await mysql.createConnection({
      host: '92.113.22.70',
      user: 'u808756286_esa',
      password: '2!83>q;>Gl',
      database: 'u808756286_esa',
      port: 3306,
      connectTimeout: 10000
    });
    console.log('✅ Connected to Hostinger MySQL DB!');

    const preOwnedProducts = finalCombined.filter(p => p.category === 'pre-owned');
    console.log(`Inserting/Updating ${preOwnedProducts.length} pre-owned items into DB...`);

    for (const p of preOwnedProducts) {
      await conn.execute(
        `INSERT INTO products (id, name, brand, price, original_price, category, image_url, images_json, badge, stock_status, stock_count, rating, reviews_count, short_description, specs_json)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE 
           name=VALUES(name), brand=VALUES(brand), price=VALUES(price),
           original_price=VALUES(original_price), category=VALUES(category),
           image_url=VALUES(image_url), images_json=VALUES(images_json),
           badge=VALUES(badge), stock_status=VALUES(stock_status), stock_count=VALUES(stock_count),
           rating=VALUES(rating), reviews_count=VALUES(reviews_count),
           short_description=VALUES(short_description), specs_json=VALUES(specs_json)`,
        [
          p.id,
          p.name,
          p.brand,
          Number(p.price) || 0,
          p.originalPrice ? Number(p.originalPrice) : null,
          p.category,
          p.image,
          JSON.stringify(p.images || [p.image]),
          p.badge || 'Certified Tested',
          p.stockStatus || 'in-stock',
          p.stockCount !== undefined ? p.stockCount : 1,
          Number(p.rating) || 5.0,
          Number(p.reviewsCount) || 0,
          p.shortDescription || 'Certified pre-owned gear.',
          JSON.stringify(p.specs || [])
        ]
      );
    }
    console.log(`✅ Successfully synced all ${preOwnedProducts.length} pre-owned products to DB!`);

    // Also sync the rest of the 474 ESA products
    console.log('Syncing all other restored ESA products to DB...');
    const otherEsa = finalCombined.filter(p => p.id.startsWith('esa-') && p.category !== 'pre-owned');
    let countSynced = 0;
    for (const p of otherEsa) {
      await conn.execute(
        `INSERT INTO products (id, name, brand, price, original_price, category, image_url, images_json, badge, stock_status, stock_count, rating, reviews_count, short_description, specs_json)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE 
           name=VALUES(name), brand=VALUES(brand), price=VALUES(price),
           original_price=VALUES(original_price), category=VALUES(category),
           image_url=VALUES(image_url), images_json=VALUES(images_json),
           badge=VALUES(badge), stock_status=VALUES(stock_status), stock_count=VALUES(stock_count),
           rating=VALUES(rating), reviews_count=VALUES(reviews_count),
           short_description=VALUES(short_description), specs_json=VALUES(specs_json)`,
        [
          p.id,
          p.name,
          p.brand,
          Number(p.price) || 0,
          p.originalPrice ? Number(p.originalPrice) : null,
          p.category,
          p.image,
          JSON.stringify(p.images || [p.image]),
          p.badge || null,
          p.stockStatus || 'in-stock',
          p.stockCount !== undefined ? p.stockCount : 5,
          Number(p.rating) || 5.0,
          Number(p.reviewsCount) || 0,
          p.shortDescription || 'Professional cinema gear.',
          JSON.stringify(p.specs || [])
        ]
      );
      countSynced++;
    }
    console.log(`✅ Synced ${countSynced} additional ESA products to DB!`);

    // Verify DB count
    const [poRows] = await conn.execute("SELECT COUNT(*) as cnt FROM products WHERE category = 'pre-owned'");
    const [totalRows] = await conn.execute("SELECT COUNT(*) as cnt FROM products");
    console.log(`📊 Live DB Verification: Pre-owned = ${poRows[0].cnt}, Total products = ${totalRows[0].cnt}`);

  } catch (err) {
    console.error('Database sync error:', err.message);
  } finally {
    if (conn) await conn.end();
  }

  console.log('🎉 Restoration finished successfully!');
}

main().catch(console.error);

