import type { Metadata } from "next";

import { NarrativePageView } from "@/components/narrative-page";
import { getNarrativePage } from "@/lib/content";
import { metadataForRoute } from "@/lib/seo/page-targets";

const narrativePage = getNarrativePage("world-model-labs")!;

export const metadata: Metadata = metadataForRoute("/world-model-labs");

export default function WorldModelLabsPage() {
  return <NarrativePageView page={narrativePage} />;
}
