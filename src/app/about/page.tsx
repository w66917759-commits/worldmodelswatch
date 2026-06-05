import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { absoluteUrl, site } from "@/lib/site";

const seoTarget = getStaticSeoTarget("/about");

export const metadata: Metadata = metadataForRoute("/about");

export default function AboutPage() {
  return (
    <PageShell
      className="showcase-page utility-page"
      eyebrow="About"
      title="About World Models Watch"
      description={seoTarget.description}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About World Models Watch",
          url: absoluteUrl("/about"),
          description: seoTarget.description,
          publisher: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
            sameAs: site.sameAs,
            contactPoint: {
              "@type": "ContactPoint",
              email: site.contactEmail,
              contactType: "editorial",
            },
          },
          datePublished: "2026-06-05",
          dateModified: "2026-06-05",
        }}
      />

      <article className="article-body single-column legal-copy">
        <p className="legal-summary">
          World Models Watch is an independent editorial reference for public
          world model, generated-world, spatial-intelligence, and physical-AI
          signals. The site helps readers separate usable products, research
          previews, open-source stacks, and reported claims before they follow a
          demo, cite a launch, or compare tools.
        </p>

        <h2>Editorial mission</h2>
        <p>
          The world model category changes quickly, and many public pages use
          similar words for very different things. A 360 skybox creator, an
          explorable 3D product, a robot-control model, a video avatar system,
          and a many-agent simulation can all be described as
          world-model-adjacent. Our job is to keep those lanes separate. Every
          durable page should answer what the system is, who made it, what
          public evidence exists, what people can actually try, and what should
          not be overclaimed.
        </p>

        <h2>Source standard</h2>
        <p>
          We prioritize official company posts, project pages, documentation,
          GitHub repositories, model cards, papers, and release notes. Reported
          items can appear when they clarify product access or category
          movement, but they are labeled as reported and are not treated as
          equal to primary-source launches. A claim about pricing, availability,
          model weights, API access, or performance should point to the
          strongest public source available at the time of review.
        </p>

        <h2>How pages are reviewed</h2>
        <p>
          Model dossiers are reviewed against a consistent checklist: project
          introduction, development organization, technical focus, demo or
          access path, update history, use cases, advantages, limitations, and
          source links. News pages are kept short only when the source is
          narrow; when a signal affects product choice, capability boundaries,
          or public availability, the page should add original context about
          what changed, why it matters, what to verify next, and what readers
          should not infer from the announcement.
        </p>

        <h2>AI assistance policy</h2>
        <p>
          AI tools may be used to draft summaries, compare source notes, or
          normalize structured fields, but public pages should not publish
          unsupported generated claims. The maintained editorial standard is
          source-backed synthesis: each page should add categorization, caveats,
          comparison context, and practical reader guidance beyond a copied
          announcement or a list of outbound links.
        </p>

        <h2>Corrections and contact</h2>
        <p>
          World model coverage can become stale when access, repositories,
          documentation, or product names change. Corrections, source updates,
          and removal requests can be sent to{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
          Privacy questions can be sent to{" "}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>. When
          a material correction changes a model page, news signal, or comparison
          guide, the affected page should be updated with a current review date
          and a narrower claim boundary.
        </p>
      </article>
    </PageShell>
  );
}
