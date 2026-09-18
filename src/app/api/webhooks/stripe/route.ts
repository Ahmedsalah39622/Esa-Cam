import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { query, getDbPool } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    if (webhookSecret && sig) {
      const stripe = getStripe();
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    } else {
      event = JSON.parse(body);
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown webhook error";
    console.error("Webhook signature verification failed:", message);
    return NextResponse.json({ error: `Webhook Error: ${message}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const orderId = session.client_reference_id || session.metadata?.orderId;

    if (orderId) {
      try {
        const pool = getDbPool();
        if (pool) {
          await query("UPDATE orders SET status = 'confirmed' WHERE id = ? OR order_number = ?", [
            orderId,
            orderId,
          ]);
          console.log(`✅ Webhook: Order ${orderId} marked confirmed upon Stripe checkout.session.completed`);
        }
      } catch (err) {
        console.error("Webhook DB update error:", err);
      }
    }
  }

  return NextResponse.json({ received: true });
}
