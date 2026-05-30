"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { site } from "@/lib/site";

type FooterLink = {
  href: string;
  label: string;
};

function FooterAnchor({ link }: { link: FooterLink }) {
  const external = link.href.startsWith("http");
  const mailto = link.href.startsWith("mailto:");

  if (external || mailto) {
    return (
      <a
        href={link.href}
        rel={external ? "noreferrer" : undefined}
        target={external ? "_blank" : undefined}
      >
        {link.label}
      </a>
    );
  }

  return <Link href={link.href}>{link.label}</Link>;
}

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <footer className="site-footer">
      <div className="site-footer-brand">
        <strong>{site.name}</strong>
        <p>
          Video-led guide to AI world progress, companies, models, and selected
          adjacent updates. Primary domain: {site.domain}.
        </p>
        <a className="site-footer-domain" href={site.url}>
          {site.domain}
        </a>
        <div className="site-footer-meta">
          <span>Source-backed AI world model coverage</span>
          <span>Contact: {site.contactEmail}</span>
        </div>
      </div>

      <div className="site-footer-sections">
        {site.footerSections.map((section) => (
          <section className="site-footer-section" key={section.title}>
            <h2>{section.title}</h2>
            <nav aria-label={`${section.title} links`}>
              {section.links.map((link) => (
                <FooterAnchor key={link.href} link={link} />
              ))}
            </nav>
          </section>
        ))}
      </div>
    </footer>
  );
}
