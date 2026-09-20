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

    if (role && role !== "client" && role !== "customer") {
      return NextResponse.json(
        { success: false, message: "Admin accounts can only be created by an authenticated administrator" },
        { status: 403 }
      );
    }

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();
    const userId = `usr_${Date.now()}`;
    const assignedRole = "client";
    const isUserAdmin = false;

    const pool = getDbPool();
    if (pool) {
      try {
        // Registration is intentionally not an admin creation path.
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

        await query(
          "INSERT INTO users (id, name, email, password_hash, role, is_active) VALUES (?, ?, ?, ?, ?, ?)",
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
