export type NarrativeLink = {
  href: string;
  label: string;
  description?: string;
};

export type NarrativeSection = {
  eyebrow: string;
  title: string;
  body: string[];
  links?: NarrativeLink[];
};

export type NarrativePage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: NarrativeLink;
  secondaryCta: NarrativeLink;
  mediaWorldIds?: string[];
  sections: NarrativeSection[];
};

export const narrativePages: NarrativePage[] = [
  {
    slug: "spatial-intelligence",
    eyebrow: "Spatial intelligence",
    title: "World models are the move from media generation to spatial reasoning.",
    description:
      "This page explains why generated worlds matter beyond beautiful clips: they turn vision, geometry, action, memory, and simulation into one product category.",
    primaryCta: {
      href: "/what-is-world-model",
      label: "Read the definition",
    },
    secondaryCta: {
      href: "/concept-map",
      label: "Open the concept map",
    },
    sections: [
      {
        eyebrow: "Category shift",
        title: "The important change is not higher-resolution video. It is a model that understands place.",
        body: [
          "A video model can render a scene. A world model has to preserve where things are, how a camera moves, what actions change, and what can be revisited later.",
          "That makes spatial intelligence a deeper layer than media generation. It is the ability to connect perception, imagination, motion, and consequence inside a coherent environment.",
        ],
        links: [
          {
            href: "/compare/world-model-vs-video-model",
            label: "World model vs video model",
            description: "Use the comparison table to separate clips from simulated worlds.",
          },
        ],
      },
      {
        eyebrow: "Why now",
        title: "The market is no longer just publishing demos. It is exposing interfaces.",
        body: [
          "Marble makes generated 3D spaces feel like a product surface. Genie and Oasis push toward interactive worlds. HY-World 2.0 and LingBot-Map show reconstruction and persistent assets. Project Sid shows why agents and society matter once worlds persist.",
          "World Models Watch should therefore behave like a layered reference site: an immersive front door, then separate pages for definitions, labs, research, comparisons, and model dossiers.",
        ],
        links: [
          {
            href: "/models",
            label: "Browse model dossiers",
            description: "Read normalized profiles for the current world-model systems.",
          },
        ],
      },
      {
        eyebrow: "Reader path",
        title: "The homepage should invite exploration, not carry the entire argument.",
        body: [
          "The video gallery gives visitors the feeling of entering generated worlds. This page carries the thesis. The definition, concept map, timeline, and labs pages then let readers go deeper without making the first screen feel crowded.",
        ],
      },
    ],
  },
  {
    slug: "from-video-to-worlds",
    eyebrow: "Evolution path",
    title: "From generated clips to interactive, persistent worlds.",
    description:
      "A narrative route for readers who understand AI video but need the next step: action-conditioned worlds, 3D spaces, and agent societies.",
    primaryCta: {
      href: "/timeline",
      label: "View dated timeline",
    },
    secondaryCta: {
      href: "/compare",
      label: "Compare the systems",
    },
    sections: [
      {
        eyebrow: "Stage 1",
        title: "AI video made synthetic reality visible.",
        body: [
          "The first mainstream mental model was simple: type a prompt, receive a moving scene. That made synthetic environments easy to see, share, and evaluate.",
          "The limit is that the viewer remains outside the frame. The clip can be impressive while still lacking controllable space, persistent state, or action feedback.",
        ],
        links: [
          {
            href: "/models/emo",
            label: "EMO dossier",
            description: "A useful video-control reference point in the site's coverage.",
          },
        ],
      },
      {
        eyebrow: "Stage 2",
        title: "Interactive worlds changed the verb from watch to control.",
        body: [
          "Genie, Oasis, and related systems make user action part of the generated output. Movement, steering, and camera control become important signals, not just afterthoughts.",
          "This is the bridge from AI video toward world models. The user is no longer only watching a generated scene. The user is testing whether the scene behaves like a place.",
        ],
        links: [
          {
            href: "/models/genie-3",
            label: "Genie 3 dossier",
            description: "The clearest research anchor for promptable interactive worlds.",
          },
        ],
      },
      {
        eyebrow: "Stage 3",
        title: "Persistent worlds make return visits and downstream workflows possible.",
        body: [
          "Marble, HY-World 2.0, and other 3D world systems shift attention toward editable geometry, exported assets, larger spaces, and reusable world state.",
          "Once a world can be returned to, edited, exported, or populated with agents, it becomes a platform surface rather than a one-time generated asset.",
        ],
        links: [
          {
            href: "/models/marble",
            label: "Marble dossier",
            description: "World Labs' product-led example of generated 3D worlds.",
          },
          {
            href: "/models/hy-world-2-0",
            label: "HY-World 2.0 dossier",
            description: "Tencent's open 3D world-generation and reconstruction track.",
          },
        ],
      },
    ],
  },
  {
    slug: "world-model-labs",
    eyebrow: "Video labs",
    title: "A gallery of world-model demos, grouped as labs instead of homepage clutter.",
    description:
      "The local demo-video archive becomes a dedicated page for scanning the major world-model experiences without forcing every clip onto the homepage narrative.",
    primaryCta: {
      href: "/models",
      label: "Open model dossiers",
    },
    secondaryCta: {
      href: "/research-insights",
      label: "Read research insights",
    },
    mediaWorldIds: [
      "happyoyster",
      "genie",
      "oasis",
      "skybox",
      "world-labs",
      "hy",
      "project-sid",
    ],
    sections: [
      {
        eyebrow: "Gallery role",
        title: "The homepage shows the portal. This page holds the full demo set.",
        body: [
          "The seven local demo videos give the site a strong visual surface: HappyOyster, Genie, Oasis, Skybox AI, World Labs Marble, HY-World 2.0, and Project Sid.",
          "Keeping them here creates a deeper site hierarchy. Visitors can enter from the homepage, then spend time comparing demos without pushing all explanation into the first page.",
        ],
      },
      {
        eyebrow: "Editorial boundary",
        title: "Each lab card keeps the distinction between internal context and official demo sources.",
        body: [
          "The primary action stays inside World Models Watch so readers can understand the category. The official demo link remains available as a secondary action for source checking and hands-on exploration.",
        ],
      },
    ],
  },
  {
    slug: "research-insights",
    eyebrow: "Research and insights",
    title: "The evidence layer for world models, spatial AI, and physical AI.",
    description:
      "A research hub that connects source-backed news, model dossiers, comparison tables, future directions, and dated timelines.",
    primaryCta: {
      href: "/news",
      label: "Read official updates",
    },
    secondaryCta: {
      href: "/timeline",
      label: "View timeline",
    },
    sections: [
      {
        eyebrow: "Source-backed updates",
        title: "News belongs in a dedicated research route, not buried under the video gallery.",
        body: [
          "World Models Watch should separate visual discovery from evidence collection. The homepage can feel cinematic while research pages stay structured, citeable, and useful for repeat readers.",
          "The news index remains the place for official announcements, research posts, API launches, and platform updates.",
        ],
        links: [
          {
            href: "/news",
            label: "News index",
            description: "Primary-source updates and official release signals.",
          },
          {
            href: "/timeline",
            label: "Timeline",
            description: "Dated category milestones and launch chronology.",
          },
        ],
      },
      {
        eyebrow: "Comparison layer",
        title: "Comparison pages make the site citeable.",
        body: [
          "The category is broad enough that readers need tables, not just prose. Marble, Genie, GWM-1, Cosmos, LingBot, and HY-World belong in different lanes even when they share the world-model label.",
          "Keeping comparison pages as first-class routes also gives search engines and backlink targets a clearer structure.",
        ],
        links: [
          {
            href: "/compare",
            label: "Comparison hub",
            description: "Tables that distinguish product surfaces, research tracks, and physical-AI stacks.",
          },
          {
            href: "/concepts",
            label: "Glossary",
            description: "Plain-English concepts for readers entering the category.",
          },
        ],
      },
      {
        eyebrow: "Model layer",
        title: "Dossiers are the normalized record.",
        body: [
          "Each model page keeps organization, status, availability, strengths, limits, and official sources in the same shape. That makes the site feel more like an intelligence product than a blog stream.",
        ],
        links: [
          {
            href: "/models",
            label: "Model dossiers",
            description: "Normalized reference pages for systems to watch.",
          },
        ],
      },
    ],
  },
];

export function getNarrativePage(slug: string) {
  return narrativePages.find((page) => page.slug === slug);
}
