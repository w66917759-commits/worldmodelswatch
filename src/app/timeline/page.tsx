import type { Metadata } from "next";

import { MilestoneRail, ShowcaseHero } from "@/components/showcase";
import { timeline } from "@/lib/content";
import { pageVisuals } from "@/lib/showcase";

export const metadata: Metadata = {
  title: "World Model Timeline",
  description:
    "A dated timeline of world model announcements, product launches, and platform milestones.",
  alternates: {
    canonical: "/timeline",
  },
};

export default function TimelinePage() {
  return (
    <main className="page-shell showcase-page">
      <ShowcaseHero
        description="A cinematic release rail for the moments that move world models closer to ordinary users: product launches, open demos, model drops, and physical-AI platforms."
        eyebrow="Milestone reel"
        meta={["Launches", "Open source", "Consumer signals", "Physical AI"]}
        primaryCta={{ href: "/news", label: "Read updates" }}
        secondaryCta={{ href: "/models", label: "Model wall" }}
        title="A timeline for when worlds became visible."
        visual={pageVisuals.timeline}
      />

      <MilestoneRail items={timeline} />
    </main>
  );
}
