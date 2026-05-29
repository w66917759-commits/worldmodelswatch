"use client";

import type { CSSProperties, MouseEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

import { AuthStatusLink } from "@/components/auth-status-link";
import { FloatingBackground } from "./FloatingBackground";
import { WorldNode } from "./WorldNode";
import { type WorldProject, worldsData } from "./worldsData";
import { site } from "@/lib/site";

type PointerPosition = {
  x: number;
  y: number;
};

type AudioWindow = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext;
  };

type AtmosphereNodes = {
  context: AudioContext;
  gain: GainNode;
  oscillators: OscillatorNode[];
  lfo: OscillatorNode;
};

const homepageHeroWorldIds = [
  "world-labs",
  "happyoyster",
  "genie",
  "skybox",
  "hy",
] as const;

function findWorld(id: string | null) {
  if (!id) return undefined;
  return worldsData.find((world) => world.id === id);
}

function stopAtmosphereNodes(nodes: AtmosphereNodes) {
  const now = nodes.context.currentTime;
  nodes.gain.gain.cancelScheduledValues(now);
  nodes.gain.gain.setTargetAtTime(0.0001, now, 0.2);

  window.setTimeout(() => {
    for (const oscillator of nodes.oscillators) {
      try {
        oscillator.stop();
      } catch {
        // Oscillators may already be stopped if the browser suspends audio.
      }
    }

    try {
      nodes.lfo.stop();
    } catch {
      // See oscillator shutdown note above.
    }

    void nodes.context.close();
  }, 520);
}

function useAtmosphereSound() {
  const [enabled, setEnabled] = useState(false);
  const nodesRef = useRef<AtmosphereNodes | null>(null);

  const stop = useCallback(() => {
    const nodes = nodesRef.current;
    if (!nodes) {
      setEnabled(false);
      return;
    }

    nodesRef.current = null;
    stopAtmosphereNodes(nodes);
    setEnabled(false);
  }, []);

  const start = useCallback(async () => {
    if (nodesRef.current) return;

    const AudioContextCtor =
      window.AudioContext ?? (window as AudioWindow).webkitAudioContext;

    if (!AudioContextCtor) return;

    const context = new AudioContextCtor();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    const lfo = context.createOscillator();
    const lfoGain = context.createGain();
    const lowDrone = context.createOscillator();
    const highDrone = context.createOscillator();

    gain.gain.value = 0.0001;
    filter.type = "lowpass";
    filter.frequency.value = 420;
    filter.Q.value = 0.42;

    lowDrone.type = "sine";
    lowDrone.frequency.value = 54;
    highDrone.type = "triangle";
    highDrone.frequency.value = 108.4;
    lfo.type = "sine";
    lfo.frequency.value = 0.035;
    lfoGain.gain.value = 0.012;

    lowDrone.connect(filter);
    highDrone.connect(filter);
    filter.connect(gain);
    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);
    gain.connect(context.destination);

    lowDrone.start();
    highDrone.start();
    lfo.start();

    await context.resume();
    gain.gain.setTargetAtTime(0.038, context.currentTime, 0.48);

    nodesRef.current = {
      context,
      gain,
      oscillators: [lowDrone, highDrone],
      lfo,
    };
    setEnabled(true);
  }, []);

  const toggle = useCallback(() => {
    if (nodesRef.current) {
      stop();
      return;
    }

    void start();
  }, [start, stop]);

  useEffect(() => {
    return () => {
      const nodes = nodesRef.current;
      if (!nodes) return;

      nodesRef.current = null;
      stopAtmosphereNodes(nodes);
    };
  }, []);

  return { enabled, toggle };
}

export function WorldHero() {
  const reduceMotion = useReducedMotion();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>("world-labs");
  const [flyTarget, setFlyTarget] = useState<WorldProject | null>(null);
  const [pointer, setPointer] = useState<PointerPosition>({ x: 0, y: 0 });
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const { enabled: atmosphereEnabled, toggle: toggleAtmosphere } =
    useAtmosphereSound();

  const frameRef = useRef<number | null>(null);
  const nextPointerRef = useRef<PointerPosition>({ x: 0, y: 0 });
  const flyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const selectorWorlds = useMemo(
    () =>
      homepageHeroWorldIds
        .map((id) => findWorld(id))
        .filter((world): world is WorldProject => Boolean(world)),
    [],
  );

  const activeWorld = useMemo(() => findWorld(activeId), [activeId]);
  const visualWorld = activeWorld ?? selectorWorlds[0] ?? worldsData[0];
  const backgroundWorld = visualWorld;

  const updatePointer = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (reduceMotion || !hasFinePointer) return;

      nextPointerRef.current = {
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      };

      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        setPointer(nextPointerRef.current);
        frameRef.current = null;
      });
    },
    [hasFinePointer, reduceMotion],
  );

  const resetPointer = useCallback(() => {
    setPointer({ x: 0, y: 0 });
  }, []);

  const handleSelect = useCallback(
    (id: string) => {
      const nextWorld = findWorld(id);
      if (!nextWorld) return;

      setHoveredId(null);
      if (activeId === id) return;

      setActiveId(id);
      setFlyTarget(nextWorld);

      if (flyTimeoutRef.current) {
        clearTimeout(flyTimeoutRef.current);
      }
      flyTimeoutRef.current = setTimeout(() => {
        setFlyTarget(null);
      }, 940);
    },
    [activeId],
  );

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
      <FloatingBackground activeWorld={backgroundWorld} pointer={pointer} />

      <header className="ai-world-topbar">
        <a className="ai-world-logo" href="/" aria-label={`${site.name} home`}>
          <span aria-hidden="true" />
          {site.name}
        </a>
        <nav className="ai-world-nav" aria-label="AI world navigation">
          {site.homeNav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <button
            className="atmosphere-toggle"
            type="button"
            aria-pressed={atmosphereEnabled}
            onClick={toggleAtmosphere}
          >
            {atmosphereEnabled ? (
              <Volume2 size={16} aria-hidden="true" />
            ) : (
              <VolumeX size={16} aria-hidden="true" />
            )}
            <span>Atmosphere</span>
          </button>
          <AuthStatusLink className="ai-world-auth" variant="light" />
        </nav>
      </header>

      <div className="spatial-hero-content">
        <div className="world-stage" id="worlds">
          <motion.div className="world-map-drift">
            {selectorWorlds.map((world, index) => (
              <WorldNode
                key={world.id}
                world={world}
                index={index}
                isActive={activeId === world.id}
                isIncoming={flyTarget?.id === world.id}
                isPreviewed={hoveredId === world.id}
                onPreview={setHoveredId}
                onPreviewEnd={() => setHoveredId(null)}
                onSelect={handleSelect}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {flyTarget ? (
          <motion.div
            className="camera-fly-layer"
            key={flyTarget.id}
            initial={{ opacity: 0, scale: 0.35, filter: "blur(12px)" }}
            animate={{
              opacity: [0, 0.92, 0],
              scale: [0.35, 1.7, 2.45],
              filter: ["blur(12px)", "blur(1px)", "blur(18px)"],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.94, ease: [0.16, 1, 0.3, 1] }}
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
