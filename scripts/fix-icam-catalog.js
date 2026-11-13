// fix-icam-catalog.js
// السكريبت الصحيح لتنظيف الكاتالوغ ومطابقة الـ IDs وتصحيح الأسعار بالجنيه المصري
const fs = require('fs');
const path = require('path');

const ICAM_CACHE_PATH = path.join(process.cwd(), 'scripts', 'icam-products-cache.json');
const PREOWNED_PATH  = path.join(process.cwd(), 'scripts', 'restore-used-products.js');
const CATALOG_PATH   = path.join(process.cwd(), 'src', 'data', 'all-combined-products.json');

// ── تحميل البيانات ───────────────────────────────────────────────────────────
const icamRaw  = JSON.parse(fs.readFileSync(ICAM_CACHE_PATH, 'utf8'));
const catalog  = JSON.parse(fs.readFileSync(CATALOG_PATH,   'utf8'));

// بناء Map من ICAM بـ format: "icam-<id>"
const icamMap = new Map();
icamRaw.forEach(p => {
  const key = 'icam-' + p.id;
  const price     = p.prices ? Number(p.prices.price)         : null;
  const origPrice = p.prices ? Number(p.prices.regular_price) : null;
  const inStock   = p.is_in_stock === true;
  const img       = Array.isArray(p.images) && p.images.length > 0
                      ? (p.images[0].src || p.images[0].url || null)
                      : null;
  const imgs      = Array.isArray(p.images)
                      ? p.images.map(i => i.src || i.url).filter(Boolean)
                      : [];
  icamMap.set(key, { price, origPrice, inStock, img, imgs, name: p.name, id: p.id });
});

// قراءة pre-owned IDs
let preOwnedSet = new Set();
try {
  const txt   = fs.readFileSync(PREOWNED_PATH, 'utf8');
  const match = txt.match(/const preOwnedIds\s*=\s*new Set\(\[([\s\S]*?)\]\)/);
  if (match) {
    const ids = match[1].split(',').map(s => s.replace(/['"`\s]/g, '')).filter(Boolean);
    preOwnedSet = new Set(ids);
  }
} catch { console.warn('تحذير: لم نقدر نقرأ pre-owned IDs'); }

// ── تنظيف الكاتالوغ ──────────────────────────────────────────────────────────
const removed            = [];
const imageFixed         = [];
const priceFixed         = [];
const outOfStockStripped = [];

const cleaned = catalog.filter(product => {
  const icam      = icamMap.get(product.id);
  const isPreOwned = preOwnedSet.has(product.id);

  // شيل المنتج لو مش في ICAM ومش pre-owned
  if (!icam && !isPreOwned) {
    removed.push({ id: product.id, name: product.name });
    return false;
  }

  if (icam) {
    // ── تصحيح الصورة ──────────────────────────────────────────────────────
    if (icam.img && product.image !== icam.img) {
      imageFixed.push({ id: product.id, old: product.image, new: icam.img });
      product.image  = icam.img;
      product.images = icam.imgs.length ? icam.imgs : [icam.img];
    } else if (icam.imgs.length) {
      product.images = icam.imgs;
    }

    // ── تصحيح السعر (EGP من ICAM مباشرة) ────────────────────────────────
    if (icam.price !== null && product.price !== icam.price) {
      priceFixed.push({ id: product.id, name: product.name, old: product.price, new: icam.price });
      product.price = icam.price;
    }
    if (icam.origPrice && icam.origPrice !== icam.price && product.originalPrice !== icam.origPrice) {
      product.originalPrice = icam.origPrice;
    } else if (!icam.origPrice || icam.origPrice === icam.price) {
      delete product.originalPrice;
    }

    // تحديث حالة المخزون
    product.stockStatus = icam.inStock ? 'in-stock' : 'out-of-stock';
    product.stockCount  = icam.inStock ? (product.stockCount || 5) : 0;
  }

  // ── شيل السعر لو out-of-stock ─────────────────────────────────────────
  if (product.stockStatus === 'out-of-stock') {
    if (product.price != null) {
      outOfStockStripped.push({ id: product.id, name: product.name, price: product.price });
      product.price = null;
    }
    delete product.originalPrice;
    // تعيين badge
    if (product.badge && product.badge.toLowerCase().includes('stock')) delete product.badge;
  } else {
    // حساب badge الخصم لو في originalPrice
    if (product.originalPrice && product.originalPrice > product.price) {
      const pct = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
      product.badge = 'SAVE ' + pct + '%';
    } else {
      delete product.badge;
    }
  }

  return true;
});

// ── كتابة الملف ──────────────────────────────────────────────────────────────
fs.writeFileSync(CATALOG_PATH, JSON.stringify(cleaned, null, 2), 'utf8');

// ── التقرير ──────────────────────────────────────────────────────────────────
console.log('\n════════════════════════════════════════');
console.log('  تقرير تنظيف الكاتالوغ');
console.log('════════════════════════════════════════');
console.log(`إجمالي المنتجات بعد التنظيف : ${cleaned.length}`);
console.log(`منتجات محذوفة (مش في ICAM)  : ${removed.length}`);
console.log(`صور تم تصحيحها              : ${imageFixed.length}`);
console.log(`أسعار تم تصحيحها (→ EGP)   : ${priceFixed.length}`);
console.log(`منتجات شُيل سعرها (OOS)     : ${outOfStockStripped.length}`);
console.log('════════════════════════════════════════\n');

if (removed.length) {
  console.log(`📦 أول 10 منتجات محذوفة:`);
  removed.slice(0, 10).forEach(p => console.log(`  - [${p.id}] ${p.name}`));
  if (removed.length > 10) console.log(`  ... و ${removed.length - 10} أخرى`);
}
if (priceFixed.length) {
  console.log(`\n💰 عينة تصحيح الأسعار (أول 10):`);
  priceFixed.slice(0, 10).forEach(p =>
    console.log(`  - ${p.name ? p.name.substring(0,45) : p.id}: ${p.old} → ${p.new} EGP`)
  );
}
if (outOfStockStripped.length) {
  console.log(`\n🚫 عينة منتجات شُيل سعرها (أول 10):`);
  outOfStockStripped.slice(0, 10).forEach(p =>
    console.log(`  - ${p.name ? p.name.substring(0,45) : p.id}: ${p.price} EGP → null`)
  );
}

// كتابة تقرير markdown
const md = [
  '# تقرير تنظيف الكاتالوغ',
  '',
  `| البند | العدد |`,
  `|-------|-------|`,
  `| إجمالي المنتجات بعد التنظيف | ${cleaned.length} |`,
  `| منتجات محذوفة (مش في ICAM) | ${removed.length} |`,
  `| صور تم تصحيحها | ${imageFixed.length} |`,
  `| أسعار تم تصحيحها (→ EGP) | ${priceFixed.length} |`,
  `| منتجات شُيل سعرها (Out of Stock) | ${outOfStockStripped.length} |`,
  '',
];
if (removed.length) {
  md.push('## منتجات محذوفة', '| ID | الاسم |', '|---|---|');
  removed.forEach(p => md.push(`| ${p.id} | ${p.name} |`));
  md.push('');
}
if (priceFixed.length) {
  md.push('## تصحيح الأسعار', '| ID | الاسم | السعر القديم | السعر الجديد (EGP) |', '|---|---|---|---|');
  priceFixed.forEach(p => md.push(`| ${p.id} | ${p.name} | ${p.old} | ${p.new} |`));
  md.push('');
}
if (outOfStockStripped.length) {
  md.push('## منتجات شُيل سعرها (Out of Stock)', '| ID | الاسم | السعر المحذوف |', '|---|---|---|');
  outOfStockStripped.forEach(p => md.push(`| ${p.id} | ${p.name} | ${p.price} EGP |`));
}

fs.writeFileSync(path.join(process.cwd(), 'scripts', 'fix-icam-report.md'), md.join('\n'), 'utf8');
console.log('\n✅ تم الحفظ. التقرير في scripts/fix-icam-report.md');

