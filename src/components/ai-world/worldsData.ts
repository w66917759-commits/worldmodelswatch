export type WorldDepth = "near" | "mid" | "far";

export type WorldProject = {
  id: string;
  name: string;
  developer: string;
  type: string;
  summary: string;
  searchKeywords: string;
  demoUrl: string;
  detailHref: string;
  sourceHref?: string;
  videoSrc: string;
  videoType: string;
  posterSrc?: string;
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
    id: "happyoyster",
    name: "HappyOyster",
    developer: "Alibaba",
    type: "Open World Model",
    summary: "An AI-generated open world with wandering exploration.",
    searchKeywords: "HappyOyster Alibaba world model",
    demoUrl: "https://www.happyoyster.cn/",
    detailHref: "/models/happyoyster",
    sourceHref: "https://www.happyoyster.cn/",
    videoSrc: "/world-videos/happyoyster/happyoyster-official-demo.mp4",
    videoType: "video/mp4",
    feeling: "A directed open world with the atmosphere of a place that can be wandered through and revised.",
    forgePrompt: "A foggy harbor city where the streets rearrange when travelers describe their destination.",
    civilizationSignal: "Directing mode hints at worlds where humans guide societies without scripting every scene.",
    depth: "near",
    position: { x: 5, y: 18 },
    accent: "#f1b46a",
    secondaryAccent: "#78cfad",
  },
  {
    id: "genie",
    name: "Genie",
    developer: "Google DeepMind",
    type: "Interactive Game World",
    summary: "AI learns world rules and creates playable environments.",
    searchKeywords: "Google DeepMind Genie world model demo",
    demoUrl: "https://labs.google/projectgenie",
    detailHref: "/models/genie-3",
    sourceHref: "https://labs.google/projectgenie",
    videoSrc: "/world-videos/genie/genie-simulating-natural-world.mp4",
    videoType: "video/mp4",
    feeling: "A playable environment emerges from learned rules, not a hand-authored game level.",
    forgePrompt: "A side-scrolling cloud kingdom where every platform learns the player's rhythm.",
    civilizationSignal: "World rules can become social rules once agents share the same learned environment.",
    depth: "near",
    position: { x: 7, y: 30 },
    accent: "#8eb7ff",
    secondaryAccent: "#e5a3cf",
  },
  {
    id: "oasis",
    name: "Oasis",
    developer: "Decart AI + Etched",
    type: "Realtime Playable World",
    summary: "An action-conditioned world model that renders an interactive Minecraft-like experience frame by frame.",
    searchKeywords: "Oasis Decart Etched interactive world model demo",
    demoUrl: "https://oasis-model.github.io/",
    detailHref: "/world-model-labs#oasis",
    sourceHref: "https://oasis-model.github.io/",
    videoSrc: "/world-videos/oasis/oasis-wide1.mp4",
    videoType: "video/mp4",
    feeling: "A player moves through a world that is generated live, where keyboard actions keep shaping the next frame.",
    forgePrompt: "A block-built desert outpost that reforms around player movement, weather, and improvised paths.",
    civilizationSignal: "Realtime action conditioning turns generated worlds into places agents and humans can inhabit together.",
    depth: "near",
    position: { x: 5, y: 42 },
    accent: "#f46e87",
    secondaryAccent: "#ffe06e",
  },
  {
    id: "skybox",
    name: "Skybox AI",
    developer: "Blockade Labs",
    type: "360° Immersive World",
    summary: "Generate explorable VR-like worlds from text.",
    searchKeywords: "Skybox AI demo",
    demoUrl: "https://skybox.blockadelabs.com/",
    detailHref: "/world-model-labs#skybox",
    sourceHref: "https://skybox.blockadelabs.com/",
    videoSrc: "/world-videos/skybox-ai/skybox-ai-official-demo.mp4",
    videoType: "video/mp4",
    feeling: "A panoramic world shell opens like a VR destination, built for looking around rather than scrolling down.",
    forgePrompt: "A 360-degree observatory above an endless ocean with aurora storms below the glass floor.",
    civilizationSignal: "Immersive skyboxes make generated reality feel like a shared horizon for agents and humans.",
    depth: "mid",
    position: { x: 7, y: 54 },
    accent: "#86d6cf",
    secondaryAccent: "#d2a0ff",
  },
  {
    id: "world-labs",
    name: "World Labs / Marble",
    developer: "World Labs",
    type: "3D Spatial World",
    summary: "AI starts generating worlds you can enter.",
    searchKeywords: "World Labs Marble demo",
    demoUrl: "https://marble.worldlabs.ai/",
    detailHref: "/models/marble",
    sourceHref: "https://marble.worldlabs.ai/",
    videoSrc: "/world-videos/world-labs/marble-hero.mp4",
    videoType: "video/mp4",
    posterSrc: "/world-videos/world-labs/marble-hero-poster.png",
    feeling: "A spatial camera drifts through a generated room that feels editable, explorable, and physically present.",
    forgePrompt: "A candlelit mountain archive with open windows, rain trails, and old instruments.",
    civilizationSignal: "Spatial memory becomes a place agents can revisit instead of a frame they only observe.",
    depth: "mid",
    position: { x: 5, y: 66 },
    accent: "#9ad7ff",
    secondaryAccent: "#f4cf7a",
  },
  {
    id: "hy",
    name: "HY-World 2.0",
    developer: "Tencent Hunyuan",
    type: "3D World Model",
    summary: "Tencent's HY stack turns prompts and visual inputs into persistent 3D worlds.",
    searchKeywords: "Tencent Hunyuan HY-World 2.0 demo",
    demoUrl: "https://3d.hunyuan.tencent.com/sceneTo3D",
    detailHref: "/models/hy-world-2-0",
    sourceHref: "https://3d.hunyuan.tencent.com/sceneTo3D",
    videoSrc: "/world-videos/hy-world/hy-world-2-main-demo.mp4",
    videoType: "video/mp4",
    feeling: "A generated 3D world turns into an editable environment with geometry, motion, and explorable space.",
    forgePrompt: "A neon research campus assembled from text, reference images, and roaming camera paths.",
    civilizationSignal: "Persistent 3D assets give generated worlds a substrate that can survive beyond a single clip.",
    depth: "mid",
    position: { x: 7, y: 78 },
    accent: "#c9f46e",
    secondaryAccent: "#6ed7ff",
  },
  {
    id: "project-sid",
    name: "Project Sid",
    developer: "Altera",
    type: "Many-Agent Civilization",
    summary: "A Minecraft-based simulation studying how large groups of AI agents specialize, form rules, and transmit culture.",
    searchKeywords: "Project Sid Altera many agent civilization simulation",
    demoUrl: "https://github.com/altera-al/project-sid",
    detailHref: "/world-model-labs#project-sid",
    sourceHref: "https://github.com/altera-al/project-sid",
    videoSrc: "/world-videos/project-sid/project-sid-main-demo.mp4",
    videoType: "video/mp4",
    feeling: "A world becomes interesting because many agents live inside it, organize it, and push culture across time.",
    forgePrompt: "A frontier town where one thousand agents negotiate rituals, work roles, trade routes, and shared memory.",
    civilizationSignal: "Many-agent simulation is the society layer that turns generated environments into civilizational experiments.",
    depth: "far",
    position: { x: 30, y: 56 },
    accent: "#f0a0a8",
    secondaryAccent: "#c8d98b",
  },
];

export const heroMontageWorldIds = [
  "happyoyster",
  "genie",
  "oasis",
  "skybox",
  "world-labs",
  "hy",
  "project-sid",
] as const;

export function getWorldSearchUrl(world: WorldProject) {
  return `https://www.google.com/search?q=${encodeURIComponent(world.searchKeywords)}`;
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
    source: "HappyOyster",
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
    year: "2024",
    label: "AI Video",
    text: "Generated clips become the visible surface of synthetic reality.",
    icon: "video",
    distanceLabel: "Watch the world",
    userAction: "See a generated scene move instead of reading a static prompt.",
    bridge: "Video makes synthetic reality visible, but the user is still outside the frame.",
    examples: ["EMO", "Runway GWM-1", "AI video"],
    accent: "#8eb7ff",
  },
  {
    year: "2025",
    label: "AI Interactive Worlds",
    text: "World models start responding to camera movement, player actions, and spatial prompts.",
    icon: "interactive",
    distanceLabel: "Control the world",
    userAction: "Move, steer, and explore while the world keeps generating around the action.",
    bridge: "The screen stops being a clip and starts acting like a place with rules.",
    examples: ["Genie", "Oasis", "World Labs"],
    accent: "#b8d77a",
  },
  {
    year: "2026",
    label: "AI Civilizations",
    text: "Persistent spaces fill with agent societies, markets, memory, and collective behavior.",
    icon: "civilization",
    distanceLabel: "Live inside systems",
    userAction: "Observe agents, roles, memory, and social patterns inside the same space.",
    bridge: "A world becomes meaningful when people and agents can return to it and change it.",
    examples: ["Project Sid", "HY-World", "Cosmos"],
    accent: "#f0a0a8",
  },
  {
    year: "2027",
    label: "Persistent AI Reality",
    text: "Generated worlds become ongoing destinations, not one-time outputs.",
    icon: "persistent",
    distanceLabel: "Return to reality",
    userAction: "Come back to a world that still has state, memory, and reachable places.",
    bridge: "The category becomes practical when generated spaces persist beyond a single session.",
    examples: ["World API", "Marble", "Persistent agents"],
    accent: "#f4cf7a",
  },
] as const;
