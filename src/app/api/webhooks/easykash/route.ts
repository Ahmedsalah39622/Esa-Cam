import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool, ensureOrderPaymentStatusColumn } from "@/lib/db";
import { verifyEasyKashCallbackSignature, verifyEasyKashHmac } from "@/lib/easykash";
import { confirmEasyKashOrder } from "@/lib/easykash-order";

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
  payment_status: string;
  total_amount: number | string;
  items_json: string | unknown;
  status: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const legacyPayload = body.obj && typeof body.obj === "object" ? body.obj : null;
    const directCallback = typeof body.signatureHash === "string";
    const paymentData = directCallback ? body : legacyPayload;

    if (!paymentData) {
      return NextResponse.json({ success: true, message: "Ignored empty payload" });
    }

    // Reject forged payment notifications before changing an order.
    const hmacSecret = process.env.EASYKASH_HMAC_SECRET;
    const validSignature = directCallback
      ? verifyEasyKashCallbackSignature(paymentData, hmacSecret || "")
      : Boolean(hmacSecret && verifyEasyKashHmac(paymentData, hmacSecret));
    if (!validSignature) {
      return NextResponse.json({ success: false, message: "Invalid webhook signature" }, { status: 401 });
    }

    const specialReference = directCallback
      ? paymentData.customerReference
      : paymentData.order?.merchant_order_id || paymentData.special_reference;
    const transactionStatus = directCallback
      ? String(paymentData.status || "").toUpperCase()
      : paymentData.success === true
        ? "PAID"
        : paymentData.success === false
          ? "FAILED"
          : String(paymentData.status || "").toUpperCase();
    const txnId = directCallback ? paymentData.easykashRef : paymentData.id;
    const isSuccess = transactionStatus === "PAID";
    const isFailure = ["FAIL", "FAILED", "EXPIRED", "CANCELED", "CANCELLED", "DECLINED"].includes(transactionStatus);

    if (!specialReference || (!isSuccess && !isFailure)) {
      return NextResponse.json({ success: true, message: "Signed callback ignored" });
    }

    const pool = getDbPool();
    if (!pool) {
      return NextResponse.json({ success: false, message: "Order database is unavailable" }, { status: 503 });
    }

    await ensureOrderPaymentStatusColumn();

    const rows = await query<OrderRow>(
      "SELECT * FROM orders WHERE order_number = ? OR id = ? LIMIT 1",
      [specialReference, specialReference]
    );
    const order = rows?.[0];

    if (!order) {
      return NextResponse.json({ success: false, message: "EasyKash order not found" }, { status: 404 });
    }
    if (order.payment_method.toLowerCase() !== "easykash") {
      return NextResponse.json({ success: false, message: "Payment reference is not an EasyKash order" }, { status: 400 });
    }

    if (isFailure) {
      await query(
        "UPDATE orders SET status = 'cancelled', payment_status = 'failed' WHERE id = ? AND payment_status <> 'paid'",
        [order.id],
      );
      return NextResponse.json({ success: true, status: "cancelled" });
    }

    if (["confirmed", "shipped", "delivered"].includes(order.status)) {
      return NextResponse.json({ success: true, status: order.status, duplicate: true });
    }

    const confirmed = await confirmEasyKashOrder(order, txnId);
    return NextResponse.json({
      success: true,
      status: confirmed ? "confirmed" : order.status,
      ...(!confirmed ? { duplicate: true } : {}),
    });
  } catch (error: unknown) {
    console.error("EasyKash webhook error:", error);
    const message = error instanceof Error ? error.message : "EasyKash webhook error";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
