import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Layers3 } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { ShowcaseHero, visualStyle } from "@/components/showcase";
import { getCompanyModelGroups } from "@/lib/content";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { companyVisual, pageVisuals } from "@/lib/showcase";
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
        eyebrow="Company map"
        meta={["Try now", "Create", "See result", "Reality check"]}
        primaryCta={{ href: "/create-word", label: "Create AI worlds" }}
        secondaryCta={{ href: "/progress", label: "See progress" }}
        title="Find AI world tools you can actually try."
        visual={{
          ...pageVisuals.definition,
          visualSubtitle:
            "Start with tools you can open now. Use the rest of the map to see what is coming next and what is still only a demo or research signal.",
        }}
      />

      <section className="model-showcase-section" aria-labelledby="usable-company-models">
        <div className="showcase-section-heading">
          <p className="showcase-kicker">Usable now</p>
          <h2 id="usable-company-models">AI world tools you can open now.</h2>
          <p>
            Start here if you want to create a 3D world, generate a 360 scene,
            or find the fastest product link.
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
          <h2 id="company-map">More companies building AI worlds, from demos to open stacks.</h2>
          <p>
            Use this section to see what is worth watching, what you can see today,
            and what is not ready for everyday creators yet.
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
    <article className="company-card" style={visualStyle(companyVisual(group.company))}>
      <span className="signal-pill">{group.signalType}</span>
      <h2>{group.company}</h2>
      <p>{group.headline}</p>
      <div className="company-facts">
        <div>
          <span>What it is</span>
          <strong>{group.launched}</strong>
        </div>
        <div>
          <span>What you can do</span>
          <strong>{group.visitorCanSee}</strong>
        </div>
        <div>
          <span>Reality check</span>
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
            Official site
          </a>
        ) : null}
        {group.models[0] ? (
          <Link href={`/models/${group.models[0].slug}`}>
            <ArrowRight size={15} aria-hidden="true" />
            Details
          </Link>
        ) : null}
      </div>
    </article>
  );
}
