# MVP World Model Watchlist

Generated: 2026-05-26
Scope: six initial projects for the World Models Watch MVP.

This folder is a source ledger, not a binary asset dump. It preserves official entry points, demo/video links, public research/code/model artifacts, and editorial notes for later use in the site or ingestion scripts.

## Folder Contents

- `sources.json` - structured project/resource inventory for scripts.
- `sources.csv` - spreadsheet-friendly source ledger.
- `media-index.md` - direct demo/video links where public and stable enough to reference.
- `dossiers/` - one Markdown dossier per project.

## Editorial Rules Used

- Primary sources first: official project pages, docs, blogs, GitHub, Hugging Face, arXiv, and official YouTube links.
- Secondary media is not used to upgrade availability claims.
- "Playable/demo" means a public URL was found, but access may still require account, region, subscription, or waitlist.
- Videos and model files were not downloaded into the repo.
- For HappyOyster, the primary Alibaba Cloud/Alizila source attributes the product to Alibaba Token Hub (ATH). The user-provided table says DAMO, but this ledger keeps the official ATH attribution until another primary source confirms otherwise.

## Quick Status Matrix

| Project | Public demo/access | Demo video | Public research/code/data | Best use in MVP |
| --- | --- | --- | --- | --- |
| World Labs / Marble | Web app, docs, World API | Many official MP4s embedded in Marble/RTFM posts | Docs, API, Spark renderer, technical blogs | 3D world generation and exportable spatial assets |
| Oasis | Public live demo URL plus open 500M model | Official project MP4 | GitHub inference code, Hugging Face 500M weights, project report | Real-time action-conditioned AI game/world model |
| Genie / Genie 3 | Project Genie for Google AI Ultra users in the US | Official Google/DeepMind videos | Genie 1 paper, Genie 2/3 official research posts | Benchmark reference for general-purpose interactive world models |
| HappyOyster | Early Access site | Official Alibaba/Alizila YouTube video | Official article and docs, no public paper/code found | Alibaba product signal for real-time immersive world creation |
| Skybox AI | Public Skybox AI app and API | Official Unity integration video and YouTube channel | API docs, export docs, changelog, roadmap | 360 environment generation, skyboxes, GLB environment mesh workflow |
| Project Sid | GitHub repo and paper | GitHub-hosted project video | arXiv paper, repo PDF, visual abstract | AI civilization and many-agent social simulation reference |

## Recommended Next Use

1. Import `sources.json` into the content layer as a review queue, not as direct published copy.
2. Use each dossier's `MVP angle` and `Caveats` sections to write conservative model profiles.
3. Keep `sources.csv` as the manual research ledger for future updates.
4. Re-check live access before publishing availability-sensitive claims.
