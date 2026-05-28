"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { forgePrompts, worldsData } from "./worldsData";

function pickPreview(prompt: string) {
  const normalized = prompt.toLowerCase();

  if (normalized.includes("civilization") || normalized.includes("agent")) {
    return worldsData.find((world) => world.id === "hy") ?? worldsData[0];
  }

  if (normalized.includes("island") || normalized.includes("ocean")) {
    return worldsData.find((world) => world.id === "skybox") ?? worldsData[0];
  }

  if (normalized.includes("tokyo") || normalized.includes("cyber")) {
    return worldsData.find((world) => world.id === "world-labs") ?? worldsData[0];
  }

  if (normalized.includes("desert") || normalized.includes("floating")) {
    return worldsData.find((world) => world.id === "genie") ?? worldsData[0];
  }

  return worldsData[1];
}

export function CreateWorlds() {
  const [prompt, setPrompt] = useState("Cyberpunk Tokyo");
  const previewWorld = useMemo(() => pickPreview(prompt), [prompt]);

  return (
    <section className="portal-section create-worlds" id="world-forge">
      <div className="portal-section-heading compact">
        <span>Create Worlds</span>
        <h2>World Forge</h2>
        <p>
          A quiet engine room for landscapes, cities, agents, myths, and
          impossible weather.
        </p>
      </div>

      <div className="forge-surface">
        <div className="forge-console">
          <div className="forge-console-top">
            <Sparkles size={18} aria-hidden="true" />
            Prompt Field
          </div>
          <label htmlFor="world-prompt">Describe a world</label>
          <textarea
            id="world-prompt"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            rows={5}
            spellCheck={false}
          />
          <div className="forge-controls" aria-label="Popular prompts">
            {forgePrompts.map((item) => (
              <button
                className={prompt === item ? "is-selected" : ""}
                type="button"
                onClick={() => setPrompt(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="forge-preview"
          key={previewWorld.id}
          style={
            {
              "--forge-accent": previewWorld.accent,
              "--forge-secondary": previewWorld.secondaryAccent,
            } as CSSProperties
          }
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.42 }}
        >
          <video autoPlay muted loop playsInline preload="metadata">
            <source src={previewWorld.videoSrc} type={previewWorld.videoType} />
          </video>
          <div className="forge-preview-grid" aria-hidden="true" />
          <div className="forge-preview-copy">
            <span>Previewing from {previewWorld.name}</span>
            <h3>{prompt || "Untitled generated world"}</h3>
            <p>{previewWorld.forgePrompt}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
