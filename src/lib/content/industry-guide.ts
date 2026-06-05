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
    cta: "Scan selected signals",
  },
];

export const companyModelGroups: CompanyModelGroup[] = [
  {
    company: "World Labs",
    headline: "Create editable 3D worlds in Marble.",
    modelSlugs: ["marble", "world-api"],
    signalType: "Usable product",
    launched: "Marble world creator and World API direction",
    visitorCanSee:
      "Create, edit, explore, share, and export a persistent 3D world from a web product.",
    boundary:
      "Best for 3D world creation; not a robot simulator or many-agent game world.",
    officialHref: "https://marble.worldlabs.ai/",
    createHref: "https://marble.worldlabs.ai/",
  },
  {
    company: "Blockade Labs",
    headline: "Generate 360 environments with Skybox AI.",
    modelSlugs: ["skybox-ai"],
    signalType: "Usable product",
    launched: "Skybox AI app, API, and export workflow",
    visitorCanSee:
      "Create skyboxes, HDRI-style environments, GLB exports, and scene backdrops.",
    boundary:
      "Best for environment shells and 360 scenes; not a full realtime world simulator.",
    officialHref: "https://www.blockadelabs.com/",
    createHref: "https://www.blockadelabs.com/",
  },
  {
    company: "Alibaba",
    headline: "HappyOyster is an early look at interactive AI worlds.",
    modelSlugs: ["happyoyster"],
    signalType: "Product signal",
    launched: "HappyOyster early-access world creator",
    visitorCanSee:
      "A consumer-style interface for directing and exploring AI worlds, with limited access.",
    boundary:
      "Treat it as promising early access, not as a fully open public tool.",
    officialHref: "https://www.happyoyster.cn/",
  },
  {
    company: "Google DeepMind",
    headline: "Genie shows where prompt-based playable worlds are heading.",
    modelSlugs: ["genie-3"],
    signalType: "Experimental preview",
    launched: "Genie 3 and Project Genie updates",
    visitorCanSee:
      "Interactive demos and a gated prototype path, including Street View-grounded scenes.",
    boundary:
      "Good for understanding the future; not a tool most users can open today.",
    officialHref: "https://labs.google/projectgenie",
  },
  {
    company: "Tencent Hunyuan",
    headline: "Tencent makes the open 3D asset track easier to follow.",
    modelSlugs: ["hy-world-2-0", "hy-embodied-0-5"],
    signalType: "Open stack",
    launched: "HY-World 2.0 and HY-Embodied-0.5",
    visitorCanSee:
      "Public repos, model cards, and technical reports for generated 3D worlds and embodied AI.",
    boundary:
      "Useful for developers and technical readers, not a simple creator app.",
    officialHref: "https://github.com/Tencent-Hunyuan/HY-World-2.0",
  },
  {
    company: "Ant Group / Robbyant",
    headline: "Robbyant connects world models with maps and robot control.",
    modelSlugs: ["lingbot-world", "lingbot-map", "lingbot-va", "lingbot-vla"],
    signalType: "Open stack",
    launched: "LingBot-World, LingBot-Map, LingBot-VA, and LingBot-VLA",
    visitorCanSee:
      "Open repositories, papers, model releases, and the path from worlds into mapping and robot control.",
    boundary:
      "Good category background; not a consumer world creator.",
    officialHref: "https://github.com/Robbyant",
  },
  {
    company: "NVIDIA",
    headline: "Cosmos explains the physical-AI infrastructure lane.",
    modelSlugs: ["cosmos"],
    signalType: "Adjacent progress",
    launched: "Cosmos platform and Cosmos 3 preview direction",
    visitorCanSee:
      "A platform story around synthetic data, world foundation models, evaluation, and robot-training workflows.",
    boundary:
      "Built for robotics and physical-AI workflows, not a consumer 3D creator.",
    officialHref: "https://github.com/nvidia-cosmos",
  },
  {
    company: "Runway",
    headline: "Runway shows how video tools are moving toward characters and worlds.",
    modelSlugs: ["gwm-1"],
    signalType: "Product signal",
    launched: "GWM-1 and Runway Characters",
    visitorCanSee:
      "A general world-model research direction plus a deployed character-agent surface through Runway products.",
    boundary:
      "Useful for avatars and video products; not a general explorable-world tool.",
    officialHref: "https://runwayml.com/news/building-runway-characters",
  },
  {
    company: "Decart AI + Etched",
    headline: "Oasis is a playable realtime AI-world demo.",
    modelSlugs: ["oasis"],
    signalType: "Experimental preview",
    launched: "Oasis realtime open-world demo",
    visitorCanSee:
      "A keyboard-controlled demo world that shows interaction better than a fixed clip.",
    boundary:
      "Interesting demo, not a polished creator product or export workflow.",
    officialHref: "https://oasis-model.github.io/",
  },
  {
    company: "Altera / Fundamental Research Labs",
    headline: "Project Sid shows how AI inhabitants behave inside a world.",
    modelSlugs: ["project-sid"],
    signalType: "Adjacent progress",
    launched: "Project Sid many-agent civilization simulation",
    visitorCanSee:
      "A Minecraft-based simulation where agents specialize, organize, and form social patterns.",
    boundary:
      "About agents and society, not visual world generation.",
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
