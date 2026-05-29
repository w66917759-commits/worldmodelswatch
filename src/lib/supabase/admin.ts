import "server-only";

import { createClient } from "@supabase/supabase-js";

import { getSupabaseAdminConfig } from "./config";
import type { Database } from "./database.types";

export function createSupabaseAdminClient() {
  const config = getSupabaseAdminConfig();

  if (
    !config.configured ||
    !config.url ||
    !config.publishableKey ||
    !config.secretKey
  ) {
    return null;
  }

  return createClient<Database>(config.url, config.secretKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
