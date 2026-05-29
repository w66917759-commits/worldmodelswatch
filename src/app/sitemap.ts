import type { MetadataRoute } from "next";

import { comparisons, modelProfiles, newsItems } from "@/lib/content";
import {
  getComparisonLastModified,
  getModelLastModified,
  getNewsLastModified,
  getStaticRouteLastModified,
} from "@/lib/seo/last-modified";
import { site } from "@/lib/site";

const staticRoutes = [
  "/",
  "/spatial-intelligence",
  "/from-video-to-worlds",
  "/world-model-labs",
  "/research-insights",
  "/concept-map",
  "/what-is-world-model",
  "/news",
  "/models",
  "/compare",
  "/timeline",
  "/concepts",
  "/faq",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: getStaticRouteLastModified(route),
      changeFrequency: "weekly" as const,
      priority: route === "/" ? 1 : 0.8,
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
