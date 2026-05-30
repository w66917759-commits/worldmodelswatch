"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";

import { WorldMedia } from "@/components/world-media";
import { getWorldPrimaryAction, worldsData } from "./worldsData";

export function WorldExplorer() {
  return (
    <section className="portal-section world-explorer" id="world-explorer">
      <div className="portal-section-heading">
        <span>World Explorer</span>
        <h2>Choose a world like a cinematic destination.</h2>
        <p>
          Generated spaces, playable dreams, and simulated societies drift
          through the same dark gallery.
        </p>
      </div>

      <div className="world-explorer-rail" aria-label="Generated world gallery">
        {worldsData.map((world, index) => {
          const primaryAction = getWorldPrimaryAction(world);

          return (
          <motion.article
            className="explorer-card"
            id={world.id}
            key={world.id}
            style={
              {
                "--card-accent": world.accent,
                "--card-secondary": world.secondaryAccent,
              } as CSSProperties
            }
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.06, duration: 0.45 }}
          >
            <WorldMedia posterSrc={world.posterSrc} videoSrc={world.videoSrc} videoType={world.videoType} />
            <span className="explorer-depth">{world.depth}</span>
            <div className="explorer-card-copy">
              <p>{world.type}</p>
              <h3>{world.name}</h3>
              <span>{world.feeling}</span>
              <div className="explorer-card-actions">
                <a className="explorer-primary-link" href={world.detailHref}>
                  Open context
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
                <a
                  className="explorer-source-link"
                  href={primaryAction.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {primaryAction.label}
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
            <ArrowUpRight size={18} aria-hidden="true" />
          </motion.article>
          );
        })}
      </div>
    </section>
  );
}
