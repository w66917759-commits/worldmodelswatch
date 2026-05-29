import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CommentThread } from "@/components/comments/comment-thread";
import { FaqSummary } from "@/components/faq-summary";
import { JsonLd } from "@/components/json-ld";
import { SceneExplainer, ShowcaseHero } from "@/components/showcase";
import { SourceList } from "@/components/source-list";
import { comparisons, getModel, modelProfiles } from "@/lib/content";
import { modelVisual } from "@/lib/showcase";
import { absoluteUrl } from "@/lib/site";

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

  return {
    title: `${model.name} Dossier`,
    description: model.summary,
    keywords: [
      model.primaryKeyword,
      ...(model.secondaryKeywords ?? []),
      ...(model.officialKeywords ?? []),
    ].filter(Boolean) as string[],
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

  const keywords = [
    model.primaryKeyword,
    ...(model.secondaryKeywords ?? []),
    ...(model.officialKeywords ?? []),
  ].filter(Boolean);
  const relatedComparisons = comparisons.filter((comparison) =>
    comparison.relatedModelSlugs?.includes(model.slug),
  );
  const visual = modelVisual(model);
  const officialSource = model.sources[0];
  const bestFor = model.bestFor ?? [
    "Visitors who want the fastest visual handle on this model lane.",
    "Creators comparing whether the output feels like a clip, a place, or a controllable world.",
    "Readers who need status and sources after the first impression.",
  ];

  return (
    <main className="page-shell showcase-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: `${model.name} Dossier`,
          description: model.summary,
          datePublished: model.date,
          dateModified: model.updated ?? model.date,
          mainEntityOfPage: absoluteUrl(`/models/${model.slug}`),
          keywords: keywords.join(", "),
          citation: model.sourceUrls ?? model.sources.map((source) => source.url),
          about: {
            "@type": "Thing",
            name: model.name,
            description: model.summary,
          },
          publisher: {
            "@type": "Organization",
            name: "World Models Watch",
          },
        }}
      />

      <ShowcaseHero
        description={model.summary}
        eyebrow={model.category}
        meta={[model.organization, model.status, model.availability]}
        primaryCta={
          officialSource
            ? { href: officialSource.url, label: "Official demo", external: true }
            : undefined
        }
        secondaryCta={{ href: "/models", label: "Back to wall" }}
        title={model.name}
        visual={visual}
      />

      <section className="model-detail-layout" aria-label={`${model.name} showcase`}>
        <article className="showcase-panel">
          <h2>What this lets people see</h2>
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

      <SceneExplainer
        description="The page starts with the experience, then moves toward source-backed details."
        steps={[
          {
            eyebrow: "First impression",
            title: "A visible world",
            body: model.summary,
            accentColor: visual.accentColor,
          },
          {
            eyebrow: "Capability",
            title: "Why it stands out",
            body: model.strengths[0] ?? model.focus,
            accentColor: visual.secondaryAccentColor,
          },
          {
            eyebrow: "Boundary",
            title: "What not to overclaim",
            body: model.limits[0] ?? model.categoryBoundary ?? model.availability,
            accentColor: "#ff7fa6",
          },
        ]}
        title="Three frames before the source list."
      />

      <section className="model-detail-layout source-backed-section">
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
              <h2>Related comparisons</h2>
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

      <SourceList sources={model.sources} />

      <FaqSummary
        description="Use these notes to keep model comments grounded in official sources and careful category boundaries."
        title="Dossier FAQ"
      />

      <CommentThread targetPath={`/models/${model.slug}`} />
    </main>
  );
}
