import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";
import { PRODUCTS, Product } from "@/data/products";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

interface ProductItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  original_price: number | null;
  category: string;
  image_url: string;
  badge: string | null;
  stock_status: string;
  rating: number;
  reviews_count: number;
  short_description: string | null;
  specs_json?: string | null;
  created_at?: string;
}

function loadInitialProducts(): ProductItem[] {
  try {
    const jsonPath = path.join(process.cwd(), "src/data/all-combined-products.json");
    if (fs.existsSync(jsonPath)) {
      const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
      if (Array.isArray(data) && data.length > 0) {
        return data.map((p: Product) => ({
          id: p.id,
          name: p.name,
          brand: p.brand,
          price: Number(p.price),
          original_price: p.originalPrice ? Number(p.originalPrice) : null,
          category: p.category,
          image_url: p.image,
          badge: p.badge || null,
          stock_status: p.stockStatus || "in-stock",
          rating: Number(p.rating || 5.0),
          reviews_count: Number(p.reviewsCount || 0),
          short_description: p.shortDescription || null,
          specs_json: JSON.stringify(p.specs || []),
        }));
      }
    }
  } catch (err) {
    console.warn("Could not read all-combined-products.json directly:", err);
  }

  return PRODUCTS.map((p) => ({
    id: p.id,
    name: p.name,
    brand: p.brand,
    price: Number(p.price),
    original_price: p.originalPrice ? Number(p.originalPrice) : null,
    category: p.category,
    image_url: p.image,
    badge: p.badge || null,
    stock_status: p.stockStatus || "in-stock",
    rating: Number(p.rating || 5.0),
    reviews_count: Number(p.reviewsCount || 0),
    short_description: p.shortDescription || null,
    specs_json: JSON.stringify(p.specs || []),
  }));
}

// In-memory cache synced across serverless requests
let memoryProducts: ProductItem[] = loadInitialProducts();

function saveProductsToDisk(productsList: ProductItem[]) {
  try {
    const filePath = path.join(process.cwd(), "src/data/all-combined-products.json");
    const mapped = productsList.map((p) => {
      let specs = [];
      try {
        specs = typeof p.specs_json === "string" ? JSON.parse(p.specs_json) : p.specs_json || [];
      } catch {
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
        reviewsCount: Number(p.reviews_count || 0),
        image: p.image_url,
        badge: p.badge || undefined,
        stockStatus: p.stock_status || "in-stock",
        stockCount: 5,
        shortDescription: p.short_description || "Professional cinema gear.",
        specs: specs,
        features: [
          "Official Distributor Warranty",
          "Factory Sealed & Calibrated",
          "Includes VIP Fragile Express Delivery",
        ],
        inTheBox: ["Main Unit", "Official Warranty Card", "Documentation"],
      };
    });
    fs.writeFileSync(filePath, JSON.stringify(mapped, null, 2), "utf8");
  } catch (err) {
    console.warn("Could not write products to disk:", err);
  }
}

async function ensureProductsTable() {
  const pool = getDbPool();
  if (!pool) return;

  try {
    await query(`
      CREATE TABLE IF NOT EXISTS products (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        brand VARCHAR(100) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        original_price DECIMAL(10, 2) NULL,
        category VARCHAR(100) NOT NULL,
        image_url LONGTEXT NOT NULL,
        badge VARCHAR(50) NULL,
        stock_status VARCHAR(50) DEFAULT 'in-stock',
        rating DECIMAL(3, 1) DEFAULT 5.0,
        reviews_count INT DEFAULT 0,
        short_description TEXT NULL,
        specs_json JSON NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);
  } catch (err) {
    console.warn("Table ensure warning:", err);
  }
}

export async function GET() {
  try {
    const pool = getDbPool();
    if (pool) {
      await ensureProductsTable();
      const rows = await query<ProductItem>(
        "SELECT * FROM products ORDER BY created_at DESC LIMIT 3000"
      );

      if (rows && rows.length > 0) {
        return NextResponse.json({
          success: true,
          source: "database",
          count: rows.length,
          data: rows,
        });
      }
    }

    return NextResponse.json({
      success: true,
      source: "memory_cache",
      count: memoryProducts.length,
      data: memoryProducts,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({
      success: true,
      source: "memory_fallback",
      count: memoryProducts.length,
      data: memoryProducts,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      id,
      name,
      brand,
      price,
      originalPrice,
      category,
      imageUrl,
      image,
      badge,
      stockStatus,
      stock_status,
      shortDescription,
      short_description,
      specsJson,
      specs,
    } = body;

    if (!name || !brand || price === undefined || price === null || !category) {
      return NextResponse.json(
        { success: false, message: "Name, brand, price, and category are required" },
        { status: 400 }
      );
    }

    const productId = id || `gear-${Date.now()}`;
    const cleanImageUrl =
      imageUrl ||
      image ||
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80";
    const cleanStockStatus = stockStatus || stock_status || "in-stock";
    const cleanShortDesc =
      shortDescription ||
      short_description ||
      "High performance cinema photography equipment.";
    const cleanSpecs = specsJson || specs || [{ label: "Brand", value: brand }];

    const newProdItem: ProductItem = {
      id: productId,
      name: String(name),
      brand: String(brand),
      price: Number(price),
      original_price: originalPrice ? Number(originalPrice) : null,
      category: String(category),
      image_url: cleanImageUrl,
      badge: badge ? String(badge) : null,
      stock_status: cleanStockStatus,
      rating: 5.0,
      reviews_count: 0,
      short_description: cleanShortDesc,
      specs_json: typeof cleanSpecs === "string" ? cleanSpecs : JSON.stringify(cleanSpecs),
      created_at: new Date().toISOString(),
    };

    // Update in-memory cache and persist to disk
    memoryProducts = [newProdItem, ...memoryProducts.filter((p) => p.id !== productId)];
    saveProductsToDisk(memoryProducts);

    // Persist to MySQL database if available
    const pool = getDbPool();
    if (pool) {
      try {
        await ensureProductsTable();
        await query(
          `INSERT INTO products (id, name, brand, price, original_price, category, image_url, badge, stock_status, short_description, specs_json)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
           ON DUPLICATE KEY UPDATE 
             name=VALUES(name), 
             brand=VALUES(brand), 
             price=VALUES(price), 
             original_price=VALUES(original_price), 
             category=VALUES(category), 
             image_url=VALUES(image_url), 
             badge=VALUES(badge), 
             stock_status=VALUES(stock_status), 
             short_description=VALUES(short_description), 
             specs_json=VALUES(specs_json)`,
          [
            productId,
            name,
            brand,
            Number(price),
            originalPrice ? Number(originalPrice) : null,
            category,
            cleanImageUrl,
            badge || null,
            cleanStockStatus,
            cleanShortDesc,
            typeof cleanSpecs === "string" ? cleanSpecs : JSON.stringify(cleanSpecs),
          ]
        );
      } catch (dbErr) {
        console.error("DB insert product error (persisted on disk):", dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      data: newProdItem,
      message: `Product "${name}" saved successfully`,
    });
  } catch (error) {
    console.error("Error saving product:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save product" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      id,
      name,
      brand,
      price,
      originalPrice,
      category,
      imageUrl,
      badge,
      stockStatus,
      shortDescription,
      specsJson,
    } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: "Product ID is required" }, { status: 400 });
    }

    // Update in-memory cache
    memoryProducts = memoryProducts.map((p) => {
      if (p.id === id) {
        return {
          ...p,
          ...(name !== undefined && { name: String(name) }),
          ...(brand !== undefined && { brand: String(brand) }),
          ...(price !== undefined && { price: Number(price) }),
          ...(originalPrice !== undefined && { original_price: originalPrice ? Number(originalPrice) : null }),
          ...(category !== undefined && { category: String(category) }),
          ...(imageUrl !== undefined && { image_url: imageUrl }),
          ...(badge !== undefined && { badge: badge || null }),
          ...(stockStatus !== undefined && { stock_status: stockStatus }),
          ...(shortDescription !== undefined && { short_description: shortDescription }),
          ...(specsJson !== undefined && { specs_json: typeof specsJson === "string" ? specsJson : JSON.stringify(specsJson) }),
        };
      }
      return p;
    });

    saveProductsToDisk(memoryProducts);

    const pool = getDbPool();
    if (pool) {
      try {
        await ensureProductsTable();
        await query(
          `UPDATE products SET 
            name = COALESCE(?, name),
            brand = COALESCE(?, brand),
            price = COALESCE(?, price),
            original_price = COALESCE(?, original_price),
            category = COALESCE(?, category),
            image_url = COALESCE(?, image_url),
            badge = COALESCE(?, badge),
            stock_status = COALESCE(?, stock_status),
            short_description = COALESCE(?, short_description),
            specs_json = COALESCE(?, specs_json)
          WHERE id = ?`,
          [
            name || null,
            brand || null,
            price !== undefined ? Number(price) : null,
            originalPrice !== undefined ? Number(originalPrice) : null,
            category || null,
            imageUrl || null,
            badge !== undefined ? badge : null,
            stockStatus || null,
            shortDescription || null,
            specsJson ? (typeof specsJson === "string" ? specsJson : JSON.stringify(specsJson)) : null,
            id,
          ]
        );
      } catch (dbErr) {
        console.error("DB update error (persisted on disk):", dbErr);
      }
    }

    return NextResponse.json({ success: true, message: `Product ${id} updated successfully` });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json({ success: false, message: "Failed to update product" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "Product ID is required" }, { status: 400 });
    }

    memoryProducts = memoryProducts.filter((p) => p.id !== id);
    saveProductsToDisk(memoryProducts);

    const pool = getDbPool();
    if (pool) {
      try {
        await ensureProductsTable();
        await query("DELETE FROM products WHERE id = ?", [id]);
      } catch (dbErr) {
        console.error("DB delete error:", dbErr);
      }
    }

    return NextResponse.json({ success: true, message: `Product ${id} deleted successfully` });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json({ success: false, message: "Failed to delete product" }, { status: 500 });
  }
}
