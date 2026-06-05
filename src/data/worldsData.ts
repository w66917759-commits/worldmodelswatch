export type WorldDepth = "near" | "mid" | "far";
export type WorldOutputType =
  | "3D world"
  | "360 world"
  | "Playable world"
  | "Open world"
  | "Agent society";
export type WorldUseCase = "Create" | "Explore" | "Control" | "Simulate" | "Build" | "Compare";
export type WorldAccessType = "Try now" | "Early access" | "Research preview" | "Open source";

export type WorldProject = {
  id: string;
  name: string;
  shortName: string;
  developer: string;
  type: string;
  outputType: WorldOutputType;
  useCases: WorldUseCase[];
  accessType: WorldAccessType;
  primaryActionLabel: string;
  practicalUse: string;
  bestFor: string[];
  worldTypeId: string;
  stageIds: string[];
  summary: string;
  searchKeywords: string;
  demoUrl: string;
  createHref?: string;
  detailHref: string;
  sourceHref?: string;
  videoSrc?: string;
  videoType?: string;
  posterSrc?: string;
  heroVideoSrc?: string;
  heroVideoType?: string;
  heroPosterSrc?: string;
  feeling: string;
  forgePrompt: string;
  civilizationSignal: string;
  depth: WorldDepth;
  position: {
    x: number;
    y: number;
  };
  accent: string;
  secondaryAccent: string;
};

export const worldsData: WorldProject[] = [
  {
    id: "world-labs",
    name: "World Labs / Marble",
    shortName: "Marble",
    developer: "World Labs",
    type: "Spatial World Model",
    outputType: "3D world",
    useCases: ["Create", "Explore", "Build"],
    accessType: "Try now",
    primaryActionLabel: "Open product page",
    practicalUse:
      "Create persistent 3D worlds from prompts, images, video, or spatial inputs for scenes that can be explored and reused.",
    bestFor: ["3D concept worlds", "spatial storyboards", "exportable scene assets"],
    worldTypeId: "spatial-worlds",
    stageIds: ["generated-space"],
    summary: "AI starts generating worlds you can enter.",
    searchKeywords: "World Labs Marble persistent 3D worlds Gaussian splat export",
    demoUrl: "https://marble.worldlabs.ai/",
    createHref: "https://marble.worldlabs.ai/",
    detailHref: "/models/marble",
    sourceHref: "https://marble.worldlabs.ai/",
    videoSrc: "https://wlt-ai-cdn.art/videos/2025-11-12-clean-720p-24crf/hero.mp4",
    videoType: "video/mp4",
    posterSrc: "/world-videos/world-labs/marble-hero-homepage-poster.jpg",
    heroVideoSrc: "https://wlt-ai-cdn.art/videos/2025-11-12-clean-720p-24crf/hero.mp4",
    heroVideoType: "video/mp4",
    heroPosterSrc: "/world-videos/world-labs/marble-hero-homepage-poster.jpg",
    feeling:
      "A spatial camera drifts through a generated room that feels editable, explorable, and physically present.",
    forgePrompt:
      "A candlelit mountain archive with open windows, rain trails, and old instruments.",
    civilizationSignal:
      "Spatial memory becomes a place agents can revisit instead of a frame they only observe.",
    depth: "mid",
    position: { x: 5, y: 66 },
    accent: "#9ad7ff",
    secondaryAccent: "#f4cf7a",
  },
  {
    id: "oasis",
    name: "Oasis",
    shortName: "Oasis",
    developer: "Decart AI + Etched",
    type: "Realtime Playable World",
    outputType: "Playable world",
    useCases: ["Explore", "Control", "Simulate"],
    accessType: "Research preview",
    primaryActionLabel: "Official demo",
    practicalUse:
      "Understand how keyboard actions can steer an AI-generated world frame by frame instead of replaying a fixed clip.",
    bestFor: ["interactive world demos", "action-conditioned generation", "game-like research"],
    worldTypeId: "playable-worlds",
    stageIds: ["playable-worlds"],
    summary:
      "An action-conditioned world model renders an interactive Minecraft-like experience frame by frame.",
    searchKeywords: "Oasis Universe in a Transformer realtime open-world AI model",
    demoUrl: "https://oasis-model.github.io/",
    detailHref: "/models/oasis",
    sourceHref: "https://oasis-model.github.io/",
    videoSrc: "https://oasis-model.github.io/wide1.mp4",
    videoType: "video/mp4",
    feeling:
      "A player moves through a world that is generated live, where keyboard actions keep shaping the next frame.",
    forgePrompt:
      "A block-built desert outpost that reforms around player movement, weather, and improvised paths.",
    civilizationSignal:
      "Realtime action conditioning turns generated worlds into places agents and humans can inhabit together.",
    depth: "near",
    position: { x: 5, y: 42 },
    accent: "#f46e87",
    secondaryAccent: "#ffe06e",
  },
  {
    id: "genie",
    name: "Genie",
    shortName: "Genie",
    developer: "Google DeepMind",
    type: "Interactive Game World",
    outputType: "Playable world",
    useCases: ["Explore", "Control", "Compare"],
    accessType: "Research preview",
    primaryActionLabel: "Official demo",
    practicalUse:
      "See how promptable interactive environments differ from ordinary generated video or hand-authored game levels.",
    bestFor: ["interactive prototypes", "learned world rules", "research comparison"],
    worldTypeId: "playable-worlds",
    stageIds: ["playable-worlds"],
    summary: "AI learns world rules and creates playable environments.",
    searchKeywords: "Genie 3 Project Genie real-time interactive world model",
    demoUrl: "https://labs.google/projectgenie",
    detailHref: "/models/genie-3",
    sourceHref: "https://labs.google/projectgenie",
    videoSrc: "https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/genie-3__cover-1.webm",
    videoType: "video/webm",
    heroVideoSrc: "https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/genie-3__cover-1.webm",
    heroVideoType: "video/webm",
    heroPosterSrc: "/world-videos/genie/genie-cover-homepage-poster.jpg",
    feeling:
      "A playable environment emerges from learned rules, not a hand-authored game level.",
    forgePrompt:
      "A side-scrolling cloud kingdom where every platform learns the player's rhythm.",
    civilizationSignal:
      "World rules can become social rules once agents share the same learned environment.",
    depth: "near",
    position: { x: 7, y: 30 },
    accent: "#8eb7ff",
    secondaryAccent: "#e5a3cf",
  },
  {
    id: "happyoyster",
    name: "Happy Oyster",
    shortName: "Happy Oyster",
    developer: "Alibaba",
    type: "Open World Model",
    outputType: "Open world",
    useCases: ["Create", "Explore", "Control"],
    accessType: "Early access",
    primaryActionLabel: "Official demo",
    practicalUse:
      "Explore Alibaba's product-facing path for directing an open world while it continues unfolding.",
    bestFor: ["immersive creation", "directed exploration", "film and game concepting"],
    worldTypeId: "open-worlds",
    stageIds: ["open-worlds"],
    summary: "An AI-generated open world with wandering exploration.",
    searchKeywords: "HappyOyster real-time world model interactive creation",
    demoUrl: "https://www.happyoyster.cn/",
    detailHref: "/models/happyoyster",
    sourceHref: "https://www.happyoyster.cn/",
    posterSrc: "/world-videos/happyoyster/happyoyster-homepage-poster.jpg",
    heroPosterSrc: "/world-videos/happyoyster/happyoyster-homepage-poster.jpg",
    feeling:
      "A directed open world with the atmosphere of a place that can be wandered through and revised.",
    forgePrompt:
      "A foggy harbor city where the streets rearrange when travelers describe their destination.",
    civilizationSignal:
      "Directing mode hints at worlds where humans guide societies without scripting every scene.",
    depth: "near",
    position: { x: 5, y: 18 },
    accent: "#f1b46a",
    secondaryAccent: "#78cfad",
  },
  {
    id: "skybox",
    name: "Skybox AI",
    shortName: "Skybox",
    developer: "Blockade Labs",
    type: "360 Environment World",
    outputType: "360 world",
    useCases: ["Create", "Explore", "Build"],
    accessType: "Try now",
    primaryActionLabel: "Create your world",
    practicalUse:
      "Generate 360-degree environment worlds for VR backdrops, games, mood boards, and web 3D scenes.",
    bestFor: ["360 environments", "VR and game backplates", "HDRI-style world shells"],
    worldTypeId: "spatial-worlds",
    stageIds: ["generated-space"],
    summary: "Generate immersive world horizons from text.",
    searchKeywords: "Skybox AI 360 environments HDRI skyboxes",
    demoUrl: "https://www.blockadelabs.com/",
    createHref: "https://www.blockadelabs.com/",
    detailHref: "/models/skybox-ai",
    sourceHref: "https://landing-dev.blockadelabs.com/",
    posterSrc: "/world-videos/skybox-ai/skybox-ai-homepage-poster.jpg",
    heroPosterSrc: "/world-videos/skybox-ai/skybox-ai-homepage-poster.jpg",
    feeling:
      "A panoramic environment opens like a destination: sky, horizon, light, and mood generated as one world surface.",
    forgePrompt:
      "A 360-degree observatory above an endless ocean with aurora storms below the glass floor.",
    civilizationSignal:
      "Immersive skyboxes make generated spaces feel like shared horizons before the world becomes fully interactive.",
    depth: "mid",
    position: { x: 7, y: 54 },
    accent: "#86d6cf",
    secondaryAccent: "#d2a0ff",
  },
  {
    id: "hy",
    name: "HY-World 2.0",
    shortName: "HY-World",
    developer: "Tencent Hunyuan",
    type: "3D World Model",
    outputType: "3D world",
    useCases: ["Create", "Build", "Simulate"],
    accessType: "Open source",
    primaryActionLabel: "Open source",
    practicalUse:
      "Inspect Tencent's open 3D world generation and reconstruction path for persistent scene assets and engine-oriented workflows.",
    bestFor: ["open 3D workflows", "reconstruction research", "engine-ready scene assets"],
    worldTypeId: "spatial-worlds",
    stageIds: ["generated-space"],
    summary:
      "Tencent's HY stack turns prompts and visual inputs into persistent 3D worlds.",
    searchKeywords: "Tencent Hunyuan HY-World 2.0 multi-modal 3D world model",
    demoUrl: "https://3d.hunyuan.tencent.com/sceneTo3D",
    detailHref: "/models/hy-world-2-0",
    sourceHref: "https://3d.hunyuan.tencent.com/sceneTo3D",
    videoSrc: "https://github.com/user-attachments/assets/b56f4750-25c9-48fb-83ff-d58526711463",
    videoType: "video/mp4",
    heroVideoSrc: "https://github.com/user-attachments/assets/b56f4750-25c9-48fb-83ff-d58526711463",
    heroVideoType: "video/mp4",
    heroPosterSrc: "/world-videos/hy-world/hy-world-2-homepage-poster.jpg",
    feeling:
      "A generated 3D world turns into an editable environment with geometry, motion, and explorable space.",
    forgePrompt:
      "A neon research campus assembled from text, reference images, and roaming camera paths.",
    civilizationSignal:
      "Persistent 3D assets give generated worlds a substrate that can survive beyond a single clip.",
    depth: "mid",
    position: { x: 7, y: 78 },
    accent: "#c9f46e",
    secondaryAccent: "#6ed7ff",
  },
  {
    id: "project-sid",
    name: "Project Sid",
    shortName: "Project Sid",
    developer: "Altera",
    type: "Many-Agent Civilization",
    outputType: "Agent society",
    useCases: ["Simulate", "Compare", "Build"],
    accessType: "Open source",
    primaryActionLabel: "Open source",
    practicalUse:
      "Study what happens when many AI agents inhabit a shared world, specialize, organize, and form social patterns.",
    bestFor: ["agent societies", "civilization simulation", "social behavior research"],
    worldTypeId: "civilization-worlds",
    stageIds: ["agent-societies", "ai-civilizations"],
    summary:
      "A Minecraft-based simulation where large groups of AI agents specialize, form rules, and transmit culture.",
    searchKeywords: "Project Sid many-agent simulations AI civilization PIANO architecture",
    demoUrl: "https://github.com/altera-al/project-sid",
    detailHref: "/models/project-sid",
    sourceHref: "https://github.com/altera-al/project-sid",
    videoSrc: "https://github.com/user-attachments/assets/a288265d-03ac-4d7d-b803-b74066267f26",
    videoType: "video/mp4",
    feeling:
      "A world becomes interesting because many agents live inside it, organize it, and push culture across time.",
    forgePrompt:
      "A frontier town where one thousand agents negotiate rituals, work roles, trade routes, and shared memory.",
    civilizationSignal:
      "Many-agent simulation is the society layer that turns generated environments into civilizational experiments.",
    depth: "far",
    position: { x: 30, y: 56 },
    accent: "#f0a0a8",
    secondaryAccent: "#c8d98b",
  },
];

export const heroMontageWorldIds = [
  "world-labs",
  "hy",
  "happyoyster",
  "skybox",
  "genie",
] as const;

export const heroSequenceWorldIds = heroMontageWorldIds;

export function getWorldById(id: string) {
  return worldsData.find((world) => world.id === id);
}

export function getWorldByModelSlug(slug: string) {
  return worldsData.find((world) => world.detailHref === `/models/${slug}`);
}

export function getWorldSearchUrl(world: WorldProject) {
  return `https://www.google.com/search?q=${encodeURIComponent(world.searchKeywords)}`;
}

export function getWorldPrimaryAction(world: WorldProject) {
  return {
    href: world.createHref ?? world.sourceHref ?? world.demoUrl,
    label: world.primaryActionLabel,
  };
}

export const forgePrompts = [
  "Cyberpunk Tokyo",
  "Infinite Desert",
  "Floating Islands",
  "AI Civilization",
  "Submerged Library",
  "Orbital Garden",
] as const;

export const civilizationSignals = [
  {
    title: "Realtime Direction",
    text: "Humans keep shaping an open world while it unfolds, turning prompts into ongoing scene control rather than one-off clips.",
    source: "Happy Oyster",
  },
  {
    title: "Playable Rules",
    text: "A learned environment can respond to actions, physics, and goals without being hand-authored as a fixed level.",
    source: "Genie",
  },
  {
    title: "Action Conditioning",
    text: "Realtime inputs make generated worlds behave like places that can be steered, explored, and stress-tested while they unfold.",
    source: "Oasis",
  },
  {
    title: "Spatial Editing",
    text: "Generated spaces become editable scenes that keep geometry, camera movement, and place memory in view.",
    source: "World Labs",
  },
  {
    title: "Persistent Assets",
    text: "3D world generation and reconstruction move the output closer to reusable assets for engines and simulation.",
    source: "HY-World 2.0",
  },
  {
    title: "Agent Societies",
    text: "Large populations of AI agents turn a world into a substrate for specialization, collective rules, and cultural transmission.",
    source: "Project Sid",
  },
] as const;

export const evolutionSteps = [
  {
    year: "Stage 01",
    label: "Explore Possible Worlds",
    text: "A generated scene starts to feel useful when it can continue, change, and suggest what may happen next.",
    icon: "video",
    distanceLabel: "Explore what can happen",
    userAction: "Read a generated scene as a place that can continue, not just a finished frame.",
    bridge:
      "The field starts to matter when a model can represent the world now and forecast what comes next.",
    examples: ["Genie", "Oasis", "World-model surveys"],
    accent: "#8eb7ff",
  },
  {
    year: "Stage 02",
    label: "Create Spaces",
    text: "The output becomes a place: horizons, scenes, editable 3D worlds, and reusable geometry.",
    icon: "persistent",
    distanceLabel: "Create the world",
    userAction:
      "Move from watching a clip to inspecting a generated environment.",
    bridge: "Spatial models make the category visible as places instead of media outputs.",
    examples: ["Skybox", "Marble", "HY-World"],
    accent: "#86d6cf",
  },
  {
    year: "Stage 03",
    label: "Control the World",
    text: "Users begin steering the world with movement, prompts, camera direction, or player-like actions.",
    icon: "interactive",
    distanceLabel: "Steer the world",
    userAction:
      "Move, steer, and explore while the world keeps generating around the action.",
    bridge: "The screen stops being a clip and starts acting like a place with rules.",
    examples: ["Oasis", "Genie", "HappyOyster"],
    accent: "#f1b46a",
  },
  {
    year: "Stage 04",
    label: "Simulate Action",
    text: "Generated rollouts become useful for action, planning, physical consistency, and simulation.",
    icon: "persistent",
    distanceLabel: "Test behavior",
    userAction:
      "Judge whether the generated rollout can guide decisions, not only whether it looks realistic.",
    bridge:
      "The practical test shifts from visual fidelity to physical consistency and useful control.",
    examples: ["HY-World", "Oasis", "Genie"],
    accent: "#74f4ff",
  },
  {
    year: "Stage 05",
    label: "Build Inhabited Worlds",
    text: "Many agents turn a world into a social system with routines, roles, markets, and memory.",
    icon: "civilization",
    distanceLabel: "Watch societies form",
    userAction:
      "Observe agents, roles, memory, and social patterns inside the same space.",
    bridge:
      "The world becomes a substrate for collective behavior, not only terrain or camera motion.",
    examples: ["Project Sid", "Agent societies", "Social simulacra"],
    accent: "#f0a0a8",
  },
] as const;
