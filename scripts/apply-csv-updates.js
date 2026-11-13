const fs = require('fs');

const CSV_PATH = 'C:/Users/Ahmed Mahmoud/Downloads/icamstore (1).csv';
const CATALOG_PATH = 'src/data/all-combined-products.json';

// ── قراءة الـ CSV ─────────────────────────────────────────────────────────────
const csvText = fs.readFileSync(CSV_PATH, 'utf8');
const lines = csvText.split('\n');

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') { inQuotes = !inQuotes; }
    else if (ch === ',' && !inQuotes) { result.push(current.trim()); current = ''; }
    else { current += ch; }
  }
  result.push(current.trim());
  return result;
}

// category mapping من ICAM إلى نظامنا
function mapCategory(cat1, cat2) {
  const c = (cat1 + ' ' + cat2).toLowerCase();
  if (c.includes('camera') && (c.includes('action') || c.includes('360'))) return 'cameras';
  if (c.includes('camera') || c.includes('mirrorless') || c.includes('dslr') || c.includes('cinema') || c.includes('digital')) return 'cameras';
  if (c.includes('lens') || c.includes('lense')) return 'lenses';
  if (c.includes('lighting') || c.includes('light') || c.includes('flash') || c.includes('strobe')) return 'lighting';
  if (c.includes('tripod') || c.includes('monopod') || c.includes('stand')) return 'tripods';
  if (c.includes('gimbal') || c.includes('stabilizer') || c.includes('stabiliser')) return 'gimbals';
  if (c.includes('audio') || c.includes('microphone') || c.includes('mic') || c.includes('wireless')) return 'audio';
  if (c.includes('bag') || c.includes('backpack') || c.includes('case')) return 'accessories';
  if (c.includes('memory') || c.includes('card') || c.includes('storage') || c.includes('ssd')) return 'accessories';
  if (c.includes('drone') || c.includes('dji')) return 'cameras';
  if (c.includes('printer') || c.includes('instax')) return 'accessories';
  if (c.includes('monitor') || c.includes('display')) return 'accessories';
  if (c.includes('battery') || c.includes('charger') || c.includes('power')) return 'accessories';
  if (c.includes('filter')) return 'accessories';
  if (c.includes('rig') || c.includes('cage') || c.includes('support') || c.includes('matte box')) return 'accessories';
  if (c.includes('video') || c.includes('professional')) return 'cameras';
  return 'accessories';
}

// fix encoding مشاكل UTF-8
function fixEncoding(str) {
  return str
    .replace(/â€"/g, '–')
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"')
    .replace(/â€™/g, "'")
    .replace(/Ã©/g, 'é')
    .replace(/Ã /g, 'à')
    .trim();
}

const rows = lines.slice(1).filter(l => l.trim()).map(parseCSVLine);

const csvProducts = rows.map(r => {
  const compareUrl = r[2] || '';
  const idMatch = compareUrl.match(/product_id=(\d+)/);
  const id = idMatch ? 'icam-' + idMatch[1] : null;
  const priceRaw = r[9] || '';
  const price = priceRaw ? Number(priceRaw.replace(/,/g, '')) : null;
  const name = fixEncoding(r[3] || '');
  const stock = (r[8] || '').toLowerCase().includes('out') ? 'out-of-stock' : 'in-stock';
  const image = r[1] || '';
  const cat1 = r[4] || '';
  const cat2 = r[6] || '';
  const brand = r[14] || '';
  const category = mapCategory(cat1, cat2);
  return { id, name, price, stock, image, category, brand };
}).filter(p => p.id && p.name);

console.log('منتجات CSV صالحة:', csvProducts.length);

// ── قراءة الكاتالوج ───────────────────────────────────────────────────────────
const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
const catMap = new Map(catalog.map(p => [p.id, p]));

const priceUpdated = [];
const stockFixed = [];
const newProducts = [];

csvProducts.forEach(p => {
  const existing = catMap.get(p.id);

  if (existing) {
    // ── تحديث السعر لو اتغير ────────────────────────────────────────────────
    if (p.price !== null && existing.price !== p.price) {
      priceUpdated.push({ id: p.id, name: p.name.substring(0, 50), old: existing.price, new: p.price });
      existing.price = p.price;
    }
    // ── تحديث stock status ───────────────────────────────────────────────────
    if (p.stock === 'out-of-stock' && existing.stockStatus !== 'out-of-stock') {
      stockFixed.push({ id: p.id, name: p.name.substring(0, 50) });
      existing.stockStatus = 'out-of-stock';
      existing.stockCount = 0;
      existing.price = null;
      delete existing.originalPrice;
    }
  } else {
    // ── إضافة منتج جديد ───────────────────────────────────────────────────────
    const newProd = {
      id: p.id,
      name: p.name,
      brand: p.brand || 'Unknown',
      category: p.category,
      price: p.stock === 'out-of-stock' ? null : p.price,
      rating: 5,
      reviewsCount: 0,
      image: p.image,
      images: p.image ? [p.image] : [],
      stockStatus: p.stock,
      stockCount: p.stock === 'out-of-stock' ? 0 : 5,
      shortDescription: '',
      specs: p.brand ? [{ label: 'Brand', value: p.brand }] : [],
      features: ['Official Distributor Warranty', 'Factory Sealed & Calibrated', 'Includes VIP Fragile Express Delivery'],
      inTheBox: ['Main Unit', 'Official Warranty Card', 'Documentation'],
    };
    catMap.set(p.id, newProd);
    newProducts.push(newProd);
  }
});

// ── كتابة الكاتالوج المحدّث ───────────────────────────────────────────────────
const finalCatalog = Array.from(catMap.values());
fs.writeFileSync(CATALOG_PATH, JSON.stringify(finalCatalog, null, 2), 'utf8');

// ── التقرير ───────────────────────────────────────────────────────────────────
console.log('');
console.log('════════════════════════════════════════');
console.log('  تقرير التحديث من CSV');
console.log('════════════════════════════════════════');
console.log('إجمالي المنتجات بعد التحديث  :', finalCatalog.length);
console.log('أسعار اتحدثت                :', priceUpdated.length);
console.log('منتجات out-of-stock اتصلحت  :', stockFixed.length);
console.log('منتجات جديدة اتضافت         :', newProducts.length);
console.log('════════════════════════════════════════');

if (priceUpdated.length) {
  console.log('\n💰 الأسعار اللي اتحدثت:');
  priceUpdated.forEach(p => console.log('  ' + p.name + ': ' + p.old + ' → ' + p.new + ' EGP'));
}

if (stockFixed.length) {
  console.log('\n🚫 منتجات بقت out-of-stock وشُيل سعرها:');
  stockFixed.forEach(p => console.log('  ' + p.name));
}

if (newProducts.length) {
  console.log('\n✨ منتجات جديدة اتضافت (أول 20):');
  newProducts.slice(0, 20).forEach(p =>
    console.log('  [' + p.id + '] ' + p.name.substring(0,55) + ' | ' + (p.price ? p.price + ' EGP' : 'OOS') + ' | ' + p.stockStatus)
  );
  if (newProducts.length > 20) console.log('  ... و ' + (newProducts.length - 20) + ' أخرى');
}

console.log('\n✅ تم حفظ الكاتالوج في src/data/all-combined-products.json');

