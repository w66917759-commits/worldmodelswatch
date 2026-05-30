import type { Metadata } from "next";

import { absoluteUrl, site } from "@/lib/site";

export type StaticSeoTarget = {
  route: string;
  primaryKeyword: string;
  longTailKeywords: string[];
  intent: string;
  indexable: boolean;
  description: string;
};

export const staticSeoTargets = [
  {
    route: "/",
    primaryKeyword: "AI world models",
    longTailKeywords: [
      "AI generated worlds",
      "interactive world models",
      "spatial AI worlds",
    ],
    intent: "Homepage for readers comparing visible AI world model demos.",
    indexable: true,
    description:
      "Explore AI world models through focused demos, company routes, and source-backed pages about generated worlds.",
  },
  {
    route: "/world-stream",
    primaryKeyword: "world model evolution",
    longTailKeywords: [
      "world model stages",
      "AI world evolution map",
      "generated world progression",
    ],
    intent: "Explain the capability path from prediction to generated spaces and agents.",
    indexable: true,
    description:
      "Follow world model evolution from prediction into generated space, controllable worlds, physical action, and agent societies.",
  },
  {
    route: "/create-word",
    primaryKeyword: "AI world generator",
    longTailKeywords: [
      "create AI worlds",
      "AI 3D world generator",
      "AI world creation tools",
    ],
    intent: "Send readers to real AI world generator product surfaces.",
    indexable: true,
    description:
      "Find AI world generator tools that already let visitors create 360 environments or persistent 3D worlds.",
  },
  {
    route: "/ai-360-skybox-generator",
    primaryKeyword: "AI 360 skybox generator",
    longTailKeywords: [
      "AI skybox generator",
      "360 environment generator",
      "VR background AI",
      "Skybox AI alternatives",
    ],
    intent: "Route readers to 360 environment and skybox tools without confusing them with full 3D world simulators.",
    indexable: true,
    description:
      "Compare AI 360 skybox generator options for panoramic environments, HDRI-style backdrops, game-engine skyboxes, and VR scenes.",
  },
  {
    route: "/text-to-3d-world-generator",
    primaryKeyword: "text-to-3D world generator",
    longTailKeywords: [
      "AI 3D world generator",
      "text image video to 3D world",
      "persistent 3D worlds",
      "Gaussian splat export AI",
    ],
    intent: "Send text-to-3D world searches to source-backed product and open-stack model pages.",
    indexable: true,
    description:
      "Find text-to-3D world generator routes for persistent worlds, editable scene assets, Gaussian splats, meshes, and open 3D stacks.",
  },
  {
    route: "/ai-game-asset-generator",
    primaryKeyword: "AI game asset generator",
    longTailKeywords: [
      "AI game environment generator",
      "AI game level design tools",
      "AI generated game assets",
      "AI environment creator for games",
    ],
    intent: "Capture game-asset intent while separating skyboxes, 3D worlds, and open research workflows.",
    indexable: true,
    description:
      "Choose source-backed AI game asset generator routes for 360 skyboxes, persistent 3D worlds, and open 3D world-generation stacks.",
  },
  {
    route: "/ai-environment-creator-for-unity-unreal",
    primaryKeyword: "AI environment creator for Unity and Unreal",
    longTailKeywords: [
      "AI environment creator for Unity",
      "AI environment creator for Unreal Engine",
      "AI 3D environment generator",
      "AI VR environment generator",
    ],
    intent: "Serve engine-oriented searches with a curated page that points to compatible tools and source-backed boundaries.",
    indexable: true,
    description:
      "Choose AI environment creator tools for Unity, Unreal Engine, Blender, web 3D, and VR workflows without mixing skyboxes and full 3D worlds.",
  },
  {
    route: "/events",
    primaryKeyword: "AI world model events",
    longTailKeywords: [
      "world model release events",
      "AI world model timeline events",
      "world model milestone events",
    ],
    intent: "Show dated AI world model events as an evidence rail.",
    indexable: true,
    description:
      "Track AI world model events across product launches, research releases, open-source drops, and physical-AI milestones.",
  },
  {
    route: "/progress",
    primaryKeyword: "AI world model progress",
    longTailKeywords: [
      "current AI world models",
      "world model product progress",
      "spatial model progress",
    ],
    intent: "Summarize the current state of world model progress.",
    indexable: true,
    description:
      "Read a focused guide to AI world model progress across usable products, experimental previews, open stacks, and adjacent physical AI.",
  },
  {
    route: "/updates",
    primaryKeyword: "selected AI world model release signals",
    longTailKeywords: [
      "world model product updates",
      "world model research updates",
      "selected AI world release signals",
    ],
    intent: "Collect a short auxiliary set of release signals that materially change the category map.",
    indexable: true,
    description:
      "Scan selected AI world model release signals that point back to stable company profiles and decision guides.",
  },
  {
    route: "/timeline",
    primaryKeyword: "world model timeline",
    longTailKeywords: [
      "world model launch timeline",
      "AI world model chronology",
      "world model milestones",
    ],
    intent: "Provide a chronological launch and milestone timeline.",
    indexable: true,
    description:
      "Use the world model timeline to follow dated launches, demos, model releases, and platform milestones.",
  },
  {
    route: "/models",
    primaryKeyword: "AI world model company map",
    longTailKeywords: [
      "world model companies",
      "AI world model startups",
      "companies building world models",
      "AI world model product map",
    ],
    intent: "Help consumer readers find usable AI world tools while keeping demos and research signals clearly labeled.",
    indexable: true,
    description:
      "Find AI world tools you can try, see what each company lets you create, and know which projects are still demos or research.",
  },
  {
    route: "/world-model-labs",
    primaryKeyword: "world model demos",
    longTailKeywords: [
      "AI world model demo videos",
      "interactive world model demos",
      "generated world demos",
    ],
    intent: "Show visual demos while linking to source-backed model pages.",
    indexable: true,
    description:
      "Watch world model demos for generated spaces, playable worlds, 360 environments, and agent-society examples.",
  },
  {
    route: "/news",
    primaryKeyword: "world model release signals",
    longTailKeywords: [
      "AI world model news",
      "world model release news",
      "world model product signals",
      "world model source confidence",
    ],
    intent: "Index short source-backed release signals without competing with stable model or guide pages.",
    indexable: true,
    description:
      "Read short world model release signals organized by what changed, source confidence, affected models, and next pages to open.",
  },
  {
    route: "/compare",
    primaryKeyword: "world model decision guides",
    longTailKeywords: [
      "AI world model comparison",
      "compare world models",
      "world model decision guide",
      "which world model to choose",
    ],
    intent: "Offer decision guides that help readers choose between model lanes without repeating model dossiers.",
    indexable: true,
    description:
      "Open world model decision guides that separate creator tools, developer stacks, research previews, robotics platforms, and beginner boundaries.",
  },
  {
    route: "/what-is-world-model",
    primaryKeyword: "what is a world model",
    longTailKeywords: [
      "world model definition",
      "world model explained",
      "world model vs video model",
    ],
    intent: "Answer the beginner definition query.",
    indexable: true,
    description:
      "Learn what is a world model, how it differs from video models, and why spatial memory and action matter.",
  },
  {
    route: "/spatial-intelligence",
    primaryKeyword: "spatial intelligence AI",
    longTailKeywords: [
      "AI spatial intelligence",
      "spatial world models",
      "AI models for spatial reasoning",
    ],
    intent: "Explain spatial intelligence as the single concept behind world navigation.",
    indexable: true,
    description:
      "Understand spatial intelligence AI as the layer that connects generated scenes, motion, memory, and action.",
  },
  {
    route: "/from-video-to-worlds",
    primaryKeyword: "AI video to world models",
    longTailKeywords: [
      "video models to world models",
      "AI video into interactive worlds",
      "generated clips to AI worlds",
    ],
    intent: "Explain the transition from fixed clips to stateful worlds.",
    indexable: true,
    description:
      "Follow the shift from AI video to world models through interactive worlds, persistent 3D spaces, and agent societies.",
  },
  {
    route: "/research-insights",
    primaryKeyword: "world model research",
    longTailKeywords: [
      "AI world model research",
      "world model research signals",
      "world model source analysis",
    ],
    intent: "Summarize source-backed research signals without becoming a generic hub.",
    indexable: true,
    description:
      "Review world model research signals through source-backed updates, comparison paths, and normalized model dossiers.",
  },
  {
    route: "/concept-map",
    primaryKeyword: "world model concept map",
    longTailKeywords: [
      "AI world model concept map",
      "world model category map",
      "world model visual map",
    ],
    intent: "Show a single visual concept map for the category.",
    indexable: true,
    description:
      "Use the world model concept map to connect AI video, spatial computing, digital twins, physical AI, and generated worlds.",
  },
  {
    route: "/concepts",
    primaryKeyword: "world model glossary",
    longTailKeywords: [
      "world model terms",
      "AI world model definitions",
      "spatial AI glossary",
    ],
    intent: "Define terms without competing with the main definition page.",
    indexable: true,
    description:
      "Browse a world model glossary with focused definitions for spatial intelligence, physical AI, and interactive world generation.",
  },
  {
    route: "/faq",
    primaryKeyword: "world models FAQ",
    longTailKeywords: [
      "world model questions",
      "World Models Watch FAQ",
      "world model source policy",
    ],
    intent: "Answer site and category policy questions.",
    indexable: true,
    description:
      "Read the world models FAQ for source confidence, category boundaries, comments, likes, and reader participation.",
  },
  {
    route: "/privacy",
    primaryKeyword: "World Models Watch privacy policy",
    longTailKeywords: [
      "World Models Watch data policy",
      "World Models Watch comments privacy",
      "World Models Watch cookies",
    ],
    intent: "Legal privacy page for the site.",
    indexable: true,
    description:
      "Review the World Models Watch privacy policy for public pages, comments, cookies, login, and source data handling.",
  },
  {
    route: "/terms",
    primaryKeyword: "World Models Watch terms of use",
    longTailKeywords: [
      "World Models Watch terms",
      "World Models Watch acceptable use",
      "World Models Watch editorial terms",
    ],
    intent: "Legal terms page for the site.",
    indexable: true,
    description:
      "Read the World Models Watch terms of use for editorial scope, source confidence, comments, and acceptable use.",
  },
  {
    route: "/login",
    primaryKeyword: "World Models Watch login",
    longTailKeywords: [],
    intent: "Private editor login.",
    indexable: false,
    description: "Admin login for World Models Watch.",
  },
  {
    route: "/account",
    primaryKeyword: "World Models Watch account",
    longTailKeywords: [],
    intent: "Protected editor account page.",
    indexable: false,
    description: "Protected account area for World Models Watch.",
  },
  {
    route: "/auth/sign-in",
    primaryKeyword: "World Models Watch community sign in",
    longTailKeywords: [],
    intent: "Community authentication page.",
    indexable: false,
    description: "Community sign-in for World Models Watch comments.",
  },
] as const satisfies readonly StaticSeoTarget[];

export const indexableStaticSeoTargets = staticSeoTargets.filter(
  (target) => target.indexable,
);

export function getStaticSeoTarget(route: string): StaticSeoTarget {
  const target = staticSeoTargets.find((item) => item.route === route);

  if (!target) {
    throw new Error(`Missing static SEO target for ${route}`);
  }

  return target;
}

export function uniqueKeywords(
  ...keywordGroups: Array<string | undefined | null | readonly string[]>
): string[] {
  const keywords = keywordGroups.flatMap((group) => {
    if (!group) return [];
    return Array.isArray(group) ? group : [group];
  });

  return Array.from(new Set(keywords.filter(Boolean).map((keyword) => keyword.trim())));
}

export function metadataForRoute(route: string): Metadata {
  const target = getStaticSeoTarget(route);
  const title = target.primaryKeyword;
  const url = absoluteUrl(route);

  return {
    title: route === "/" ? { absolute: `${title} | ${site.name}` } : title,
    description: target.description,
    keywords: uniqueKeywords(target.primaryKeyword, target.longTailKeywords),
    alternates: {
      canonical: route,
    },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description: target.description,
    },
    twitter: {
      card: "summary",
      title: `${title} | ${site.name}`,
      description: target.description,
    },
  };
}

export function modelPrimaryKeyword(model: {
  name: string;
  primaryKeyword?: string;
  category?: string;
}) {
  if (model.primaryKeyword) return model.primaryKeyword;

  if (model.category && /video|portrait|avatar|character/i.test(model.category)) {
    return `${model.name} AI video model`;
  }

  return `${model.name} world model`;
}

export function newsPrimaryKeyword(item: { title: string; primaryKeyword?: string }) {
  return item.primaryKeyword ?? item.title;
}

export function comparisonPrimaryKeyword(comparison: {
  title: string;
  primaryKeyword?: string;
}) {
  return comparison.primaryKeyword ?? comparison.title;
}
