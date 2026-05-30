import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { WorldMedia } from "@/components/world-media";
import { getWorldById, getWorldPrimaryAction } from "@/data/worldsData";
import { textureImages } from "@/lib/showcase";

const creationGateIds = ["skybox", "world-labs"] as const;

const copyById = {
  skybox: {
    title: "AI world generator for 360 environments",
    description: "Use Skybox AI as an AI world generator for panoramic environments.",
  },
  "world-labs": {
    title: "AI world generator for persistent 3D worlds",
    description: "Use World Labs Marble as an AI world generator for explorable 3D spaces.",
  },
} as const;

const textureById = {
  skybox: textureImages.skyboxObservatory,
  "world-labs": textureImages.spatialLab,
} as const;

function imageValue(src?: string) {
  return src ? `url("${src}")` : undefined;
}

export function CreateWorlds() {
  const gates = creationGateIds
    .map((id) => {
      const world = getWorldById(id);
      if (!world?.createHref) return null;
      return { world, copy: copyById[id] };
    })
    .filter((gate): gate is NonNullable<typeof gate> => Boolean(gate));

  return (
    <section className="create-worlds-gateway" id="create-worlds" aria-labelledby="create-worlds-title">
      <div className="portal-section-heading compact">
        <span>Create / Explore / Build</span>
        <h2 id="create-worlds-title">Create AI worlds through tools people can open today.</h2>
        <p>
          World Models Watch does not generate worlds itself. This page keeps the usable
          product lane clear: what each tool creates, who it is best for, and where to open it.
        </p>
      </div>

      <div className="creation-gate-grid">
        {gates.map(({ world, copy }) => {
          const action = getWorldPrimaryAction(world);

          return (
            <article
              className="creation-gate"
              key={world.id}
              style={
                {
                  "--gate-accent": world.accent,
                  "--gate-secondary": world.secondaryAccent,
                  "--gate-bg-image": imageValue(textureById[world.id as keyof typeof textureById]),
                } as CSSProperties
              }
            >
              <WorldMedia posterSrc={world.posterSrc} videoSrc={world.videoSrc} videoType={world.videoType} />
              <div className="creation-gate-copy">
                <span>{world.accessType} / {world.outputType}</span>
                <h3>{copy.title}</h3>
                <p>{world.practicalUse || copy.description}</p>

                <div className="creation-gate-facts">
                  <div>
                    <span>Use case</span>
                    <strong>{world.useCases.join(" / ")}</strong>
                  </div>
                  <div>
                    <span>Best for</span>
                    <strong>{world.bestFor.join(", ")}</strong>
                  </div>
                </div>

                <ul className="creation-gate-checklist">
                  {world.bestFor.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={15} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a href={action.href} target="_blank" rel="noreferrer">
                  {action.label}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
              <Link className="creation-context-link" href={world.detailHref}>
                Context
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
