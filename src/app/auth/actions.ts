"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { sanitizePublicRedirect } from "@/lib/public-routes";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { site } from "@/lib/site";

function encodeNextPath(path: string) {
  return encodeURIComponent(path);
}

async function requestOrigin() {
  const headerStore = await headers();
  const origin = headerStore.get("origin");

  if (origin) return origin;

  const host = headerStore.get("x-forwarded-host") ?? headerStore.get("host");
  const proto = headerStore.get("x-forwarded-proto") ?? "https";

  if (host) return `${proto}://${host}`;

  return site.url;
}

export async function signInWithGoogleAction(formData: FormData) {
  const nextPath = sanitizePublicRedirect(formData.get("next"), "/");
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    redirect(`/auth/sign-in?error=not-configured&next=${encodeNextPath(nextPath)}`);
  }

  const origin = await requestOrigin();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/callback?next=${encodeNextPath(nextPath)}`,
    },
  });

  if (error || !data.url) {
    redirect(`/auth/sign-in?error=oauth&next=${encodeNextPath(nextPath)}`);
  }

  redirect(data.url);
}

export async function signOutSupabaseAction(formData: FormData) {
  const nextPath = sanitizePublicRedirect(formData.get("next"), "/");
  const supabase = await createSupabaseServerClient();

  if (supabase) {
    await supabase.auth.signOut();
  }

  redirect(nextPath);
}
