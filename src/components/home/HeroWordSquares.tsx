"use client";

import type { CSSProperties, MouseEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { getWorldById, type WorldProject } from "@/data/worldsData";
import { getStaticSeoTarget } from "@/lib/seo/page-targets";

const heroSquareIds = ["world-labs", "hy", "happyoyster", "skybox", "genie"] as const;
const seoTarget = getStaticSeoTarget("/");

type PointerPosition = {
  x: number;
  y: number;
};

function getHeroWorlds() {
  return heroSquareIds
    .map((id) => getWorldById(id))
    .filter((world): world is WorldProject => Boolean(world));
}

export function HeroWordSquares() {
  const reduceMotion = useReducedMotion();
  const worlds = useMemo(() => getHeroWorlds(), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pointer, setPointer] = useState<PointerPosition>({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);
  const nextPointerRef = useRef<PointerPosition>({ x: 0, y: 0 });
  const activeWorld = worlds[activeIndex] ?? worlds[0];
  const activeVideoSrc = activeWorld?.heroVideoSrc ?? activeWorld?.videoSrc;
  const activeVideoType = activeWorld?.heroVideoType ?? activeWorld?.videoType;
  const activePosterSrc = activeWorld?.heroPosterSrc ?? activeWorld?.posterSrc;

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (reduceMotion || worlds.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % worlds.length);
    }, 7200);

    return () => window.clearInterval(timer);
  }, [activeIndex, reduceMotion, worlds.length]);

  const updatePointer = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (reduceMotion) return;

      nextPointerRef.current = {
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      };

      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        setPointer(nextPointerRef.current);
      });
    },
    [reduceMotion],
  );

  if (!activeWorld) return null;

  const showPreviousWorld = () => {
    setActiveIndex((current) => (current - 1 + worlds.length) % worlds.length);
  };

  const showNextWorld = () => {
    setActiveIndex((current) => (current + 1) % worlds.length);
  };

  return (
    <section
      className="hero-word-squares"
      id="word-squares"
      onMouseMove={updatePointer}
      onMouseLeave={() => setPointer({ x: 0, y: 0 })}
      style={
        {
          "--square-accent": activeWorld.accent,
          "--square-secondary": activeWorld.secondaryAccent,
          "--square-drift-x": `${pointer.x * -10}px`,
          "--square-drift-y": `${pointer.y * -8}px`,
        } as CSSProperties
      }
    >
      <div className="hero-squares-visual">
        <div className="hero-carousel-stage" aria-hidden="true">
          <AnimatePresence mode="wait">
            {activeVideoSrc && activeVideoType ? (
              <motion.video
                aria-hidden="true"
                autoPlay
                className="hero-carousel-video"
                key={`${activeWorld.id}-${activeVideoSrc}`}
                loop
                muted
                playsInline
                poster={activePosterSrc}
                preload="metadata"
                initial={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, scale: 1.018 }
                }
                animate={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, scale: 1 }
                }
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 1.012 }
                }
                transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.2, 0.75, 0.2, 1] }}
              >
                <source src={activeVideoSrc} type={activeVideoType} />
              </motion.video>
            ) : activePosterSrc ? (
              <motion.img
                alt={`${activeWorld.shortName} AI world model preview`}
                className="hero-carousel-video"
                decoding="async"
                key={`${activeWorld.id}-${activePosterSrc}`}
                src={activePosterSrc}
                initial={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, scale: 1.018 }
                }
                animate={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, scale: 1 }
                }
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 1.012 }
                }
                transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.2, 0.75, 0.2, 1] }}
              />
            ) : null}
          </AnimatePresence>
        </div>
        <div className="hero-carousel-vignette" aria-hidden="true" />
      </div>

      <div className="sr-only">
        <h1>{seoTarget.primaryKeyword}</h1>
        <p>{seoTarget.description}</p>
      </div>

      <div className="hero-carousel-bottombar" aria-label="Featured world model carousel">
        <div className="hero-carousel-models">
          {worlds.map((world, index) => {
            const isActive = world.id === activeWorld.id;

            return (
              <button
                className={`hero-carousel-model${isActive ? " is-active" : ""}`}
                key={world.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                style={
                  {
                    "--card-accent": world.accent,
                    "--card-secondary": world.secondaryAccent,
                    "--card-index": index,
                  } as CSSProperties
                }
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{world.shortName}</strong>
                <span className="hero-carousel-progress" aria-hidden="true" />
              </button>
            );
          })}
        </div>

        <div className="hero-carousel-controls">
          <button type="button" onClick={showPreviousWorld} aria-label="Previous world video">
            <ChevronLeft size={19} aria-hidden="true" />
          </button>
          <button type="button" onClick={showNextWorld} aria-label="Next world video">
            <ChevronRight size={19} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="sr-only" aria-live="polite">
        Current world video: {activeWorld.shortName}
      </div>
    </section>
  );
}
