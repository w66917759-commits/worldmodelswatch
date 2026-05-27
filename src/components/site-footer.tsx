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
        <Link href="/what-is-world-model">Definition</Link>
        <Link href="/news">News</Link>
        <Link href="/compare">Compare</Link>
        <Link href="/models">Models</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/login">Login</Link>
      </nav>
    </footer>
  );
}
