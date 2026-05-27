import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for World Models Watch, including editorial scope, source confidence, and acceptable use.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of Use"
      description="The operating terms for this public research and comparison site."
    >
      <article className="article-body single-column legal-copy">
        <p className="legal-summary">
          Effective date: May 27, 2026. By using {site.domain}, you agree to
          these terms.
        </p>

        <h2>Editorial scope</h2>
        <p>
          World Models Watch tracks public signals about world models, spatial
          intelligence, embodied AI, and adjacent physical AI systems. Coverage
          is informational and should not be treated as investment, legal,
          procurement, or safety advice.
        </p>

        <h2>Source confidence</h2>
        <p>
          The site prioritizes primary sources and labels reported or adjacent
          signals conservatively. Model availability, product status, pricing,
          access, and capabilities can change after publication.
        </p>

        <h2>Acceptable use</h2>
        <p>
          Do not attempt to bypass protected routes, interfere with site
          availability, scrape at abusive rates, or use the site in a way that
          violates applicable law.
        </p>

        <h2>Intellectual property</h2>
        <p>
          Original site structure, summaries, and comparison framing belong to
          World Models Watch unless otherwise noted. Third-party names, papers,
          product pages, videos, and trademarks belong to their respective
          owners.
        </p>

        <h2>No warranty</h2>
        <p>
          The site is provided as-is. We do not guarantee that every source,
          route, link, or comparison field will always be complete, current, or
          error-free.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:privacy@${site.domain}`}>privacy@{site.domain}</a>.
        </p>
      </article>
    </PageShell>
  );
}
