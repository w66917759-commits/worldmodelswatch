import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Layers3 } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { ModelUseCaseGrid } from "@/components/model-use-case-grid";
import { ShowcaseHero } from "@/components/showcase";
import { worldsData } from "@/data/worldsData";
import { getCompanyModelGroups } from "@/lib/content";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { pageVisuals } from "@/lib/showcase";
import { absoluteUrl } from "@/lib/site";

const seoTarget = getStaticSeoTarget("/models");

export const metadata: Metadata = metadataForRoute("/models");

export default function ModelsPage() {
  const companyGroups = getCompanyModelGroups();
  const usableGroups = companyGroups.filter(
    (group) => group.signalType === "Usable product",
  );
  const otherGroups = companyGroups.filter(
    (group) => group.signalType !== "Usable product",
  );

  return (
    <main className="page-shell showcase-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: seoTarget.primaryKeyword,
          description: seoTarget.description,
          itemListElement: companyGroups.map((group, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: group.company,
            url: absoluteUrl("/models"),
          })),
        }}
      />
      <ShowcaseHero
        description={seoTarget.description}
        eyebrow="AI world model companies"
        meta={["Output", "Use case", "Access", "Action"]}
        primaryCta={{ href: "/create-word", label: "Create AI worlds" }}
        secondaryCta={{ href: "/progress", label: "Current progress" }}
        title="AI world models organized by what people can do with them."
        visual={{
          ...pageVisuals.definition,
          visualSubtitle:
            "Start with the model's output and use case, then open the company profile and source-backed boundaries.",
        }}
      />

      <ModelUseCaseGrid
        worlds={worldsData}
        eyebrow="Multi-model showcase"
        title="One wall for outputs, use cases, access, and next actions."
        description="This is the non-academic entry point: whether a visitor wants to create a 3D world, explore a playable scene, inspect an open stack, or understand agent societies."
      />

      <section className="model-showcase-section" aria-labelledby="usable-company-models">
        <div className="showcase-section-heading">
          <p className="showcase-kicker">Usable now</p>
          <h2 id="usable-company-models">AI world model companies with product surfaces people can open.</h2>
          <p>
            These two lanes are not treated as research examples. They are practical
            surfaces that make the category easier for normal visitors to understand.
          </p>
        </div>

        <div className="company-card-grid">
          {usableGroups.map((group) => (
            <CompanyCard group={group} key={group.company} />
          ))}
        </div>
      </section>

      <section className="source-backed-section" aria-labelledby="company-map">
        <div className="showcase-section-heading">
          <p className="showcase-kicker">Company map</p>
          <h2 id="company-map">AI world model companies split by products, previews, open stacks, and adjacent progress.</h2>
          <p>
            This is the main replacement for the old research-heavy model wall.
            The card format keeps the reader on the same three questions.
          </p>
        </div>

        <div className="company-card-grid wide">
          {otherGroups.map((group) => (
            <CompanyCard group={group} key={group.company} />
          ))}
        </div>
      </section>
    </main>
  );
}

type CompanyCardProps = {
  group: ReturnType<typeof getCompanyModelGroups>[number];
};

function CompanyCard({ group }: CompanyCardProps) {
  return (
    <article className="company-card">
      <span className="signal-pill">{group.signalType}</span>
      <h2>{group.company}</h2>
      <p>{group.headline}</p>
      <div className="company-facts">
        <div>
          <span>推出了什么</span>
          <strong>{group.launched}</strong>
        </div>
        <div>
          <span>用户能看到什么</span>
          <strong>{group.visitorCanSee}</strong>
        </div>
        <div>
          <span>边界</span>
          <strong>{group.boundary}</strong>
        </div>
      </div>
      <div className="company-model-links">
        {group.models.map((model) => (
          <Link href={`/models/${model.slug}`} key={model.slug}>
            <Layers3 size={14} aria-hidden="true" />
            {model.name}
          </Link>
        ))}
      </div>
      <div className="company-actions">
        {group.createHref ? (
          <a href={group.createHref} rel="noreferrer" target="_blank">
            <ExternalLink size={15} aria-hidden="true" />
            Create your world
          </a>
        ) : null}
        {group.officialHref && !group.createHref ? (
          <a href={group.officialHref} rel="noreferrer" target="_blank">
            <ExternalLink size={15} aria-hidden="true" />
            Official
          </a>
        ) : null}
        {group.models[0] ? (
          <Link href={`/models/${group.models[0].slug}`}>
            <ArrowRight size={15} aria-hidden="true" />
            Open profile
          </Link>
        ) : null}
      </div>
    </article>
  );
}
