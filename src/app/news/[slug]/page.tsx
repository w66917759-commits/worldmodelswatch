import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { getNewsItem, newsItems } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

type NewsPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsItem(slug);

  if (!item) {
    return {};
  }

  return {
    title: item.title,
    description: item.summary,
    alternates: {
      canonical: `/news/${item.slug}`,
    },
  };
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const item = getNewsItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="page-shell">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: item.title,
          description: item.summary,
          datePublished: item.date,
          dateModified: item.updated ?? item.date,
          mainEntityOfPage: absoluteUrl(`/news/${item.slug}`),
          publisher: {
            "@type": "Organization",
            name: "World Models Watch",
          },
        }}
      />

      <section className="page-hero">
        <p className="eyebrow">
          {item.organization} · {item.date}
        </p>
        <h1>{item.title}</h1>
        <p>{item.summary}</p>
      </section>

      <article className="article-body single-column">
        <h2>Why it matters</h2>
        <p>{item.whyItMatters}</p>

        <h2>How World Models Watch classifies it</h2>
        <p>
          This update belongs in the world model map because it changes how the
          category is explained, built, or accessed. The editorial priority is
          not the announcement alone, but the relationship between the release,
          the model category, and adjacent systems.
        </p>

        <div className="tag-row standalone">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </article>

      <SourceList sources={item.sources} />
    </main>
  );
}
