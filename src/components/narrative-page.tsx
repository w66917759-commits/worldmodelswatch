import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { SceneExplainer, ShowcaseHero, VideoReel } from "@/components/showcase";
import type { NarrativePage } from "@/lib/content";
import { pageVisuals } from "@/lib/showcase";
import { absoluteUrl } from "@/lib/site";
import { worldsData } from "@/components/ai-world/worldsData";

type NarrativePageViewProps = {
  children?: ReactNode;
  page: NarrativePage;
};

export function NarrativePageView({ children, page }: NarrativePageViewProps) {
  const mediaWorlds =
    page.mediaWorldIds
      ?.map((id) => worldsData.find((world) => world.id === id))
      .filter((world): world is (typeof worldsData)[number] => Boolean(world)) ??
    [];
  const visual = pageVisuals[page.slug as keyof typeof pageVisuals] ?? pageVisuals.definition;

  return (
    <main className="page-shell showcase-page narrative-page">
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

      <ShowcaseHero
        description={page.description}
        eyebrow={page.eyebrow}
        meta={[visual.primarySceneLabel ?? "Showcase", "Short explanation", "Next step"]}
        primaryCta={page.primaryCta}
        secondaryCta={page.secondaryCta}
        title={page.title}
        visual={visual}
      />

      <SceneExplainer
        description="Each page reads as a visual path first, then keeps the source-backed links nearby."
        steps={page.sections.map((section, index) => ({
          accentColor: index % 2 === 0 ? visual.accentColor : visual.secondaryAccentColor,
          body: section.body[0],
          cta: section.links?.[0]?.label,
          eyebrow: section.eyebrow,
          href: section.links?.[0]?.href,
          title: section.title,
        }))}
        title="Read the page as scenes."
      />

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
        <VideoReel
          description="Seven local MP4 demos become the main attraction here, with a model entrance and an official entrance on every card."
          title="A video hall for world-model demos."
          worlds={mediaWorlds}
        />
      ) : null}

      {children}
    </main>
  );
}
