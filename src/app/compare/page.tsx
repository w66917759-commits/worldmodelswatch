import type { Metadata } from "next";
import Link from "next/link";
import { Table2 } from "lucide-react";

import { comparisons } from "@/lib/content";

export const metadata: Metadata = {
  title: "World Model Comparisons",
  description:
    "Crawlable comparison tables for world models, video models, 3D world systems, and physical AI platforms.",
  alternates: {
    canonical: "/compare",
  },
};

export default function ComparePage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Comparison hub</p>
        <h1>World model comparisons</h1>
        <p>
          These pages are built around readable tables so readers, search
          engines, and other sites can cite specific differences instead of
          vague category summaries.
        </p>
      </section>

      <section className="card-grid">
        {comparisons.map((comparison) => (
          <Link className="comparison-card large" href={`/compare/${comparison.slug}`} key={comparison.slug}>
            <Table2 size={20} aria-hidden="true" />
            <h2>{comparison.title}</h2>
            <p>{comparison.summary}</p>
            <span>Updated {comparison.updated}</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
