import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Tag } from "lucide-react";

import { ShowcaseHero, visualStyle } from "@/components/showcase";
import { newsItems } from "@/lib/content";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { newsVisual, pageVisuals } from "@/lib/showcase";

const seoTarget = getStaticSeoTarget("/news");

export const metadata: Metadata = metadataForRoute("/news");

const releaseGroups = [
  {
    impactLevel: "High",
    eyebrow: "High impact",
    title: "Release signals that changed the site map.",
    description:
      "These updates affect the main company map or decision guides and should be read before older timeline notes.",
  },
  {
    impactLevel: "Medium",
    eyebrow: "Watchlist",
    title: "Release signals that clarify a lane or boundary.",
    description:
      "These updates are still source-backed, but they mostly refine a model profile, guide, or availability boundary.",
  },
] as const;

export default function NewsPage() {
  const sortedNewsItems = [...newsItems].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="page-shell showcase-page">
      <ShowcaseHero
        description={seoTarget.description}
        eyebrow="World model release signals"
        meta={["What changed", "Confidence", "Affected model", "Next page"]}
        primaryCta={{ href: "/events", label: "Events timeline" }}
        secondaryCta={{ href: "/research-insights", label: "Signal room" }}
        title="Short release signals, not another model wall."
        visual={pageVisuals.news}
      />

      <section className="update-showcase-section" aria-labelledby="latest-updates">
        <div className="showcase-section-heading">
          <p className="showcase-kicker">Release feed</p>
          <h2 id="latest-updates">Scan what changed, source confidence, and where to go next.</h2>
          <p>
            The release feed stays short on purpose. Stable descriptions live in Company Map, and choose-between guidance lives in Decision Guides.
          </p>
        </div>
      </section>

      {releaseGroups.map((group) => {
        const groupItems = sortedNewsItems.filter(
          (item) => item.impactLevel === group.impactLevel,
        );

        if (groupItems.length === 0) return null;

        return (
          <section className="update-showcase-section" key={group.impactLevel}>
            <div className="showcase-section-heading">
              <p className="showcase-kicker">{group.eyebrow}</p>
              <h2>{group.title}</h2>
              <p>{group.description}</p>
            </div>

            <div className="update-grid">
              {groupItems.map((item) => {
                const visual = newsVisual(item);

                return (
                  <Link
                    className="update-card"
                    href={`/news/${item.slug}`}
                    key={item.slug}
                    style={visualStyle(visual)}
                  >
                    <span className="signal-pill">{item.signalType}</span>
                    <h2>{item.title}</h2>
                    <p>{item.whatChanged?.[0] ?? item.summary}</p>
                    <div className="tag-row">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span key={tag}>
                          <Tag size={13} aria-hidden="true" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="update-card-footer">
                      <span>
                        <CalendarDays size={16} aria-hidden="true" />
                        {item.date}
                      </span>
                      <span>{item.sourceConfidence}</span>
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
