import type { Metadata } from "next";

import { NarrativePageView } from "@/components/narrative-page";
import { getNarrativePage } from "@/lib/content";

const narrativePage = getNarrativePage("world-model-labs")!;

export const metadata: Metadata = {
  title: "World Model Labs",
  description: narrativePage.description,
  alternates: {
    canonical: "/world-model-labs",
  },
};

export default function WorldModelLabsPage() {
  return <NarrativePageView page={narrativePage} />;
}
