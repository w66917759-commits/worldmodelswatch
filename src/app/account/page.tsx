import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FileText, LogOut, ShieldCheck, Telescope } from "lucide-react";

import { logoutAction } from "./actions";
import { getSession } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Account",
  description: "Protected account area for World Models Watch.",
  robots: {
    follow: false,
    index: false,
  },
};

export default async function AccountPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login?next=/account");
  }

  return (
    <main className="page-shell compact-page showcase-page utility-page">
      <section className="page-hero">
        <p className="eyebrow">Protected area</p>
        <h1>Account</h1>
        <p>
          The first private surface is wired. Keep editorial tools here while
          preserving public indexing for the research site.
        </p>
      </section>

      <section className="account-grid">
        <article className="auth-card account-card">
          <span className="meta-line">
            <ShieldCheck size={16} aria-hidden="true" />
            Authenticated
          </span>
          <h2>{session.email}</h2>
          <p>
            Session issued {session.issuedAt}. It expires automatically at{" "}
            {session.expiresAt}.
          </p>
          <form action={logoutAction}>
            <button className="button secondary" type="submit">
              <LogOut size={17} aria-hidden="true" />
              Sign out
            </button>
          </form>
        </article>

        <article className="account-panel">
          <Telescope size={22} aria-hidden="true" />
          <h2>Next private workflows</h2>
          <p>
            This area can now host source review queues, candidate approvals,
            and daily update run reports without exposing those controls to
            crawlers.
          </p>
          <div className="account-link-list">
            <Link href="/privacy">
              <FileText size={16} aria-hidden="true" />
              Privacy policy
            </Link>
            <Link href="/terms">
              <FileText size={16} aria-hidden="true" />
              Terms of use
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
