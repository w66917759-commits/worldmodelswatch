"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  createSessionToken,
  getAuthConfig,
  getSessionCookieOptions,
  sanitizeRedirectPath,
  SESSION_COOKIE_NAME,
  verifyCredentials,
} from "@/lib/auth";

export type LoginState = {
  email?: string;
  error?: string;
};

export async function loginAction(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const nextPath = sanitizeRedirectPath(formData.get("next"));
  const config = getAuthConfig();

  if (!config.configured) {
    return {
      email,
      error: `Login is not configured yet. Missing: ${config.missing.join(", ")}.`,
    };
  }

  if (!email || !password) {
    return {
      email,
      error: "Enter the admin email and password.",
    };
  }

  if (!verifyCredentials(email, password)) {
    return {
      email,
      error: "The email or password is incorrect.",
    };
  }

  const cookieStore = await cookies();
  cookieStore.set(
    SESSION_COOKIE_NAME,
    createSessionToken(email),
    getSessionCookieOptions(),
  );

  redirect(nextPath);
}
