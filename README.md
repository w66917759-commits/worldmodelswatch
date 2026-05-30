# World Models Watch

World Models Watch is a source-backed public guide to AI world models,
interactive generated worlds, spatial AI, physical AI, and model release
signals.

The site is built to be easy for readers, search engines, and downstream
researchers to inspect:

- Public site: https://worldmodelswatch.com
- Sitemap: https://worldmodelswatch.com/sitemap.xml
- Robots policy: https://worldmodelswatch.com/robots.txt
- GitHub: https://github.com/w66917759-commits/worldmodelswatch
- Primary domain: `worldmodelswatch.com`

Every indexable public page should have one clear search intent, one canonical
URL, source-backed claims, and a sitemap entry. The protected editor and API
surfaces are intentionally not content surfaces.

## Fast Content Access

Start here if you are crawling, citing, or reusing the public content.

| Entry point | URL | Content available |
| --- | --- | --- |
| Homepage | `https://worldmodelswatch.com/` | Visual front door for AI world models and generated-world demos |
| Sitemap | `https://worldmodelswatch.com/sitemap.xml` | Full indexable URL inventory generated from static routes, model pages, news pages, and comparison pages |
| Robots | `https://worldmodelswatch.com/robots.txt` | Crawl policy; public pages are allowed, `/account` and `/api/` are disallowed |
| Company map | `/models` | Company-first map of usable tools, demos, research previews, and open stacks |
| Model dossiers | `/models/[slug]` | Source-backed model profiles with availability, strengths, limits, and citations |
| Decision guides | `/compare` and `/compare/[slug]` | Comparison tables for creator, developer, research, robotics, and beginner decisions |
| Release signals | `/news` and `/news/[slug]` | Dated source-backed updates with source confidence, availability notes, and overclaim warnings |
| Current progress | `/progress` | Current AI world model progress across products, demos, open stacks, and physical AI |
| Selected updates | `/updates` | Short list of release signals that change the category map |
| Events | `/events` | Dated evidence rail for launches, releases, open-source drops, and milestones |
| Timeline | `/timeline` | Chronological view of world model milestones |
| Definition | `/what-is-world-model` | Beginner-friendly definition and boundary with video models |
| Concepts | `/concepts` and `/concept-map` | Glossary and concept map for spatial intelligence, generated worlds, physical AI, and adjacent terms |
| FAQ | `/faq` | Site policy, source policy, comments, likes, and category questions |

Current public inventory:

- 20 indexable static routes from `src/lib/seo/page-targets.ts`
- 16 model dossier routes from `src/lib/content/models.ts`
- 18 news and release-signal routes from `src/lib/content/news.ts`
- 13 comparison guide routes from `src/lib/content/comparisons.ts`
- 67 indexable public routes in the sitemap, plus 3 noindex/private route
  entries checked by `npm run seo:keywords`

## How To Crawl This Site

Recommended crawler flow:

1. Fetch `https://worldmodelswatch.com/robots.txt`.
2. Fetch `https://worldmodelswatch.com/sitemap.xml`.
3. Crawl only the URLs listed in the sitemap unless you are doing a manual
   audit.
4. Treat canonical HTML pages as the public content source.
5. Preserve source links and category-boundary notes when quoting or summarizing
   model claims.

Do not crawl or depend on these as public content feeds:

- `/api/*`: implementation routes, not editorial content pages.
- `/account`: protected editor surface.
- `/login`: noindex admin sign-in.
- `/auth/sign-in`: noindex community sign-in.
- `/auth/callback`: OAuth callback.

There is no separate public JSON API yet. For programmatic reuse, use the
rendered public pages or the source data modules in this repository.

## Source Data Files

The content is intentionally stored in structured TypeScript data modules so the
site can generate pages, metadata, sitemap entries, and internal links from one
source of truth.

| File | Purpose |
| --- | --- |
| `src/lib/content/models.ts` | Canonical model catalog and model dossier data |
| `src/lib/content/news.ts` | Source-backed release signals and news items |
| `src/lib/content/comparisons.ts` | Comparison pages, decision questions, tables, takeaways, and FAQs |
| `src/lib/content/industry-guide.ts` | Progress stages, selected updates, and company grouping |
| `src/lib/content/world-evolution.ts` | Capability stages and evolution timeline inputs |
| `src/lib/content/concepts.ts` | Glossary entries |
| `src/lib/content/concept-map.ts` | Concept-map clusters and bridges |
| `src/lib/content/faq.ts` | FAQ entries |
| `src/lib/seo/page-targets.ts` | Static route SEO contract and metadata generation |
| `src/app/sitemap.ts` | Sitemap generation for static, model, news, and comparison routes |
| `src/app/robots.ts` | Public crawl policy |
| `research/mvp-world-model-watchlist-2026-05-26/sources.csv` | Spreadsheet-friendly source ledger for the original research set |
| `research/mvp-world-model-watchlist-2026-05-26/README.md` | Research-source rules, status matrix, and notes |

## Content Schema

Public claims should be attached to structured fields instead of being scattered
through page components.

### ModelProfile

Defined in `src/lib/content/models.ts`.

Important fields:

- `slug`: public route id for `/models/[slug]`.
- `name`, `organization`, `category`, `date`, `updated`, `status`.
- `summary`, `focus`, `availability`.
- `strengths`, `limits`: clear reader-facing claim boundaries.
- `sources`: citation list shown on pages.
- `primaryKeyword`, `secondaryKeywords`, `officialKeywords`: search intent.
- `sourceUrls`, `categoryBoundary`: crawler-friendly and editor-friendly source
  policy.
- `relatedNewsSlugs`: connects model pages to release signals.
- Optional visual fields such as `heroVideo`, `posterImage`, `accentColor`, and
  `consumerHook`.

### NewsItem

Defined in `src/lib/content/news.ts`.

Important fields:

- `slug`: public route id for `/news/[slug]`.
- `title`, `date`, `updated`, `organization`.
- `summary`, `whyItMatters`, `whatChanged`.
- `signalType`, `impactLevel`, `sourceConfidence`.
- `availabilityNote`, `overclaimWarning`: prevent release coverage from turning
  into unsupported product claims.
- `relatedModelSlugs`, `relatedComparisonSlugs`: internal discovery graph.
- `sources`, `sourceUrls`: source attribution.

### Comparison

Defined in `src/lib/content/comparisons.ts`.

Important fields:

- `slug`: public route id for `/compare/[slug]`.
- `title`, `summary`, `updated`, `guideType`.
- `decisionQuestion`: what the page helps a reader decide.
- `columns`, `rows`: crawlable comparison table.
- `takeaways`, `faq`: summary and long-tail answer surface.
- `relatedModelSlugs`: connects the guide back to model dossiers.
- `sources`, `sourceUrls`, `categoryBoundary`: source and scope guardrails.

## Editorial Rules

Use these rules when adding or reviewing content:

- Prefer primary sources: official project pages, docs, blogs, GitHub, Hugging
  Face, arXiv, official press pages, and official videos.
- Do not use secondary coverage to upgrade availability claims.
- Separate product access, API access, open-source status, and research-preview
  status.
- Keep comparison pages decision-first and table-driven.
- Keep model pages source-backed, not promotional.
- Separate generated 3D assets and API-accessible world tools from plain video
  output products.
- Keep world-model category pages distinct from generic AI video news.
- Re-check live access before publishing claims about pricing, API access,
  waitlists, region availability, or subscriptions.

## SEO And Crawl Contract

Static routes are registered in `src/lib/seo/page-targets.ts`.

Rules:

- Every indexable static route needs exactly one `primaryKeyword`.
- Long-tail keywords may support the primary keyword, but should not create a
  second topic on the same page.
- Dynamic model, news, and comparison pages use their own content data for
  primary keywords and metadata fallbacks.
- `src/app/sitemap.ts` must include every indexable static route plus model,
  news, and comparison routes.
- Private routes should stay noindex and out of the sitemap.
- Run the SEO contract after a production build:

```bash
npm run build
npm run seo:keywords
```

The SEO script checks:

- duplicate routes
- missing primary keywords
- duplicate primary keywords
- missing sitemap URLs
- private/noindex routes accidentally included in the sitemap
- `/api/` or OAuth callback URLs accidentally included in the sitemap

## Public Route Map

Core public pages:

- `/`
- `/world-stream`
- `/create-word`
- `/events`
- `/progress`
- `/updates`
- `/timeline`
- `/models`
- `/models/[slug]`
- `/world-model-labs`
- `/news`
- `/news/[slug]`
- `/compare`
- `/compare/[slug]`
- `/what-is-world-model`
- `/spatial-intelligence`
- `/from-video-to-worlds`
- `/research-insights`
- `/concept-map`
- `/concepts`
- `/faq`
- `/privacy`
- `/terms`

Private or noindex pages:

- `/login`
- `/account`
- `/auth/sign-in`
- `/auth/callback`
- `/api/auth/session`

## Adding Content

### Add a model dossier

1. Add a new `ModelProfile` in `src/lib/content/models.ts`.
2. Include `slug`, `name`, `organization`, `category`, `status`, `summary`,
   `focus`, `availability`, `strengths`, `limits`, and `sources`.
3. Add `primaryKeyword`, `secondaryKeywords`, `officialKeywords`, `sourceUrls`,
   and `categoryBoundary` when the claim needs search or scope precision.
4. Connect related news with `relatedNewsSlugs`.
5. Add comparison links where useful through `relatedModelSlugs` in
   `src/lib/content/comparisons.ts`.
6. Run verification.

### Add a news or release-signal page

1. Add a `NewsItem` in `src/lib/content/news.ts`.
2. Include `sourceConfidence`, `availabilityNote`, and `overclaimWarning` for
   availability-sensitive updates.
3. Link to related model and comparison slugs.
4. Keep the page about what changed, not generic market commentary.
5. Run verification.

### Add a comparison guide

1. Add a `Comparison` in `src/lib/content/comparisons.ts`.
2. Start with `decisionQuestion`.
3. Fill `columns` and `rows` with a table that can be understood without the
   visual layout.
4. Add `takeaways`, `sources`, and `categoryBoundary`.
5. Link related models.
6. Run verification.

### Add a static indexable page

1. Add the App Router page under `src/app/.../page.tsx`.
2. Add a matching route in `src/lib/seo/page-targets.ts`.
3. Use `metadataForRoute(route)` for canonical metadata when possible.
4. Add internal links from header, footer, hub pages, or related pages when the
   route should be discoverable.
5. Run verification.

## Development

Requirements:

- Node.js compatible with Next.js 16 and React 19.
- npm, using the checked-in `package-lock.json`.

Install and run:

```bash
npm install
npm run dev
```

Production-style checks:

```bash
npm run typecheck
npm run build
npm run seo:keywords
```

Available scripts:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Next.js dev server |
| `npm run typecheck` | Run TypeScript without emitting files |
| `npm run build` | Build the production Next.js app |
| `npm run start` | Serve the built app |
| `npm run seo:keywords` | Validate keyword uniqueness and sitemap coverage after build |

## Environment

Copy `.env.example` to `.env.local` and set:

```bash
WMW_ADMIN_EMAIL=editor@worldmodelswatch.com
WMW_ADMIN_PASSWORD=replace-with-a-long-random-password
WMW_SESSION_SECRET=replace-with-at-least-32-random-characters

NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=replace-with-your-supabase-publishable-key
SUPABASE_SECRET_KEY=replace-with-your-server-only-supabase-secret-key
```

Auth surfaces:

- `/login`: environment-backed admin sign-in.
- `/account`: protected editor/account area.
- `/auth/sign-in`: Supabase Google sign-in for public comments and likes.
- `/auth/callback`: OAuth callback route.

Database:

- Apply `supabase/migrations/20260528000000_add_comments_profiles_and_likes.sql`
  to create `profiles`, `comments`, and `comment_likes`.
- Configure Google OAuth in Supabase.
- Add `https://worldmodelswatch.com/auth/callback` plus local development
  callback URLs used during testing.

## Project Structure

```text
src/app/                 Next.js App Router pages, sitemap, robots, auth routes
src/components/          Shared page, navigation, comments, showcase, and visual components
src/data/                Shared world-card and homepage experience data
src/lib/content/         Canonical editorial data modules
src/lib/seo/             SEO target and freshness helpers
src/lib/supabase/        Supabase client/server/admin helpers
public/showcase/         Public images and generated showcase textures
public/world-videos/     Local public video assets used by the site
research/                Source ledgers, media notes, and non-runtime research artifacts
scripts/                 Verification and SEO helper scripts
supabase/migrations/     Database schema migrations for comments and likes
```

## Content Reuse Notes

- Cite the canonical public URL when referencing a page.
- Preserve official source links when reusing facts from model, news, or
  comparison pages.
- Do not remove availability notes or overclaim warnings from copied summaries.
- This repository does not currently include a separate license file, so check
  permissions before republishing large portions of site copy or bundled media.
