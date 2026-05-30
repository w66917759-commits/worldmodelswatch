import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, BookOpen, ExternalLink, Layers3 } from "lucide-react";

import { getWorldPrimaryAction } from "@/data/worldsData";
import { getResolvedWorldEvolutionStages } from "@/lib/content";

function stageStyle(accent: string, secondaryAccent: string): CSSProperties {
  return {
    "--evolution-accent": accent,
    "--evolution-secondary": secondaryAccent,
  } as CSSProperties;
}

export function WorldEvolutionMap() {
  const stages = getResolvedWorldEvolutionStages();

  return (
    <section className="world-evolution-map-section" aria-labelledby="world-evolution-title">
      <div className="world-evolution-hero">
        <p>World model evolution</p>
        <h1 id="world-evolution-title">World model evolution from Explore to Build.</h1>
        <span>
          The useful story is not a date list. World model evolution becomes practical as
          people can explore possible worlds, create spaces, control them, simulate action,
          and build inhabited systems.
        </span>
      </div>

      <div className="world-evolution-map" aria-label="World model evolution map">
        {stages.map((stage) => (
          <article
            className="world-evolution-stage"
            id={stage.id}
            key={stage.id}
            style={stageStyle(stage.accent, stage.secondaryAccent)}
          >
            <div className="evolution-stage-copy">
              <p>{stage.number} / {stage.shortTitle}</p>
              <h2>{stage.title}</h2>
              <strong>{stage.summary}</strong>

              <dl className="evolution-stage-facts">
                <div>
                  <dt>What changed</dt>
                  <dd>{stage.whatChanged}</dd>
                </div>
                <div>
                  <dt>Why it matters</dt>
                  <dd>{stage.researchBasis}</dd>
                </div>
                <div>
                  <dt>Boundary</dt>
                  <dd>{stage.boundary}</dd>
                </div>
              </dl>

              <div className="evolution-source-row" aria-label={`${stage.title} research sources`}>
                {stage.sources.map((source) => (
                  <a href={source.url} key={source.id} rel="noreferrer" target="_blank">
                    <BookOpen size={14} aria-hidden="true" />
                    {source.label}
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="evolution-model-grid" aria-label={`${stage.title} example models`}>
              {stage.projects.map((world) => {
                const action = getWorldPrimaryAction(world);

                return (
                  <figure className="evolution-model-tile" key={world.id}>
                    <video autoPlay loop muted playsInline poster={world.posterSrc} preload="metadata">
                      <source src={world.videoSrc} type={world.videoType} />
                    </video>
                    <figcaption>
                      <span>{world.type}</span>
                      <strong>{world.shortName}</strong>
                      <p>{world.summary}</p>
                      <div className="evolution-model-actions">
                        <Link href={world.detailHref}>
                          Model
                          <ArrowRight size={13} aria-hidden="true" />
                        </Link>
                        <a href={action.href} rel="noreferrer" target="_blank">
                          {action.label}
                          <ExternalLink size={13} aria-hidden="true" />
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WorldEvolutionLens() {
  const stages = getResolvedWorldEvolutionStages();

  return (
    <section className="timeline-evolution-lens" aria-labelledby="timeline-evolution-title">
      <div className="timeline-evolution-heading">
        <p>Reading key</p>
        <h2 id="timeline-evolution-title">Read world model evolution through the same five stages.</h2>
        <span>
          The dated rail stays useful when each update is tied to what changed in the model:
          prediction, space, control, physical action, or society.
        </span>
      </div>

      <div className="timeline-evolution-grid" aria-label="Evolution stage shortcuts">
        {stages.map((stage) => (
          <Link
            className="timeline-evolution-stage"
            href={`/world-stream#${stage.id}`}
            key={stage.id}
            style={stageStyle(stage.accent, stage.secondaryAccent)}
          >
            <span>
              <Layers3 size={15} aria-hidden="true" />
              {stage.number}
            </span>
            <strong>{stage.shortTitle}</strong>
            <p>{stage.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
