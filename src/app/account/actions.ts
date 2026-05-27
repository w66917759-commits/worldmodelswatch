"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  getSessionCookieOptions,
  SESSION_COOKIE_NAME,
} from "@/lib/auth";

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, "", {
    ...getSessionCookieOptions(),
    expires: new Date(0),
    maxAge: 0,
  });

  redirect("/login");
}
