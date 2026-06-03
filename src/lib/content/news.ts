import type { NewsItem, Source } from "./types";

export const newsItems: NewsItem[] = [
  {
    slug: "skybox-ai-pending-generation-limits",
    title: "Blockade Labs documents plan-based pending limits for Skybox AI",
    date: "2026-05-21",
    evolutionStageId: "generated-space",
    organization: "Blockade Labs",
    summary:
      "Blockade Labs updated its official Skybox API docs to add per-plan pending-generation caps and an explicit `429` error path when accounts hit that queue limit.",
    whyItMatters:
      "This clears up a real access and operations boundary for Skybox AI rather than adding another vague capability claim. Readers comparing creator tools and APIs need to know that Skybox AI's public surface now documents hard queue limits by plan, which matters for throughput expectations, integration design, and how seriously to treat the API as a production-facing environment workflow.",
    tags: ["Skybox AI", "API", "Access", "Blockade Labs"],
    signalType: "Platform",
    impactLevel: "Medium",
    whatChanged: [
      "Blockade Labs added a Pending Generation Limits section to the Generate Skybox docs and documented a `429` response when too many generations remain pending.",
      "The official docs now state per-plan pending caps of Free 1, Essential 3, Standard 3, and Business 30 for Skybox generation requests.",
    ],
    sourceConfidence: "Official API documentation update",
    availabilityNote:
      "This is a material API access clarification for the Skybox surface, not a new model launch or a claim that Skybox AI now behaves like a full persistent world platform.",
    overclaimWarning:
      "Do not present queue-limit documentation as evidence of a major model-capability jump or confuse Skybox's 360-environment workflow with a general interactive world model.",
    relatedModelSlugs: ["skybox-ai"],
    relatedComparisonSlugs: ["skybox-ai-vs-marble"],
    sources: [
      {
        label: "Blockade Labs API changelog: May 21, 2026 Skybox update",
        url: "https://api-documentation.blockadelabs.com/api/changelog.html",
      },
      {
        label: "Blockade Labs Skyboxes API docs: pending generation limits",
        url: "https://api-documentation.blockadelabs.com/api/skybox.html",
      },
    ],
  },
  {
    slug: "google-project-genie-street-view",
    title: "Google expands Project Genie with Street View-grounded worlds",
    date: "2026-05-19",
    evolutionStageId: "controllable-worlds",
    organization: "Google DeepMind",
    summary:
      "Google added Street View grounding to Project Genie and began rolling the experimental prototype out to eligible Google AI Ultra subscribers globally.",
    whyItMatters:
      "This is a concrete, primary-source product signal for interactive world models rather than another abstract demo reel. It also sharpens an important editorial boundary for the site: Genie remains an experimental prototype, but it now connects promptable worlds to real-place imagery in a way that is relevant for simulation, robotics, and spatial-computing readers.",
    tags: ["Interactive worlds", "Spatial computing", "DeepMind", "Product"],
    signalType: "Product",
    impactLevel: "High",
    whatChanged: [
      "Google connected Project Genie to Street View-grounded scenes and tied the rollout to eligible Google AI Ultra subscribers instead of positioning it as a broad public API launch.",
    ],
    sourceConfidence: "Official product update",
    availabilityNote:
      "Treat this as an experimental prototype rollout tied to Google's own subscription surface, not as a generally available world-model platform.",
    overclaimWarning:
      "Do not flatten Project Genie into a widely available developer API or a fully open-ended consumer world-building product.",
    relatedModelSlugs: ["genie-3"],
    relatedComparisonSlugs: [
      "happyoyster-vs-genie-3",
      "genie-3-vs-oasis",
      "genie-3-vs-marble",
    ],
    sources: [
      {
        label: "Google DeepMind: Simulate real-world places with Project Genie and Street View",
        url: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie-expands/",
      },
      {
        label: "Google DeepMind: Genie 3 model page",
        url: "https://deepmind.google/models/genie/",
      },
      {
        label: "Google AI subscriptions: Project Genie rollout",
        url: "https://blog.google/products-and-platforms/products/google-one/google-ai-subscriptions/",
      },
    ],
  },
  {
    slug: "runway-characters-gwm-1",
    title: "Runway turns GWM-1 into a real-time character product surface",
    date: "2026-05-04",
    evolutionStageId: "understand-predict",
    organization: "Runway",
    summary:
      "Runway said its new Characters system is built on GWM-1 and made the real-time conversational video agent available through the Runway API plus web and mobile apps.",
    whyItMatters:
      "This is a source-backed product signal for the avatar branch of world models, not just another video-model demo. It gives GWM-1 a clearer deployed surface while preserving an important editorial boundary: Characters shows low-latency conversational agents and identity persistence, but it is not the same thing as an open-ended explorable world platform.",
    tags: ["Runway", "GWM-1", "Avatars", "Product"],
    signalType: "Product",
    impactLevel: "Medium",
    whatChanged: [
      "Runway moved GWM-1 from a research framing into a concrete product surface through Characters, with rollout language tied to the Runway API plus web and mobile apps.",
    ],
    sourceConfidence: "Official product update",
    availabilityNote:
      "The clearest public deployment signal is the character-agent surface, not a general-purpose explorable world tool.",
    overclaimWarning:
      "Do not treat Runway Characters as proof that GWM-1 is broadly available as an open world-simulation platform.",
    relatedModelSlugs: ["gwm-1"],
    relatedComparisonSlugs: ["marble-vs-gwm-1"],
    sources: [
      {
        label: "Runway News: Building Runway Characters",
        url: "https://runwayml.com/news/building-runway-characters",
      },
      {
        label: "Runway Research: Introducing Runway GWM-1",
        url: "https://runwayml.com/research/introducing-runway-gwm-1",
      },
      {
        label: "Runway Help: Available Models on Runway",
        url: "https://help.runwayml.com/hc/en-us/articles/48649877897107-Available-Models-on-Runway",
      },
    ],
  },
  {
    slug: "nvidia-cosmos-3-physical-ai-stack",
    title: "NVIDIA previews Cosmos 3 as a unifying physical-AI world model",
    date: "2026-03-16",
    updated: "2026-05-27",
    evolutionStageId: "physical-action",
    organization: "NVIDIA",
    summary:
      "At GTC 2026, NVIDIA said Cosmos 3 would unify synthetic world generation, physical-AI reasoning, and action simulation, then kept widening the public Cosmos surface through an open data-factory blueprint and GitHub repos that were still active in late May.",
    whyItMatters:
      "This remains a meaningful primary-source product update rather than a vague platform claim. The March 16, 2026 press materials established Cosmos 3 and the physical-AI data-factory blueprint together, and NVIDIA's still-active public GitHub surface makes the stack easier to verify as an ecosystem of world generation, curation, evaluation, and robot-training tools rather than a single demo video.",
    tags: ["Physical AI", "Robotics", "NVIDIA", "Product"],
    signalType: "Physical AI",
    impactLevel: "High",
    whatChanged: [
      "NVIDIA's March 16, 2026 GTC materials linked Cosmos 3 to a broader physical-AI data-factory blueprint, and the public Cosmos GitHub organization remained active through May 27, 2026.",
    ],
    sourceConfidence: "Official platform update",
    availabilityNote:
      "Some Cosmos components are public on GitHub today, but Cosmos 3 itself is still described in preview-style language and should not be treated as a fully shipped standalone product.",
    overclaimWarning:
      "Do not convert active repositories and blueprint materials into a claim that all Cosmos 3 capabilities are generally available now.",
    relatedModelSlugs: ["cosmos"],
    relatedComparisonSlugs: ["cosmos-vs-general-world-models"],
    sources: [
      {
        label: "NVIDIA Newsroom: NVIDIA and global robotics leaders take physical AI to the real world",
        url: "https://nvidianews.nvidia.com/news/nvidia-and-global-robotics-leaders-take-physical-ai-to-the-real-world",
      },
      {
        label: "NVIDIA Newsroom: NVIDIA expands open model families",
        url: "https://nvidianews.nvidia.com/news/nvidia-expands-open-model-families-to-power-the-next-wave-of-agentic-physical-and-healthcare-ai",
      },
      {
        label: "NVIDIA Newsroom: Physical AI Data Factory Blueprint",
        url: "https://nvidianews.nvidia.com/news/nvidia-announces-open-physical-ai-data-factory-blueprint-to-accelerate-robotics-vision-ai-agents-and-autonomous-vehicle-development",
      },
      {
        label: "NVIDIA Newsroom: NVIDIA launches Cosmos world foundation model platform",
        url: "https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-world-foundation-model-platform-to-accelerate-physical-ai-development",
      },
      {
        label: "NVIDIA Cosmos GitHub organization",
        url: "https://github.com/nvidia-cosmos",
      },
    ],
  },
  {
    slug: "ant-robbyant-lingbot-vla",
    title: "Robbyant releases LingBot-VLA for embodied-AI control",
    date: "2026-01-27",
    updated: "2026-05-05",
    evolutionStageId: "physical-action",
    organization: "Ant Group / Robbyant",
    summary:
      "Robbyant released LingBot-VLA as a vision-language-action foundation model for generalist robot manipulation, with public code, paper, and model checkpoints.",
    whyItMatters:
      "This fills an important gap in the site's Ant coverage: not every embodied-AI system in the stack is best described as a world simulator. LingBot-VLA gives the site a clean primary-source anchor for policy and action models that sit next to LingBot-VA and LingBot-World without collapsing them into the same product class.",
    tags: ["Physical AI", "Robotics", "Ant Group", "Research"],
    signalType: "Physical AI",
    impactLevel: "Medium",
    whatChanged: [
      "Robbyant published LingBot-VLA as an open vision-language-action release, giving the site a robot-policy signal separate from explorable world simulators.",
    ],
    sourceConfidence: "Official open-source release",
    availabilityNote:
      "Treat this as an embodied-AI control release with public code and model materials, not as a consumer world-building product.",
    overclaimWarning:
      "Do not collapse LingBot-VLA into the same product class as HappyOyster, Marble, or Genie.",
    relatedModelSlugs: ["lingbot-vla"],
    relatedComparisonSlugs: ["lingbot-vla-vs-lingbot-va"],
    sources: [
      {
        label: "LingBot-VLA GitHub repository",
        url: "https://github.com/Robbyant/lingbot-vla",
      },
      {
        label: "arXiv: A Pragmatic VLA Foundation Model",
        url: "https://arxiv.org/abs/2601.18692",
      },
      {
        label: "Hugging Face: LingBot-VLA collection",
        url: "https://huggingface.co/collections/robbyant/lingbot-vla",
      },
    ],
  },
  {
    slug: "ant-robbyant-lingbot-va",
    title: "Robbyant publishes LingBot-VA for robot-control world modeling",
    date: "2026-01-29",
    evolutionStageId: "physical-action",
    organization: "Ant Group / Robbyant",
    summary:
      "Robbyant released LingBot-VA as a causal video-action world model that predicts visual dynamics and robot actions together.",
    whyItMatters:
      "This is a clean primary-source addition for the site's physical-AI and embodied-AI track. It helps readers distinguish robot-control world modeling from explorable world products while keeping Ant coverage anchored in public code, paper, and model releases rather than reported product claims.",
    tags: ["Physical AI", "Robotics", "Ant Group", "Research"],
    signalType: "Physical AI",
    impactLevel: "Medium",
    whatChanged: [
      "Robbyant published LingBot-VA as a causal video-action world model, creating a clearer robot-control branch next to LingBot-World.",
    ],
    sourceConfidence: "Official open-source release",
    availabilityNote:
      "Treat this as a robot-control world-model release, not as a public creator or explorable-world product.",
    overclaimWarning:
      "Do not imply LingBot-VA is a general consumer world simulator.",
    relatedModelSlugs: ["lingbot-va"],
    relatedComparisonSlugs: ["lingbot-vla-vs-lingbot-va", "lingbot-va-vs-lingbot-world"],
    sources: [
      {
        label: "LingBot-VA GitHub repository",
        url: "https://github.com/Robbyant/lingbot-va",
      },
      {
        label: "arXiv: Causal World Modeling for Robot Control",
        url: "https://arxiv.org/abs/2601.21998",
      },
      {
        label: "Hugging Face: lingbot-va-base",
        url: "https://huggingface.co/robbyant/lingbot-va-base",
      },
    ],
  },
  {
    slug: "ant-robbyant-lingbot-map",
    title: "Robbyant releases LingBot-Map for streaming 3D reconstruction",
    date: "2026-04-15",
    updated: "2026-05-25",
    evolutionStageId: "generated-space",
    organization: "Ant Group / Robbyant",
    summary:
      "Robbyant followed the LingBot-Map release with public evaluation scripts for KITTI and Oxford Spires, strengthening the model's reproducibility story for streaming 3D reconstruction.",
    whyItMatters:
      "This remains a strong primary-source Ant update, but the May 25 benchmark release adds a better reason to keep LingBot-Map visible: readers can now inspect a more concrete evaluation path instead of relying only on paper claims and teaser demos. It improves the site's spatial-computing and generated-3D-world coverage while keeping a clear editorial boundary between reconstruction systems and generative world products.",
    tags: ["3D reconstruction", "Spatial computing", "Ant Group", "Research"],
    signalType: "Open source",
    impactLevel: "Medium",
    whatChanged: [
      "Robbyant added public benchmark and evaluation materials around LingBot-Map, making its streaming 3D reconstruction claims easier to inspect.",
    ],
    sourceConfidence: "Official repository update",
    availabilityNote:
      "Treat LingBot-Map as a spatial reconstruction release, not as a generated-world product.",
    overclaimWarning:
      "Do not describe reconstruction benchmarks as proof of a general interactive world creator.",
    relatedModelSlugs: ["lingbot-map"],
    relatedComparisonSlugs: ["lingbot-map-vs-marble"],
    sources: [
      {
        label: "LingBot-Map GitHub repository",
        url: "https://github.com/Robbyant/lingbot-map",
      },
      {
        label: "arXiv: Geometric Context Transformer for Streaming 3D Reconstruction",
        url: "https://arxiv.org/abs/2604.14141",
      },
      {
        label: "Hugging Face: lingbot-map",
        url: "https://huggingface.co/robbyant/lingbot-map",
      },
    ],
  },
  {
    slug: "ant-lingguang-mobile-world-model",
    title: "Ant Lingguang brings a world-model experience to mobile",
    date: "2026-04-27",
    evolutionStageId: "controllable-worlds",
    organization: "Ant Group / Robbyant",
    summary:
      "Ant's Lingguang App was reported to add an 'Experience World Model' feature backed by LingBot-World-Fast, turning one image into a short explorable 3D scene on mobile.",
    whyItMatters:
      "This is the consumer-interface signal we should not miss: world models are no longer only papers, demos, or developer repos. The primary model sources confirm LingBot-World and LingBot-World-Fast; the Lingguang mobile feature should be cited as a reported product integration until an official Ant product note is available.",
    tags: ["Mobile", "Lingguang", "Open source", "Interactive worlds"],
    signalType: "Reported",
    impactLevel: "Medium",
    whatChanged: [
      "Media reports said Ant's Lingguang app added an 'Experience World Model' feature backed by LingBot-World-Fast, but the integration claim still lacks a matching primary Ant product note.",
    ],
    sourceConfidence: "Reported product signal",
    availabilityNote:
      "The model family is source-backed through GitHub, arXiv, and Hugging Face, while the Lingguang mobile integration should remain labeled as reported.",
    overclaimWarning:
      "Do not represent the Lingguang feature as a primary-source-confirmed general release until Ant publishes an official product note.",
    relatedModelSlugs: ["lingbot-world"],
    relatedComparisonSlugs: ["happyoyster-vs-lingbot-world", "lingbot-va-vs-lingbot-world"],
    sources: [
      {
        label: "IT Home report: Lingguang mobile world model",
        url: "https://www.ithome.com/0/943/833.htm",
      },
      {
        label: "QbitAI report: LingBot-World-Fast",
        url: "https://www.qbitai.com/2026/04/407972.html",
      },
      {
        label: "LingBot-World GitHub repository",
        url: "https://github.com/Robbyant/lingbot-world",
      },
      {
        label: "Hugging Face: lingbot-world-fast",
        url: "https://huggingface.co/robbyant/lingbot-world-fast",
      },
    ],
  },
  {
    slug: "tencent-hy-embodied-0-5-x",
    title: "Tencent open-sources HY-Embodied-0.5 and extends it with 0.5-X",
    date: "2026-04-24",
    evolutionStageId: "physical-action",
    organization: "Tencent Robotics X / HY Vision Team",
    summary:
      "Tencent open-sourced HY-Embodied-0.5 for real-world embodied agents and then released the HY-Embodied-0.5-X enhancement with inference and training code.",
    whyItMatters:
      "This is a clean, source-backed Tencent addition for the site's physical-AI coverage. It expands the editorial frame beyond 3D world generation into embodied reasoning and planning, while keeping a strict distinction between robot-facing foundation models and explorable world products.",
    tags: ["Physical AI", "Robotics", "Tencent", "Research"],
    signalType: "Physical AI",
    impactLevel: "Medium",
    whatChanged: [
      "Tencent added the HY-Embodied-0.5-X release path on top of HY-Embodied-0.5, widening the robot-facing model surface.",
    ],
    sourceConfidence: "Official open-source release",
    availabilityNote:
      "Treat HY-Embodied as an embodied foundation-model lane, not as a consumer world creator.",
    overclaimWarning:
      "Do not turn robot-facing reasoning models into a claim about broadly available explorable worlds.",
    relatedModelSlugs: ["hy-embodied-0-5"],
    relatedComparisonSlugs: ["cosmos-vs-general-world-models"],
    sources: [
      {
        label: "Tencent-Hunyuan/HY-Embodied GitHub repository",
        url: "https://github.com/Tencent-Hunyuan/HY-Embodied",
      },
      {
        label: "Hugging Face: tencent/HY-Embodied-0.5-X",
        url: "https://huggingface.co/tencent/HY-Embodied-0.5-X",
      },
      {
        label: "arXiv: HY-Embodied-0.5",
        url: "https://arxiv.org/abs/2604.07430",
      },
    ],
  },
  {
    slug: "alibaba-happyoyster-world-model",
    title: "Alibaba launches HappyOyster for real-time world creation",
    date: "2026-04-20",
    evolutionStageId: "controllable-worlds",
    organization: "Alibaba Token Hub",
    summary:
      "Alibaba introduced HappyOyster as an open-ended world model product for creating, exploring, and directing immersive environments in real time.",
    whyItMatters:
      "HappyOyster gives the site an Alibaba product-track anchor beside Ant's open-source LingBot route. It also clarifies a key editorial distinction: some world models are open simulators for developers, while others are productized creative interfaces for exploration and directing.",
    tags: ["Alibaba", "HappyOyster", "Early Access", "Interactive worlds"],
    signalType: "Product",
    impactLevel: "High",
    whatChanged: [
      "Alibaba positioned HappyOyster as an early-access world-model product for exploration and directing rather than as an open-source model release.",
    ],
    sourceConfidence: "Official product launch",
    availabilityNote:
      "Access is still framed as early access, so product availability and usage terms should be kept more conservative than a broad public-launch claim.",
    overclaimWarning:
      "Do not present HappyOyster as a generally available API or as a validated robotics simulator.",
    relatedModelSlugs: ["happyoyster"],
    relatedComparisonSlugs: ["happyoyster-vs-genie-3", "happyoyster-vs-lingbot-world"],
    sources: [
      {
        label: "Alibaba Cloud Community: HappyOyster launch",
        url: "https://www.alibabacloud.com/blog/alibaba-launches-happyoyster-a-world-model-product-for-real-time-immersive-creation-and-interaction_603048",
      },
      {
        label: "HappyOyster website",
        url: "https://www.happyoyster.cn/",
      },
      {
        label: "HappyOyster docs",
        url: "https://www.happyoyster.cn/docs",
      },
    ],
  },
  {
    slug: "tencent-hunyuan-hy-world-2-0",
    title: "Tencent Hunyuan opens HY-World 2.0 for persistent 3D worlds",
    date: "2026-04-16",
    updated: "2026-05-18",
    evolutionStageId: "generated-space",
    organization: "Tencent Hunyuan",
    summary:
      "Tencent Hunyuan expanded HY-World 2.0 beyond its April release by publishing HY-Pano 2.0 inference code and weights on May 11, then world-generation inference code plus WorldStereo 2.0 weights on May 18.",
    whyItMatters:
      "This keeps HY-World 2.0 current as a source-backed Tencent reference for generated 3D worlds. The May 2026 repo updates materially improve reproducibility and make the open technical surface stronger without turning HY-World 2.0 into a polished public creator product.",
    tags: ["Tencent", "3D worlds", "Open source", "Research"],
    signalType: "Open source",
    impactLevel: "High",
    whatChanged: [
      "Tencent's official HY-World 2.0 repository added HY-Pano 2.0 inference code and weights on May 11, 2026, then added world-generation inference code and WorldStereo 2.0 weights on May 18, 2026.",
    ],
    sourceConfidence: "Official repository update",
    availabilityNote:
      "Treat this as an expanded open research stack, not as a generally available consumer world-building product.",
    overclaimWarning:
      "Do not imply that HY-World 2.0 is now a turnkey public product simply because more repo components and weights are available.",
    relatedModelSlugs: ["hy-world-2-0"],
    relatedComparisonSlugs: ["hy-world-2-0-vs-marble", "project-sid-vs-world-models"],
    sources: [
      {
        label: "Tencent-Hunyuan/HY-World-2.0 GitHub repository",
        url: "https://github.com/Tencent-Hunyuan/HY-World-2.0",
      },
      {
        label: "Hugging Face: tencent/HY-World-2.0",
        url: "https://huggingface.co/tencent/HY-World-2.0",
      },
      {
        label: "arXiv: HY-World 2.0",
        url: "https://arxiv.org/abs/2604.14268",
      },
    ],
  },
  {
    slug: "world-labs-world-api-announced",
    title: "World Labs announces the World API",
    date: "2026-01-21",
    evolutionStageId: "generated-space",
    organization: "World Labs",
    summary:
      "World Labs moved its world model work toward a programmable developer surface with the World API.",
    whyItMatters:
      "This is a platform signal. For this site, it separates world model coverage from demo watching and creates a developer-facing news track.",
    tags: ["API", "3D worlds", "World Labs"],
    signalType: "Platform",
    impactLevel: "Medium",
    whatChanged: [
      "World Labs described a programmable World API direction, shifting part of the Marble story from product demo toward developer platform.",
    ],
    sourceConfidence: "Official platform announcement",
    availabilityNote:
      "Treat this as a developer-surface signal whose practical access still depends on current World Labs documentation.",
    overclaimWarning:
      "Do not imply every Marble capability is already exposed as a stable general API.",
    relatedModelSlugs: ["world-api", "marble"],
    relatedComparisonSlugs: ["hy-world-2-0-vs-marble", "genie-3-vs-marble"],
    sources: [
      {
        label: "World Labs: Announcing the World API",
        url: "https://www.worldlabs.ai/blog/announcing-the-world-api",
      },
    ],
  },
  {
    slug: "project-sid-civilization",
    title: "Project Sid frames many-agent simulation as an AI civilization experiment",
    date: "2025-12-18",
    evolutionStageId: "agent-societies",
    organization: "Altera",
    summary:
      "Project Sid gives the timeline a society-layer signal: agents specialize, coordinate, trade, and transmit behavior inside a persistent Minecraft-based world.",
    whyItMatters:
      "The event matters because it keeps world model coverage from stopping at scenery, video, or camera control. Persistent worlds become more consequential when many agents can form routines, rules, and culture inside them.",
    tags: ["AI civilization", "Agents", "Simulation", "Project Sid"],
    signalType: "Research",
    impactLevel: "Medium",
    whatChanged: [
      "The world-model story expands from generated environments into many-agent behavior, where the world acts as a substrate for social simulation.",
    ],
    sourceConfidence: "Official project repository",
    availabilityNote:
      "Treat Project Sid as a many-agent simulation lane, not as a generative visual world product like Marble or Genie.",
    overclaimWarning:
      "Do not present Project Sid as proof that all world models now contain persistent autonomous societies.",
    relatedModelSlugs: ["project-sid"],
    relatedComparisonSlugs: ["project-sid-vs-world-models"],
    sources: [
      {
        label: "Altera Project Sid GitHub repository",
        url: "https://github.com/altera-al/project-sid",
      },
    ],
  },
  {
    slug: "runway-introduces-gwm-1",
    title: "Runway introduces GWM-1",
    date: "2025-12-11",
    evolutionStageId: "understand-predict",
    organization: "Runway",
    summary:
      "Runway framed GWM-1 as a general world model direction that reaches beyond video into worlds, avatars, and robotics.",
    whyItMatters:
      "It shows how video-native companies are repositioning toward world modeling rather than staying in fixed media generation.",
    tags: ["General world model", "Runway", "Research"],
    signalType: "Research",
    impactLevel: "Medium",
    whatChanged: [
      "Runway introduced GWM-1 as a general world-model direction that reframes its video heritage around worlds, avatars, and robotics-adjacent work.",
    ],
    sourceConfidence: "Official research announcement",
    availabilityNote:
      "Treat this as a research and strategy signal, with Characters as the clearer later product surface.",
    overclaimWarning:
      "Do not present the original GWM-1 announcement as a complete public explorable-world platform.",
    relatedModelSlugs: ["gwm-1"],
    relatedComparisonSlugs: ["marble-vs-gwm-1"],
    sources: [
      {
        label: "Runway Research: Introducing Runway GWM-1",
        url: "https://runwayml.com/research/introducing-runway-gwm-1",
      },
    ],
  },
  {
    slug: "world-labs-launches-marble",
    title: "World Labs launches Marble",
    date: "2025-11-12",
    evolutionStageId: "generated-space",
    organization: "World Labs",
    summary:
      "Marble gave the world model category a concrete product surface: generated 3D worlds that can be explored and edited.",
    whyItMatters:
      "It helps non-research users understand world models through spatial creation instead of abstract model capability claims.",
    tags: ["3D worlds", "Spatial intelligence", "Product"],
    signalType: "Product",
    impactLevel: "High",
    whatChanged: [
      "World Labs launched Marble as a visible product surface for creating, editing, and exploring generated 3D worlds.",
    ],
    sourceConfidence: "Official product launch",
    availabilityNote:
      "Treat Marble as a product-facing 3D world workflow, not as a robotics simulator or many-agent platform.",
    overclaimWarning:
      "Do not use Marble's creator surface as evidence that all world models are already broadly programmable or physically validated.",
    relatedModelSlugs: ["marble"],
    relatedComparisonSlugs: [
      "hy-world-2-0-vs-marble",
      "skybox-ai-vs-marble",
      "genie-3-vs-marble",
    ],
    sources: [
      {
        label: "World Labs: Introducing Marble, our first world model",
        url: "https://www.worldlabs.ai/blog/marble-world-model",
      },
    ],
  },
  {
    slug: "deepmind-announces-genie-3",
    title: "Google DeepMind announces Genie 3",
    date: "2025-08-05",
    evolutionStageId: "controllable-worlds",
    organization: "Google DeepMind",
    summary:
      "Genie 3 placed interactive, navigable world generation near the center of the world model conversation.",
    whyItMatters:
      "For readers, Genie 3 is one of the cleanest examples of how a world model differs from a normal image or video generator.",
    tags: ["Interactive worlds", "Research", "DeepMind"],
    signalType: "Research",
    impactLevel: "High",
    whatChanged: [
      "Google DeepMind presented Genie 3 as an interactive world-model frontier rather than a fixed clip-generation model.",
    ],
    sourceConfidence: "Official research announcement",
    availabilityNote:
      "Treat Genie 3 as a research preview and Project Genie path, not as a broad public developer API.",
    overclaimWarning:
      "Do not flatten Genie 3 into a generally available product surface.",
    relatedModelSlugs: ["genie-3"],
    relatedComparisonSlugs: ["genie-3-vs-oasis", "genie-3-vs-marble", "world-model-vs-video-model"],
    sources: [
      {
        label: "Google DeepMind: Genie 3, a new frontier for world models",
        url: "https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/",
      },
    ],
  },
  {
    slug: "nvidia-launches-cosmos",
    title: "NVIDIA launches Cosmos",
    date: "2025-01-06",
    evolutionStageId: "physical-action",
    organization: "NVIDIA",
    summary:
      "NVIDIA introduced Cosmos as a world foundation model platform for physical AI development.",
    whyItMatters:
      "It anchors the robotics, autonomous driving, and simulation side of the world model category.",
    tags: ["Physical AI", "Robotics", "Autonomous driving"],
    signalType: "Physical AI",
    impactLevel: "High",
    whatChanged: [
      "NVIDIA introduced Cosmos as a world foundation model platform for physical AI development.",
    ],
    sourceConfidence: "Official platform launch",
    availabilityNote:
      "Treat Cosmos as a physical-AI platform family, not as a consumer world creator.",
    overclaimWarning:
      "Do not compare Cosmos as if it were the same product class as Marble, Skybox AI, or HappyOyster.",
    relatedModelSlugs: ["cosmos"],
    relatedComparisonSlugs: ["cosmos-vs-general-world-models"],
    sources: [
      {
        label: "NVIDIA Newsroom: NVIDIA launches Cosmos world foundation model platform",
        url: "https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-world-foundation-model-platform-to-accelerate-physical-ai-development",
      },
    ],
  },
  {
    slug: "oasis-realtime-world",
    title: "Oasis demonstrates a realtime playable AI world",
    date: "2024-10-31",
    evolutionStageId: "controllable-worlds",
    organization: "Decart AI + Etched",
    summary:
      "Oasis demonstrated an action-conditioned Minecraft-like world that can be generated frame by frame while the player moves.",
    whyItMatters:
      "Oasis is one of the clearest public examples of the jump from watching generated media to steering a generated world. It makes control visible to ordinary users because input changes the next moment rather than only prompting a finished clip.",
    tags: ["Playable worlds", "Realtime", "Demo", "Oasis"],
    signalType: "Research",
    impactLevel: "Medium",
    whatChanged: [
      "Action conditioning became visible in a playable world demo, making the screen feel closer to an interactive environment than a rendered video.",
    ],
    sourceConfidence: "Official project page",
    availabilityNote:
      "The public signal is an official realtime world-model demo, not a broad production game engine replacement.",
    overclaimWarning:
      "Do not treat Oasis as evidence that generated worlds are already stable, persistent, or fully open-ended platforms.",
    relatedModelSlugs: ["oasis"],
    relatedComparisonSlugs: ["genie-3-vs-oasis", "world-model-vs-video-model"],
    sources: [
      {
        label: "Oasis project page",
        url: "https://oasis-model.github.io/",
      },
    ],
  },
  {
    slug: "skybox-immersive-worlds",
    title: "Skybox AI keeps the entry point simple: type a place, open a world",
    date: "2024-07-18",
    evolutionStageId: "generated-space",
    organization: "Blockade Labs",
    summary:
      "Skybox AI gives the timeline an early consumer-facing spatial signal: a generated world can start as a 360-degree horizon, mood, and environment shell.",
    whyItMatters:
      "This is a useful baseline for the generated-space stage. Before full 3D worlds and realtime control, users could already understand the category through an immersive place that surrounds the camera.",
    tags: ["360 worlds", "Spatial worlds", "Consumer tool", "Skybox AI"],
    signalType: "Product",
    impactLevel: "Medium",
    whatChanged: [
      "Text-to-world creation became understandable as a 360-degree environment surface rather than only as a flat image or video output.",
    ],
    sourceConfidence: "Official product surface",
    availabilityNote:
      "Skybox is best framed as an immersive environment and panorama lane, not as a full physics-grounded world simulator.",
    overclaimWarning:
      "Do not collapse generated 360-degree environments into the same category as persistent 3D world models.",
    relatedModelSlugs: ["skybox-ai"],
    relatedComparisonSlugs: ["skybox-ai-vs-marble"],
    sources: [
      {
        label: "Skybox AI product page",
        url: "https://skybox.blockadelabs.com/",
      },
      {
        label: "Blockade Labs landing page",
        url: "https://landing-dev.blockadelabs.com/",
      },
    ],
  },
];
export function getNewsItem(slug: string) {
  return newsItems.find((item) => item.slug === slug);
}
