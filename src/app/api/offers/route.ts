import { NextRequest, NextResponse } from "next/server";
import { getDbPool, query } from "@/lib/db";
import { Product, OFFERS } from "@/data/products";

export const dynamic = "force-dynamic";

async function ensureOffersTable() {
  await query(`
    CREATE TABLE IF NOT EXISTS admin_catalog_offers (
      id VARCHAR(100) PRIMARY KEY,
      offer_json JSON NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);
}

function parseOffer(value: Product | string): Product {
  return typeof value === "string" ? JSON.parse(value) as Product : value;
}

export async function GET() {
  if (!getDbPool()) {
    return NextResponse.json({ success: true, source: "defaults", persistenceAvailable: false, count: OFFERS.length, data: OFFERS });
  }

  try {
    await ensureOffersTable();
    const rows = await query<{ offer_json: Product | string }>(
      "SELECT offer_json FROM admin_catalog_offers ORDER BY created_at DESC"
    );
    const savedOffers = rows.map((row) => parseOffer(row.offer_json));
    const savedIds = new Set(savedOffers.map((offer) => offer.id));
    const data = [...savedOffers, ...OFFERS.filter((offer) => !savedIds.has(offer.id))];

    return NextResponse.json({ success: true, source: "database", persistenceAvailable: true, count: data.length, data });
  } catch (error) {
    console.error("Could not fetch offers:", error);
    return NextResponse.json({
      success: true,
      source: "defaults",
      persistenceAvailable: false,
      count: OFFERS.length,
      data: OFFERS,
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!getDbPool()) {
      return NextResponse.json(
        { success: false, message: "Database is not configured. Set DB_HOST, DB_USER, and DB_NAME to save offers." },
        { status: 503 }
      );
    }

    const payload = (await request.json()) as Partial<Product>;
    const price = Number(payload.price);
    if (
      !payload.name?.trim() ||
      !Number.isFinite(price) ||
      price <= 0 ||
      !Array.isArray(payload.bundleProductIds) ||
      payload.bundleProductIds.length < 2
    ) {
      return NextResponse.json({ success: false, message: "A name, valid price, and at least two products are required" }, { status: 400 });
    }

    const newOffer: Product = {
      id: payload.id || `offer-${Date.now()}`,
      name: payload.name.trim(),
      brand: payload.brand || "Custom",
      category: "deals",
      price,
      originalPrice: payload.originalPrice ? Number(payload.originalPrice) : undefined,
      rating: Number(payload.rating ?? 4.8),
      reviewsCount: Number(payload.reviewsCount ?? 0),
      image: payload.image || "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80",
      badge: payload.badge || (payload.originalPrice && payload.price ? `SAVE ${Math.round(((Number(payload.originalPrice) - Number(payload.price)) / Number(payload.originalPrice)) * 100)}%` : "HOT DEAL"),
      isBestSeller: Boolean(payload.isBestSeller),
      isSale: true,
      stockStatus: payload.stockStatus || "in-stock",
      stockCount: payload.stockCount || 1,
      shortDescription: payload.shortDescription || "Special offer created from the admin catalog.",
      items: payload.items || ["Main bundle item", "Accessory kit"],
      bundleProductIds: payload.bundleProductIds,
      specs: payload.specs || [{ label: "Bundle", value: "Custom offer" }],
      features: payload.features || ["Official distributor support", "Fast delivery"],
      inTheBox: payload.inTheBox || ["Main unit", "Documentation"],
    };

    await ensureOffersTable();
    await query(
      `INSERT INTO admin_catalog_offers (id, offer_json) VALUES (?, ?)
       ON DUPLICATE KEY UPDATE offer_json = VALUES(offer_json)`,
      [newOffer.id, JSON.stringify(newOffer)]
    );

    return NextResponse.json({
      success: true,
      message: "Offer created successfully",
      data: newOffer,
    });
  } catch (error) {
    console.error("Could not create offer:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Could not save offer to the database",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    if (!getDbPool()) {
      return NextResponse.json(
        { success: false, message: "Database is not configured. Set DB_HOST, DB_USER, and DB_NAME to manage offers." },
        { status: 503 }
      );
    }

    const { searchParams } = new URL(request.url);
    await ensureOffersTable();
    if (searchParams.get("reset") === "true") {
      await query("DELETE FROM admin_catalog_offers");
    } else {
      const id = searchParams.get("id");
      if (!id) {
        return NextResponse.json({ success: false, message: "Offer ID is required" }, { status: 400 });
      }
      await query("DELETE FROM admin_catalog_offers WHERE id = ?", [id]);
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Could not delete offer:", error);
    return NextResponse.json({ success: false, message: "Could not delete offer" }, { status: 500 });
  }
}
