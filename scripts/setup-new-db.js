const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");

async function setupDatabase() {
  const host = "srv1812.hstgr.io";
  const user = "u808756286_esa";
  const password = "2!83>q;>Gl";
  const database = "u808756286_esa";

  console.log("==================================================");
  console.log("🚀 SETTING UP NEW DATABASE");
  console.log("==================================================");

  const connection = await mysql.createConnection({
    host,
    user,
    password,
    database,
    port: 3306,
    connectTimeout: 15000,
    multipleStatements: true,
  });

  console.log("✅ Connected to new database!");

  // Step 1: Run schema.sql
  console.log("\n📋 Step 1: Creating tables from schema.sql...");
  const schemaPath = path.join(__dirname, "../schema.sql");
  const schemaSql = fs.readFileSync(schemaPath, "utf8");
  
  // Split by semicolons and run each statement
  const statements = schemaSql
    .split(";")
    .map((s) => s.trim())
    .filter((s) => s.length > 0 && !s.startsWith("--"));

  for (const stmt of statements) {
    try {
      await connection.execute(stmt);
      const tableName = stmt.match(/(?:CREATE TABLE IF NOT EXISTS|INSERT INTO|ALTER TABLE)\s+(\w+)/i);
      if (tableName) {
        console.log(`   ✅ ${tableName[1]}`);
      }
    } catch (err) {
      if (err.code !== "ER_DUP_ENTRY" && err.code !== "ER_TABLE_EXISTS_ERROR") {
        console.warn(`   ⚠️ ${err.message.substring(0, 80)}`);
      }
    }
  }

  // Also create coupons table (defined in API route, not in schema.sql)
  console.log("\n📋 Creating coupons table...");
  try {
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS coupons (
        code VARCHAR(50) PRIMARY KEY,
        discount_percent INT NOT NULL,
        description VARCHAR(255) NULL,
        start_date DATE NOT NULL,
        end_date DATE NOT NULL,
        is_single_use BOOLEAN DEFAULT FALSE,
        usage_count INT DEFAULT 0,
        is_active BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);
    console.log("   ✅ coupons");
  } catch (err) {
    console.warn("   ⚠️ coupons:", err.message);
  }

  // Ensure image_url is LONGTEXT
  try {
    await connection.execute("ALTER TABLE products MODIFY image_url LONGTEXT NOT NULL;");
    console.log("   ✅ products.image_url → LONGTEXT");
  } catch (err) {
    // ignore
  }

  // Add images_json column if not exists
  try {
    await connection.execute("ALTER TABLE products ADD COLUMN images_json JSON NULL;");
    console.log("   ✅ Added products.images_json column");
  } catch (err) {
    if (!err.message.includes("Duplicate column")) {
      console.warn("   ⚠️", err.message.substring(0, 60));
    }
  }

  console.log("\n✅ All tables created successfully!");

  // Step 2: Import products from all-combined-products.json
  console.log("\n📦 Step 2: Importing products from all-combined-products.json...");
  const productsPath = path.join(__dirname, "../src/data/all-combined-products.json");
  const allProducts = JSON.parse(fs.readFileSync(productsPath, "utf8"));
  console.log(`   Found ${allProducts.length} products to import`);

  let imported = 0;
  let errors = 0;

  for (const p of allProducts) {
    try {
      const imageUrl = p.image || "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80";
      const images = p.images && p.images.length > 0 ? p.images : [imageUrl];
      const specs = p.specs || [{ label: "Brand", value: p.brand }];

      await connection.execute(
        `INSERT INTO products (id, name, brand, price, original_price, category, image_url, images_json, badge, stock_status, rating, reviews_count, short_description, specs_json)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE 
           name=VALUES(name), brand=VALUES(brand), price=VALUES(price),
           original_price=VALUES(original_price), category=VALUES(category),
           image_url=VALUES(image_url), images_json=VALUES(images_json),
           badge=VALUES(badge), stock_status=VALUES(stock_status),
           rating=VALUES(rating), reviews_count=VALUES(reviews_count),
           short_description=VALUES(short_description), specs_json=VALUES(specs_json)`,
        [
          p.id,
          p.name,
          p.brand || "ESA CAM",
          Number(p.price) || 0,
          p.originalPrice ? Number(p.originalPrice) : null,
          p.category || "accessories",
          imageUrl,
          JSON.stringify(images),
          p.badge || null,
          p.stockStatus || "in-stock",
          Number(p.rating) || 5.0,
          Number(p.reviewsCount) || 0,
          p.shortDescription || "Professional cinema gear.",
          JSON.stringify(specs),
        ]
      );
      imported++;
      if (imported % 100 === 0 || imported === allProducts.length) {
        console.log(`   Progress: ${imported} / ${allProducts.length} products`);
      }
    } catch (err) {
      errors++;
      if (errors <= 3) {
        console.warn(`   ❌ Error on "${p.name}": ${err.message.substring(0, 80)}`);
      }
    }
  }

  // Step 3: Verify
  console.log("\n📊 Step 3: Verifying...");
  const [countResult] = await connection.execute("SELECT COUNT(*) as total FROM products");
  const [tableList] = await connection.execute("SHOW TABLES");

  console.log(`\n==================================================`);
  console.log(`🏆 DATABASE SETUP COMPLETE!`);
  console.log(`==================================================`);
  console.log(`   Tables created: ${tableList.length}`);
  tableList.forEach((t) => {
    const tableName = Object.values(t)[0];
    console.log(`     • ${tableName}`);
  });
  console.log(`   Products imported: ${imported} (errors: ${errors})`);
  console.log(`   Total products in DB: ${countResult[0].total}`);
  console.log(`==================================================`);

  await connection.end();
}

setupDatabase().catch((err) => {
  console.error("❌ FATAL ERROR:", err.message);
  process.exit(1);
});

