import { getWorldById, type WorldProject } from "@/data/worldsData";
import type { Source } from "./types";

export type WorldEvolutionSource = Source & {
  id: string;
  kind: "Academic survey" | "Public explainer";
  note: string;
};

export type WorldEvolutionStageId =
  | "understand-predict"
  | "generated-space"
  | "controllable-worlds"
  | "physical-action"
  | "agent-societies";

export type WorldEvolutionStage = {
  id: WorldEvolutionStageId;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  whatChanged: string;
  researchBasis: string;
  boundary: string;
  projectIds: string[];
  sourceIds: string[];
  accent: string;
  secondaryAccent: string;
};

export type ResolvedWorldEvolutionStage = WorldEvolutionStage & {
  projects: WorldProject[];
  sources: WorldEvolutionSource[];
};

export const worldEvolutionSources: WorldEvolutionSource[] = [
  {
    id: "understanding-survey",
    kind: "Academic survey",
    label: "Understanding World or Predicting Future?",
    url: "https://arxiv.org/abs/2411.14499",
    note: "Frames world models around understanding current state and predicting future dynamics.",
  },
  {
    id: "3d-4d-survey",
    kind: "Academic survey",
    label: "3D and 4D World Modeling: A Survey",
    url: "https://arxiv.org/abs/2509.07996",
    note: "Separates video, occupancy, and LiDAR approaches for spatial and dynamic worlds.",
  },
  {
    id: "embodied-world-models",
    kind: "Academic survey",
    label: "A Comprehensive Survey on World Models for Embodied AI",
    url: "https://arxiv.org/abs/2510.16732",
    note: "Connects world models to rollouts, task performance, physical consistency, and real-time control.",
  },
  {
    id: "physical-ai-survey",
    kind: "Academic survey",
    label: "Physical AI Survey",
    url: "https://arxiv.org/abs/2510.04978",
    note: "Places world models inside physical perception, reasoning, modeling, and interaction.",
  },
  {
    id: "world-action-models",
    kind: "Academic survey",
    label: "World Action Models",
    url: "https://arxiv.org/abs/2605.12090",
    note: "Describes the move from reactive actions toward models that predict future states and actions together.",
  },
  {
    id: "nature-explainer",
    kind: "Public explainer",
    label: "Nature: what world models can do",
    url: "https://www.nature.com/articles/d41586-026-00820-5",
    note: "Explains why training on physical environments matters for robotics and real-world capability.",
  },
  {
    id: "scientific-american-overview",
    kind: "Public explainer",
    label: "Scientific American: world models overview",
    url: "https://www.scientificamerican.com/article/world-models-could-unlock-the-next-revolution-in-artificial-intelligence/",
    note: "Connects spatial-temporal memory, simulation, and internal models for non-specialist readers.",
  },
  {
    id: "techcrunch-explainer",
    kind: "Public explainer",
    label: "TechCrunch: why world models matter",
    url: "https://techcrunch.com/2024/12/14/what-are-ai-world-models-and-why-do-they-matter/",
    note: "A plain-language bridge from generated media to interactive 3D worlds and robot reasoning.",
  },
];

export const worldEvolutionStages: WorldEvolutionStage[] = [
  {
    id: "understand-predict",
    number: "01",
    title: "Explore Possible Worlds",
    shortTitle: "Explore",
    summary:
      "The first user-facing leap is that a generated scene can continue, change, and suggest what may happen next.",
    whatChanged:
      "The goal moves beyond making a frame. The model has to keep enough structure to forecast what can happen next.",
    researchBasis:
      "Surveys describe the field around two jobs: representing the world now and predicting future states for decisions.",
    boundary:
      "This stage is a function of world models, not a claim that every visual demo has deep physical reasoning.",
    projectIds: ["genie", "oasis"],
    sourceIds: ["understanding-survey", "scientific-american-overview", "techcrunch-explainer"],
    accent: "#8eb7ff",
    secondaryAccent: "#f4cf7a",
  },
  {
    id: "generated-space",
    number: "02",
    title: "Create Spaces",
    shortTitle: "Create",
    summary:
      "The output becomes a place: 360 horizons, spatial scenes, editable 3D worlds, and reusable geometry.",
    whatChanged:
      "World models stop looking like only video and start producing scenes that can be entered, edited, or exported.",
    researchBasis:
      "3D/4D surveys separate spatial world modeling from ordinary 2D video generation because geometry and time matter.",
    boundary:
      "Skybox is still a panoramic environment lane; Marble and HY-World are stronger spatial-world examples.",
    projectIds: ["skybox", "world-labs", "hy"],
    sourceIds: ["3d-4d-survey", "scientific-american-overview", "nature-explainer"],
    accent: "#86d6cf",
    secondaryAccent: "#c9f46e",
  },
  {
    id: "controllable-worlds",
    number: "03",
    title: "Control the World",
    shortTitle: "Control",
    summary:
      "The user begins steering the world with movement, prompts, camera direction, or player-like actions.",
    whatChanged:
      "The screen stops being a clip. It becomes a place that reacts while the next moment is still being generated.",
    researchBasis:
      "Embodied and action-model surveys emphasize action-conditioned rollouts, control, and long-horizon consistency.",
    boundary:
      "Interactive demos are not automatically open-ended platforms; availability and access must stay source-backed.",
    projectIds: ["oasis", "genie", "happyoyster"],
    sourceIds: ["embodied-world-models", "world-action-models", "techcrunch-explainer"],
    accent: "#f1b46a",
    secondaryAccent: "#f46e87",
  },
  {
    id: "physical-action",
    number: "04",
    title: "Simulate Action",
    shortTitle: "Simulate",
    summary:
      "World models become useful when they can support action, planning, physical consistency, and simulation.",
    whatChanged:
      "The important question shifts from visual fidelity to whether a generated rollout can guide or test behavior.",
    researchBasis:
      "Physical AI and embodied-AI surveys point to metrics like task performance, physical consistency, and real-time control.",
    boundary:
      "The seven-model visual axis shows the simulation direction; robotics-specific systems remain in the news layer.",
    projectIds: ["hy", "oasis", "genie"],
    sourceIds: ["physical-ai-survey", "embodied-world-models", "world-action-models"],
    accent: "#74f4ff",
    secondaryAccent: "#f6d26e",
  },
  {
    id: "agent-societies",
    number: "05",
    title: "Build Inhabited Worlds",
    shortTitle: "Build",
    summary:
      "A world becomes a social system when many agents can form routines, roles, markets, and memory.",
    whatChanged:
      "The world is no longer only terrain or camera motion. It becomes a substrate for collective behavior.",
    researchBasis:
      "World-model surveys include social simulacra and decision environments as part of the wider evolution.",
    boundary:
      "Project Sid is a many-agent simulation lane, not a generative visual world model like Marble or Genie.",
    projectIds: ["project-sid"],
    sourceIds: ["understanding-survey", "scientific-american-overview"],
    accent: "#f0a0a8",
    secondaryAccent: "#c8d98b",
  },
];

const sourceById = new Map(worldEvolutionSources.map((source) => [source.id, source]));

export function getEvolutionStageById(id?: string) {
  if (!id) return undefined;
  return worldEvolutionStages.find((stage) => stage.id === id);
}

export function getResolvedWorldEvolutionStages(): ResolvedWorldEvolutionStage[] {
  return worldEvolutionStages.map((stage) => ({
    ...stage,
    projects: stage.projectIds
      .map((projectId) => getWorldById(projectId))
      .filter((project): project is WorldProject => Boolean(project)),
    sources: stage.sourceIds
      .map((sourceId) => sourceById.get(sourceId))
      .filter((source): source is WorldEvolutionSource => Boolean(source)),
  }));
}
