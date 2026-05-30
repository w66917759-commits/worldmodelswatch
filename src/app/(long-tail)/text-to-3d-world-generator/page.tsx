import type { Metadata } from "next";

import { LongTailPageView } from "@/components/long-tail-page";
import { getLongTailPage } from "@/lib/content";
import { metadataForRoute } from "@/lib/seo/page-targets";

const route = "/text-to-3d-world-generator";
const page = getLongTailPage(route)!;

export const metadata: Metadata = metadataForRoute(route);

export default function TextTo3dWorldGeneratorPage() {
  return <LongTailPageView page={page} />;
}
