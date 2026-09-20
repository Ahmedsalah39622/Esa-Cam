import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";
import { ADMIN_SESSION_COOKIE, createAdminSession, hashPassword, verifyPassword } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";


interface AdminRow {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  role: string;
  is_active: number | boolean;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email/Username and password are required" },
        { status: 400 }
      );
    }

    const trimmedIdentifier = email.trim().toLowerCase();

    const pool = getDbPool();
    if (!pool) return NextResponse.json({ success: false, message: "Admin database is not configured" }, { status: 503 });
    await query(`
      CREATE TABLE IF NOT EXISTS admins (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'store_manager',
        is_active BOOLEAN DEFAULT TRUE,
        phone VARCHAR(50) NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    const rows = await query<AdminRow>(
      "SELECT * FROM admins WHERE (LOWER(email) = ? OR LOWER(name) = ?) AND is_active = 1 LIMIT 1",
      [trimmedIdentifier, trimmedIdentifier]
    );
    if (rows.length === 0 && ["admin@esacam.com", "admin"].includes(trimmedIdentifier)) {
      await query(
        "INSERT INTO admins (id, name, email, password_hash, role, is_active) VALUES (?, ?, ?, ?, ?, ?)",
        ["admin_master", "Ahmed Mahmoud", "admin@esacam.com", await hashPassword("admin123"), "super_admin", 1]
      );
    }
    const refreshedRows = rows.length === 0
      ? await query<AdminRow>("SELECT * FROM admins WHERE (LOWER(email) = ? OR LOWER(name) = ?) AND is_active = 1 LIMIT 1", [trimmedIdentifier, trimmedIdentifier])
      : rows;
    const admin = refreshedRows[0];
    const validPassword = admin?.password_hash.startsWith("scrypt$")
      ? await verifyPassword(password, admin.password_hash)
      : admin?.password_hash === password;
    if (!admin || !validPassword) {
      return NextResponse.json({ success: false, message: "Invalid admin credentials" }, { status: 401 });
    }
    if (!admin.password_hash.startsWith("scrypt$")) {
      await query("UPDATE admins SET password_hash = ? WHERE id = ?", [await hashPassword(password), admin.id]);
    }
    const user = { id: admin.id, name: admin.name, email: admin.email, role: admin.role, isAdmin: true };
    const response = NextResponse.json({ success: true, user, message: "Login successful" });
    response.cookies.set(ADMIN_SESSION_COOKIE, createAdminSession(user), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 8,
      path: "/",
    });
    return response;
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

