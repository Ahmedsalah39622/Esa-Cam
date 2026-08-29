import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";
import { PRODUCTS } from "@/data/products";

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

// In-memory persistent cache for serverless lifecycles
let memoryProducts: ProductItem[] = PRODUCTS.map((p) => ({
  id: p.id,
  name: p.name,
  brand: p.brand,
  price: p.price,
  original_price: p.originalPrice || null,
  category: p.category,
  image_url: p.image,
  badge: p.badge || null,
  stock_status: p.stockStatus || "in-stock",
  rating: p.rating,
  reviews_count: p.reviewsCount,
  short_description: p.shortDescription || null,
  specs_json: JSON.stringify(p.specs || []),
}));

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
    await query("ALTER TABLE products MODIFY image_url LONGTEXT NOT NULL;");
    await query("ALTER TABLE products MODIFY stock_status VARCHAR(50) DEFAULT 'in-stock';");
  } catch (err) {
    console.warn("Table ensure warning:", err);
  }
}

export async function GET() {
  try {
    const pool = getDbPool();
    if (pool) {
      await ensureProductsTable();
      let rows = await query<ProductItem>(
        "SELECT * FROM products ORDER BY created_at DESC"
      );

      // If DB has fewer than 50 products, bulk seed all 474 products into MySQL
      if (!rows || rows.length < 50) {
        console.log(`📦 Seeding all ${PRODUCTS.length} live products into database...`);
        for (const p of PRODUCTS) {
          try {
            await query(
              `INSERT INTO products (id, name, brand, price, original_price, category, image_url, badge, stock_status, short_description, specs_json)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
               ON DUPLICATE KEY UPDATE 
                 name=VALUES(name), brand=VALUES(brand), price=VALUES(price), original_price=VALUES(original_price), category=VALUES(category), image_url=VALUES(image_url), badge=VALUES(badge), stock_status=VALUES(stock_status), short_description=VALUES(short_description), specs_json=VALUES(specs_json)`,
              [
                p.id,
                p.name,
                p.brand,
                Number(p.price),
                p.originalPrice ? Number(p.originalPrice) : null,
                p.category,
                p.image,
                p.badge || null,
                p.stockStatus || "in-stock",
                p.shortDescription || null,
                JSON.stringify(p.specs || []),
              ]
            );
          } catch {}
        }
        rows = await query<ProductItem>("SELECT * FROM products ORDER BY created_at DESC");
      }

      if (rows && rows.length > 0) {
        return NextResponse.json({ success: true, source: "database", count: rows.length, data: rows });
      }
    }

    return NextResponse.json({
      success: true,
      source: "memory_cache",
      data: memoryProducts,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({
      success: true,
      source: "memory_fallback",
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

    if (!name || !brand || !price || !category) {
      return NextResponse.json(
        { success: false, message: "Name, brand, price, and category are required" },
        { status: 400 }
      );
    }

    const productId = id || `esa-${Date.now()}`;
    const cleanImageUrl = imageUrl || image || "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80";
    const cleanStockStatus = stockStatus || stock_status || "in-stock";
    const cleanShortDesc = shortDescription || short_description || "High performance cinema photography equipment.";
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
      specs_json: JSON.stringify(cleanSpecs),
      created_at: new Date().toISOString(),
    };

    // Update in-memory cache immediately
    memoryProducts = [newProdItem, ...memoryProducts.filter((p) => p.id !== productId)];

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
            JSON.stringify(cleanSpecs),
          ]
        );
        console.log(`✅ Product ${productId} saved to MySQL database!`);
      } catch (dbErr) {
        console.error("DB insert product error (persisted in memory):", dbErr);
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
          ...(name !== undefined && { name }),
          ...(brand !== undefined && { brand }),
          ...(price !== undefined && { price: Number(price) }),
          ...(originalPrice !== undefined && { original_price: Number(originalPrice) }),
          ...(category !== undefined && { category }),
          ...(imageUrl !== undefined && { image_url: imageUrl }),
          ...(badge !== undefined && { badge }),
          ...(stockStatus !== undefined && { stock_status: stockStatus }),
          ...(shortDescription !== undefined && { short_description: shortDescription }),
          ...(specsJson !== undefined && { specs_json: JSON.stringify(specsJson) }),
        };
      }
      return p;
    });

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
            specsJson ? JSON.stringify(specsJson) : null,
            id,
          ]
        );
      } catch (dbErr) {
        console.error("DB update error:", dbErr);
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
