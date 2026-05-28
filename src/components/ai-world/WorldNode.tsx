"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";

import type { WorldProject } from "./worldsData";

type WorldNodeProps = {
  world: WorldProject;
  index: number;
  isActive: boolean;
  isIncoming: boolean;
  isPreviewed: boolean;
  onPreview: (id: string) => void;
  onPreviewEnd: () => void;
  onSelect: (id: string) => void;
};

export function WorldNode({
  world,
  index,
  isActive,
  isIncoming,
  isPreviewed,
  onPreview,
  onPreviewEnd,
  onSelect,
}: WorldNodeProps) {
  return (
    <motion.button
      className={[
        "world-node",
        `depth-${world.depth}`,
        isActive ? "is-active" : "",
        isIncoming ? "is-incoming" : "",
        isPreviewed ? "is-previewed" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      type="button"
      aria-pressed={isActive}
      aria-label={`Open ${world.name}`}
      style={
        {
          left: `${world.position.x}%`,
          top: `${world.position.y}%`,
          "--node-accent": world.accent,
          "--node-secondary": world.secondaryAccent,
          "--node-delay": `${index * 120}ms`,
        } as CSSProperties
      }
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{
        opacity: 1,
        scale: isActive ? 1.08 : isIncoming ? 1.12 : isPreviewed ? 1.045 : 1,
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
      }}
      transition={{
        opacity: { duration: 0.5, delay: index * 0.12 },
        scale: { type: "spring", stiffness: 180, damping: 18 },
        x: { type: "spring", stiffness: 80, damping: 24 },
        y: { type: "spring", stiffness: 80, damping: 24 },
        rotateX: { type: "spring", stiffness: 70, damping: 22 },
        rotateY: { type: "spring", stiffness: 70, damping: 22 },
      }}
      whileHover={{ scale: isActive ? 1.13 : 1.08 }}
      onMouseEnter={() => onPreview(world.id)}
      onMouseLeave={onPreviewEnd}
      onFocus={() => onPreview(world.id)}
      onBlur={onPreviewEnd}
      onClick={() => onSelect(world.id)}
    >
      <span className="node-orbit-ring" aria-hidden="true" />
      <span className="node-float-shell">
        <span className="node-beacon" aria-hidden="true">
          <span />
        </span>
        <span className="node-copy">
          <strong>{world.name}</strong>
          <span>{world.type}</span>
          <em>{world.summary}</em>
        </span>
      </span>
    </motion.button>
  );
}
