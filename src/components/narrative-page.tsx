import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, ExternalLink, Play } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import type { NarrativePage } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";
import { worldsData } from "@/components/ai-world/worldsData";

type NarrativePageViewProps = {
  page: NarrativePage;
};

export function NarrativePageView({ page }: NarrativePageViewProps) {
  const mediaWorlds =
    page.mediaWorldIds
      ?.map((id) => worldsData.find((world) => world.id === id))
      .filter((world): world is (typeof worldsData)[number] => Boolean(world)) ??
    [];

  return (
    <main className="page-shell narrative-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: page.title,
          description: page.description,
          mainEntityOfPage: absoluteUrl(`/${page.slug}`),
          publisher: {
            "@type": "Organization",
            name: "World Models Watch",
          },
        }}
      />

      <section className="page-hero narrative-hero">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
        <div className="narrative-cta-row">
          <Link className="button primary" href={page.primaryCta.href}>
            {page.primaryCta.label}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link className="button secondary" href={page.secondaryCta.href}>
            {page.secondaryCta.label}
          </Link>
        </div>
      </section>

      <section className="narrative-section-stack">
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
                      {link.description ? <span>{link.description}</span> : null}
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </section>

      {mediaWorlds.length > 0 ? (
        <section className="narrative-media-section" aria-labelledby="labs-gallery-title">
          <div className="section-heading horizontal">
            <div>
              <p className="eyebrow">Demo gallery</p>
              <h2 id="labs-gallery-title">Seven local world-model video demos.</h2>
            </div>
            <Link className="text-link" href="/models">
              Model dossiers
            </Link>
          </div>

          <div className="narrative-media-grid">
            {mediaWorlds.map((world) => (
              <article
                className="narrative-media-card"
                id={world.id}
                key={world.id}
                style={
                  {
                    "--media-accent": world.accent,
                    "--media-secondary": world.secondaryAccent,
                  } as CSSProperties
                }
              >
                <video autoPlay muted loop playsInline preload="metadata">
                  <source src={world.videoSrc} type={world.videoType} />
                </video>
                <div>
                  <span>
                    <Play size={13} aria-hidden="true" />
                    {world.developer}
                  </span>
                  <h3>{world.name}</h3>
                  <p>{world.summary}</p>
                  <div className="narrative-media-actions">
                    <Link href={world.detailHref}>
                      Site context
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                    <a
                      href={world.sourceHref ?? world.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Official demo
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
