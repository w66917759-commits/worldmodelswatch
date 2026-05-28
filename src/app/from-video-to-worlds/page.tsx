import type { Metadata } from "next";

import { NarrativePageView } from "@/components/narrative-page";
import { getNarrativePage } from "@/lib/content";

const narrativePage = getNarrativePage("from-video-to-worlds")!;

export const metadata: Metadata = {
  title: "From AI Video to Interactive Worlds",
  description: narrativePage.description,
  alternates: {
    canonical: "/from-video-to-worlds",
  },
};

export default function FromVideoToWorldsPage() {
  return <NarrativePageView page={narrativePage} />;
}
