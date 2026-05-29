import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";

import { ShowcaseHero } from "@/components/showcase";
import { comparisons } from "@/lib/content";
import { comparisonVisual, pageVisuals, splitComparisonTitle } from "@/lib/showcase";

export const metadata: Metadata = {
  title: "World Model Visual Comparisons",
  description:
    "Visual comparison pages for world models, video models, 3D world systems, and physical AI platforms.",
  alternates: {
    canonical: "/compare",
  },
};

export default function ComparePage() {
  return (
    <main className="page-shell showcase-page">
      <ShowcaseHero
        description="Pick a matchup by scene: product surface versus research preview, open 3D stack versus polished workflow, or video-like output versus controllable world."
        eyebrow="Comparison arena"
        meta={["Two sides", "Use cases", "Key differences", "Tables below"]}
        primaryCta={{ href: "/models", label: "Open model wall" }}
        secondaryCta={{ href: "/what-is-world-model", label: "Definition" }}
        title="Comparisons should feel like matchups, not spreadsheets."
        visual={pageVisuals.compare}
      />

      <section className="update-showcase-section" aria-labelledby="comparison-cards">
        <div className="showcase-section-heading">
          <p className="showcase-kicker">Matchups</p>
          <h2 id="comparison-cards">Choose the arena first. Read the table second.</h2>
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
