import type { Metadata } from "next";
import Link from "next/link";
import { LogIn, ShieldCheck } from "lucide-react";
import { redirect } from "next/navigation";

import { signInWithGoogleAction } from "@/app/auth/actions";
import { PageShell } from "@/components/page-shell";
import { sanitizePublicRedirect } from "@/lib/public-routes";
import { getSupabasePublicConfig } from "@/lib/supabase/config";
import { getSupabaseUser } from "@/lib/supabase/server";

type PublicSignInPageProps = {
  searchParams: Promise<{
    error?: string | string[];
    next?: string | string[];
  }>;
};

export const metadata: Metadata = {
  title: "Community Sign In",
  description:
    "Sign in with Google to comment on World Models Watch pages and like reader comments.",
  robots: {
    follow: false,
    index: false,
  },
};

function errorMessage(error: string | undefined) {
  if (error === "not-configured") {
    return "Community sign-in is not configured yet.";
  }
  if (error === "callback") {
    return "The Google sign-in callback could not be completed.";
  }
  if (error === "oauth") {
    return "Google sign-in could not be started.";
  }
  return null;
}

export default async function PublicSignInPage({
  searchParams,
}: PublicSignInPageProps) {
  const params = await searchParams;
  const rawNext = Array.isArray(params.next) ? params.next[0] : params.next;
  const rawError = Array.isArray(params.error) ? params.error[0] : params.error;
  const nextPath = sanitizePublicRedirect(rawNext, "/");
  const authState = await getSupabaseUser();

  if (authState.user) {
    redirect(nextPath);
  }

  const config = getSupabasePublicConfig();
  const message = errorMessage(rawError);

  return (
    <PageShell
      className="compact-page auth-page showcase-page utility-page"
      eyebrow="Community access"
      title="Sign in to join the discussion"
      description="Use Google sign-in to post comments and like reader notes on model, news, comparison, and FAQ pages."
    >
      <section className="auth-layout">
        <article className="auth-card">
          <span className="meta-line">
            <ShieldCheck size={16} aria-hidden="true" />
            Supabase Auth
          </span>
          <h2>Google sign-in</h2>
          <p>
            Your public comments show your profile name. Your email is used by
            the auth provider and is not shown in comment threads.
          </p>

          {!config.configured ? (
            <div className="auth-notice" role="status">
              Configure {config.missing.join(", ")} before community sign-in is
              enabled.
            </div>
          ) : null}

          {message ? (
            <p className="form-error" role="alert">
              {message}
            </p>
          ) : null}

          <form action={signInWithGoogleAction} className="auth-form">
            <input name="next" type="hidden" value={nextPath} />
            <button
              className="button primary auth-submit"
              disabled={!config.configured}
              type="submit"
            >
              <LogIn size={17} aria-hidden="true" />
              Continue with Google
            </button>
          </form>
        </article>

        <aside className="account-panel">
          <p className="eyebrow">Editor access stays separate</p>
          <h2>Looking for admin login?</h2>
          <p>
            The existing protected editor area still uses the original
            environment-backed credentials.
          </p>
          <Link className="button secondary" href="/login">
            Admin login
          </Link>
        </aside>
      </section>
    </PageShell>
  );
}
