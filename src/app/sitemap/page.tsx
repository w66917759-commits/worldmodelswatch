import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { metadataForRoute } from "@/lib/seo/page-targets";
import { publicSitemapEntries, publicSitemapGroups } from "@/lib/seo/sitemap-entries";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export const metadata: Metadata = metadataForRoute("/sitemap");

function formatLastModified(date: Date) {
  return date.toISOString().slice(0, 10);
}

export default function SitemapPage() {
  return (
    <PageShell
      className="compact-page showcase-page utility-page sitemap-page"
      description="Browse every public World Models Watch page that is intended for discovery, including static hubs, model dossiers, release signals, and comparison guides."
      eyebrow="Crawl index"
      title="World Models Watch sitemap"
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "World Models Watch public sitemap",
          itemListElement: publicSitemapEntries.map((entry, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: entry.title,
            url: entry.url,
          })),
        }}
      />

      <section className="source-backed-section sitemap-summary" aria-label="Sitemap files">
        <Link className="button primary" href="/sitemap.xml">
          Open XML sitemap
        </Link>
        <a className="button secondary" href={absoluteUrl("/robots.txt")}>
          Open robots.txt
        </a>
      </section>

      {publicSitemapGroups.map((group) => (
        <section className="source-backed-section" id={group.id} key={group.id}>
          <div className="showcase-section-heading">
            <p className="showcase-kicker">{group.title}</p>
            <h2>{group.description}</h2>
            <p>{group.entries.length} public URLs are listed in this section.</p>
          </div>

          <div className="sitemap-link-grid">
            {group.entries.map((entry) => (
              <Link className="sitemap-link-card" href={entry.route} key={entry.route}>
                <strong>{entry.title}</strong>
                <span>{entry.description}</span>
                <small>
                  {entry.route} · Updated {formatLastModified(entry.lastModified)}
                </small>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </PageShell>
  );
}
