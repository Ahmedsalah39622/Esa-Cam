import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { query, getDbPool } from "@/lib/db";

export const dynamic = "force-dynamic";

interface OrderItemPayload {
  id: string;
  name: string;
  brand?: string;
  price: number;
  quantity: number;
  image?: string;
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
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
      shippingCost,
      shippingCostUSD = 0,
      finalTotal,
      finalTotalUSD,
      currency = "egp",
    } = body;

    const targetCurrency = (currency || "egp").toLowerCase();
    const effectiveShippingCost = shippingCost !== undefined ? shippingCost : shippingCostUSD;
    const _effectiveTotal = finalTotal !== undefined ? finalTotal : finalTotalUSD;

    if (!customerName || !customerPhone || !shippingAddress || !city || !items?.length) {
      return NextResponse.json(
        { success: false, message: "Missing required order fields" },
        { status: 400 }
      );
    }

    // Generate unique order reference
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const orderNumber = `ESA-${randomSuffix}`;
    const orderId = `order_${Date.now()}_${randomSuffix}`;
    const itemsJson = JSON.stringify(items);

    // Persist order in DB with initial status
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
            "card_stripe",
            Number(finalTotalUSD || 0),
            itemsJson,
            "new",
          ]
        );
        console.log(`✅ Order #${orderNumber} logged in MySQL pending Stripe payment (${finalTotalUSD} USD base).`);
      } catch (dbErr) {
        console.error("Database insert error before Stripe:", dbErr);
      }
    }

    // Build Stripe Line Items
    const lineItems = items.map((item: OrderItemPayload) => {
      // Build safe image array (must be valid absolute URL)
      const images: string[] = [];
      if (item.image && (item.image.startsWith("http://") || item.image.startsWith("https://"))) {
        images.push(item.image);
      }

      return {
        price_data: {
          currency: targetCurrency,
          product_data: {
            name: `${item.brand ? `[${item.brand}] ` : ""}${item.name}`,
            images: images.length > 0 ? images : undefined,
          },
          unit_amount: Math.round(item.price * 100), // Stripe expects amounts in smallest unit (e.g. piasters/cents)
        },
        quantity: item.quantity,
      };
    });

    // Handle Promo Code / Coupon via Stripe Coupon
    const discounts: { coupon: string }[] = [];
    if (appliedCoupon && appliedCoupon.discount_percent > 0) {
      try {
        const stripeCoupon = await stripe.coupons.create({
          percent_off: appliedCoupon.discount_percent,
          duration: "once",
          name: `Promo: ${appliedCoupon.code} (-${appliedCoupon.discount_percent}%)`,
        });
        discounts.push({ coupon: stripeCoupon.id });
      } catch (couponErr) {
        console.warn("Could not create Stripe coupon:", couponErr);
      }
    }

    // Determine site origin for redirect URLs
    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000";

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: customerEmail || undefined,
      client_reference_id: orderId,
      metadata: {
        orderId,
        orderNumber,
        customerName,
        customerPhone,
        city,
        promoCode: appliedCoupon?.code || "",
        currency: targetCurrency.toUpperCase(),
      },
      line_items: lineItems,
      discounts: discounts.length > 0 ? discounts : undefined,
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: Math.round((effectiveShippingCost || 0) * 100),
              currency: targetCurrency,
            },
            display_name:
              effectiveShippingCost > 0
                ? "Fragile-Cine Insured Shipping"
                : "Free Insured Shipping (شحن مجاني)",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 1 },
              maximum: { unit: "business_day", value: 3 },
            },
          },
        },
      ],
      success_url: `${origin}/checkout?session_id={CHECKOUT_SESSION_ID}&order_id=${orderId}&payment=success`,
      cancel_url: `${origin}/checkout?payment=canceled`,
    });

    return NextResponse.json({
      success: true,
      url: session.url,
      sessionId: session.id,
      orderId,
      orderNumber,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create Stripe payment session";
    console.error("Stripe session creation error:", error);
    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status: 500 }
    );
  }
}
