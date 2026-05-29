"use client";

import type { CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { WorldProject } from "./worldsData";

type PointerPosition = {
  x: number;
  y: number;
};

type FloatingBackgroundProps = {
  activeWorld: WorldProject;
  pointer: PointerPosition;
};

const particles = [
  { left: 7, top: 18, size: 2, delay: 0, duration: 18 },
  { left: 13, top: 46, size: 1, delay: 1.2, duration: 24 },
  { left: 18, top: 78, size: 2, delay: 0.7, duration: 22 },
  { left: 25, top: 28, size: 1, delay: 2.1, duration: 20 },
  { left: 31, top: 63, size: 2, delay: 1.6, duration: 26 },
  { left: 39, top: 12, size: 1, delay: 0.4, duration: 19 },
  { left: 44, top: 82, size: 1, delay: 2.6, duration: 23 },
  { left: 51, top: 51, size: 2, delay: 1, duration: 28 },
  { left: 58, top: 19, size: 1, delay: 3.2, duration: 20 },
  { left: 64, top: 74, size: 2, delay: 0.9, duration: 25 },
  { left: 72, top: 14, size: 1, delay: 1.8, duration: 22 },
  { left: 76, top: 45, size: 2, delay: 2.8, duration: 27 },
  { left: 84, top: 30, size: 1, delay: 0.2, duration: 21 },
  { left: 91, top: 66, size: 2, delay: 2.3, duration: 24 },
  { left: 95, top: 9, size: 1, delay: 1.4, duration: 18 },
  { left: 6, top: 88, size: 1, delay: 3.6, duration: 29 },
  { left: 48, top: 7, size: 2, delay: 4, duration: 26 },
  { left: 88, top: 84, size: 1, delay: 3.1, duration: 23 },
];

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
        className="world-pointer-glow"
        animate={{
          left: `${(pointer.x + 1) * 50}%`,
          top: `${(pointer.y + 1) * 50}%`,
        }}
        transition={{ type: "spring", stiffness: 54, damping: 24, mass: 1.2 }}
      />
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
            initial={{ opacity: 0.72, scale: 1.012, filter: "blur(2px)" }}
            animate={{ opacity: 0.9, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.045, filter: "blur(18px)" }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <video
              className="world-bg-video"
              autoPlay
              muted
              loop
              playsInline
              poster={activeWorld.posterSrc}
              preload="metadata"
            >
              <source src={activeWorld.videoSrc} type={activeWorld.videoType} />
            </video>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="world-haze"
        animate={{
          x: pointer.x * -18,
          y: pointer.y * -12,
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          x: { type: "spring", stiffness: 42, damping: 20 },
          y: { type: "spring", stiffness: 42, damping: 20 },
          backgroundPosition: {
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />
      <motion.div
        className="world-perspective-shift"
        animate={{ x: pointer.x * 12, y: pointer.y * 6 }}
        transition={{ type: "spring", stiffness: 36, damping: 18 }}
      >
        <div className="world-perspective-grid" />
      </motion.div>
      <div className="world-fog fog-one" />
      <div className="world-fog fog-two" />
      <div className="world-light-sweep" />
      <div className="particle-field">
        {particles.map((particle, index) => (
          <span
            className="world-particle"
            key={`${particle.left}-${particle.top}-${index}`}
            style={
              {
                "--particle-left": `${particle.left}%`,
                "--particle-top": `${particle.top}%`,
                "--particle-size": `${particle.size}px`,
                "--particle-delay": `${particle.delay}s`,
                "--particle-duration": `${particle.duration}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
