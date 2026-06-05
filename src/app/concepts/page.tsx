import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { ShowcaseHero, visualStyle } from "@/components/showcase";
import { concepts } from "@/lib/content";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { absoluteUrl, site } from "@/lib/site";
import { conceptVisual, pageVisuals } from "@/lib/showcase";

const seoTarget = getStaticSeoTarget("/concepts");

export const metadata: Metadata = metadataForRoute("/concepts");

export default function ConceptsPage() {
  return (
    <main className="page-shell showcase-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: seoTarget.primaryKeyword,
          description: seoTarget.description,
          url: absoluteUrl("/concepts"),
          isPartOf: {
            "@type": "WebSite",
            name: site.name,
            url: site.url,
          },
          publisher: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
          },
          mainEntity: {
            "@type": "DefinedTermSet",
            name: "World model glossary",
            hasDefinedTerm: concepts.map((concept) => ({
              "@type": "DefinedTerm",
              name: concept.term,
              description: concept.summary,
              url: absoluteUrl(`/concepts#${concept.slug}`),
            })),
          },
        }}
      />
      <ShowcaseHero
        description={seoTarget.description}
        eyebrow="World model glossary"
        meta={["Worlds", "Space", "Robots", "Interaction"]}
        primaryCta={{ href: "/concept-map", label: "Open concept map" }}
        secondaryCta={{ href: "/what-is-world-model", label: "Definition" }}
        title="World model glossary for focused AI world terms."
        visual={pageVisuals.concepts}
      />

      <section className="update-showcase-section" aria-labelledby="concept-tiles">
        <div className="showcase-section-heading">
          <p className="showcase-kicker">Glossary tiles</p>
          <h2 id="concept-tiles">Use the world model glossary to keep each term focused.</h2>
          <p>
            The copy stays short so new visitors can build a mental map quickly.
          </p>
        </div>

        <div className="concept-tile-grid">
        {concepts.map((concept) => {
          const visual = conceptVisual(concept.slug);

          return (
          <article
            className="concept-tile"
            id={concept.slug}
            key={concept.slug}
            style={visualStyle(visual)}
          >
            <span className="signal-pill">{visual.primarySceneLabel}</span>
            <h2>{concept.term}</h2>
            <p>{concept.summary}</p>
            <strong>{concept.plainEnglish}</strong>
            <div className="tag-row standalone">
              {concept.related.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
          );
        })}
        </div>
        <Link className="showcase-inline-link" href="/concept-map">
          See how the concepts connect
        </Link>
      </section>
    </main>
  );
}
