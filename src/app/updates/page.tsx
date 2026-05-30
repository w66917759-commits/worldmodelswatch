import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, CalendarDays, ExternalLink, Tag } from "lucide-react";

import { ShowcaseHero } from "@/components/showcase";
import { getSelectedUpdates } from "@/lib/content";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { newsVisual, pageVisuals } from "@/lib/showcase";

const seoTarget = getStaticSeoTarget("/updates");

export const metadata: Metadata = metadataForRoute("/updates");

export default function UpdatesPage() {
  const selectedUpdates = getSelectedUpdates().sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  return (
    <main className="page-shell showcase-page">
      <ShowcaseHero
        description={seoTarget.description}
        eyebrow="AI world model updates"
        meta={["Product signals", "Open stacks", "Physical AI", "Selected updates"]}
        primaryCta={{ href: "/progress", label: "Current progress" }}
        secondaryCta={{ href: "/models", label: "Companies & models" }}
        title="AI world model updates that change the map."
        visual={pageVisuals.news}
      />

      <section className="update-showcase-section" aria-labelledby="selected-updates">
        <div className="showcase-section-heading">
          <p className="showcase-kicker">Selected signals</p>
          <h2 id="selected-updates">Only AI world model updates that change the map stay here.</h2>
          <p>
            Each item is short on purpose: what moved, which company moved it, and where
            the official source or supporting note lives.
          </p>
        </div>

        <div className="update-grid">
          {selectedUpdates.map((item) => {
            const visual = newsVisual(item);
            const leadSource = item.sources[0];

            return (
              <article
                className="update-card industry-card"
                key={item.slug}
                style={
                  {
                    "--showcase-accent": visual.accentColor,
                    "--showcase-secondary": visual.secondaryAccentColor,
                  } as CSSProperties
                }
              >
                <span className="signal-pill">{visual.signalType}</span>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
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
                  <span>{item.organization}</span>
                </div>
                <div className="company-actions">
                  <Link href={`/news/${item.slug}`}>
                    <ArrowRight size={15} aria-hidden="true" />
                    Supporting note
                  </Link>
                  {leadSource ? (
                    <a href={leadSource.url} rel="noreferrer" target="_blank">
                      <ExternalLink size={15} aria-hidden="true" />
                      Official source
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
