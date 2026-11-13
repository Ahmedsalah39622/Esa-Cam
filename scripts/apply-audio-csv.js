const fs = require('fs');

const CSV_PATH = 'C:/Users/Ahmed Mahmoud/Downloads/icamstore (3).csv';
const CATALOG_PATH = 'src/data/all-combined-products.json';

function parseCSVLine(line) {
  const result = []; let current = ''; let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') { inQuotes = !inQuotes; }
    else if (ch === ',' && !inQuotes) { result.push(current.trim()); current = ''; }
    else { current += ch; }
  }
  result.push(current.trim()); return result;
}

function fixEncoding(str) {
  return (str || '')
    .replace(/â€"/g, '–').replace(/â€œ/g, '"').replace(/â€/g, '"')
    .replace(/â€™/g, "'").replace(/Ã©/g, 'é').trim();
}

function mapCategory(cat1, cat2) {
  const c = ((cat1 || '') + ' ' + (cat2 || '')).toLowerCase();
  if (c.includes('audio') || c.includes('mic') || c.includes('sound') || c.includes('headphone') || c.includes('speaker')) return 'audio';
  if (c.includes('camera') || c.includes('action') || c.includes('cam')) return 'cameras';
  if (c.includes('lens')) return 'lenses';
  if (c.includes('lighting') || c.includes('light') || c.includes('flash')) return 'lighting';
  if (c.includes('gimbal') || c.includes('stabilizer')) return 'gimbals';
  if (c.includes('tripod') || c.includes('stand')) return 'tripods';
  if (c.includes('bag') || c.includes('case')) return 'bags';
  return 'audio';
}

const csvText = fs.readFileSync(CSV_PATH, 'utf8');
const lines = csvText.split('\n');

const rows = lines.slice(1).filter(l => l.trim()).map(parseCSVLine);

// 1: image, 2: compare href (product_id), 3: name, 4: cat1, 6: cat2, 9: stock, 10: price, 15: brand
const csvProducts = rows.map(r => {
  const idMatch = (r[2] || '').match(/product_id=(\d+)/);
  const id = idMatch ? 'icam-' + idMatch[1] : null;
  const priceRaw = r[10] || '';
  const price = priceRaw ? Number(priceRaw.replace(/,/g, '')) : null;
  const name = fixEncoding(r[3]);
  const stock = (r[9] || '').toLowerCase().includes('out') ? 'out-of-stock' : 'in-stock';
  const image = r[1] || '';
  const brand = r[15] || 'Generic';
  const category = mapCategory(r[4], r[6]);
  return { id, name, price, stock, image, brand, category };
}).filter(p => p.id && p.name);

console.log('إجمالي المنتجات في الملف الصالحة:', csvProducts.length);

const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
const catMap = new Map(catalog.map(p => [p.id, p]));

let priceUpdated = [];
let stockUpdated = [];
let newAdded = [];

csvProducts.forEach(p => {
  const existing = catMap.get(p.id);
  if (existing) {
    // تحديث السعر
    if (p.price !== null && p.stock === 'in-stock' && existing.price !== p.price) {
      priceUpdated.push({ id: p.id, name: p.name.substring(0, 45), old: existing.price, new: p.price });
      existing.price = p.price;
    }
    // تحديث حالة المخزون لو اختلف
    if (p.stock === 'out-of-stock' && existing.stockStatus !== 'out-of-stock') {
      stockUpdated.push({ id: p.id, name: p.name.substring(0, 45), to: 'out-of-stock' });
      existing.stockStatus = 'out-of-stock';
      existing.stockCount = 0;
      existing.price = null;
      delete existing.originalPrice;
    } else if (p.stock === 'in-stock' && existing.stockStatus === 'out-of-stock') {
      stockUpdated.push({ id: p.id, name: p.name.substring(0, 45), to: 'in-stock' });
      existing.stockStatus = 'in-stock';
      existing.stockCount = 5;
      if (p.price) existing.price = p.price;
    }
    // تحديث الصورة لو مش متوفرة
    if (p.image && (!existing.image || existing.image.includes('unsplash'))) {
      existing.image = p.image;
      existing.images = [p.image];
    }
  } else {
    // إضافة منتج جديد
    const newProd = {
      id: p.id,
      name: p.name,
      brand: p.brand,
      category: p.category,
      price: p.stock === 'out-of-stock' ? null : p.price,
      rating: 5,
      reviewsCount: 0,
      image: p.image,
      images: p.image ? [p.image] : [],
      stockStatus: p.stock,
      stockCount: p.stock === 'out-of-stock' ? 0 : 5,
      shortDescription: 'Professional studio & audio equipment.',
      specs: [{ label: 'Brand', value: p.brand }],
      features: ['Official Distributor Warranty', 'Factory Sealed & Calibrated', 'Includes VIP Fragile Express Delivery'],
      inTheBox: ['Main Unit', 'Official Warranty Card', 'Documentation']
    };
    catalog.push(newProd);
    catMap.set(p.id, newProd);
    newAdded.push(newProd);
  }
});

fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2), 'utf8');

console.log('=== ملخص المعالجة ===');
console.log('أسعار تم تحديثها:', priceUpdated.length);
console.log('حالات مخزون تم تعديلها:', stockUpdated.length);
console.log('منتجات جديدة أضيفت:', newAdded.length);
console.log('إجمالي الكاتالوج الآن:', catalog.length);

if (priceUpdated.length) {
  console.log('\n💰 عينة من الأسعار المحدثة:');
  priceUpdated.slice(0, 10).forEach(p => console.log(`  - ${p.name}: ${p.old} → ${p.new} EGP`));
}

if (newAdded.length) {
  console.log('\n✨ عينة من المنتجات الجديدة:');
  newAdded.slice(0, 10).forEach(p => console.log(`  - [${p.id}] ${p.name.substring(0, 45)} | Brand: ${p.brand} | ${p.price ? p.price + ' EGP' : 'Out of stock'}`));
}

