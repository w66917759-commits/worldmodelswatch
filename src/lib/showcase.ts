import { worldsData } from "@/components/ai-world/worldsData";
import type { Comparison, ModelProfile, NewsItem, ShowcaseVisual } from "@/lib/content";

export const showcaseImages = {
  worldModel: "/showcase/world-model.svg",
  videoToWorlds: "/showcase/video-to-worlds.svg",
  spatial3d: "/showcase/spatial-3d.svg",
  civilization: "/showcase/ai-civilization.svg",
  physicalAi: "/showcase/physical-ai.svg",
  comparison: "/showcase/comparison-arena.svg",
  timeline: "/showcase/timeline-future.svg",
  news: "/showcase/news-signal.svg",
  faq: "/showcase/faq-field.svg",
} as const;

export const pageVisuals = {
  "spatial-intelligence": {
    heroImage: showcaseImages.spatial3d,
    accentColor: "#76ffe5",
    secondaryAccentColor: "#a6b8ff",
    primarySceneLabel: "Spatial interface",
  },
  "from-video-to-worlds": {
    heroImage: showcaseImages.videoToWorlds,
    accentColor: "#f8d66d",
    secondaryAccentColor: "#ff7ca8",
    primarySceneLabel: "From clip to place",
  },
  "world-model-labs": {
    heroVideo: "/world-videos/world-labs/marble-hero.mp4",
    posterImage: "/world-videos/world-labs/marble-hero-poster.png",
    accentColor: "#9ad7ff",
    secondaryAccentColor: "#f4cf7a",
    primarySceneLabel: "Video labs",
  },
  "research-insights": {
    heroImage: showcaseImages.news,
    accentColor: "#7cf7ff",
    secondaryAccentColor: "#f6d26e",
    primarySceneLabel: "Signal room",
  },
  definition: {
    heroImage: showcaseImages.worldModel,
    accentColor: "#0bd1c6",
    secondaryAccentColor: "#f2c15f",
    primarySceneLabel: "World model basics",
  },
  concepts: {
    heroImage: showcaseImages.videoToWorlds,
    accentColor: "#82eaff",
    secondaryAccentColor: "#ff7fa6",
    primarySceneLabel: "Visual glossary",
  },
  "concept-map": {
    heroImage: showcaseImages.spatial3d,
    accentColor: "#76ffe5",
    secondaryAccentColor: "#ffd66f",
    primarySceneLabel: "Concept map",
  },
  timeline: {
    heroImage: showcaseImages.timeline,
    accentColor: "#f6d26e",
    secondaryAccentColor: "#ff7fa6",
    primarySceneLabel: "Milestone reel",
  },
  news: {
    heroImage: showcaseImages.news,
    accentColor: "#7cf7ff",
    secondaryAccentColor: "#f6d26e",
    primarySceneLabel: "Update signal",
  },
  compare: {
    heroImage: showcaseImages.comparison,
    accentColor: "#74f4ff",
    secondaryAccentColor: "#ff82b1",
    primarySceneLabel: "Comparison arena",
  },
  faq: {
    heroImage: showcaseImages.faq,
    accentColor: "#8df6dd",
    secondaryAccentColor: "#f8d66d",
    primarySceneLabel: "Quick answers",
  },
  legal: {
    heroImage: showcaseImages.faq,
    accentColor: "#8df6dd",
    secondaryAccentColor: "#f8d66d",
    primarySceneLabel: "Clear rules",
  },
} satisfies Record<string, ShowcaseVisual>;

export function getWorldVisualByModelSlug(slug: string) {
  return worldsData.find((world) => world.detailHref === `/models/${slug}`);
}

export function modelVisual(model: ModelProfile): ShowcaseVisual {
  const world = getWorldVisualByModelSlug(model.slug);

  if (world) {
    return {
      visualTitle: model.visualTitle ?? world.name,
      visualSubtitle: model.visualSubtitle ?? world.feeling,
      heroVideo: model.heroVideo ?? world.videoSrc,
      posterImage: model.posterImage ?? world.posterSrc,
      accentColor: model.accentColor ?? world.accent,
      secondaryAccentColor: model.secondaryAccentColor ?? world.secondaryAccent,
      consumerHook: model.consumerHook ?? world.feeling,
      primarySceneLabel: model.primarySceneLabel ?? world.type,
    };
  }

  if (/robot|embodied|physical|cosmos|vla|va/i.test(`${model.category} ${model.name}`)) {
    return {
      heroImage: model.heroImage ?? showcaseImages.physicalAi,
      accentColor: model.accentColor ?? "#8affd2",
      secondaryAccentColor: model.secondaryAccentColor ?? "#ffd66f",
      consumerHook:
        model.consumerHook ??
        "See how world models move from generated scenes into robots, sensors, and physical decision-making.",
      primarySceneLabel: model.primarySceneLabel ?? "Physical AI",
    };
  }

  if (/video|character|avatar|emo|gwm/i.test(`${model.category} ${model.name}`)) {
    return {
      heroImage: model.heroImage ?? showcaseImages.videoToWorlds,
      accentColor: model.accentColor ?? "#f8d66d",
      secondaryAccentColor: model.secondaryAccentColor ?? "#ff7ca8",
      consumerHook:
        model.consumerHook ??
        "Start from a moving scene, then watch the category push toward control, identity, and continuity.",
      primarySceneLabel: model.primarySceneLabel ?? "Generated media",
    };
  }

  return {
    heroImage: model.heroImage ?? showcaseImages.worldModel,
    accentColor: model.accentColor ?? "#0bd1c6",
    secondaryAccentColor: model.secondaryAccentColor ?? "#f2c15f",
    consumerHook:
      model.consumerHook ??
      "A visual signal in the larger move from one-off AI media to generated worlds.",
    primarySceneLabel: model.primarySceneLabel ?? model.category,
  };
}

export function newsVisual(item: NewsItem): ShowcaseVisual & { signalType: string } {
  const joined = `${item.tags.join(" ")} ${item.organization} ${item.title}`;
  const matchedModel = item.relatedModelSlugs?.[0]
    ? undefined
    : worldsData.find((world) => joined.toLowerCase().includes(world.name.toLowerCase().split(" ")[0]));

  let signalType = "Research";
  if (/product|api|launch|early access|mobile/i.test(joined)) signalType = "Product";
  if (/open source|github|hugging face|model card/i.test(joined)) signalType = "Open source";
  if (/reported|report/i.test(joined)) signalType = "Reported";
  if (/physical|robot|embodied/i.test(joined)) signalType = "Physical AI";

  if (matchedModel) {
    return {
      signalType,
      heroVideo: matchedModel.videoSrc,
      posterImage: matchedModel.posterSrc,
      accentColor: matchedModel.accent,
      secondaryAccentColor: matchedModel.secondaryAccent,
      consumerHook: item.visualSubtitle ?? item.summary,
      primarySceneLabel: signalType,
    };
  }

  return {
    signalType,
    heroImage: item.heroImage ?? (/physical|robot|embodied/i.test(joined) ? showcaseImages.physicalAi : showcaseImages.news),
    accentColor: item.accentColor ?? (/reported/i.test(signalType) ? "#ff7fa6" : "#7cf7ff"),
    secondaryAccentColor: item.secondaryAccentColor ?? "#f6d26e",
    consumerHook: item.consumerHook ?? item.summary,
    primarySceneLabel: item.primarySceneLabel ?? signalType,
  };
}

export function comparisonVisual(comparison: Comparison): ShowcaseVisual {
  const relatedWorld = comparison.relatedModelSlugs
    ?.map((slug) => getWorldVisualByModelSlug(slug))
    .find(Boolean);

  return {
    heroVideo: comparison.heroVideo ?? relatedWorld?.videoSrc,
    posterImage: comparison.posterImage ?? relatedWorld?.posterSrc,
    heroImage: comparison.heroImage ?? (relatedWorld ? undefined : showcaseImages.comparison),
    accentColor: comparison.accentColor ?? relatedWorld?.accent ?? "#74f4ff",
    secondaryAccentColor: comparison.secondaryAccentColor ?? relatedWorld?.secondaryAccent ?? "#ff82b1",
    consumerHook:
      comparison.consumerHook ??
      "Two paths into the same future. Pick the one that matches what you want to see, build, or understand.",
    primarySceneLabel: comparison.primarySceneLabel ?? "Visual comparison",
  };
}

export function conceptVisual(slug: string): ShowcaseVisual {
  if (/physical|foundation/i.test(slug)) return pageVisuals["timeline"];
  if (/spatial|interactive/i.test(slug)) return pageVisuals["spatial-intelligence"];
  return pageVisuals.definition;
}

export function splitComparisonTitle(title: string) {
  const [left, right] = title.split(/\s+vs\.?\s+/i);
  return {
    left: left || title,
    right: right || "The alternative",
  };
}
