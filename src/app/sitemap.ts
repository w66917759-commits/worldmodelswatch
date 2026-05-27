import type { MetadataRoute } from "next";

import { comparisons, modelProfiles, newsItems } from "@/lib/content";
import { site } from "@/lib/site";

const staticRoutes = [
  "/",
  "/concept-map",
  "/what-is-world-model",
  "/news",
  "/models",
  "/compare",
  "/timeline",
  "/concepts",
  "/privacy",
  "/terms",
];

function latestContentDate() {
  const datedEntries = [
    ...newsItems.map((item) => item.updated ?? item.date),
    ...modelProfiles.map((model) => model.updated ?? model.date),
    ...comparisons.map((comparison) => comparison.updated),
  ];

  return datedEntries.reduce((latest, value) => {
    const current = new Date(value);
    return current > latest ? current : latest;
  }, new Date(0));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUpdated = latestContentDate();
  const routes = [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: siteUpdated,
      changeFrequency: "weekly" as const,
      priority: route === "/" ? 1 : 0.8,
    })),
    ...newsItems.map((item) => ({
      url: `${site.url}/news/${item.slug}`,
      lastModified: new Date(item.updated ?? item.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...modelProfiles.map((model) => ({
      url: `${site.url}/models/${model.slug}`,
      lastModified: new Date(model.updated ?? model.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...comparisons.map((comparison) => ({
      url: `${site.url}/compare/${comparison.slug}`,
      lastModified: new Date(comparison.updated),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  return routes;
}
