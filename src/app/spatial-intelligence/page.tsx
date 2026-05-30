import type { Metadata } from "next";

import { NarrativePageView } from "@/components/narrative-page";
import { getNarrativePage } from "@/lib/content";
import { metadataForRoute } from "@/lib/seo/page-targets";

const narrativePage = getNarrativePage("spatial-intelligence")!;

export const metadata: Metadata = metadataForRoute("/spatial-intelligence");

export default function SpatialIntelligencePage() {
  return <NarrativePageView page={narrativePage} />;
}
