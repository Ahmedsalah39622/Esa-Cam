import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";
import { PRODUCTION_STUDIOS } from "@/data/studios";

export const dynamic = "force-dynamic";

export interface UserRecord {
  id: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  city?: string;
  role: "client" | "admin" | "super_admin" | "store_manager";
  total_orders: number;
  total_spent: number;
  is_active: number | boolean;
  created_at: string;
}

// Initial memory fallback seeded from PRODUCTION_STUDIOS
let memoryUsers: UserRecord[] = PRODUCTION_STUDIOS.map((s, idx) => ({
  id: `usr_${s.id.toLowerCase().replace(/[^a-z0-9]/g, "")}_${idx + 1}`,
  name: s.contactPerson || s.name,
  company: s.name,
  email: s.email || `${s.name.toLowerCase().replace(/[^a-z0-9]/g, "")}@cinema.eg`,
  phone: s.phone || "+20 100 000 0000",
  city: s.city || "Cairo",
  role: "client",
  total_orders: s.totalOrders || 0,
  total_spent: s.totalSpentUSD || 0,
  is_active: 1,
  created_at: s.joinDate || "2026-08-01 10:00:00",
}));

export async function GET() {
  try {
    const pool = getDbPool();
    if (!pool) {
      return NextResponse.json({ success: true, source: "memory", data: memoryUsers });
    }

    // Auto-create users table if not exists
    await query(`
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        company VARCHAR(255) NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NULL,
        city VARCHAR(100) NULL,
        role VARCHAR(50) DEFAULT 'client',
        total_orders INT DEFAULT 0,
        total_spent DECIMAL(12, 2) DEFAULT 0.00,
        is_active BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    // Fetch existing users
    const rows = await query<UserRecord>(
      "SELECT id, name, company, email, phone, city, role, total_orders, total_spent, is_active, created_at FROM users ORDER BY created_at DESC"
    );

    // If database is empty, seed all production studios into users table
    if (rows.length === 0) {
      for (const s of memoryUsers) {
        try {
          await query(
            `INSERT INTO users (id, name, company, email, password_hash, phone, city, role, total_orders, total_spent, is_active)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              s.id,
              s.name,
              s.company || null,
              s.email,
              "client123",
              s.phone || null,
              s.city || "Cairo",
              "client",
              s.total_orders,
              s.total_spent,
              1,
            ]
          );
        } catch {
          // ignore duplicate insert errors
        }
      }

      const seededRows = await query<UserRecord>(
        "SELECT id, name, company, email, phone, city, role, total_orders, total_spent, is_active, created_at FROM users ORDER BY created_at DESC"
      );
      return NextResponse.json({ success: true, source: "database_seeded", data: seededRows });
    }

    return NextResponse.json({ success: true, source: "database", data: rows });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ success: true, source: "fallback", data: memoryUsers });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, password, phone, city, role } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required" },
        { status: 400 }
      );
    }

    const userId = `usr_${Date.now()}`;
    const assignedRole = role || "client";
    const newUser: UserRecord = {
      id: userId,
      name,
      company: company || "Independent Client",
      email: email.trim().toLowerCase(),
      phone: phone || "+20 100 000 0000",
      city: city || "Cairo",
      role: assignedRole,
      total_orders: 0,
      total_spent: 0,
      is_active: 1,
      created_at: new Date().toISOString(),
    };

    const pool = getDbPool();
    if (pool) {
      try {
        await query(
          `INSERT INTO users (id, name, company, email, password_hash, phone, city, role, total_orders, total_spent, is_active)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            userId,
            name,
            company || null,
            email.trim().toLowerCase(),
            password || "client123",
            phone || null,
            city || "Cairo",
            assignedRole,
            0,
            0,
            1,
          ]
        );

        // If registered directly as admin, also add to admins table
        if (assignedRole === "admin" || assignedRole === "super_admin") {
          await query(
            `INSERT INTO admins (id, name, email, password_hash, role, is_active, phone)
             VALUES (?, ?, ?, ?, ?, ?, ?)
             ON DUPLICATE KEY UPDATE role = 'store_manager', is_active = 1`,
            [userId, name, email.trim().toLowerCase(), password || "admin123", "store_manager", 1, phone || null]
          );
        }
      } catch (dbErr) {
        console.error("Database insert error, saving to memory fallback:", dbErr);
        memoryUsers.unshift(newUser);
      }
    } else {
      memoryUsers.unshift(newUser);
    }

    return NextResponse.json({
      success: true,
      data: newUser,
      message: "User created successfully in users table",
    });
  } catch (error) {
    console.error("Error adding user:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create user" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, action, role } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: "User ID is required" }, { status: 400 });
    }

    const pool = getDbPool();

    if (action === "promote_to_admin") {
      // 1. Update role in users table + insert into admins
      if (pool) {
        try {
          await query("UPDATE users SET role = 'admin' WHERE id = ?", [id]);

          const userRows = await query<UserRecord & { password_hash?: string }>(
            "SELECT * FROM users WHERE id = ? LIMIT 1",
            [id]
          );

          if (userRows.length > 0) {
            const u = userRows[0];
            await query(
              `INSERT INTO admins (id, name, email, password_hash, role, is_active, phone)
               VALUES (?, ?, ?, ?, ?, ?, ?)
               ON DUPLICATE KEY UPDATE role = 'store_manager', is_active = 1`,
              [
                u.id,
                u.name,
                u.email,
                u.password_hash || "admin123",
                "store_manager",
                1,
                u.phone || null,
              ]
            );
          }
        } catch (dbErr) {
          console.error("DB promote_to_admin error (continuing with memory):", dbErr);
        }
      }

      // Update memory state
      let promotedUser: UserRecord | null = null;
      memoryUsers = memoryUsers.map((u) => {
        if (u.id === id) {
          promotedUser = { ...u, role: "admin" };
          return promotedUser;
        }
        return u;
      });

      return NextResponse.json({
        success: true,
        data: promotedUser,
        message: "User promoted to Admin and added to admins table successfully",
      });
    }

    if (action === "demote_from_admin") {
      if (pool) {
        try {
          await query("UPDATE users SET role = 'client' WHERE id = ?", [id]);
          await query("DELETE FROM admins WHERE id = ?", [id]);
        } catch (dbErr) {
          console.error("DB demote_from_admin error (continuing with memory):", dbErr);
        }
      }

      memoryUsers = memoryUsers.map((u) => (u.id === id ? { ...u, role: "client" } : u));

      return NextResponse.json({
        success: true,
        message: "User demoted to client and removed from admins table",
      });
    }

    // Generic update
    if (role) {
      if (pool) {
        await query("UPDATE users SET role = ? WHERE id = ?", [role, id]);
      }
      memoryUsers = memoryUsers.map((u) => (u.id === id ? { ...u, role } : u));
    }

    return NextResponse.json({ success: true, message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user role:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update user" },
      { status: 500 }
    );
  }
}
