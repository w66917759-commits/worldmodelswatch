import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell compact-page">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>
        This page is not in the current World Models Watch index. Start from the
        progress overview or the company model map.
      </p>
      <div className="button-row">
        <Link className="button primary" href="/progress">
          AI Progress
        </Link>
        <Link className="button secondary" href="/models">
          Companies & Models
        </Link>
      </div>
    </main>
  );
}
