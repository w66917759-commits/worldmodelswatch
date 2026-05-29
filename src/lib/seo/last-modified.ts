import type { Comparison, ModelProfile, NewsItem } from "@/lib/content";

const SITE_STRUCTURE_ISO = "2026-05-29";
const CONTENT_BASE_ISO = "2026-05-26";

const STATIC_ROUTE_LASTMOD: Record<string, string> = {
  "/": "2026-05-29",
  "/spatial-intelligence": CONTENT_BASE_ISO,
  "/from-video-to-worlds": CONTENT_BASE_ISO,
  "/world-model-labs": "2026-05-29",
  "/research-insights": CONTENT_BASE_ISO,
  "/concept-map": CONTENT_BASE_ISO,
  "/what-is-world-model": CONTENT_BASE_ISO,
  "/news": "2026-05-29",
  "/models": "2026-05-29",
  "/compare": "2026-05-29",
  "/timeline": CONTENT_BASE_ISO,
  "/concepts": CONTENT_BASE_ISO,
  "/faq": "2026-05-28",
  "/privacy": CONTENT_BASE_ISO,
  "/terms": CONTENT_BASE_ISO,
};

export function dateFromIso(iso: string): Date {
  return new Date(`${iso}T00:00:00.000Z`);
}

export function getStaticRouteLastModified(path: string): Date {
  return dateFromIso(STATIC_ROUTE_LASTMOD[path] ?? SITE_STRUCTURE_ISO);
}

export function getNewsLastModified(item: NewsItem): Date {
  return dateFromIso(item.updated ?? item.date);
}

export function getModelLastModified(model: ModelProfile): Date {
  return dateFromIso(model.updated ?? model.date);
}

export function getComparisonLastModified(comparison: Comparison): Date {
  return dateFromIso(comparison.updated);
}
