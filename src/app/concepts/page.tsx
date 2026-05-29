import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";

import { ShowcaseHero } from "@/components/showcase";
import { concepts } from "@/lib/content";
import { conceptVisual, pageVisuals } from "@/lib/showcase";

export const metadata: Metadata = {
  title: "World Model Concepts",
  description:
    "Plain-English definitions for world model, spatial intelligence, physical AI, world foundation model, and interactive world generation.",
  alternates: {
    canonical: "/concepts",
  },
};

export default function ConceptsPage() {
  return (
    <main className="page-shell showcase-page">
      <ShowcaseHero
        description="A visual glossary for people arriving cold: short definitions, plain-English hooks, and quick jumps into the bigger map."
        eyebrow="Visual glossary"
        meta={["Worlds", "Space", "Robots", "Interaction"]}
        primaryCta={{ href: "/concept-map", label: "Open concept map" }}
        secondaryCta={{ href: "/what-is-world-model", label: "Definition" }}
        title="Concepts should feel like doors, not footnotes."
        visual={pageVisuals.concepts}
      />

      <section className="update-showcase-section" aria-labelledby="concept-tiles">
        <div className="showcase-section-heading">
          <p className="showcase-kicker">Glossary tiles</p>
          <h2 id="concept-tiles">Tap a concept and keep moving.</h2>
          <p>
            The copy stays short so new visitors can build a mental map quickly.
          </p>
        </div>

        <div className="concept-tile-grid">
        {concepts.map((concept) => (
          <article
            className="concept-tile"
            id={concept.slug}
            key={concept.slug}
            style={
              {
                "--showcase-accent": conceptVisual(concept.slug).accentColor,
                "--showcase-secondary": conceptVisual(concept.slug).secondaryAccentColor,
              } as CSSProperties
            }
          >
            <span className="signal-pill">{conceptVisual(concept.slug).primarySceneLabel}</span>
            <h2>{concept.term}</h2>
            <p>{concept.summary}</p>
            <strong>{concept.plainEnglish}</strong>
            <div className="tag-row standalone">
              {concept.related.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
        </div>
        <Link className="showcase-inline-link" href="/concept-map">
          See how the concepts connect
        </Link>
      </section>
    </main>
  );
}
