import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

interface BulkUpdateItem {
  id: string;
  price: number;
  originalPrice?: number | null;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items, isLastChunk, allUpdatedItems } = body as {
      items?: BulkUpdateItem[];
      isLastChunk?: boolean;
      allUpdatedItems?: BulkUpdateItem[];
    };

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { success: false, message: "No items provided for price update" },
        { status: 400 }
      );
    }

    // 1. Update MySQL database using batch CASE statement
    const pool = getDbPool();
    if (pool) {
      try {
        const ids = items.map((it) => it.id);
        const casesPrice = items.map(() => "WHEN ? THEN ?").join(" ");
        const params: (string | number | null)[] = [];

        // Build price params
        items.forEach((it) => {
          params.push(it.id, Number(it.price));
        });

        // Build original_price cases if any
        const hasOriginalPrices = items.some((it) => it.originalPrice !== undefined);
        let origPriceClause = "";
        if (hasOriginalPrices) {
          const casesOrig = items.map(() => "WHEN ? THEN ?").join(" ");
          origPriceClause = `, original_price = CASE id ${casesOrig} ELSE original_price END`;
          items.forEach((it) => {
            params.push(it.id, it.originalPrice !== undefined && it.originalPrice !== null ? Number(it.originalPrice) : null);
          });
        }

        // Add IDs for WHERE IN (...)
        params.push(...ids);
        const placeholders = ids.map(() => "?").join(",");

        const sql = `UPDATE products SET price = CASE id ${casesPrice} END ${origPriceClause} WHERE id IN (${placeholders})`;
        await query(sql, params);
      } catch (dbErr) {
        console.error("Bulk price DB update warning:", dbErr);
      }
    }

    // 2. Persist to disk if it's the last chunk or single chunk
    if (isLastChunk) {
      try {
        const filePath = path.join(process.cwd(), "src/data/all-combined-products.json");
        if (fs.existsSync(filePath)) {
          const raw = fs.readFileSync(filePath, "utf8");
          const catalog = JSON.parse(raw);
          const sourceItems = allUpdatedItems && Array.isArray(allUpdatedItems) ? allUpdatedItems : items;
          const updateMap = new Map(sourceItems.map((it) => [it.id, it]));

          const updatedCatalog = catalog.map((p: { id: string; price: number; originalPrice?: number }) => {
            const upd = updateMap.get(p.id);
            if (upd) {
              return {
                ...p,
                price: Number(upd.price),
                originalPrice: upd.originalPrice !== undefined ? (upd.originalPrice ? Number(upd.originalPrice) : undefined) : p.originalPrice,
              };
            }
            return p;
          });

          fs.writeFileSync(filePath, JSON.stringify(updatedCatalog, null, 2), "utf8");
        }
      } catch (fileErr) {
        console.warn("Could not save bulk price updates to disk:", fileErr);
      }
    }

    return NextResponse.json({
      success: true,
      updatedCount: items.length,
      isLastChunk: !!isLastChunk,
    });
  } catch (error) {
    console.error("Bulk price route error:", error);
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
