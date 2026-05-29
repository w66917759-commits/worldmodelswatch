"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

import type { WorldProject } from "./worldsData";

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
            initial={false}
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
                <p>Current world</p>
                <h2>{world.name}</h2>
              </div>
            </div>
            <div className="panel-meta">
              <span>{world.developer}</span>
              <span>{world.type}</span>
            </div>
            <div className="panel-capabilities" aria-label="World capabilities">
              <span>Move through</span>
              <span>Edit</span>
              <span>Inhabit</span>
            </div>
            <div className="panel-action-row">
              <Link className="panel-action" href={world.detailHref}>
                <BookOpen size={16} aria-hidden="true" />
                Open site context
              </Link>
              <a
                className="panel-action secondary"
                href={world.sourceHref ?? world.demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Official demo
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
