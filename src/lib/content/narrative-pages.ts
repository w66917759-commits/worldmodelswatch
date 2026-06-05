import type { Source } from "./types";

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
  sources?: Source[];
};

export const narrativePages: NarrativePage[] = [
  {
    slug: "spatial-intelligence",
    eyebrow: "Spatial intelligence",
    title: "Spatial intelligence AI turns generated scenes into places.",
    description:
      "Spatial intelligence AI connects generated scenes, camera motion, memory, interaction, and physical logic around one focused concept.",
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
    title: "AI video to world models is the shift from clips to state.",
    description:
      "AI video to world models explains how generated clips become action-conditioned worlds, persistent 3D spaces, and agent societies.",
    primaryCta: {
      href: "/events",
      label: "View events timeline",
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
    title: "World model demos for the current AI world category.",
    description:
      "World model demos show open worlds, playable scenes, 360 environments, generated 3D spaces, and agent societies through focused video examples.",
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
          "The page is built for scanning first, but it is not only a media wall. Each demo is treated as evidence for a specific capability lane: realtime directing, playable interaction, 360 environment creation, persistent 3D world editing, open 3D reconstruction, or many-agent society simulation.",
          "Watch the motion, identify which claim the clip actually supports, then jump into the model page or official source before repeating the claim. A short demo can show the feel of a system, but it does not prove access, pricing, benchmark quality, or production readiness by itself.",
        ],
        links: [
          {
            href: "/models",
            label: "Open model dossiers",
            description: "Read status, strengths, limits, and source links for each demo lane.",
          },
          {
            href: "/compare",
            label: "Open decision guides",
            description: "Use comparison pages when two demos look similar but solve different jobs.",
          },
        ],
      },
      {
        eyebrow: "How to judge demos",
        title: "A useful world-model demo answers more than whether the video looks good.",
        body: [
          "The first check is output type. A panoramic skybox, a generated 3D scene, a Minecraft-like playable world, an embodied robot model, and a many-agent civilization are not interchangeable. The visual layer may look related, but the reader question is different for each one.",
          "The second check is control. A demo has more value when the user can move, steer, edit, direct, or return to the same space. That is why the page separates fixed video references from demos that imply state, navigation, export, action feedback, or social memory.",
          "The third check is evidence. Source-backed demos should link back to official pages, papers, repositories, docs, or product surfaces. If a video is impressive but the source does not explain access, limits, or technical framing, the page keeps the claim narrow.",
        ],
        links: [
          {
            href: "/what-is-world-model",
            label: "Definition",
            description: "Understand why spatial memory and action matter more than visual style alone.",
          },
          {
            href: "/concept-map",
            label: "Concept map",
            description: "See how video, 3D worlds, spatial AI, physical AI, and agents connect.",
          },
        ],
      },
      {
        eyebrow: "Editorial boundary",
        title: "Every lab keeps two exits: context here, official source there.",
        body: [
          "The model entrance explains why the demo matters. The official entrance keeps the original source one click away.",
          "World Models Watch should not rehost or stretch third-party demos as if they were site-owned products. The local page uses visual anchors to help readers orient themselves, then points to source-backed model dossiers where claims can be checked against the strongest public evidence.",
          "A demo that blocks automated checks, changes access status, or moves behind an account wall should still be described conservatively. The page should say what was visible in the source trail, what the visitor can reasonably verify, and what should not be inferred from the clip.",
        ],
      },
      {
        eyebrow: "Demo-by-demo reading",
        title: "Read each demo through the job it is best at showing.",
        body: [
          "HappyOyster is best read as a product-surface signal for realtime immersive creation and directing. Genie and Oasis are better evidence for playable or action-conditioned generated worlds. Skybox AI belongs to the environment shell and 360-backdrop lane, while Marble points toward persistent 3D world creation and export.",
          "HY-World 2.0 and LingBot-style systems are more technical: their value is in open repositories, weights, reconstruction or generation workflows, and evaluation surfaces rather than in a polished consumer UI. Project Sid adds a social layer by asking what happens when persistent worlds contain many agents with roles, norms, and memory.",
          "This breakdown is the original value of the page. A generic demo gallery would put all clips in one bucket; this page tells readers which claim each clip can support and which next page should carry the durable explanation.",
        ],
        links: [
          {
            href: "/progress",
            label: "AI world model progress",
            description: "Read the current field as Create, Explore, Control, Simulate, and Build.",
          },
          {
            href: "/world-stream",
            label: "World evolution map",
            description: "Connect demos to the five-stage capability map.",
          },
        ],
      },
    ],
    sources: [
      {
        label: "World Labs Marble documentation",
        url: "https://docs.worldlabs.ai/",
      },
      {
        label: "Blockade Labs Skybox AI product page",
        url: "https://www.blockadelabs.com/",
      },
      {
        label: "Tencent-Hunyuan/HY-World-2.0 GitHub repository",
        url: "https://github.com/Tencent-Hunyuan/HY-World-2.0",
      },
      {
        label: "Project Sid GitHub repository",
        url: "https://github.com/altera-al/project-sid",
      },
      {
        label: "DeepMind Genie 3 announcement",
        url: "https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/",
      },
    ],
  },
  {
    slug: "research-insights",
    eyebrow: "Signal room",
    title: "World model research signals in one source-backed room.",
    description:
      "World model research signals are organized into source-backed releases, clear comparison paths, and practical next clicks.",
    primaryCta: {
      href: "/news",
      label: "Release Signals",
    },
    secondaryCta: {
      href: "/events",
      label: "View events timeline",
    },
    sections: [
      {
        eyebrow: "Release radar",
        title: "Follow the launches without reading like a paper tracker.",
        body: [
          "Release Signals turns announcements, API surfaces, product previews, and reported consumer signals into short source-confidence cards.",
          "The first impression is what changed and where to go next; stable model context stays in the Company Map.",
        ],
        links: [
          {
            href: "/news",
            label: "Release Signals",
            description: "Primary-source release signals with affected models and next pages.",
          },
          {
            href: "/events",
            label: "Events timeline",
            description: "Dated category milestones and launch chronology.",
          },
        ],
      },
      {
        eyebrow: "Decision layer",
        title: "Decision Guides work better as choices before detailed tables.",
        body: [
          "Marble, Genie, GWM-1, Cosmos, LingBot, and HY-World belong in different lanes even when they share the world-model label.",
          "Decision Guide pages start with the reader choice and keep tables below for source-backed details.",
        ],
        links: [
          {
            href: "/compare",
            label: "Decision Guides",
            description: "Choose-between pages for product surfaces, research tracks, and physical-AI stacks.",
          },
          {
            href: "/concepts",
            label: "Glossary",
            description: "Plain-English concepts for readers entering the category.",
          },
        ],
      },
      {
        eyebrow: "Company map",
        title: "Stable profiles keep company facts separate from release signals.",
        body: [
          "Each model page opens with a visual anchor, then keeps organization, status, availability, strengths, limits, and official sources in a consistent shape.",
        ],
        links: [
          {
            href: "/models",
            label: "Company Map",
            description: "Normalized company and model profiles for systems to watch.",
          },
        ],
      },
    ],
  },
];

export function getNarrativePage(slug: string) {
  return narrativePages.find((page) => page.slug === slug);
}
