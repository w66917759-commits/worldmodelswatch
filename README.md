# World Models Watch

World Models Watch is a structured intelligence site for world models, spatial intelligence, and interactive world generation.

Core surfaces:

- `spatial-intelligence`: narrative page for spatial intelligence and why world models matter
- `from-video-to-worlds`: evolution page from AI video to interactive and persistent worlds
- `world-model-labs`: dedicated demo-video gallery for world-model projects
- `research-insights`: research hub for source-backed updates, timelines, comparisons, and dossiers
- `what-is-world-model`: definition and education entry point
- `news`: official updates and release notes
- `models`: normalized model dossiers
- `compare`: crawlable comparison tables
- `timeline`: dated market and research milestones
- `concepts`: glossary for world model terminology

Primary domain: `https://worldmodelswatch.com`

## Development

```bash
npm install
npm run dev
```

## Infrastructure

The site keeps public research pages crawlable while adding a protected admin
surface at `/account`.

Copy `.env.example` to `.env.local` and set:

```bash
WMW_ADMIN_EMAIL=editor@worldmodelswatch.com
WMW_ADMIN_PASSWORD=replace-with-a-long-random-password
WMW_SESSION_SECRET=replace-with-at-least-32-random-characters
```

Routes:

- `/login`: environment-backed admin sign-in
- `/account`: protected editor/account surface
- `/privacy`: privacy policy
- `/terms`: terms of use

## Verification

```bash
npm run typecheck
npm run build
```
