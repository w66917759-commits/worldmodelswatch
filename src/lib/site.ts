const domain = "worldmodelswatch.com";
const contactEmail = `contact@${domain}`;
const privacyEmail = `privacy@${domain}`;

export const site = {
  name: "World Models Watch",
  domain,
  url: `https://${domain}`,
  contactEmail,
  privacyEmail,
  title: "World Models Watch | AI world models",
  description:
    "Explore AI world models through focused demos, company routes, and source-backed pages about generated worlds.",
  tagline: "AI world models, company progress, and practical model signals",
  homeNav: [
    { href: "/create-word", label: "Create AI Worlds" },
    { href: "/world-stream", label: "World Evolution" },
    { href: "/models", label: "Companies & Models" },
  ],
  primaryNav: [
    { href: "/world-stream", label: "World Evolution" },
    { href: "/create-word", label: "Create AI Worlds" },
    { href: "/events", label: "Events Timeline" },
    { href: "/models", label: "Companies & Models" },
    { href: "/compare", label: "Comparisons" },
    { href: "/news", label: "News" },
    { href: "/faq", label: "FAQ" },
  ],
  footerSections: [
    {
      title: "Explore",
      links: [
        { href: "/world-stream", label: "World Evolution" },
        { href: "/create-word", label: "Create AI Worlds" },
        { href: "/events", label: "Events Timeline" },
        { href: "/timeline", label: "World Model Timeline" },
        { href: "/progress", label: "AI Progress" },
        { href: "/models", label: "Companies & Models" },
        { href: "/news", label: "World Model News" },
        { href: "/compare", label: "World Model Comparisons" },
        { href: "/updates", label: "Other Progress" },
        { href: "/world-model-labs", label: "Video Gallery" },
        { href: "/what-is-world-model", label: "World Model Definition" },
        { href: "/concepts", label: "World Model Glossary" },
        { href: "/faq", label: "FAQ" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Use" },
        { href: "/privacy#cookies", label: "Cookie Notice" },
        { href: "/sitemap.xml", label: "Sitemap" },
      ],
    },
    {
      title: "Contact",
      links: [
        { href: `mailto:${contactEmail}`, label: contactEmail },
        { href: `mailto:${privacyEmail}`, label: privacyEmail },
      ],
    },
    {
      title: "Social",
      links: [
        { href: "https://x.com/worldmodelswatch", label: "X / Twitter" },
        {
          href: "https://github.com/w66917759-commits/worldmodelswatch",
          label: "GitHub",
        },
      ],
    },
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
