import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { LoginForm } from "./login-form";
import { getAuthConfig, getSession, sanitizeRedirectPath } from "@/lib/auth";

type LoginPageProps = {
  searchParams: Promise<{
    next?: string | string[];
  }>;
};

export const metadata: Metadata = {
  title: "Login",
  description: "Admin sign-in for World Models Watch.",
  robots: {
    follow: false,
    index: false,
  },
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const rawNext = Array.isArray(params.next) ? params.next[0] : params.next;
  const nextPath = sanitizeRedirectPath(rawNext);
  const session = await getSession();

  if (session) {
    redirect(nextPath);
  }

  const authConfig = getAuthConfig();

  return (
    <main className="page-shell compact-page auth-page showcase-page utility-page">
      <section className="page-hero">
        <p className="eyebrow">Admin access</p>
        <h1>Login</h1>
        <p>
          Protected access for publishing, review, and future private
          workflows. The public research pages remain crawlable.
        </p>
      </section>

      <section className="auth-layout">
        <article className="auth-card">
          <h2>Editor sign-in</h2>
          <p>
            Sessions use an HTTP-only cookie and expire after eight hours.
            Credentials are read from deployment environment variables.
          </p>
          <LoginForm
            configured={authConfig.configured}
            missing={authConfig.missing}
            nextPath={nextPath}
          />
        </article>

        <aside className="account-panel">
          <p className="eyebrow">Infrastructure status</p>
          <h2>Ready for provider upgrade</h2>
          <p>
            This layer keeps the first protected route and session boundary in
            place without adding a database or third-party auth dependency.
            Clerk, Auth.js, or another provider can replace the credential
            check later while preserving the route contract.
          </p>
        </aside>
      </section>
    </main>
  );
}
