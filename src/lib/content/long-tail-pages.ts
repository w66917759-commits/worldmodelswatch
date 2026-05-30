import type { Source } from "./types";

export type LongTailLink = {
  href: string;
  label: string;
  description: string;
};

export type LongTailSection = {
  eyebrow: string;
  title: string;
  body: string[];
  links?: LongTailLink[];
};

export type LongTailPage = {
  route: string;
  shortTitle: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: LongTailLink;
  secondaryCta: LongTailLink;
  relatedModelSlugs: string[];
  relatedComparisonSlugs: string[];
  relatedWorldIds: string[];
  sections: LongTailSection[];
  table: {
    columns: string[];
    rows: string[][];
  };
  sources: Source[];
};

export const longTailPages: LongTailPage[] = [
  {
    route: "/ai-360-skybox-generator",
    shortTitle: "AI 360 skybox generator",
    eyebrow: "360 environment workflow",
    title: "AI 360 skybox generator tools for game, VR, and web scenes.",
    description:
      "Compare AI 360 skybox generator options for panoramic environments, HDRI-style backdrops, engine skyboxes, and early world-model workflows.",
    primaryCta: {
      href: "/models/skybox-ai",
      label: "Open Skybox AI profile",
      description: "Read the source-backed Skybox AI dossier.",
    },
    secondaryCta: {
      href: "/compare/skybox-ai-vs-marble",
      label: "Compare alternatives",
      description: "Separate 360 skyboxes from persistent 3D worlds.",
    },
    relatedModelSlugs: ["skybox-ai", "marble"],
    relatedComparisonSlugs: ["skybox-ai-vs-marble"],
    relatedWorldIds: ["skybox", "world-labs"],
    sections: [
      {
        eyebrow: "Best fit",
        title: "Use a skybox generator when the world is the surrounding environment.",
        body: [
          "Skybox AI is the clearest fit when the output should be a 360-degree horizon, VR backdrop, lighting environment, or game-engine skybox rather than a fully explorable simulator.",
          "Marble becomes the better next click when the reader needs a persistent 3D world that can be edited, explored, or exported beyond a panoramic shell.",
        ],
        links: [
          {
            href: "/models/skybox-ai",
            label: "Skybox AI 360 environments",
            description: "The primary 360 environment lane on this site.",
          },
          {
            href: "/compare/skybox-ai-vs-marble",
            label: "Skybox AI alternatives",
            description: "Compare the 360 environment lane with persistent 3D worlds.",
          },
        ],
      },
      {
        eyebrow: "Boundary",
        title: "Do not call every skybox a full world model.",
        body: [
          "A 360 panorama can be valuable for VR, games, and concept art, but it is not the same claim as realtime interaction, physical simulation, or an editable world model.",
        ],
      },
    ],
    table: {
      columns: ["Need", "Best current page", "Why it fits"],
      rows: [
        ["360 horizon or VR backdrop", "Skybox AI", "It focuses on panoramic 360 environments and skybox exports."],
        ["Persistent editable 3D world", "Marble", "It targets generated 3D worlds that can be explored and reused."],
        ["Open 3D world-generation stack", "HY-World 2.0", "It is stronger for technical readers inspecting code, weights, and reconstruction paths."],
      ],
    },
    sources: [
      {
        label: "Skybox AI app",
        url: "https://skybox.blockadelabs.com/",
      },
      {
        label: "Skybox exports API documentation",
        url: "https://api-documentation.blockadelabs.com/api/skybox-exports.html",
      },
      {
        label: "World Labs Marble documentation",
        url: "https://docs.worldlabs.ai/",
      },
    ],
  },
  {
    route: "/text-to-3d-world-generator",
    shortTitle: "Text-to-3D world generator",
    eyebrow: "3D world creation",
    title: "Text-to-3D world generator options for persistent AI worlds.",
    description:
      "Find text-to-3D world generator routes for persistent worlds, editable scene assets, Gaussian splats, meshes, and source-backed 3D world workflows.",
    primaryCta: {
      href: "/models/marble",
      label: "Open Marble profile",
      description: "Start with World Labs' product-led persistent 3D world workflow.",
    },
    secondaryCta: {
      href: "/compare/hy-world-2-0-vs-marble",
      label: "Compare open stack",
      description: "Compare Marble with Tencent Hunyuan's open HY-World 2.0 stack.",
    },
    relatedModelSlugs: ["marble", "hy-world-2-0", "world-api"],
    relatedComparisonSlugs: ["hy-world-2-0-vs-marble"],
    relatedWorldIds: ["world-labs", "hy"],
    sections: [
      {
        eyebrow: "Product route",
        title: "Marble is the fastest product path for persistent 3D worlds.",
        body: [
          "World Labs positions Marble around persistent 3D world creation from text, images, video, and spatial inputs, with export-oriented documentation for downstream workflows.",
          "That makes Marble the better first page for readers searching text-to-3D world generator rather than only 360 panorama generation.",
        ],
        links: [
          {
            href: "/models/marble",
            label: "Marble persistent 3D worlds",
            description: "Product-led profile for generated 3D worlds.",
          },
        ],
      },
      {
        eyebrow: "Open route",
        title: "HY-World 2.0 is the technical route for open 3D world generation.",
        body: [
          "Tencent Hunyuan's HY-World 2.0 belongs in the same long-tail cluster because it exposes a repo, model card, paper, and generation/reconstruction workflow rather than only a product landing page.",
        ],
        links: [
          {
            href: "/models/hy-world-2-0",
            label: "HY-World 2.0 profile",
            description: "Open 3D generation and reconstruction track.",
          },
        ],
      },
    ],
    table: {
      columns: ["Reader intent", "Open next", "Boundary"],
      rows: [
        ["Fast creator workflow", "Marble", "Product-led; verify current account, quota, and docs details."],
        ["Open technical workflow", "HY-World 2.0", "Repo-led; not a simple public creator app."],
        ["Developer API direction", "World API", "Platform signal; check current World Labs API availability before claiming stable production access."],
      ],
    },
    sources: [
      {
        label: "World Labs: Introducing Marble",
        url: "https://www.worldlabs.ai/blog/marble-world-model",
      },
      {
        label: "World Labs Marble documentation",
        url: "https://docs.worldlabs.ai/",
      },
      {
        label: "Tencent-Hunyuan/HY-World-2.0 GitHub repository",
        url: "https://github.com/Tencent-Hunyuan/HY-World-2.0",
      },
    ],
  },
  {
    route: "/ai-game-asset-generator",
    shortTitle: "AI game asset generator",
    eyebrow: "Game asset workflow",
    title: "AI game asset generator routes for worlds, skyboxes, and 3D scenes.",
    description:
      "Use source-backed AI game asset generator pages to choose between 360 skyboxes, persistent 3D worlds, and open 3D world-generation stacks.",
    primaryCta: {
      href: "/models",
      label: "Open company map",
      description: "Compare the usable product and open-stack lanes.",
    },
    secondaryCta: {
      href: "/compare/skybox-ai-vs-marble",
      label: "Skybox vs 3D world",
      description: "Pick the asset type before choosing a tool.",
    },
    relatedModelSlugs: ["skybox-ai", "marble", "hy-world-2-0"],
    relatedComparisonSlugs: ["skybox-ai-vs-marble", "hy-world-2-0-vs-marble"],
    relatedWorldIds: ["skybox", "world-labs", "hy"],
    sections: [
      {
        eyebrow: "Asset type",
        title: "Start with the asset the game actually needs.",
        body: [
          "A game team searching for AI game asset generator can mean several different jobs: a skybox, an HDRI-style lighting environment, a concept world, an explorable 3D scene, or a technical reconstruction pipeline.",
          "Keeping those jobs separate makes the page useful for SEO without pretending that every listed model solves the same production problem.",
        ],
      },
      {
        eyebrow: "Practical split",
        title: "Skybox AI, Marble, and HY-World 2.0 cover different parts of the game workflow.",
        body: [
          "Skybox AI is strongest for environment shells and backplates. Marble is stronger for persistent 3D worlds and visual concept scenes. HY-World 2.0 is stronger for technical readers inspecting open 3D generation and reconstruction.",
        ],
        links: [
          {
            href: "/models/skybox-ai",
            label: "Skybox AI for backplates",
            description: "360 worlds, VR backgrounds, and engine skybox workflows.",
          },
          {
            href: "/models/marble",
            label: "Marble for 3D worlds",
            description: "Persistent scenes that can be explored and reused.",
          },
        ],
      },
    ],
    table: {
      columns: ["Game asset need", "Best fit", "Why"],
      rows: [
        ["Skybox or horizon", "Skybox AI", "360 environment generation is the explicit product lane."],
        ["Concept world or explorable scene", "Marble", "Persistent 3D worlds match world-building and scene ideation."],
        ["Open 3D research asset workflow", "HY-World 2.0", "Public code and weights make it more inspectable for technical teams."],
      ],
    },
    sources: [
      {
        label: "Blockade Labs Skybox AI product page",
        url: "https://www.blockadelabs.com/",
      },
      {
        label: "World Labs Marble documentation",
        url: "https://docs.worldlabs.ai/",
      },
      {
        label: "Tencent-Hunyuan/HY-World-2.0 GitHub repository",
        url: "https://github.com/Tencent-Hunyuan/HY-World-2.0",
      },
    ],
  },
  {
    route: "/ai-environment-creator-for-unity-unreal",
    shortTitle: "AI environment creator for Unity/Unreal",
    eyebrow: "Engine workflow",
    title: "AI environment creator options for Unity, Unreal, Blender, and VR.",
    description:
      "Choose AI environment creator tools for Unity, Unreal Engine, Blender, web 3D, and VR workflows without mixing skyboxes, 3D worlds, and research stacks.",
    primaryCta: {
      href: "/models/skybox-ai",
      label: "Open engine-friendly profile",
      description: "Start with Skybox AI for 360 environment and export workflows.",
    },
    secondaryCta: {
      href: "/text-to-3d-world-generator",
      label: "See 3D world route",
      description: "Move from skyboxes into persistent text-to-3D world generation.",
    },
    relatedModelSlugs: ["skybox-ai", "marble", "hy-world-2-0"],
    relatedComparisonSlugs: ["skybox-ai-vs-marble", "hy-world-2-0-vs-marble"],
    relatedWorldIds: ["skybox", "world-labs", "hy"],
    sections: [
      {
        eyebrow: "Engine fit",
        title: "Engine compatibility starts with the output format.",
        body: [
          "Unity, Unreal, Blender, and VR workflows need different assets. A panoramic skybox can be useful immediately, while a persistent generated 3D world requires more review around geometry, scale, export quality, and runtime use.",
          "This page keeps those engine-oriented questions visible while sending readers to the source-backed model pages for details.",
        ],
      },
      {
        eyebrow: "Use-case routing",
        title: "Use Skybox AI for the surrounding environment; use Marble or HY-World for generated 3D scenes.",
        body: [
          "Skybox AI explicitly covers 360 environments and export workflows. Marble and HY-World 2.0 better match readers asking about persistent worlds, meshes, splats, and open 3D-world generation.",
        ],
        links: [
          {
            href: "/compare/skybox-ai-vs-marble",
            label: "Skybox AI vs Marble",
            description: "Compare 360 environment generation with persistent 3D worlds.",
          },
          {
            href: "/compare/hy-world-2-0-vs-marble",
            label: "HY-World 2.0 vs Marble",
            description: "Compare open 3D world generation with product-led creation.",
          },
        ],
      },
    ],
    table: {
      columns: ["Engine workflow", "Likely page", "Reality check"],
      rows: [
        ["Unity or Unreal skybox", "Skybox AI", "Best for surrounding environments and backplates."],
        ["Editable 3D concept scene", "Marble", "Best for product-led persistent 3D world creation."],
        ["Open reconstruction/generation pipeline", "HY-World 2.0", "Best for technical evaluation, not a no-code engine plugin."],
      ],
    },
    sources: [
      {
        label: "Blockade Labs: Skybox AI Unity integration",
        url: "https://www.blockadelabs.com/post/developers-can-create-3d-environments-worlds-in-seconds-in-unity-through-blockade-labs",
      },
      {
        label: "Skybox exports API documentation",
        url: "https://api-documentation.blockadelabs.com/api/skybox-exports.html",
      },
      {
        label: "World Labs Marble documentation",
        url: "https://docs.worldlabs.ai/",
      },
    ],
  },
];

export function getLongTailPage(route: string) {
  return longTailPages.find((page) => page.route === route);
}
