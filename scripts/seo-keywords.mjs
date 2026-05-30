import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function literalValue(source, key) {
  const match = source.match(new RegExp(`${key}:\\s*"([^"]+)"`));
  return match?.[1];
}

function extractTopLevelObjects(source, exportName) {
  const startToken = `export const ${exportName}`;
  const start = source.indexOf(startToken);
  if (start === -1) return [];

  const equals = source.indexOf("=", start);
  const arrayStart = equals === -1 ? -1 : source.indexOf("[", equals);
  if (arrayStart === -1) return [];

  const objects = [];
  let depth = 0;
  let objectStart = -1;
  let inString = false;
  let escaped = false;

  for (let index = arrayStart + 1; index < source.length; index += 1) {
    const char = source[index];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }

    if (char === '"') {
      inString = true;
      continue;
    }

    if (char === "{") {
      if (depth === 0) objectStart = index;
      depth += 1;
      continue;
    }

    if (char === "}") {
      depth -= 1;
      if (depth === 0 && objectStart !== -1) {
        objects.push(source.slice(objectStart, index + 1));
        objectStart = -1;
      }
      continue;
    }

    if (char === "]" && depth === 0) break;
  }

  return objects;
}

function fallbackModelKeyword(entry) {
  const name = entry.name;
  const category = entry.category ?? "";

  if (/video|portrait|avatar|character/i.test(category)) {
    return `${name} AI video model`;
  }

  return `${name} world model`;
}

function collectEntries() {
  const staticTargets = extractTopLevelObjects(
    read("src/lib/seo/page-targets.ts"),
    "staticSeoTargets",
  ).map((entry) => ({
    route: literalValue(entry, "route"),
    primaryKeyword: literalValue(entry, "primaryKeyword"),
    indexable: !/indexable:\s*false/.test(entry),
    source: "static",
  }));

  const models = extractTopLevelObjects(read("src/lib/content/models.ts"), "modelProfiles").map(
    (entry) => {
      const slug = literalValue(entry, "slug");
      const name = literalValue(entry, "name");
      return {
        route: `/models/${slug}`,
        primaryKeyword:
          literalValue(entry, "primaryKeyword") ??
          fallbackModelKeyword({ name, category: literalValue(entry, "category") }),
        indexable: true,
        source: "model",
      };
    },
  );

  const news = extractTopLevelObjects(read("src/lib/content/news.ts"), "newsItems").map(
    (entry) => {
      const slug = literalValue(entry, "slug");
      return {
        route: `/news/${slug}`,
        primaryKeyword: literalValue(entry, "primaryKeyword") ?? literalValue(entry, "title"),
        indexable: true,
        source: "news",
      };
    },
  );

  const comparisons = extractTopLevelObjects(
    read("src/lib/content/comparisons.ts"),
    "comparisons",
  ).map((entry) => {
    const slug = literalValue(entry, "slug");
    return {
      route: `/compare/${slug}`,
      primaryKeyword: literalValue(entry, "primaryKeyword") ?? literalValue(entry, "title"),
      indexable: true,
      source: "comparison",
    };
  });

  return [...staticTargets, ...models, ...news, ...comparisons];
}

function assertKeywordContract(entries) {
  const failures = [];
  const byKeyword = new Map();
  const byRoute = new Map();

  for (const entry of entries) {
    if (!entry.route) {
      failures.push(`Missing route in ${entry.source} SEO entry`);
      continue;
    }

    if (!entry.primaryKeyword) {
      failures.push(`Missing primary keyword for ${entry.route}`);
      continue;
    }

    const existingRoute = byRoute.get(entry.route);
    if (existingRoute) {
      failures.push(`Duplicate route ${entry.route}`);
    }
    byRoute.set(entry.route, entry);

    const key = entry.primaryKeyword.toLowerCase();
    const existing = byKeyword.get(key);
    if (existing && existing.route !== entry.route) {
      failures.push(
        `Duplicate primary keyword "${entry.primaryKeyword}" on ${existing.route} and ${entry.route}`,
      );
    }
    byKeyword.set(key, entry);
  }

  return failures;
}

function assertSitemap(entries) {
  const sitemapPath = path.join(root, ".next/server/app/sitemap.xml.body");
  if (!fs.existsSync(sitemapPath)) {
    return ["Missing .next/server/app/sitemap.xml.body. Run npm run build before seo:keywords."];
  }

  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  const urls = new Set(
    Array.from(sitemap.matchAll(/<loc>https:\/\/worldmodelswatch\.com([^<]*)<\/loc>/g)).map(
      (match) => match[1],
    ),
  );
  const failures = [];

  for (const entry of entries.filter((item) => item.indexable)) {
    if (!urls.has(entry.route)) {
      failures.push(`Sitemap missing indexable route ${entry.route}`);
    }
  }

  for (const privateRoute of ["/login", "/account", "/auth/sign-in"]) {
    if (urls.has(privateRoute)) {
      failures.push(`Sitemap includes private/noindex route ${privateRoute}`);
    }
  }

  for (const url of urls) {
    if (url.startsWith("/api/") || url.startsWith("/auth/callback")) {
      failures.push(`Sitemap includes non-public route ${url}`);
    }
  }

  return failures;
}

const entries = collectEntries();
const failures = [...assertKeywordContract(entries), ...assertSitemap(entries)];

if (failures.length > 0) {
  console.error("SEO keyword contract failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`SEO keyword contract passed for ${entries.length} routes.`);
