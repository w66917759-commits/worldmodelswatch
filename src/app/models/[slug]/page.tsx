import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { getModel, modelProfiles } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

type ModelPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return modelProfiles.map((model) => ({
    slug: model.slug,
  }));
}

export async function generateMetadata({ params }: ModelPageProps): Promise<Metadata> {
  const { slug } = await params;
  const model = getModel(slug);

  if (!model) {
    return {};
  }

  return {
    title: `${model.name} Dossier`,
    description: model.summary,
    alternates: {
      canonical: `/models/${model.slug}`,
    },
  };
}

export default async function ModelDetailPage({ params }: ModelPageProps) {
  const { slug } = await params;
  const model = getModel(slug);

  if (!model) {
    notFound();
  }

  return (
    <main className="page-shell">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: `${model.name} Dossier`,
          description: model.summary,
          datePublished: model.date,
          dateModified: model.updated ?? model.date,
          mainEntityOfPage: absoluteUrl(`/models/${model.slug}`),
          publisher: {
            "@type": "Organization",
            name: "World Models Watch",
          },
        }}
      />

      <section className="page-hero">
        <p className="eyebrow">{model.category}</p>
        <h1>{model.name}</h1>
        <p>{model.summary}</p>
      </section>

      <section className="detail-grid">
        <div className="fact-table">
          <div>
            <span>Organization</span>
            <strong>{model.organization}</strong>
          </div>
          <div>
            <span>Date</span>
            <strong>{model.date}</strong>
          </div>
          <div>
            <span>Status</span>
            <strong>{model.status}</strong>
          </div>
          <div>
            <span>Availability</span>
            <strong>{model.availability}</strong>
          </div>
          <div>
            <span>Focus</span>
            <strong>{model.focus}</strong>
          </div>
        </div>

        <article className="article-body detail-body">
          <h2>Why this model matters</h2>
          <p>{model.summary}</p>

          <h2>Strengths</h2>
          <ul className="check-list">
            {model.strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Limits to track</h2>
          <ul className="check-list caution">
            {model.limits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <SourceList sources={model.sources} />
    </main>
  );
}
