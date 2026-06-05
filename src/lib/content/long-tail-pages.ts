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
          "The right expectation is an environment shell: horizon, mood, lighting, and surrounding visual context. If the workflow needs object-level interaction, path planning, collision, or persistent geometry, the reader should move from Skybox AI into Marble, HY-World 2.0, or a more technical 3D workflow.",
        ],
      },
      {
        eyebrow: "Practical example",
        title: "A VR prototype needs a skybox before it needs a simulated world.",
        body: [
          "Imagine a small VR team building a training scene, gallery, or product walkthrough. The first useful asset may be a believable surrounding environment that gives the scene a horizon and lighting direction. A 360 skybox can solve that job quickly without requiring a full generated city, playable level, or physics simulation.",
          "The limitation is equally important. A skybox is usually background context, not navigable geometry. If the team later needs doors, terrain, occlusion, pathing, or editable objects, the skybox becomes one layer in a larger pipeline rather than the whole environment.",
        ],
      },
      {
        eyebrow: "Selection workflow",
        title: "Pick by output, then check export and access.",
        body: [
          "Start by naming the asset: equirectangular panorama, HDRI-style lighting environment, engine skybox, experimental mesh export, or persistent 3D world. That output label determines whether Skybox AI is enough or whether the reader should evaluate Marble or HY-World 2.0 instead.",
          "Next, check where the output has to land. Unity, Unreal, Blender, web 3D, VR, and AR each create different questions about resolution, file format, lighting, scale, seams, and licensing. The page links to source-backed dossiers so readers can check those details without treating a search landing page as the final product documentation.",
          "If the source only proves that a product page or API exists, keep the claim at that level. Do not promise current credit pricing, commercial reuse, or production-quality mesh export unless the linked documentation confirms it.",
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
        label: "Blockade Labs Skybox AI product page",
        url: "https://www.blockadelabs.com/",
        statusNote:
          "The direct Skybox app endpoint returned HTTP 500 to automated checks on June 5, 2026, so this page uses the stable Blockade Labs product surface as the crawlable source.",
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
          "That makes it useful for readers who need to inspect how a world-generation stack is represented in code and weights. It is less useful for a creator who simply wants to open a browser product and produce a finished environment without setup work.",
        ],
        links: [
          {
            href: "/models/hy-world-2-0",
            label: "HY-World 2.0 profile",
            description: "Open 3D generation and reconstruction track.",
          },
        ],
      },
      {
        eyebrow: "Practical example",
        title: "A concept artist and a technical artist should not open the same next page.",
        body: [
          "A concept artist searching text-to-3D world generator may want a quick way to turn a prompt, image, or short clip into an explorable scene that can be reviewed visually. Marble is the better first stop because it frames generated worlds through a product workflow and documentation.",
          "A technical artist or research engineer may ask a different question: what can be reproduced, exported, benchmarked, or modified? HY-World 2.0 is the better starting point there because public repositories, weights, and papers matter more than a polished product surface.",
        ],
      },
      {
        eyebrow: "Evaluation workflow",
        title: "Review geometry, reuse, and access before calling it production-ready.",
        body: [
          "After a generated 3D world looks good in a demo, the practical checks are geometry quality, scale consistency, camera navigation, material behavior, export format, downstream editor support, and whether the current account tier allows the intended use.",
          "This page should help readers avoid a common SEO trap: treating text-to-3D world generation as one category. Some systems generate scenes for visual exploration, some reconstruct from observations, and some expose developer APIs. The right choice depends on the next workflow step.",
          "For AdSense review, the page needs to answer the query directly. The answer here is not a ranked tool list; it is a decision path from creator product to open technical stack to developer API, with source links for each route.",
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
          "A production game pipeline may use more than one of these layers. A skybox can establish mood, a generated 3D world can support ideation or layout, and an open research stack can help technical teams evaluate future asset generation. The page keeps those jobs separate so readers do not buy into a single-tool promise.",
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
      {
        eyebrow: "Practical example",
        title: "A game prototype usually starts with scope, not with a model name.",
        body: [
          "For a vertical slice, the fastest win may be a skybox, lighting environment, or mood board that sells the setting. For a level-design prototype, the team may need terrain, rooms, and camera movement. For a tools team, the question may be whether an open 3D generation pipeline can produce inspectable assets.",
          "Those are different deliverables. Calling all of them AI game assets hides the real production question: what part of the game pipeline does this output replace or accelerate, and what still needs a human artist, designer, engineer, or technical-art pass?",
        ],
      },
      {
        eyebrow: "Production boundary",
        title: "Generated assets still need review before entering a real game build.",
        body: [
          "The page should not imply that any listed tool automatically creates engine-ready production assets. Teams still need to check topology, collision, scale, seams, texture resolution, licensing, optimization, naming, and whether the output fits the art direction.",
          "World Models Watch uses this landing page as a routing layer with original judgment: use Skybox AI for surrounding environments, Marble for persistent visual worlds, and HY-World 2.0 for inspectable open 3D research. The source-backed model pages carry the detailed evidence.",
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
          "Engine compatibility is not a single checkbox. A background panorama, a GLB environment mesh, a Gaussian-splat export, and a persistent generated scene all create different import, rendering, collision, and optimization questions.",
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
      {
        eyebrow: "Practical example",
        title: "Unity and Unreal teams should separate backdrop, blockout, and explorable world.",
        body: [
          "If the team needs a fast atmosphere layer for a Unity prototype, a 360 skybox can be enough. If the team needs a level blockout, environment shell, or exported concept world, a persistent 3D world workflow may be a better fit. If the team needs to inspect a research stack, open repositories and model cards matter more than product screenshots.",
          "That distinction is why this page links to both Skybox AI and Marble instead of presenting one generic AI environment creator. It helps readers decide whether their engine workflow starts with panorama, scene, asset, or research pipeline.",
        ],
      },
      {
        eyebrow: "Implementation checklist",
        title: "Check import path, visual quality, and runtime cost before promising engine readiness.",
        body: [
          "Before a generated environment enters Unity, Unreal, Blender, or WebGL, review the file format, scale, lighting, collision expectations, texture resolution, navigation needs, and whether the output must be editable after import.",
          "The page also keeps a source-confidence boundary: official product pages and documentation can prove that a workflow exists, but they do not guarantee every scene will be optimized, legally reusable, or production-ready in every engine.",
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
