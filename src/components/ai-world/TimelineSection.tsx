"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import { evolutionSteps } from "./worldsData";

export function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = evolutionSteps[activeIndex];

  return (
    <section
      className="portal-section timeline-section"
      id="timeline"
      style={{ "--timeline-accent": activeStep.accent } as CSSProperties}
    >
      <div className="timeline-ambient" aria-hidden="true" />
      <div className="portal-section-heading compact">
        <span>World Evolution Timeline</span>
        <h2>From generated clips to persistent AI reality.</h2>
      </div>

      <div className="timeline-layout">
        <div className="timeline-sticky">
          <span>{activeStep.year}</span>
          <h3>{activeStep.label}</h3>
          <p>{activeStep.text}</p>
        </div>

        <div className="timeline-track">
          {evolutionSteps.map((step, index) => (
            <motion.article
              className={activeIndex === index ? "is-active" : ""}
              key={step.year}
              onViewportEnter={() => setActiveIndex(index)}
              viewport={{ amount: 0.68 }}
              style={{ "--step-accent": step.accent } as CSSProperties}
            >
              <span>{step.year}</span>
              <h3>{step.label}</h3>
              <p>{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
