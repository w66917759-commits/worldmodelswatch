import type { Metadata } from "next";

import { LongTailPageView } from "@/components/long-tail-page";
import { getLongTailPage } from "@/lib/content";
import { metadataForRoute } from "@/lib/seo/page-targets";

const route = "/ai-360-skybox-generator";
const page = getLongTailPage(route)!;

export const metadata: Metadata = metadataForRoute(route);

export default function Ai360SkyboxGeneratorPage() {
  return <LongTailPageView page={page} />;
}
