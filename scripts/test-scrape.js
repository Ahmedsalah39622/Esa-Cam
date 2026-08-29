const https = require("https");

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
              resolve({ status: res.statusCode, data: JSON.parse(data) });
            } catch (e) {
              resolve({ status: res.statusCode, raw: data });
            }
          });
        }
      )
      .on("error", reject);
  });
}

async function run() {
  console.log("Checking WooCommerce endpoints on esacamstore.com...");

  const endpoints = [
    "https://esacamstore.com/wp-json/wc/store/v1/products?per_page=100",
    "https://esacamstore.com/wp-json/wp/v2/product?per_page=100",
    "https://esacamstore.com/wp-json/wc/v3/products",
  ];

  for (const ep of endpoints) {
    try {
      console.log(`Testing: ${ep}`);
      const res = await fetchJson(ep);
      console.log(`Status: ${res.status}`);
      if (Array.isArray(res.data)) {
        console.log(`SUCCESS! Found ${res.data.length} items`);
        if (res.data.length > 0) {
          const sample = res.data[0];
          console.log("Sample Item:", {
            id: sample.id,
            name: sample.name || sample.title?.rendered,
            price: sample.prices || sample.price,
            images: sample.images?.map((i) => i.src || i),
          });
        }
      } else if (res.data && res.data.message) {
        console.log("Response message:", res.data.message);
      }
    } catch (err) {
      console.error("Error fetching", ep, err.message);
    }
  }
}

run();
