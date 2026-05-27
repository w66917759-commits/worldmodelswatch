import type { Metadata } from "next";

import { CivilizationLayer } from "@/components/ai-world/CivilizationLayer";
import { CreateWorlds } from "@/components/ai-world/CreateWorlds";
import { FutureFooter } from "@/components/ai-world/FutureFooter";
import { TimelineSection } from "@/components/ai-world/TimelineSection";
import { WorldExplorer } from "@/components/ai-world/WorldExplorer";
import { WorldHero } from "@/components/ai-world/WorldHero";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Generated Worlds | AI World Interface",
  description:
    "An immersive AI world interface for exploring Marble, Oasis, Genie, Happy Oyster, Skybox AI, and Project Sid as spatial world nodes.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Generated Worlds",
          url: site.url,
          description:
            "A spatial interface for exploring emerging AI-generated world systems.",
        }}
      />
      <WorldHero />
      <WorldExplorer />
      <CreateWorlds />
      <CivilizationLayer />
      <TimelineSection />
      <FutureFooter />
    </main>
  );
}
