# Demo Video Links For Web Pages

Generated: 2026-05-26

These links are for research and prototype page usage. Direct MP4/WebM links are usually usable in an HTML `<video>` tag. YouTube links should use an `<iframe>`. Public demo app links should be rendered as outbound CTA links, not embedded videos.

## World Labs / Marble

Source page: https://www.worldlabs.ai/blog/marble-world-model

Recommended page videos:

- Hero: https://wlt-ai-cdn.art/videos/2025-11-12-clean-720p-24crf/hero.mp4
- Text to world, hobbit kitchen: https://wlt-ai-cdn.art/videos/2025-11-12-clean-720p-24crf/t2w-hobbit-kitchen.mp4
- Image to world, living room: https://wlt-ai-cdn.art/videos/2025-11-12-clean-720p-24crf/i2w-living-room.mp4
- Multi-image to world, overgrown courtyard: https://wlt-ai-cdn.art/videos/2025-11-12-clean-720p-24crf/mim2w-overgrown-courtyard.mp4
- Video to world, ocean result: https://wlt-ai-cdn.art/videos/2025-11-12-clean-720p-24crf/video-ocean-post.mp4
- World editing, cozy tavern result: https://wlt-ai-cdn.art/videos/2025-11-12-clean-720p-24crf/edit-cozy-tavern-post.mp4
- Mesh / export example: https://wlt-ai-cdn.art/videos/2025-11-12-clean-720p-24crf/mesh-v2-splats.mp4
- Marble Labs highlight: https://wlt-ai-cdn.art/videos/marble_labs/marble-highlight.mp4

Related RTFM research demo source: https://www.worldlabs.ai/blog/rtfm

- RTFM hero: https://wlt-ai-cdn.art/videos/2025-10-15/hero_video_1024x576.mp4
- Matchmove example: https://wlt-ai-cdn.art/videos/2025-10-15-v3/matchmove-icegleam.mp4
- Reconstruction example: https://wlt-ai-cdn.art/videos/2025-10-15-v3/recon-piano.mp4
- Context juggling example: https://wlt-ai-cdn.art/videos/2025-10-15-v3/juggle-lobby.mp4

Demo app link:

- https://marble.worldlabs.ai/

## Oasis

Source page: https://oasis-model.github.io/

Recommended page videos:

- Official project demo MP4: https://oasis-model.github.io/wide1.mp4
- Open model sample 0 GIF: https://raw.githubusercontent.com/etched-ai/open-oasis/master/media/sample_0.gif
- Open model sample 1 GIF: https://raw.githubusercontent.com/etched-ai/open-oasis/master/media/sample_1.gif

Demo app link:

- https://oasis.us.decart.ai/

## Genie / Genie 3

Source page: https://deepmind.google/models/genie/

Recommended page videos:

- Genie 3 cover: https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/genie-3__cover-1.webm
- Project Genie promo: https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/genie-3__project-genie__promo.webm
- Tide Rider: https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/genie-3__tide_rider.webm
- Summit Ascent: https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/genie-3__summit_ascent.webm
- Library Cat: https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/genie-3__library_cat.webm
- Backyard Racetrack: https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/genie-3__backyard_racetrack.webm
- Environmental consistency 1: https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/genie_environmental_consistency_1_iNVUBuv.webm
- Environmental consistency 2: https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/genie_environmental_consistency_2_zS0EAgg.webm

Demo app link:

- https://labs.google/projectgenie

## HappyOyster

Source page: https://www.alibabacloud.com/blog/alibaba-launches-happyoyster-a-world-model-product-for-real-time-immersive-creation-and-interaction_603048

Recommended page video:

- Official YouTube video: https://www.youtube.com/watch?v=Ku3ikWrKxx4
- YouTube embed URL: https://www.youtube.com/embed/Ku3ikWrKxx4

Demo / early-access link:

- https://www.happyoyster.cn/

## Skybox AI

Source page: https://www.blockadelabs.com/post/developers-can-create-3d-environments-worlds-in-seconds-in-unity-through-blockade-labs

Recommended page video:

- Official Unity integration YouTube video: https://www.youtube.com/watch?v=yvxTHbWk8sw
- YouTube embed URL: https://www.youtube.com/embed/yvxTHbWk8sw

Demo app link:

- https://skybox.blockadelabs.com/

## Project Sid

Source page: https://github.com/altera-al/project-sid

Recommended research video:

- GitHub-hosted project video: https://github.com/user-attachments/assets/a288265d-03ac-4d7d-b803-b74066267f26

Use note: treat this as a research link first. It redirects through GitHub asset infrastructure, so it may be less reliable as a production `<video src>` than CDN-hosted MP4/WebM links.

## Tencent Hunyuan

Separate Tencent demo inventory:

- Tencent demo links: `tencent-demo-links.md`
- Tencent structured links: `tencent-demo-links.json`
- Main online demo: https://3d.hunyuan.tencent.com/sceneTo3D
- WorldPlay tab: https://3d.hunyuan.tencent.com/sceneTo3D?tab=worldplay
- HY-World 2.0 GitHub video: https://github.com/user-attachments/assets/b56f4750-25c9-48fb-83ff-d58526711463
- HY-WorldPlay web demo MP4: https://raw.githubusercontent.com/Tencent-Hunyuan/HY-WorldPlay/main/assets/web-demo.mp4
- HunyuanWorld Mirror Hugging Face demo: https://huggingface.co/spaces/tencent/HunyuanWorld-Mirror

## Minimal Embed Examples

Direct video:

```html
<video
  src="https://wlt-ai-cdn.art/videos/2025-11-12-clean-720p-24crf/hero.mp4"
  autoplay
  muted
  loop
  playsinline
  controls
></video>
```

YouTube:

```html
<iframe
  src="https://www.youtube.com/embed/Ku3ikWrKxx4"
  title="HappyOyster demo"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>
```
