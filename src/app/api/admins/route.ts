import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";
import { ADMIN_SESSION_COOKIE, hashPassword, verifyAdminSession } from "@/lib/admin-auth";

export interface AdminRecord {
  id: string;
  name: string;
  email: string;
  role: "super_admin" | "store_manager" | "inventory_admin" | "support_agent";
  is_active: number | boolean;
  phone?: string;
  created_at: string;
}

let memoryAdmins: AdminRecord[] = [
  {
    id: "admin_master",
    name: "Ahmed Mahmoud",
    email: "admin@esacam.com",
    role: "super_admin",
    is_active: 1,
    phone: "+20 100 892 3411",
    created_at: "2026-08-01 10:00:00",
  },
  {
    id: "admin_sarah",
    name: "Sarah El-Gohary",
    email: "sarah@esacam.com",
    role: "store_manager",
    is_active: 1,
    phone: "+20 111 452 9820",
    created_at: "2026-08-10 14:30:00",
  },
  {
    id: "admin_karim",
    name: "Karim Mostafa",
    email: "karim@esacam.com",
    role: "inventory_admin",
    is_active: 1,
    phone: "+20 122 783 1944",
    created_at: "2026-08-15 09:15:00",
  },
  {
    id: "admin_tariq",
    name: "Tariq Nabil",
    email: "support@esacam.com",
    role: "support_agent",
    is_active: 1,
    phone: "+20 102 334 5566",
    created_at: "2026-08-20 11:45:00",
  },
];

const ADMIN_ROLES: AdminRecord["role"][] = ["super_admin", "store_manager", "inventory_admin", "support_agent"];

function requireSuperAdmin(request: NextRequest) {
  const session = verifyAdminSession(request.cookies.get(ADMIN_SESSION_COOKIE)?.value);
  if (!session || session.role !== "super_admin") {
    return null;
  }
  return session;
}

async function ensureAdminsTable() {
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
  // Older deployments used an ENUM that rejected inventory_admin/support_agent.
  await query("ALTER TABLE admins MODIFY role VARCHAR(50) NOT NULL DEFAULT 'store_manager'");

  const columns = await query<{ COLUMN_NAME: string }>(
    `SELECT COLUMN_NAME
     FROM INFORMATION_SCHEMA.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'admins'
       AND COLUMN_NAME IN ('phone', 'created_at')`
  );
  const existingColumns = new Set(columns.map((column) => column.COLUMN_NAME));
  if (!existingColumns.has("phone")) {
    await query("ALTER TABLE admins ADD COLUMN phone VARCHAR(50) NULL");
  }
  if (!existingColumns.has("created_at")) {
    await query("ALTER TABLE admins ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP");
  }
}

export async function GET(req: NextRequest) {
  if (!requireSuperAdmin(req)) {
    return NextResponse.json({ success: false, message: "Super admin access required" }, { status: 403 });
  }
  try {
    const pool = getDbPool();
    if (!pool) {
      return NextResponse.json({ success: true, source: "memory", data: memoryAdmins });
    }

    await ensureAdminsTable();

    const rows = await query<AdminRecord>(
      "SELECT id, name, email, role, is_active, phone, created_at FROM admins ORDER BY created_at ASC"
    );

    if (rows.length === 0) {
      // Seed default master admin
      await query(
        "INSERT INTO admins (id, name, email, password_hash, role, is_active, phone) VALUES (?, ?, ?, ?, ?, ?, ?)",
        ["admin_master", "Ahmed Mahmoud", "admin@esacam.com", await hashPassword("admin123"), "super_admin", 1, "+20 100 892 3411"]
      );
      return NextResponse.json({ success: true, source: "database_seeded", data: memoryAdmins });
    }

    return NextResponse.json({ success: true, source: "database", data: rows });
  } catch (error) {
    console.error("Error fetching admins:", error);
    return NextResponse.json({ success: false, message: "Failed to load admin accounts" }, { status: 503 });
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!requireSuperAdmin(req)) {
      return NextResponse.json({ success: false, message: "Super admin access required" }, { status: 403 });
    }
    const body = await req.json();
    const { name, email, password, role, phone } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    if (password.length < 8) {
      return NextResponse.json({ success: false, message: "Password must be at least 8 characters" }, { status: 400 });
    }
    if (role && !ADMIN_ROLES.includes(role)) {
      return NextResponse.json({ success: false, message: "Invalid admin role" }, { status: 400 });
    }
    const adminId = `admin_${Date.now()}`;
    const newAdmin: AdminRecord = {
      id: adminId,
      name,
      email: normalizedEmail,
      role: role || "store_manager",
      is_active: 1,
      phone: phone || "+20 100 000 0000",
      created_at: new Date().toISOString(),
    };

    const pool = getDbPool();
    if (!pool) return NextResponse.json({ success: false, message: "Database is not configured" }, { status: 503 });
    await ensureAdminsTable();
    await query(
      "INSERT INTO admins (id, name, email, password_hash, role, is_active, phone) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [adminId, name.trim(), normalizedEmail, await hashPassword(password), role || "store_manager", 1, phone || null]
    );

    return NextResponse.json({
      success: true,
      data: newAdmin,
      message: "Admin created successfully",
    });
  } catch (error) {
    console.error("Error adding admin:", error);
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Failed to create admin user" },
      { status: 503 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    if (!requireSuperAdmin(req)) {
      return NextResponse.json({ success: false, message: "Super admin access required" }, { status: 403 });
    }
    const body = await req.json();
    const { id, role, is_active, name, email, phone, password } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: "Admin ID is required" }, { status: 400 });
    }

    if (id === "admin_master" && (role !== undefined || is_active === false)) {
      return NextResponse.json({ success: false, message: "The master administrator cannot be demoted or suspended" }, { status: 400 });
    }

    if (password !== undefined && password.length < 8) {
      return NextResponse.json({ success: false, message: "Password must be at least 8 characters" }, { status: 400 });
    }
    if (role !== undefined && !ADMIN_ROLES.includes(role)) {
      return NextResponse.json({ success: false, message: "Invalid admin role" }, { status: 400 });
    }

    const normalizedEmail = email?.trim().toLowerCase();
    const pool = getDbPool();
    if (pool) {
      await ensureAdminsTable();
      const updates: string[] = [];
      const values: (string | number | boolean | null)[] = [];


      if (role !== undefined) {
        updates.push("role = ?");
        values.push(role);
      }
      if (is_active !== undefined) {
        updates.push("is_active = ?");
        values.push(is_active ? 1 : 0);
      }
      if (name !== undefined) {
        updates.push("name = ?");
        values.push(name);
      }
      if (phone !== undefined) {
        updates.push("phone = ?");
        values.push(phone);
      }
      if (normalizedEmail) {
        updates.push("email = ?");
        values.push(normalizedEmail);
      }
      if (password) {
        updates.push("password_hash = ?");
        values.push(await hashPassword(password));
      }

      if (updates.length > 0) {
        values.push(id);
        await query(`UPDATE admins SET ${updates.join(", ")} WHERE id = ?`, values);
      }
    }

    // Update memory
    memoryAdmins = memoryAdmins.map((a) => {
      if (a.id === id) {
        return {
          ...a,
          ...(role !== undefined ? { role } : {}),
          ...(is_active !== undefined ? { is_active: is_active ? 1 : 0 } : {}),
          ...(name !== undefined ? { name } : {}),
          ...(phone !== undefined ? { phone } : {}),
          ...(normalizedEmail ? { email: normalizedEmail } : {}),
        };
      }
      return a;
    });

    return NextResponse.json({ success: true, message: "Admin updated successfully" });
  } catch (error) {
    console.error("Error updating admin:", error);
    return NextResponse.json({ success: false, message: error instanceof Error ? error.message : "Failed to update admin" }, { status: 503 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = requireSuperAdmin(req);
    if (!session) {
      return NextResponse.json({ success: false, message: "Super admin access required" }, { status: 403 });
    }
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id || id === "admin_master" || id === session.id) {
      return NextResponse.json(
        { success: false, message: "Cannot delete the master or current administrator" },
        { status: 400 }
      );
    }

    const pool = getDbPool();
    if (!pool) return NextResponse.json({ success: false, message: "Database is not configured" }, { status: 503 });
    await ensureAdminsTable();
    const deleted = await query<{ affectedRows?: number }>("DELETE FROM admins WHERE id = ?", [id]);
    if (!deleted) {
      return NextResponse.json({ success: false, message: "Admin account was not found" }, { status: 404 });
    }

    memoryAdmins = memoryAdmins.filter((a) => a.id !== id);

    return NextResponse.json({ success: true, message: "Admin removed successfully" });
  } catch (error) {
    console.error("Error deleting admin:", error);
    return NextResponse.json({ success: false, message: error instanceof Error ? error.message : "Failed to delete admin" }, { status: 503 });
  }
}

