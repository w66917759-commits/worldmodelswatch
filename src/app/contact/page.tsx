import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { absoluteUrl, site } from "@/lib/site";

const seoTarget = getStaticSeoTarget("/contact");

export const metadata: Metadata = metadataForRoute("/contact");

export default function ContactPage() {
  return (
    <PageShell
      className="showcase-page utility-page"
      eyebrow="Contact"
      title="Contact World Models Watch"
      description={seoTarget.description}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact World Models Watch",
          url: absoluteUrl("/contact"),
          description: seoTarget.description,
          datePublished: "2026-06-05",
          dateModified: "2026-06-05",
          mainEntity: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
            sameAs: site.sameAs,
            contactPoint: [
              {
                "@type": "ContactPoint",
                email: site.contactEmail,
                contactType: "editorial corrections",
              },
              {
                "@type": "ContactPoint",
                email: site.privacyEmail,
                contactType: "privacy requests",
              },
            ],
          },
        }}
      />

      <article className="article-body single-column legal-copy">
        <p className="legal-summary">
          Use this page for corrections, source updates, access-status changes,
          removal requests, privacy questions, and editorial notes about public
          world-model coverage. World Models Watch does not sell model access,
          credits, ads, or sponsored rankings through this contact page.
        </p>

        <h2>Editorial corrections</h2>
        <p>
          Send corrections, stale source reports, product-access updates, and
          model-page suggestions to{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
          Helpful messages include the affected URL, the official source URL,
          what changed, and whether the source is a product page, paper,
          repository, model card, documentation page, or company announcement.
        </p>

        <h2>Privacy and comments</h2>
        <p>
          Privacy requests, comment identity questions, and data deletion
          requests can be sent to{" "}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
          Public comments are intended for source links, corrections,
          comparison questions, and concrete reader context. Do not send or post
          confidential material, private account data, or unsupported
          promotional claims.
        </p>

        <h2>What to include</h2>
        <p>
          A useful source update should name the project, organization, current
          access status, and the strongest official reference. If the change
          affects a model dossier, release signal, or comparison guide, the page
          can be reviewed with a narrower claim boundary and updated date.
        </p>

        <h2>Other public pages</h2>
        <p>
          For the editorial process, read <Link href="/about">About Us</Link>.
          For data handling, read <Link href="/privacy">Privacy Policy</Link>.
          For acceptable use and comment rules, read{" "}
          <Link href="/terms">Terms of Use</Link>.
        </p>
      </article>
    </PageShell>
  );
}
