import type { NewsItem, Source } from "./types";

export const newsItems: NewsItem[] = [
  {
    slug: "google-project-genie-street-view",
    title: "Google expands Project Genie with Street View-grounded worlds",
    date: "2026-05-19",
    organization: "Google DeepMind",
    summary:
      "Google added Street View grounding to Project Genie and began rolling the experimental prototype out to eligible Google AI Ultra subscribers globally.",
    whyItMatters:
      "This is a concrete, primary-source product signal for interactive world models rather than another abstract demo reel. It also sharpens an important editorial boundary for the site: Genie remains an experimental prototype, but it now connects promptable worlds to real-place imagery in a way that is relevant for simulation, robotics, and spatial-computing readers.",
    tags: ["Interactive worlds", "Spatial computing", "DeepMind", "Product"],
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
    organization: "Runway",
    summary:
      "Runway said its new Characters system is built on GWM-1 and made the real-time conversational video agent available through the Runway API plus web and mobile apps.",
    whyItMatters:
      "This is a source-backed product signal for the avatar branch of world models, not just another video-model demo. It gives GWM-1 a clearer deployed surface while preserving an important editorial boundary: Characters shows low-latency conversational agents and identity persistence, but it is not the same thing as an open-ended explorable world platform.",
    tags: ["Runway", "GWM-1", "Avatars", "Product"],
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
    updated: "2026-05-23",
    organization: "NVIDIA",
    summary:
      "At GTC 2026, NVIDIA said Cosmos 3 would unify synthetic world generation, physical-AI reasoning, and action simulation, then kept widening the public Cosmos surface with a data-factory blueprint and active GitHub repos for curation, evaluation, and post-training workflows.",
    whyItMatters:
      "This remains a meaningful primary-source product update rather than a vague platform claim. The March 16, 2026 press materials established Cosmos 3 and the physical-AI data-factory blueprint together, and NVIDIA's public GitHub surface now makes the stack easier to verify as an ecosystem of world generation, curation, evaluation, and robot-training tools rather than a single demo video.",
    tags: ["Physical AI", "Robotics", "NVIDIA", "Product"],
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
    organization: "Ant Group / Robbyant",
    summary:
      "Robbyant released LingBot-VLA as a vision-language-action foundation model for generalist robot manipulation, with public code, paper, and model checkpoints.",
    whyItMatters:
      "This fills an important gap in the site's Ant coverage: not every embodied-AI system in the stack is best described as a world simulator. LingBot-VLA gives the site a clean primary-source anchor for policy and action models that sit next to LingBot-VA and LingBot-World without collapsing them into the same product class.",
    tags: ["Physical AI", "Robotics", "Ant Group", "Research"],
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
    organization: "Ant Group / Robbyant",
    summary:
      "Robbyant released LingBot-VA as a causal video-action world model that predicts visual dynamics and robot actions together.",
    whyItMatters:
      "This is a clean primary-source addition for the site's physical-AI and embodied-AI track. It helps readers distinguish robot-control world modeling from explorable world products while keeping Ant coverage anchored in public code, paper, and model releases rather than reported product claims.",
    tags: ["Physical AI", "Robotics", "Ant Group", "Research"],
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
    organization: "Ant Group / Robbyant",
    summary:
      "Robbyant followed the LingBot-Map release with public evaluation scripts for KITTI and Oxford Spires, strengthening the model's reproducibility story for streaming 3D reconstruction.",
    whyItMatters:
      "This remains a strong primary-source Ant update, but the May 25 benchmark release adds a better reason to keep LingBot-Map visible: readers can now inspect a more concrete evaluation path instead of relying only on paper claims and teaser demos. It improves the site's spatial-computing and generated-3D-world coverage while keeping a clear editorial boundary between reconstruction systems and generative world products.",
    tags: ["3D reconstruction", "Spatial computing", "Ant Group", "Research"],
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
    organization: "Ant Group / Robbyant",
    summary:
      "Ant's Lingguang App was reported to add an 'Experience World Model' feature backed by LingBot-World-Fast, turning one image into a short explorable 3D scene on mobile.",
    whyItMatters:
      "This is the consumer-interface signal we should not miss: world models are no longer only papers, demos, or developer repos. The primary model sources confirm LingBot-World and LingBot-World-Fast; the Lingguang mobile feature should be cited as a reported product integration until an official Ant product note is available.",
    tags: ["Mobile", "Lingguang", "Open source", "Interactive worlds"],
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
    organization: "Tencent Robotics X / HY Vision Team",
    summary:
      "Tencent open-sourced HY-Embodied-0.5 for real-world embodied agents and then released the HY-Embodied-0.5-X enhancement with inference and training code.",
    whyItMatters:
      "This is a clean, source-backed Tencent addition for the site's physical-AI coverage. It expands the editorial frame beyond 3D world generation into embodied reasoning and planning, while keeping a strict distinction between robot-facing foundation models and explorable world products.",
    tags: ["Physical AI", "Robotics", "Tencent", "Research"],
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
    organization: "Alibaba Token Hub",
    summary:
      "Alibaba introduced HappyOyster as an open-ended world model product for creating, exploring, and directing immersive environments in real time.",
    whyItMatters:
      "HappyOyster gives the site an Alibaba product-track anchor beside Ant's open-source LingBot route. It also clarifies a key editorial distinction: some world models are open simulators for developers, while others are productized creative interfaces for exploration and directing.",
    tags: ["Alibaba", "HappyOyster", "Early Access", "Interactive worlds"],
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
    updated: "2026-05-06",
    organization: "Tencent Hunyuan",
    summary:
      "Tencent Hunyuan published HY-World 2.0 as a multimodal framework for generating and reconstructing editable 3D worlds, with a public repo, model card, and technical report.",
    whyItMatters:
      "This is a strong primary-source addition for the site's Tencent coverage and a useful editorial boundary marker: HY-World 2.0 is not just another video model. Its public materials emphasize persistent 3D assets, reconstruction, and engine-ready worlds, which makes it a good comparison target for Marble and a clean counterpoint to clip-oriented world-model claims.",
    tags: ["Tencent", "3D worlds", "Open source", "Research"],
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
    organization: "World Labs",
    summary:
      "World Labs moved its world model work toward a programmable developer surface with the World API.",
    whyItMatters:
      "This is a platform signal. For this site, it separates world model coverage from demo watching and creates a developer-facing news track.",
    tags: ["API", "3D worlds", "World Labs"],
    sources: [
      {
        label: "World Labs: Announcing the World API",
        url: "https://www.worldlabs.ai/blog/announcing-the-world-api",
      },
    ],
  },
  {
    slug: "runway-introduces-gwm-1",
    title: "Runway introduces GWM-1",
    date: "2025-12-11",
    organization: "Runway",
    summary:
      "Runway framed GWM-1 as a general world model direction that reaches beyond video into worlds, avatars, and robotics.",
    whyItMatters:
      "It shows how video-native companies are repositioning toward world modeling rather than staying in fixed media generation.",
    tags: ["General world model", "Runway", "Research"],
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
    organization: "World Labs",
    summary:
      "Marble gave the world model category a concrete product surface: generated 3D worlds that can be explored and edited.",
    whyItMatters:
      "It helps non-research users understand world models through spatial creation instead of abstract model capability claims.",
    tags: ["3D worlds", "Spatial intelligence", "Product"],
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
    organization: "Google DeepMind",
    summary:
      "Genie 3 placed interactive, navigable world generation near the center of the world model conversation.",
    whyItMatters:
      "For readers, Genie 3 is one of the cleanest examples of how a world model differs from a normal image or video generator.",
    tags: ["Interactive worlds", "Research", "DeepMind"],
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
    organization: "NVIDIA",
    summary:
      "NVIDIA introduced Cosmos as a world foundation model platform for physical AI development.",
    whyItMatters:
      "It anchors the robotics, autonomous driving, and simulation side of the world model category.",
    tags: ["Physical AI", "Robotics", "Autonomous driving"],
    sources: [
      {
        label: "NVIDIA Newsroom: NVIDIA launches Cosmos world foundation model platform",
        url: "https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-world-foundation-model-platform-to-accelerate-physical-ai-development",
      },
    ],
  },
];
export function getNewsItem(slug: string) {
  return newsItems.find((item) => item.slug === slug);
}
