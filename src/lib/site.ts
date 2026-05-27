export const site = {
  name: "World Models Watch",
  domain: "worldmodelswatch.com",
  url: "https://worldmodelswatch.com",
  title: "World Models Watch | Video World Models, EMO Demo, and AI World Timelines",
  description:
    "A structured intelligence site tracking video world models, Alibaba EMO, interactive AI worlds, spatial intelligence, and world foundation model releases.",
  tagline: "Video world model signals, comparisons, and timelines",
  nav: [
    { href: "/concept-map", label: "Concept Map" },
    { href: "/what-is-world-model", label: "What is a World Model" },
    { href: "/news", label: "News" },
    { href: "/models", label: "Models" },
    { href: "/compare", label: "Compare" },
    { href: "/timeline", label: "Timeline" },
    { href: "/concepts", label: "Concepts" },
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
