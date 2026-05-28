export const site = {
  name: "World Models Watch",
  domain: "worldmodelswatch.com",
  url: "https://worldmodelswatch.com",
  title: "World Models Watch | Video World Models, EMO Demo, and AI World Timelines",
  description:
    "A structured intelligence site tracking video world models, Alibaba EMO, interactive AI worlds, spatial intelligence, and world foundation model releases.",
  tagline: "Video world model signals, comparisons, and timelines",
  homeNav: [
    { href: "/", label: "Gallery" },
    { href: "/spatial-intelligence", label: "Spatial Intelligence" },
    { href: "/from-video-to-worlds", label: "Video to Worlds" },
    { href: "/world-model-labs", label: "Labs" },
    { href: "/research-insights", label: "Research" },
    { href: "/models", label: "Models" },
  ],
  primaryNav: [
    { href: "/spatial-intelligence", label: "Spatial Intelligence" },
    { href: "/from-video-to-worlds", label: "Video to Worlds" },
    { href: "/world-model-labs", label: "Labs" },
    { href: "/research-insights", label: "Research" },
    { href: "/models", label: "Models" },
    { href: "/compare", label: "Compare" },
    { href: "/news", label: "News" },
  ],
  footerNav: [
    { href: "/what-is-world-model", label: "Definition" },
    { href: "/concept-map", label: "Concept Map" },
    { href: "/from-video-to-worlds", label: "Video to Worlds" },
    { href: "/world-model-labs", label: "Labs" },
    { href: "/research-insights", label: "Research" },
    { href: "/news", label: "News" },
    { href: "/models", label: "Models" },
    { href: "/compare", label: "Compare" },
    { href: "/timeline", label: "Timeline" },
    { href: "/concepts", label: "Concepts" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
