import { NextResponse } from "next/server";

import { sanitizePublicRedirect } from "@/lib/public-routes";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const nextPath = sanitizePublicRedirect(requestUrl.searchParams.get("next"), "/");

  if (code) {
    const supabase = await createSupabaseServerClient();
    const { error } =
      (await supabase?.auth.exchangeCodeForSession(code)) ?? {
        error: new Error("Supabase is not configured."),
      };

    if (!error) {
      return NextResponse.redirect(new URL(nextPath, requestUrl.origin));
    }
  }

  const errorUrl = new URL("/auth/sign-in", requestUrl.origin);
  errorUrl.searchParams.set("error", "callback");
  errorUrl.searchParams.set("next", nextPath);

  return NextResponse.redirect(errorUrl);
}
