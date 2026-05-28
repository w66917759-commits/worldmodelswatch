# Verification Notes

Generated: 2026-05-26

## Structural Checks

- `sources.json` parsed successfully with `jq`.
- Project count: 6.
- Resource count in `sources.json`: 35.
- Resource count in `sources.csv`: 35.
- `demo-video-links.json` parsed successfully with `jq`.
- Demo/video link count in `demo-video-links.json`: 25.
- `tencent-demo-links.json` parsed successfully with `jq`.
- Tencent demo/media link count in `tencent-demo-links.json`: 23 media links plus 4 online demo/project links.
- Files created: `README.md`, `media-index.md`, `sources.json`, `sources.csv`, `verification-notes.md`, and 6 dossiers.

## URL Spot Check

Most URLs returned HTTP 200 during a `curl -L` check.

Exceptions and interpretation:

- `https://oasis.us.decart.ai/` returned `curl` certificate error 60 with default verification, but returned HTTP 200 and redirected to `/welcome` with `curl -k`. It is also linked from the official Oasis project page.
- `https://skybox.blockadelabs.com/` returned HTTP 500 to `curl` during this run. It remains linked from the official Blockade Labs product site and should be manually opened in a browser before publishing a live-access claim.
- `https://support.blockadelabs.com/hc/en-us/articles/31649281677074-Export-3D-Models-from-Skybox-AI` returned HTTP 403 to `curl`, but the page content was accessible through web fetch during research. Treat as bot-protection rather than a confirmed broken source.

No video/model binaries were downloaded into the repo.

## Demo Video Check

The direct MP4/WebM/GIF links in `demo-video-links.json` returned HTTP 200 during this run.

YouTube demos are stored as normal watch URLs plus `/embed/` URLs. The Project Sid GitHub video is stored as a stable GitHub attachment link, but should be treated as a research link before using it as a production `<video src>`.

Tencent Hunyuan links in `tencent-demo-links.json` were also checked. The main online demo entries, raw GitHub GIF/MP4 files, Hugging Face demo, and GitHub user-attachment video links returned HTTP 200 during this run.

## Tencent Demo Downloads

Downloaded one non-GIF official demo video per Tencent Hunyuan model line into `downloads/tencent-official-demos/`.

- HY-World 2.0: `hy-world-2-main-demo.mp4`
- HY-World 1.5 / WorldPlay: `hy-worldplay-web-demo.mp4`
- HunyuanWorld 1.0: `hunyuanworld-1-main-demo.mp4`
- HunyuanWorld Voyager: `hunyuanworld-voyager-main-demo.mp4`
- HunyuanWorld Mirror: `hunyuanworld-mirror-main-demo.mp4`

All five downloaded files are MP4 files. GIF files were intentionally excluded.

## Original Six Demo Downloads

Downloaded official videos for the original MVP watchlist into `downloads/original-six-official-videos/`.

- World Labs Marble: 60 MP4 files.
- World Labs RTFM: 21 MP4 files.
- Oasis: 1 MP4 file.
- Genie / Genie 3: 62 MP4/WebM files.
- HappyOyster: 1 MP4 file downloaded from the official YouTube demo.
- Skybox AI: 1 MP4 file downloaded from the official YouTube demo.
- Project Sid: 1 MP4 file.

Total: 147 video files, about 825M. GIF files were intentionally excluded. A file-type check found only MP4/ISO Media and WebM video files.

Skybox AI quality follow-up on 2026-05-27: the official YouTube demo only exposed a downloadable `640x360` MP4 format from public unauthenticated access, and no separate direct HD MP4/WebM source was found on the official Blockade Labs article or homepage.

## Genie + Worldlabs Merge

Created `downloads/merged-videos/genie-worldlabs-alpha-merged.mp4` on 2026-05-27.

- Source folders: `original-six-official-videos/genie/` and `original-six-official-videos/worldlabs/`.
- Source files: 9.
- Merge order: filename alphabetical order across both folders.
- Output: MP4 / H.264 / 1280x720 / 30 fps / no audio.
- Duration: 00:04:39.87.
- Size: about 64M.

Clarification follow-up: created separate merged videos for each folder.

- `downloads/merged-videos/genie-alpha-merged.mp4`: 5 source files, alphabetical order, 1280x720, 30 fps, no audio, duration 00:03:34.87, about 44M.
- `downloads/merged-videos/worldlabs-alpha-merged.mp4`: 4 source files, alphabetical order, 1280x720, 30 fps, no audio, duration 00:01:05.00, about 20M.
