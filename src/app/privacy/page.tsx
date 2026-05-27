import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for World Models Watch, including admin login cookies, public research pages, and source data handling.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      description="How World Models Watch handles data for public research pages and protected editor access."
    >
      <article className="article-body single-column legal-copy">
        <p className="legal-summary">
          Effective date: May 27, 2026. World Models Watch is a public
          intelligence site for source-backed coverage of world models, spatial
          intelligence, and physical AI systems.
        </p>

        <h2>Information we collect</h2>
        <p>
          Public pages are designed to be read without an account. Standard
          hosting logs may record request metadata such as IP address, user
          agent, timestamp, referring URL, and requested path for security,
          reliability, and abuse prevention.
        </p>
        <p>
          The admin login uses the configured editor email only to create a
          protected session. The repository does not include public account
          registration, payment collection, comments, or user-generated profile
          data.
        </p>

        <h2>Cookies</h2>
        <p>
          The protected account area uses one HTTP-only session cookie named{" "}
          <code>wmw_session</code>. It is marked SameSite=Lax, is secure in
          production, and expires after eight hours. It is not used for ads or
          cross-site tracking.
        </p>

        <h2>Research and source data</h2>
        <p>
          Site content is based on public sources such as official company
          announcements, research posts, documentation, and release notes. We
          avoid collecting private individual profiles as part of normal
          editorial operations.
        </p>

        <h2>Third-party services</h2>
        <p>
          The current codebase does not wire analytics, advertising pixels, or
          third-party sign-in SDKs. If hosting, analytics, or authentication
          providers are added later, this policy should be updated before those
          providers process production traffic.
        </p>

        <h2>Retention and deletion</h2>
        <p>
          Session cookies expire automatically. Hosting logs are retained by the
          deployment provider according to its operational settings. Privacy
          requests can be sent to{" "}
          <a href={`mailto:privacy@${site.domain}`}>privacy@{site.domain}</a>.
        </p>

        <h2>Changes</h2>
        <p>
          Material changes to this policy should be reflected on this page with
          an updated effective date.
        </p>
      </article>
    </PageShell>
  );
}
