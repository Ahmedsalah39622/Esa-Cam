const https = require("https");
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
            Accept: "application/json",
          },
          timeout: 25000,
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
              resolve({
                status: res.statusCode,
                headers: res.headers,
                raw: data,
                error: e.message,
              });
            }
          });
        }
      )
      .on("error", reject);
  });
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
    .replace(/&nbsp;/g, " ")
    .replace(/&ndash;/g, "-")
    .replace(/&mdash;/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeKey(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .trim();
}

function detectBrand(name, categories = [], attributes = []) {
  if (attributes && Array.isArray(attributes)) {
    const brandAttr = attributes.find(
      (a) => a.name?.toLowerCase() === "brand" || a.taxonomy === "pa_brand"
    );
    if (brandAttr && brandAttr.terms && brandAttr.terms.length > 0) {
      return cleanHtml(brandAttr.terms[0].name);
    }
  }

  const brands = [
    "Sony",
    "Canon",
    "Nikon",
    "Fujifilm",
    "Fuji",
    "Panasonic",
    "Lumix",
    "RED",
    "Blackmagic",
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
    "Yongnuo",
    "Ulanzi",
    "Insta360",
    "GoPro",
    "GVM",
    "Neewer",
  ];

  const fullText = `${name} ${categories.map((c) => c.name || "").join(" ")}`;
  for (const b of brands) {
    const regex = new RegExp(`\\b${b}\\b`, "i");
    if (regex.test(fullText)) {
      return b === "Fuji"
        ? "Fujifilm"
        : b === "Lumix"
        ? "Panasonic"
        : b === "Rode"
        ? "RØDE"
        : b;
    }
  }
  return "ESA CAM";
}

function detectCategory(name, categories = []) {
  const text = `${name} ${categories.map((c) => c.name || "").join(" ")}`.toLowerCase();

  if (
    text.includes("camera") ||
    text.includes("camcorder") ||
    text.includes("body") ||
    text.includes("fx3") ||
    text.includes("fx6") ||
    text.includes("a7") ||
    text.includes("eos") ||
    text.includes("mirrorless") ||
    text.includes("dslr") ||
    text.includes("cinema camera")
  ) {
    return "cameras";
  }
  if (
    text.includes("lens") ||
    text.includes("lenses") ||
    text.includes("mm ") ||
    text.includes("f/") ||
    text.includes("optics") ||
    text.includes("prime") ||
    text.includes("telephoto") ||
    text.includes("wide angle")
  ) {
    return "lenses";
  }
  if (
    text.includes("light") ||
    text.includes("softbox") ||
    text.includes("led") ||
    text.includes("monolight") ||
    text.includes("flash") ||
    text.includes("reflector") ||
    text.includes("aputure") ||
    text.includes("godox") ||
    text.includes("nanlite") ||
    text.includes("amaran") ||
    text.includes("strobe") ||
    text.includes("lantern")
  ) {
    return "lighting";
  }
  if (
    text.includes("mic") ||
    text.includes("audio") ||
    text.includes("wireless") ||
    text.includes("transmitter") ||
    text.includes("receiver") ||
    text.includes("lavalier") ||
    text.includes("recorder") ||
    text.includes("rode") ||
    text.includes("hollyland") ||
    text.includes("saramonic") ||
    text.includes("headphone")
  ) {
    return "audio";
  }
  if (
    text.includes("gimbal") ||
    text.includes("stabilizer") ||
    text.includes("ronin") ||
    text.includes("rs3") ||
    text.includes("rs4") ||
    text.includes("rs 4") ||
    text.includes("crane") ||
    text.includes("weebill")
  ) {
    return "gimbals";
  }
  if (
    text.includes("drone") ||
    text.includes("mavic") ||
    text.includes("dji mini") ||
    text.includes("air 3") ||
    text.includes("avata") ||
    text.includes("inspire") ||
    text.includes("quadcopter")
  ) {
    return "drones";
  }
  if (
    text.includes("used") ||
    text.includes("pre-owned") ||
    text.includes("refurbished") ||
    text.includes("second hand")
  ) {
    return "pre-owned";
  }
  return "accessories";
}

async function scrapeAllIcamProducts() {
  console.log("==================================================");
  console.log("🚀 STARTING SCRAPER: icamstore.net");
  console.log("==================================================");

  const productsTsPath = path.join(__dirname, "../src/data/products.ts");
  const currentTs = fs.readFileSync(productsTsPath, "utf8");
  const match = currentTs.match(/export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);\s*$/);

  if (!match) {
    console.error("Could not parse existing PRODUCTS array from products.ts");
    return;
  }

  const existingProducts = JSON.parse(match[1]);
  console.log(`📦 Loaded ${existingProducts.length} existing products from products.ts`);

  // Build existing keys set for deduplication
  const existingKeys = new Set();
  for (const p of existingProducts) {
    existingKeys.add(normalizeKey(p.name));
    if (p.id) existingKeys.add(normalizeKey(p.id));
  }

  const EGP_RATE = 50.5;
  let page = 1;
  let totalNewAdded = 0;
  let totalSkippedDuplicates = 0;
  const newProductsList = [];

  while (true) {
    const url = `https://icamstore.net/wp-json/wc/store/v1/products?page=${page}&per_page=100`;
    console.log(`📡 Fetching Page ${page}...`);

    try {
      const res = await fetchJson(url);
      if (!res.data || !Array.isArray(res.data) || res.data.length === 0) {
        console.log(`🏁 Finished scraping at page ${page}. No more products.`);
        break;
      }

      console.log(`✅ Page ${page}: Received ${res.data.length} products`);

      for (const item of res.data) {
        const rawName = item.name || "Cinema Equipment";
        const name = cleanHtml(rawName);
        const normKey = normalizeKey(name);

        // Deduplication check
        if (existingKeys.has(normKey)) {
          totalSkippedDuplicates++;
          continue;
        }

        const rawImage =
          item.images?.[0]?.src ||
          item.images?.[0]?.thumbnail ||
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80";

        const minorUnit = item.prices?.currency_minor_unit ?? 0;
        const divider = Math.pow(10, minorUnit);

        const priceEGP =
          Number(
            item.prices?.price ||
              item.prices?.sale_price ||
              item.prices?.regular_price ||
              0
          ) / divider;

        const regPriceEGP =
          Number(item.prices?.regular_price || 0) / divider;

        if (priceEGP <= 0) {
          continue;
        }

        // Convert EGP to base USD
        const priceUSD = Number((priceEGP / EGP_RATE).toFixed(2));
        const originalPriceUSD =
          regPriceEGP > priceEGP
            ? Number((regPriceEGP / EGP_RATE).toFixed(2))
            : undefined;

        const brand = detectBrand(name, item.categories, item.attributes);
        const category = detectCategory(name, item.categories);

        // Specs extraction
        const specs = [];
        specs.push({ label: "Brand", value: brand });
        specs.push({ label: "Category", value: category });

        if (item.attributes && Array.isArray(item.attributes)) {
          for (const attr of item.attributes) {
            const attrName = cleanHtml(attr.name);
            const attrVal = attr.terms?.map((t) => cleanHtml(t.name)).join(", ");
            if (attrName && attrVal && attrName.toLowerCase() !== "brand") {
              specs.push({ label: attrName, value: attrVal });
            }
          }
        }

        const shortDesc =
          cleanHtml(item.short_description || item.description || "") ||
          `${brand} professional cinema and photography gear with high-grade optics and performance.`;

        const badge =
          originalPriceUSD && originalPriceUSD > priceUSD
            ? `SAVE ${Math.round(((originalPriceUSD - priceUSD) / originalPriceUSD) * 100)}%`
            : item.is_featured
            ? "PRO GEAR"
            : undefined;

        const newProd = {
          id: `icam-${item.id}`,
          name: name,
          brand: brand,
          category: category,
          price: priceUSD,
          originalPrice: originalPriceUSD,
          rating: 5,
          reviewsCount: Math.floor(Math.random() * 15) + 5,
          image: rawImage,
          badge: badge,
          isBestSeller: Boolean(badge),
          stockStatus: item.is_in_stock ? "in-stock" : "pre-order",
          stockCount: item.is_in_stock ? 5 : 0,
          shortDescription: shortDesc.slice(0, 300),
          specs: specs.slice(0, 5),
          features: [
            "Official Distributor Warranty",
            "Factory Sealed & Calibrated",
            "Includes VIP Fragile Express Delivery",
          ],
          inTheBox: ["Main Unit", "Official Warranty Card", "Documentation"],
        };

        // Mark as seen
        existingKeys.add(normKey);
        newProductsList.push(newProd);
        totalNewAdded++;
      }

      page++;
      await new Promise((r) => setTimeout(r, 200));
    } catch (err) {
      console.error(`❌ Error on page ${page}:`, err.message);
      break;
    }
  }

  console.log("==================================================");
  console.log(`🎉 SCRAPING COMPLETE!`);
  console.log(`✨ Total New Unique Products Added: ${totalNewAdded}`);
  console.log(`🛡️ Total Duplicates Skipped: ${totalSkippedDuplicates}`);
  console.log("==================================================");

  const combinedProducts = [...existingProducts, ...newProductsList];
  console.log(`📊 Grand Total in Catalog: ${combinedProducts.length} products`);

  const preamble = currentTs.slice(0, match.index);
  const updatedTsContent = `${preamble}export const PRODUCTS: Product[] = ${JSON.stringify(combinedProducts, null, 2)};\n`;

  fs.writeFileSync(productsTsPath, updatedTsContent, "utf8");
  console.log(`💾 Successfully updated ${productsTsPath}!`);

  const jsonBackupPath = path.join(__dirname, "../src/data/all-combined-products.json");
  fs.writeFileSync(jsonBackupPath, JSON.stringify(combinedProducts, null, 2), "utf8");
  console.log(`💾 Saved backup JSON to ${jsonBackupPath}`);
}

scrapeAllIcamProducts();
