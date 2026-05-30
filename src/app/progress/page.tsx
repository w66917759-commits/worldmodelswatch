import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, Layers3 } from "lucide-react";

import { ModelUseCaseGrid } from "@/components/model-use-case-grid";
import { ShowcaseHero } from "@/components/showcase";
import { worldsData } from "@/data/worldsData";
import { getCompanyModelGroups, progressStages } from "@/lib/content";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { pageVisuals } from "@/lib/showcase";

const seoTarget = getStaticSeoTarget("/progress");

export const metadata: Metadata = metadataForRoute("/progress");

export default function ProgressPage() {
  const productGroups = getCompanyModelGroups().filter(
    (group) => group.signalType === "Usable product",
  );

  return (
    <main className="page-shell showcase-page">
      <ShowcaseHero
        description={seoTarget.description}
        eyebrow="AI world model progress"
        meta={["Create", "Explore", "Control", "Simulate", "Build"]}
        primaryCta={{ href: "/models", label: "Companies & models" }}
        secondaryCta={{ href: "/create-word", label: "Create AI worlds" }}
        title="AI world model progress in plain user actions."
        visual={{
          ...pageVisuals["from-video-to-worlds"],
          visualSubtitle:
            "Read the field as a path from creating and exploring worlds to controlling, simulating, and building with them.",
        }}
      />

      <section className="update-showcase-section" aria-labelledby="progress-path">
        <div className="showcase-section-heading">
          <p className="showcase-kicker">Main path</p>
          <h2 id="progress-path">AI world model progress reads as Create, Explore, Control, Simulate, Build.</h2>
          <p>
            The goal is orientation, not a paper tracker: first what a person can do,
            then which company and model lane supports that action.
          </p>
        </div>

        <div className="update-grid">
          {progressStages.map((stage) => (
            <Link className="update-card industry-card" href={stage.href} key={stage.eyebrow}>
              <span className="signal-pill">{stage.eyebrow}</span>
              <h2>{stage.title}</h2>
              <p>{stage.summary}</p>
              <ul className="industry-list">
                {stage.signals.map((signal) => (
                  <li key={signal}>
                    <CheckCircle2 size={15} aria-hidden="true" />
                    {signal}
                  </li>
                ))}
              </ul>
              <strong className="industry-card-link">
                {stage.cta}
                <ArrowRight size={16} aria-hidden="true" />
              </strong>
            </Link>
          ))}
        </div>
      </section>

      <ModelUseCaseGrid
        worlds={worldsData}
        compact
        eyebrow="Action map"
        title="The current model set through practical actions."
        description="Create and Build are the product-facing lanes. Explore, Control, and Simulate explain the research and adjacent progress without making it sound like every model is already a public tool."
      />

      <section className="source-backed-section" aria-labelledby="usable-products">
        <div className="showcase-section-heading">
          <p className="showcase-kicker">Already usable</p>
          <h2 id="usable-products">Two product lanes should stay prominent.</h2>
          <p>
            World Labs / Marble and Skybox AI are the clearest consumer-facing surfaces in
            the current site story. They stay visible, but they are not turned into a
            station for orders, payments, or automatic generation.
          </p>
        </div>

        <div className="company-card-grid">
          {productGroups.map((group) => (
            <article className="company-card" key={group.company}>
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
              <div className="company-actions">
                {group.createHref ? (
                  <a href={group.createHref} rel="noreferrer" target="_blank">
                    <ExternalLink size={15} aria-hidden="true" />
                    Create your world
                  </a>
                ) : null}
                {group.models[0] ? (
                  <Link href={`/models/${group.models[0].slug}`}>
                    <Layers3 size={15} aria-hidden="true" />
                    {group.models[0].name}
                  </Link>
                ) : null}
                {group.officialHref && !group.createHref ? (
                  <a href={group.officialHref} rel="noreferrer" target="_blank">
                    <ExternalLink size={15} aria-hidden="true" />
                    Official
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
