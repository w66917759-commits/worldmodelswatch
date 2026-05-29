import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import { getSupabasePublicConfig } from "./config";
import type { Database } from "./database.types";

type SupabaseUser = {
  id: string;
  email: string | null;
  displayName: string;
  avatarUrl: string | null;
};

type UserMetadata = {
  avatar_url?: unknown;
  full_name?: unknown;
  name?: unknown;
  picture?: unknown;
};

function readString(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function displayNameFromEmail(email: string | null) {
  if (!email) return "World Models Watch reader";
  return email.split("@")[0] || "World Models Watch reader";
}

function normalizeUserMetadata(metadata: UserMetadata | null | undefined) {
  return {
    displayName:
      readString(metadata?.full_name) ??
      readString(metadata?.name) ??
      null,
    avatarUrl:
      readString(metadata?.avatar_url) ??
      readString(metadata?.picture) ??
      null,
  };
}

export async function createSupabaseServerClient() {
  const config = getSupabasePublicConfig();

  if (!config.configured || !config.url || !config.publishableKey) {
    return null;
  }

  const cookieStore = await cookies();

  return createServerClient<Database>(config.url, config.publishableKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Server Components cannot write cookies; the proxy refreshes them.
        }
      },
    },
  });
}

export async function getSupabaseUser(): Promise<{
  configured: boolean;
  user: SupabaseUser | null;
}> {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return { configured: false, user: null };
  }

  const { data: claimsData, error: claimsError } =
    await supabase.auth.getClaims();

  if (claimsError || !claimsData?.claims?.sub) {
    return { configured: true, user: null };
  }

  const { data: userData } = await supabase.auth.getUser();
  const user = userData.user;
  const email = user?.email ?? readString(claimsData.claims.email) ?? null;
  const metadata = normalizeUserMetadata(user?.user_metadata as UserMetadata);

  return {
    configured: true,
    user: {
      id: claimsData.claims.sub,
      email,
      displayName: metadata.displayName ?? displayNameFromEmail(email),
      avatarUrl: metadata.avatarUrl,
    },
  };
}
