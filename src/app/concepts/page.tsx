import type { Metadata } from "next";

import { concepts } from "@/lib/content";

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
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Concepts</p>
        <h1>World model glossary</h1>
        <p>
          These definitions keep the site readable for people who are new to
          world models while preserving the distinctions that matter for
          research and product tracking.
        </p>
      </section>

      <section className="concept-list">
        {concepts.map((concept) => (
          <article className="concept-row" id={concept.slug} key={concept.slug}>
            <div>
              <p className="eyebrow">Concept</p>
              <h2>{concept.term}</h2>
            </div>
            <div>
              <p>{concept.summary}</p>
              <p className="plain-english">{concept.plainEnglish}</p>
              <span className="tag-row standalone">
                {concept.related.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
