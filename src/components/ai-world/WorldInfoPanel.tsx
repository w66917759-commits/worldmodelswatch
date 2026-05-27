"use client";

import type { CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Search } from "lucide-react";

import { getWorldSearchUrl, type WorldProject } from "./worldsData";

type WorldInfoPanelProps = {
  world?: WorldProject;
};

export function WorldInfoPanel({ world }: WorldInfoPanelProps) {
  return (
    <div className="world-info-panel-anchor" id="demos">
      <AnimatePresence mode="wait">
        {world ? (
          <motion.aside
            className="world-info-panel"
            key={world.id}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
            style={
              {
                "--panel-accent": world.accent,
                "--panel-secondary": world.secondaryAccent,
              } as CSSProperties
            }
          >
            <div className="panel-heading">
              <span className="panel-pulse" aria-hidden="true" />
              <div>
                <p>{world.developer}</p>
                <h2>{world.name}</h2>
              </div>
            </div>
            <div className="panel-meta">
              <span>{world.type}</span>
              <span>{world.searchKeywords}</span>
            </div>
            <p className="panel-summary">{world.summary}</p>
            <a
              className="panel-action"
              href={getWorldSearchUrl(world)}
              target="_blank"
              rel="noreferrer"
            >
              <Search size={16} aria-hidden="true" />
              View Demo / Search Materials
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
