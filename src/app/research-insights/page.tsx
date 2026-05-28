import type { Metadata } from "next";

import { NarrativePageView } from "@/components/narrative-page";
import { getNarrativePage } from "@/lib/content";

const narrativePage = getNarrativePage("research-insights")!;

export const metadata: Metadata = {
  title: "Research and Insights",
  description: narrativePage.description,
  alternates: {
    canonical: "/research-insights",
  },
};

export default function ResearchInsightsPage() {
  return <NarrativePageView page={narrativePage} />;
}
