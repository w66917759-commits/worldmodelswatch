"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Clapperboard,
  Gamepad2,
  MousePointer2,
  Network,
  Orbit,
} from "lucide-react";

import { evolutionSteps } from "./worldsData";

const stepIcons = {
  video: Clapperboard,
  interactive: Gamepad2,
  civilization: Network,
  persistent: Orbit,
} as const;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const activeStep = evolutionSteps[activeIndex];
  const ActiveIcon = stepIcons[activeStep.icon];

  useEffect(() => {
    let frame: number | null = null;

    const updateActiveStep = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollableDistance = Math.max(rect.height - window.innerHeight, 1);
      const progress = clamp(-rect.top / scrollableDistance, 0, 1);
      const nextIndex = Math.round(progress * (evolutionSteps.length - 1));

      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    };

    const scheduleUpdate = () => {
      if (frame !== null) return;

      frame = window.requestAnimationFrame(() => {
        frame = null;
        updateActiveStep();
      });
    };

    updateActiveStep();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="portal-section timeline-section"
      id="timeline"
      style={{ "--timeline-accent": activeStep.accent } as CSSProperties}
    >
      <div className="timeline-ambient" aria-hidden="true" />
      <div className="portal-section-heading compact">
        <span>World Evolution Timeline</span>
        <h2>From generated clips to persistent AI reality.</h2>
        <p>
          World models are moving closer to users: first watched as output, then
          controlled as environments, and eventually revisited as living places.
        </p>
      </div>

      <div className="timeline-layout">
        <aside className="timeline-sticky" aria-live="polite">
          <div className="timeline-sticky-icon" aria-hidden="true">
            <ActiveIcon size={30} />
          </div>
          <p className="timeline-sticky-kicker">
            {activeStep.year} · {activeStep.distanceLabel}
          </p>
          <h3>{activeStep.label}</h3>
          <p>{activeStep.bridge}</p>

          <div className="timeline-action-row">
            <MousePointer2 size={17} aria-hidden="true" />
            <div>
              <span>Human action</span>
              <strong>{activeStep.userAction}</strong>
            </div>
          </div>

          <div className="timeline-example-stack" aria-label="Representative examples">
            {activeStep.examples.map((example) => (
              <span key={example}>{example}</span>
            ))}
          </div>
        </aside>

        <div className="timeline-track" aria-label="World model evolution stages">
          <div className="timeline-flow-spine" aria-hidden="true" />
          {evolutionSteps.map((step, index) => {
            const StepIcon = stepIcons[step.icon];

            return (
              <article
                className={activeIndex === index ? "is-active" : ""}
                key={step.year}
                style={{ "--step-accent": step.accent } as CSSProperties}
              >
                <div className="timeline-node-row">
                  <span className="timeline-node-marker" aria-hidden="true">
                    <StepIcon size={22} />
                  </span>
                  <span className="timeline-step-year">{step.year}</span>
                  {index < evolutionSteps.length - 1 ? (
                    <ArrowRight
                      className="timeline-step-arrow"
                      size={22}
                      aria-hidden="true"
                    />
                  ) : null}
                </div>

                <p className="timeline-distance">{step.distanceLabel}</p>
                <h3>{step.label}</h3>
                <p>{step.text}</p>
                <strong className="timeline-bridge">{step.bridge}</strong>

                <div
                  className="timeline-chip-row"
                  aria-label={`${step.label} examples`}
                >
                  {step.examples.map((example) => (
                    <span key={example}>{example}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
