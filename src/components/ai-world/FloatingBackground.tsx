"use client";

import type { CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { WorldMedia } from "@/components/world-media";
import type { WorldProject } from "./worldsData";

type PointerPosition = {
  x: number;
  y: number;
};

type FloatingBackgroundProps = {
  activeWorld: WorldProject;
  pointer: PointerPosition;
};

export function FloatingBackground({
  activeWorld,
  pointer,
}: FloatingBackgroundProps) {
  const style = {
    "--active-accent": activeWorld.accent,
    "--active-secondary": activeWorld.secondaryAccent,
  } as CSSProperties;
  const videoPlaneStyle = activeWorld.posterSrc
    ? ({
        backgroundImage: `url(${activeWorld.posterSrc})`,
      } as CSSProperties)
    : undefined;

  return (
    <div className="floating-background" style={style} aria-hidden="true">
      <motion.div
        className="world-video-plane"
        style={videoPlaneStyle}
        animate={{
          x: pointer.x * -24,
          y: pointer.y * -18,
          scale: 1.06,
        }}
        transition={{ type: "spring", stiffness: 36, damping: 20 }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={activeWorld.id}
            className="world-bg-video-layer"
            initial={{ opacity: 1, scale: 1.012, filter: "blur(2px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.045, filter: "blur(18px)" }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <WorldMedia
              className="world-bg-video"
              posterSrc={activeWorld.posterSrc}
              videoSrc={activeWorld.videoSrc}
              videoType={activeWorld.videoType}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
