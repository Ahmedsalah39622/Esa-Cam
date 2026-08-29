import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";

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

export async function GET() {
  try {
    const pool = getDbPool();
    if (!pool) {
      return NextResponse.json({ success: true, source: "memory", data: memoryAdmins });
    }

    // Auto-create table if not exists
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
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    const rows = await query<AdminRecord>(
      "SELECT id, name, email, role, is_active, phone, created_at FROM admins ORDER BY created_at ASC"
    );

    if (rows.length === 0) {
      // Seed default master admin
      await query(
        "INSERT INTO admins (id, name, email, password_hash, role, is_active, phone) VALUES (?, ?, ?, ?, ?, ?, ?)",
        ["admin_master", "Ahmed Mahmoud", "admin@esacam.com", "admin", "super_admin", 1, "+20 100 892 3411"]
      );
      return NextResponse.json({ success: true, source: "database_seeded", data: memoryAdmins });
    }

    return NextResponse.json({ success: true, source: "database", data: rows });
  } catch (error) {
    console.error("Error fetching admins:", error);
    return NextResponse.json({ success: true, source: "fallback", data: memoryAdmins });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password, role, phone } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    const adminId = `admin_${Date.now()}`;
    const newAdmin: AdminRecord = {
      id: adminId,
      name,
      email,
      role: role || "store_manager",
      is_active: 1,
      phone: phone || "+20 100 000 0000",
      created_at: new Date().toISOString(),
    };

    const pool = getDbPool();
    if (pool) {
      try {
        await query(
          "INSERT INTO admins (id, name, email, password_hash, role, is_active, phone) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [adminId, name, email, password, role || "store_manager", 1, phone || null]
        );
      } catch (dbErr) {
        console.error("Database insert error:", dbErr);
        memoryAdmins.push(newAdmin);
      }
    } else {
      memoryAdmins.push(newAdmin);
    }

    return NextResponse.json({
      success: true,
      data: newAdmin,
      message: "Admin created successfully",
    });
  } catch (error) {
    console.error("Error adding admin:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create admin user" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, role, is_active, name, phone } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: "Admin ID is required" }, { status: 400 });
    }

    const pool = getDbPool();
    if (pool) {
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
        };
      }
      return a;
    });

    return NextResponse.json({ success: true, message: "Admin updated successfully" });
  } catch (error) {
    console.error("Error updating admin:", error);
    return NextResponse.json({ success: false, message: "Failed to update admin" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id || id === "admin_master") {
      return NextResponse.json(
        { success: false, message: "Cannot delete master administrator" },
        { status: 400 }
      );
    }

    const pool = getDbPool();
    if (pool) {
      await query("DELETE FROM admins WHERE id = ?", [id]);
    }

    memoryAdmins = memoryAdmins.filter((a) => a.id !== id);

    return NextResponse.json({ success: true, message: "Admin removed successfully" });
  } catch (error) {
    console.error("Error deleting admin:", error);
    return NextResponse.json({ success: false, message: "Failed to delete admin" }, { status: 500 });
  }
}

