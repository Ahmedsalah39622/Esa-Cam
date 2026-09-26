import crypto from "node:crypto";

export interface EasyKashCustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city?: string;
  address?: string;
}

export interface CreateEasyKashIntentionOptions {
  amount: number;
  currency?: string;
  orderNumber: string;
  customer: EasyKashCustomerInfo;
  redirectionUrl: string;
}

export function normalizePhoneNumber(phone: string): string {
  if (!phone) return "";

  const cleaned = phone.replace(/[^\d+]/g, "");

  if (!cleaned) return "";
  if (cleaned.startsWith("+")) return cleaned;

  return cleaned.replace(/^0+/, "");
}

export function getRequestOrigin(req: Request | { headers: Headers }): string {
  const headers = req.headers;

  const forwardedProto = headers.get("x-forwarded-proto");
  const forwardedHost = headers.get("x-forwarded-host") || headers.get("host");
  const originHeader = headers.get("origin");

  if (originHeader) return originHeader;

  if (forwardedHost) {
    const protocol = forwardedProto || "https";
    return `${protocol}://${forwardedHost}`;
  }

  const fallbackUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (fallbackUrl) return fallbackUrl.replace(/\/$/, "");

  return "http://localhost:3000";
}

/**
 * Creates a Payment Intention on EasyKash (Direct Payment API)
 * Docs: https://easykash.gitbook.io/easykash-apis-documentation/direct-payment-hosted/pay-api
 */
export async function createEasyKashIntention({
  amount,
  currency = "EGP",
  orderNumber,
  customer,
  redirectionUrl,
}: CreateEasyKashIntentionOptions): Promise<{
  success: boolean;
  checkoutUrl?: string;
  message?: string;
}> {
  const apiKey = process.env.EASYKASH_API_KEY;

  if (!apiKey) {
    return {
      success: false,
      message: "EasyKash API Key (EASYKASH_API_KEY) is missing in environment.",
    };
  }

  const numericAmount = Math.max(1, Math.round(Number(amount) || 0));
  const cleanPhone = normalizePhoneNumber(customer.phone);

  const payload = {
    amount: numericAmount,
    currency: (currency || "EGP").toUpperCase(),
    paymentOptions: [2, 4, 6, 17, 19],
    cashExpiry: 24,
    name: `${customer.firstName} ${customer.lastName}`.trim(),
    email: customer.email || "customer@esacamstore.com",
    mobile: cleanPhone,
    redirectUrl: redirectionUrl,
    customerReference: String(orderNumber),
  };

  try {
    const res = await fetch("https://back.easykash.net/api/directpayv1/pay", {
      method: "POST",
      headers: {
        authorization: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok || !(data.redirectUrl || data.redirect_url)) {
      console.error("EasyKash API Error:", data);
      return {
        success: false,
        message: data.error || data.message || "Failed to create EasyKash payment session",
      };
    }

    return {
      success: true,
      checkoutUrl: data.redirectUrl || data.redirect_url,
    };
  } catch (error: unknown) {
    console.error("EasyKash connection exception:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Error communicating with EasyKash gateway",
    };
  }
}

/**
 * Validates EasyKash Callback HMAC signature when the gateway includes one.
 */
export function verifyEasyKashHmac(
  params: Record<string, string | number | boolean>,
  hmacSecret: string
): boolean {
  const hashValue = params.hmac || params.hash;

  if (!hashValue || !hmacSecret) {
    return false;
  }

  const canonical = Object.entries(params)
    .filter(([key]) => key !== "hmac" && key !== "hash")
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${String(value)}`)
    .join("&");

  const expected = crypto.createHmac("sha256", hmacSecret).update(canonical).digest("hex");

  return safeCompareHex(expected, String(hashValue));
}

const CALLBACK_SIGNATURE_FIELDS = [
  "ProductCode",
  "Amount",
  "ProductType",
  "PaymentMethod",
  "status",
  "easykashRef",
  "customerReference",
] as const;

export function verifyEasyKashCallbackSignature(
  payload: Record<string, unknown>,
  hmacSecret: string,
): boolean {
  const signature = payload.signatureHash;
  if (typeof signature !== "string" || !hmacSecret) return false;

  const values = CALLBACK_SIGNATURE_FIELDS.map((field) => payload[field]);
  if (values.some((value) => typeof value !== "string" && typeof value !== "number")) {
    return false;
  }

  const expected = crypto
    .createHmac("sha512", hmacSecret)
    .update(values.join(""))
    .digest("hex");

  return safeCompareHex(expected, signature);
}

function safeCompareHex(expected: string, received: string): boolean {
  if (!/^[\da-f]+$/i.test(received) || expected.length !== received.length) return false;
  return crypto.timingSafeEqual(Buffer.from(expected, "hex"), Buffer.from(received, "hex"));
}
