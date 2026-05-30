import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { SceneExplainer, ShowcaseHero } from "@/components/showcase";
import { SourceList } from "@/components/source-list";
import { comparisons, modelProfiles } from "@/lib/content";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { pageVisuals, showcaseImages } from "@/lib/showcase";
import { absoluteUrl } from "@/lib/site";

const seoTarget = getStaticSeoTarget("/what-is-world-model");

export const metadata: Metadata = metadataForRoute("/what-is-world-model");

const sources = [
  {
    label: "Google DeepMind: Genie 3, a new frontier for world models",
    url: "https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/",
  },
  {
    label: "NVIDIA Glossary: World Models",
    url: "https://www.nvidia.com/en-us/glossary/world-models/",
  },
  {
    label: "World Labs: Introducing Marble, our first world model",
    url: "https://www.worldlabs.ai/blog/marble-world-model",
  },
];

export default function WhatIsWorldModelPage() {
  const videoComparison = comparisons.find(
    (comparison) => comparison.slug === "world-model-vs-video-model",
  );

  return (
    <main className="page-shell showcase-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: seoTarget.primaryKeyword,
          description: seoTarget.description,
          mainEntityOfPage: absoluteUrl("/what-is-world-model"),
          datePublished: "2026-04-28",
          dateModified: "2026-04-28",
        }}
      />

      <ShowcaseHero
        description={seoTarget.description}
        eyebrow="What is a world model"
        meta={["Space", "Motion", "Actions", "Memory"]}
        primaryCta={{ href: "/concept-map", label: "Open map" }}
        secondaryCta={{ href: "/models", label: "See examples" }}
        title="What is a world model?"
        visual={pageVisuals.definition}
      />

      <SceneExplainer
        description="Use this as the visitor-friendly mental model before the detailed comparison table."
        steps={[
          {
            eyebrow: "Watch",
            title: "A video model makes a scene move.",
            body: "The output can look cinematic, but the viewer usually stays outside the frame.",
            image: showcaseImages.videoToWorlds,
            accentColor: "#f8d66d",
          },
          {
            eyebrow: "Enter",
            title: "A world model keeps track of a place.",
            body: "The camera can move, objects can persist, and the scene should still make sense.",
            image: showcaseImages.spatial3d,
            accentColor: "#76ffe5",
          },
          {
            eyebrow: "Act",
            title: "Interaction turns the place into a system.",
            body: "Movement, prompts, agents, and physical constraints become part of the generated future.",
            image: showcaseImages.civilization,
            accentColor: "#ff7fa6",
          },
        ]}
        title="The simplest path: watch, enter, act."
      />

      <section className="article-grid">
        <article className="article-body">
          <h2>What is a world model, in one short answer?</h2>
          <p>
            If a language model predicts the next token, a world model tries to
            predict the next state of a world. That world can be a generated 3D
            space, a simulated driving scene, an environment for an agent, or an
            interactive scene that responds when a user moves through it.
          </p>
          <p>
            This is why the category matters. A normal image or video model can
            make a plausible-looking output. A world model has to maintain
            consistency when the camera moves, objects change, actions happen,
            and time continues.
          </p>

          <h2>What it is not</h2>
          <p>
            A world model is not just another word for a video model. Video can
            be part of the interface, but the deeper goal is simulation:
            representing how a world behaves after a prompt, movement, or action.
          </p>

          {videoComparison ? (
            <table className="data-table">
              <thead>
                <tr>
                  {videoComparison.columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {videoComparison.rows.map((row) => (
                  <tr key={row.join("-")}>
                    {row.map((cell) => (
                      <td key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}

          <h2>Why it is becoming a separate category</h2>
          <p>
            The phrase now has several visible product and research tracks:
            DeepMind uses it for interactive generated worlds, World Labs uses it
            for spatial 3D worlds, Runway uses it for a general world model
            research direction, and NVIDIA uses world foundation models for
            physical AI workflows.
          </p>
          <p>
            That spread is exactly why World Models Watch treats the term as a
            category, not a single product label.
          </p>

          <h2>First models to know</h2>
          <div className="mini-model-grid">
            {modelProfiles.slice(0, 5).map((model) => (
              <Link href={`/models/${model.slug}`} key={model.slug}>
                <strong>{model.name}</strong>
                <span>{model.organization}</span>
                <small>{model.category}</small>
              </Link>
            ))}
          </div>
        </article>

        <aside className="article-aside">
          <div className="aside-box">
            <p className="eyebrow">Use this mental model</p>
            <h2>Media models create outputs. World models model change.</h2>
            <p>
              The practical test is whether the system can preserve a coherent
              state when something moves, acts, or continues over time.
            </p>
          </div>
          <div className="aside-box">
            <p className="eyebrow">Next page</p>
            <h2>Compare the category</h2>
            <p>
              Start with the world model versus video model table, then move
              into product and research comparisons.
            </p>
            <Link className="text-link" href="/compare/world-model-vs-video-model">
              Open comparison
            </Link>
          </div>
        </aside>
      </section>

      <SourceList sources={sources} />
    </main>
  );
}
