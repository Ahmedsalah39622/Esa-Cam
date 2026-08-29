const https = require("https");
const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          },
        },
        (res) => {
          let data = "";
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => {
            try {
              resolve({
                status: res.statusCode,
                headers: res.headers,
                data: JSON.parse(data),
              });
            } catch (e) {
              resolve({ status: res.statusCode, headers: res.headers, raw: data });
            }
          });
        }
      )
      .on("error", reject);
  });
}

function detectBrand(name, categories = []) {
  const brands = [
    "Sony",
    "Canon",
    "Nikon",
    "Fujifilm",
    "Fuji",
    "Panasonic",
    "Lumix",
    "Blackmagic",
    "RED",
    "DJI",
    "Sigma",
    "Tamron",
    "Viltrox",
    "Samyang",
    "Rokinon",
    "Zeiss",
    "Laowa",
    "Godox",
    "Aputure",
    "Nanlite",
    "Amaran",
    "Profoto",
    "SmallRig",
    "Tilta",
    "Zhiyun",
    "FeiyuTech",
    "Moza",
    "RØDE",
    "Rode",
    "Saramonic",
    "Hollyland",
    "Deity",
    "Sennheiser",
    "Zoom",
    "Tascam",
    "Boyi",
    "Boya",
    "SanDisk",
    "Lexar",
    "Angelbird",
    "ProGrade",
    "Manfrotto",
    "Benro",
    "Sirui",
    "Peak Design",
    "Lowepro",
    "Atomos",
    "Feelworld",
    "PortKeys",
    "Lilliput",
    "K&F Concept",
    "Hoya",
    "B+W",
    "NiSi",
  ];

  const fullText = `${name} ${categories.map((c) => c.name || "").join(" ")}`;
  for (const b of brands) {
    const regex = new RegExp(`\\b${b}\\b`, "i");
    if (regex.test(fullText)) {
      return b === "Fuji" ? "Fujifilm" : b === "Lumix" ? "Panasonic" : b;
    }
  }
  return "ESA CAM";
}

function detectCategory(name, categories = []) {
  const text = `${name} ${categories.map((c) => c.name || "").join(" ")}`.toLowerCase();

  if (text.includes("camera") || text.includes("body") || text.includes("fx3") || text.includes("fx6") || text.includes("a7") || text.includes("eos") || text.includes("mirrorless")) {
    return "cameras";
  }
  if (text.includes("lens") || text.includes("mm ") || text.includes("f/") || text.includes("optics") || text.includes("prime") || text.includes("zoom")) {
    return "lenses";
  }
  if (text.includes("light") || text.includes("softbox") || text.includes("led") || text.includes("monolight") || text.includes("flash") || text.includes("reflector") || text.includes("aputure") || text.includes("godox")) {
    return "lighting";
  }
  if (text.includes("mic") || text.includes("audio") || text.includes("wireless") || text.includes("transmitter") || text.includes("receiver") || text.includes("lavalier") || text.includes("recorder") || text.includes("rode") || text.includes("hollyland")) {
    return "audio";
  }
  if (text.includes("gimbal") || text.includes("stabilizer") || text.includes("ronin") || text.includes("rs3") || text.includes("rs4") || text.includes("crane") || text.includes("weebill")) {
    return "gimbals";
  }
  if (text.includes("drone") || text.includes("mavic") || text.includes("dji mini") || text.includes("air 3") || text.includes("avata") || text.includes("inspire")) {
    return "drones";
  }
  if (text.includes("used") || text.includes("pre-owned") || text.includes("refurbished")) {
    return "pre-owned";
  }
  return "accessories";
}

function cleanHtml(str) {
  if (!str) return "";
  return str
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

async function scrapeAllProducts() {
  console.log("==================================================");
  console.log("🚀 STARTING SCRAPER: esacamstore.com");
  console.log("==================================================");

  let page = 1;
  const allProducts = [];
  const EGP_RATE = 50.5;

  while (true) {
    const url = `https://esacamstore.com/wp-json/wc/store/v1/products?page=${page}&per_page=100`;
    console.log(`📡 Fetching Page ${page}...`);

    try {
      const res = await fetchJson(url);
      if (!res.data || !Array.isArray(res.data) || res.data.length === 0) {
        console.log(`🏁 No more products found on page ${page}. Finished scraping.`);
        break;
      }

      console.log(`✅ Page ${page}: Received ${res.data.length} products`);

      for (const item of res.data) {
        const minorUnit = item.prices?.currency_minor_unit ?? 0;
        const divider = Math.pow(10, minorUnit);

        const priceEGP = Number(item.prices?.price || item.prices?.sale_price || item.prices?.regular_price || 0) / divider;
        const regPriceEGP = Number(item.prices?.regular_price || 0) / divider;

        // Convert EGP to USD for base database storage
        const priceUSD = priceEGP > 0 ? Number((priceEGP / EGP_RATE).toFixed(2)) : 100;
        const originalPriceUSD = regPriceEGP > priceEGP ? Number((regPriceEGP / EGP_RATE).toFixed(2)) : null;

        const name = cleanHtml(item.name || "Cinema Gear Item");
        const brand = detectBrand(name, item.categories);
        const category = detectCategory(name, item.categories);

        const imageUrl =
          item.images && item.images.length > 0 && item.images[0].src
            ? item.images[0].src
            : "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80";

        const badge =
          originalPriceUSD && originalPriceUSD > priceUSD
            ? `SAVE ${Math.round(((originalPriceUSD - priceUSD) / originalPriceUSD) * 100)}%`
            : item.is_on_sale
            ? "Special Deal"
            : item.is_in_stock
            ? "In Stock"
            : "Pre-Order";

        const stockStatus = item.is_in_stock ? "in-stock" : "pre-order";
        const shortDescription = cleanHtml(item.short_description || item.description || "");

        const specs = [];
        if (item.attributes && Array.isArray(item.attributes)) {
          for (const attr of item.attributes) {
            if (attr.name && attr.terms && attr.terms.length > 0) {
              specs.push({
                label: attr.name,
                value: attr.terms.map((t) => t.name).join(", "),
              });
            }
          }
        }
        if (specs.length === 0) {
          specs.push({ label: "Brand", value: brand }, { label: "Category", value: category });
        }

        allProducts.push({
          id: `esa-${item.id}`,
          name,
          brand,
          price: priceUSD,
          original_price: originalPriceUSD,
          category,
          image_url: imageUrl,
          badge,
          stock_status: stockStatus,
          rating: Number(item.average_rating || 5.0),
          reviews_count: Number(item.review_count || 0),
          short_description: shortDescription,
          specs_json: JSON.stringify(specs),
        });
      }

      page++;
      // Polite delay between requests
      await new Promise((r) => setTimeout(r, 400));
    } catch (err) {
      console.error(`❌ Error fetching page ${page}:`, err.message);
      break;
    }
  }

  console.log(`\n🎉 TOTAL PRODUCTS EXTRACTED: ${allProducts.length}`);

  // Save local JSON backup
  const backupPath = path.join(__dirname, "../src/data/imported-esacam-products.json");
  fs.writeFileSync(backupPath, JSON.stringify(allProducts, null, 2), "utf8");
  console.log(`💾 Saved backup JSON to: ${backupPath}`);

  // Insert into MySQL Database
  console.log("\n📦 Connecting to MySQL to import products...");

  const host = process.env.DB_HOST || "srv1788.hstgr.io";
  const user = process.env.DB_USER || "u407531143_esa";
  const password = process.env.DB_PASSWORD || "qW7~21D!0";
  const database = process.env.DB_NAME || "u407531143_esa";

  try {
    const connection = await mysql.createConnection({
      host,
      user,
      password,
      database,
      port: 3306,
      ssl: { rejectUnauthorized: false },
    });

    console.log("✅ Connected to MySQL successfully!");

    // Ensure table exists with LONGTEXT
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS products (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        brand VARCHAR(100) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        original_price DECIMAL(10, 2) NULL,
        category VARCHAR(100) NOT NULL,
        image_url LONGTEXT NOT NULL,
        badge VARCHAR(50) NULL,
        stock_status ENUM('in-stock', 'low-stock', 'pre-order', 'out-of-stock') DEFAULT 'in-stock',
        rating DECIMAL(2, 1) DEFAULT 5.0,
        reviews_count INT DEFAULT 0,
        short_description TEXT NULL,
        specs_json JSON NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    await connection.execute("ALTER TABLE products MODIFY image_url LONGTEXT NOT NULL;");

    console.log(`⏳ Inserting/Updating ${allProducts.length} products in database...`);

    let inserted = 0;
    for (const p of allProducts) {
      await connection.execute(
        `INSERT INTO products (id, name, brand, price, original_price, category, image_url, badge, stock_status, rating, reviews_count, short_description, specs_json)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE 
           name=VALUES(name),
           brand=VALUES(brand),
           price=VALUES(price),
           original_price=VALUES(original_price),
           category=VALUES(category),
           image_url=VALUES(image_url),
           badge=VALUES(badge),
           stock_status=VALUES(stock_status),
           rating=VALUES(rating),
           reviews_count=VALUES(reviews_count),
           short_description=VALUES(short_description),
           specs_json=VALUES(specs_json)`,
        [
          p.id,
          p.name,
          p.brand,
          p.price,
          p.original_price,
          p.category,
          p.image_url,
          p.badge,
          p.stock_status,
          p.rating,
          p.reviews_count,
          p.short_description,
          p.specs_json,
        ]
      );
      inserted++;
      if (inserted % 25 === 0 || inserted === allProducts.length) {
        console.log(`   Progress: ${inserted} / ${allProducts.length} products synchronized.`);
      }
    }

    await connection.end();
    console.log(`\n🏆 ALL ${allProducts.length} PRODUCTS SUCCESSFULLY IMPORTED INTO DATABASE!`);
  } catch (dbErr) {
    console.error("❌ MySQL Import Error:", dbErr.message);
  }
}

scrapeAllProducts();
