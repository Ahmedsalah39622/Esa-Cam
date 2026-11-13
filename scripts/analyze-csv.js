const fs = require('fs');

// قراءة الـ CSV
const csvText = fs.readFileSync('C:/Users/Ahmed Mahmoud/Downloads/icamstore (1).csv', 'utf8');
const lines = csvText.split('\n');

console.log('إجمالي الصفوف:', lines.length);

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  result.push(current.trim());
  return result;
}

const rows = lines.slice(1).filter(l => l.trim()).map(parseCSVLine);
console.log('منتجات في الـ CSV:', rows.length);

const products = rows.map(r => {
  const compareUrl = r[2] || '';
  const idMatch = compareUrl.match(/product_id=(\d+)/);
  const id = idMatch ? 'icam-' + idMatch[1] : null;
  const priceRaw = r[9] || '';
  const price = priceRaw ? Number(priceRaw.replace(/,/g,'')) : null;
  const name = r[3] || '';
  const stock = r[8] || '';
  const image = r[1] || '';
  return { id, name, price, stock, image };
}).filter(p => p.id);

console.log('منتجات عندها ID:', products.length);

const catalog = JSON.parse(fs.readFileSync('src/data/all-combined-products.json','utf8'));
const catMap = new Map(catalog.map(p => [p.id, p]));

let priceDiff = [];
let notInCatalog = [];
let outOfStockCSV = [];
let priceMatch = 0;

products.forEach(p => {
  if (!p.id) return;
  const cat = catMap.get(p.id);
  if (!cat) { notInCatalog.push(p); return; }

  if (p.stock && p.stock.toLowerCase().includes('out')) {
    if (cat.price) outOfStockCSV.push({ id: p.id, name: p.name.substring(0,45), catPrice: cat.price });
  }

  if (p.price !== null && cat.price !== null && cat.price !== undefined) {
    if (p.price === cat.price) {
      priceMatch++;
    } else {
      priceDiff.push({
        id: p.id,
        name: p.name.substring(0,45),
        csvPrice: p.price,
        catPrice: cat.price,
        diff: p.price - cat.price
      });
    }
  }
});

console.log('');
console.log('=== مقارنة الأسعار ===');
console.log('أسعار متطابقة:', priceMatch);
console.log('أسعار مختلفة بين CSV والكاتالوج:', priceDiff.length);
console.log('منتجات out-of-stock في CSV لكن عندها سعر:', outOfStockCSV.length);
console.log('منتجات في CSV مش موجودة في كاتالوجك:', notInCatalog.length);
console.log('');

if (priceDiff.length) {
  console.log('=== أسعار محتاجة تتعدل (أول 20) ===');
  priceDiff.slice(0,20).forEach(p => {
    console.log('  ' + p.name);
    console.log('  CSV: ' + p.csvPrice + ' EGP | كاتالوجك: ' + p.catPrice + ' EGP | فرق: ' + p.diff);
  });
}

if (notInCatalog.length) {
  console.log('');
  console.log('=== منتجات في CSV مش موجودة عندك (أول 10) ===');
  notInCatalog.slice(0,10).forEach(p => {
    console.log('  ' + p.id + ' | ' + p.name.substring(0,50) + ' | سعر: ' + p.price + ' EGP | ' + p.stock);
  });
}

