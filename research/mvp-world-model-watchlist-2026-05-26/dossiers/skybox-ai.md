# Skybox AI

Generated: 2026-05-26

## Snapshot

- Developer: Blockade Labs
- Type: 360-degree environment and skybox generator
- Access found: public app, product site, API documentation, support docs, changelog, roadmap
- App entry: https://skybox.blockadelabs.com/
- Product page: https://www.blockadelabs.com/

## Source-Backed Facts

- Blockade Labs positions Skybox AI as a 360-degree equirectangular panorama generator for production-ready environments.
- The API docs describe `POST https://backend.blockadelabs.com/api/v1/skybox` for prompt-based skybox generation and document Model 3 and Model 4 options.
- The API docs describe Model 4 variants, expected latency, credit costs, pending generation limits, style IDs, prompt enhancer, negative prompts, seeds, and webhook status tracking.
- The support article says Skybox AI can export 360 skyboxes into 3D GLB mesh files, but the feature is experimental and not suitable for collision geometry.
- The roadmap lists 3D over API, MCP server preview, faster generation options, day-and-night cycle, and style-from-prompt signals.

## Demo And Media

- Skybox AI app: https://skybox.blockadelabs.com/
- Product page: https://www.blockadelabs.com/
- Official Unity integration demo: https://www.youtube.com/watch?v=yvxTHbWk8sw
- Official YouTube channel: https://www.youtube.com/@blockadelabs

## Data / Research / Technical Artifacts

- Skyboxes API docs: https://api-documentation.blockadelabs.com/api/skybox.html
- Quick Start: https://support.blockadelabs.com/hc/en-us/articles/30933716119826-Skybox-AI-Quick-Start-Building-Your-First-Integration
- GLB export docs: https://support.blockadelabs.com/hc/en-us/articles/31649281677074-Export-3D-Models-from-Skybox-AI
- API changelog: https://api-documentation.blockadelabs.com/api/changelog.html
- Roadmap: https://www.blockadelabs.com/roadmap

## MVP Angle

Use Skybox AI for the 360 environment and VR/game-backplate lane. It is adjacent to world models, but should be framed as panoramic environment generation and export tooling, not as a full interactive simulator.

## Caveats

- Do not compare Skybox AI as if it were the same class as Genie 3, Oasis, or HappyOyster.
- Mesh export is useful for visual parallax and environment workflows, but official docs warn against treating it as collision geometry or object extraction.
- Public claims about user counts or generated asset counts should be rechecked before publication because product pages and old blog posts may diverge.

## Follow-Up Search Queries

- `Skybox AI Model 4 Blockade Labs`
- `Blockade Labs Skybox AI API GLB export`
- `Skybox AI Unity Verified Solution`
