import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";
import { buildKashierCheckoutUrl } from "@/lib/kashier";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      customerName,
      customerPhone,
      customerEmail,
      city,
      shippingAddress,
      notes,
      items,
      appliedCoupon,
      finalTotalUSD = 0,
      finalTotalEGP = 0,
    } = body;

    if (!customerName || !customerPhone || !shippingAddress || !city || !items?.length) {
      return NextResponse.json(
        { success: false, message: "Missing required order fields" },
        { status: 400 }
      );
    }

    const mid = process.env.KASHIER_MERCHANT_ID || "";
    const secret = process.env.KASHIER_SECRET_KEY || "";
    const mode = (process.env.KASHIER_MODE || "test") as "test" | "live";

    if (!secret) {
      return NextResponse.json(
        { success: false, message: "Kashier secret key is not configured" },
        { status: 500 }
      );
    }

    // Generate unique human-readable order number
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const orderNumber = `ESA-${randomSuffix}`;
    const orderId = `order_${Date.now()}_${randomSuffix}`;
    const itemsJson = JSON.stringify(items);

    // Save pending order to MySQL
    const pool = getDbPool();
    if (pool) {
      try {
        await query(
          `INSERT INTO orders (id, order_number, customer_name, customer_phone, customer_email, city, shipping_address, notes, payment_method, total_amount, items_json, status)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            orderId,
            orderNumber,
            customerName,
            customerPhone,
            customerEmail || null,
            city,
            shippingAddress,
            notes || null,
            "kashier",
            Number(finalTotalUSD || 0),
            itemsJson,
            "new",
          ]
        );
        console.log(`✅ Order #${orderNumber} saved to MySQL pending Kashier payment.`);
      } catch (dbErr) {
        console.error("Database insert error before Kashier:", dbErr);
      }
    }

    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000";

    const redirectUrl = `${origin}/checkout?gateway=kashier&order_id=${orderId}`;

    const amountInEGP = Math.round(Number(finalTotalEGP || 0));

    // If mid is not yet provided, return instructions or URL with placeholder
    const checkoutUrl = buildKashierCheckoutUrl({
      mid: mid || "MID-ESA-CAM",
      orderId: orderNumber,
      amount: amountInEGP,
      currency: "EGP",
      secret,
      redirectUrl,
      mode,
      display: "ar",
    });

    return NextResponse.json({
      success: true,
      url: checkoutUrl,
      orderNumber,
      orderId,
      amount: amountInEGP,
      needsMid: !mid,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create Kashier checkout session";
    console.error("Kashier checkout session error:", error);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
