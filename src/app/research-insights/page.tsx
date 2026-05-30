import type { Metadata } from "next";

import { FaqSummary } from "@/components/faq-summary";
import { NarrativePageView } from "@/components/narrative-page";
import { getNarrativePage } from "@/lib/content";
import { metadataForRoute } from "@/lib/seo/page-targets";

const narrativePage = getNarrativePage("research-insights")!;

export const metadata: Metadata = metadataForRoute("/research-insights");

export default function ResearchInsightsPage() {
  return (
    <NarrativePageView page={narrativePage}>
      <FaqSummary
        description="The world model research page links to the FAQ for source confidence, category boundaries, and reader notes without changing its core keyword."
        title="World model research FAQ"
      />
    </NarrativePageView>
  );
}
