import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, ExternalLink, Tag } from "lucide-react";

import { ShowcaseHero, visualStyle } from "@/components/showcase";
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
        eyebrow="Selected release signals"
        meta={["Auxiliary feed", "Product", "Open stacks", "Physical AI"]}
        primaryCta={{ href: "/progress", label: "Current progress" }}
        secondaryCta={{ href: "/models", label: "Company map" }}
        title="Selected signals that support the main Release Signals feed."
        visual={pageVisuals.news}
      />

      <section className="update-showcase-section" aria-labelledby="selected-updates">
        <div className="showcase-section-heading">
          <p className="showcase-kicker">Selected signals</p>
          <h2 id="selected-updates">A short auxiliary list, not a second News section.</h2>
          <p>
            Each item points back to the canonical release-signal note, then to the official source.
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
                style={visualStyle(visual)}
              >
                <span className="signal-pill">{visual.signalType}</span>
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
