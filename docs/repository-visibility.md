# GitHub Repository Visibility Checklist

Canonical site: https://worldmodelswatch.com

Use this file when making the public GitHub repository easier for Google,
GitHub search, and human readers to understand. These settings are managed in
the GitHub web UI, not in source code.

## GitHub About Settings

Recommended repository description:

```text
Source-backed guide to AI world models, generated worlds, spatial AI, and model release signals
```

Recommended website:

```text
https://worldmodelswatch.com
```

Recommended topics:

```text
world-models
ai-world-models
spatial-ai
generated-worlds
physical-ai
ai-research
nextjs
```

## Social Preview

Use the prepared social preview image in GitHub repository settings:

```text
docs/assets/worldmodelswatch-social-preview.png
```

It includes:

- `World Models Watch`
- `AI world models`
- `Generated worlds`
- `Spatial AI`
- `worldmodelswatch.com`

The file is 1280 x 640, visually matches the public site, and avoids
third-party logos.

## Search Entry Requirements

- README first screen links to https://worldmodelswatch.com.
- README first screen includes `AI world models`, `generated worlds`,
  `spatial AI`, `physical AI`, and `worldmodelswatch.com`.
- Repository docs use full website URLs with descriptive anchor text.
- Canonical website pages remain the preferred citation targets.
- `NOTICE.md` explains reuse boundaries for code, text, images, videos, and
  third-party sources.

## Public Safety Checks

Before making the repository public or pushing a visibility update:

```bash
git status --short
find public -type f \( -name '*.mp4' -o -name '*.webm' -o -name '*.mov' -o -name '*.mkv' \) -size +95M -print
npm run typecheck
npm run build
npm run seo:keywords
npm audit --omit=dev
```

If a file is close to or above GitHub's normal Git file limit, compress it,
move it to a CDN/object store, or use Git LFS before committing.
