import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CommentThread } from "@/components/comments/comment-thread";
import { FaqSummary } from "@/components/faq-summary";
import { JsonLd } from "@/components/json-ld";
import { SceneExplainer, ShowcaseHero } from "@/components/showcase";
import { SourceList } from "@/components/source-list";
import { comparisons, getNewsItem, modelProfiles, newsItems } from "@/lib/content";
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

function textMatchesKeyword(text: string, keyword: string) {
  return text.toLowerCase().includes(keyword.toLowerCase());
}

function detectMentionedModels(text: string) {
  return modelProfiles.filter((model) => {
    const keywords = [
      model.name,
      model.organization,
      model.primaryKeyword,
      ...(model.secondaryKeywords ?? []),
      ...(model.officialKeywords ?? []),
    ].filter(Boolean) as string[];

    return keywords.some((keyword) => textMatchesKeyword(text, keyword));
  });
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
  const articleText = `${item.title} ${item.organization} ${item.summary} ${item.whyItMatters} ${item.tags.join(" ")}`;
  const mentionedModels = detectMentionedModels(articleText);
  const mentionedModelSlugs = new Set(mentionedModels.map((model) => model.slug));
  const relatedComparisons = comparisons
    .filter((comparison) =>
      comparison.relatedModelSlugs?.some((modelSlug) => mentionedModelSlugs.has(modelSlug)),
    )
    .slice(0, 4);
  const visual = newsVisual(item);
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
        description={item.summary}
        eyebrow={`${visual.signalType} · ${item.organization}`}
        meta={[item.date, item.organization, ...item.tags.slice(0, 2)]}
        primaryCta={leadSource ? { href: leadSource.url, label: "Open source", external: true } : undefined}
        secondaryCta={{ href: "/news", label: "All updates" }}
        title={primaryKeyword}
        visual={visual}
      />

      <section className="news-detail-layout">
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
            <strong>{visual.signalType}</strong>
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
            <strong>{item.sourceConfidence ?? "Source-backed update"}</strong>
          </div>
        </aside>
      </section>

      <SceneExplainer
        description="The update page stays short up top, then sends readers into models, comparisons, or official sources."
        steps={[
          {
            eyebrow: "Signal",
            title: visual.signalType,
            body: item.summary,
            accentColor: visual.accentColor,
          },
          {
            eyebrow: "Context",
            title: "Where it fits",
            body:
              item.availabilityNote ??
              "It changes how the category is explained, built, accessed, or compared.",
            accentColor: visual.secondaryAccentColor,
          },
          {
            eyebrow: "Next click",
            title: "Open the adjacent page",
            body:
              mentionedModels[0]?.summary ??
              relatedComparisons[0]?.summary ??
              "Use the sources below to keep the update grounded.",
            href:
              mentionedModels[0] ? `/models/${mentionedModels[0].slug}` : relatedComparisons[0] ? `/compare/${relatedComparisons[0].slug}` : undefined,
            cta: mentionedModels[0] ? mentionedModels[0].name : relatedComparisons[0]?.title,
            accentColor: "#ff7fa6",
          },
        ]}
        title="Three beats, then the receipts."
      />

      {mentionedModels.length > 0 || relatedComparisons.length > 0 ? (
        <section className="source-backed-section">
          <div className="showcase-section-heading">
            <p className="showcase-kicker">Related context</p>
            <h2>Follow the update into the model wall.</h2>
          </div>
          {mentionedModels.length > 0 ? (
            <div className="tag-row standalone">
              {mentionedModels.slice(0, 6).map((model) => (
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
