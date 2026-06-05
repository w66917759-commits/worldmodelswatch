import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { MilestoneRail, ShowcaseHero } from "@/components/showcase";
import { timeline } from "@/lib/content";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { absoluteUrl, site } from "@/lib/site";
import { pageVisuals } from "@/lib/showcase";

const seoTarget = getStaticSeoTarget("/timeline");

export const metadata: Metadata = metadataForRoute("/timeline");

export default function TimelinePage() {
  return (
    <main className="page-shell showcase-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: seoTarget.primaryKeyword,
          description: seoTarget.description,
          url: absoluteUrl("/timeline"),
          isPartOf: {
            "@type": "WebSite",
            name: site.name,
            url: site.url,
          },
          publisher: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
          },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: timeline.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.title,
              description: item.summary,
              url: absoluteUrl(`/news/${item.slug}`),
              datePublished: item.date,
            })),
          },
        }}
      />
      <ShowcaseHero
        description={seoTarget.description}
        eyebrow="World model timeline"
        meta={["Launches", "Open source", "Consumer signals", "Physical AI"]}
        primaryCta={{ href: "/news", label: "Release signals" }}
        secondaryCta={{ href: "/models", label: "Company map" }}
        title="World model timeline for launches and milestones."
        visual={pageVisuals.timeline}
      />

      <MilestoneRail items={timeline} />
    </main>
  );
}
