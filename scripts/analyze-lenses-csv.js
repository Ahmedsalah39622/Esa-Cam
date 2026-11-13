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

// col 1=image, 2=compareURL(ID), 3=name, 10=stock, 12=brand, 28=price
const rows = lines.slice(1).filter(l => l.trim()).map(parseCSVLine);

const csvProducts = rows.map(r => {
  const idMatch = (r[2] || '').match(/product_id=(\d+)/);
  const id = idMatch ? 'icam-' + idMatch[1] : null;
  const priceRaw = r[28] || '';
  const price = priceRaw ? Number(priceRaw.replace(/,/g, '')) : null;
  const name = fixEncoding(r[3]);
  const stock = (r[10] || '').toLowerCase().includes('out') ? 'out-of-stock' : 'in-stock';
  const image = r[1] || '';
  const brand = r[12] || '';
  return { id, name, price, stock, image, brand };
}).filter(p => p.id && p.name);

console.log('عدسات CSV صالحة:', csvProducts.length);

const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
const catMap = new Map(catalog.map(p => [p.id, p]));

const priceDiff = [], notInCatalog = [], outOfStock = [];
let priceMatch = 0;

csvProducts.forEach(p => {
  const cat = catMap.get(p.id);
  if (!cat) { notInCatalog.push(p); return; }

  if (p.stock === 'out-of-stock' && cat.price) {
    outOfStock.push({ id: p.id, name: p.name.substring(0, 45), price: cat.price });
  }

  if (p.price !== null && cat.price !== null && cat.price !== undefined) {
    if (p.price === cat.price) {
      priceMatch++;
    } else {
      priceDiff.push({ id: p.id, name: p.name.substring(0, 45), csv: p.price, cat: cat.price, diff: p.price - cat.price });
    }
  }
});

console.log('');
console.log('=== مقارنة عدسات CSV ===');
console.log('أسعار متطابقة:', priceMatch);
console.log('أسعار مختلفة:', priceDiff.length);
console.log('out-of-stock عندها سعر لازم يتشال:', outOfStock.length);
console.log('عدسات جديدة مش في الكاتالوج:', notInCatalog.length);

if (priceDiff.length) {
  console.log('');
  console.log('=== أسعار مختلفة ===');
  priceDiff.forEach(p => {
    const dir = p.diff > 0 ? 'ارتفع' : 'انخفض';
    console.log('  ' + p.name);
    console.log('  كاتالوجك: ' + p.cat + ' | CSV: ' + p.csv + ' EGP | ' + dir + ': ' + Math.abs(p.diff));
  });
}

if (outOfStock.length) {
  console.log('');
  console.log('=== out-of-stock محتاجة يتشال سعرها ===');
  outOfStock.forEach(p => console.log('  ' + p.name + ' | ' + p.price + ' EGP'));
}

if (notInCatalog.length) {
  console.log('');
  console.log('=== عدسات جديدة (أول 20) ===');
  notInCatalog.slice(0, 20).forEach(p => {
    const priceStr = p.price ? p.price + ' EGP' : 'Out of Stock';
    console.log('  [' + p.id + '] ' + p.name.substring(0, 55) + ' | ' + priceStr + ' | ' + p.stock);
  });
  if (notInCatalog.length > 20) console.log('  ... و ' + (notInCatalog.length - 20) + ' أخرى');
}

