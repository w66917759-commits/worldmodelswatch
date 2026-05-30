import type { Metadata } from "next";

import { EventsEvidenceRail } from "@/components/events/EventsEvidenceRail";
import { EventsTimelineExperience } from "@/components/events/EventsTimelineExperience";
import { JsonLd } from "@/components/json-ld";
import { timeline } from "@/lib/content";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { absoluteUrl, site } from "@/lib/site";

const seoTarget = getStaticSeoTarget("/events");

export const metadata: Metadata = metadataForRoute("/events");

export default function EventsPage() {
  const items = timeline;

  return (
    <main className="events-timeline-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: seoTarget.primaryKeyword,
          url: absoluteUrl("/events"),
          description: seoTarget.description,
          publisher: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
          },
          hasPart: items.map((item) => ({
            "@type": "NewsArticle",
            headline: item.title,
            datePublished: item.date,
            dateModified: item.updated ?? item.date,
            url: absoluteUrl(`/news/${item.slug}`),
          })),
        }}
      />
      <EventsTimelineExperience />
      <EventsEvidenceRail items={items} />
    </main>
  );
}
