import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";
import { generateEpicReceiptHtml, sendOrderReceiptEmail } from "@/lib/email";
import { verifyEasyKashHmac } from "@/lib/easykash";

export const dynamic = "force-dynamic";

interface OrderRow {
  id: string;
  order_number: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string | null;
  city: string;
  shipping_address: string;
  notes: string | null;
  payment_method: string;
  total_amount: number | string;
  items_json: string | unknown;
  status: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const _type = body.type; // e.g. "TRANSACTION" (reserved for future use)
    const obj = body.obj;

    if (!obj) {
      return NextResponse.json({ success: true, message: "Ignored empty payload" });
    }

    const isSuccess = obj.success === true;
    const specialReference = obj.order?.merchant_order_id || obj.special_reference;
    const txnId = obj.id;

    // Reject forged payment notifications before changing an order.
    const hmacSecret = process.env.EASYKASH_HMAC_SECRET;
    if (!hmacSecret || !obj.hmac || !verifyEasyKashHmac(obj, hmacSecret)) {
      return NextResponse.json({ success: false, message: "Invalid webhook signature" }, { status: 401 });
    }

    if (isSuccess && specialReference) {
      const pool = getDbPool();
      if (pool) {
        const rows = await query<OrderRow>(
          "SELECT * FROM orders WHERE order_number = ? OR id = ? LIMIT 1",
          [specialReference, specialReference]
        );

        if (rows && rows.length > 0) {
          const order = rows[0];
          if (order.status !== "confirmed" && order.status !== "shipped" && order.status !== "delivered") {
            await query("UPDATE orders SET status = 'confirmed' WHERE id = ?", [order.id]);

            let items = [];
            try {
              items = typeof order.items_json === "string" ? JSON.parse(order.items_json) : order.items_json || [];
            } catch {}

            try {
              await sendOrderReceiptEmail({
                orderNumber: order.order_number,
                customerName: order.customer_name,
                customerEmail: order.customer_email || "",
                shippingAddress: order.shipping_address,
                city: order.city,
                paymentMethod: "EasyKash Online Payment",
                totalAmount: Number(order.total_amount),
                items,
              });
            } catch (err) {
              console.error("EasyKash webhook email error:", err);
            }

            const webhookUrl = process.env.ORDER_WEBHOOK_URL || process.env.VIASOCKET_WEBHOOK_URL;
            if (webhookUrl) {
              try {
                const receiptHtml = generateEpicReceiptHtml({
                  orderNumber: order.order_number,
                  customerName: order.customer_name,
                  customerEmail: order.customer_email || "",
                  shippingAddress: order.shipping_address,
                  city: order.city,
                  paymentMethod: "EasyKash Online Payment",
                  totalAmount: Number(order.total_amount),
                  items,
                });

                await fetch(webhookUrl, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    event: "order.paid",
                    paymentGateway: "easykash",
                    paymentStatus: "paid",
                    transactionId: txnId,
                    to: order.customer_email || process.env.ADMIN_EMAIL || "",
                    subject: `ESA CAM Paid Order Confirmation #${order.order_number}`,
                    orderNumber: order.order_number,
                    orderId: order.id,
                    customerName: order.customer_name,
                    customerEmail: order.customer_email || "",
                    customerPhone: order.customer_phone,
                    city: order.city,
                    shippingAddress: order.shipping_address,
                    paymentMethod: "EasyKash Online Payment",
                    totalAmount: Number(order.total_amount),
                    currency: "EGP",
                    items,
                    receiptHtml,
                  }),
                });
              } catch (whErr) {
                console.error("EasyKash webhook trigger error:", whErr);
              }
            }
          }
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("EasyKash webhook error:", error);
    const message = error instanceof Error ? error.message : "EasyKash webhook error";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
