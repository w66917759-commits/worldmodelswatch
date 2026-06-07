import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { getStaticSeoTarget, metadataForRoute } from "@/lib/seo/page-targets";
import { absoluteUrl, site } from "@/lib/site";

const seoTarget = getStaticSeoTarget("/privacy");

export const metadata: Metadata = metadataForRoute("/privacy");

export default function PrivacyPage() {
  return (
    <PageShell
      className="showcase-page utility-page"
      eyebrow="Legal"
      title="World Models Watch privacy policy"
      description={seoTarget.description}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "World Models Watch privacy policy",
          description: seoTarget.description,
          url: absoluteUrl("/privacy"),
          datePublished: "2026-05-28",
          dateModified: "2026-06-07",
          isPartOf: {
            "@type": "WebSite",
            name: site.name,
            url: site.url,
          },
          publisher: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
          },
        }}
      />
      <article className="article-body single-column legal-copy">
        <p className="legal-summary">
          Effective date: June 7, 2026. World Models Watch is a public
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
          protected session. Public comments and comment likes use Supabase Auth
          with Google sign-in. Reader profile names and avatar URLs may be
          stored so public comments can show an author identity. Email addresses
          are handled by the authentication provider and are not displayed in
          comment threads.
        </p>
        <p>
          Comments are public immediately. Do not post private information,
          confidential material, or personal data that should not appear on a
          public web page.
        </p>

        <h2 id="cookies">Cookies</h2>
        <p>
          The protected account area uses one HTTP-only session cookie named{" "}
          <code>wmw_session</code>. It is marked SameSite=Lax, is secure in
          production, and expires after eight hours. It is not used for ads or
          cross-site tracking.
        </p>
        <p>
          Supabase Auth may set its own authentication cookies to keep signed-in
          readers connected for comments and likes. These cookies are used for
          authentication and abuse prevention, not advertising.
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
          The community sign-in flow uses Supabase Auth and Google OAuth. The
          site also loads Google Analytics to understand aggregate page
          performance and Google AdSense to support advertising. Those services
          may process request metadata, device information, and cookie or
          identifier data according to Google's service terms and privacy
          controls.
        </p>

        <h2>Retention and deletion</h2>
        <p>
          Session cookies expire automatically. Hosting logs are retained by the
          deployment provider according to its operational settings. Reader
          comments remain public unless the author deletes them or the site
          removes them for policy reasons. Comment likes can be toggled off by
          the signed-in reader. Privacy requests can be sent to{" "}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>.
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
