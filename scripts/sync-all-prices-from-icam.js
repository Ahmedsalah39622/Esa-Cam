const https = require('https');
const fs = require('fs');
const mysql = require('mysql2/promise');

const TOTAL_PAGES = 28;
const PER_PAGE = 100;
const RATE_EGP_TO_USD = 50.5;

function decodeHtml(html) {
  return html
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8243;/g, '"')
    .replace(/&#215;/g, 'x')
    .replace(/&#8211;/g, '-')
    .replace(/&#8212;/g, '-');
}

function normalizeTitle(title) {
  return decodeHtml(title || '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function fetchPage(page, retries = 3) {
  return new Promise((resolve, reject) => {
    const url = `https://icamstore.net/wp-json/wc/store/v1/products?per_page=${PER_PAGE}&page=${page}`;
    const req = https.get(
      url,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'application/json'
        },
        timeout: 20000
      },
      res => {
        if (res.statusCode !== 200) {
          if (retries > 0) {
            console.log(`[Retry] Page ${page} failed with status ${res.statusCode}, retrying...`);
            setTimeout(() => resolve(fetchPage(page, retries - 1)), 2000);
            return;
          }
          reject(new Error(`Failed to fetch page ${page}: status ${res.statusCode}`));
          return;
        }

        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          try {
            const data = JSON.parse(body);
            resolve(data);
          } catch (err) {
            if (retries > 0) {
              console.log(`[Retry] JSON parse failed on page ${page}, retrying...`);
              setTimeout(() => resolve(fetchPage(page, retries - 1)), 2000);
            } else {
              reject(err);
            }
          }
        });
      }
    );

    req.on('timeout', () => {
      req.destroy();
      if (retries > 0) {
        setTimeout(() => resolve(fetchPage(page, retries - 1)), 2000);
      } else {
        reject(new Error(`Timeout on page ${page}`));
      }
    });

    req.on('error', err => {
      if (retries > 0) {
        setTimeout(() => resolve(fetchPage(page, retries - 1)), 2000);
      } else {
        reject(err);
      }
    });
  });
}

// Optical filter detection rules
const filterRegex = /\b(filter|filters|cpl|polarizer|polarizing|uv filter|nd filter|variable nd|vnd|black mist|mist filter|white mist|diffusion filter|neutral density|ir cut|streak filter|anamorphic filter|star filter|close up filter|macro filter|protection filter|light pollution)\b/i;
const excludeFilterRegex = /\b(matte box|adapter ring|step-up ring|step-down ring|filter tray|filter holder|cleaning kit|filter wrench|lens body|lens kit)\b/i;

function isOpticalFilter(name) {
  return filterRegex.test(name) && !excludeFilterRegex.test(name);
}

async function scrapeAllIcam() {
  const cacheFile = 'scripts/icam-products-cache.json';
  if (fs.existsSync(cacheFile)) {
    console.log(`Loading cached icam products from ${cacheFile}...`);
    return JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
  }

  console.log(`Fetching ${TOTAL_PAGES} pages from icamstore.net...`);
  const allItems = [];
  const concurrency = 4;

  for (let i = 1; i <= TOTAL_PAGES; i += concurrency) {
    const batch = [];
    for (let p = i; p < i + concurrency && p <= TOTAL_PAGES; p++) {
      batch.push(
        fetchPage(p).then(items => {
          console.log(`  ✓ Page ${p}/${TOTAL_PAGES} fetched (${items.length} items)`);
          return items;
        })
      );
    }
    const results = await Promise.all(batch);
    results.forEach(items => allItems.push(...items));
    // small breather between batches
    await new Promise(r => setTimeout(r, 400));
  }

  console.log(`Total items scraped from icam: ${allItems.length}`);
  fs.writeFileSync(cacheFile, JSON.stringify(allItems), 'utf8');
  return allItems;
}

async function main() {
  const icamItems = await scrapeAllIcam();

  // Index icam items
  const icamById = new Map();
  const icamByTitle = new Map();

  for (const item of icamItems) {
    icamById.set(String(item.id), item);
    const norm = normalizeTitle(item.name);
    if (norm) {
      icamByTitle.set(norm, item);
    }
  }

  // Load existing products
  const productsPath = 'src/data/all-combined-products.json';
  const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  console.log(`Loaded ${products.length} catalog products from ${productsPath}`);

  let updatedPricesCount = 0;
  let reclassifiedFiltersCount = 0;
  let preservedUsedCount = 0;
  const updatesForDb = [];

  for (const prod of products) {
    let wasFilter = false;
    let wasPriceUpdated = false;

    // Check optical filters
    if (isOpticalFilter(prod.name)) {
      if (prod.category !== 'filters') {
        prod.category = 'filters';
        reclassifiedFiltersCount++;
      }
      wasFilter = true;
    }

    // Preserve pre-owned
    if (prod.category === 'pre-owned') {
      preservedUsedCount++;
      if (wasFilter) {
        updatesForDb.push({
          id: prod.id,
          category: prod.category,
          price: prod.price,
          originalPrice: prod.originalPrice || null,
          badge: prod.badge || null
        });
      }
      continue;
    }

    // Match with icam
    let icamMatch = null;
    if (prod.id.startsWith('icam-')) {
      const rawId = prod.id.replace('icam-', '');
      icamMatch = icamById.get(rawId);
    }
    if (!icamMatch) {
      const norm = normalizeTitle(prod.name);
      icamMatch = icamByTitle.get(norm);
    }

    if (icamMatch && icamMatch.prices) {
      const rawPrice = Number(icamMatch.prices.price) || 0;
      const rawRegular = Number(icamMatch.prices.regular_price) || rawPrice;
      const minor = icamMatch.prices.currency_minor_unit || 0;

      const realEgp = minor > 0 ? rawPrice / Math.pow(10, minor) : rawPrice;
      const regularEgp = minor > 0 ? rawRegular / Math.pow(10, minor) : rawRegular;

      if (realEgp > 0) {
        const newUsdPrice = Number((realEgp / RATE_EGP_TO_USD).toFixed(2));
        let newUsdOriginal = null;
        let newBadge = prod.badge;

        if (regularEgp > realEgp) {
          newUsdOriginal = Number((regularEgp / RATE_EGP_TO_USD).toFixed(2));
          const discountPct = Math.round((1 - realEgp / regularEgp) * 100);
          newBadge = `SAVE ${discountPct}%`;
        } else if (newBadge && newBadge.includes('SAVE')) {
          newBadge = undefined;
        }

        if (prod.price !== newUsdPrice || prod.originalPrice !== newUsdOriginal || wasFilter) {
          prod.price = newUsdPrice;
          if (newUsdOriginal) {
            prod.originalPrice = newUsdOriginal;
          } else {
            delete prod.originalPrice;
          }
          if (newBadge) {
            prod.badge = newBadge;
          } else {
            delete prod.badge;
          }
          updatedPricesCount++;
          wasPriceUpdated = true;
        }
      }
    }

    if (wasPriceUpdated || wasFilter) {
      updatesForDb.push({
        id: prod.id,
        category: prod.category,
        price: prod.price,
        originalPrice: prod.originalPrice || null,
        badge: prod.badge || null
      });
    }
  }

  console.log(`\nCatalog update summary:`);
  console.log(`- Total products: ${products.length}`);
  console.log(`- Filter products re-categorized to 'filters': ${reclassifiedFiltersCount}`);
  console.log(`- Products with prices updated: ${updatedPricesCount}`);
  console.log(`- Pre-owned items safely preserved: ${preservedUsedCount}`);
  console.log(`- Total items needing DB update: ${updatesForDb.length}`);

  // Save back to JSON
  fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), 'utf8');
  console.log(`Saved updated catalog to ${productsPath}`);

  // Also update src/data/products.ts
  const tsPath = 'src/data/products.ts';
  const existingTs = fs.readFileSync(tsPath, 'utf8');
  const headerMarker = 'export const PRODUCTS: Product[] = [';
  const header = existingTs.slice(0, existingTs.indexOf(headerMarker) + headerMarker.length);
  const newTsContent = `${header}\n${JSON.stringify(products, null, 2).slice(2, -2)}\n];\n\nexport const OFFERS: Product[] = [];\n`;
  fs.writeFileSync(tsPath, newTsContent, 'utf8');
  console.log(`Updated ${tsPath} with matching products catalog`);

  console.log(`\nConnecting to live MySQL database...`);
  const conn = await mysql.createConnection({
    host: '92.113.22.70',
    port: 3306,
    user: 'u808756286_esa',
    password: '2!83>q;>Gl',
    database: 'u808756286_esa'
  });

  console.log(`Connected. Applying ${updatesForDb.length} updates in bulk batches...`);
  const BATCH_SIZE = 250;
  for (let i = 0; i < updatesForDb.length; i += BATCH_SIZE) {
    const chunk = updatesForDb.slice(i, i + BATCH_SIZE);
    const ids = chunk.map(c => c.id);

    let priceCase = 'CASE id ';
    let origCase = 'CASE id ';
    let badgeCase = 'CASE id ';
    let catCase = 'CASE id ';
    const params = [];

    for (const c of chunk) {
      priceCase += 'WHEN ? THEN ? ';
      params.push(c.id, c.price);
    }
    priceCase += 'ELSE price END';

    for (const c of chunk) {
      origCase += 'WHEN ? THEN ? ';
      params.push(c.id, c.originalPrice);
    }
    origCase += 'ELSE original_price END';

    for (const c of chunk) {
      badgeCase += 'WHEN ? THEN ? ';
      params.push(c.id, c.badge);
    }
    badgeCase += 'ELSE badge END';

    for (const c of chunk) {
      catCase += 'WHEN ? THEN ? ';
      params.push(c.id, c.category);
    }
    catCase += 'ELSE category END';

    const placeholders = ids.map(() => '?').join(',');
    const sql = `UPDATE products SET 
      price = ${priceCase},
      original_price = ${origCase},
      badge = ${badgeCase},
      category = ${catCase}
      WHERE id IN (${placeholders})`;

    params.push(...ids);
    await conn.execute(sql, params);
    console.log(`  Updated ${Math.min(i + BATCH_SIZE, updatesForDb.length)} / ${updatesForDb.length} products in DB`);
  }

  console.log(`\nAll database updates applied successfully.`);

  // Verify in DB
  const [filterCount] = await conn.query(`SELECT COUNT(*) as cnt FROM products WHERE category = 'filters'`);
  console.log(`Verification: Total products with category = 'filters' in DB:`, filterCount[0].cnt);

  const [sampleRows] = await conn.query(`SELECT id, name, category, price, original_price, badge FROM products WHERE category = 'filters' LIMIT 3`);
  console.log(`Sample filter rows from DB:`, sampleRows);

  const [sampleIcamRows] = await conn.query(`SELECT id, name, category, price, original_price FROM products WHERE id = 'icam-65347'`);
  console.log(`Sample icam row check (icam-65347):`, sampleIcamRows[0], 'Expected price:', (46000 / 50.5).toFixed(2));

  await conn.end();
  console.log('Done!');
}

main().catch(err => {
  console.error('Error in script:', err);
  process.exit(1);
});
