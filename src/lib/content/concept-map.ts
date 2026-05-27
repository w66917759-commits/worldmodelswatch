import type { ConceptMapCluster, ConceptBridge } from "./types";

export const conceptMapClusters: ConceptMapCluster[] = [
  {
    slug: "built-worlds",
    eyebrow: "Past interface",
    title: "Human-built virtual worlds",
    thesis:
      "Before world models, people already understood avatars, sandbox worlds, social rooms, and user-built spaces.",
    nodes: [
      {
        title: "Blocky avatars",
        label: "Minecraft-style identity",
        summary:
          "Simple characters make virtual presence easy to understand. The form is basic, but the mental model is powerful: a person can enter a world.",
        examples: ["Minecraft", "Roblox avatar", "Voxel worlds"],
        bridge:
          "World models inherit the question of presence: who is inside the generated world, and can that identity persist?",
      },
      {
        title: "Sandbox worlds",
        label: "Buildable spaces",
        summary:
          "Minecraft and Roblox trained users to expect worlds that can be modified, extended, and shared.",
        examples: ["Minecraft blocks", "Roblox experiences", "UGC worlds"],
        bridge:
          "AI world generation becomes more valuable when generated spaces are editable instead of disposable.",
      },
      {
        title: "Metaverse",
        label: "Persistent social space",
        summary:
          "The metaverse idea framed virtual worlds as social, persistent, and identity-driven, even when the tooling was still manual.",
        examples: ["Meta Horizon Worlds", "VR rooms", "Social worlds"],
        bridge:
          "World models can supply the missing automation layer: worlds generated on demand, not only built by hand.",
      },
    ],
  },
  {
    slug: "generated-media",
    eyebrow: "Current surface",
    title: "AI-generated video and humans",
    thesis:
      "AI video is the visible surface of the shift. The deeper issue is control, consistency, and memory across time.",
    nodes: [
      {
        title: "Expressive humans",
        label: "Audio-driven identity",
        summary:
          "EMO makes the control problem visible: the same identity needs to move, emote, sing, and stay coherent over time.",
        examples: ["EMO", "Digital humans", "Talking avatars"],
        bridge:
          "If a generated person cannot persist, a generated world cannot feel stable.",
      },
      {
        title: "Video models",
        label: "Prompt-to-motion",
        summary:
          "Veo, Wan, Kling, Ray, and earlier systems like Sora turn text, images, audio, and references into moving scenes.",
        examples: ["Veo 3.1", "Wan2.7-Video", "Kling", "Ray", "Sora"],
        bridge:
          "The next comparison is whether those scenes can be controlled, extended, and interacted with.",
      },
      {
        title: "Digital characters",
        label: "From avatar to actor",
        summary:
          "MetaHuman-style characters, Roblox avatars, and EMO-like portraits point to a future where generated characters need continuity.",
        examples: ["MetaHuman", "Roblox avatar", "EMO portrait", "Runway Characters"],
        bridge:
          "Characters are the social layer of generated worlds.",
      },
    ],
  },
  {
    slug: "spatial-layer",
    eyebrow: "Spatial interface",
    title: "Spatial computing and immersive access",
    thesis:
      "Vision Pro and spatial computing are not the same thing as world models. They are how generated worlds may be seen and operated.",
    nodes: [
      {
        title: "Spatial computing",
        label: "Computer as environment",
        summary:
          "Apple Vision Pro reframes computing as something placed into space instead of locked inside a flat screen.",
        examples: ["Apple Vision Pro", "Spatial video", "3D interfaces"],
        bridge:
          "World models need interfaces where generated space can be inspected, edited, and inhabited.",
      },
      {
        title: "3D reconstruction",
        label: "Scene as data",
        summary:
          "NeRF, Gaussian splatting, and scan-to-3D workflows make real or imagined spaces computable.",
        examples: ["NeRF", "3D Gaussian Splatting", "LingBot-Map", "HY-World 2.0"],
        bridge:
          "Generated worlds need spatial structure, not only pixels.",
      },
      {
        title: "Immersive worlds",
        label: "From screen to place",
        summary:
          "VR, AR, and mixed reality make the user feel located inside a generated or captured environment.",
        examples: ["Meta Quest", "Vision Pro", "Immersive video"],
        bridge:
          "World models become more legible when users can enter and manipulate the output.",
      },
    ],
  },
  {
    slug: "simulated-worlds",
    eyebrow: "Industrial layer",
    title: "Simulation, digital twins, and physical AI",
    thesis:
      "The industrial version of world models is not entertainment. It is simulation for robots, vehicles, factories, and cities.",
    nodes: [
      {
        title: "Digital twins",
        label: "Real world mirror",
        summary:
          "Digital twins model real places and systems so teams can test changes before touching the physical world.",
        examples: ["NVIDIA Omniverse", "Factory twins", "City simulation"],
        bridge:
          "World models can make simulations cheaper to create and easier to vary.",
      },
      {
        title: "Physical AI",
        label: "AI for embodied systems",
        summary:
          "Robots and autonomous vehicles need models of how environments respond to motion, contact, and decisions.",
        examples: ["Cosmos", "HY-Embodied-0.5", "LingBot-VA", "LingBot-VLA"],
        bridge:
          "This is where world models become training infrastructure, not just media.",
      },
      {
        title: "Geospatial models",
        label: "World-scale spatial memory",
        summary:
          "Large geospatial models connect AI to real-world places, maps, and location-aware behavior.",
        examples: ["Niantic spatial AI", "Maps", "AR location layers"],
        bridge:
          "They turn the real world into a modelable environment.",
      },
    ],
  },
  {
    slug: "world-model-core",
    eyebrow: "Core capability",
    title: "World models",
    thesis:
      "The core shift is from generating isolated outputs to modeling how a world changes under time, viewpoint, and action.",
    nodes: [
      {
        title: "Interactive generation",
        label: "World responds to action",
        summary:
          "A world model should preserve a coherent state when the user moves, edits, or acts.",
        examples: ["Genie 3", "Marble", "HappyOyster", "HY-World 2.0"],
        bridge:
          "Interaction is the difference between watching a clip and entering a system.",
      },
      {
        title: "World foundation models",
        label: "Base models for simulation",
        summary:
          "Foundation models can become reusable infrastructure for generating, predicting, and testing world states.",
        examples: ["Cosmos", "GWM-1", "World API", "HY-World 2.0", "LingBot-VA", "LingBot-VLA"],
        bridge:
          "This is where creative, spatial, and physical world generation begin to share a vocabulary.",
      },
      {
        title: "Agent environments",
        label: "World as training ground",
        summary:
          "Agents need environments where they can observe, act, fail, and learn.",
        examples: ["Game worlds", "Robot simulators", "Interactive scenes"],
        bridge:
          "World models can become the substrate for training and evaluating future AI agents.",
      },
    ],
  },
];

export const conceptBridges: ConceptBridge[] = [
  {
    from: "Blocky avatars / Minecraft",
    knownFor: "Simple identity inside a buildable world",
    connectsTo: "Avatars, sandbox worlds, UGC",
    worldModelMeaning: "Generated worlds need persistent users, objects, and editable structure.",
  },
  {
    from: "Metaverse",
    knownFor: "Persistent social virtual spaces",
    connectsTo: "VR, Horizon Worlds, social identity",
    worldModelMeaning: "World models automate world creation instead of relying only on manual building.",
  },
  {
    from: "Vision Pro",
    knownFor: "Spatial computing and immersive interface",
    connectsTo: "AR, spatial video, 3D interaction",
    worldModelMeaning: "Generated worlds need a spatial interface for viewing, editing, and operation.",
  },
  {
    from: "AI video",
    knownFor: "Generated motion, characters, and scenes",
    connectsTo: "EMO, Veo 3.1, Wan2.7-Video, Kling, Ray",
    worldModelMeaning: "The video layer must become controllable, continuous, and stateful.",
  },
  {
    from: "Digital twins",
    knownFor: "Simulation of real systems",
    connectsTo: "Omniverse, robotics, LingBot-VA, LingBot-VLA, city and factory models",
    worldModelMeaning: "World models become useful when they predict and test real-world behavior.",
  },
  {
    from: "World model",
    knownFor: "Predicting and generating world state",
    connectsTo: "Genie 3, Marble, Cosmos, GWM-1",
    worldModelMeaning: "The final category is not a place or device; it is the model that makes worlds behave.",
  },
];
