import type { Concept } from "./types";

export const concepts: Concept[] = [
  {
    slug: "world-model",
    term: "World model",
    summary:
      "An AI system that learns how an environment changes over time and in response to actions.",
    plainEnglish:
      "A world model is not just trying to make a pretty frame. It is trying to understand what can happen next in a world.",
    related: ["interactive world generation", "simulation", "spatial intelligence"],
  },
  {
    slug: "spatial-intelligence",
    term: "Spatial intelligence",
    summary:
      "The ability to understand objects, layouts, camera position, movement, and relationships in space.",
    plainEnglish:
      "This is the part that lets AI reason about where things are and how a scene is arranged.",
    related: ["3D worlds", "world model", "embodied AI"],
  },
  {
    slug: "physical-ai",
    term: "Physical AI",
    summary:
      "AI systems designed to operate in or reason about physical environments, often through robotics or autonomous systems.",
    plainEnglish:
      "Physical AI is where world models meet robots, vehicles, sensors, and real-world constraints.",
    related: ["robotics", "autonomous driving", "simulation"],
  },
  {
    slug: "world-foundation-model",
    term: "World foundation model",
    summary:
      "A foundation model trained for world simulation or physical AI workflows rather than only language or static media.",
    plainEnglish:
      "Think of it as a base model for simulating environments, motion, and possible futures.",
    related: ["Cosmos", "synthetic data", "physical AI"],
  },
  {
    slug: "interactive-world-generation",
    term: "Interactive world generation",
    summary:
      "The generation of environments that can be navigated, changed, or acted on after they are created.",
    plainEnglish:
      "The key test is whether the generated world keeps making sense after a user moves through it or changes it.",
    related: ["Genie 3", "Marble", "simulation"],
  },
];
