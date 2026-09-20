import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";
import { generateEpicReceiptHtml, sendOrderReceiptEmail } from "@/lib/email";
import { ADMIN_SESSION_COOKIE, verifyAdminSession } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";


interface StoredOrder {
  id: string;
  order_number: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  city: string;
  shipping_address: string;
  notes: string;
  payment_method: string;
  total_amount: number;
  items_json: string;
  items?: unknown[];
  status: string;
  created_at: string;
}

// In-memory persistent cache for serverless lifecycles
let memoryOrders: StoredOrder[] = [];

async function ensureOrdersTable() {
  const pool = getDbPool();
  if (!pool) return;

  try {
    await query(`
      CREATE TABLE IF NOT EXISTS orders (
        id VARCHAR(100) PRIMARY KEY,
        order_number VARCHAR(100) NOT NULL,
        customer_name VARCHAR(255) NOT NULL,
        customer_phone VARCHAR(50) NOT NULL,
        customer_email VARCHAR(255) NULL,
        city VARCHAR(100) NOT NULL,
        shipping_address TEXT NOT NULL,
        notes TEXT NULL,
        payment_method VARCHAR(50) DEFAULT 'cod',
        total_amount DECIMAL(12, 2) NOT NULL,
        items_json LONGTEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'new',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);
  } catch (err) {
    console.warn("Orders table ensure warning:", err);
  }
}

export async function GET(req: NextRequest) {
  const session = verifyAdminSession(req.cookies.get(ADMIN_SESSION_COOKIE)?.value);
  if (!session) {
    return NextResponse.json({ success: false, message: "Admin authentication required" }, { status: 401 });
  }

  try {
    const pool = getDbPool();
    if (pool) {
      await ensureOrdersTable();
      const rows = await query<StoredOrder>(
        "SELECT * FROM orders ORDER BY created_at DESC"
      );

      if (rows && rows.length > 0) {
        const formattedOrders = rows.map((order) => {
          let items = [];
          try {
            items = typeof order.items_json === "string" ? JSON.parse(order.items_json) : (order.items_json || []);
          } catch {
            items = [];
          }
          return { ...order, items };
        });

        return NextResponse.json({ success: true, source: "database", count: formattedOrders.length, data: formattedOrders });
      }
    }

    return NextResponse.json({ success: true, source: "memory", count: memoryOrders.length, data: memoryOrders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ success: true, source: "memory_fallback", data: memoryOrders });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      customerName,
      customerPhone,
      customerEmail,
      city,
      shippingAddress,
      notes,
      paymentMethod,
      totalAmount,
      items,
    } = body;

    if (!customerName || !customerPhone || !shippingAddress || !city || !items?.length) {
      return NextResponse.json(
        { success: false, message: "Missing required order fields" },
        { status: 400 }
      );
    }

    // Generate unique human-readable order number (e.g. ESA-94821)
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const orderNumber = `ESA-${randomSuffix}`;
    const orderId = `order_${Date.now()}_${randomSuffix}`;
    const itemsJson = JSON.stringify(items);

    const newOrder: StoredOrder = {
      id: orderId,
      order_number: orderNumber,
      customer_name: customerName,
      customer_phone: customerPhone,
      customer_email: customerEmail || "",
      city,
      shipping_address: shippingAddress,
      notes: notes || "",
      payment_method: paymentMethod || "cod",
      total_amount: Number(totalAmount),
      items_json: itemsJson,
      items,
      status: "new",
      created_at: new Date().toISOString(),
    };

    // Update in-memory persistent list
    memoryOrders = [newOrder, ...memoryOrders.filter((o) => o.id !== orderId)];

    const pool = getDbPool();
    if (pool) {
      try {
        await ensureOrdersTable();
        await query(
          `INSERT INTO orders (id, order_number, customer_name, customer_phone, customer_email, city, shipping_address, notes, payment_method, total_amount, items_json, status)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            orderId,
            orderNumber,
            customerName,
            customerPhone,
            customerEmail || null,
            city,
            shippingAddress,
            notes || null,
            paymentMethod || "cod",
            Number(totalAmount),
            itemsJson,
            "new",
          ]
        );
        console.log(`✅ Order #${orderNumber} saved to MySQL orders table!`);
      } catch (dbErr) {
        console.error("Database insert error (persisted in memory):", dbErr);
      }
    }

    // Generate Rich Epic Games & Amazon Styled HTML Receipt
    const receiptHtml = generateEpicReceiptHtml({
      orderNumber,
      customerName,
      customerEmail: customerEmail || "",
      shippingAddress,
      city,
      paymentMethod: paymentMethod || "cod",
      totalAmount: Number(totalAmount),
      items: items || [],
    });

    // Send Direct SMTP Email if configured (Hostinger / Gmail SMTP)
    try {
      await sendOrderReceiptEmail({
        orderNumber,
        customerName,
        customerEmail: customerEmail || "",
        shippingAddress,
        city,
        paymentMethod: paymentMethod || "cod",
        totalAmount: Number(totalAmount),
        items: items || [],
      });
    } catch (eErr) {
      console.error("Direct email send error:", eErr);
    }

    // Trigger Automation Webhook if configured (ViaSocket / Activepieces / Make / Zapier)
    const webhookUrl = process.env.ORDER_WEBHOOK_URL || process.env.VIASOCKET_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        console.log("🚀 Dispatching ViaSocket Webhook to:", webhookUrl);
        const webhookRes = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "order.created",
            to: customerEmail || process.env.ADMIN_EMAIL || "",
            email: customerEmail || process.env.ADMIN_EMAIL || "",
            recipient: customerEmail || process.env.ADMIN_EMAIL || "",
            subject: `ESA CAM Order Confirmation #${orderNumber} (تأكيد طلبك)`,
            messageBody: receiptHtml,
            html: receiptHtml,
            body: receiptHtml,
            orderNumber,
            orderId,
            customerName,
            customerEmail: customerEmail || "",
            customerPhone,
            city,
            shippingAddress,
            paymentMethod: paymentMethod || "cod",
            totalAmount: Number(totalAmount),
            currency: "EGP",
            items,
            orderDate: new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            receiptHtml,
          }),
        });
        console.log("✅ ViaSocket Webhook response status:", webhookRes.status);
      } catch (wErr) {
        console.error("❌ ViaSocket Webhook trigger error:", wErr);
      }
    }

    return NextResponse.json({
      success: true,
      orderNumber,
      orderId,
      data: newOrder,
      message: "Order placed successfully",
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process order" },
      { status: 500 }
    );
  }
}
