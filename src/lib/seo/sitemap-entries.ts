import type { MetadataRoute } from "next";

import { comparisons, modelProfiles, newsItems } from "@/lib/content";
import {
  comparisonPrimaryKeyword,
  indexableStaticSeoTargets,
  modelPrimaryKeyword,
  newsPrimaryKeyword,
} from "@/lib/seo/page-targets";
import {
  getComparisonLastModified,
  getModelLastModified,
  getNewsLastModified,
  getStaticRouteLastModified,
} from "@/lib/seo/last-modified";
import { site } from "@/lib/site";

type SitemapChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

export type PublicSitemapEntry = {
  route: string;
  url: string;
  title: string;
  description: string;
  lastModified: Date;
  changeFrequency: SitemapChangeFrequency;
  priority: number;
};

export type PublicSitemapGroup = {
  id: string;
  title: string;
  description: string;
  entries: PublicSitemapEntry[];
};

function absoluteRoute(route: string) {
  return `${site.url}${route}`;
}

const staticEntries: PublicSitemapEntry[] = indexableStaticSeoTargets.map((target) => ({
  route: target.route,
  url: absoluteRoute(target.route),
  title: target.primaryKeyword,
  description: target.description,
  lastModified: getStaticRouteLastModified(target.route),
  changeFrequency: "weekly",
  priority: target.route === "/" ? 1 : target.route === "/sitemap" ? 0.45 : 0.8,
}));

const modelEntries: PublicSitemapEntry[] = modelProfiles.map((model) => ({
  route: `/models/${model.slug}`,
  url: absoluteRoute(`/models/${model.slug}`),
  title: modelPrimaryKeyword(model),
  description: model.summary,
  lastModified: getModelLastModified(model),
  changeFrequency: "monthly",
  priority: 0.7,
}));

const newsEntries: PublicSitemapEntry[] = newsItems.map((item) => ({
  route: `/news/${item.slug}`,
  url: absoluteRoute(`/news/${item.slug}`),
  title: newsPrimaryKeyword(item),
  description: item.summary,
  lastModified: getNewsLastModified(item),
  changeFrequency: "monthly",
  priority: 0.7,
}));

const comparisonEntries: PublicSitemapEntry[] = comparisons.map((comparison) => ({
  route: `/compare/${comparison.slug}`,
  url: absoluteRoute(`/compare/${comparison.slug}`),
  title: comparisonPrimaryKeyword(comparison),
  description: comparison.summary,
  lastModified: getComparisonLastModified(comparison),
  changeFrequency: "monthly",
  priority: 0.75,
}));

export const publicSitemapGroups: PublicSitemapGroup[] = [
  {
    id: "public-pages",
    title: "Public pages",
    description: "Static crawl targets, legal pages, glossary pages, and topic hubs.",
    entries: staticEntries,
  },
  {
    id: "model-dossiers",
    title: "Model dossiers",
    description: "Company and model profile pages with source-backed status notes.",
    entries: modelEntries,
  },
  {
    id: "release-signals",
    title: "Release signals",
    description: "Dated news and update pages that point back to durable dossiers.",
    entries: newsEntries,
  },
  {
    id: "decision-guides",
    title: "Decision guides",
    description: "Comparison pages for creator, developer, research, and robotics intent.",
    entries: comparisonEntries,
  },
];

export const publicSitemapEntries = publicSitemapGroups.flatMap(
  (group) => group.entries,
);

export function getMetadataSitemap(): MetadataRoute.Sitemap {
  return publicSitemapEntries.map(
    ({ url, lastModified, changeFrequency, priority }) => ({
      url,
      lastModified,
      changeFrequency,
      priority,
    }),
  );
}
