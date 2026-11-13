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

let inCatalog = 0;
let notInCatalog = 0;
let hasPriceInIcam = 0;
const sampleNew = [];

rows.forEach(r => {
  const idMatch = (r[2] || '').match(/product_id=(\d+)/);
  if (idMatch) {
    const rawId = idMatch[1];
    const catId = 'icam-' + rawId;
    if (catMap.has(catId)) {
      inCatalog++;
    } else {
      notInCatalog++;
      const icamItem = icamMap.get(rawId);
      const price = icamItem?.prices?.price || null;
      if (price) hasPriceInIcam++;
      sampleNew.push({
        id: catId,
        name: r[3],
        brand: r[15],
        stock: r[10],
        price: price ? price + ' EGP' : 'غير متوفر سعره في الكاش'
      });
    }
  }
});

console.log('=== فحص ملف bags.csv ===');
console.log('إجمالي الصفوف في الملف:', rows.length);
console.log('موجودة بالفعل في الكاتالوج:', inCatalog);
console.log('شنط جديدة مش موجودة في الكاتالوج:', notInCatalog);
console.log('منها شنط ليها سعر في كاش ICAM:', hasPriceInIcam);
console.log('');
console.log('=== عينة من الشنط الجديدة ===');
sampleNew.slice(0, 10).forEach(s => {
  console.log(`[${s.id}] ${s.name?.substring(0, 45)} | Brand: ${s.brand} | Stock: ${s.stock} | Price: ${s.price}`);
});

