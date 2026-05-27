import { ExternalLink } from "lucide-react";

import type { Source } from "@/lib/content";

type SourceListProps = {
  sources: Source[];
};

export function SourceList({ sources }: SourceListProps) {
  return (
    <section className="source-block" aria-labelledby="sources">
      <h2 id="sources">Sources</h2>
      <ul>
        {sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noreferrer">
              <span>{source.label}</span>
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
