import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

// Ensure coupons table exists
async function ensureCouponsTable() {
  await query(`
    CREATE TABLE IF NOT EXISTS coupons (
      code VARCHAR(50) PRIMARY KEY,
      discount_percent INT NOT NULL,
      description VARCHAR(255) NULL,
      start_date DATE NOT NULL,
      end_date DATE NOT NULL,
      is_single_use BOOLEAN DEFAULT FALSE,
      usage_count INT DEFAULT 0,
      is_active BOOLEAN DEFAULT TRUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `);

  // Insert starter default coupons if table is empty
  const rows = await query<{ cnt: number }>("SELECT COUNT(*) as cnt FROM coupons");
  if (rows.length === 0 || rows[0].cnt === 0) {
    await query(`
      INSERT INTO coupons (code, discount_percent, description, start_date, end_date, is_single_use, usage_count, is_active)
      VALUES 
        ('CINE10', 10, '10% Universal Creator Discount for cinema gear', '2026-01-01', '2026-12-31', FALSE, 14, TRUE),
        ('ESAFILM15', 15, '15% Filmmaker Master Bundle Promotion', '2026-01-01', '2026-12-31', FALSE, 8, TRUE),
        ('VIP50', 50, '50% VIP Single-Use Exclusive Voucher', '2026-01-01', '2026-12-31', TRUE, 0, TRUE)
    `);
  }
}

export async function GET() {
  try {
    await ensureCouponsTable();
    const rows = await query("SELECT * FROM coupons ORDER BY created_at DESC");
    return NextResponse.json({ success: true, coupons: rows });
  } catch (error) {
    console.error("GET /api/coupons error:", error);
    return NextResponse.json({ success: false, coupons: [] }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await ensureCouponsTable();
    const body = await req.json();
    const {
      code,
      discount_percent,
      description,
      start_date,
      end_date,
      is_single_use,
      is_active,
    } = body;

    if (!code || !discount_percent || !start_date || !end_date) {
      return NextResponse.json(
        { success: false, message: "Code, discount percentage, start date, and end date are required." },
        { status: 400 }
      );
    }

    const cleanCode = String(code).trim().toUpperCase();

    await query(
      `INSERT INTO coupons (code, discount_percent, description, start_date, end_date, is_single_use, is_active)
       VALUES (?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         discount_percent = VALUES(discount_percent),
         description = VALUES(description),
         start_date = VALUES(start_date),
         end_date = VALUES(end_date),
         is_single_use = VALUES(is_single_use),
         is_active = VALUES(is_active)`,
      [
        cleanCode,
        Number(discount_percent),
        description || "",
        start_date,
        end_date,
        Boolean(is_single_use),
        is_active !== undefined ? Boolean(is_active) : true,
      ]
    );

    return NextResponse.json({
      success: true,
      message: `Coupon ${cleanCode} saved successfully.`,
    });
  } catch (error) {
    console.error("POST /api/coupons error:", error);
    return NextResponse.json(
      { success: false, message: "Database error while saving coupon." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    await ensureCouponsTable();
    const body = await req.json();
    const { code, is_active, increment_usage } = body;

    if (!code) {
      return NextResponse.json({ success: false, message: "Coupon code required." }, { status: 400 });
    }

    if (increment_usage) {
      await query(
        "UPDATE coupons SET usage_count = usage_count + 1 WHERE code = ?",
        [String(code).toUpperCase()]
      );
    } else if (is_active !== undefined) {
      await query(
        "UPDATE coupons SET is_active = ? WHERE code = ?",
        [Boolean(is_active), String(code).toUpperCase()]
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PATCH /api/coupons error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await ensureCouponsTable();
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");

    if (!code) {
      return NextResponse.json({ success: false, message: "Code parameter missing" }, { status: 400 });
    }

    await query("DELETE FROM coupons WHERE code = ?", [String(code).toUpperCase()]);

    return NextResponse.json({ success: true, message: `Coupon ${code} deleted.` });
  } catch (error) {
    console.error("DELETE /api/coupons error:", error);
    return NextResponse.json({ success: false, message: "Database delete failed" }, { status: 500 });
  }
}
