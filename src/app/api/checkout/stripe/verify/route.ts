import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
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
    const sessionId = searchParams.get("session_id");
    const orderId = searchParams.get("order_id");

    if (!sessionId) {
      return NextResponse.json(
        { success: false, message: "Missing session_id parameter" },
        { status: 400 }
      );
    }

    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        {
          success: false,
          status: session.payment_status,
          message: "Payment has not been completed",
        },
        { status: 400 }
      );
    }

    // Find the order
    const targetOrderId = orderId || session.client_reference_id || session.metadata?.orderId;
    let order: StoredOrder | null = null;
    let items = [];

    const pool = getDbPool();
    if (pool && targetOrderId) {
      const rows = await query<StoredOrder>(
        "SELECT * FROM orders WHERE id = ? OR order_number = ? LIMIT 1",
        [targetOrderId, targetOrderId]
      );

      if (rows && rows.length > 0) {
        order = rows[0];

        try {
          items = typeof order.items_json === "string" ? JSON.parse(order.items_json) : order.items_json || [];
        } catch {
          items = [];
        }

        // If order was not yet confirmed, confirm it now and trigger notifications
        if (order.status !== "confirmed" && order.status !== "shipped" && order.status !== "delivered") {
          await query("UPDATE orders SET status = 'confirmed' WHERE id = ?", [order.id]);
          order.status = "confirmed";

          // Trigger email receipt
          try {
            await sendOrderReceiptEmail({
              orderNumber: order.order_number,
              customerName: order.customer_name,
              customerEmail: order.customer_email || session.customer_details?.email || "",
              shippingAddress: order.shipping_address,
              city: order.city,
              paymentMethod: "Stripe Online Card Payment",
              totalAmount: Number(order.total_amount),
              items: items || [],
            });
          } catch (emailErr) {
            console.error("Email send error on stripe verify:", emailErr);
          }

          // Trigger automation webhook if configured
          const webhookUrl = process.env.ORDER_WEBHOOK_URL || process.env.VIASOCKET_WEBHOOK_URL;
          if (webhookUrl) {
            try {
              const receiptHtml = generateEpicReceiptHtml({
                orderNumber: order.order_number,
                customerName: order.customer_name,
                customerEmail: order.customer_email || "",
                shippingAddress: order.shipping_address,
                city: order.city,
                paymentMethod: "Stripe Online Card Payment",
                totalAmount: Number(order.total_amount),
                items: items || [],
              });

              await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  event: "order.paid",
                  paymentStatus: "paid",
                  paymentGateway: "stripe",
                  to: order.customer_email || process.env.ADMIN_EMAIL || "",
                  subject: `ESA CAM Paid Order Confirmation #${order.order_number}`,
                  orderNumber: order.order_number,
                  orderId: order.id,
                  customerName: order.customer_name,
                  customerEmail: order.customer_email || "",
                  customerPhone: order.customer_phone,
                  city: order.city,
                  shippingAddress: order.shipping_address,
                  paymentMethod: "Stripe Online Card Payment",
                  totalAmount: Number(order.total_amount),
                  currency: (session.currency || "EGP").toUpperCase(),
                  items,
                  receiptHtml,
                }),
              });
            } catch (whErr) {
              console.error("Webhook trigger error on stripe verify:", whErr);
            }
          }
        }
      }
    }

    // Return confirmed details
    return NextResponse.json({
      success: true,
      paid: true,
      order: order
        ? {
            id: order.id,
            order_number: order.order_number,
            customer_name: order.customer_name,
            customer_phone: order.customer_phone,
            shipping_address: order.shipping_address,
            city: order.city,
            total_amount: Number(order.total_amount),
            status: order.status,
          }
        : {
            id: targetOrderId || sessionId,
            order_number: session.metadata?.orderNumber || "ESA-PAID",
            customer_name: session.metadata?.customerName || session.customer_details?.name || "Valued Client",
            customer_phone: session.metadata?.customerPhone || "",
            shipping_address: session.metadata?.city || "",
            city: session.metadata?.city || "Cairo",
            total_amount:
              (session.currency || "").toLowerCase() === "egp"
                ? ((session.amount_total || 0) / 100) / 50.5
                : (session.amount_total || 0) / 100,
            status: "confirmed",
          },
      session: {
        id: session.id,
        payment_status: session.payment_status,
        amount_total: session.amount_total,
        currency: session.currency,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Error verifying payment";
    console.error("Stripe verify error:", error);
    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}
