import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";
import { PRODUCTS } from "@/data/products";

export const dynamic = "force-dynamic";


interface ProductRow {
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
  specs_json: string | null;
  created_at: string;
}

export async function GET() {
  try {
    const pool = getDbPool();
    if (!pool) {
      // Return static products from data/products.ts as fallback
      return NextResponse.json({
        success: true,
        source: "static",
        data: PRODUCTS.map((p) => ({
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
        })),
      });
    }

    // Ensure table exists and image_url is LONGTEXT to hold base64 without truncation
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
          stock_status ENUM('in-stock', 'low-stock', 'pre-order', 'out-of-stock') DEFAULT 'in-stock',
          rating DECIMAL(2, 1) DEFAULT 5.0,
          reviews_count INT DEFAULT 0,
          short_description TEXT NULL,
          specs_json JSON NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      `);
      await query("ALTER TABLE products MODIFY image_url LONGTEXT NOT NULL;");
    } catch {}

    const rows = await query<ProductRow>(
      "SELECT * FROM products ORDER BY created_at DESC"
    );

    // If DB is empty, return static products
    if (rows.length === 0) {
      return NextResponse.json({
        success: true,
        source: "static_fallback",
        data: PRODUCTS.map((p) => ({
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
        })),
      });
    }

    return NextResponse.json({ success: true, source: "database", data: rows });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({
      success: true,
      source: "static_error_fallback",
      data: PRODUCTS.map((p) => ({
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
      })),
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
      badge,
      stockStatus,
      shortDescription,
      specsJson,
    } = body;

    if (!name || !brand || !price || !category) {
      return NextResponse.json(
        { success: false, message: "Name, brand, price, and category are required" },
        { status: 400 }
      );
    }

    const productId = id || `product_${Date.now()}`;

    const pool = getDbPool();
    if (pool) {
      try {
        await query(
          `INSERT INTO products (id, name, brand, price, original_price, category, image_url, badge, stock_status, short_description, specs_json)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
           ON DUPLICATE KEY UPDATE name=VALUES(name), brand=VALUES(brand), price=VALUES(price), original_price=VALUES(original_price), category=VALUES(category), image_url=VALUES(image_url), badge=VALUES(badge), stock_status=VALUES(stock_status), short_description=VALUES(short_description), specs_json=VALUES(specs_json)`,
          [
            productId,
            name,
            brand,
            Number(price),
            originalPrice ? Number(originalPrice) : null,
            category,
            imageUrl || "/placeholder.jpg",
            badge || null,
            stockStatus || "in-stock",
            shortDescription || null,
            specsJson ? JSON.stringify(specsJson) : null,
          ]
        );
      } catch (dbErr) {
        console.error("DB insert product error (continuing with local):", dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      data: { id: productId, name, brand, price },
      message: "Product saved successfully",
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

    const pool = getDbPool();
    if (pool) {
      try {
        await query(
          `UPDATE products SET 
            name = COALESCE(?, name),
            brand = COALESCE(?, brand),
            price = COALESCE(?, price),
            original_price = ?,
            category = COALESCE(?, category),
            image_url = COALESCE(?, image_url),
            badge = ?,
            stock_status = COALESCE(?, stock_status),
            short_description = ?,
            specs_json = ?
           WHERE id = ?`,
          [
            name || null,
            brand || null,
            price ? Number(price) : null,
            originalPrice ? Number(originalPrice) : null,
            category || null,
            imageUrl || null,
            badge || null,
            stockStatus || null,
            shortDescription || null,
            specsJson ? JSON.stringify(specsJson) : null,
            id,
          ]
        );
      } catch (dbErr) {
        console.error("DB patch product error:", dbErr);
      }
    }

    return NextResponse.json({ success: true, message: "Product updated successfully in database" });
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

    const pool = getDbPool();
    if (pool) {
      try {
        await query("DELETE FROM products WHERE id = ?", [id]);
      } catch (dbErr) {
        console.error("DB delete product error:", dbErr);
      }
    }

    return NextResponse.json({ success: true, message: `Product ${id} deleted successfully from database` });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json({ success: false, message: "Failed to delete product" }, { status: 500 });
  }
}

