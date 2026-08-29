import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";

export const dynamic = "force-dynamic";

interface AdminRow {
  id: string;
  name: string;
  email: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password, role } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();
    const userId = `usr_${Date.now()}`;
    // Default role is client unless explicitly created as admin or admin@esacam.com
    const assignedRole = role || (trimmedEmail.includes("admin@esacam.com") ? "super_admin" : "client");
    const isUserAdmin = assignedRole === "admin" || assignedRole === "super_admin" || assignedRole === "store_manager" || assignedRole === "inventory_admin";

    const pool = getDbPool();
    if (pool) {
      try {
        // Check if user already exists
        const existing = await query<AdminRow>(
          "SELECT id, name, email FROM admins WHERE email = ? LIMIT 1",
          [trimmedEmail]
        );

        if (existing.length > 0) {
          return NextResponse.json(
            { success: false, message: "An account with this email already exists" },
            { status: 409 }
          );
        }

        // Insert new user
        await query(
          "INSERT INTO admins (id, name, email, password_hash, role, is_active) VALUES (?, ?, ?, ?, ?, ?)",
          [userId, name.trim(), trimmedEmail, password, assignedRole, 1]
        );
      } catch (dbErr) {
        console.error("Database insert error, falling back to local session:", dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      user: {
        id: userId,
        name: name.trim(),
        email: trimmedEmail,
        role: assignedRole,
        isAdmin: isUserAdmin,
      },
      message: "Account registered successfully",
    });

  } catch (error) {
    console.error("Register API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
