import type { Metadata } from "next";

import { CreateWorlds } from "@/components/home/CreateWorlds";
import { JsonLd } from "@/components/json-ld";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { absoluteUrl } from "@/lib/site";

const seoTarget = getStaticSeoTarget("/create-word");

export const metadata: Metadata = metadataForRoute("/create-word");

export default function CreateWordPage() {
  return (
    <main className="standalone-portal-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: seoTarget.primaryKeyword,
          url: absoluteUrl("/create-word"),
          description: seoTarget.description,
        }}
      />
      <CreateWorlds />
    </main>
  );
}
