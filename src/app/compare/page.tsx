import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";

import { JsonLd } from "@/components/json-ld";
import { ShowcaseHero } from "@/components/showcase";
import { comparisons } from "@/lib/content";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { comparisonVisual, pageVisuals, splitComparisonTitle } from "@/lib/showcase";
import { absoluteUrl } from "@/lib/site";

const seoTarget = getStaticSeoTarget("/compare");

export const metadata: Metadata = metadataForRoute("/compare");

export default function ComparePage() {
  return (
    <main className="page-shell showcase-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: seoTarget.primaryKeyword,
          description: seoTarget.description,
          itemListElement: comparisons.map((comparison, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: comparison.primaryKeyword ?? comparison.title,
            url: absoluteUrl(`/compare/${comparison.slug}`),
          })),
        }}
      />
      <ShowcaseHero
        description={seoTarget.description}
        eyebrow="World model comparisons"
        meta={["Two sides", "Use cases", "Key differences", "Tables below"]}
        primaryCta={{ href: "/models", label: "Open model wall" }}
        secondaryCta={{ href: "/what-is-world-model", label: "Definition" }}
        title="World model comparisons for focused search intent."
        visual={pageVisuals.compare}
      />

      <section className="update-showcase-section" aria-labelledby="comparison-cards">
        <div className="showcase-section-heading">
          <p className="showcase-kicker">Matchups</p>
          <h2 id="comparison-cards">Choose a world model comparison first. Read the table second.</h2>
          <p>
            The detail pages keep the citeable tables, but the first read now starts with the user decision.
          </p>
        </div>

        <div className="update-grid">
        {comparisons.map((comparison) => (
          <Link
            className="update-card"
            href={`/compare/${comparison.slug}`}
            key={comparison.slug}
            style={
              {
                "--showcase-accent": comparisonVisual(comparison).accentColor,
                "--showcase-secondary": comparisonVisual(comparison).secondaryAccentColor,
              } as CSSProperties
            }
          >
            <span className="signal-pill">
              {splitComparisonTitle(comparison.title).left} vs {splitComparisonTitle(comparison.title).right}
            </span>
            <h2>{comparison.title}</h2>
            <p>{comparison.summary}</p>
            <div className="update-card-footer">
              <span>Updated {comparison.updated}</span>
              <span>{comparison.rows.length} differences</span>
            </div>
          </Link>
        ))}
        </div>
      </section>
    </main>
  );
}
