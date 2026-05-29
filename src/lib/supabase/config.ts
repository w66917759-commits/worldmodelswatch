export type SupabasePublicConfig = {
  configured: boolean;
  url: string | null;
  publishableKey: string | null;
  missing: string[];
};

export type SupabaseAdminConfig = SupabasePublicConfig & {
  secretKey: string | null;
};

export function getSupabasePublicConfig(): SupabasePublicConfig {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() || null;
  const publishableKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() || null;
  const missing: string[] = [];

  if (!url) missing.push("NEXT_PUBLIC_SUPABASE_URL");
  if (!publishableKey) missing.push("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY");

  return {
    configured: missing.length === 0,
    url,
    publishableKey,
    missing,
  };
}

export function getSupabaseAdminConfig(): SupabaseAdminConfig {
  const publicConfig = getSupabasePublicConfig();
  const secretKey = process.env.SUPABASE_SECRET_KEY?.trim() || null;
  const missing = [...publicConfig.missing];

  if (!secretKey) missing.push("SUPABASE_SECRET_KEY");

  return {
    ...publicConfig,
    configured: missing.length === 0,
    secretKey,
    missing,
  };
}
