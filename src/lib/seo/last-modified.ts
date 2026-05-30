import type { Comparison, ModelProfile, NewsItem } from "@/lib/content";

const SITE_STRUCTURE_ISO = "2026-05-30";

const STATIC_ROUTE_LASTMOD: Record<string, string> = {
  "/": SITE_STRUCTURE_ISO,
  "/world-stream": SITE_STRUCTURE_ISO,
  "/create-word": SITE_STRUCTURE_ISO,
  "/ai-360-skybox-generator": SITE_STRUCTURE_ISO,
  "/text-to-3d-world-generator": SITE_STRUCTURE_ISO,
  "/ai-game-asset-generator": SITE_STRUCTURE_ISO,
  "/ai-environment-creator-for-unity-unreal": SITE_STRUCTURE_ISO,
  "/events": SITE_STRUCTURE_ISO,
  "/progress": SITE_STRUCTURE_ISO,
  "/updates": SITE_STRUCTURE_ISO,
  "/timeline": SITE_STRUCTURE_ISO,
  "/spatial-intelligence": SITE_STRUCTURE_ISO,
  "/from-video-to-worlds": SITE_STRUCTURE_ISO,
  "/world-model-labs": SITE_STRUCTURE_ISO,
  "/research-insights": SITE_STRUCTURE_ISO,
  "/concept-map": SITE_STRUCTURE_ISO,
  "/what-is-world-model": SITE_STRUCTURE_ISO,
  "/news": SITE_STRUCTURE_ISO,
  "/models": SITE_STRUCTURE_ISO,
  "/compare": SITE_STRUCTURE_ISO,
  "/concepts": SITE_STRUCTURE_ISO,
  "/faq": SITE_STRUCTURE_ISO,
  "/privacy": SITE_STRUCTURE_ISO,
  "/terms": SITE_STRUCTURE_ISO,
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
