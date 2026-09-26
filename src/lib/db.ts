import mysql from "mysql2/promise";

// Global connection pool instance
let pool: mysql.Pool | null = null;

export function getDbPool(): mysql.Pool | null {
  const host = process.env.DB_HOST;
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  const database = process.env.DB_NAME;

  if (!host || !user || !database) {
    return null;
  }

  if (!pool) {
    pool = mysql.createPool({
      host,
      user,
      password: password || "",
      database,
      port: Number(process.env.DB_PORT) || 3306,
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0,
      connectTimeout: 10000,
      enableKeepAlive: true,
      keepAliveInitialDelay: 10000,
      ssl:
        process.env.DB_SSL === "true"
          ? { rejectUnauthorized: false }
          : undefined,
    });

    // Handle pool errors to prevent unhandled promise rejections from crashing the process
    pool.on("connection", () => {
      // Connection acquired – no-op, just preventing unhandled events
    });
  }

  return pool;
}

export async function query<T = Record<string, unknown>>(
  sql: string,
  params: (string | number | boolean | null)[] = []
): Promise<T[]> {
  const dbPool = getDbPool();
  if (!dbPool) {
    throw new Error("DATABASE_NOT_CONFIGURED");
  }

  let lastError: unknown;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const [rows] = await dbPool.execute(sql, params);
      return rows as T[];
    } catch (err: unknown) {
      lastError = err;
      const code = (err as { code?: string })?.code;
      // Retry on transient connection errors
      if (
        code === "ECONNRESET" ||
        code === "ECONNREFUSED" ||
        code === "ETIMEDOUT" ||
        code === "PROTOCOL_CONNECTION_LOST"
      ) {
        console.warn(`DB query attempt ${attempt + 1} failed (${code}), retrying...`);
        await new Promise((r) => setTimeout(r, 500));
        continue;
      }
      throw err;
    }
  }
  throw lastError;
}

export async function ensureOrderPaymentStatusColumn(): Promise<void> {
  if (!getDbPool()) return;

  const columns = await query<{ Field: string }>("SHOW COLUMNS FROM orders");
  if (columns.some((column) => column.Field === "payment_status")) return;

  try {
    await query(
      "ALTER TABLE orders ADD COLUMN payment_status ENUM('pending', 'paid', 'failed') NOT NULL DEFAULT 'pending' AFTER payment_method",
    );
  } catch (error) {
    if ((error as { code?: string })?.code !== "ER_DUP_FIELDNAME") throw error;
  }
}
