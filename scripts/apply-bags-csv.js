const fs = require('fs');

const icam = JSON.parse(fs.readFileSync('scripts/icam-products-cache.json', 'utf8'));
const icamMap = new Map(icam.map(p => [String(p.id), p]));

const catalog = JSON.parse(fs.readFileSync('src/data/all-combined-products.json', 'utf8'));
const catMap = new Map(catalog.map(p => [p.id, p]));

const lines = fs.readFileSync('C:/Users/Ahmed Mahmoud/Downloads/bags.csv', 'utf8').split('\n');

function parseLine(line) {
  const result = []; let cur = ''; let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') inQ = !inQ;
    else if (c === ',' && !inQ) { result.push(cur.trim()); cur = ''; }
    else cur += c;
  }
  result.push(cur.trim());
  return result;
}

const rows = lines.slice(1).filter(l => l.trim()).map(parseLine);
let addedCount = 0;

rows.forEach(r => {
  const idMatch = (r[2] || '').match(/product_id=(\d+)/);
  if (idMatch) {
    const rawId = idMatch[1];
    const catId = 'icam-' + rawId;
    if (!catMap.has(catId)) {
      const icamItem = icamMap.get(rawId);
      const isOut = (r[10] || '').toLowerCase().includes('out');
      const price = icamItem?.prices?.price ? Number(icamItem.prices.price) : null;
      const brand = r[15] || icamItem?.brands?.[0]?.name || 'Generic';

      const newBag = {
        id: catId,
        name: r[3] || icamItem?.name,
        brand: brand,
        category: 'bags',
        price: isOut ? null : price,
        rating: 5,
        reviewsCount: 0,
        image: r[1] || (icamItem?.images?.[0]?.src || ''),
        images: r[1] ? [r[1]] : [],
        stockStatus: isOut ? 'out-of-stock' : 'in-stock',
        stockCount: isOut ? 0 : 5,
        shortDescription: 'Professional camera & equipment carrying case.',
        specs: [{ label: 'Brand', value: brand }],
        features: ['Official Distributor Warranty', 'Factory Sealed & Calibrated', 'Includes VIP Fragile Express Delivery'],
        inTheBox: ['Main Unit', 'Official Warranty Card', 'Documentation']
      };

      catalog.push(newBag);
      catMap.set(catId, newBag);
      addedCount++;
      console.log('✅ تم إضافة الشنطة الجديدة:', catId, newBag.name, '| السعر:', newBag.price);
    }
  }
});

fs.writeFileSync('src/data/all-combined-products.json', JSON.stringify(catalog, null, 2), 'utf8');
console.log('إجمالي الشنط المضافة:', addedCount);
console.log('إجمالي الكاتالوج الآن:', catalog.length);

