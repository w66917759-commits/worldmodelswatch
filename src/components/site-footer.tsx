"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { site } from "@/lib/site";

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <footer className="site-footer">
      <div>
        <strong>{site.name}</strong>
        <p>
          Structured coverage of world models, spatial intelligence, and
          physical AI. Primary domain: {site.domain}.
        </p>
      </div>
      <nav aria-label="Footer navigation">
        {site.footerNav.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/login">Login</Link>
      </nav>
    </footer>
  );
}
