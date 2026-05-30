import { getModel, modelProfiles } from "./models";
import { newsItems } from "./news";
import type { ModelProfile, NewsItem } from "./types";

export type ProgressStage = {
  eyebrow: string;
  title: string;
  summary: string;
  signals: string[];
  href: string;
  cta: string;
};

export type CompanyModelGroup = {
  company: string;
  headline: string;
  modelSlugs: string[];
  signalType: "Usable product" | "Product signal" | "Experimental preview" | "Open stack" | "Adjacent progress";
  launched: string;
  visitorCanSee: string;
  boundary: string;
  officialHref?: string;
  createHref?: string;
};

export const progressStages: ProgressStage[] = [
  {
    eyebrow: "01 / Create & Explore",
    title: "The field is no longer only demo clips.",
    summary:
      "The clearest change is that some systems now have product surfaces visitors can open, create with, and judge visually.",
    signals: [
      "World Labs / Marble makes persistent 3D world creation visible through a web product.",
      "Skybox AI makes 360 environments usable for VR, game backplates, and web 3D scenes.",
      "HappyOyster, Genie, and Oasis show the interactive branch, but with different access and maturity levels.",
    ],
    href: "/progress",
    cta: "Read current stage",
  },
  {
    eyebrow: "02 / Control & Compare",
    title: "Each company belongs in a different lane.",
    summary:
      "The useful question is not which model wins. It is what each company actually lets a visitor control, inspect, or compare.",
    signals: [
      "World Labs and Blockade Labs are the clearest 2C-facing creation surfaces today.",
      "Google DeepMind, Tencent, Alibaba, NVIDIA, Runway, and Ant expand the map in different directions.",
      "Research previews, open-source stacks, and products should not be mixed as if they were the same thing.",
    ],
    href: "/models",
    cta: "Open company map",
  },
  {
    eyebrow: "03 / Simulate & Build",
    title: "The surrounding progress explains where this goes next.",
    summary:
      "Beyond visible products, the category is moving toward reusable assets, simulation, physical AI, and inhabited worlds.",
    signals: [
      "3D exports and web sharing make world outputs reusable instead of disposable.",
      "Physical AI stacks connect world models to robots, autonomous systems, and simulation workflows.",
      "Agent-society work shows why persistent worlds eventually need inhabitants and memory.",
    ],
    href: "/updates",
    cta: "Scan updates",
  },
];

export const companyModelGroups: CompanyModelGroup[] = [
  {
    company: "World Labs",
    headline: "Marble turns world models into a visible 3D creation product.",
    modelSlugs: ["marble", "world-api"],
    signalType: "Usable product",
    launched: "Marble and the later World API direction",
    visitorCanSee:
      "A web product for creating, editing, exploring, sharing, and exporting persistent 3D worlds.",
    boundary:
      "Treat Marble as the product-led 3D world lane, not as a robotics simulator or many-agent world.",
    officialHref: "https://marble.worldlabs.ai/",
    createHref: "https://marble.worldlabs.ai/",
  },
  {
    company: "Blockade Labs",
    headline: "Skybox AI is the clearest 360 environment lane.",
    modelSlugs: ["skybox-ai"],
    signalType: "Usable product",
    launched: "Skybox AI app, API, and export workflow",
    visitorCanSee:
      "360 skyboxes, HDRI-style environment images, GLB environment exports, and engine-oriented use cases.",
    boundary:
      "Frame Skybox AI as environment generation and export tooling, not as a full realtime simulator.",
    officialHref: "https://skybox.blockadelabs.com/",
    createHref: "https://skybox.blockadelabs.com/",
  },
  {
    company: "Alibaba",
    headline: "HappyOyster shows the product-facing interactive world path.",
    modelSlugs: ["happyoyster"],
    signalType: "Product signal",
    launched: "HappyOyster early-access world creation product",
    visitorCanSee:
      "An Alibaba-side interface for real-time world exploration and directing, with access still framed conservatively.",
    boundary:
      "Keep early-access availability separate from broad public-product claims.",
    officialHref: "https://www.happyoyster.cn/",
  },
  {
    company: "Google DeepMind",
    headline: "Genie anchors the promptable interactive world research path.",
    modelSlugs: ["genie-3"],
    signalType: "Experimental preview",
    launched: "Genie 3 and Project Genie updates",
    visitorCanSee:
      "Interactive world demos and a gated Project Genie prototype path, including Street View-grounded scenes.",
    boundary:
      "Do not present Genie as a generally available world-building platform or open developer API.",
    officialHref: "https://labs.google/projectgenie",
  },
  {
    company: "Tencent Hunyuan",
    headline: "Tencent pushes open 3D world generation and embodied progress.",
    modelSlugs: ["hy-world-2-0", "hy-embodied-0-5"],
    signalType: "Open stack",
    launched: "HY-World 2.0 and HY-Embodied-0.5",
    visitorCanSee:
      "Public repos, model cards, technical reports, and a clearer split between 3D world assets and embodied-AI systems.",
    boundary:
      "HY-World belongs in generated and reconstructed 3D worlds; HY-Embodied belongs in robot-facing progress.",
    officialHref: "https://github.com/Tencent-Hunyuan/HY-World-2.0",
  },
  {
    company: "Ant Group / Robbyant",
    headline: "Robbyant expands the open-source world and embodied-AI track.",
    modelSlugs: ["lingbot-world", "lingbot-map", "lingbot-va", "lingbot-vla"],
    signalType: "Open stack",
    launched: "LingBot-World, LingBot-Map, LingBot-VA, and LingBot-VLA",
    visitorCanSee:
      "Open repositories, papers, model releases, and a path from interactive worlds into mapping and robot control.",
    boundary:
      "Separate consumer-facing world creation from embodied models and reconstruction systems.",
    officialHref: "https://github.com/Robbyant",
  },
  {
    company: "NVIDIA",
    headline: "Cosmos keeps the physical-AI infrastructure lane visible.",
    modelSlugs: ["cosmos"],
    signalType: "Adjacent progress",
    launched: "Cosmos platform and Cosmos 3 preview direction",
    visitorCanSee:
      "A platform story around synthetic data, world foundation models, evaluation, and robot-training workflows.",
    boundary:
      "This is infrastructure for physical AI, not a consumer 3D world creator like Marble or Skybox.",
    officialHref: "https://github.com/nvidia-cosmos",
  },
  {
    company: "Runway",
    headline: "GWM-1 shows how video companies are moving toward world models.",
    modelSlugs: ["gwm-1"],
    signalType: "Product signal",
    launched: "GWM-1 and Runway Characters",
    visitorCanSee:
      "A general world-model research direction plus a deployed character-agent surface through Runway products.",
    boundary:
      "Characters is an avatar/product signal, not proof of a general explorable-world platform.",
    officialHref: "https://runwayml.com/news/building-runway-characters",
  },
  {
    company: "Decart AI + Etched",
    headline: "Oasis shows the realtime action-conditioned demo path.",
    modelSlugs: ["oasis"],
    signalType: "Experimental preview",
    launched: "Oasis realtime open-world demo",
    visitorCanSee:
      "A playable, keyboard-conditioned video world that explains interaction better than a fixed clip.",
    boundary:
      "Oasis is not a polished world editor or reusable 3D asset export product.",
    officialHref: "https://oasis-model.github.io/",
  },
  {
    company: "Altera / Fundamental Research Labs",
    headline: "Project Sid adds the agent-society layer.",
    modelSlugs: ["project-sid"],
    signalType: "Adjacent progress",
    launched: "Project Sid many-agent civilization simulation",
    visitorCanSee:
      "A Minecraft-based simulation where agents specialize, organize, and form social patterns.",
    boundary:
      "This is about inhabitants and social behavior, not visual world generation.",
    officialHref: "https://fundamentalresearchlabs.com/blog/project-sid",
  },
];

export const selectedUpdateSlugs = [
  "google-project-genie-street-view",
  "runway-characters-gwm-1",
  "nvidia-cosmos-3-physical-ai-stack",
  "alibaba-happyoyster-world-model",
  "tencent-hunyuan-hy-world-2-0",
  "world-labs-world-api-announced",
] as const;

export function getCompanyModelGroups(): Array<
  CompanyModelGroup & { models: ModelProfile[] }
> {
  return companyModelGroups.map((group) => ({
    ...group,
    models: group.modelSlugs
      .map((slug) => getModel(slug))
      .filter((model): model is ModelProfile => Boolean(model)),
  }));
}

export function getSelectedUpdates(): NewsItem[] {
  return selectedUpdateSlugs
    .map((slug) => newsItems.find((item) => item.slug === slug))
    .filter((item): item is NewsItem => Boolean(item));
}

export const companyModelSlugs = new Set(
  companyModelGroups.flatMap((group) => group.modelSlugs),
);

export const companyModelProfiles = modelProfiles.filter((model) =>
  companyModelSlugs.has(model.slug),
);
