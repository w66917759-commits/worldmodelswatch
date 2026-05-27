export type WorldDepth = "near" | "mid" | "far";

export type WorldProject = {
  id: string;
  name: string;
  developer: string;
  type: string;
  summary: string;
  searchKeywords: string;
  demoUrl: string;
  videoSrc: string;
  videoType: string;
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
    id: "world-labs-marble",
    name: "World Labs / Marble",
    developer: "World Labs",
    type: "3D Spatial World",
    summary: "AI starts generating worlds you can enter.",
    searchKeywords: "World Labs Marble demo",
    demoUrl: "https://marble.worldlabs.ai/",
    videoSrc: "https://wlt-ai-cdn.art/videos/2025-11-12-clean-720p-24crf/hero.mp4",
    videoType: "video/mp4",
    feeling: "A spatial camera drifts through a generated room that feels editable, explorable, and physically present.",
    forgePrompt: "A candlelit mountain archive with open windows, rain trails, and old instruments.",
    civilizationSignal: "Spatial memory becomes a place agents can revisit instead of a frame they only observe.",
    depth: "near",
    position: { x: 5, y: 18 },
    accent: "#9ad7ff",
    secondaryAccent: "#f4cf7a",
  },
  {
    id: "oasis",
    name: "Oasis",
    developer: "Decart / Etched",
    type: "Realtime Interactive World",
    summary: "A playable AI-generated Minecraft-like world.",
    searchKeywords: "Oasis AI Minecraft",
    demoUrl: "https://oasis.us.decart.ai/",
    videoSrc: "https://oasis-model.github.io/wide1.mp4",
    videoType: "video/mp4",
    feeling: "Realtime terrain reacts like a rough dream of Minecraft, constantly invented while the player moves.",
    forgePrompt: "A blocky valley with glass rivers, red moons, and villages rebuilding every minute.",
    civilizationSignal: "Realtime generation gives simulated citizens a place that can answer movement immediately.",
    depth: "near",
    position: { x: 7, y: 29 },
    accent: "#b8d77a",
    secondaryAccent: "#7fd8d2",
  },
  {
    id: "google-deepmind-genie",
    name: "Google DeepMind / Genie",
    developer: "Google DeepMind",
    type: "Interactive Game World",
    summary: "AI learns world rules and creates playable environments.",
    searchKeywords: "Google Genie world model demo",
    demoUrl: "https://labs.google/projectgenie",
    videoSrc: "https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/genie-3__cover-1.webm",
    videoType: "video/webm",
    feeling: "A playable environment emerges from learned rules, not a hand-authored game level.",
    forgePrompt: "A side-scrolling cloud kingdom where every platform learns the player's rhythm.",
    civilizationSignal: "World rules can become social rules once agents share the same learned environment.",
    depth: "mid",
    position: { x: 5, y: 40 },
    accent: "#8eb7ff",
    secondaryAccent: "#e5a3cf",
  },
  {
    id: "happy-oyster",
    name: "Happy Oyster",
    developer: "Alibaba",
    type: "Open World Model",
    summary: "An AI-generated open world with wandering exploration.",
    searchKeywords: "Happy Oyster Alibaba",
    demoUrl: "https://www.happyoyster.cn/",
    videoSrc: "https://wlt-ai-cdn.art/videos/2025-11-12-clean-720p-24crf/edit-cozy-tavern-post.mp4",
    videoType: "video/mp4",
    feeling: "A directed open world with the atmosphere of a place that can be wandered through and revised.",
    forgePrompt: "A foggy harbor city where the streets rearrange when travelers describe their destination.",
    civilizationSignal: "Directing mode hints at worlds where humans guide societies without scripting every scene.",
    depth: "mid",
    position: { x: 7, y: 51 },
    accent: "#f1b46a",
    secondaryAccent: "#78cfad",
  },
  {
    id: "skybox-ai",
    name: "Skybox AI",
    developer: "Blockade Labs",
    type: "360° Immersive World",
    summary: "Generate explorable VR-like worlds from text.",
    searchKeywords: "Skybox AI demo",
    demoUrl: "https://skybox.blockadelabs.com/",
    videoSrc: "https://wlt-ai-cdn.art/videos/2025-11-12-clean-720p-24crf/video-ocean-post.mp4",
    videoType: "video/mp4",
    feeling: "A panoramic world shell opens like a VR destination, built for looking around rather than scrolling down.",
    forgePrompt: "A 360-degree observatory above an endless ocean with aurora storms below the glass floor.",
    civilizationSignal: "Immersive skyboxes make generated reality feel like a shared horizon for agents and humans.",
    depth: "far",
    position: { x: 5, y: 62 },
    accent: "#86d6cf",
    secondaryAccent: "#d2a0ff",
  },
  {
    id: "project-sid",
    name: "Project Sid",
    developer: "Altera",
    type: "AI Civilization Simulation",
    summary: "Thousands of AI agents build societies inside virtual worlds.",
    searchKeywords: "Project Sid AI civilization",
    demoUrl: "https://github.com/altera-al/project-sid",
    videoSrc: "https://github.com/user-attachments/assets/a288265d-03ac-4d7d-b803-b74066267f26",
    videoType: "video/mp4",
    feeling: "A simulation layer where the important scene is not the terrain, but the society forming inside it.",
    forgePrompt: "A frontier settlement where 1,000 AI citizens invent jobs, rumors, markets, and rituals.",
    civilizationSignal: "Agent populations turn generated worlds into economies, histories, and fragile cultures.",
    depth: "far",
    position: { x: 7, y: 73 },
    accent: "#f0a0a8",
    secondaryAccent: "#c8d98b",
  },
];

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
    title: "Professions Forming",
    text: "Agents specialize into builders, traders, guides, guards, teachers, and archivists when the world persists long enough.",
    source: "Project Sid",
  },
  {
    title: "Rumors Spreading",
    text: "Information travels through neighborhoods, mutates across conversations, and becomes social weather.",
    source: "Generative Agents",
  },
  {
    title: "Markets Emerging",
    text: "Scarcity, location, memory, and reputation turn simple exchanges into local economies.",
    source: "AI Town",
  },
  {
    title: "Rituals Invented",
    text: "Groups create shared habits, holidays, myths, and rules when simulated time starts to matter.",
    source: "Future layer",
  },
] as const;

export const evolutionSteps = [
  {
    year: "2024",
    label: "AI Video",
    text: "Generated clips become the visible surface of synthetic reality.",
    accent: "#8eb7ff",
  },
  {
    year: "2025",
    label: "AI Interactive Worlds",
    text: "World models start responding to camera movement, player actions, and spatial prompts.",
    accent: "#b8d77a",
  },
  {
    year: "2026",
    label: "AI Civilizations",
    text: "Persistent spaces fill with agent societies, markets, memory, and collective behavior.",
    accent: "#f0a0a8",
  },
  {
    year: "2027",
    label: "Persistent AI Reality",
    text: "Generated worlds become ongoing destinations, not one-time outputs.",
    accent: "#f4cf7a",
  },
] as const;
