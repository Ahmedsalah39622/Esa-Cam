const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");

function refineCategoryAndBrand(name, currentCategory, currentBrand) {
  const t = name.toLowerCase();

  // 1. BRAND DETECTION
  let brand = currentBrand;
  const brandList = [
    { name: "Sony", regex: /\b(sony)\b/i },
    { name: "Canon", regex: /\b(canon)\b/i },
    { name: "Nikon", regex: /\b(nikon|nikkor)\b/i },
    { name: "Fujifilm", regex: /\b(fujifilm|fuji)\b/i },
    { name: "Panasonic", regex: /\b(panasonic|lumix)\b/i },
    { name: "Sigma", regex: /\b(sigma)\b/i },
    { name: "Tamron", regex: /\b(tamron)\b/i },
    { name: "Viltrox", regex: /\b(viltrox)\b/i },
    { name: "Samyang", regex: /\b(samyang|rokinon)\b/i },
    { name: "DJI", regex: /\b(dji|osmo|ronin|mavic|avata)\b/i },
    { name: "Godox", regex: /\b(godox)\b/i },
    { name: "Aputure", regex: /\b(aputure|amaran)\b/i },
    { name: "Nanlite", regex: /\b(nanlite|pavotube|forza)\b/i },
    { name: "Profoto", regex: /\b(profoto)\b/i },
    { name: "SmallRig", regex: /\b(smallrig)\b/i },
    { name: "Tilta", regex: /\b(tilta)\b/i },
    { name: "Zhiyun", regex: /\b(zhiyun|weebill|crane)\b/i },
    { name: "RØDE", regex: /\b(røde|rode)\b/i },
    { name: "Boya", regex: /\b(boya)\b/i },
    { name: "Hollyland", regex: /\b(hollyland|lark)\b/i },
    { name: "Sennheiser", regex: /\b(sennheiser)\b/i },
    { name: "Zoom", regex: /\b(zoom)\b/i },
    { name: "Tascam", regex: /\b(tascam)\b/i },
    { name: "SanDisk", regex: /\b(sandisk|extreme pro)\b/i },
    { name: "Lexar", regex: /\b(lexar)\b/i },
    { name: "Kingston", regex: /\b(kingston)\b/i },
    { name: "Manfrotto", regex: /\b(manfrotto)\b/i },
    { name: "Benro", regex: /\b(benro)\b/i },
    { name: "K&F Concept", regex: /\b(k&f|concept)\b/i },
    { name: "Peak Design", regex: /\b(peak design)\b/i },
    { name: "Lowepro", regex: /\b(lowepro)\b/i },
    { name: "Ulanzi", regex: /\b(ulanzi)\b/i },
    { name: "JJC", regex: /\b(jjc)\b/i },
    { name: "Meike", regex: /\b(meike)\b/i },
    { name: "Blackmagic", regex: /\b(blackmagic|bmpcc)\b/i },
    { name: "RED", regex: /\b(red digital|komodo|v-raptor)\b/i },
  ];

  for (const b of brandList) {
    if (b.regex.test(name)) {
      brand = b.name;
      break;
    }
  }

  // 2. CATEGORY DETECTION (Specific keywords take priority over general brand names)
  let category = "accessories";

  // Pre-Owned
  if (t.includes("used") || t.includes("pre-owned") || t.includes("مستعمل") || t.includes("refurbished")) {
    return { brand, category: "pre-owned" };
  }

  // Drones
  if (t.includes("drone") || t.includes("mavic") || t.includes("dji mini") || t.includes("air 3") || t.includes("air 2") || t.includes("avata") || t.includes("inspire") || t.includes("طائرة")) {
    return { brand, category: "drones" };
  }

  // Gimbals & Stabilizers
  if (t.includes("gimbal") || t.includes("stabilizer") || t.includes("ronin") || t.includes("rs 3") || t.includes("rs 4") || t.includes("rs2") || t.includes("rs3") || t.includes("rs4") || t.includes("crane") || t.includes("weebill") || t.includes("om 6") || t.includes("osmo mobile") || t.includes("مانع اهتزاز")) {
    return { brand, category: "gimbals" };
  }

  // Audio / Microphones
  if (t.includes("mic") || t.includes("microphone") || t.includes("wireless go") || t.includes("lark") || t.includes("lavalier") || t.includes("transmitter") || t.includes("receiver") || t.includes("audio") || t.includes("shotgun") || t.includes("sound") || t.includes("مايك") || t.includes("ميكروفون") || t.includes("تسجيل")) {
    return { brand, category: "audio" };
  }

  // Lighting & Flashes
  if (t.includes("flash") || t.includes("light") || t.includes("speedlite") || t.includes("softbox") || t.includes("led") || t.includes("strobe") || t.includes("trigger") || t.includes("godox v") || t.includes("godox ad") || t.includes("godox sl") || t.includes("aputure") || t.includes("nanlite") || t.includes("amaran") || t.includes("reflector") || t.includes("إضاءة") || t.includes("فلاش")) {
    return { brand, category: "lighting" };
  }

  // Accessories (Batteries, Chargers, Cards, Bags, Straps, Tripods, Filters, Cages)
  if (
    t.includes("battery") ||
    t.includes("charger") ||
    t.includes("card") ||
    t.includes("sdxc") ||
    t.includes("cfexpress") ||
    t.includes("tripod") ||
    t.includes("monopod") ||
    t.includes("head") ||
    t.includes("bag") ||
    t.includes("backpack") ||
    t.includes("case") ||
    t.includes("strap") ||
    t.includes("cage") ||
    t.includes("rig") ||
    t.includes("filter") ||
    t.includes("nd filter") ||
    t.includes("cpl") ||
    t.includes("adapter") ||
    t.includes("hood") ||
    t.includes("cap") ||
    t.includes("mount adapter") ||
    t.includes("cleaning") ||
    t.includes("cable") ||
    t.includes("بطارية") ||
    t.includes("شاحن") ||
    t.includes("كارت") ||
    t.includes("شنطة") ||
    t.includes("حامل") ||
    t.includes("ترايبود")
  ) {
    return { brand, category: "accessories" };
  }

  // Lenses
  if (
    t.includes("lens") ||
    t.includes("mm f/") ||
    t.includes("mm f") ||
    t.includes("f/1.") ||
    t.includes("f/2.") ||
    t.includes("f/4") ||
    t.includes("f/2.8") ||
    t.includes("nikkor z") ||
    t.includes("fe 24") ||
    t.includes("fe 70") ||
    t.includes("fe 50") ||
    t.includes("fe 85") ||
    t.includes("fe 35") ||
    t.includes("ef ") ||
    t.includes("rf ") ||
    t.includes("عدسة") ||
    t.includes("عدسات")
  ) {
    return { brand, category: "lenses" };
  }

  // Cameras & Bodies
  if (
    t.includes("camera") ||
    t.includes("body") ||
    t.includes("cinema") ||
    t.includes("fx3") ||
    t.includes("fx30") ||
    t.includes("fx6") ||
    t.includes("a7") ||
    t.includes("a7r") ||
    t.includes("a7s") ||
    t.includes("a7c") ||
    t.includes("a6700") ||
    t.includes("a6400") ||
    t.includes("zv-e") ||
    t.includes("eos r") ||
    t.includes("r5") ||
    t.includes("r6") ||
    t.includes("r8") ||
    t.includes("r50") ||
    t.includes("r100") ||
    t.includes("z5") ||
    t.includes("z6") ||
    t.includes("z7") ||
    t.includes("z8") ||
    t.includes("z9") ||
    t.includes("z30") ||
    t.includes("z50") ||
    t.includes("zfc") ||
    t.includes("x-t5") ||
    t.includes("x-h2") ||
    t.includes("x-s20") ||
    t.includes("x100") ||
    t.includes("كاميرا")
  ) {
    return { brand, category: "cameras" };
  }

  return { brand, category: "accessories" };
}

async function run() {
  const jsonPath = path.join(__dirname, "../src/data/imported-esacam-products.json");
  const products = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

  console.log(`Processing ${products.length} products...`);

  const updatedProducts = products.map((p) => {
    const { brand, category } = refineCategoryAndBrand(p.name, p.category, p.brand);
    return {
      ...p,
      brand,
      category,
    };
  });

  // Calculate new stats
  const catCount = {};
  const brandCount = {};
  updatedProducts.forEach((p) => {
    catCount[p.category] = (catCount[p.category] || 0) + 1;
    brandCount[p.brand] = (brandCount[p.brand] || 0) + 1;
  });

  console.log("\n📊 Refined Category Distribution:");
  console.log(catCount);

  console.log("\n🏷️ Refined Brand Distribution:");
  console.log(
    Object.entries(brandCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15)
  );

  // Save updated JSON
  fs.writeFileSync(jsonPath, JSON.stringify(updatedProducts, null, 2), "utf8");
  console.log("\n💾 Saved updated JSON backup.");

  // Update MySQL
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

    console.log("Connecting to MySQL to update categories & brands...");

    for (const p of updatedProducts) {
      await connection.execute(
        "UPDATE products SET brand = ?, category = ? WHERE id = ?",
        [p.brand, p.category, p.id]
      );
    }

    await connection.end();
    console.log("🏆 MySQL database updated with accurate categories and brands!");
  } catch (err) {
    console.error("MySQL update error:", err.message);
  }
}

run();
