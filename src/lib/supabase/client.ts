"use client";

import { createBrowserClient } from "@supabase/ssr";

import { getSupabasePublicConfig } from "./config";
import type { Database } from "./database.types";

export function createSupabaseBrowserClient() {
  const config = getSupabasePublicConfig();

  if (!config.configured || !config.url || !config.publishableKey) {
    return null;
  }

  return createBrowserClient<Database>(config.url, config.publishableKey);
}
