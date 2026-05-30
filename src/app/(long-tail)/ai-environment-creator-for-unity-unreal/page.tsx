import type { Metadata } from "next";

import { LongTailPageView } from "@/components/long-tail-page";
import { getLongTailPage } from "@/lib/content";
import { metadataForRoute } from "@/lib/seo/page-targets";

const route = "/ai-environment-creator-for-unity-unreal";
const page = getLongTailPage(route)!;

export const metadata: Metadata = metadataForRoute(route);

export default function AiEnvironmentCreatorForUnityUnrealPage() {
  return <LongTailPageView page={page} />;
}
