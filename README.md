# World Models Watch

World Models Watch is a video-led guide to AI world and spatial model progress.
The homepage stays focused on immersive AI video discovery; the pages after it
explain the current state of the field, the companies and models involved, and
selected adjacent progress.

Core surfaces:

- `/`: `AI world models`
- `/world-stream`: `world model evolution`
- `/create-word`: `AI world generator`
- `/events`: `AI world model events`
- `/progress`: `AI world model progress`
- `/models`: `AI world model companies`
- `/updates`: `AI world model updates`
- `/world-model-labs`: `world model demos`
- `/news`: `world model news`
- `/compare`: `world model comparisons`
- `/what-is-world-model`: `what is a world model`
- `/faq`: `world models FAQ`

SEO rule:

- Every indexable page must have exactly one `primaryKeyword`.
- Related long-tail keywords may support that primary keyword, but must not turn
  the page into a second topic.
- Add or update static page targets in `src/lib/seo/page-targets.ts` before
  creating a new indexable page.
- Dynamic model, news, and comparison pages use their own content data for the
  primary keyword, with page-specific fallbacks.
- Run `npm run seo:keywords` after `npm run build` to verify unique primary
  keywords and sitemap coverage.

Primary product-facing examples:

- World Labs / Marble: direct `Create your world` link to `https://marble.worldlabs.ai/`
- Skybox AI: direct `Create your world` link to `https://skybox.blockadelabs.com/`

Primary domain: `https://worldmodelswatch.com`

## Development

```bash
npm install
npm run dev
```

## Infrastructure

The site keeps public guide pages crawlable while adding a protected admin
surface at `/account`.

Copy `.env.example` to `.env.local` and set:

```bash
WMW_ADMIN_EMAIL=editor@worldmodelswatch.com
WMW_ADMIN_PASSWORD=replace-with-a-long-random-password
WMW_SESSION_SECRET=replace-with-at-least-32-random-characters
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=replace-with-your-supabase-publishable-key
SUPABASE_SECRET_KEY=replace-with-your-server-only-supabase-secret-key
```

Routes:

- `/login`: environment-backed admin sign-in
- `/account`: protected editor/account surface
- `/auth/sign-in`: Supabase Google sign-in for public comments and comment likes
- `/auth/callback`: OAuth callback route
- `/privacy`: privacy policy
- `/terms`: terms of use

Database:

- Apply `supabase/migrations/20260528000000_add_comments_profiles_and_likes.sql`
  to create `profiles`, `comments`, and `comment_likes`.
- Configure Google OAuth in the Supabase dashboard and add
  `https://worldmodelswatch.com/auth/callback` plus any local callback URL used
  for development.

## Verification

```bash
npm run typecheck
npm run build
npm run seo:keywords
```
