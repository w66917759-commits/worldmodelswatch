import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { seoMetaDescription, seoPageTitle } from "@/lib/seo/page-targets";
import { publicSitemapEntries, publicSitemapGroups } from "@/lib/seo/sitemap-entries";
import { absoluteUrl, site } from "@/lib/site";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string | string[];
  }>;
};

export const dynamic = "force-dynamic";

const searchDescription =
  "Search World Models Watch for model dossiers, release signals, comparison guides, glossary entries, and source-backed topic pages.";

export const metadata: Metadata = {
  title: { absolute: seoPageTitle("World Models Watch search") },
  description: seoMetaDescription(searchDescription),
  alternates: {
    canonical: "/search",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/search"),
    siteName: site.name,
    title: seoPageTitle("World Models Watch search"),
    description: seoMetaDescription(searchDescription),
    images: [
      {
        url: site.socialImage,
        width: 1280,
        height: 640,
        alt: site.socialImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: site.social.twitterHandle,
    creator: site.social.twitterHandle,
    title: seoPageTitle("World Models Watch search"),
    description: seoMetaDescription(searchDescription),
    images: [site.socialImage],
  },
};

function normalizeQuery(value?: string | string[]) {
  const raw = Array.isArray(value) ? value[0] : value;

  return raw?.replace(/\s+/g, " ").trim() ?? "";
}

function matchEntry(query: string, entry: (typeof publicSitemapEntries)[number]) {
  const haystack = `${entry.title} ${entry.description} ${entry.route}`.toLowerCase();

  return query
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .every((token) => haystack.includes(token));
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = normalizeQuery(params.q);
  const results = query
    ? publicSitemapEntries.filter((entry) => matchEntry(query, entry))
    : publicSitemapEntries.slice(0, 18);

  return (
    <PageShell
      className="showcase-page utility-page search-page"
      eyebrow="Search"
      title="Search World Models Watch"
      description={searchDescription}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SearchAction",
          target: `${absoluteUrl("/search")}?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        }}
      />

      <form className="site-search-form" action="/search">
        <label htmlFor="site-search">Search public pages</label>
        <div>
          <input
            id="site-search"
            name="q"
            type="search"
            defaultValue={query}
            placeholder="Search models, news, comparisons, concepts..."
          />
          <button type="submit">
            <Search size={18} aria-hidden="true" />
            Search
          </button>
        </div>
      </form>

      <section className="source-backed-section" aria-labelledby="search-results">
        <div className="showcase-section-heading">
          <p className="showcase-kicker">{query ? "Results" : "Start here"}</p>
          <h2 id="search-results">
            {query
              ? `${results.length} public pages matched "${query}".`
              : "Search uses the public sitemap as its index."}
          </h2>
          <p>
            Results include public model dossiers, release signals, decision guides,
            glossary entries, legal pages, and topic hubs.
          </p>
        </div>

        <div className="sitemap-link-grid search-result-grid">
          {results.map((entry) => (
            <Link className="sitemap-link-card" href={entry.route} key={entry.route}>
              <strong>{entry.title}</strong>
              <span>{entry.description}</span>
              <small>{entry.route}</small>
            </Link>
          ))}
        </div>

        {results.length === 0 ? (
          <div className="search-empty-state">
            <p>No public page matched that query.</p>
            <Link className="button secondary" href="/sitemap">
              Open sitemap
            </Link>
          </div>
        ) : null}
      </section>

      {!query ? (
        <section className="source-backed-section" aria-labelledby="search-groups">
          <div className="showcase-section-heading">
            <p className="showcase-kicker">Indexed groups</p>
            <h2 id="search-groups">The search surface mirrors the crawlable site structure.</h2>
          </div>

          <div className="compact-info-grid">
            {publicSitemapGroups.map((group) => (
              <article className="compact-info-card" key={group.id}>
                <span>{group.entries.length} URLs</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </PageShell>
  );
}
