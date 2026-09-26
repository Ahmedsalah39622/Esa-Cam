import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool, ensureOrderPaymentStatusColumn } from "@/lib/db";

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
  payment_status: string;
  total_amount: number;
  items_json: string;
  status: string;
  created_at: string;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get("order_id");

    if (!orderId) {
      return NextResponse.json(
        { success: false, message: "Missing order_id parameter" },
        { status: 400 }
      );
    }

    if (!getDbPool()) {
      return NextResponse.json(
        { success: false, message: "Order database is unavailable" },
        { status: 503 }
      );
    }

    await ensureOrderPaymentStatusColumn();

    const rows = await query<StoredOrder>(
      "SELECT * FROM orders WHERE id = ? OR order_number = ? LIMIT 1",
      [orderId, orderId]
    );
    const order = rows?.[0];

    if (!order) {
      return NextResponse.json(
        { success: false, message: "Order not found" },
        { status: 404 }
      );
    }

    if (order.payment_method.toLowerCase() !== "easykash") {
      return NextResponse.json(
        { success: false, message: "Order does not use EasyKash" },
        { status: 400 }
      );
    }

    const paid = order.payment_status === "paid";
    const failed = order.payment_status === "failed";

    return NextResponse.json({
      success: true,
      paid,
      failed,
      pending: !paid && !failed,
      status: order.status,
      orderNumber: order.order_number,
      ...(paid ? {
        order: {
          id: order.id,
          order_number: order.order_number,
          customer_name: order.customer_name,
          customer_phone: order.customer_phone,
          shipping_address: order.shipping_address,
          city: order.city,
          total_amount: Number(order.total_amount),
          payment_method: "easykash",
          status: order.status,
        },
      } : {}),
      message: paid
        ? "EasyKash payment confirmed"
        : failed
          ? "EasyKash payment was cancelled"
          : "Payment is waiting for EasyKash's signed confirmation",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Error verifying EasyKash payment";
    console.error("EasyKash verify error:", error);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
