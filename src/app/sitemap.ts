import type { MetadataRoute } from "next";

import { comparisons, modelProfiles, newsItems } from "@/lib/content";
import {
  getComparisonLastModified,
  getModelLastModified,
  getNewsLastModified,
  getStaticRouteLastModified,
} from "@/lib/seo/last-modified";
import { indexableStaticSeoTargets } from "@/lib/seo/page-targets";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...indexableStaticSeoTargets.map((target) => ({
      url: `${site.url}${target.route}`,
      lastModified: getStaticRouteLastModified(target.route),
      changeFrequency: "weekly" as const,
      priority: target.route === "/" ? 1 : 0.8,
    })),
    ...newsItems.map((item) => ({
      url: `${site.url}/news/${item.slug}`,
      lastModified: getNewsLastModified(item),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...modelProfiles.map((model) => ({
      url: `${site.url}/models/${model.slug}`,
      lastModified: getModelLastModified(model),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...comparisons.map((comparison) => ({
      url: `${site.url}/compare/${comparison.slug}`,
      lastModified: getComparisonLastModified(comparison),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  return routes;
}
