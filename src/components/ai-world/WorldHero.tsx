"use client";

import type { CSSProperties, MouseEvent, PointerEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowRight, ExternalLink, Volume2, VolumeX } from "lucide-react";

import { AuthStatusLink } from "@/components/auth-status-link";
import { FloatingBackground } from "./FloatingBackground";
import { WorldInfoPanel } from "./WorldInfoPanel";
import { WorldNode } from "./WorldNode";
import {
  heroMontageWorldIds,
  type WorldProject,
  worldsData,
} from "./worldsData";
import { site } from "@/lib/site";

type PointerPosition = {
  x: number;
  y: number;
};

type DragState = {
  active: boolean;
  pointerId: number | null;
  lastX: number;
  lastY: number;
  totalX: number;
  totalY: number;
  velocityX: number;
  velocityY: number;
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

const dragLimit = 150;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

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

function shouldIgnoreDragTarget(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    Boolean(target.closest(".ai-world-topbar, .world-info-panel"))
  );
}

export function WorldHero() {
  const reduceMotion = useReducedMotion();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>("world-labs");
  const [flyTarget, setFlyTarget] = useState<WorldProject | null>(null);
  const [montageIndex, setMontageIndex] = useState(0);
  const [pointer, setPointer] = useState<PointerPosition>({ x: 0, y: 0 });
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const { enabled: atmosphereEnabled, toggle: toggleAtmosphere } =
    useAtmosphereSound();

  const driftX = useMotionValue(0);
  const driftY = useMotionValue(0);
  const springDriftX = useSpring(driftX, {
    stiffness: 34,
    damping: 21,
    mass: 1.25,
  });
  const springDriftY = useSpring(driftY, {
    stiffness: 34,
    damping: 21,
    mass: 1.25,
  });

  const frameRef = useRef<number | null>(null);
  const nextPointerRef = useRef<PointerPosition>({ x: 0, y: 0 });
  const flyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activateTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragLockTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragLockRef = useRef(false);
  const dragStateRef = useRef<DragState>({
    active: false,
    pointerId: null,
    lastX: 0,
    lastY: 0,
    totalX: 0,
    totalY: 0,
    velocityX: 0,
    velocityY: 0,
  });

  const heroMontageWorlds = useMemo(
    () =>
      heroMontageWorldIds
        .map((id) => findWorld(id))
        .filter((world): world is WorldProject => Boolean(world)),
    [],
  );
  const selectorWorlds = useMemo(() => {
    const primaryWorld = findWorld("world-labs");
    if (!primaryWorld) return worldsData;

    return [
      primaryWorld,
      ...worldsData.filter((world) => world.id !== primaryWorld.id),
    ];
  }, []);

  const montageWorld =
    heroMontageWorlds[montageIndex % heroMontageWorlds.length] ?? worldsData[0];
  const hoveredWorld = useMemo(() => findWorld(hoveredId), [hoveredId]);
  const activeWorld = useMemo(() => findWorld(activeId), [activeId]);
  const visualWorld = flyTarget ?? hoveredWorld ?? activeWorld ?? montageWorld;
  const backgroundWorld = visualWorld;
  const panelWorld = flyTarget ?? hoveredWorld ?? activeWorld ?? montageWorld;

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

  const handlePointerDown = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (
        reduceMotion ||
        !hasFinePointer ||
        event.button !== 0 ||
        shouldIgnoreDragTarget(event.target)
      ) {
        return;
      }

      dragStateRef.current = {
        active: true,
        pointerId: event.pointerId,
        lastX: event.clientX,
        lastY: event.clientY,
        totalX: 0,
        totalY: 0,
        velocityX: 0,
        velocityY: 0,
      };

      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {
        // Pointer capture is an enhancement; dragging still works without it.
      }
    },
    [hasFinePointer, reduceMotion],
  );

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      const dragState = dragStateRef.current;
      if (!dragState.active || dragState.pointerId !== event.pointerId) return;

      const deltaX = event.clientX - dragState.lastX;
      const deltaY = event.clientY - dragState.lastY;
      const scaledDeltaX = deltaX * 0.48;
      const scaledDeltaY = deltaY * 0.48;

      dragState.lastX = event.clientX;
      dragState.lastY = event.clientY;
      dragState.totalX += deltaX;
      dragState.totalY += deltaY;
      dragState.velocityX = scaledDeltaX;
      dragState.velocityY = scaledDeltaY;

      driftX.set(clamp(driftX.get() + scaledDeltaX, -dragLimit, dragLimit));
      driftY.set(clamp(driftY.get() + scaledDeltaY, -dragLimit, dragLimit));
    },
    [driftX, driftY],
  );

  const endDrag = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      const dragState = dragStateRef.current;
      if (!dragState.active || dragState.pointerId !== event.pointerId) return;

      dragState.active = false;
      dragState.pointerId = null;

      const dragDistance = Math.hypot(dragState.totalX, dragState.totalY);
      if (dragDistance > 7) {
        dragLockRef.current = true;
        if (dragLockTimeoutRef.current) {
          clearTimeout(dragLockTimeoutRef.current);
        }
        dragLockTimeoutRef.current = setTimeout(() => {
          dragLockRef.current = false;
        }, 90);
      }

      try {
        event.currentTarget.releasePointerCapture(event.pointerId);
      } catch {
        // Capture may already be released by the browser.
      }

      animate(
        driftX,
        clamp(driftX.get() + dragState.velocityX * 12, -dragLimit, dragLimit),
        {
          type: "spring",
          stiffness: 24,
          damping: 18,
          mass: 1.35,
          velocity: dragState.velocityX * 8,
        },
      );
      animate(
        driftY,
        clamp(driftY.get() + dragState.velocityY * 12, -dragLimit, dragLimit),
        {
          type: "spring",
          stiffness: 24,
          damping: 18,
          mass: 1.35,
          velocity: dragState.velocityY * 8,
        },
      );
    },
    [driftX, driftY],
  );

  const handleSelect = useCallback(
    (id: string) => {
      if (dragLockRef.current) return;

      const nextWorld = findWorld(id);
      if (!nextWorld) return;

      if (activeId === id && !flyTarget) return;

      setHoveredId(null);
      setFlyTarget(nextWorld);

      if (activateTimeoutRef.current) {
        clearTimeout(activateTimeoutRef.current);
      }
      if (flyTimeoutRef.current) {
        clearTimeout(flyTimeoutRef.current);
      }

      activateTimeoutRef.current = setTimeout(() => {
        setActiveId(id);
      }, 320);

      flyTimeoutRef.current = setTimeout(() => {
        setFlyTarget(null);
      }, 940);
    },
    [activeId, flyTarget],
  );

  useEffect(() => {
    if (
      reduceMotion ||
      activeId ||
      flyTarget ||
      heroMontageWorlds.length <= 1
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setMontageIndex((current) => (current + 1) % heroMontageWorlds.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [activeId, flyTarget, heroMontageWorlds.length, reduceMotion]);

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
      if (activateTimeoutRef.current) {
        clearTimeout(activateTimeoutRef.current);
      }
      if (dragLockTimeoutRef.current) {
        clearTimeout(dragLockTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`ai-world-shell${flyTarget ? " is-warping" : ""}`}
      id="lobby"
      onMouseMove={updatePointer}
      onMouseLeave={resetPointer}
      onPointerCancel={endDrag}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
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
        <div className="spatial-hero-layout">
          <div className="spatial-hero-copy">
            <div className="spatial-current-label">
              <span>{visualWorld.name}</span>
              <em>{visualWorld.type}</em>
            </div>
            <p className="spatial-kicker">Spatial intelligence watch</p>
            <h1>From pixels to worlds, inspected in context.</h1>
            <p className="spatial-lede">
              Marble leads the first frame: a visible, editable world preview
              with the site brand kept small and the model identity placed
              beside the space itself.
            </p>
            <div
              className="spatial-input-tags"
              aria-label="Supported world inputs"
            >
              <span>Text</span>
              <span>Image</span>
              <span>Video</span>
              <span>3D layout</span>
            </div>
            <div className="spatial-cta-row">
              <Link
                className="spatial-primary-action"
                href={visualWorld.detailHref}
              >
                Open site context
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                className="spatial-secondary-action"
                href={visualWorld.sourceHref ?? visualWorld.demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Official demo
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <WorldInfoPanel world={panelWorld} />
        </div>

        <div className="world-stage" id="worlds">
          <motion.div
            className="world-map-drift"
            style={{ x: springDriftX, y: springDriftY }}
          >
            {selectorWorlds.map((world, index) => (
              <WorldNode
                key={world.id}
                world={world}
                index={index}
                isActive={activeId === world.id && flyTarget?.id !== world.id}
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
