import crypto from "crypto";

export interface PaymobCustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  address: string;
}

export interface PaymobOrderItem {
  name: string;
  price: number; // in EGP
  quantity: number;
  brand?: string;
}

export interface CreateIntentionOptions {
  amountInEGP: number;
  currency?: string;
  orderNumber: string;
  customer: PaymobCustomerInfo;
  items?: PaymobOrderItem[];
  redirectionUrl: string;
}

/**
 * Creates a Payment Intention on Paymob (Unified Checkout)
 */
export async function createPaymobIntention({
  amountInEGP,
  currency = "EGP",
  orderNumber,
  customer,
  items = [],
  redirectionUrl,
}: CreateIntentionOptions): Promise<{
  success: boolean;
  clientSecret?: string;
  intentionId?: string;
  checkoutUrl?: string;
  message?: string;
}> {
  const secretKey = process.env.PAYMOB_SECRET_KEY;
  const publicKey = process.env.PAYMOB_PUBLIC_KEY;
  const integrationId = Number(process.env.PAYMOB_INTEGRATION_ID || 5911671);

  if (!secretKey || !publicKey) {
    return {
      success: false,
      message: "Paymob credentials (PAYMOB_SECRET_KEY or PAYMOB_PUBLIC_KEY) are missing in environment.",
    };
  }

  // Paymob expects amount in cents / piasters (100 EGP = 10000)
  const amountCents = Math.round(Number(amountInEGP) * 100);

  // Clean phone number (e.g. +2010... or 010...)
  let cleanPhone = customer.phone.replace(/[^\d+]/g, "");
  if (!cleanPhone.startsWith("+") && cleanPhone.startsWith("01")) {
    cleanPhone = `+20${cleanPhone.slice(1)}`;
  } else if (!cleanPhone.startsWith("+")) {
    cleanPhone = `+20${cleanPhone}`;
  }

  const payload: Record<string, unknown> = {
    amount: amountCents,
    currency,
    payment_methods: [integrationId],
    billing_data: {
      first_name: customer.firstName || "Customer",
      last_name: customer.lastName || "Customer",
      phone_number: cleanPhone,
      email: customer.email || "customer@esacamstore.com",
      apartment: "NA",
      floor: "NA",
      street: (customer.address || "Cairo").slice(0, 50),
      building: "NA",
      shipping_method: "PKG",
      postal_code: "NA",
      city: customer.city || "Cairo",
      country: "EGY",
      state: customer.city || "Cairo",
    },
    customer: {
      first_name: customer.firstName || "Customer",
      last_name: customer.lastName || "Customer",
      email: customer.email || "customer@esacamstore.com",
      phone_number: cleanPhone,
    },
    special_reference: orderNumber,
    redirection_url: redirectionUrl,
  };

  if (items.length > 0) {
    payload.items = items.map((item) => ({
      name: item.name.slice(0, 50),
      amount: Math.round(item.price * 100),
      quantity: item.quantity,
      description: (item.brand || item.name).slice(0, 50),
    }));
  }

  try {
    const res = await fetch("https://accept.paymob.com/v1/intention/", {
      method: "POST",
      headers: {
        Authorization: `Token ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok || !data.client_secret) {
      console.error("Paymob Intention API Error:", data);
      return {
        success: false,
        message: data.detail || (Array.isArray(data.payment_methods) ? data.payment_methods[0] : "Failed to create Paymob payment session"),
      };
    }

    const checkoutUrl = `https://accept.paymob.com/unifiedcheckout/?publicKey=${publicKey}&clientSecret=${data.client_secret}`;

    return {
      success: true,
      clientSecret: data.client_secret,
      intentionId: data.id,
      checkoutUrl,
    };
  } catch (error: unknown) {
    console.error("Paymob connection exception:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Error communicating with Paymob gateway",
    };
  }
}

/**
 * Validates Paymob Callback / Webhook HMAC signature (SHA-512)
 */
export function verifyPaymobHmac(
  params: Record<string, string | number | boolean>,
  hmacSecret: string
): boolean {
  if (!params || !params.hmac) return false;

  // Exact keys required for transaction callback verification in alphabetical order
  const transactionKeys = [
    "amount_cents",
    "created_at",
    "currency",
    "error_occured",
    "has_parent_transaction",
    "id",
    "integration_id",
    "is_3d_secure",
    "is_auth",
    "is_capture",
    "is_refunded",
    "is_standalone_payment",
    "is_voided",
    "order",
    "owner",
    "pending",
    "source_data.pan",
    "source_data.sub_type",
    "source_data.type",
    "success",
  ];

  let concatenated = "";
  for (const key of transactionKeys) {
    const val = params[key];
    if (val !== undefined && val !== null) {
      concatenated += String(val);
    }
  }

  const calculatedHmac = crypto
    .createHmac("sha512", hmacSecret)
    .update(concatenated)
    .digest("hex");

  return calculatedHmac.toLowerCase() === String(params.hmac).toLowerCase();
}
