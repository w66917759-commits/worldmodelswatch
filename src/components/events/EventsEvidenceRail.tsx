import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, ShieldCheck } from "lucide-react";

import { getEvolutionStageById, type NewsItem } from "@/lib/content";

type EventsEvidenceRailProps = {
  items: NewsItem[];
};

export function EventsEvidenceRail({ items }: EventsEvidenceRailProps) {
  return (
    <section className="events-evidence-section" aria-labelledby="events-evidence-title">
      <div className="events-evidence-heading">
        <p>Source-backed rail</p>
        <h2 id="events-evidence-title">Every AI world model event keeps the date, stage, and source signal visible.</h2>
        <span>
          The list stays chronological for readers and crawlers, while the stage labels connect
          each update back to the evolution wheel above.
        </span>
      </div>

      <div className="events-evidence-rail">
        {items.map((item) => {
          const stage = getEvolutionStageById(item.evolutionStageId);

          return (
            <article
              className="events-evidence-card"
              key={item.slug}
              style={
                {
                  "--event-accent": stage?.accent ?? "#74f4ff",
                  "--event-secondary": stage?.secondaryAccent ?? "#f6d26e",
                } as CSSProperties
              }
            >
              <div className="events-evidence-date">
                <span>
                  <CalendarDays size={15} aria-hidden="true" />
                  <time dateTime={item.date}>{item.date}</time>
                </span>
                {stage ? <a href={`#${stage.id}`}>{stage.shortTitle}</a> : null}
              </div>

              <div className="events-evidence-copy">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className="events-evidence-facts">
                  <span>{item.organization}</span>
                  <span>
                    <ShieldCheck size={14} aria-hidden="true" />
                    {item.sourceConfidence ?? "Source-backed update"}
                  </span>
                </div>
              </div>

              <Link className="events-evidence-link" href={`/news/${item.slug}`}>
                Read update
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
