import type { Comparison, Source } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "hy-world-2-0-vs-marble",
    title: "HY-World 2.0 vs Marble",
    summary:
      "A comparison of Tencent Hunyuan's open 3D world-model stack and World Labs' product-led Marble surface.",
    updated: "2026-05-06",
    columns: ["Dimension", "HY-World 2.0", "Marble"],
    rows: [
      ["Organization", "Tencent Hunyuan", "World Labs"],
      ["Primary framing", "Open 3D world-model framework for generation and reconstruction", "3D world model product for generated editable worlds"],
      ["Main output", "Meshes, Gaussian splats, point clouds, and reconstructed or generated 3D worlds", "Persistent explorable 3D worlds with editing and export workflows"],
      ["Access signal", "GitHub repo, Hugging Face model card, and partial open-source release", "Public product surface with account access and later API path"],
      ["Best reader question", "How close is open-source world generation to engine-ready 3D assets?", "How does a polished product surface package world modeling for creators and developers?"],
      ["Editorial role", "Open reproducibility track for generated-3D worlds", "Product and platform track for generated-3D worlds"],
    ],
    takeaways: [
      "HY-World 2.0 is the clearer reference when the reader wants open code, model weights, and a technical stack for 3D world generation or reconstruction.",
      "Marble is the clearer reference when the reader wants a public product surface and easier onboarding into generated 3D worlds.",
      "Keeping both visible prevents the site from equating world-model progress only with polished product launches or only with research repos.",
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
      {
        label: "World Labs: Introducing Marble, our first world model",
        url: "https://www.worldlabs.ai/blog/marble-world-model",
      },
    ],
  },
  {
    slug: "lingbot-vla-vs-lingbot-va",
    title: "LingBot-VLA vs LingBot-VA",
    summary:
      "A comparison of Ant/Robbyant's VLA policy-model track and its causal video-action world-model track for robot control.",
    updated: "2026-05-05",
    columns: ["Dimension", "LingBot-VLA", "LingBot-VA"],
    rows: [
      ["Primary framing", "Vision-language-action foundation model", "Causal video-action world model for robot control"],
      ["Main output", "Actions conditioned on visual and language inputs", "Predicted visual dynamics plus action sequences"],
      ["Best reader question", "Can a robot follow multimodal instructions across tasks and platforms?", "Can a model jointly simulate what the robot will see and do next?"],
      ["Evidence surface", "GitHub repo, arXiv report, Hugging Face collection, post-training checkpoints", "GitHub repo, arXiv report, Hugging Face checkpoints, simulation and real-world demos"],
      ["Editorial role", "Embodied-AI policy and action track", "Robot-control world-model track"],
    ],
    takeaways: [
      "LingBot-VLA is the clearer anchor when the reader is asking about generalist robot policies and VLA deployment.",
      "LingBot-VA is the clearer anchor when the reader is asking how world modeling and action prediction are fused together for control.",
      "Keeping both visible prevents the site from treating every robotics release as either a generic VLA model or a generic world model.",
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
        label: "LingBot-VA GitHub repository",
        url: "https://github.com/Robbyant/lingbot-va",
      },
      {
        label: "arXiv: Causal World Modeling for Robot Control",
        url: "https://arxiv.org/abs/2601.21998",
      },
    ],
  },
  {
    slug: "lingbot-va-vs-lingbot-world",
    title: "LingBot-VA vs LingBot-World",
    summary:
      "A comparison of Ant/Robbyant's robot-control world modeling track and its explorable world simulator track.",
    updated: "2026-05-01",
    columns: ["Dimension", "LingBot-VA", "LingBot-World / Fast"],
    rows: [
      ["Primary framing", "Causal video-action world model for robot control", "Open-source interactive world simulator"],
      ["Main user", "Robotics and embodied-AI researchers", "World-model researchers, simulator builders, and interactive-demo users"],
      ["Core output", "Predicted visual dynamics plus action sequences", "Explorable scene rollouts with camera or action control"],
      ["Best reader question", "Can a world model help a robot decide what to do next?", "Can a world model generate and sustain an interactive environment?"],
      ["Editorial role", "Physical-AI and robot-control track", "Interactive-simulation and open world track"],
    ],
    takeaways: [
      "The two projects sit in the same Ant/Robbyant ecosystem but answer different questions: control for robots versus exploration for simulated worlds.",
      "LingBot-VA is the clearer anchor for embodied AI, while LingBot-World is the clearer anchor for explorable interactive world generation.",
      "Keeping both visible prevents readers from flattening every world model into either a video model or a 3D world creator.",
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
        label: "LingBot-World GitHub repository",
        url: "https://github.com/Robbyant/lingbot-world",
      },
      {
        label: "arXiv: Advancing Open-source World Models",
        url: "https://arxiv.org/abs/2601.20540",
      },
    ],
  },
  {
    slug: "happyoyster-vs-lingbot-world",
    title: "HappyOyster vs LingBot-World",
    summary:
      "A comparison of Alibaba's productized real-time world creation surface and Ant/Robbyant's open-source world simulator route.",
    updated: "2026-04-30",
    columns: ["Dimension", "HappyOyster", "LingBot-World / Fast"],
    rows: [
      ["Organization", "Alibaba Token Hub", "Ant Group / Robbyant"],
      ["Primary framing", "Early Access product for real-time immersive creation and directing", "Open-source world simulator for research, developers, games, and embodied AI"],
      ["Access signal", "Product access through HappyOyster Early Access", "GitHub, arXiv, Hugging Face, and ModelScope release path"],
      ["Interaction mode", "Wandering and Directing modes with multimodal instructions", "Camera/action control, fast inference scripts, and keyboard-style exploration demos"],
      ["Editorial role", "Commercial product track for generated worlds", "Open reproducibility track for world model capabilities"],
    ],
    takeaways: [
      "Both belong in the Alibaba ecosystem, but they answer different questions: HappyOyster is a user-facing creation product, while LingBot-World is an open model and simulator stack.",
      "Lingguang's reported mobile feature matters because it shows how open world-model research can be compressed into a consumer entry point.",
      "The site should track them separately so readers do not confuse product availability with open-source model capability.",
    ],
    sources: [
      {
        label: "Alibaba Cloud Community: HappyOyster launch",
        url: "https://www.alibabacloud.com/blog/alibaba-launches-happyoyster-a-world-model-product-for-real-time-immersive-creation-and-interaction_603048",
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
        label: "IT Home report: Lingguang mobile world model",
        url: "https://www.ithome.com/0/943/833.htm",
      },
    ],
  },
  {
    slug: "world-model-vs-video-model",
    title: "World Model vs Video Model",
    summary:
      "A practical comparison for readers who wonder whether world models are just another name for video generation.",
    updated: "2026-05-27",
    columns: ["Dimension", "Video model", "World model"],
    rows: [
      ["Primary output", "A fixed video sequence", "A stateful environment that can change with actions"],
      ["Interaction", "Usually prompt to clip", "Prompt or action to evolving world state"],
      ["Core challenge", "Visual realism and temporal coherence", "Spatial memory, causality, controllability, and persistence"],
      ["Typical use", "Creative media generation", "Simulation, spatial design, robotics, agent training, interactive media"],
      ["Evaluation question", "Does the clip look plausible?", "Does the world behave consistently when explored or acted on?"],
    ],
    takeaways: [
      "Video generation can be one ingredient, but it is not enough to define a world model.",
      "The most important distinction is interaction: the world should respond coherently to movement or action.",
      "Video-model product surfaces change quickly, so availability and product status should be checked separately from the broader conceptual comparison.",
      "This comparison should be the default explainer linked from every beginner page.",
    ],
    sources: [
      {
        label: "Google DeepMind: Genie 3, a new frontier for world models",
        url: "https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/",
      },
      {
        label: "NVIDIA Glossary: World Models",
        url: "https://www.nvidia.com/en-us/glossary/world-models/",
      },
      {
        label: "OpenAI: The Sora feed philosophy",
        url: "https://openai.com/index/sora-feed-philosophy/",
      },
      {
        label: "Google: Enhanced Veo 3.1 capabilities are now available in the Gemini API",
        url: "https://blog.google/innovation-and-ai/technology/developers-tools/veo-3-1-gemini-api/",
      },
    ],
  },
  {
    slug: "lingbot-map-vs-marble",
    title: "LingBot-Map vs Marble",
    summary:
      "A comparison of streaming 3D reconstruction and generated 3D world creation so readers do not collapse spatial capture into world generation.",
    updated: "2026-04-30",
    columns: ["Dimension", "LingBot-Map", "Marble"],
    rows: [
      ["Organization", "Ant Group / Robbyant", "World Labs"],
      ["Primary framing", "Streaming 3D foundation model for reconstruction", "3D world model product for generated editable worlds"],
      ["Main input", "Video streams and image sequences", "Text, images, video, and spatial layouts"],
      ["Main output", "Recovered scene geometry, camera poses, and 3D structure", "Persistent explorable 3D worlds"],
      ["Best reader question", "How does AI reconstruct a scene from streaming observations?", "How does AI create a new 3D world that can be explored and edited?"],
      ["Editorial role", "Spatial perception and mapping track", "Generated-3D-world product track"],
    ],
    takeaways: [
      "LingBot-Map is important because it grounds the spatial stack in geometry and reconstruction rather than only generation demos.",
      "Marble is the clearer product-facing example of AI-generated 3D worlds.",
      "Keeping both on the site helps readers separate captured space, reconstructed space, and generated space.",
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
        label: "World Labs: Introducing Marble, our first world model",
        url: "https://www.worldlabs.ai/blog/marble-world-model",
      },
    ],
  },
  {
    slug: "genie-3-vs-marble",
    title: "Genie 3 vs Marble",
    summary:
      "A comparison of DeepMind's interactive research direction and World Labs' 3D world creation product surface.",
    updated: "2026-04-28",
    columns: ["Dimension", "Genie 3", "Marble"],
    rows: [
      ["Organization", "Google DeepMind", "World Labs"],
      ["Primary framing", "Interactive world model research", "3D world model product"],
      ["Input orientation", "Prompted interactive environments", "Images, text, video, and spatial layouts"],
      ["Best reader question", "Can models generate playable worlds?", "Can models create editable 3D worlds?"],
      ["Availability signal", "Research preview", "Public product surface"],
    ],
    takeaways: [
      "Genie 3 is a stronger anchor for interactive world modeling as a research concept.",
      "Marble is stronger for explaining spatial world creation to creators and tool builders.",
      "Together they show why world models are bigger than video generation.",
    ],
    sources: [
      {
        label: "Google DeepMind: Genie 3, a new frontier for world models",
        url: "https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/",
      },
      {
        label: "World Labs: Introducing Marble, our first world model",
        url: "https://www.worldlabs.ai/blog/marble-world-model",
      },
    ],
  },
  {
    slug: "marble-vs-gwm-1",
    title: "Marble vs GWM-1",
    summary:
      "A comparison of World Labs' product-led spatial world approach and Runway's general world model research framing.",
    updated: "2026-05-25",
    columns: ["Dimension", "Marble", "GWM-1"],
    rows: [
      ["Organization", "World Labs", "Runway"],
      ["Primary framing", "3D world creation", "General world model research"],
      ["Audience signal", "Creators, spatial designers, developers", "Creators, researchers, robotics-adjacent observers"],
      ["Output emphasis", "Persistent editable 3D worlds", "Worlds, avatars, and broader future model direction"],
      ["Commercial signal", "Product and API path", "Research base plus deployed Characters surface"],
    ],
    takeaways: [
      "Marble is easier to understand as a current product category.",
      "GWM-1 matters because it shows a media-generation company repositioning around world modeling, with Characters as a concrete avatar-facing deployment path.",
      "The two should be compared as strategic directions, not as identical product offers.",
    ],
    sources: [
      {
        label: "World Labs: Introducing Marble, our first world model",
        url: "https://www.worldlabs.ai/blog/marble-world-model",
      },
      {
        label: "Runway Research: Introducing Runway GWM-1",
        url: "https://runwayml.com/research/introducing-runway-gwm-1",
      },
      {
        label: "Runway News: Building Runway Characters",
        url: "https://runwayml.com/news/building-runway-characters",
      },
    ],
  },
  {
    slug: "cosmos-vs-general-world-models",
    title: "Cosmos vs General World Models",
    summary:
      "A comparison of NVIDIA's physical AI platform framing and the broader creative or interactive world model category.",
    updated: "2026-05-24",
    columns: ["Dimension", "NVIDIA Cosmos", "General world models"],
    rows: [
      ["Primary domain", "Physical AI, robotics, autonomous vehicles", "Interactive worlds, 3D spaces, simulation, media"],
      ["Main value", "Synthetic data, world generation, reasoning, and action-simulation workflows", "Stateful environments that can be generated and explored"],
      ["User profile", "Developers and enterprises building physical AI systems", "Researchers, creators, developers, product teams"],
      ["Availability pattern", "Platform mix of open components, early access, and announced-soon layers", "Varies from research previews to public products and APIs"],
      ["Evaluation", "Physical plausibility, data utility, integration, and policy-transfer value", "Coherence, controllability, persistence, interaction"],
      ["Site role", "Robotics and simulation anchor", "Category umbrella"],
    ],
    takeaways: [
      "Cosmos should sit inside the world model map, but not as the same product class as Marble or Genie 3.",
      "Physical AI gives world models a practical industrial route beyond creative demos.",
      "The March 2026 updates make it clearer that Cosmos is becoming a layered physical-AI stack rather than a single static model announcement.",
      "This comparison is useful for separating platform infrastructure from consumer-facing world creation.",
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
        label: "NVIDIA Glossary: World Models",
        url: "https://www.nvidia.com/en-us/glossary/world-models/",
      },
    ],
  },
];

export function getComparison(slug: string) {
  return comparisons.find((comparison) => comparison.slug === slug);
}
