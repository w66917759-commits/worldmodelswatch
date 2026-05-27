import crypto from "node:crypto";
import { cookies } from "next/headers";

export const SESSION_COOKIE_NAME = "wmw_session";
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

type RawSessionPayload = {
  sub: "admin";
  email: string;
  iat: number;
  exp: number;
};

export type AuthSession = {
  sub: "admin";
  email: string;
  issuedAt: string;
  expiresAt: string;
};

export type AuthConfig = {
  configured: boolean;
  adminEmail: string | null;
  missing: string[];
};

export function getAuthConfig(): AuthConfig {
  const adminEmail = process.env.WMW_ADMIN_EMAIL?.trim() || null;
  const adminPassword = process.env.WMW_ADMIN_PASSWORD || null;
  const sessionSecret = process.env.WMW_SESSION_SECRET || null;
  const missing: string[] = [];

  if (!adminEmail) missing.push("WMW_ADMIN_EMAIL");
  if (!adminPassword) missing.push("WMW_ADMIN_PASSWORD");
  if (!sessionSecret) missing.push("WMW_SESSION_SECRET");

  return {
    configured: missing.length === 0,
    adminEmail,
    missing,
  };
}

export function sanitizeRedirectPath(
  value: FormDataEntryValue | string | null | undefined,
) {
  if (typeof value !== "string") return "/account";
  if (!value.startsWith("/") || value.startsWith("//")) return "/account";
  if (value.startsWith("/api") || value.startsWith("/login")) return "/account";
  return value;
}

export function getSessionCookieOptions() {
  return {
    httpOnly: true,
    maxAge: SESSION_MAX_AGE_SECONDS,
    path: "/",
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
  };
}

function getSessionSecret() {
  return process.env.WMW_SESSION_SECRET || "";
}

function sign(payloadSegment: string) {
  return crypto
    .createHmac("sha256", getSessionSecret())
    .update(payloadSegment)
    .digest("base64url");
}

function safeEqual(left: string, right: string) {
  const leftDigest = crypto.createHash("sha256").update(left).digest();
  const rightDigest = crypto.createHash("sha256").update(right).digest();
  return crypto.timingSafeEqual(leftDigest, rightDigest);
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function verifyCredentials(email: string, password: string) {
  const adminEmail = process.env.WMW_ADMIN_EMAIL;
  const adminPassword = process.env.WMW_ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword || !getSessionSecret()) return false;

  return (
    safeEqual(normalizeEmail(email), normalizeEmail(adminEmail)) &&
    safeEqual(password, adminPassword)
  );
}

export function createSessionToken(email: string) {
  const issuedAt = Math.floor(Date.now() / 1000);
  const payload: RawSessionPayload = {
    sub: "admin",
    email: normalizeEmail(email),
    iat: issuedAt,
    exp: issuedAt + SESSION_MAX_AGE_SECONDS,
  };
  const payloadSegment = Buffer.from(JSON.stringify(payload)).toString(
    "base64url",
  );

  return `${payloadSegment}.${sign(payloadSegment)}`;
}

export function parseSessionToken(token: string | undefined) {
  if (!token || !getSessionSecret()) return null;

  const [payloadSegment, signature] = token.split(".");

  if (!payloadSegment || !signature || !safeEqual(signature, sign(payloadSegment))) {
    return null;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(payloadSegment, "base64url").toString("utf8"),
    ) as Partial<RawSessionPayload>;

    if (
      payload.sub !== "admin" ||
      typeof payload.email !== "string" ||
      typeof payload.iat !== "number" ||
      typeof payload.exp !== "number" ||
      payload.exp <= Math.floor(Date.now() / 1000)
    ) {
      return null;
    }

    return {
      sub: payload.sub,
      email: payload.email,
      issuedAt: new Date(payload.iat * 1000).toISOString(),
      expiresAt: new Date(payload.exp * 1000).toISOString(),
    } satisfies AuthSession;
  } catch {
    return null;
  }
}

export async function getSession() {
  const cookieStore = await cookies();
  return parseSessionToken(cookieStore.get(SESSION_COOKIE_NAME)?.value);
}
