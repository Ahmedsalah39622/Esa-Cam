import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool, ensureOrderPaymentStatusColumn } from "@/lib/db";
import { inquireEasyKashPayment } from "@/lib/easykash";
import { confirmEasyKashOrder, type EasyKashOrder } from "@/lib/easykash-order";

export const dynamic = "force-dynamic";

interface StoredOrder extends EasyKashOrder {
  payment_method: string;
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

    let paid = order.payment_status === "paid";
    const failed = order.payment_status === "failed";

    if (!paid && !failed && searchParams.get("inquire") === "1") {
      const inquiry = await inquireEasyKashPayment(order.order_number);
      if (inquiry.status?.toUpperCase() === "PAID") {
        await confirmEasyKashOrder(order, inquiry.easykashRef);
        paid = true;
      }
    }

    const refreshedRows = paid && order.payment_status !== "paid"
      ? await query<StoredOrder>("SELECT * FROM orders WHERE id = ? LIMIT 1", [order.id])
      : undefined;
    const confirmedOrder = refreshedRows?.[0] || order;

    return NextResponse.json({
      success: true,
      paid,
      failed,
      pending: !paid && !failed,
      status: order.status,
      orderNumber: order.order_number,
      ...(paid ? {
        order: {
          id: confirmedOrder.id,
          order_number: confirmedOrder.order_number,
          customer_name: confirmedOrder.customer_name,
          customer_phone: confirmedOrder.customer_phone,
          shipping_address: confirmedOrder.shipping_address,
          city: confirmedOrder.city,
          total_amount: Number(confirmedOrder.total_amount),
          payment_method: "easykash",
          status: confirmedOrder.status,
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
