import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { SourceList } from "@/components/source-list";
import { comparisons, getComparison } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

type ComparisonPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return comparisons.map((comparison) => ({
    slug: comparison.slug,
  }));
}

export async function generateMetadata({ params }: ComparisonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);

  if (!comparison) {
    return {};
  }

  return {
    title: comparison.title,
    description: comparison.summary,
    alternates: {
      canonical: `/compare/${comparison.slug}`,
    },
  };
}

export default async function ComparisonDetailPage({ params }: ComparisonPageProps) {
  const { slug } = await params;
  const comparison = getComparison(slug);

  if (!comparison) {
    notFound();
  }

  return (
    <main className="page-shell">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: comparison.title,
          description: comparison.summary,
          datePublished: comparison.updated,
          dateModified: comparison.updated,
          mainEntityOfPage: absoluteUrl(`/compare/${comparison.slug}`),
        }}
      />

      <section className="page-hero">
        <p className="eyebrow">Comparison · Updated {comparison.updated}</p>
        <h1>{comparison.title}</h1>
        <p>{comparison.summary}</p>
      </section>

      <section className="single-column">
        <table className="data-table large-table">
          <thead>
            <tr>
              {comparison.columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <article className="article-body">
          <h2>Takeaways</h2>
          <ul className="check-list">
            {comparison.takeaways.map((takeaway) => (
              <li key={takeaway}>{takeaway}</li>
            ))}
          </ul>
        </article>
      </section>

      <SourceList sources={comparison.sources} />
    </main>
  );
}
