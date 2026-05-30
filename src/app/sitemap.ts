import type { MetadataRoute } from "next";

import { getMetadataSitemap } from "@/lib/seo/sitemap-entries";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return getMetadataSitemap();
}
