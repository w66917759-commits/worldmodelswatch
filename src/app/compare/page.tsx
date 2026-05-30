import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { ShowcaseHero, visualStyle } from "@/components/showcase";
import { comparisons, type Comparison } from "@/lib/content";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { comparisonVisual, pageVisuals, splitComparisonTitle } from "@/lib/showcase";
import { absoluteUrl } from "@/lib/site";

const seoTarget = getStaticSeoTarget("/compare");

export const metadata: Metadata = metadataForRoute("/compare");

type GuideType = Comparison["guideType"];

const guideGroups: Array<{
  type: GuideType;
  eyebrow: string;
  title: string;
  description: string;
}> = [
  {
    type: "creator",
    eyebrow: "Creator",
    title: "Choose the tool by the world a visitor wants to make.",
    description:
      "These guides separate 360 environments, editable 3D worlds, product surfaces, and research previews.",
  },
  {
    type: "developer",
    eyebrow: "Developer",
    title: "Choose the stack by what can be inspected or integrated.",
    description:
      "These guides keep open repos, product docs, reconstruction systems, and platform surfaces in separate lanes.",
  },
  {
    type: "research",
    eyebrow: "Research",
    title: "Choose the reference by the claim being tested.",
    description:
      "These guides compare research direction, interaction style, and category framing without implying product parity.",
  },
  {
    type: "robotics",
    eyebrow: "Robotics",
    title: "Choose the physical-AI lane by control, simulation, or infrastructure.",
    description:
      "These guides keep embodied policies, robot-control world models, and physical-AI platforms distinct.",
  },
  {
    type: "concept-boundary",
    eyebrow: "Beginner",
    title: "Choose the boundary guide before comparing products.",
    description:
      "These pages explain where the category starts and where adjacent simulations or video models should stay separate.",
  },
];

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
        eyebrow="World model decision guides"
        meta={["Creator", "Developer", "Research", "Robotics", "Beginner"]}
        primaryCta={{ href: "/models", label: "Company map" }}
        secondaryCta={{ href: "/what-is-world-model", label: "Definition" }}
        title="Decision guides for choosing the right world-model lane."
        visual={pageVisuals.compare}
      />

      <section className="update-showcase-section" aria-labelledby="comparison-cards">
        <div className="showcase-section-heading">
          <p className="showcase-kicker">Decision first</p>
          <h2 id="comparison-cards">Pick the visitor question. Then read the table.</h2>
          <p>
            This page is not a second model wall. Each guide starts with the choice a reader is trying to make,
            then keeps the citeable table below.
          </p>
        </div>
      </section>

      {guideGroups.map((group) => {
        const groupComparisons = comparisons.filter(
          (comparison) => comparison.guideType === group.type,
        );

        if (groupComparisons.length === 0) return null;

        return (
          <section className="update-showcase-section" key={group.type}>
            <div className="showcase-section-heading">
              <p className="showcase-kicker">{group.eyebrow}</p>
              <h2>{group.title}</h2>
              <p>{group.description}</p>
            </div>

            <div className="update-grid">
              {groupComparisons.map((comparison) => {
                const visual = comparisonVisual(comparison);
                const titleSides = splitComparisonTitle(comparison.title);

                return (
                  <Link
                    className="update-card"
                    href={`/compare/${comparison.slug}`}
                    key={comparison.slug}
                    style={visualStyle(visual)}
                  >
                    <span className="signal-pill">
                      {titleSides.left} vs {titleSides.right}
                    </span>
                    <h2>{comparison.title}</h2>
                    <p>{comparison.decisionQuestion}</p>
                    <div className="update-card-footer">
                      <span>Updated {comparison.updated}</span>
                      <span>{comparison.rows.length} differences</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
}
