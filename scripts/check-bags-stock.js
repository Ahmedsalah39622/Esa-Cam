const fs = require('fs');
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
let outOfStockMismatches = [];
let inStockMismatches = [];

rows.forEach(r => {
  const idMatch = (r[2] || '').match(/product_id=(\d+)/);
  if (idMatch) {
    const catId = 'icam-' + idMatch[1];
    const catItem = catMap.get(catId);
    if (catItem) {
      const isOutInCsv = (r[10] || '').toLowerCase().includes('out');
      if (isOutInCsv && catItem.stockStatus !== 'out-of-stock') {
        outOfStockMismatches.push({ id: catId, name: catItem.name, curPrice: catItem.price });
      } else if (!isOutInCsv && catItem.stockStatus === 'out-of-stock') {
        inStockMismatches.push({ id: catId, name: catItem.name });
      }
    }
  }
});

console.log('منتجات اتغيرت وبقت Out of stock:', outOfStockMismatches.length);
outOfStockMismatches.forEach(m => console.log('  -', m.id, m.name, '(سعره الحالي:', m.curPrice, ')'));
console.log('منتجات رجعت In stock:', inStockMismatches.length);

