const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function syncAllProductsToDb() {
  const productsTsPath = path.join(__dirname, '../src/data/products.ts');
  const content = fs.readFileSync(productsTsPath, 'utf8');
  const match = content.match(/export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);\s*$/);
  
  if (!match) {
    console.error('Could not load products');
    return;
  }

  const products = JSON.parse(match[1]);
  console.log(`📦 Loaded ${products.length} products to sync into MySQL...`);

  const hostsToTry = ['srv1788.hstgr.io', '193.203.168.173'];

  for (const host of hostsToTry) {
    try {
      const connection = await mysql.createConnection({
        host: host,
        user: 'u407531143_esa',
        password: 'qW7~21D!0',
        database: 'u407531143_esa',
        port: 3306,
        connectTimeout: 8000,
      });

      console.log(`✅ Connected to DB at ${host}. Syncing products in batches...`);

      const batchSize = 100;
      for (let i = 0; i < products.length; i += batchSize) {
        const batch = products.slice(i, i + batchSize);
        const values = [];
        const placeholders = [];

        for (const p of batch) {
          placeholders.push('(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
          values.push(
            p.id,
            p.name,
            p.brand,
            Number(p.price),
            p.originalPrice ? Number(p.originalPrice) : null,
            p.category,
            p.image,
            p.badge || null,
            p.stockStatus || 'in-stock',
            p.shortDescription || null,
            JSON.stringify(p.specs || [])
          );
        }

        const sql = `
          INSERT INTO products (id, name, brand, price, original_price, category, image_url, badge, stock_status, short_description, specs_json)
          VALUES ${placeholders.join(', ')}
          ON DUPLICATE KEY UPDATE 
            name=VALUES(name), brand=VALUES(brand), price=VALUES(price), original_price=VALUES(original_price), 
            category=VALUES(category), image_url=VALUES(image_url), badge=VALUES(badge), 
            stock_status=VALUES(stock_status), short_description=VALUES(short_description), specs_json=VALUES(specs_json)
        `;

        await connection.query(sql, values);
        console.log(`Synced ${Math.min(i + batchSize, products.length)} / ${products.length} products`);
      }

      console.log(`🎉 All ${products.length} products successfully synced to database!`);
      await connection.end();
      return;
    } catch (err) {
      console.log(`Host ${host} notice: ${err.message}`);
    }
  }
}

syncAllProductsToDb();
