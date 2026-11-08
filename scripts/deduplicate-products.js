const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

const jsonPath = path.join(__dirname, '../src/data/all-combined-products.json');
const products = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

console.log('==================================================');
console.log('🧹 STARTING DEDUPLICATION OF PRODUCTS');
console.log('==================================================');
console.log(`Initial total products: ${products.length}`);

// Protected IDs referenced in UI code
const protectedIds = new Set([
  'fujifilm-x-t5-used',
  'esa-637', 'esa-5745', 'esa-5735', 'esa-5729',
  'icam-62091', 'icam-48665', 'icam-55125', 'icam-11631',
  'esa-5746', 'esa-5747'
]);

function normalizeName(name) {
  if (!name) return '';
  return name
    .toLowerCase()
    .replace(/&amp;/g, '&')
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, '-')
    .replace(/&#8217;/g, "'")
    .replace(/[–—−]/g, '-')
    .replace(/[()]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanHtmlText(str) {
  if (!str) return '';
  return str
    .replace(/&amp;/g, '&')
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, '-')
    .replace(/&#8217;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

// Group products by normalized name
const groups = new Map();
for (const p of products) {
  const norm = normalizeName(p.name);
  if (!groups.has(norm)) {
    groups.set(norm, []);
  }
  groups.get(norm).push(p);
}

console.log(`Unique product groups found: ${groups.size}`);
console.log(`Redundant products to be removed: ${products.length - groups.size}`);

const mergedProducts = [];
const idsToDeleteFromDb = [];

for (const [norm, group] of groups.entries()) {
  if (group.length === 1) {
    // Single product, keep as-is (clean up html entities in name)
    const single = group[0];
    single.name = cleanHtmlText(single.name);
    mergedProducts.push(single);
    continue;
  }

  // Multiple duplicates for this product!
  // 1. Choose primary item
  let primary = group[0];

  // If one item is protected, it MUST be primary
  const protectedItem = group.find(item => protectedIds.has(item.id));
  if (protectedItem) {
    primary = protectedItem;
  } else {
    // Prefer item with real price (> 100 placeholder), working image, and esa- prefix
    group.sort((a, b) => {
      // Score each item
      const score = (item) => {
        let s = 0;
        if (protectedIds.has(item.id)) s += 1000;
        if (item.category === 'pre-owned') s += 500;
        if (item.id.startsWith('esa-')) s += 50; // Brand preference
        if (Number(item.price) > 100) s += 40; // Real price vs 100 placeholder
        if (item.image && item.image.includes('icamstore.net')) s += 20; // Real CDN image
        if (item.stockStatus === 'in-stock') s += 10;
        if (item.shortDescription && item.shortDescription.length > 50) s += 5;
        return s;
      };
      return score(b) - score(a);
    });
    primary = group[0];
  }

  // 2. Mark other IDs to be deleted from DB
  const duplicateOthers = group.filter(item => item.id !== primary.id);
  duplicateOthers.forEach(item => idsToDeleteFromDb.push(item.id));

  // 3. Merge best attributes into primary
  // Name
  primary.name = cleanHtmlText(primary.name);

  // Price: if primary price is 100 placeholder but another duplicate has real price, use that!
  if (Number(primary.price) <= 100) {
    const betterPriceItem = group.find(item => Number(item.price) > 100);
    if (betterPriceItem) {
      primary.price = Number(betterPriceItem.price);
      primary.originalPrice = betterPriceItem.originalPrice ? Number(betterPriceItem.originalPrice) : primary.originalPrice;
    }
  }

  // Image: if primary image is broken/unsplash but another item has a direct icamstore CDN image, adopt it
  if (!primary.image || primary.image.includes('unsplash.com') || primary.image.includes('img_')) {
    const betterImgItem = group.find(item => item.image && item.image.includes('icamstore.net'));
    if (betterImgItem) {
      primary.image = betterImgItem.image;
    }
  }

  // Images array: combine all valid unique images
  const allImages = new Set();
  group.forEach(item => {
    if (item.image) allImages.add(item.image);
    if (Array.isArray(item.images)) {
      item.images.forEach(img => allImages.add(img));
    }
  });
  primary.images = Array.from(allImages);

  // Brand: if primary brand is "ESA CAM" but another has specific brand (e.g. Sony, Canon), adopt it
  if (primary.brand === 'ESA CAM') {
    const betterBrandItem = group.find(item => item.brand && item.brand !== 'ESA CAM');
    if (betterBrandItem) {
      primary.brand = betterBrandItem.brand;
    }
  }

  // Category: prefer specific category over 'accessories' if one of the duplicates has 'cameras' or 'lenses'
  if (primary.category === 'accessories') {
    const betterCatItem = group.find(item => item.category === 'cameras' || item.category === 'lenses' || item.category === 'lighting' || item.category === 'audio');
    if (betterCatItem) {
      primary.category = betterCatItem.category;
    }
  }

  // Stock: if any duplicate was in-stock, ensure primary is in-stock
  if (group.some(item => item.stockStatus === 'in-stock')) {
    primary.stockStatus = 'in-stock';
    primary.stockCount = Math.max(...group.map(item => Number(item.stockCount ?? 5)));
  }

  // Specs: use the most detailed specs array
  const richestSpecsItem = group.reduce((prev, curr) => {
    const prevCount = Array.isArray(prev.specs) ? prev.specs.length : 0;
    const currCount = Array.isArray(curr.specs) ? curr.specs.length : 0;
    return currCount > prevCount ? curr : prev;
  }, primary);
  primary.specs = richestSpecsItem.specs || primary.specs || [];

  // Description: use the longer description
  const richestDescItem = group.reduce((prev, curr) => {
    const prevLen = (prev.shortDescription || '').length;
    const currLen = (curr.shortDescription || '').length;
    return currLen > prevLen ? curr : prev;
  }, primary);
  primary.shortDescription = richestDescItem.shortDescription || primary.shortDescription;

  mergedProducts.push(primary);
}

console.log(`\n✅ Finished merging products.`);
console.log(`Deduplicated product count: ${mergedProducts.length}`);
console.log(`Total duplicate IDs to remove: ${idsToDeleteFromDb.length}`);

// Write deduplicated list back to all-combined-products.json
fs.writeFileSync(jsonPath, JSON.stringify(mergedProducts, null, 2), 'utf8');
console.log(`✅ Saved deduplicated catalog to src/data/all-combined-products.json`);

// Also update products.ts (seed list)
const productsTsPath = path.join(__dirname, '../src/data/products.ts');
const tsContent = fs.readFileSync(productsTsPath, 'utf8');
const beforeOffers = tsContent.split('export const OFFERS')[0];
const afterOffers = 'export const OFFERS' + tsContent.split('export const OFFERS')[1];
const arrayMatch = beforeOffers.match(/export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);\s*$/);

if (arrayMatch) {
  const existingSeed = JSON.parse(arrayMatch[1]);
  // Filter out any IDs that were deleted
  const deletedSet = new Set(idsToDeleteFromDb);
  const updatedSeed = existingSeed.filter(p => !deletedSet.has(p.id));

  // Merge any updated attributes from mergedProducts
  const mergedMap = new Map(mergedProducts.map(p => [p.id, p]));
  const finalSeed = updatedSeed.map(p => mergedMap.get(p.id) || p);

  const prefixPart = beforeOffers.substring(0, arrayMatch.index);
  const newTsContent = `${prefixPart}export const PRODUCTS: Product[] = ${JSON.stringify(finalSeed, null, 2)};\n\n${afterOffers}`;
  fs.writeFileSync(productsTsPath, newTsContent, 'utf8');
  console.log(`✅ Updated src/data/products.ts with deduplicated seed (${finalSeed.length} items).`);
}

// Now synchronize changes with live MySQL database
async function syncDatabase() {
  console.log('\n📡 Connecting to live MySQL database (Hostinger)...');
  const conn = await mysql.createConnection({
    host: '92.113.22.70',
    user: 'u808756286_esa',
    password: '2!83>q;>Gl',
    database: 'u808756286_esa',
    port: 3306,
    connectTimeout: 10000
  });

  console.log(`🗑️ Deleting ${idsToDeleteFromDb.length} redundant duplicate product rows from DB...`);
  // Delete in batches of 50 to avoid query size limits
  const batchSize = 50;
  let deletedCount = 0;
  for (let i = 0; i < idsToDeleteFromDb.length; i += batchSize) {
    const chunk = idsToDeleteFromDb.slice(i, i + batchSize);
    const placeholders = chunk.map(() => '?').join(',');
    const [result] = await conn.execute(`DELETE FROM products WHERE id IN (${placeholders})`, chunk);
    deletedCount += result.affectedRows;
  }
  console.log(`✅ Deleted ${deletedCount} duplicate rows from DB table products!`);

  // Update primary products in DB with merged attributes (price, image, specs, stock)
  console.log('🔄 Updating primary merged products in DB...');
  const productsToUpdate = mergedProducts.filter(p => {
    // Only update if it was part of a duplicate group
    const norm = normalizeName(p.name);
    return groups.get(norm).length > 1;
  });

  for (const p of productsToUpdate) {
    await conn.execute(
      `UPDATE products 
       SET name = ?, brand = ?, price = ?, original_price = ?, category = ?,
           image_url = ?, images_json = ?, stock_status = ?, stock_count = ?,
           short_description = ?, specs_json = ?
       WHERE id = ?`,
      [
        p.name,
        p.brand,
        Number(p.price) || 0,
        p.originalPrice ? Number(p.originalPrice) : null,
        p.category,
        p.image,
        JSON.stringify(p.images || [p.image]),
        p.stockStatus || 'in-stock',
        Number(p.stockCount ?? 5),
        p.shortDescription || 'Professional cinema gear.',
        JSON.stringify(p.specs || []),
        p.id
      ]
    );
  }
  console.log(`✅ Updated ${productsToUpdate.length} primary products with best merged data.`);

  // Final verification from DB
  const [totalAfter] = await conn.execute('SELECT COUNT(*) as cnt FROM products');
  const [dupsAfter] = await conn.execute(`
    SELECT LOWER(TRIM(name)) as norm_name, COUNT(*) as cnt
    FROM products
    GROUP BY LOWER(TRIM(name))
    HAVING cnt > 1
  `);

  console.log('==================================================');
  console.log(`📊 DB STATUS AFTER DEDUPLICATION:`);
  console.log(`- Total products in DB: ${totalAfter[0].cnt}`);
  console.log(`- Duplicate names remaining in DB: ${dupsAfter.length}`);
  console.log('==================================================');

  await conn.end();
}

syncDatabase().then(() => {
  console.log('🎉 All duplicates cleaned and synchronized successfully!');
}).catch(err => {
  console.error('Database deduplication error:', err);
});

