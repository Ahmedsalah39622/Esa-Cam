import { getDbPool } from "@/lib/db";
import { generateEpicReceiptHtml, sendOrderReceiptEmail } from "@/lib/email";

export interface EasyKashOrder {
  id: string;
  order_number: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string | null;
  city: string;
  shipping_address: string;
  total_amount: number | string;
  items_json: unknown;
  status: string;
  payment_status: string;
}

export async function confirmEasyKashOrder(
  order: EasyKashOrder,
  transactionId: unknown,
): Promise<boolean> {
  const pool = getDbPool();
  if (!pool) {
    throw new Error("Order database is unavailable");
  }

  const [updateResult] = await pool.execute(
    "UPDATE orders SET status = 'confirmed', payment_status = 'paid' WHERE id = ? AND payment_status <> 'paid'",
    [order.id],
  );
  if (!("affectedRows" in updateResult) || updateResult.affectedRows === 0) {
    return false;
  }

  let items: Parameters<typeof generateEpicReceiptHtml>[0]["items"] = [];
  try {
    const parsedItems = typeof order.items_json === "string"
      ? JSON.parse(order.items_json)
      : order.items_json;
    if (Array.isArray(parsedItems)) {
      items = parsedItems;
    }
  } catch (error) {
    console.error("EasyKash order items parse error:", error);
  }

  const receipt = {
    orderNumber: order.order_number,
    customerName: order.customer_name,
    customerEmail: order.customer_email || "",
    shippingAddress: order.shipping_address,
    city: order.city,
    paymentMethod: "EasyKash Online Payment",
    totalAmount: Number(order.total_amount),
    items,
  };

  try {
    await sendOrderReceiptEmail(receipt);
  } catch (error) {
    console.error("EasyKash webhook email error:", error);
  }

  const webhookUrl = process.env.ORDER_WEBHOOK_URL || process.env.VIASOCKET_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "order.paid",
          paymentGateway: "easykash",
          paymentStatus: "paid",
          transactionId: transactionId || null,
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
          receiptHtml: generateEpicReceiptHtml(receipt),
        }),
      });
    } catch (error) {
      console.error("EasyKash webhook trigger error:", error);
    }
  }

  return true;
}
