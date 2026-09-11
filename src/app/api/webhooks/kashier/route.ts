import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Kashier webhook received:", body);

    // Kashier webhook payload typically contains data object with merchantOrderId / orderId
    const orderId =
      body?.data?.merchantOrderId ||
      body?.merchantOrderId ||
      body?.data?.orderId ||
      body?.orderId;

    const status =
      body?.data?.status ||
      body?.status ||
      body?.event;

    if (orderId && (status === "SUCCESS" || status === "CAPTURED" || status === "PAID" || String(status).includes("success"))) {
      const pool = getDbPool();
      if (pool) {
        await query(
          "UPDATE orders SET status = 'confirmed' WHERE id = ? OR order_number = ?",
          [orderId, orderId]
        );
        console.log(`✅ Webhook: Order ${orderId} marked confirmed upon Kashier notification.`);
      }
    }

    return NextResponse.json({ success: true, received: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Webhook error";
    console.error("Kashier webhook error:", message);
    return NextResponse.json({ success: false, error: message }, { status: 400 });
  }
}
