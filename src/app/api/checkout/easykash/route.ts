import { NextRequest, NextResponse } from "next/server";
import { query, getDbPool } from "@/lib/db";
import { createEasyKashIntention, getRequestOrigin } from "@/lib/easykash";

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
      appliedCoupon: _appliedCoupon,
      finalTotalUSD = 0,
      finalTotalEGP = 0,
    } = body;

    if (!customerName || !customerPhone || !shippingAddress || !city || !items?.length) {
      return NextResponse.json(
        { success: false, message: "Missing required order fields" },
        { status: 400 }
      );
    }

    const nameParts = customerName.trim().split(" ");
    const firstName = nameParts[0] || "Customer";
    const lastName = nameParts.slice(1).join(" ") || firstName;

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
            "easykash",
            Number(finalTotalUSD || 0),
            itemsJson,
            "new",
          ]
        );
        console.log(`✅ Order #${orderNumber} saved to MySQL pending EasyKash payment.`);
      } catch (dbErr) {
        console.error("Database insert error before EasyKash:", dbErr);
      }
    }

    const origin = getRequestOrigin(req);
    const redirectionUrl = `${origin}/checkout?gateway=easykash&order_id=${encodeURIComponent(orderId)}`;
    const amountInEGP = Math.round(Number(finalTotalEGP || 0));

    const intentionResult = await createEasyKashIntention({
      amount: amountInEGP,
      currency: "EGP",
      orderNumber,
      customer: {
        firstName,
        lastName,
        email: customerEmail || "customer@esacamstore.com",
        phone: customerPhone,
        city,
        address: shippingAddress,
      },
      redirectionUrl,
    });

    if (!intentionResult.success || !intentionResult.checkoutUrl) {
      return NextResponse.json(
        {
          success: false,
          message: intentionResult.message || "Failed to create EasyKash payment session",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      url: intentionResult.checkoutUrl,
      orderNumber,
      orderId,
      amount: amountInEGP,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to initiate EasyKash checkout session";
    console.error("EasyKash checkout error:", error);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
