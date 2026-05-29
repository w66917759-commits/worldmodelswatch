import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { CalendarDays, Tag } from "lucide-react";

import { ShowcaseHero } from "@/components/showcase";
import { newsItems } from "@/lib/content";
import { newsVisual, pageVisuals } from "@/lib/showcase";

export const metadata: Metadata = {
  title: "World Model Updates",
  description:
    "Visual product, research, open-source, and reported updates in the world model category.",
  alternates: {
    canonical: "/news",
  },
};

export default function NewsPage() {
  const sortedNewsItems = [...newsItems].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="page-shell showcase-page">
      <ShowcaseHero
        description="A faster way to scan what changed: product surfaces, research drops, open-source releases, and reported consumer signals."
        eyebrow="Update signal"
        meta={["Product", "Research", "Open source", "Reported"]}
        primaryCta={{ href: "/timeline", label: "Open timeline" }}
        secondaryCta={{ href: "/research-insights", label: "Signal room" }}
        title="World model updates that look like a release radar."
        visual={pageVisuals.news}
      />

      <section className="update-showcase-section" aria-labelledby="latest-updates">
        <div className="showcase-section-heading">
          <p className="showcase-kicker">Latest cards</p>
          <h2 id="latest-updates">Scan by signal type, then open the source-backed note.</h2>
          <p>
            Each card keeps the update short on the surface and puts citations on the detail page.
          </p>
        </div>

        <div className="update-grid">
        {sortedNewsItems.map((item) => (
          <Link
            className="update-card"
            href={`/news/${item.slug}`}
            key={item.slug}
            style={
              {
                "--showcase-accent": newsVisual(item).accentColor,
                "--showcase-secondary": newsVisual(item).secondaryAccentColor,
              } as CSSProperties
            }
          >
            <span className="signal-pill">{newsVisual(item).signalType}</span>
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
          </Link>
        ))}
        </div>
      </section>
    </main>
  );
}
