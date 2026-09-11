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
  status: string;
  created_at: string;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get("order_id");
    const paymentStatus = searchParams.get("paymentStatus");

    if (!orderId) {
      return NextResponse.json(
        { success: false, message: "Missing order_id parameter" },
        { status: 400 }
      );
    }

    const isSuccess =
      paymentStatus?.toUpperCase() === "SUCCESS" ||
      searchParams.get("status")?.toUpperCase() === "SUCCESS";

    if (!isSuccess) {
      return NextResponse.json(
        { success: false, paid: false, message: "Payment was not successful" },
        { status: 400 }
      );
    }

    const pool = getDbPool();
    let order: StoredOrder | null = null;
    let items = [];

    if (pool) {
      const rows = await query<StoredOrder>(
        "SELECT * FROM orders WHERE id = ? OR order_number = ? LIMIT 1",
        [orderId, orderId]
      );

      if (rows && rows.length > 0) {
        order = rows[0];

        try {
          items = typeof order.items_json === "string" ? JSON.parse(order.items_json) : order.items_json || [];
        } catch {
          items = [];
        }

        if (order.status !== "confirmed" && order.status !== "shipped" && order.status !== "delivered") {
          await query("UPDATE orders SET status = 'confirmed' WHERE id = ?", [order.id]);
          order.status = "confirmed";

          // Send confirmation receipt email
          try {
            await sendOrderReceiptEmail({
              orderNumber: order.order_number,
              customerName: order.customer_name,
              customerEmail: order.customer_email || "",
              shippingAddress: order.shipping_address,
              city: order.city,
              paymentMethod: "Kashier Online Payment (مدفوع إلكترونياً)",
              totalAmount: Number(order.total_amount),
              items: items || [],
            });
          } catch (emailErr) {
            console.error("Kashier verify email error:", emailErr);
          }

          // Trigger webhook
          const webhookUrl = process.env.ORDER_WEBHOOK_URL || process.env.VIASOCKET_WEBHOOK_URL;
          if (webhookUrl) {
            try {
              const receiptHtml = generateEpicReceiptHtml({
                orderNumber: order.order_number,
                customerName: order.customer_name,
                customerEmail: order.customer_email || "",
                shippingAddress: order.shipping_address,
                city: order.city,
                paymentMethod: "Kashier Online Payment",
                totalAmount: Number(order.total_amount),
                items: items || [],
              });

              await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  event: "order.paid",
                  paymentGateway: "kashier",
                  paymentStatus: "paid",
                  to: order.customer_email || process.env.ADMIN_EMAIL || "",
                  subject: `ESA CAM Paid Order Confirmation #${order.order_number}`,
                  orderNumber: order.order_number,
                  orderId: order.id,
                  customerName: order.customer_name,
                  customerEmail: order.customer_email || "",
                  customerPhone: order.customer_phone,
                  city: order.city,
                  shippingAddress: order.shipping_address,
                  paymentMethod: "Kashier Online Payment",
                  totalAmount: Number(order.total_amount),
                  currency: "EGP",
                  items,
                  receiptHtml,
                }),
              });
            } catch (whErr) {
              console.error("Kashier webhook trigger error:", whErr);
            }
          }
        }
      }
    }

    if (!order) {
      return NextResponse.json(
        { success: false, message: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      paid: true,
      order: {
        id: order.id,
        order_number: order.order_number,
        customer_name: order.customer_name,
        customer_phone: order.customer_phone,
        shipping_address: order.shipping_address,
        city: order.city,
        total_amount: Number(order.total_amount),
        payment_method: "kashier",
        status: order.status,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Error verifying Kashier payment";
    console.error("Kashier verify error:", error);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
