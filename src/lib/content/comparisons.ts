import type { Comparison, Source } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "hy-world-2-0-vs-marble",
    title: "HY-World 2.0 vs Marble",
    summary:
      "A comparison of Tencent Hunyuan's multimodal 3D world-model stack and World Labs' product-led persistent 3D world workflow.",
    updated: "2026-05-29",
    primaryKeyword: "HY-World 2.0 vs Marble",
    secondaryKeywords: [
      "open 3D world model vs persistent 3D worlds",
      "Tencent Hunyuan HY-World 2.0 comparison",
      "World Labs Marble comparison",
    ],
    officialKeywords: [
      "HY-World 2.0",
      "multi-modal world model",
      "3D world generation",
      "Marble",
      "persistent 3D worlds",
      "Gaussian splat export",
      "mesh export",
    ],
    sourceUrls: [
      "https://github.com/Tencent-Hunyuan/HY-World-2.0",
      "https://huggingface.co/tencent/HY-World-2.0",
      "https://www.worldlabs.ai/blog/marble-world-model",
      "https://docs.worldlabs.ai/",
    ],
    categoryBoundary:
      "Both belong in generated 3D-world coverage, but HY-World 2.0 is a research-first open stack while Marble is a product workflow.",
    relatedModelSlugs: ["hy-world-2-0", "marble"],
    columns: ["Dimension", "HY-World 2.0", "Marble"],
    rows: [
      ["Organization", "Tencent Hunyuan", "World Labs"],
      ["Primary framing", "Multimodal 3D world model for reconstruction, generation, and simulation", "Product workflow for high-fidelity persistent 3D worlds"],
      ["Main output", "Meshes, Gaussian splats, point clouds, and reconstructed or generated 3D worlds", "Persistent explorable 3D worlds with editing and export workflows"],
      ["Access signal", "GitHub repo, Hugging Face model card, arXiv paper, and May 2026 expansion of generation code and weights", "Public product surface, World Labs account access, and Marble documentation"],
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
      {
        label: "World Labs Marble documentation",
        url: "https://docs.worldlabs.ai/",
      },
    ],
    faq: [
      {
        question: "Is HY-World 2.0 the open-source version of Marble?",
        answer:
          "No. HY-World 2.0 and Marble both sit in generated 3D-world coverage, but they come from different organizations and expose different surfaces: Tencent's research-first open stack versus World Labs' product workflow.",
      },
      {
        question: "Which one is better for engine-ready 3D assets?",
        answer:
          "HY-World 2.0 is stronger for inspecting open technical materials, while Marble is clearer as a creator-facing workflow with export-oriented product documentation.",
      },
    ],
  },
  {
    slug: "happyoyster-vs-genie-3",
    title: "HappyOyster vs Genie 3",
    summary:
      "A comparison of Alibaba's real-time world creation product and Google DeepMind's experimental Project Genie world-model preview.",
    updated: "2026-05-29",
    primaryKeyword: "HappyOyster vs Genie 3",
    secondaryKeywords: [
      "HappyOyster real-time world model",
      "Genie 3 interactive world model",
      "Project Genie vs HappyOyster",
    ],
    officialKeywords: [
      "HappyOyster",
      "real-time world model",
      "interactive creation",
      "Genie 3",
      "Project Genie",
      "promptable world events",
    ],
    sourceUrls: [
      "https://www.happyoyster.cn/",
      "https://www.alibabacloud.com/blog/alibaba-launches-happyoyster-a-world-model-product-for-real-time-immersive-creation-and-interaction_603048",
      "https://deepmind.google/models/genie/",
      "https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/",
    ],
    categoryBoundary:
      "HappyOyster is product-facing early access; Genie 3 is an experimental DeepMind world-model preview rather than a general API.",
    relatedModelSlugs: ["happyoyster", "genie-3"],
    columns: ["Dimension", "HappyOyster", "Genie 3"],
    rows: [
      ["Organization", "Alibaba Token Hub", "Google DeepMind"],
      ["Primary framing", "Open-ended world model for real-time creation, exploration, and directing", "Frontier world model for generating and exploring interactive environments"],
      ["Interaction signal", "Wandering and Directing modes with text, voice, and image control", "Promptable worlds, interactive navigation, and world events"],
      ["Access signal", "Early Access product surface and docs", "Experimental Project Genie prototype rollout"],
      ["Best reader question", "How does a product package interactive world creation?", "How does a frontier research preview define interactive world modeling?"],
      ["Editorial role", "Commercial interactive-creation track", "Research and prototype track for promptable worlds"],
    ],
    takeaways: [
      "HappyOyster is the better anchor for productized real-time directing and creative workflows.",
      "Genie 3 is the better anchor for explaining the research framing of interactive world models.",
      "The comparison should keep access language precise because neither source supports treating both as broadly available developer APIs.",
    ],
    sources: [
      {
        label: "HappyOyster website",
        url: "https://www.happyoyster.cn/",
      },
      {
        label: "Alibaba Cloud Community: HappyOyster launch",
        url: "https://www.alibabacloud.com/blog/alibaba-launches-happyoyster-a-world-model-product-for-real-time-immersive-creation-and-interaction_603048",
      },
      {
        label: "Google DeepMind: Genie 3 model page",
        url: "https://deepmind.google/models/genie/",
      },
      {
        label: "Google DeepMind: Genie 3, a new frontier for world models",
        url: "https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/",
      },
    ],
    faq: [
      {
        question: "Is HappyOyster the same kind of system as Genie 3?",
        answer:
          "No. They both belong in interactive world-model coverage, but HappyOyster is a product-facing early-access creation surface while Genie 3 is a DeepMind research preview and Project Genie prototype.",
      },
      {
        question: "Which page should a beginner read first?",
        answer:
          "Use this page when comparing product packaging versus research framing, then open the individual HappyOyster and Genie 3 dossiers for source-specific limits.",
      },
    ],
  },
  {
    slug: "genie-3-vs-oasis",
    title: "Genie 3 vs Oasis",
    summary:
      "A comparison of DeepMind's promptable interactive world-model preview and Oasis's realtime action-conditioned open-world AI demo.",
    updated: "2026-05-29",
    primaryKeyword: "Genie 3 vs Oasis",
    secondaryKeywords: [
      "Genie 3 interactive world model",
      "Oasis Universe in a Transformer",
      "keyboard input world model",
      "Project Genie vs Oasis",
    ],
    officialKeywords: [
      "Genie 3",
      "Project Genie",
      "real-time interactive world model",
      "Oasis",
      "Universe in a Transformer",
      "keyboard input world model",
      "interactive video experience",
    ],
    sourceUrls: [
      "https://deepmind.google/models/genie/",
      "https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/",
      "https://oasis-model.github.io/",
    ],
    categoryBoundary:
      "Genie 3 and Oasis are interactive-world references, but Oasis is a realtime open-world demo while Genie 3 is a broader frontier world-model preview.",
    relatedModelSlugs: ["genie-3", "oasis"],
    columns: ["Dimension", "Genie 3", "Oasis"],
    rows: [
      ["Organization", "Google DeepMind", "Decart AI + Etched"],
      ["Primary framing", "Frontier world model for promptable interactive environments", "Experiential realtime open-world AI model"],
      ["Input signal", "Prompts, navigation, world events, and Street View-grounded scenes", "Keyboard input that conditions the generated next frame"],
      ["Output emphasis", "Interactive worlds that can be explored from a prompt", "Interactive video experience with AI-generated rules, physics, and graphics"],
      ["Access signal", "Experimental prototype rollout", "Public project page with demo, code, and model-weight links"],
      ["Editorial role", "General interactive-world research anchor", "Action-conditioned realtime demo anchor"],
    ],
    takeaways: [
      "Genie 3 is stronger for explaining the world-model category at the research frontier.",
      "Oasis is stronger for showing the practical shift from generated video to action-conditioned realtime interaction.",
      "Neither page should be simplified into a generic AI video story; interaction is the search-intent reason to compare them.",
    ],
    sources: [
      {
        label: "Google DeepMind: Genie 3 model page",
        url: "https://deepmind.google/models/genie/",
      },
      {
        label: "Google DeepMind: Genie 3, a new frontier for world models",
        url: "https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/",
      },
      {
        label: "Oasis official project page",
        url: "https://oasis-model.github.io/",
      },
    ],
    faq: [
      {
        question: "Is Oasis a video model or a world model?",
        answer:
          "Oasis is best covered here as a realtime open-world AI model because user keyboard input conditions the generated experience. It should not be reduced to a fixed video generator.",
      },
      {
        question: "Why compare Genie 3 with Oasis?",
        answer:
          "The comparison helps readers separate promptable interactive worlds from keyboard-conditioned realtime interaction, which are related but not identical search intents.",
      },
    ],
  },
  {
    slug: "skybox-ai-vs-marble",
    title: "Skybox AI vs Marble",
    summary:
      "A comparison of Blockade Labs' 360-degree environment generation workflow and World Labs' persistent 3D world creation product.",
    updated: "2026-05-29",
    primaryKeyword: "Skybox AI vs Marble",
    secondaryKeywords: [
      "Skybox AI 360 environments",
      "Marble persistent 3D worlds",
      "360 skybox vs 3D world model",
      "HDRI exports vs mesh export",
    ],
    officialKeywords: [
      "Skybox AI",
      "360 environments",
      "360 skyboxes",
      "HDRI exports",
      "Marble",
      "persistent 3D worlds",
      "mesh export",
      "Gaussian splat export",
    ],
    sourceUrls: [
      "https://www.blockadelabs.com/",
      "https://skybox.blockadelabs.com/",
      "https://www.worldlabs.ai/blog/marble-world-model",
      "https://docs.worldlabs.ai/",
    ],
    categoryBoundary:
      "Skybox AI is a 360 environment generator, while Marble is a persistent 3D-world creation workflow; they should not be presented as equivalent world simulators.",
    relatedModelSlugs: ["skybox-ai", "marble"],
    columns: ["Dimension", "Skybox AI", "Marble"],
    rows: [
      ["Organization", "Blockade Labs", "World Labs"],
      ["Primary framing", "360-degree environment and skybox generation", "Persistent 3D world creation and editing"],
      ["Main output", "Equirectangular panoramas, skyboxes, HDRI exports, and experimental environment meshes", "Explorable 3D worlds with export workflows such as Gaussian splats and meshes"],
      ["Best use case", "Backplates, VR or AR environments, lighting, and game-engine skyboxes", "Spatial worlds that can be edited, explored, and reused in creative workflows"],
      ["Editorial boundary", "Environment layer rather than a complete realtime simulator", "Generated 3D-world product rather than a 360 panorama tool"],
      ["Reader question", "Do I need a surrounding environment shell?", "Do I need a persistent 3D world I can edit and export?"],
    ],
    takeaways: [
      "Skybox AI should own the 360-environment and HDRI search lane.",
      "Marble should own the persistent 3D-world creation lane.",
      "Putting them in one table helps readers avoid treating all environment generation as the same kind of world model.",
    ],
    sources: [
      {
        label: "Blockade Labs Skybox AI product page",
        url: "https://www.blockadelabs.com/",
      },
      {
        label: "Skybox AI app",
        url: "https://skybox.blockadelabs.com/",
      },
      {
        label: "World Labs: Introducing Marble, our first world model",
        url: "https://www.worldlabs.ai/blog/marble-world-model",
      },
      {
        label: "World Labs Marble documentation",
        url: "https://docs.worldlabs.ai/",
      },
    ],
    faq: [
      {
        question: "Is Skybox AI a full world model?",
        answer:
          "No. Skybox AI is best described as a 360-degree environment and skybox generator. It belongs near world-model coverage, but it should not be framed as a full realtime simulator.",
      },
      {
        question: "When is Marble the better comparison point?",
        answer:
          "Marble is the better reference when the reader is asking about persistent 3D worlds, editing, exploration, and export workflows rather than panoramic environment generation.",
      },
    ],
  },
  {
    slug: "project-sid-vs-world-models",
    title: "Project Sid vs World Models",
    summary:
      "A comparison of Project Sid's many-agent AI civilization simulation with generative world models such as Genie, Oasis, Marble, and HY-World 2.0.",
    updated: "2026-05-29",
    primaryKeyword: "Project Sid vs world models",
    secondaryKeywords: [
      "Project Sid many-agent simulation",
      "AI civilization vs world model",
      "agent societies in generated worlds",
      "PIANO architecture Minecraft simulation",
    ],
    officialKeywords: [
      "Project Sid",
      "many-agent simulations",
      "AI civilization",
      "PIANO architecture",
      "agent societies",
      "Minecraft simulation",
      "world models",
      "interactive worlds",
    ],
    sourceUrls: [
      "https://fundamentalresearchlabs.com/blog/project-sid",
      "https://github.com/altera-al/project-sid",
      "https://deepmind.google/models/genie/",
      "https://oasis-model.github.io/",
      "https://www.worldlabs.ai/blog/marble-world-model",
    ],
    categoryBoundary:
      "Project Sid is not a generative visual world model; it is a many-agent society simulation that belongs in the inhabited-world layer of the category map.",
    relatedModelSlugs: ["project-sid", "genie-3", "oasis", "marble", "hy-world-2-0"],
    columns: ["Dimension", "Project Sid", "Generative world models"],
    rows: [
      ["Primary question", "What happens when many AI agents specialize, form rules, and transmit culture?", "Can a model generate, reconstruct, or sustain an interactive environment?"],
      ["Environment source", "Minecraft-based simulation setting", "Prompted, reconstructed, or model-generated worlds"],
      ["Core output", "Agent society behavior, law, culture, religion, roles, and social dynamics", "Interactive worlds, 360 environments, 3D worlds, or persistent spatial assets"],
      ["Best comparison target", "Civilization and agent-society research", "Genie, Oasis, Marble, HY-World 2.0, HappyOyster, and adjacent systems"],
      ["Editorial role", "Inhabited-world and social-simulation layer", "World generation, interaction, reconstruction, and spatial workflow layer"],
    ],
    takeaways: [
      "Project Sid expands the site beyond world creation into what happens inside a world after agents inhabit it.",
      "It should be linked from the seven-model gallery because it explains the civilization layer, but it should not be labeled as a generative visual world model.",
      "This page gives crawlers and readers a precise boundary between world models and many-agent simulations.",
    ],
    sources: [
      {
        label: "Fundamental Research Labs: Project Sid",
        url: "https://fundamentalresearchlabs.com/blog/project-sid",
      },
      {
        label: "Project Sid GitHub repository",
        url: "https://github.com/altera-al/project-sid",
      },
      {
        label: "Google DeepMind: Genie 3 model page",
        url: "https://deepmind.google/models/genie/",
      },
      {
        label: "Oasis official project page",
        url: "https://oasis-model.github.io/",
      },
      {
        label: "World Labs: Introducing Marble, our first world model",
        url: "https://www.worldlabs.ai/blog/marble-world-model",
      },
    ],
    faq: [
      {
        question: "Is Project Sid a world model?",
        answer:
          "Not in the same sense as Genie, Oasis, Marble, or HY-World 2.0. Project Sid is a many-agent civilization simulation inside a game world, so this site treats it as the inhabited-world layer.",
      },
      {
        question: "Why include Project Sid on World Models Watch?",
        answer:
          "World-model systems become more important when worlds can hold agents, memory, rules, and social behavior. Project Sid is relevant because it studies that society layer directly.",
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
    updated: "2026-05-25",
    columns: ["Dimension", "LingBot-Map", "Marble"],
    rows: [
      ["Organization", "Ant Group / Robbyant", "World Labs"],
      ["Primary framing", "Streaming 3D foundation model for reconstruction", "3D world model product for generated editable worlds"],
      ["Main input", "Video streams and image sequences", "Text, images, video, and spatial layouts"],
      ["Main output", "Recovered scene geometry, camera poses, and 3D structure", "Persistent explorable 3D worlds"],
      ["Verification surface", "GitHub repo, paper, checkpoints, and May 2026 benchmark scripts", "Product post, public app surface, and World API docs"],
      ["Best reader question", "How does AI reconstruct a scene from streaming observations?", "How does AI create a new 3D world that can be explored and edited?"],
      ["Editorial role", "Spatial perception and mapping track", "Generated-3D-world product track"],
    ],
    takeaways: [
      "LingBot-Map is important because it grounds the spatial stack in geometry and reconstruction rather than only generation demos, and its new benchmark scripts make that claim more auditable.",
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
