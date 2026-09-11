import crypto from "crypto";

export interface KashierOrderParams {
  mid: string;
  orderId: string;
  amount: number | string;
  currency?: string;
  secret: string;
}

/**
 * Generates the HMAC-SHA256 hash required by Kashier for Hosted Checkout
 * Formula: path = "/?payment=" + mid + "." + orderId + "." + amount + "." + currency
 */
export function generateKashierHash({
  mid,
  orderId,
  amount,
  currency = "EGP",
  secret,
}: KashierOrderParams): string {
  const path = `/?payment=${mid}.${orderId}.${amount}.${currency}`;
  return crypto.createHmac("sha256", secret).update(path).digest("hex");
}

/**
 * Validates the callback response signature from Kashier
 */
export function verifyKashierCallbackSignature(
  queryParams: Record<string, string>,
  secret: string
): boolean {
  const { signature, mode, ...rest } = queryParams;
  if (!signature) return false;

  const queryString = Object.keys(rest)
    .sort()
    .map((k) => `${k}=${rest[k]}`)
    .join("&");

  const calculated = crypto.createHmac("sha256", secret).update(queryString).digest("hex");
  return calculated.toLowerCase() === signature.toLowerCase();
}

/**
 * Builds the full Kashier Hosted Payment Page (HPP) URL
 */
export function buildKashierCheckoutUrl({
  mid,
  orderId,
  amount,
  currency = "EGP",
  secret,
  redirectUrl,
  mode = "test",
  display = "ar",
}: KashierOrderParams & {
  redirectUrl: string;
  mode?: "test" | "live";
  display?: "ar" | "en";
}): string {
  const hash = generateKashierHash({ mid, orderId, amount, currency, secret });
  const encodedRedirect = encodeURIComponent(redirectUrl);

  const baseUrl = "https://checkout.kashier.io";
  return `${baseUrl}/?merchantId=${mid}&orderId=${orderId}&amount=${amount}&currency=${currency}&hash=${hash}&mode=${mode}&merchantRedirect=${encodedRedirect}&allowedMethods=card,wallet,bank_installments&display=${display}`;
}
