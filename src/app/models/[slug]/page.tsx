import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BreadcrumbTrail } from "@/components/breadcrumb-trail";
import { CommentThread } from "@/components/comments/comment-thread";
import { EditorialByline } from "@/components/editorial-byline";
import { FaqSummary } from "@/components/faq-summary";
import { JsonLd } from "@/components/json-ld";
import { ModelUseCaseGrid } from "@/components/model-use-case-grid";
import { SceneExplainer, ShowcaseHero, visualStyle } from "@/components/showcase";
import { SourceList } from "@/components/source-list";
import { getWorldByModelSlug, getWorldPrimaryAction } from "@/data/worldsData";
import {
  comparisons,
  getModel,
  getNewsItem,
  longTailPages,
  modelProfiles,
  type NewsItem,
} from "@/lib/content";
import {
  modelPrimaryKeyword,
  seoMetaDescription,
  seoPageTitle,
  socialImages,
  uniqueKeywords,
} from "@/lib/seo/page-targets";
import { modelVisual } from "@/lib/showcase";
import { absoluteUrl, site } from "@/lib/site";

type ModelPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

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

  const primaryKeyword = modelPrimaryKeyword(model);
  const pageTitle = seoPageTitle(primaryKeyword);
  const description = seoMetaDescription(model.summary);
  const url = absoluteUrl(`/models/${model.slug}`);

  return {
    title: { absolute: pageTitle },
    description,
    keywords: uniqueKeywords(primaryKeyword, model.secondaryKeywords, model.officialKeywords),
    alternates: {
      canonical: `/models/${model.slug}`,
    },
    openGraph: {
      type: "article",
      url,
      siteName: site.name,
      title: pageTitle,
      description,
      images: socialImages(`${model.name} source-backed model profile`),
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

export default async function ModelDetailPage({ params }: ModelPageProps) {
  const { slug } = await params;
  const model = getModel(slug);

  if (!model) {
    notFound();
  }

  const primaryKeyword = modelPrimaryKeyword(model);
  const keywords = uniqueKeywords(
    primaryKeyword,
    model.secondaryKeywords,
    model.officialKeywords,
  );
  const relatedComparisons = comparisons.filter((comparison) =>
    comparison.relatedModelSlugs?.includes(model.slug),
  ).slice(0, 3);
  const relatedSignals =
    model.relatedNewsSlugs
      ?.map((newsSlug) => getNewsItem(newsSlug))
      .filter((item): item is NewsItem => Boolean(item))
      .slice(0, 3) ?? [];
  const visual = { ...modelVisual(model), visualTitle: primaryKeyword };
  const sceneImages = visual.stickerImages ?? [visual.cardImage ?? visual.backgroundImage ?? visual.heroImage].filter(Boolean);
  const officialSource = model.sources[0];
  const world = getWorldByModelSlug(model.slug);
  const primaryAction = world ? getWorldPrimaryAction(world) : undefined;
  const bestFor = model.bestFor ?? [
    "Visitors who want the fastest visual handle on this model lane.",
    "Creators comparing whether the output feels like a clip, a place, or a controllable world.",
    "Readers who need status and sources after the first impression.",
  ];
  const notFor = model.notFor ?? [
    `Readers who need a confirmed general-purpose product outside ${model.organization}'s documented access surface.`,
    "Readers who want claims that go beyond the cited source trail, such as unverified pricing, unrestricted API access, or benchmark parity.",
  ];
  const evidenceLevel =
    model.evidenceLevel ??
    (model.sourceUrls?.length || model.sources.length > 1
      ? "Primary-source dossier with multiple public references."
      : "Primary-source dossier with a limited public source trail.");
  const updateHistory = [
    {
      date: model.date,
      label: "First tracked source",
      detail: `${model.name} entered the site as a ${model.category.toLowerCase()} from ${model.organization}.`,
    },
    ...(model.updated && model.updated !== model.date
      ? [
          {
            date: model.updated,
            label: "Latest dossier review",
            detail:
              "The page was reviewed for access status, source confidence, category boundary, and related comparison links.",
          },
        ]
      : []),
    ...relatedSignals.map((item) => ({
      date: item.updated ?? item.date,
      label: item.signalType,
      detail: item.whatChanged?.[0] ?? item.summary,
    })),
  ];
  const evaluationNotes = model.evaluationNotes ?? [
    `${model.name} is useful on this site when its public sources clarify a specific lane: ${model.focus}`,
    `The page should not be read as a benchmark verdict; it is a source-backed orientation page with strengths, limits, and links to primary material.`,
  ];
  const relatedLongTailPages = longTailPages.filter((page) =>
    page.relatedModelSlugs.includes(model.slug),
  );
  const hasToolDetails = Boolean(
    model.pricing ||
      model.platforms?.length ||
      model.outputFormats?.length ||
      model.compatibility?.length,
  );

  return (
    <main className="page-shell showcase-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: primaryKeyword,
          description: model.summary,
          datePublished: model.date,
          dateModified: model.updated ?? model.date,
          image: absoluteUrl(site.socialImage),
          mainEntityOfPage: absoluteUrl(`/models/${model.slug}`),
          keywords: keywords.join(", "),
          citation: model.sourceUrls ?? model.sources.map((source) => source.url),
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
          about: {
            "@type": "Thing",
            name: model.name,
            description: model.summary,
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
              name: "Company Map",
              item: absoluteUrl("/models"),
            },
            {
              "@type": "ListItem",
              position: 3,
              name: model.name,
              item: absoluteUrl(`/models/${model.slug}`),
            },
          ],
        }}
      />
      {model.schemaType === "SoftwareApplication" ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: model.name,
            applicationCategory: model.category,
            operatingSystem: model.platforms?.join(", ") ?? "Web",
            description: model.summary,
            url: absoluteUrl(`/models/${model.slug}`),
            sameAs: model.sourceUrls ?? model.sources.map((source) => source.url),
            creator: {
              "@type": "Organization",
              name: model.organization,
            },
            offers: model.pricing
              ? {
                  "@type": "Offer",
                  name: model.pricing.label,
                  description: model.pricing.note,
                  url: model.pricing.sourceUrl,
                }
              : undefined,
          }}
        />
      ) : null}

      <ShowcaseHero
        description={model.summary}
        eyebrow={model.category}
        meta={[model.organization, model.status, model.availability]}
        primaryCta={
          primaryAction
            ? { href: primaryAction.href, label: primaryAction.label, external: true }
            : officialSource
            ? { href: officialSource.url, label: "Official demo", external: true }
            : undefined
        }
        secondaryCta={{ href: "/models", label: "Company map" }}
        title={primaryKeyword}
        visual={visual}
      />

      <BreadcrumbTrail
        items={[
          { href: "/", label: "Home" },
          { href: "/models", label: "Company Map" },
          { href: `/models/${model.slug}`, label: model.name },
        ]}
      />

      <EditorialByline
        label="Model dossier reviewed"
        published={model.date}
        updated={model.updated ?? model.date}
      />

      {world ? (
        <ModelUseCaseGrid
          worlds={[world]}
          compact
          eyebrow="What people can do"
          title={`${world.shortName} in output, use case, access, and action.`}
          description="Start from the practical surface before reading sources and boundaries."
        />
      ) : null}

      <section
        className="model-detail-layout"
        aria-label={`${model.name} showcase`}
        style={visualStyle(visual)}
      >
        <article className="showcase-panel">
          <h2>What this lets people do</h2>
          <p>{visual.consumerHook ?? model.summary}</p>
          <p>{model.focus}</p>
        </article>

        <aside className="fact-strip" aria-label="Model facts">
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
        </aside>
      </section>

      {hasToolDetails ? (
        <section className="model-detail-layout source-backed-section" style={visualStyle(visual)}>
          <article className="showcase-panel">
            {model.pricing ? (
              <>
                <h2>Pricing and access</h2>
                <p>{model.pricing.note}</p>
                {model.pricing.sourceUrl ? (
                  <p>
                    Source:{" "}
                    <a href={model.pricing.sourceUrl} rel="noreferrer" target="_blank">
                      {model.pricing.sourceLabel ?? model.pricing.sourceUrl}
                    </a>
                  </p>
                ) : null}
              </>
            ) : null}

            {model.platforms?.length ? (
              <>
                <h2>Platforms</h2>
                <div className="tag-row standalone">
                  {model.platforms.map((platform) => (
                    <span key={platform}>{platform}</span>
                  ))}
                </div>
              </>
            ) : null}
          </article>

          <article className="showcase-panel">
            {model.outputFormats?.length ? (
              <>
                <h2>Output formats</h2>
                <ul>
                  {model.outputFormats.map((format) => (
                    <li key={format}>{format}</li>
                  ))}
                </ul>
              </>
            ) : null}

            {model.compatibility?.length ? (
              <>
                <h2>Compatibility</h2>
                <div className="tag-row standalone">
                  {model.compatibility.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </>
            ) : null}
          </article>
        </section>
      ) : null}

      <SceneExplainer
        description="The page starts with the experience, then moves toward source-backed details."
        steps={[
          {
            eyebrow: "First impression",
            title: "A visible world",
            body: model.summary,
            image: sceneImages[0],
            accentColor: visual.accentColor,
          },
          {
            eyebrow: "Capability",
            title: "Why it stands out",
            body: model.strengths[0] ?? model.focus,
            image: sceneImages[1] ?? sceneImages[0],
            accentColor: visual.secondaryAccentColor,
          },
          {
            eyebrow: "Boundary",
            title: "What not to overclaim",
            body: model.limits[0] ?? model.categoryBoundary ?? model.availability,
            image: sceneImages[2] ?? sceneImages[0],
            accentColor: "#ff7fa6",
          },
        ]}
        title="Three frames before the source list."
      />

      <section className="model-detail-layout source-backed-section" style={visualStyle(visual)}>
        <article className="showcase-panel">
          <h2>Good reasons to open this page</h2>
          <ul>
            {bestFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Strengths</h2>
          <ul>
            {model.strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="showcase-panel">
          <h2>Limits and source boundary</h2>
          <ul>
            {model.limits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {model.categoryBoundary ? <p>{model.categoryBoundary}</p> : null}

          {relatedComparisons.length > 0 ? (
            <>
              <h2>Decision guides</h2>
              <ul>
                {relatedComparisons.map((comparison) => (
                  <li key={comparison.slug}>
                    <Link href={`/compare/${comparison.slug}`}>{comparison.title}</Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {model.officialKeywords ? (
            <div className="tag-row standalone">
              {model.officialKeywords.slice(0, 8).map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          ) : null}
        </article>
      </section>

      <section className="model-detail-layout source-backed-section" style={visualStyle(visual)}>
        <article className="showcase-panel">
          <h2>Evidence and update history</h2>
          <p>{evidenceLevel}</p>
          <ol>
            {updateHistory.map((item) => (
              <li key={`${item.date}-${item.label}`}>
                <strong>{item.date} · {item.label}</strong>
                <span>{item.detail}</span>
              </li>
            ))}
          </ol>
        </article>

        <article className="showcase-panel">
          <h2>Use it for, not for</h2>
          <h3>Use it for</h3>
          <ul>
            {evaluationNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Do not use it for</h3>
          <ul>
            {notFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      {model.alternatives?.length || model.workflowSteps?.length || relatedLongTailPages.length ? (
        <section className="model-detail-layout source-backed-section" style={visualStyle(visual)}>
          <article className="showcase-panel">
            {model.alternatives?.length ? (
              <>
                <h2>Best alternatives</h2>
                <div className="narrative-link-grid">
                  {model.alternatives.map((alternative) => (
                    <Link className="narrative-link-card" href={alternative.href} key={alternative.href}>
                      <strong>{alternative.label}</strong>
                      <span>{alternative.description}</span>
                    </Link>
                  ))}
                </div>
              </>
            ) : null}

            {relatedLongTailPages.length ? (
              <>
                <h2>Related workflows</h2>
                <div className="tag-row standalone">
                  {relatedLongTailPages.map((page) => (
                    <Link href={page.route} key={page.route}>
                      {page.shortTitle}
                    </Link>
                  ))}
                </div>
              </>
            ) : null}
          </article>

          {model.workflowSteps?.length ? (
            <article className="showcase-panel">
              <h2>Quick workflow</h2>
              <ol>
                {model.workflowSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>
          ) : null}
        </section>
      ) : null}

      {relatedSignals.length > 0 ? (
        <section className="source-backed-section" style={visualStyle(visual)}>
          <div className="showcase-section-heading">
            <p className="showcase-kicker">Release signals</p>
            <h2>Only the selected updates that affect this profile.</h2>
            <p>
              The company profile stays stable. These short signals explain what changed and point back to sources.
            </p>
          </div>
          <div className="update-grid">
            {relatedSignals.map((item) => (
              <Link
                className="update-card"
                href={`/news/${item.slug}`}
                key={item.slug}
              >
                <span className="signal-pill">{item.signalType}</span>
                <h2>{item.title}</h2>
                <p>{item.whatChanged?.[0] ?? item.summary}</p>
                <div className="update-card-footer">
                  <span>{item.date}</span>
                  <span>{item.sourceConfidence}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <SourceList sources={model.sources} />

      <FaqSummary
        description="Use these notes to keep model comments grounded in official sources and careful category boundaries."
        title="Dossier FAQ"
      />

      <CommentThread targetPath={`/models/${model.slug}`} />
    </main>
  );
}
