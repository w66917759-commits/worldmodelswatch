import type { ModelProfile, Source } from "./types";

export const modelProfiles: ModelProfile[] = [
  {
    slug: "emo",
    name: "EMO",
    organization: "Alibaba Group, Institute for Intelligent Computing",
    category: "Expressive portrait video model",
    date: "2024-02-27",
    status: "Research project and Alibaba Cloud Model Studio API",
    summary:
      "EMO, short for Emote Portrait Alive, generates expressive portrait videos from a single reference image and vocal audio.",
    focus: "Audio-driven humans, facial expression, head motion, identity persistence, and long-duration portrait animation.",
    availability:
      "Research project page, GitHub repository, arXiv paper, and Alibaba Cloud Model Studio API documentation.",
    strengths: [
      "Makes the future of controllable video immediately understandable through a strong visual demo.",
      "Shows why identity, expression, audio alignment, and duration matter for the path from clips to stateful worlds.",
      "Useful as a homepage signal for the human side of video world modeling.",
    ],
    limits: [
      "EMO is not a complete world model; it focuses on portrait animation rather than explorable environments.",
      "It should be compared as a video-human control signal, not as a replacement for Genie 3, Marble, or Cosmos.",
    ],
    sources: [
      {
        label: "EMO official project page",
        url: "https://humanaigc.github.io/emote-portrait-alive/",
      },
      {
        label: "HumanAIGC/EMO GitHub repository",
        url: "https://github.com/HumanAIGC/EMO",
      },
      {
        label: "Alibaba Cloud Model Studio: EMO quick start",
        url: "https://www.alibabacloud.com/help/en/model-studio/emo-quick-start/",
      },
    ],
  },
  {
    slug: "happyoyster",
    name: "HappyOyster",
    organization: "Alibaba Token Hub",
    category: "Real-time interactive world model product",
    date: "2026-04-20",
    status: "Early Access program",
    summary:
      "HappyOyster is Alibaba's open-ended world model product for real-time immersive world creation, exploration, and directing.",
    focus: "Multimodal prompts, real-time scene navigation, first-person and third-person exploration, and continuous directing of long 720p scenes.",
    availability:
      "Early Access through HappyOyster, with Alibaba Cloud Community and Alizila coverage describing the product direction.",
    strengths: [
      "A clear Alibaba-side product signal that world models are moving from research demos into interactive creation tools.",
      "Combines world exploration with directing, which makes it useful for film, game concepting, and interactive drama workflows.",
      "Useful bridge between video generation and stateful environments because user instructions can keep shaping the world while it unfolds.",
    ],
    limits: [
      "It is an Early Access product, so access, pricing, usage limits, and reproducible benchmarks should be checked before making production claims.",
      "Public coverage is product-level; deeper technical architecture details remain less open than open-source model releases.",
    ],
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
    slug: "lingbot-world",
    name: "LingBot-World",
    organization: "Ant Group / Robbyant",
    category: "Open-source interactive world simulator",
    date: "2026-01-29",
    status: "Open-source code, paper, and model releases",
    summary:
      "LingBot-World is Robbyant's open-source world simulator for high-fidelity, long-horizon, real-time interactive environments.",
    focus: "Image-conditioned world generation, long-term consistency, camera/action control, fast inference, and embodied AI training environments.",
    availability:
      "GitHub repository, arXiv technical report, Hugging Face model cards, and ModelScope download links.",
    strengths: [
      "Open code and weights make it easier to verify, deploy, compare, and build derivative experiments than closed research previews.",
      "LingBot-World-Fast targets real-time interaction with sub-second latency and 16 FPS generation in the public model card.",
      "Connects the world model story directly to game prototypes, robot learning, and interactive simulators.",
    ],
    limits: [
      "Running the full model still requires serious GPU resources; mobile user experience is product-mediated rather than local phone inference.",
      "Media reports about Lingguang App integration should be separated from primary model facts confirmed by GitHub, arXiv, and Hugging Face.",
    ],
    sources: [
      {
        label: "Robbyant GitHub organization",
        url: "https://github.com/Robbyant",
      },
      {
        label: "LingBot-World GitHub repository",
        url: "https://github.com/Robbyant/lingbot-world",
      },
      {
        label: "arXiv: Advancing Open-source World Models",
        url: "https://arxiv.org/abs/2601.20540",
      },
      {
        label: "Hugging Face: lingbot-world-fast",
        url: "https://huggingface.co/robbyant/lingbot-world-fast",
      },
    ],
  },
  {
    slug: "lingbot-map",
    name: "LingBot-Map",
    organization: "Ant Group / Robbyant",
    category: "Streaming 3D foundation model",
    date: "2026-04-15",
    status: "Open-source code, paper, and model releases",
    summary:
      "LingBot-Map is Robbyant's feed-forward 3D foundation model for streaming reconstruction from video sequences.",
    focus: "Streaming 3D reconstruction, long-horizon spatial memory, camera pose estimation, and browser-viewable scene understanding.",
    availability:
      "GitHub repository, arXiv paper, and Hugging Face model card with downloadable checkpoints.",
    strengths: [
      "Useful bridge between world models and spatial computing because it tracks geometry and scene consistency over long sequences.",
      "Grounds the site's generated-3D-world coverage with a primary-source reconstruction system instead of only product marketing pages.",
      "Strengthens Ant coverage beyond LingBot-World by showing the same ecosystem's spatial and embodied AI track.",
    ],
    limits: [
      "LingBot-Map is a reconstruction model, not a generative world-creation product like Marble or HappyOyster.",
      "Its strongest public claims center on 3D perception and mapping, so it should not be presented as a general interactive world simulator.",
    ],
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
    slug: "lingbot-va",
    name: "LingBot-VA",
    organization: "Ant Group / Robbyant",
    category: "Robot-control world model",
    date: "2026-01-29",
    status: "Open-source code, paper, and model releases",
    summary:
      "LingBot-VA is Robbyant's causal video-action world model for generalist robot control.",
    focus:
      "Video-action world modeling, long-horizon robot control, simulation-to-real evaluation, and embodied AI training.",
    availability:
      "GitHub repository, arXiv paper, project page, and Hugging Face model releases.",
    strengths: [
      "Directly extends the site's world-model coverage into embodied AI instead of staying only in creative or explorable environments.",
      "Primary sources are strong: open code, public paper, and downloadable model checkpoints under the Robbyant organization.",
      "Helpful for showing that world models can predict scene dynamics and robot actions together, not only generate visuals.",
    ],
    limits: [
      "LingBot-VA is not a consumer explorable world product, so it should not be framed like HappyOyster, Marble, or Genie 3.",
      "Its strongest evidence is in robot-control benchmarks and demos, not in general-purpose world-building workflows.",
    ],
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
    slug: "lingbot-vla",
    name: "LingBot-VLA",
    organization: "Ant Group / Robbyant",
    category: "Vision-language-action foundation model",
    date: "2026-01-27",
    updated: "2026-05-05",
    status: "Open-source code, paper, and model releases",
    summary:
      "LingBot-VLA is Robbyant's pragmatic vision-language-action foundation model for generalist robotic manipulation across platforms.",
    focus:
      "Embodied control, robot manipulation, multimodal instruction following, depth-aware perception, and post-training for real-world tasks.",
    availability:
      "GitHub repository, arXiv technical report, Hugging Face model cards and collection, and ModelScope checkpoints.",
    strengths: [
      "Extends the site's physical-AI track from prediction into action-taking embodied systems rather than only explorable worlds or reconstruction models.",
      "Primary sources are strong and reproducible: public code, arXiv paper, project page, and downloadable checkpoints under the Robbyant organization.",
      "Useful for showing how Ant's embodied-AI stack spans world simulation, robot-control world modeling, and VLA policy models rather than a single product claim.",
    ],
    limits: [
      "LingBot-VLA is not a consumer world-building product or an explorable simulator, so it should not be presented like HappyOyster, Marble, or Genie 3.",
      "Its public evidence centers on robot manipulation benchmarks and model releases, not on open-ended world simulation.",
    ],
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
    slug: "genie-3",
    name: "Genie 3",
    organization: "Google DeepMind",
    category: "Interactive world model",
    date: "2025-08-05",
    updated: "2026-05-19",
    status: "Research preview with Project Genie prototype rollout",
    summary:
      "Genie 3 is positioned as a frontier world model for generating and navigating interactive environments from prompts.",
    focus:
      "Real-time playable worlds, promptable environments, Street View-grounded scenes, and agent evaluation.",
    availability:
      "Experimental Project Genie prototype for eligible Google AI Ultra subscribers; not a general public API.",
    strengths: [
      "Directly frames the output as an interactive world rather than a fixed video clip.",
      "The May 2026 Street View grounding update gives the model a clearer bridge from fictional environments to real-place simulation.",
      "Useful for explaining the difference between world generation and video generation.",
      "Strong anchor for the general world model track.",
    ],
    limits: [
      "Access is still gated through the experimental Project Genie rollout and is not a broadly open developer platform.",
      "Details on broad production use, pricing, and developer controls remain constrained.",
    ],
    sources: [
      {
        label: "Google DeepMind: Genie 3, a new frontier for world models",
        url: "https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/",
      },
      {
        label: "Google DeepMind: Simulate real-world places with Project Genie and Street View",
        url: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie-expands/",
      },
      {
        label: "Google DeepMind: Genie 3 model page",
        url: "https://deepmind.google/models/genie/",
      },
    ],
  },
  {
    slug: "marble",
    name: "Marble",
    organization: "World Labs",
    category: "3D world model",
    date: "2025-11-12",
    status: "Product launch",
    summary:
      "Marble turns images, text, video, or spatial layouts into persistent 3D worlds that can be edited and explored.",
    focus: "Spatially consistent 3D worlds for creative and design workflows.",
    availability: "Public product surface with World Labs account access.",
    strengths: [
      "Clear consumer-facing expression of world models as editable 3D spaces.",
      "Strong fit for spatial intelligence and 3D creation coverage.",
      "Pairs naturally with the later World API platform story.",
    ],
    limits: [
      "The public product focus is creation-oriented, not a full robotics simulator.",
      "The degree of physical accuracy depends on task and tooling context.",
    ],
    sources: [
      {
        label: "World Labs: Introducing Marble, our first world model",
        url: "https://www.worldlabs.ai/blog/marble-world-model",
      },
    ],
  },
  {
    slug: "hy-world-2-0",
    name: "HY-World 2.0",
    organization: "Tencent Hunyuan",
    category: "3D world model",
    date: "2026-04-16",
    updated: "2026-05-06",
    status: "Open-source technical report, partial code, and model weights",
    summary:
      "HY-World 2.0 is Tencent Hunyuan's multimodal 3D world model for reconstructing, generating, and simulating persistent worlds from text, images, multi-view inputs, and video.",
    focus:
      "Generated 3D worlds, video-to-3D reconstruction, editable meshes and Gaussian splats, and interactive exploration with persistent assets.",
    availability:
      "GitHub repository, Hugging Face model card and weights, and an April 2026 technical report.",
    strengths: [
      "Gives the site a primary-source Tencent anchor in generated-3D-world coverage instead of leaving the ecosystem to Alibaba, Ant, World Labs, and DeepMind alone.",
      "The framing is unusually clear: HY-World 2.0 distinguishes persistent editable 3D assets from video rollouts and explains why that matters for engines and simulation.",
      "Its public release surface is strong for readers who care about reproducibility: code, weights, and documentation are already visible even though the full generation stack is not fully open yet.",
    ],
    limits: [
      "Tencent explicitly describes the current release as partial: WorldMirror 2.0 is open, while parts of the full world-generation stack are still marked coming soon.",
      "Its strongest current evidence is in 3D world generation and reconstruction, so it should not be collapsed into a generic video-model story.",
    ],
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
    slug: "hy-embodied-0-5",
    name: "HY-Embodied-0.5",
    organization: "Tencent Robotics X / HY Vision Team",
    category: "Embodied foundation model",
    date: "2026-04-09",
    updated: "2026-04-24",
    status: "Open-source model family with enhanced 0.5-X release",
    summary:
      "HY-Embodied-0.5 is Tencent's embodied foundation-model family for spatial reasoning, embodied planning, and robot-facing perception, later extended with the HY-Embodied-0.5-X enhancement.",
    focus:
      "Embodied reasoning, spatial understanding, task planning, multimodal perception, and VLA-adjacent robot-control workflows.",
    availability:
      "GitHub repository, arXiv paper, Hugging Face weights, and an April 2026 HY-Embodied-0.5-X model release.",
    strengths: [
      "Adds a primary-source Tencent anchor in the site's physical-AI lane without pretending every embodied model is itself an interactive world simulator.",
      "Public release surfaces are strong and reproducible: official GitHub code, arXiv paper, and Hugging Face checkpoints are all available.",
      "Useful for comparing world-model-adjacent robot cognition with Tencent's separate HY-World 2.0 generated-3D-world stack.",
    ],
    limits: [
      "HY-Embodied-0.5 is an embodied foundation and planning model family, not a consumer world-creation product like Marble or HappyOyster.",
      "Its public claims center on embodied benchmarks and robot-facing reasoning, so it should not be framed as proof of a generally available world simulator.",
    ],
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
    slug: "world-api",
    name: "World API",
    organization: "World Labs",
    category: "World model platform",
    date: "2026-01-21",
    status: "API announcement",
    summary:
      "World API moves World Labs' world model work toward a developer platform for generating and manipulating 3D worlds.",
    focus: "Developer access, workflows, and programmable 3D world generation.",
    availability: "API announced by World Labs; availability may depend on access tier and release status.",
    strengths: [
      "Important shift from demo/product to platform.",
      "Useful signal for tracking commercialization of world models.",
      "Connects model research to app, tool, and pipeline integration.",
    ],
    limits: [
      "Production limits, pricing, and usage controls should be checked against current API docs.",
      "It is focused on generated worlds, not all physical AI use cases.",
    ],
    sources: [
      {
        label: "World Labs: Announcing the World API",
        url: "https://www.worldlabs.ai/blog/announcing-the-world-api",
      },
    ],
  },
  {
    slug: "gwm-1",
    name: "GWM-1",
    organization: "Runway",
    category: "General world model",
    date: "2025-12-11",
    updated: "2026-05-04",
    status: "Research announcement with deployed character-agent surface",
    summary:
      "Runway describes GWM-1 as a general world model effort spanning generated worlds, avatars, and robotics-oriented directions.",
    focus:
      "A broader research path beyond video generation toward interactive worlds, real-time avatars, and robotics-oriented simulation.",
    availability:
      "Runway lists GWM-1 among subscriber-available models, while the Runway Characters surface is available through the Runway API plus web and mobile apps.",
    strengths: [
      "Connects creative video generation heritage with broader world model claims.",
      "The May 2026 Runway Characters rollout gives GWM-1 a clearer product-facing avatar surface instead of leaving it only at the research-announcement layer.",
      "Useful reference for comparing media-first and simulation-first approaches.",
      "Frames world models as a long-term platform direction.",
    ],
    limits: [
      "The model is not equivalent to a finished general simulator or a broadly open world-building platform.",
      "Runway's clearest public deployment signal is avatar-oriented, so it should not be overstated as proof of general explorable-world availability.",
    ],
    sources: [
      {
        label: "Runway Research: Introducing Runway GWM-1",
        url: "https://runwayml.com/research/introducing-runway-gwm-1",
      },
      {
        label: "Runway News: Building Runway Characters",
        url: "https://runwayml.com/news/building-runway-characters",
      },
      {
        label: "Runway Help: Available Models on Runway",
        url: "https://help.runwayml.com/hc/en-us/articles/48649877897107-Available-Models-on-Runway",
      },
    ],
  },
  {
    slug: "cosmos",
    name: "Cosmos",
    organization: "NVIDIA",
    category: "World foundation model platform",
    date: "2025-01-06",
    updated: "2026-05-23",
    status:
      "Platform launch with Cosmos 3 preview, physical-AI data-factory blueprint, and active public GitHub stack",
    summary:
      "NVIDIA Cosmos is a world foundation model platform for physical AI, with the March 2026 GTC update adding Cosmos 3 as a unifying layer for synthetic world generation, reasoning, and action simulation and the public repo surface expanding through May 2026.",
    focus:
      "Synthetic data, physical AI simulation, robotics, autonomous vehicle workflows, and world-model-assisted reasoning for embodied systems.",
    availability:
      "NVIDIA platform and developer ecosystem with public GitHub repos for Predict, Transfer, Reason, Curate, Evaluator, RL, and Cookbook workflows; Cosmos 3 was announced as coming soon, while availability still varies by component.",
    strengths: [
      "Strong anchor for the physical AI and robotics side of world models.",
      "Useful for separating interactive creative worlds from simulation infrastructure.",
      "Backed by a platform narrative rather than a single consumer demo.",
      "The March 2026 update makes the product framing clearer by explicitly tying world generation, reasoning, and action simulation together under one physical-AI stack.",
      "The May 2026 GitHub surface makes the stack easier to audit because curation, evaluation, and post-training tooling are visible alongside the core world foundation models.",
    ],
    limits: [
      "Cosmos should not be treated as the same category as consumer 3D world generation tools.",
      "Hardware, SDK, and enterprise workflow context matters.",
      "NVIDIA's March 16, 2026 wording mixes generally available components with preview and early-access elements, so availability should be stated precisely rather than flattened into a single public release claim.",
    ],
    sources: [
      {
        label: "NVIDIA Newsroom: NVIDIA launches Cosmos world foundation model platform",
        url: "https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-world-foundation-model-platform-to-accelerate-physical-ai-development",
      },
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
        label: "NVIDIA Cosmos GitHub organization",
        url: "https://github.com/nvidia-cosmos",
      },
      {
        label: "NVIDIA Glossary: World Models",
        url: "https://www.nvidia.com/en-us/glossary/world-models/",
      },
    ],
  },
];
export function getModel(slug: string) {
  return modelProfiles.find((model) => model.slug === slug);
}
