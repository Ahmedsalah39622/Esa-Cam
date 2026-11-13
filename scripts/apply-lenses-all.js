const fs = require('fs');

const CSV_PATH = 'C:/Users/Ahmed Mahmoud/Downloads/lenses.csv';
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

const csvText = fs.readFileSync(CSV_PATH, 'utf8');
const lines = csvText.split('\n');

// الأعمدة في lenses.csv:
// col 1: image, col 2: compare href (product_id), col 3: name, col 10: stock, col 12: brand, col 28: price
const rows = lines.slice(1).filter(l => l.trim()).map(parseCSVLine);

const csvProducts = rows.map(r => {
  const idMatch = (r[2] || '').match(/product_id=(\d+)/);
  const id = idMatch ? 'icam-' + idMatch[1] : null;
  const priceRaw = r[28] || '';
  const price = priceRaw ? Number(priceRaw.replace(/,/g, '')) : null;
  const name = fixEncoding(r[3]);
  const stock = (r[10] || '').toLowerCase().includes('out') ? 'out-of-stock' : 'in-stock';
  const image = r[1] || '';
  const brand = r[12] || 'Generic';
  return { id, name, price, stock, image, brand };
}).filter(p => p.id && p.name);

console.log('إجمالي العدسات الصالحة في ملف CSV:', csvProducts.length);

const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
const catMap = new Map(catalog.map(p => [p.id, p]));

let priceUpdated = [];
let stockUpdated = [];
let addedProducts = [];

csvProducts.forEach(p => {
  const existing = catMap.get(p.id);

  if (existing) {
    // 1. تحديث وتأكيد السعر إذا كان متاحاً في المخزن ومختلفاً
    if (p.price !== null && p.stock === 'in-stock' && existing.price !== p.price) {
      priceUpdated.push({ id: p.id, name: p.name.substring(0, 50), old: existing.price, new: p.price });
      existing.price = p.price;
    }
    // 2. تحديث حالة المخزون لو اختلف
    if (p.stock === 'out-of-stock' && existing.stockStatus !== 'out-of-stock') {
      stockUpdated.push({ id: p.id, name: p.name.substring(0, 50), to: 'out-of-stock' });
      existing.stockStatus = 'out-of-stock';
      existing.stockCount = 0;
      existing.price = null;
      delete existing.originalPrice;
    } else if (p.stock === 'in-stock' && existing.stockStatus === 'out-of-stock') {
      stockUpdated.push({ id: p.id, name: p.name.substring(0, 50), to: 'in-stock' });
      existing.stockStatus = 'in-stock';
      existing.stockCount = 5;
      if (p.price) existing.price = p.price;
    }
    // 3. تحديث الصورة لو مش متوفرة أو Unsplash
    if (p.image && (!existing.image || existing.image.includes('unsplash'))) {
      existing.image = p.image;
      existing.images = [p.image];
    }
  } else {
    // 4. إضافة العدسة كمنتج جديد تماماً
    const newLens = {
      id: p.id,
      name: p.name,
      brand: p.brand,
      category: 'lenses',
      price: p.stock === 'out-of-stock' ? null : p.price,
      rating: 5,
      reviewsCount: 0,
      image: p.image,
      images: p.image ? [p.image] : [],
      stockStatus: p.stock,
      stockCount: p.stock === 'out-of-stock' ? 0 : 5,
      shortDescription: 'Professional camera lens with exceptional optical performance.',
      specs: [{ label: 'Brand', value: p.brand }],
      features: ['Official Distributor Warranty', 'Factory Sealed & Calibrated', 'Includes VIP Fragile Express Delivery'],
      inTheBox: ['Main Unit', 'Lens Hood', 'Front & Rear Caps', 'Official Warranty Card', 'Documentation']
    };
    catalog.push(newLens);
    catMap.set(p.id, newLens);
    addedProducts.push(newLens);
  }
});

fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2), 'utf8');

console.log('════════════════════════════════════════');
console.log('       تقرير معالجة وتحديث العدسات      ');
console.log('════════════════════════════════════════');
console.log('إجمالي العدسات المعالجة من الملف :', csvProducts.length);
console.log('أسعار تم تدقيقها وتحديثها        :', priceUpdated.length);
console.log('حالات مخزون تم تحديثها          :', stockUpdated.length);
console.log('عدسات جديدة تمت إضافتها للكاتالوج:', addedProducts.length);
console.log('إجمالي حجم الكاتالوج الكلي الآن  :', catalog.length);
console.log('════════════════════════════════════════');

if (priceUpdated.length) {
  console.log('\n💰 الأسعار المحدثة:');
  priceUpdated.forEach(p => console.log(`  - ${p.name}: ${p.old} → ${p.new} EGP`));
}

if (addedProducts.length) {
  console.log('\n✨ عينة من العدسات الجديدة التي أضيفت (أول 15):');
  addedProducts.slice(0, 15).forEach(p => {
    console.log(`  - [${p.id}] ${p.name.substring(0, 50)} | Brand: ${p.brand} | ${p.price ? p.price + ' EGP' : 'Out of stock'}`);
  });
}

