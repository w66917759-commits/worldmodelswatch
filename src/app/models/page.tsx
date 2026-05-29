import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { ShowcaseHero, VisualModelCard } from "@/components/showcase";
import { getModel, modelProfiles, type ModelProfile } from "@/lib/content";
import { modelVisual, pageVisuals } from "@/lib/showcase";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "World Model Showcase",
  description:
    "A visual wall of AI world model systems, from interactive worlds and 3D spaces to physical AI and agent societies.",
  keywords: [
    "best AI world models",
    "world models",
    "AI generated worlds",
    "interactive world model",
    "persistent 3D worlds",
    "many-agent simulations",
  ],
  alternates: {
    canonical: "/models",
  },
};

const featuredWorldModels = [
  {
    slug: "happyoyster",
    lane: "Real-time interactive",
    bestQuestion: "How does a product package real-time world creation?",
  },
  {
    slug: "genie-3",
    lane: "Real-time interactive",
    bestQuestion: "How does a frontier model generate promptable worlds?",
  },
  {
    slug: "oasis",
    lane: "Realtime action-conditioned",
    bestQuestion: "How does keyboard input condition a generated world?",
  },
  {
    slug: "skybox-ai",
    lane: "360 environment",
    bestQuestion: "How are skyboxes, HDRI, and VR environment shells generated?",
  },
  {
    slug: "marble",
    lane: "Persistent 3D world",
    bestQuestion: "How does a product create editable 3D worlds?",
  },
  {
    slug: "hy-world-2-0",
    lane: "Open 3D world stack",
    bestQuestion: "How does open 3D generation and reconstruction work?",
  },
  {
    slug: "project-sid",
    lane: "Agent society",
    bestQuestion: "How do many agents form roles, rules, and culture?",
  },
] as const;

const featuredRows = featuredWorldModels
  .map((entry) => {
    const model = getModel(entry.slug);
    if (!model) return null;
    return { ...entry, model };
  })
  .filter((entry): entry is (typeof featuredWorldModels)[number] & { model: ModelProfile } =>
    Boolean(entry),
  );

export default function ModelsPage() {
  return (
    <main className="page-shell showcase-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Best AI world models to watch",
          itemListElement: featuredRows.map((entry, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: entry.model.name,
            url: absoluteUrl(`/models/${entry.model.slug}`),
          })),
        }}
      />
      <ShowcaseHero
        description="Scan the systems by what they let a normal visitor see: a playable world, a 360 environment, a persistent 3D place, a robot-facing simulator, or an agent society."
        eyebrow="Model showcase"
        meta={["Interactive worlds", "3D spaces", "Physical AI", "Agent society"]}
        primaryCta={{ href: "/world-model-labs", label: "Watch demos" }}
        secondaryCta={{ href: "/compare", label: "Compare lanes" }}
        title="A wall of worlds, not a filing cabinet."
        visual={{
          ...pageVisuals.definition,
          visualSubtitle:
            "Every model card starts with the experience: what opens on screen, what moves, and why a visitor should keep exploring.",
        }}
      />

      <section className="model-showcase-section" aria-labelledby="featured-models">
        <div className="showcase-section-heading">
          <p className="showcase-kicker">First row</p>
          <h2 id="featured-models">Seven demos that make the category visible.</h2>
          <p>
            These are the fastest visual anchors for visitors who do not know the field yet.
          </p>
        </div>

        <div className="visual-model-wall">
          {featuredRows.map((entry) => {
            const visual = modelVisual(entry.model);
            return (
              <VisualModelCard
                body={visual.consumerHook ?? entry.model.summary}
                href={`/models/${entry.model.slug}`}
                key={entry.slug}
                label={entry.lane}
                meta={[entry.model.organization, entry.bestQuestion]}
                subtitle={entry.model.category}
                title={entry.model.name}
                visual={visual}
              />
            );
          })}
        </div>
      </section>

      <section className="source-backed-section" aria-labelledby="all-models">
        <div className="showcase-section-heading">
          <p className="showcase-kicker">Full wall</p>
          <h2 id="all-models">More signals to inspect.</h2>
          <p>
            Sources, status, and limits are still kept on each model page, but the index now starts from visual recognition.
          </p>
        </div>
        <div className="visual-model-wall">
        {modelProfiles.map((model) => (
          <VisualModelCard
            body={modelVisual(model).consumerHook ?? model.summary}
            href={`/models/${model.slug}`}
            key={model.slug}
            label={modelVisual(model).primarySceneLabel ?? model.category}
            meta={[model.organization, model.status]}
            subtitle={model.category}
            title={model.name}
            visual={modelVisual(model)}
          />
        ))}
        </div>
      </section>
    </main>
  );
}
