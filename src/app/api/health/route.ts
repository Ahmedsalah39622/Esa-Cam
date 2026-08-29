import { NextResponse } from "next/server";
import { getDbPool } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const status: {
      timestamp: string;
      database: string;
      tables: string[];
      ordersCount?: number;
      productsCount?: number;
      env: Record<string, string>;
    } = {
      timestamp: new Date().toISOString(),
      database: "not_configured",
      tables: [],
      env: {
        DB_HOST: process.env.DB_HOST ? "✓ set" : "✗ missing",
        DB_USER: process.env.DB_USER ? "✓ set" : "✗ missing",
        DB_PASSWORD: process.env.DB_PASSWORD ? "✓ set" : "✗ missing",
        DB_NAME: process.env.DB_NAME ? "✓ set" : "✗ missing",
      },
    };

    const pool = getDbPool();
    if (pool) {
      try {
        const [rows] = await pool.execute("SHOW TABLES");
        const tableList = (rows as Record<string, string>[]).map(
          (row) => Object.values(row)[0]
        );
        status.database = "connected";
        status.tables = tableList;

        const [orderRows] = (await pool.execute("SELECT COUNT(*) as cnt FROM orders")) as [Array<{ cnt: number }>, unknown];
        const [productRows] = (await pool.execute("SELECT COUNT(*) as cnt FROM products")) as [Array<{ cnt: number }>, unknown];
        status.ordersCount = orderRows[0]?.cnt || 0;
        status.productsCount = productRows[0]?.cnt || 0;
      } catch (err) {
        status.database = `error: ${err instanceof Error ? err.message : "unknown"}`;
      }
    }

    return NextResponse.json(status);
  } catch (error) {
    console.error("Health check error:", error);
    return NextResponse.json({
      timestamp: new Date().toISOString(),
      database: "error",
      tables: [],
      env: {},
    });
  }
}
