import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { CommentThread } from "@/components/comments/comment-thread";
import { EditorialByline } from "@/components/editorial-byline";
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
import {
  newsPrimaryKeyword,
  seoMetaDescription,
  seoPageTitle,
  socialImages,
  uniqueKeywords,
} from "@/lib/seo/page-targets";
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
  const pageTitle = seoPageTitle(primaryKeyword);
  const description = seoMetaDescription(item.summary);
  const url = absoluteUrl(`/news/${item.slug}`);

  return {
    title: { absolute: pageTitle },
    description,
    keywords: uniqueKeywords(primaryKeyword, item.secondaryKeywords, item.tags, item.organization),
    alternates: {
      canonical: `/news/${item.slug}`,
    },
    openGraph: {
      type: "article",
      url,
      siteName: site.name,
      title: pageTitle,
      description,
      images: socialImages(`${item.title} source-backed release signal`),
    },
    twitter: {
      card: "summary_large_image",
      site: site.social.twitterHandle,
      creator: site.social.twitterHandle,
      title: pageTitle,
      description,
      images: [site.socialImage],
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
  const relatedModelNames = relatedModels.map((model) => model.name).join(", ");
  const relatedComparisonTitles = relatedComparisons
    .map((comparison) => comparison.title)
    .join(", ");
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
          image: absoluteUrl(site.socialImage),
          mainEntityOfPage: absoluteUrl(`/news/${item.slug}`),
          keywords: keywords.join(", "),
          citation: item.sources.map((source) => source.url),
          author: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
            sameAs: site.sameAs,
          },
          editor: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
          },
          publisher: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
            logo: {
              "@type": "ImageObject",
              url: absoluteUrl(site.socialImage),
            },
          },
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
              name: "Release Signals",
              item: absoluteUrl("/news"),
            },
            {
              "@type": "ListItem",
              position: 3,
              name: item.title,
              item: absoluteUrl(`/news/${item.slug}`),
            },
          ],
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

      <BreadcrumbTrail
        items={[
          { href: "/", label: "Home" },
          { href: "/news", label: "Release Signals" },
          { href: `/news/${item.slug}`, label: item.title },
        ]}
      />

      <EditorialByline
        label="Release signal reviewed"
        published={item.date}
        updated={item.updated ?? item.date}
      />

      <section className="news-detail-layout" style={visualStyle(visual)}>
        <article className="showcase-panel">
          <h2>What changed</h2>
          <p>{item.whatChanged?.[0] ?? item.summary}</p>
          <h2>Context summary</h2>
          <p>{item.summary}</p>
          <h2>Why visitors should care</h2>
          <p>{item.whyItMatters}</p>
          {item.editorialAnalysis ? (
            <>
              <h2>Editorial analysis</h2>
              <p>{item.editorialAnalysis.whyNow}</p>
              <p>{item.editorialAnalysis.userImpact}</p>
            </>
          ) : null}
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

      {item.editorialAnalysis ? (
        <section className="model-detail-layout source-backed-section" style={visualStyle(visual)}>
          <article className="showcase-panel">
            <h2>What to verify next</h2>
            <p>{item.editorialAnalysis.verification}</p>
          </article>
          <article className="showcase-panel">
            <h2>Limits before overclaiming</h2>
            <p>{item.editorialAnalysis.limits}</p>
            {item.overclaimWarning ? <p>{item.overclaimWarning}</p> : null}
          </article>
          <article className="showcase-panel">
            <h2>How to use this signal</h2>
            <p>
              Read this update as a change to{" "}
              {relatedModelNames || "the world model category map"}, not as a
              standalone verdict on the whole market. The stable dossier keeps
              the slower facts: organization, access, source trail, strengths,
              and limitations. The release signal records the narrower event
              and points readers toward the page that should remain useful after
              the news cycle moves on.
            </p>
            <p>
              If the update affects a comparison path
              {relatedComparisonTitles ? ` such as ${relatedComparisonTitles}` : ""},
              use that guide for the practical decision. The source list below
              is kept on the page so readers can verify the claim directly,
              check whether access has changed, and avoid repeating a stronger
              capability statement than the cited material supports.
            </p>
          </article>
        </section>
      ) : null}

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
