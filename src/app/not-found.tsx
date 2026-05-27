import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell compact-page">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>
        This page is not in the current World Models Watch index. Start from the
        definition page or the latest official updates.
      </p>
      <div className="button-row">
        <Link className="button primary" href="/what-is-world-model">
          Read the definition
        </Link>
        <Link className="button secondary" href="/news">
          Latest news
        </Link>
      </div>
    </main>
  );
}
