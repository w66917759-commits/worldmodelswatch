"use client";

import type { CSSProperties, MouseEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { AuthStatusLink } from "@/components/auth-status-link";
import { FloatingBackground } from "./FloatingBackground";
import { WorldInfoPanel } from "./WorldInfoPanel";
import { WorldNode } from "./WorldNode";
import { type WorldProject, worldsData } from "./worldsData";

type PointerPosition = {
  x: number;
  y: number;
};

const topNav = [
  { href: "#worlds", label: "Lobby" },
  { href: "#world-explorer", label: "Explorer" },
  { href: "#world-forge", label: "Forge" },
  { href: "#future-index", label: "Index" },
];

function findWorld(id: string | null) {
  if (!id) return undefined;
  return worldsData.find((world) => world.id === id);
}

export function WorldHero() {
  const reduceMotion = useReducedMotion();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [flyTarget, setFlyTarget] = useState<WorldProject | null>(null);
  const [pointer, setPointer] = useState<PointerPosition>({ x: 0, y: 0 });
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const frameRef = useRef<number | null>(null);
  const nextPointerRef = useRef<PointerPosition>({ x: 0, y: 0 });
  const flyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hoveredWorld = useMemo(() => findWorld(hoveredId), [hoveredId]);
  const activeWorld = useMemo(() => findWorld(activeId), [activeId]);
  const panelWorld = hoveredWorld ?? activeWorld;
  const visualWorld = activeWorld ?? hoveredWorld ?? worldsData[0];

  const updatePointer = useCallback((event: MouseEvent<HTMLElement>) => {
    if (reduceMotion || !hasFinePointer) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    nextPointerRef.current = {
      x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
      y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
    };

    if (frameRef.current !== null) return;

    frameRef.current = window.requestAnimationFrame(() => {
      setPointer(nextPointerRef.current);
      frameRef.current = null;
    });
  }, [hasFinePointer, reduceMotion]);

  const resetPointer = useCallback(() => {
    setPointer({ x: 0, y: 0 });
  }, []);

  const handleSelect = useCallback((id: string) => {
    const nextWorld = findWorld(id);
    if (!nextWorld) return;

    setActiveId(id);
    setFlyTarget(nextWorld);

    if (flyTimeoutRef.current) {
      clearTimeout(flyTimeoutRef.current);
    }

    flyTimeoutRef.current = setTimeout(() => {
      setFlyTarget(null);
    }, 820);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    const update = () => setHasFinePointer(query.matches);

    update();
    query.addEventListener("change", update);

    return () => {
      query.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      if (flyTimeoutRef.current) {
        clearTimeout(flyTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`ai-world-shell${flyTarget ? " is-warping" : ""}`}
      id="lobby"
      onMouseMove={updatePointer}
      onMouseLeave={resetPointer}
      style={
        {
          "--active-accent": visualWorld.accent,
          "--active-secondary": visualWorld.secondaryAccent,
        } as CSSProperties
      }
    >
      <FloatingBackground activeWorld={visualWorld} pointer={pointer} />

      <header className="ai-world-topbar">
        <a className="ai-world-logo" href="/" aria-label="Generated Worlds home">
          <span aria-hidden="true" />
          Generated Worlds
        </a>
        <nav className="ai-world-nav" aria-label="AI world navigation">
          {topNav.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <AuthStatusLink className="ai-world-auth" variant="light" />
        </nav>
      </header>

      <div className="world-stage" id="worlds">
        <motion.div
          className="world-core"
          animate={{
            x: pointer.x * -20,
            y: pointer.y * -14,
            scale: flyTarget ? 1.08 : 1,
          }}
          transition={{ type: "spring", stiffness: 70, damping: 22 }}
          aria-hidden="true"
        >
          <span className="core-ring ring-one" />
          <span className="core-ring ring-two" />
          <span className="core-ring ring-three" />
          <div className="core-label">
            <span>AI</span>
            <strong>WORLD</strong>
          </div>
        </motion.div>

        {worldsData.map((world, index) => (
          <WorldNode
            key={world.id}
            world={world}
            index={index}
            isActive={activeId === world.id}
            isPreviewed={hoveredId === world.id}
            pointer={pointer}
            onPreview={setHoveredId}
            onPreviewEnd={() => setHoveredId(null)}
            onSelect={handleSelect}
          />
        ))}
      </div>

      <WorldInfoPanel world={panelWorld} />

      <AnimatePresence>
        {flyTarget ? (
          <motion.div
            className="camera-fly-layer"
            key={flyTarget.id}
            initial={{ opacity: 0, scale: 0.35 }}
            animate={{ opacity: [0, 1, 0], scale: [0.35, 1.8, 2.35] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
            style={
              {
                "--fly-accent": flyTarget.accent,
                "--fly-secondary": flyTarget.secondaryAccent,
              } as CSSProperties
            }
            aria-hidden="true"
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
