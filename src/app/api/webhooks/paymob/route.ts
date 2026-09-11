import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";
import { generateEpicReceiptHtml, sendOrderReceiptEmail } from "@/lib/email";
import { verifyPaymobHmac } from "@/lib/paymob";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const type = body.type; // e.g. "TRANSACTION"
    const obj = body.obj;

    if (!obj) {
      return NextResponse.json({ success: true, message: "Ignored empty payload" });
    }

    const isSuccess = obj.success === true;
    const specialReference = obj.order?.merchant_order_id || obj.special_reference;
    const txnId = obj.id;

    // Optional HMAC verification
    const hmacSecret = process.env.PAYMOB_HMAC;
    if (hmacSecret && obj) {
      // In Paymob webhooks, the hmac is calculated from obj properties
      const isValid = verifyPaymobHmac(obj, hmacSecret);
      if (!isValid) {
        console.warn("⚠️ Paymob webhook HMAC verification mismatch, proceed with caution.");
      }
    }

    if (isSuccess && specialReference) {
      const pool = getDbPool();
      if (pool) {
        const rows = await query<any>(
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
                paymentMethod: "Paymob Online Payment",
                totalAmount: Number(order.total_amount),
                items,
              });
            } catch (err) {
              console.error("Paymob webhook email error:", err);
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
                  paymentMethod: "Paymob Online Payment",
                  totalAmount: Number(order.total_amount),
                  items,
                });

                await fetch(webhookUrl, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    event: "order.paid",
                    paymentGateway: "paymob",
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
                    paymentMethod: "Paymob Online Payment",
                    totalAmount: Number(order.total_amount),
                    currency: "EGP",
                    items,
                    receiptHtml,
                  }),
                });
              } catch (whErr) {
                console.error("Paymob webhook trigger error:", whErr);
              }
            }
          }
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Paymob webhook error:", error);
    return NextResponse.json({ success: false, message: error?.message }, { status: 500 });
  }
}
