import type { Metadata } from "next";
import Link from "next/link";
import { Box, Building2 } from "lucide-react";

import { modelProfiles } from "@/lib/content";

export const metadata: Metadata = {
  title: "World Model Dossiers",
  description:
    "Normalized profiles for Genie 3, Marble, World API, GWM-1, Cosmos, and other world model systems.",
  alternates: {
    canonical: "/models",
  },
};

export default function ModelsPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="eyebrow">Model dossiers</p>
        <h1>World model systems to watch</h1>
        <p>
          Each dossier keeps the same fields: organization, category, release
          date, availability, strengths, limits, and official sources.
        </p>
      </section>

      <section className="card-grid">
        {modelProfiles.map((model) => (
          <Link className="model-card" href={`/models/${model.slug}`} key={model.slug}>
            <span className="meta-line">
              <Building2 size={16} aria-hidden="true" />
              {model.organization}
            </span>
            <h2>{model.name}</h2>
            <p>{model.summary}</p>
            <span className="tag-line">
              <Box size={15} aria-hidden="true" />
              {model.category}
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
