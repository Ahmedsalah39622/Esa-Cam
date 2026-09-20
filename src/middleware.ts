import { NextRequest, NextResponse } from "next/server";

const ADMIN_SESSION_COOKIE = "esa_cam_admin_session";

function decodeBase64Url(value: string) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  return atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
}

async function hasValidSession(token: string | undefined) {
  const secret = process.env.AUTH_SECRET || process.env.JWT_SECRET;
  if (!secret || !token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  let decoded: { exp?: number; id?: string; role?: string };
  try {
    decoded = JSON.parse(new TextDecoder().decode(Uint8Array.from(decodeBase64Url(payload), (char) => char.charCodeAt(0))));
  } catch {
    return false;
  }

  try {
    const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["verify"]);
    const signatureBytes = Uint8Array.from(decodeBase64Url(signature), (char) => char.charCodeAt(0));
    const validSignature = await crypto.subtle.verify("HMAC", key, signatureBytes, new TextEncoder().encode(payload));
    return Boolean(validSignature && decoded.id && decoded.role && decoded.exp && decoded.exp > Date.now());
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/orders") && request.method === "POST") {
    return NextResponse.next();
  }
  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  if (await hasValidSession(token)) return NextResponse.next();
  if (request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.json({ success: false, message: "Admin authentication required" }, { status: 401 });
  }
  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin-app/:path*", "/api/admins/:path*", "/api/users/:path*", "/api/orders/:path*"],
};