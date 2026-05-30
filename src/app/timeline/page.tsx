import type { Metadata } from "next";

import { MilestoneRail, ShowcaseHero } from "@/components/showcase";
import { timeline } from "@/lib/content";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { pageVisuals } from "@/lib/showcase";

const seoTarget = getStaticSeoTarget("/timeline");

export const metadata: Metadata = metadataForRoute("/timeline");

export default function TimelinePage() {
  return (
    <main className="page-shell showcase-page">
      <ShowcaseHero
        description={seoTarget.description}
        eyebrow="World model timeline"
        meta={["Launches", "Open source", "Consumer signals", "Physical AI"]}
        primaryCta={{ href: "/news", label: "Read updates" }}
        secondaryCta={{ href: "/models", label: "Model wall" }}
        title="World model timeline for launches and milestones."
        visual={pageVisuals.timeline}
      />

      <MilestoneRail items={timeline} />
    </main>
  );
}
