"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Radar, X } from "lucide-react";

import { AuthStatusLink } from "@/components/auth-status-link";
import { site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const darkHeader =
    pathname === "/events" ||
    pathname === "/world-stream" ||
    pathname === "/create-word";

  const close = useCallback(() => setMobileOpen(false), []);

  // Close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [mobileOpen, close]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  if (pathname === "/") return null;

  return (
    <header className={`site-header${darkHeader ? " site-header-dark" : ""}`}>
      <Link className="brand" href="/" aria-label="World Models Watch home">
        <span className="brand-mark" aria-hidden="true">
          <Radar size={19} />
        </span>
        <span>{site.name}</span>
      </Link>

      <div className="nav-cluster">
        {/* Desktop nav */}
        <nav className="site-nav" aria-label="Main navigation">
          {site.primaryNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <AuthStatusLink />
      </div>

      {/* Hamburger toggle — visible only on mobile */}
      <button
        className="mobile-toggle"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((prev) => !prev)}
        type="button"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile drawer + overlay */}
      <div
        className={`mobile-overlay${mobileOpen ? " open" : ""}`}
        aria-hidden="true"
        onClick={close}
      />
      <nav
        className={`mobile-nav${mobileOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        {site.primaryNav.map((item) => (
          <Link key={item.href} href={item.href} onClick={close}>
            {item.label}
          </Link>
        ))}
        <AuthStatusLink className="mobile-auth-link" onClick={close} />
      </nav>
    </header>
  );
}
