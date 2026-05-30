import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, ExternalLink, Layers3, Play } from "lucide-react";

import { getWorldPrimaryAction, type WorldProject } from "@/data/worldsData";

type ModelUseCaseGridProps = {
  worlds: WorldProject[];
  eyebrow?: string;
  title?: string;
  description?: string;
  id?: string;
  compact?: boolean;
};

function worldStyle(world: WorldProject): CSSProperties {
  return {
    "--usecase-accent": world.accent,
    "--usecase-secondary": world.secondaryAccent,
  } as CSSProperties;
}

export function ModelUseCaseGrid({
  worlds,
  eyebrow = "Use cases",
  title = "See what each world model is useful for.",
  description = "The fastest way to understand the category is to compare output, use case, access, and the next action.",
  id = "model-use-cases",
  compact = false,
}: ModelUseCaseGridProps) {
  if (worlds.length === 0) return null;

  return (
    <section
      className={`model-usecase-section${compact ? " compact" : ""}`}
      aria-labelledby={id}
    >
      <div className="showcase-section-heading">
        <p className="showcase-kicker">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
        <p>{description}</p>
      </div>

      <div className={`model-usecase-grid${worlds.length === 1 ? " single" : ""}`}>
        {worlds.map((world) => {
          const action = getWorldPrimaryAction(world);

          return (
            <article className="model-usecase-card" key={world.id} style={worldStyle(world)}>
              <div className="model-usecase-media">
                <video autoPlay loop muted playsInline poster={world.posterSrc} preload="metadata">
                  <source src={world.videoSrc} type={world.videoType} />
                </video>
                <span>
                  <Play size={13} aria-hidden="true" />
                  {world.outputType}
                </span>
              </div>

              <div className="model-usecase-copy">
                <div className="model-usecase-title-row">
                  <span>{world.accessType}</span>
                  <strong>{world.shortName}</strong>
                </div>
                <h3>{world.name}</h3>
                <p>{world.practicalUse}</p>

                <div className="model-usecase-facts">
                  <div>
                    <span>Output</span>
                    <strong>{world.outputType}</strong>
                  </div>
                  <div>
                    <span>Use case</span>
                    <strong>{world.useCases.join(" / ")}</strong>
                  </div>
                  <div>
                    <span>Best for</span>
                    <strong>{world.bestFor.join(", ")}</strong>
                  </div>
                </div>

                <div className="model-usecase-actions">
                  <a href={action.href} rel="noreferrer" target="_blank">
                    <ExternalLink size={15} aria-hidden="true" />
                    {action.label}
                  </a>
                  <Link href={world.detailHref}>
                    <Layers3 size={15} aria-hidden="true" />
                    Model profile
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
