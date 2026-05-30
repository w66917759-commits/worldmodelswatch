import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CommentThread } from "@/components/comments/comment-thread";
import { FaqSummary } from "@/components/faq-summary";
import { JsonLd } from "@/components/json-ld";
import { SceneExplainer, ShowcaseHero, visualStyle } from "@/components/showcase";
import { SourceList } from "@/components/source-list";
import {
  getComparison,
  getModel,
  getNewsItem,
  newsItems,
  type Comparison,
  type ModelProfile,
} from "@/lib/content";
import { newsPrimaryKeyword, uniqueKeywords } from "@/lib/seo/page-targets";
import { newsVisual } from "@/lib/showcase";
import { absoluteUrl, site } from "@/lib/site";

type NewsPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

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

  const primaryKeyword = newsPrimaryKeyword(item);
  const url = absoluteUrl(`/news/${item.slug}`);

  return {
    title: primaryKeyword,
    description: item.summary,
    keywords: uniqueKeywords(primaryKeyword, item.secondaryKeywords, item.tags, item.organization),
    alternates: {
      canonical: `/news/${item.slug}`,
    },
    openGraph: {
      type: "article",
      url,
      siteName: site.name,
      title: `${primaryKeyword} | ${site.name}`,
      description: item.summary,
    },
    twitter: {
      card: "summary",
      title: `${primaryKeyword} | ${site.name}`,
      description: item.summary,
    },
  };
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const item = getNewsItem(slug);

  if (!item) {
    notFound();
  }

  const primaryKeyword = newsPrimaryKeyword(item);
  const keywords = uniqueKeywords(
    primaryKeyword,
    item.secondaryKeywords,
    item.tags,
    item.organization,
  );
  const relatedModels = item.relatedModelSlugs
    .map((modelSlug) => getModel(modelSlug))
    .filter((model): model is ModelProfile => Boolean(model));
  const relatedComparisons = item.relatedComparisonSlugs
    .map((comparisonSlug) => getComparison(comparisonSlug))
    .filter((comparison): comparison is Comparison => Boolean(comparison));
  const visual = newsVisual(item);
  const sceneImages = visual.stickerImages ?? [visual.cardImage ?? visual.backgroundImage ?? visual.heroImage].filter(Boolean);
  const leadSource = item.sources[0];

  return (
    <main className="page-shell showcase-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: primaryKeyword,
          description: item.summary,
          datePublished: item.date,
          dateModified: item.updated ?? item.date,
          mainEntityOfPage: absoluteUrl(`/news/${item.slug}`),
          keywords: keywords.join(", "),
          publisher: {
            "@type": "Organization",
            name: "World Models Watch",
          },
        }}
      />

      <ShowcaseHero
        description={item.whatChanged?.[0] ?? item.summary}
        eyebrow={`${item.signalType} · ${item.sourceConfidence}`}
        meta={[item.date, item.organization, item.impactLevel]}
        primaryCta={leadSource ? { href: leadSource.url, label: "Open source", external: true } : undefined}
        secondaryCta={{ href: "/news", label: "All signals" }}
        title={primaryKeyword}
        visual={visual}
      />

      <section className="news-detail-layout" style={visualStyle(visual)}>
        <article className="showcase-panel">
          <h2>What changed</h2>
          <p>{item.whatChanged?.[0] ?? item.summary}</p>
          <h2>Why visitors should care</h2>
          <p>{item.whyItMatters}</p>
          <div className="tag-row standalone">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>

        <aside className="fact-strip" aria-label="Update facts">
          <div>
            <span>Signal</span>
            <strong>{item.signalType}</strong>
          </div>
          <div>
            <span>Impact</span>
            <strong>{item.impactLevel}</strong>
          </div>
          <div>
            <span>Organization</span>
            <strong>{item.organization}</strong>
          </div>
          <div>
            <span>Date</span>
            <strong>{item.date}</strong>
          </div>
          <div>
            <span>Source confidence</span>
            <strong>{item.sourceConfidence}</strong>
          </div>
        </aside>
      </section>

      <SceneExplainer
        description="The release signal stays short, then sends readers into stable context or official sources."
        steps={[
          {
            eyebrow: "Signal",
            title: item.signalType,
            body: item.whatChanged?.[0] ?? item.summary,
            image: sceneImages[0],
            accentColor: visual.accentColor,
          },
          {
            eyebrow: "Confidence",
            title: item.sourceConfidence,
            body: item.availabilityNote ?? "This signal is tied to the cited source and should not be stretched beyond it.",
            image: sceneImages[1] ?? sceneImages[0],
            accentColor: visual.secondaryAccentColor,
          },
          {
            eyebrow: "Next click",
            title: "Open stable context",
            body:
              relatedModels[0]
                ? `Open the ${relatedModels[0].name} profile for stable status, availability, and source boundaries.`
                : relatedComparisons[0]
                  ? `Open ${relatedComparisons[0].title} for the decision guide this signal affects.`
                  : "Use the official sources below to keep the update grounded.",
            image: sceneImages[2] ?? sceneImages[0],
            href:
              relatedModels[0] ? `/models/${relatedModels[0].slug}` : relatedComparisons[0] ? `/compare/${relatedComparisons[0].slug}` : undefined,
            cta: relatedModels[0] ? relatedModels[0].name : relatedComparisons[0]?.title,
            accentColor: "#ff7fa6",
          },
        ]}
        title="Three beats, then the receipts."
      />

      {relatedModels.length > 0 || relatedComparisons.length > 0 ? (
        <section className="source-backed-section" style={visualStyle(visual)}>
          <div className="showcase-section-heading">
            <p className="showcase-kicker">Related context</p>
            <h2>Follow this signal into stable pages.</h2>
          </div>
          {relatedModels.length > 0 ? (
            <div className="tag-row standalone">
              {relatedModels.slice(0, 6).map((model) => (
                <Link href={`/models/${model.slug}`} key={model.slug}>
                  {model.name}
                </Link>
              ))}
            </div>
          ) : null}

          {relatedComparisons.length > 0 ? (
            <div className="tag-row standalone">
              {relatedComparisons.map((comparison) => (
                <Link href={`/compare/${comparison.slug}`} key={comparison.slug}>
                  {comparison.title}
                </Link>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}

      <SourceList sources={item.sources} />

      <FaqSummary
        description="A compact guide to source confidence, category boundaries, and reader participation before adding a note."
        title="Before you comment"
      />

      <CommentThread targetPath={`/news/${item.slug}`} />
    </main>
  );
}
