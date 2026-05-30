import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ModelUseCaseGrid } from "@/components/model-use-case-grid";
import { JsonLd } from "@/components/json-ld";
import { ShowcaseHero, visualStyle } from "@/components/showcase";
import { SourceList } from "@/components/source-list";
import { worldsData } from "@/data/worldsData";
import { comparisons, getModel, type LongTailPage } from "@/lib/content";
import { getStaticSeoTarget } from "@/lib/seo/page-targets";
import { pageVisuals } from "@/lib/showcase";
import { absoluteUrl } from "@/lib/site";

type LongTailPageViewProps = {
  page: LongTailPage;
};

export function LongTailPageView({ page }: LongTailPageViewProps) {
  const seoTarget = getStaticSeoTarget(page.route);
  const relatedModels = page.relatedModelSlugs
    .map((slug) => getModel(slug))
    .filter((model): model is NonNullable<ReturnType<typeof getModel>> => Boolean(model));
  const relatedComparisons = page.relatedComparisonSlugs
    .map((slug) => comparisons.find((comparison) => comparison.slug === slug))
    .filter((comparison): comparison is (typeof comparisons)[number] => Boolean(comparison));
  const relatedWorlds = page.relatedWorldIds
    .map((id) => worldsData.find((world) => world.id === id))
    .filter((world): world is (typeof worldsData)[number] => Boolean(world));
  const visual = {
    ...pageVisuals["world-model-labs"],
    visualTitle: seoTarget.primaryKeyword,
    visualSubtitle: page.description,
  };

  return (
    <main className="page-shell showcase-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: seoTarget.primaryKeyword,
          description: seoTarget.description,
          mainEntityOfPage: absoluteUrl(page.route),
          keywords: [seoTarget.primaryKeyword, ...seoTarget.longTailKeywords].join(", "),
          citation: page.sources.map((source) => source.url),
          publisher: {
            "@type": "Organization",
            name: "World Models Watch",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: seoTarget.primaryKeyword,
          itemListElement: relatedModels.map((model, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: model.name,
            url: absoluteUrl(`/models/${model.slug}`),
          })),
        }}
      />

      <ShowcaseHero
        description={page.description}
        eyebrow={page.eyebrow}
        meta={["Tool intent", "Output type", "Source-backed", "Next page"]}
        primaryCta={{ href: page.primaryCta.href, label: page.primaryCta.label }}
        secondaryCta={{ href: page.secondaryCta.href, label: page.secondaryCta.label }}
        title={page.title}
        visual={visual}
      />

      {relatedWorlds.length ? (
        <ModelUseCaseGrid
          worlds={relatedWorlds}
          eyebrow="Relevant tools"
          title="Choose the workflow before choosing the model."
          description="These cards keep output type, access, and action visible before the source-backed sections."
        />
      ) : null}

      <section className="model-detail-layout source-backed-section" style={visualStyle(visual)}>
        <article className="showcase-panel">
          <h2>Fast decision table</h2>
          <table className="data-table large-table">
            <thead>
              <tr>
                {page.table.columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {page.table.rows.map((row) => (
                <tr key={row.join("-")}>
                  {row.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="showcase-panel">
          <h2>Open next</h2>
          <div className="narrative-link-grid">
            {relatedModels.map((model) => (
              <Link className="narrative-link-card" href={`/models/${model.slug}`} key={model.slug}>
                <strong>{model.name}</strong>
                <span>{model.summary}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            ))}
            {relatedComparisons.map((comparison) => (
              <Link
                className="narrative-link-card"
                href={`/compare/${comparison.slug}`}
                key={comparison.slug}
              >
                <strong>{comparison.primaryKeyword ?? comparison.title}</strong>
                <span>{comparison.decisionQuestion}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </article>
      </section>

      <section className="narrative-section-stack source-backed-section">
        {page.sections.map((section) => (
          <article className="narrative-section" key={section.title}>
            <div>
              <p className="eyebrow">{section.eyebrow}</p>
              <h2>{section.title}</h2>
            </div>
            <div className="narrative-section-body">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.links ? (
                <div className="narrative-link-grid">
                  {section.links.map((link) => (
                    <Link className="narrative-link-card" href={link.href} key={link.href}>
                      <strong>{link.label}</strong>
                      <span>{link.description}</span>
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </section>

      <SourceList sources={page.sources} />
    </main>
  );
}
