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
    title: "AI media is turning into space you can move through.",
    description:
      "A quick visual route from beautiful generated clips to places with camera motion, memory, interaction, and physical logic.",
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
        title: "The leap is not sharper video. It is a scene that remembers where things are.",
        body: [
          "A clip can look amazing and still be over when the camera stops. A world model has to keep the place coherent when the viewer moves, acts, or returns.",
          "Spatial intelligence is the layer that connects perception, imagination, motion, and consequence inside one environment.",
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
        title: "The demos are becoming interfaces.",
        body: [
          "Marble makes generated 3D spaces feel like a product surface. Genie and Oasis push toward interactive worlds. HY-World 2.0 and LingBot-Map show reconstruction and persistent assets.",
          "Project Sid adds another layer: once a world persists, agents can live inside it, organize it, and make the scene feel social.",
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
        title: "Start with the feeling, then open the evidence.",
        body: [
          "The fastest way in is visual: watch a generated place, understand what changed, then choose whether to open models, comparisons, or the timeline.",
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
    title: "A cinematic video hall for seven world-model demos.",
    description:
      "Watch the category through local demo footage: open worlds, playable scenes, 360 environments, generated 3D spaces, and agent societies.",
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
        title: "Each clip is a different doorway into generated worlds.",
        body: [
          "HappyOyster, Genie, Oasis, Skybox AI, World Labs Marble, HY-World 2.0, and Project Sid show different versions of the same shift: AI output becoming a place.",
          "The page is built for scanning first. Watch the motion, feel the lane, then jump into the model page or the official demo.",
        ],
      },
      {
        eyebrow: "Editorial boundary",
        title: "Every lab keeps two exits: context here, official source there.",
        body: [
          "The model entrance explains why the demo matters. The official entrance keeps the original source one click away.",
        ],
      },
    ],
  },
  {
    slug: "research-insights",
    eyebrow: "Signal room",
    title: "A lighter control room for the strongest world-model signals.",
    description:
      "A visual hub that turns source-backed releases into quick cards, clear paths, and practical next clicks.",
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
        eyebrow: "Release radar",
        title: "Follow the launches without reading like a paper tracker.",
        body: [
          "The news index turns announcements, API surfaces, product previews, and reported consumer signals into quick visual update cards.",
          "The source links remain available, but the first impression is the product motion: what became visible, usable, open, or closer to ordinary users.",
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
        eyebrow: "Matchup layer",
        title: "Comparisons work better as visual choices before detailed tables.",
        body: [
          "Marble, Genie, GWM-1, Cosmos, LingBot, and HY-World belong in different lanes even when they share the world-model label.",
          "The comparison pages now start with the reader decision and keep tables below for source-backed details.",
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
        eyebrow: "Model wall",
        title: "Dossiers become showcase pages with sources at the bottom.",
        body: [
          "Each model page opens with a visual anchor, then keeps organization, status, availability, strengths, limits, and official sources in a consistent shape.",
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
