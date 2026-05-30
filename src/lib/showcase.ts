import { worldsData } from "@/components/ai-world/worldsData";
import type { Comparison, ModelProfile, NewsItem, ShowcaseVisual } from "@/lib/content";

export const textureImages = {
  generatedCourtyard: "/showcase/textures/generated-courtyard-world.webp",
  animeLibrary: "/showcase/textures/anime-library-world.webp",
  spatialLab: "/showcase/textures/spatial-lab-console.webp",
  playableDesert: "/showcase/textures/playable-desert-world.webp",
  openHarbor: "/showcase/textures/open-world-harbor.webp",
  robotRoom: "/showcase/textures/robot-simulation-room.webp",
  comparisonArena: "/showcase/textures/comparison-arena-worlds.webp",
  newsDesk: "/showcase/textures/news-signal-desk.webp",
  timelineCorridor: "/showcase/textures/timeline-corridor.webp",
  conceptMapWall: "/showcase/textures/concept-map-wall.webp",
  skyboxObservatory: "/showcase/textures/skybox-observatory.webp",
  faqArchive: "/showcase/textures/faq-archive.webp",
} as const;

export const showcaseImages = {
  worldModel: textureImages.generatedCourtyard,
  videoToWorlds: textureImages.playableDesert,
  spatial3d: textureImages.spatialLab,
  civilization: textureImages.conceptMapWall,
  physicalAi: textureImages.robotRoom,
  comparison: textureImages.comparisonArena,
  timeline: textureImages.timelineCorridor,
  news: textureImages.newsDesk,
  faq: textureImages.faqArchive,
} as const;

const worldTextureById: Record<string, string> = {
  "world-labs": textureImages.generatedCourtyard,
  oasis: textureImages.playableDesert,
  genie: textureImages.playableDesert,
  happyoyster: textureImages.openHarbor,
  skybox: textureImages.skyboxObservatory,
  hy: textureImages.spatialLab,
  "project-sid": textureImages.conceptMapWall,
};

const defaultStickers = [
  textureImages.generatedCourtyard,
  textureImages.spatialLab,
  textureImages.playableDesert,
  textureImages.conceptMapWall,
];

function visualWithTextures<T extends ShowcaseVisual>(
  visual: T,
  backgroundImage: string,
  stickerImages: string[] = defaultStickers,
): T {
  return {
    ...visual,
    backgroundImage: visual.backgroundImage ?? backgroundImage,
    cardImage: visual.cardImage ?? backgroundImage,
    heroImage: visual.heroImage ?? backgroundImage,
    stickerImages: visual.stickerImages ?? stickerImages,
  };
}

function textureForWorldId(id: string) {
  return worldTextureById[id] ?? textureImages.animeLibrary;
}

export const pageVisuals: Record<string, ShowcaseVisual> = {
  "spatial-intelligence": {
    backgroundImage: textureImages.spatialLab,
    cardImage: textureImages.spatialLab,
    heroImage: textureImages.spatialLab,
    stickerImages: [textureImages.spatialLab, textureImages.conceptMapWall, textureImages.robotRoom],
    accentColor: "#76ffe5",
    secondaryAccentColor: "#a6b8ff",
    primarySceneLabel: "Spatial interface",
  },
  "from-video-to-worlds": {
    backgroundImage: textureImages.playableDesert,
    cardImage: textureImages.playableDesert,
    heroImage: textureImages.playableDesert,
    stickerImages: [textureImages.playableDesert, textureImages.animeLibrary, textureImages.timelineCorridor],
    accentColor: "#f8d66d",
    secondaryAccentColor: "#ff7ca8",
    primarySceneLabel: "From clip to place",
  },
  "world-model-labs": {
    backgroundImage: textureImages.spatialLab,
    cardImage: textureImages.spatialLab,
    heroVideo: "/world-videos/world-labs/marble-hero.mp4",
    posterImage: "/world-videos/world-labs/marble-hero-poster.png",
    stickerImages: [textureImages.spatialLab, textureImages.openHarbor, textureImages.skyboxObservatory],
    accentColor: "#9ad7ff",
    secondaryAccentColor: "#f4cf7a",
    primarySceneLabel: "Video labs",
  },
  "research-insights": {
    backgroundImage: textureImages.newsDesk,
    cardImage: textureImages.newsDesk,
    heroImage: textureImages.newsDesk,
    stickerImages: [textureImages.newsDesk, textureImages.comparisonArena, textureImages.conceptMapWall],
    accentColor: "#7cf7ff",
    secondaryAccentColor: "#f6d26e",
    primarySceneLabel: "Signal room",
  },
  definition: {
    backgroundImage: textureImages.generatedCourtyard,
    cardImage: textureImages.generatedCourtyard,
    heroImage: textureImages.generatedCourtyard,
    stickerImages: [textureImages.generatedCourtyard, textureImages.spatialLab, textureImages.playableDesert],
    accentColor: "#0bd1c6",
    secondaryAccentColor: "#f2c15f",
    primarySceneLabel: "World model basics",
  },
  concepts: {
    backgroundImage: textureImages.conceptMapWall,
    cardImage: textureImages.conceptMapWall,
    heroImage: textureImages.conceptMapWall,
    stickerImages: [textureImages.conceptMapWall, textureImages.animeLibrary, textureImages.robotRoom],
    accentColor: "#82eaff",
    secondaryAccentColor: "#ff7fa6",
    primarySceneLabel: "Visual glossary",
  },
  "concept-map": {
    backgroundImage: textureImages.conceptMapWall,
    cardImage: textureImages.conceptMapWall,
    heroImage: textureImages.conceptMapWall,
    stickerImages: [textureImages.conceptMapWall, textureImages.spatialLab, textureImages.timelineCorridor],
    accentColor: "#76ffe5",
    secondaryAccentColor: "#ffd66f",
    primarySceneLabel: "Concept map",
  },
  timeline: {
    backgroundImage: textureImages.timelineCorridor,
    cardImage: textureImages.timelineCorridor,
    heroImage: textureImages.timelineCorridor,
    stickerImages: [textureImages.timelineCorridor, textureImages.playableDesert, textureImages.robotRoom],
    accentColor: "#f6d26e",
    secondaryAccentColor: "#ff7fa6",
    primarySceneLabel: "Milestone reel",
  },
  news: {
    backgroundImage: textureImages.newsDesk,
    cardImage: textureImages.newsDesk,
    heroImage: textureImages.newsDesk,
    stickerImages: [textureImages.newsDesk, textureImages.comparisonArena, textureImages.openHarbor],
    accentColor: "#7cf7ff",
    secondaryAccentColor: "#f6d26e",
    primarySceneLabel: "Update signal",
  },
  compare: {
    backgroundImage: textureImages.comparisonArena,
    cardImage: textureImages.comparisonArena,
    heroImage: textureImages.comparisonArena,
    stickerImages: [textureImages.comparisonArena, textureImages.skyboxObservatory, textureImages.robotRoom],
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
};

export function getWorldVisualByModelSlug(slug: string) {
  return worldsData.find((world) => world.detailHref === `/models/${slug}`);
}

export function modelVisual(model: ModelProfile): ShowcaseVisual {
  const world = getWorldVisualByModelSlug(model.slug);

  if (world) {
    const texture = textureForWorldId(world.id);

    return visualWithTextures({
      visualTitle: model.visualTitle ?? world.name,
      visualSubtitle: model.visualSubtitle ?? world.feeling,
      heroVideo: model.heroVideo ?? world.videoSrc,
      posterImage: model.posterImage ?? world.posterSrc,
      accentColor: model.accentColor ?? world.accent,
      secondaryAccentColor: model.secondaryAccentColor ?? world.secondaryAccent,
      consumerHook: model.consumerHook ?? world.feeling,
      primarySceneLabel: model.primarySceneLabel ?? world.type,
      backgroundImage: model.backgroundImage,
      cardImage: model.cardImage,
      stickerImages: model.stickerImages,
      imagePosition: model.imagePosition,
    }, texture, [texture, textureImages.newsDesk, textureImages.comparisonArena]);
  }

  if (/robot|embodied|physical|cosmos|vla|va/i.test(`${model.category} ${model.name}`)) {
    return visualWithTextures({
      heroImage: model.heroImage,
      accentColor: model.accentColor ?? "#8affd2",
      secondaryAccentColor: model.secondaryAccentColor ?? "#ffd66f",
      consumerHook:
        model.consumerHook ??
        "See how world models move from generated scenes into robots, sensors, and physical decision-making.",
      primarySceneLabel: model.primarySceneLabel ?? "Physical AI",
      backgroundImage: model.backgroundImage,
      cardImage: model.cardImage,
      stickerImages: model.stickerImages,
      imagePosition: model.imagePosition,
    }, textureImages.robotRoom, [textureImages.robotRoom, textureImages.spatialLab, textureImages.conceptMapWall]);
  }

  if (/video|character|avatar|emo|gwm/i.test(`${model.category} ${model.name}`)) {
    return visualWithTextures({
      heroImage: model.heroImage,
      accentColor: model.accentColor ?? "#f8d66d",
      secondaryAccentColor: model.secondaryAccentColor ?? "#ff7ca8",
      consumerHook:
        model.consumerHook ??
        "Start from a moving scene, then watch the category push toward control, identity, and continuity.",
      primarySceneLabel: model.primarySceneLabel ?? "Generated media",
      backgroundImage: model.backgroundImage,
      cardImage: model.cardImage,
      stickerImages: model.stickerImages,
      imagePosition: model.imagePosition,
    }, textureImages.animeLibrary, [textureImages.animeLibrary, textureImages.playableDesert, textureImages.newsDesk]);
  }

  return visualWithTextures({
    heroImage: model.heroImage,
    accentColor: model.accentColor ?? "#0bd1c6",
    secondaryAccentColor: model.secondaryAccentColor ?? "#f2c15f",
    consumerHook:
      model.consumerHook ??
      "A visual signal in the larger move from one-off AI media to generated worlds.",
    primarySceneLabel: model.primarySceneLabel ?? model.category,
    backgroundImage: model.backgroundImage,
    cardImage: model.cardImage,
    stickerImages: model.stickerImages,
    imagePosition: model.imagePosition,
  }, textureImages.animeLibrary);
}

export function newsVisual(item: NewsItem): ShowcaseVisual & { signalType: string } {
  const joined = `${item.tags.join(" ")} ${item.organization} ${item.title}`;
  const relatedWorld = item.relatedModelSlugs
    ?.map((slug) => getWorldVisualByModelSlug(slug))
    .find(Boolean);
  const matchedModel =
    relatedWorld ??
    worldsData.find((world) => joined.toLowerCase().includes(world.name.toLowerCase().split(" ")[0]));

  const signalType = item.signalType;

  if (matchedModel) {
    const texture = textureForWorldId(matchedModel.id);

    return visualWithTextures({
      signalType,
      heroVideo: matchedModel.videoSrc,
      posterImage: matchedModel.posterSrc,
      accentColor: matchedModel.accent,
      secondaryAccentColor: matchedModel.secondaryAccent,
      consumerHook: item.visualSubtitle ?? item.summary,
      primarySceneLabel: signalType,
      backgroundImage: item.backgroundImage,
      cardImage: item.cardImage,
      stickerImages: item.stickerImages,
      imagePosition: item.imagePosition,
    }, texture, [texture, textureImages.newsDesk, textureImages.timelineCorridor]) as ShowcaseVisual & { signalType: string };
  }

  const fallbackTexture = /physical|robot|embodied/i.test(joined)
    ? textureImages.robotRoom
    : /compare|versus|vs/i.test(joined)
      ? textureImages.comparisonArena
      : /open source|github|hugging face|model card/i.test(joined)
        ? textureImages.conceptMapWall
        : textureImages.newsDesk;

  return visualWithTextures({
    signalType,
    heroImage: item.heroImage,
    accentColor: item.accentColor ?? (/reported/i.test(signalType) ? "#ff7fa6" : "#7cf7ff"),
    secondaryAccentColor: item.secondaryAccentColor ?? "#f6d26e",
    consumerHook: item.consumerHook ?? item.summary,
    primarySceneLabel: item.primarySceneLabel ?? signalType,
    backgroundImage: item.backgroundImage,
    cardImage: item.cardImage,
    stickerImages: item.stickerImages,
    imagePosition: item.imagePosition,
  }, fallbackTexture, [fallbackTexture, textureImages.timelineCorridor, textureImages.comparisonArena]) as ShowcaseVisual & { signalType: string };
}

export function comparisonVisual(comparison: Comparison): ShowcaseVisual {
  const relatedWorld = comparison.relatedModelSlugs
    ?.map((slug) => getWorldVisualByModelSlug(slug))
    .find(Boolean);
  const texture = relatedWorld ? textureForWorldId(relatedWorld.id) : textureImages.comparisonArena;

  return visualWithTextures({
    heroVideo: comparison.heroVideo ?? relatedWorld?.videoSrc,
    posterImage: comparison.posterImage ?? relatedWorld?.posterSrc,
    heroImage: comparison.heroImage,
    accentColor: comparison.accentColor ?? relatedWorld?.accent ?? "#74f4ff",
    secondaryAccentColor: comparison.secondaryAccentColor ?? relatedWorld?.secondaryAccent ?? "#ff82b1",
    consumerHook:
      comparison.consumerHook ??
      "Two paths into the same future. Pick the one that matches what you want to see, build, or understand.",
    primarySceneLabel: comparison.primarySceneLabel ?? "Visual comparison",
    backgroundImage: comparison.backgroundImage,
    cardImage: comparison.cardImage,
    stickerImages: comparison.stickerImages,
    imagePosition: comparison.imagePosition,
  }, texture, [texture, textureImages.comparisonArena, textureImages.conceptMapWall]);
}

export function conceptVisual(slug: string): ShowcaseVisual {
  if (/physical|foundation/i.test(slug)) return pageVisuals["timeline"];
  if (/spatial|interactive/i.test(slug)) return pageVisuals["spatial-intelligence"];
  if (/video|media|clip/i.test(slug)) return pageVisuals["from-video-to-worlds"];
  return pageVisuals.definition;
}

export function companyVisual(company: string): ShowcaseVisual {
  if (/world labs|marble/i.test(company)) return pageVisuals["world-model-labs"];
  if (/skybox|blockade/i.test(company)) {
    return visualWithTextures({
      accentColor: "#86d6cf",
      secondaryAccentColor: "#d2a0ff",
      primarySceneLabel: "360 world product",
    }, textureImages.skyboxObservatory, [textureImages.skyboxObservatory, textureImages.spatialLab]);
  }
  if (/google|deepmind|genie|oasis|decart|etched/i.test(company)) {
    return visualWithTextures({
      accentColor: "#8eb7ff",
      secondaryAccentColor: "#e5a3cf",
      primarySceneLabel: "Playable worlds",
    }, textureImages.playableDesert, [textureImages.playableDesert, textureImages.timelineCorridor]);
  }
  if (/happy|alibaba|oyster/i.test(company)) {
    return visualWithTextures({
      accentColor: "#f1b46a",
      secondaryAccentColor: "#78cfad",
      primarySceneLabel: "Open world product",
    }, textureImages.openHarbor, [textureImages.openHarbor, textureImages.animeLibrary]);
  }
  if (/nvidia|cosmos|robot|ant|robbyant|lingbot|tencent|hunyuan/i.test(company)) {
    return visualWithTextures({
      accentColor: "#8affd2",
      secondaryAccentColor: "#ffd66f",
      primarySceneLabel: "Physical and spatial AI",
    }, textureImages.robotRoom, [textureImages.robotRoom, textureImages.spatialLab]);
  }
  if (/runway|emo|video|avatar/i.test(company)) {
    return visualWithTextures({
      accentColor: "#f8d66d",
      secondaryAccentColor: "#ff7ca8",
      primarySceneLabel: "Generated media",
    }, textureImages.animeLibrary, [textureImages.animeLibrary, textureImages.newsDesk]);
  }
  return pageVisuals.definition;
}

export function progressVisual(key: string): ShowcaseVisual {
  if (/create|generator|skybox|world-labs/i.test(key)) return pageVisuals["world-model-labs"];
  if (/explore|control|play|oasis|genie/i.test(key)) return pageVisuals["from-video-to-worlds"];
  if (/simulate|physical|robot|cosmos/i.test(key)) {
    return visualWithTextures({
      accentColor: "#8affd2",
      secondaryAccentColor: "#ffd66f",
      primarySceneLabel: "Simulation room",
    }, textureImages.robotRoom, [textureImages.robotRoom, textureImages.timelineCorridor]);
  }
  if (/build|spatial|3d|hy|map/i.test(key)) return pageVisuals["spatial-intelligence"];
  if (/compare/i.test(key)) return pageVisuals.compare;
  return pageVisuals.timeline;
}

export function splitComparisonTitle(title: string) {
  const [left, right] = title.split(/\s+vs\.?\s+/i);
  return {
    left: left || title,
    right: right || "The alternative",
  };
}
