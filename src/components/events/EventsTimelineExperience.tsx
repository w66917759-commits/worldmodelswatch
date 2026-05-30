"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BookOpen, Layers3 } from "lucide-react";

import { getWorldById, type WorldProject } from "@/data/worldsData";
import {
  getResolvedWorldEvolutionStages,
  type ResolvedWorldEvolutionStage,
  type WorldEvolutionStageId,
} from "@/lib/content";

const stageWorldIds: Record<WorldEvolutionStageId, string> = {
  "understand-predict": "genie",
  "generated-space": "world-labs",
  "controllable-worlds": "oasis",
  "physical-action": "hy",
  "agent-societies": "project-sid",
};

type WheelStage = ResolvedWorldEvolutionStage & {
  world?: WorldProject;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getWheelStages(): WheelStage[] {
  return getResolvedWorldEvolutionStages().map((stage) => ({
    ...stage,
    world: getWorldById(stageWorldIds[stage.id]),
  }));
}

export function EventsTimelineExperience() {
  const reduceMotion = useReducedMotion();
  const stages = useMemo(() => getWheelStages(), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const activeStage = stages[activeIndex] ?? stages[0];

  useEffect(() => {
    const updateActiveStage = () => {
      const section = sectionRef.current;
      if (!section || stages.length === 0) return;

      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(rect.height - window.innerHeight * 0.55, 1);
      const progress = clamp((window.innerHeight * 0.28 - rect.top) / scrollDistance, 0, 1);
      const nextIndex = Math.round(progress * (stages.length - 1));

      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    };

    const scheduleUpdate = () => {
      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateActiveStage();
      });
    };

    updateActiveStage();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [stages.length]);

  if (!activeStage) return null;

  return (
    <section
      ref={sectionRef}
      className="events-timeline-stage"
      aria-labelledby="events-timeline-title"
      style={
        {
          "--events-accent": activeStage.accent,
          "--events-secondary": activeStage.secondaryAccent,
        } as CSSProperties
      }
    >
      <div className="events-timeline-backdrop" aria-hidden="true" />
      <div className="events-timeline-intro">
        <p>AI world model events</p>
        <h1 id="events-timeline-title">AI world model events across five evolution stages.</h1>
        <span>
          The AI world model events layer is easier to scan when every signal is tied to the same
          five practical stages: explore, create, control, simulate, and build.
        </span>
      </div>

      <div className="events-timeline-layout">
        <aside className="events-timeline-focus" aria-live="polite">
          <div className="events-video-frame">
            {activeStage.world ? (
              <motion.video
                key={activeStage.id}
                autoPlay
                loop
                muted
                playsInline
                poster={activeStage.world.posterSrc}
                preload="metadata"
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.025 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.2, 0.75, 0.2, 1] }}
              >
                <source src={activeStage.world.videoSrc} type={activeStage.world.videoType} />
              </motion.video>
            ) : null}
            <div className="events-video-caption">
              <span>{activeStage.number}</span>
              <strong>{activeStage.world?.shortName ?? activeStage.shortTitle}</strong>
            </div>
          </div>

          <div className="events-focus-copy">
            <p>{activeStage.shortTitle}</p>
            <h2>{activeStage.title}</h2>
            <strong>{activeStage.summary}</strong>
            <span>{activeStage.whatChanged}</span>
          </div>

          <div className="events-focus-links" aria-label={`${activeStage.title} sources`}>
            {activeStage.sources.slice(0, 2).map((source) => (
              <a href={source.url} key={source.id} rel="noreferrer" target="_blank">
                <BookOpen size={14} aria-hidden="true" />
                {source.label}
              </a>
            ))}
          </div>
        </aside>

        <div className="events-stage-wheel" aria-label="World model evolution stages">
          {stages.map((stage, index) => {
            const distance = Math.abs(index - activeIndex);
            const offset = reduceMotion ? 0 : index - activeIndex;
            const scale = reduceMotion ? 1 : Math.max(1 - distance * 0.055, 0.82);
            const opacity = reduceMotion ? 1 : Math.max(1 - distance * 0.16, 0.48);
            const translate = reduceMotion ? "0px" : `${offset * 16}px`;
            const rotate = reduceMotion ? "0deg" : `${offset * -7}deg`;

            return (
              <article
                id={stage.id}
                className={`events-wheel-card${index === activeIndex ? " is-active" : ""}`}
                key={stage.id}
                style={
                  {
                    "--stage-accent": stage.accent,
                    "--stage-secondary": stage.secondaryAccent,
                    "--stage-translate": translate,
                    "--stage-rotate": rotate,
                    "--stage-scale": scale,
                    "--stage-opacity": opacity,
                  } as CSSProperties
                }
              >
                <button
                  type="button"
                  aria-current={index === activeIndex ? "step" : undefined}
                  onClick={() => setActiveIndex(index)}
                >
                  <span>
                    <Layers3 size={15} aria-hidden="true" />
                    {stage.number}
                  </span>
                  <strong>{stage.title}</strong>
                  <small>{stage.summary}</small>
                </button>
                <Link href={`/world-stream#${stage.id}`} tabIndex={index === activeIndex ? 0 : -1}>
                  Open stage
                  <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
