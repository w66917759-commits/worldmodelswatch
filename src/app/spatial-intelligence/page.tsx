import type { Metadata } from "next";

import { NarrativePageView } from "@/components/narrative-page";
import { getNarrativePage } from "@/lib/content";

const narrativePage = getNarrativePage("spatial-intelligence")!;

export const metadata: Metadata = {
  title: "Spatial Intelligence",
  description: narrativePage.description,
  alternates: {
    canonical: "/spatial-intelligence",
  },
};

export default function SpatialIntelligencePage() {
  return <NarrativePageView page={narrativePage} />;
}
