import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";
import { DEFAULT_SHIPPING_SETTINGS, ShippingSettings } from "@/data/shipping-defaults";

export const dynamic = "force-dynamic";

// In-memory fallback
let inMemoryShippingSettings: ShippingSettings = { ...DEFAULT_SHIPPING_SETTINGS };

interface SettingsRow {
  setting_key: string;
  setting_value: string | object;
}

export async function GET() {
  try {
    const pool = getDbPool();
    if (pool) {
      try {
        await query(`
          CREATE TABLE IF NOT EXISTS store_settings (
            setting_key VARCHAR(100) PRIMARY KEY,
            setting_value JSON NOT NULL,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        `);

        const rows = await query<SettingsRow>(
          "SELECT setting_key, setting_value FROM store_settings WHERE setting_key = 'shipping_settings' LIMIT 1"
        );

        if (rows.length > 0 && rows[0]?.setting_value) {
          const parsed = typeof rows[0].setting_value === "string" 
            ? JSON.parse(rows[0].setting_value) 
            : rows[0].setting_value;

          const merged: ShippingSettings = {
            ...DEFAULT_SHIPPING_SETTINGS,
            ...parsed,
          };
          return NextResponse.json({ success: true, source: "database", data: merged });
        }
      } catch (dbErr) {
        console.error("DB error fetching shipping settings:", dbErr);
      }
    }

    return NextResponse.json({ success: true, source: "fallback", data: inMemoryShippingSettings });
  } catch (error) {
    console.error("GET /api/shipping-settings error:", error);
    return NextResponse.json({ success: true, source: "default", data: DEFAULT_SHIPPING_SETTINGS });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newSettings: ShippingSettings = {
      ...DEFAULT_SHIPPING_SETTINGS,
      ...body,
    };

    inMemoryShippingSettings = newSettings;

    const pool = getDbPool();
    if (pool) {
      try {
        await query(`
          CREATE TABLE IF NOT EXISTS store_settings (
            setting_key VARCHAR(100) PRIMARY KEY,
            setting_value JSON NOT NULL,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        `);

        await query(
          `INSERT INTO store_settings (setting_key, setting_value)
           VALUES ('shipping_settings', ?)
           ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value), updated_at = CURRENT_TIMESTAMP`,
          [JSON.stringify(newSettings)]
        );
      } catch (dbErr) {
        console.error("DB error saving shipping settings:", dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Shipping settings updated successfully",
      data: newSettings,
    });
  } catch (error) {
    console.error("POST /api/shipping-settings error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update shipping settings" },
      { status: 500 }
    );
  }
}
