import { getResolvedWorldEvolutionStages } from "@/lib/content/world-evolution";

export type WorldFragment = {
  id: string;
  label: string;
  title: string;
  description: string;
  projectId: string;
  mediaSrc?: string;
  mediaType?: string;
  posterSrc?: string;
};

export type WorldStage = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  explanation: string;
  observation: string;
  projectIds: string[];
  fragments: WorldFragment[];
  accent: string;
};

export const worldStages: WorldStage[] = getResolvedWorldEvolutionStages().map((stage) => ({
  id: stage.id,
  number: `Stage ${stage.number}`,
  title: stage.title,
  shortTitle: stage.shortTitle,
  explanation: stage.summary,
  observation: stage.whatChanged,
  projectIds: stage.projectIds,
  accent: stage.accent,
  fragments: stage.projects.map((project, index) => ({
    id: `${stage.id}-${project.id}`,
    label: `${stage.shortTitle} #${String(index + 1).padStart(2, "0")}`,
    title: project.shortName,
    description: project.summary,
    projectId: project.id,
    mediaSrc: project.videoSrc,
    mediaType: project.videoType,
    posterSrc: project.posterSrc,
  })),
}));
