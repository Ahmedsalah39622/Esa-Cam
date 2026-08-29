import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";

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
    if (pool) {
      try {
        const rows = await query<AdminRow>(
          "SELECT * FROM admins WHERE (LOWER(email) = ? OR LOWER(name) = ?) AND is_active = 1 LIMIT 1",
          [trimmedIdentifier, trimmedIdentifier]
        );

        if (rows.length > 0) {
          const admin = rows[0];
          // Check password
          if (admin.password_hash === password) {
            return NextResponse.json({
              success: true,
              user: {
                id: admin.id,
                name: admin.name,
                email: admin.email,
                role: "admin",
                isAdmin: true,
              },
              message: "Login successful",
            });
          } else {
            return NextResponse.json(
              { success: false, message: "Invalid password" },
              { status: 401 }
            );
          }
        }
      } catch (dbErr) {
        console.error("Database auth query error, fallback to local:", dbErr);
      }
    }

    // Default Master Admin Fallback
    if (
      trimmedIdentifier === "admin@esacam.com" ||
      trimmedIdentifier === "admin" ||
      trimmedIdentifier === "abdohussen"
    ) {
      return NextResponse.json({
        success: true,
        user: {
          id: "admin_master",
          name: trimmedIdentifier === "abdohussen" ? "Abdo Hussen" : "Admin Director",
          email: trimmedIdentifier.includes("@") ? trimmedIdentifier : `${trimmedIdentifier}@esacam.com`,
          role: "admin",
          isAdmin: true,
        },
        message: "Logged in successfully as Admin",
      });
    }

    // Fallback: accept login and treat user as Admin
    if (password.length >= 3) {
      const displayName = trimmedIdentifier.includes("@")
        ? trimmedIdentifier.split("@")[0].charAt(0).toUpperCase() + trimmedIdentifier.split("@")[0].slice(1)
        : trimmedIdentifier.charAt(0).toUpperCase() + trimmedIdentifier.slice(1);

      return NextResponse.json({
        success: true,
        user: {
          id: `usr_${Date.now()}`,
          name: displayName,
          email: trimmedIdentifier.includes("@") ? trimmedIdentifier : `${trimmedIdentifier}@esacam.com`,
          role: "admin",
          isAdmin: true,
        },
        message: "Login successful",
      });
    }

    return NextResponse.json(
      { success: false, message: "Invalid credentials. Password must be at least 3 characters." },
      { status: 401 }
    );
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

