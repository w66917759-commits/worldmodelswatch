import type { Metadata } from "next";

import { NarrativePageView } from "@/components/narrative-page";
import { getNarrativePage } from "@/lib/content";
import { metadataForRoute } from "@/lib/seo/page-targets";

const narrativePage = getNarrativePage("from-video-to-worlds")!;

export const metadata: Metadata = metadataForRoute("/from-video-to-worlds");

export default function FromVideoToWorldsPage() {
  return <NarrativePageView page={narrativePage} />;
}
