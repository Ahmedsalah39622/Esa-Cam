import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";
import { generateEpicReceiptHtml, sendOrderReceiptEmail } from "@/lib/email";

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

// In-memory fallback if database connection is pending configuration
const memoryOrders: StoredOrder[] = [];

export async function GET() {
  try {
    const pool = getDbPool();
    if (!pool) {
      return NextResponse.json({ success: true, source: "memory", data: memoryOrders });
    }

    const rows = await query<StoredOrder>(
      "SELECT * FROM orders ORDER BY created_at DESC"
    );

    const formattedOrders = rows.map((order) => {
      let items = [];
      try {
        items = typeof order.items_json === "string" ? JSON.parse(order.items_json) : (order.items_json || []);
      } catch {
        items = [];
      }
      return { ...order, items };
    });

    return NextResponse.json({ success: true, source: "database", data: formattedOrders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    // Fallback to memory
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

    const pool = getDbPool();
    if (pool) {
      try {
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
      } catch (dbErr) {
        console.error("Database insert error, saving to memory fallback:", dbErr);
        memoryOrders.unshift(newOrder);
      }
    } else {
      memoryOrders.unshift(newOrder);
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
    sendOrderReceiptEmail({
      orderNumber,
      customerName,
      customerEmail: customerEmail || "",
      shippingAddress,
      city,
      paymentMethod: paymentMethod || "cod",
      totalAmount: Number(totalAmount),
      items: items || [],
    }).catch((eErr) => console.error("Direct email send error:", eErr));

    // Trigger Automation Webhook if configured (ViaSocket / Activepieces / Make / Zapier)
    const webhookUrl = process.env.ORDER_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "order.created",
            orderNumber,
            orderId,
            customerName,
            customerEmail: customerEmail || "",
            customerPhone,
            city,
            shippingAddress,
            paymentMethod: paymentMethod || "cod",
            totalAmount: Number(totalAmount),
            currency: "USD",
            items,
            orderDate: new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            receiptHtml,
          }),
        }).catch((wErr) => console.error("Webhook trigger error:", wErr));
      } catch (wErr) {
        console.error("Webhook trigger error:", wErr);
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
