const domain = "worldmodelswatch.com";
const contactEmail = `contact@${domain}`;
const privacyEmail = `privacy@${domain}`;
const twitterHandle = "worldmodelwatch";
const twitterUrl = `https://x.com/${twitterHandle}`;
const githubUrl = "https://github.com/w66917759-commits/worldmodelswatch";

export const site = {
  name: "World Models Watch",
  domain,
  url: `https://${domain}`,
  contactEmail,
  privacyEmail,
  social: {
    twitterHandle: `@${twitterHandle}`,
    twitterUrl,
    githubUrl,
  },
  sameAs: [twitterUrl, githubUrl],
  title: "World Models Watch | AI world models",
  description:
    "Explore AI world models through focused demos, company routes, and source-backed pages about generated worlds.",
  tagline: "AI world models, company progress, and practical model signals",
  socialImage: "/worldmodelswatch-social-preview.png",
  socialImageAlt: "World Models Watch source-backed AI world models guide",
  homeNav: [
    { href: "/create-word", label: "Create AI Worlds" },
    { href: "/world-stream", label: "World Evolution" },
    { href: "/models", label: "Company Map" },
  ],
  primaryNav: [
    { href: "/world-stream", label: "World Evolution" },
    { href: "/create-word", label: "Create AI Worlds" },
    { href: "/models", label: "Company Map" },
    { href: "/compare", label: "Decision Guides" },
    { href: "/news", label: "Release Signals" },
    { href: "/search", label: "Search" },
    { href: "/faq", label: "FAQ" },
  ],
  footerSections: [
    {
      title: "Explore",
      links: [
        { href: "/models", label: "Company Map" },
        { href: "/compare", label: "Decision Guides" },
        { href: "/news", label: "Release Signals" },
        { href: "/world-model-labs", label: "World Model Demos" },
        { href: "/concept-map", label: "Concept Map" },
      ],
    },
    {
      title: "Learn",
      links: [
        { href: "/what-is-world-model", label: "What Is a World Model" },
        { href: "/concepts", label: "World Model Glossary" },
        { href: "/ai-360-skybox-generator", label: "AI 360 Skybox Generator" },
        { href: "/text-to-3d-world-generator", label: "Text-to-3D World Generator" },
        { href: "/ai-game-asset-generator", label: "AI Game Asset Generator" },
        {
          href: "/ai-environment-creator-for-unity-unreal",
          label: "AI Environment Creator for Unity/Unreal",
        },
        { href: "/progress", label: "AI World Model Progress" },
        { href: "/research-insights", label: "Research Insights" },
        { href: "/events", label: "Events Timeline" },
        { href: "/timeline", label: "World Model Timeline" },
        { href: "/updates", label: "Selected Release Signals" },
        { href: "/faq", label: "FAQ" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Use" },
        { href: "/privacy#cookies", label: "Cookie Notice" },
        { href: "/sitemap", label: "Sitemap" },
        { href: "/sitemap.xml", label: "XML Sitemap" },
      ],
    },
    {
      title: "Contact",
      links: [
        { href: "/contact", label: "Contact page" },
        { href: `mailto:${contactEmail}`, label: contactEmail },
        { href: `mailto:${privacyEmail}`, label: privacyEmail },
      ],
    },
    {
      title: "Social",
      links: [
        { href: twitterUrl, label: `X / Twitter @${twitterHandle}` },
        { href: githubUrl, label: "GitHub" },
      ],
    },
  ],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
