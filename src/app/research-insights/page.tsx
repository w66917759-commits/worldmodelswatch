import type { Metadata } from "next";

import { FaqSummary } from "@/components/faq-summary";
import { NarrativePageView } from "@/components/narrative-page";
import { getNarrativePage } from "@/lib/content";

const narrativePage = getNarrativePage("research-insights")!;

export const metadata: Metadata = {
  title: "World Model Signal Room",
  description: narrativePage.description,
  alternates: {
    canonical: "/research-insights",
  },
};

export default function ResearchInsightsPage() {
  return (
    <NarrativePageView page={narrativePage}>
      <FaqSummary
        description="The research hub uses the FAQ to explain source confidence, category boundaries, and how readers can contribute better notes."
        title="Research FAQ"
      />
    </NarrativePageView>
  );
}
