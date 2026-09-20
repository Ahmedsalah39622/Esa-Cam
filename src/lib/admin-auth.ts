import { createHmac, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(scryptCallback);
export const ADMIN_SESSION_COOKIE = "esa_cam_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 8;

export interface AdminSession {
  id: string;
  name: string;
  email: string;
  role: string;
}

function getAuthSecret() {
  const secret = process.env.AUTH_SECRET || process.env.JWT_SECRET;
  if (!secret) throw new Error("AUTH_SECRET is required for admin authentication");
  return secret;
}

export async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const derivedKey = (await scrypt(password, salt, 64)) as Buffer;
  return `scrypt$${salt}$${derivedKey.toString("hex")}`;
}

export async function verifyPassword(password: string, storedHash: string) {
  if (!storedHash.startsWith("scrypt$")) return false;
  const [, salt, key] = storedHash.split("$");
  if (!salt || !key) return false;
  const derivedKey = (await scrypt(password, salt, 64)) as Buffer;
  const storedKey = Buffer.from(key, "hex");
  return storedKey.length === derivedKey.length && timingSafeEqual(storedKey, derivedKey);
}

function encode(value: string) {
  return Buffer.from(value).toString("base64url");
}

function decode(value: string) {
  return Buffer.from(value, "base64url").toString("utf8");
}

export function createAdminSession(session: AdminSession) {
  const payload = encode(JSON.stringify({ ...session, exp: Date.now() + SESSION_MAX_AGE * 1000 }));
  const signature = createHmac("sha256", getAuthSecret()).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export function verifyAdminSession(token?: string | null): AdminSession | null {
  if (!token) return null;
  try {
    const [payload, signature] = token.split(".");
    if (!payload || !signature) return null;
    const expected = createHmac("sha256", getAuthSecret()).update(payload).digest("base64url");
    const actualBuffer = Buffer.from(signature);
    const expectedBuffer = Buffer.from(expected);
    if (actualBuffer.length !== expectedBuffer.length || !timingSafeEqual(actualBuffer, expectedBuffer)) return null;
    const session = JSON.parse(decode(payload)) as AdminSession & { exp?: number };
    if (!session.id || !session.email || !session.role || !session.exp || session.exp < Date.now()) return null;
    return { id: session.id, name: session.name, email: session.email, role: session.role };
  } catch {
    return null;
  }
}