import type { Metadata } from "next";

import { HeroWordSquares } from "@/components/home/HeroWordSquares";
import { JsonLd } from "@/components/json-ld";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { site } from "@/lib/site";

const seoTarget = getStaticSeoTarget("/");

export const metadata: Metadata = metadataForRoute("/");

export default function Home() {
  return (
    <main className="world-portal-home min-h-screen bg-black text-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "World Models Watch",
          url: site.url,
          description: seoTarget.description,
        }}
      />
      <HeroWordSquares />
    </main>
  );
}
