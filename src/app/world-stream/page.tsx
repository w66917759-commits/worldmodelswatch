import type { Metadata } from "next";

import { WorldStream } from "@/components/home/WorldStream";
import { JsonLd } from "@/components/json-ld";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { absoluteUrl } from "@/lib/site";

const seoTarget = getStaticSeoTarget("/world-stream");

export const metadata: Metadata = metadataForRoute("/world-stream");

export default function WorldStreamPage() {
  return (
    <main className="standalone-portal-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: seoTarget.primaryKeyword,
          url: absoluteUrl("/world-stream"),
          description: seoTarget.description,
        }}
      />
      <WorldStream />
    </main>
  );
}
