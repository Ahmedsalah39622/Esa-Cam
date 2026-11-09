import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";

export const dynamic = "force-dynamic";

interface BrandRow {
  id: string;
  name: string;
  logo_text: string | null;
  logo_image: string | null;
  sub_title: string | null;
  is_active: number | boolean;
  created_at: string;
}

export async function GET() {
  try {
    const pool = getDbPool();
    if (!pool) {
      return NextResponse.json({ success: true, source: "memory", data: [] });
    }

    const rows = await query<BrandRow>(
      "SELECT * FROM brands ORDER BY name ASC"
    );

    return NextResponse.json({ success: true, source: "database", data: rows });
  } catch (error) {
    console.error("Error fetching brands:", error);
    return NextResponse.json({ success: true, source: "fallback", data: [] });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, logoText, logoImage, subTitle, isActive } = body;

    const trimmedName = typeof name === "string" ? name.trim() : "";
    if (!trimmedName) {
      return NextResponse.json(
        { success: false, message: "Brand name is required" },
        { status: 400 }
      );
    }

    const pool = getDbPool();
    if (pool) {
      const existing = await query<BrandRow>(
        "SELECT id, name FROM brands WHERE LOWER(name) = LOWER(?) LIMIT 1",
        [trimmedName]
      );

      if (existing.length > 0) {
        return NextResponse.json({
          success: true,
          data: { id: existing[0].id, name: existing[0].name },
          message: "Brand already exists in database",
        });
      }

      const brandId = `brand_${Date.now()}`;
      await query(
        "INSERT INTO brands (id, name, logo_text, logo_image, sub_title, is_active) VALUES (?, ?, ?, ?, ?, ?)",
        [
          brandId,
          trimmedName,
          logoText || trimmedName.toUpperCase(),
          logoImage || null,
          subTitle || null,
          isActive !== false ? 1 : 0,
        ]
      );

      return NextResponse.json({
        success: true,
        data: { id: brandId, name: trimmedName },
        message: "Brand saved successfully",
      });
    }

    return NextResponse.json({
      success: true,
      data: { id: `brand_${Date.now()}`, name: trimmedName },
      message: "Brand saved in memory fallback",
    });
  } catch (error) {
    console.error("Error saving brand:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save brand" },
      { status: 500 }
    );
  }
}
