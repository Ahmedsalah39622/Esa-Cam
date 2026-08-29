const fs = require("fs");
const path = require("path");

const jsonPath = path.join(__dirname, "../src/data/imported-esacam-products.json");
const products = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

const tsProducts = products.map((p) => {
  let specs = [];
  try {
    specs = typeof p.specs_json === "string" ? JSON.parse(p.specs_json) : p.specs_json || [];
  } catch (e) {
    specs = [];
  }

  return {
    id: p.id,
    name: p.name,
    brand: p.brand,
    category: p.category,
    price: Number(p.price),
    originalPrice: p.original_price ? Number(p.original_price) : undefined,
    rating: Number(p.rating || 5.0),
    reviewsCount: Number(p.reviews_count || 12),
    image: p.image_url,
    badge: p.badge || undefined,
    isBestSeller: p.badge?.includes("SAVE") || false,
    stockStatus: p.stock_status || "in-stock",
    stockCount: 5,
    shortDescription: p.short_description || "High-end professional cinema and photography gear.",
    specs: specs,
    features: [
      "Official Distributor Warranty",
      "Factory Sealed & Calibrated",
      "Includes VIP Fragile Express Delivery",
    ],
    inTheBox: ["Main Unit", "Official Warranty Card", "Documentation"],
  };
});

const content = `export type ProductCategory = 
  | "all"
  | "cameras"
  | "lenses"
  | "lighting"
  | "audio"
  | "gimbals"
  | "drones"
  | "accessories"
  | "pre-owned";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isSale?: boolean;
  stockStatus: "in-stock" | "low-stock" | "pre-order";
  stockCount?: number;
  shortDescription: string;
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
  inTheBox: string[];
  mount?: string;
  sensor?: string;
  resolution?: string;
}

export const PRODUCTS: Product[] = ${JSON.stringify(tsProducts, null, 2)};
`;

const targetPath = path.join(__dirname, "../src/data/products.ts");
fs.writeFileSync(targetPath, content, "utf8");
console.log(`✅ Successfully updated ${targetPath} with all ${tsProducts.length} live products!`);
