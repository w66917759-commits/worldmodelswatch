import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CommentThread } from "@/components/comments/comment-thread";
import { FaqSummary } from "@/components/faq-summary";
import { JsonLd } from "@/components/json-ld";
import { ShowcaseHero, VisualComparisonPanel, visualStyle } from "@/components/showcase";
import { SourceList } from "@/components/source-list";
import { comparisons, getComparison, getModel, type ModelProfile } from "@/lib/content";
import { comparisonPrimaryKeyword, uniqueKeywords } from "@/lib/seo/page-targets";
import { comparisonVisual, splitComparisonTitle } from "@/lib/showcase";
import { absoluteUrl, site } from "@/lib/site";

type ComparisonPageProps = {
  params: Promise<{ slug: string }>;
};

function findRowValue(rows: string[][], label: string, columnIndex: number) {
  return rows.find((row) => row[0].toLowerCase().includes(label))?.[columnIndex];
}

export const dynamic = "force-dynamic";

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

  const primaryKeyword = comparisonPrimaryKeyword(comparison);
  const url = absoluteUrl(`/compare/${comparison.slug}`);

  return {
    title: primaryKeyword,
    description: comparison.summary,
    keywords: uniqueKeywords(
      primaryKeyword,
      comparison.secondaryKeywords,
      comparison.officialKeywords,
    ),
    alternates: {
      canonical: `/compare/${comparison.slug}`,
    },
    openGraph: {
      type: "article",
      url,
      siteName: site.name,
      title: `${primaryKeyword} | ${site.name}`,
      description: comparison.summary,
    },
    twitter: {
      card: "summary",
      title: `${primaryKeyword} | ${site.name}`,
      description: comparison.summary,
    },
  };
}

export default async function ComparisonDetailPage({ params }: ComparisonPageProps) {
  const { slug } = await params;
  const comparison = getComparison(slug);

  if (!comparison) {
    notFound();
  }

  const primaryKeyword = comparisonPrimaryKeyword(comparison);
  const keywords = uniqueKeywords(
    primaryKeyword,
    comparison.secondaryKeywords,
    comparison.officialKeywords,
  );
  const relatedModels =
    comparison.relatedModelSlugs
      ?.map((modelSlug) => getModel(modelSlug))
      .filter((model): model is ModelProfile => Boolean(model)) ?? [];
  const comparisonFaq = comparison.faq ?? [
    {
      question: "How should this comparison be read?",
      answer:
        "Read this page as a category and source comparison, not as a universal benchmark or availability claim. Product access, API access, and open-source status should be checked against the cited sources.",
    },
    {
      question: "Does this comparison imply every system is a purchasable product?",
      answer:
        "No. World Models Watch separates comparison coverage from product availability, API access, and commercial claims.",
    },
  ];
  const visual = comparisonVisual(comparison);
  const fallbackTitleSides = splitComparisonTitle(comparison.title);
  const titleSides = {
    left: comparison.columns[1] ?? fallbackTitleSides.left,
    right: comparison.columns[2] ?? fallbackTitleSides.right,
  };
  const leftPoints = comparison.rows.slice(0, 4).map((row) => `${row[0]}: ${row[1]}`);
  const rightPoints = comparison.rows.slice(0, 4).map((row) => `${row[0]}: ${row[2] ?? row[1]}`);
  const leftDecision =
    comparison.decisionGuide?.[0] ??
    findRowValue(comparison.rows, "best reader question", 1) ??
    findRowValue(comparison.rows, "primary framing", 1) ??
    comparison.takeaways[0];
  const rightDecision =
    comparison.decisionGuide?.[1] ??
    findRowValue(comparison.rows, "best reader question", 2) ??
    findRowValue(comparison.rows, "primary framing", 2) ??
    comparison.takeaways[1] ??
    comparison.summary;
  const boundaryDecision =
    comparison.decisionGuide?.[2] ??
    comparison.categoryBoundary ??
    comparison.takeaways[2] ??
    "Use the source-backed table before turning either side into a broad product or availability claim.";

  return (
    <main className="page-shell showcase-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: primaryKeyword,
          description: comparison.summary,
          datePublished: comparison.updated,
          dateModified: comparison.updated,
          mainEntityOfPage: absoluteUrl(`/compare/${comparison.slug}`),
          keywords: keywords.join(", "),
          citation: comparison.sourceUrls ?? comparison.sources.map((source) => source.url),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: absoluteUrl("/"),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Decision Guides",
              item: absoluteUrl("/compare"),
            },
            {
              "@type": "ListItem",
              position: 3,
              name: primaryKeyword,
              item: absoluteUrl(`/compare/${comparison.slug}`),
            },
          ],
        }}
      />
      {relatedModels.length > 0 ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: primaryKeyword,
            itemListElement: relatedModels.map((model, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: model.name,
              url: absoluteUrl(`/models/${model.slug}`),
            })),
          }}
        />
      ) : null}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: comparisonFaq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />

      <ShowcaseHero
        description={comparison.decisionQuestion}
        eyebrow={`Decision guide · Updated ${comparison.updated}`}
        meta={[
          comparison.guideType.replace("-", " "),
          titleSides.left,
          titleSides.right,
        ]}
        primaryCta={
          relatedModels[0]
            ? { href: `/models/${relatedModels[0].slug}`, label: relatedModels[0].name }
            : { href: "/models", label: "Company map" }
        }
        secondaryCta={{ href: "/compare", label: "All guides" }}
        title={`Decision guide: ${primaryKeyword}`}
        visual={visual}
      />

      <VisualComparisonPanel
        left={{
          label: "Side A",
          points: leftPoints,
          title: titleSides.left,
        }}
        right={{
          label: "Side B",
          points: rightPoints,
          title: titleSides.right,
        }}
        summary={comparison.decisionQuestion}
        title="Choose by the job, then check the sources."
        visual={visual}
      />

      <section className="model-detail-layout" style={visualStyle(visual)}>
        <article className="showcase-panel">
          <h2>Choose {titleSides.left} if</h2>
          <p>{leftDecision}</p>

          <h2>Choose {titleSides.right} if</h2>
          <p>{rightDecision}</p>
        </article>

        <article className="showcase-panel">
          <h2>Check the boundary</h2>
          <p>{boundaryDecision}</p>

          {relatedModels.length > 0 ? (
            <>
              <h2>Stable profiles</h2>
              <div className="tag-row standalone">
                {relatedModels.slice(0, 4).map((model) => (
                  <Link href={`/models/${model.slug}`} key={model.slug}>
                    {model.name}
                  </Link>
                ))}
              </div>
            </>
          ) : null}
        </article>
      </section>

      <section className="model-detail-layout" style={visualStyle(visual)}>
        <article className="showcase-panel">
          <h2>What this guide decides</h2>
          <ul>
            {comparison.takeaways.map((takeaway) => (
              <li key={takeaway}>{takeaway}</li>
            ))}
          </ul>
        </article>

        <article className="showcase-panel">
          <h2>Use cases</h2>
          <ul>
            {(comparison.decisionGuide ?? [
              `Open ${titleSides.left} when that side better matches the visual outcome you want.`,
              `Open ${titleSides.right} when the second path better matches the product or research signal you are checking.`,
              "Use the table below for source-backed details after the visual decision.",
            ]).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {comparison.categoryBoundary ? <p>{comparison.categoryBoundary}</p> : null}
        </article>
      </section>

      <section className="source-backed-section" style={visualStyle(visual)}>
        <div className="showcase-section-heading">
          <p className="showcase-kicker">Detailed table</p>
          <h2>The citeable differences stay here.</h2>
          <p>
            The table is still available for source-backed comparison, but it no longer owns the first screen.
          </p>
        </div>
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

        <article className="showcase-panel">
          <h2>FAQ</h2>
          {comparisonFaq.map((item) => (
            <section className="mini-faq" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </section>
          ))}
        </article>
      </section>

      <SourceList sources={comparison.sources} />

      <FaqSummary
        description="The FAQ explains how comparison pages keep reported, official, product, and research signals separate."
        title="Comparison FAQ"
      />

      <CommentThread targetPath={`/compare/${comparison.slug}`} />
    </main>
  );
}
