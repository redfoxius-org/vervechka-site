# vervechka-site

Public landing and documentation site of **Vervechka**, a platform for private schools. Audience: school owners first, a dedicated section for parents, a placeholder for investors. Ukrainian is the default language (no URL prefix), English lives under `/en/`.

The product itself is closed source and lives in a separate repository; this repo holds only the site. Licenses: code MIT ([LICENSE](LICENSE)), content CC BY 4.0 ([LICENSE-CONTENT](LICENSE-CONTENT)), the name and logo are reserved ([NOTICE.md](NOTICE.md)).

## Honest-content rule

- Every capability carries exactly one status label: **available now** (marked done in the product's `docs/roadmap.md`), **in development** (unfinished row of the current phase) or **planned**. Nothing else.
- No feature that is not in the product roadmap. No invented numbers, prices, customers, testimonials, dates or compliance certifications. Legal statements only if the product docs state them.
- No real personal data anywhere: invented names only, never real children, parents or staff.
- Every factual claim is listed in [CONTENT_CLAIMS.md](CONTENT_CLAIMS.md) with its source. A new claim on the site needs a new row there.

## Stack

Astro 5 (static output, built-in i18n routing, Markdown content collections), TypeScript strict, exact-pinned dependencies with a committed `package-lock.json`. No client JavaScript, no analytics, no cookies, no third-party requests: fonts are self-hosted from `@fontsource`. Stylesheets are emitted as files (`inlineStylesheets: 'never'`), so a strict CSP such as `default-src 'self'` works.

## Local development (Docker, Node 22)

Node 22 is required. Run everything in a throwaway container:

```bash
docker run --rm -it --name vch-site-dev -u "$(id -u):$(id -g)" -e HOME=/tmp -e ASTRO_TELEMETRY_DISABLED=1 \
  -v "$PWD":/app -w /app -p 4321:4321 node:22 sh -c 'npm ci && npm run dev'
```

Then open http://localhost:4321/. Other commands, same container recipe without `-p`/`-it`:

| Command | What it does |
| --- | --- |
| `npm run build` | static site into `dist/` |
| `npm run check` | `astro check` (types), build, then `scripts/check-site.mjs`: every uk page has an en counterpart and back, all internal links resolve, no external `http(s)` resource is loaded (only `<a>` links may point outside), no inline `<script>` or `on*=` handler |

CI (`.github/workflows/ci.yml`) runs `npm ci && npm run check` on Node 22. It never deploys.

## Content structure

```
src/
  config.ts             SITE_URL, CONTACT (GitHub issues), CONTACT_EMAIL (TODO), status sync date
  i18n/ui.ts            languages, page list, UI strings, status labels, href() helper
  data/roadmap.ts       phases and features with statuses (mirror of the product's docs/roadmap.md)
  content/pages/uk/*.md page texts in Ukrainian
  content/pages/en/*.md the same pages in English
  components/           PageView, Features, Roadmap, Legend, StatusBadge, Contact
  layouts/Base.astro    head (SEO, Open Graph, hreflang), header, nav, language switcher, footer
  pages/[...slug].astro Ukrainian routes; pages/en/[...slug].astro English routes; 404.astro; robots.txt.ts
scripts/check-site.mjs  post-build checks
scripts/deploy.sh       DRAFT rsync to the web server (dry run unless --apply); not used yet
```

## How i18n works

- `astro.config.mjs` sets `defaultLocale: 'uk'`, `locales: ['uk', 'en']`, `prefixDefaultLocale: false`.
- Each page is two Markdown files with the same `page` key: `src/content/pages/uk/<page>.md` and `src/content/pages/en/<page>.md`. The front matter has `lang`, `page`, `title`, `description` and an optional `widget` (`features`, `parent-app`, `roadmap`, `contact`) that renders data after the text.
- UI strings and status labels are in `src/i18n/ui.ts`; feature texts in `src/data/roadmap.ts` carry both languages.
- The layout emits `hreflang` alternates (uk, en, x-default) and a language switcher that links to the same page in the other language. The sitemap carries the same alternates.
- Ukrainian follows the product's style guide (`docs/i18n/uk.md`): "ви", gender-neutral wording, no officialese, glossary terms (підрозділ, клас-комплект, довірена особа, вихователь ГПД).

## How to add a page

1. Add the key to `PAGES` in `src/i18n/ui.ts` (and to `navKeys` in `src/layouts/Base.astro` plus `nav` strings if it belongs in the menu).
2. Create `src/content/pages/uk/<key>.md` and `src/content/pages/en/<key>.md` with the same `page: <key>`.
3. Link internally with trailing slashes: `/<key>/` in Ukrainian texts, `/en/<key>/` in English ones.
4. Add every factual claim to `CONTENT_CLAIMS.md`.
5. Run `npm run check`: it fails if one language is missing or a link is broken.

## Updating statuses

When the product roadmap changes, edit `src/data/roadmap.ts` and `STATUS_AS_OF` in `src/config.ts`, and update the affected rows of `CONTENT_CLAIMS.md`.

## Deploying

Not set up yet. `scripts/deploy.sh` is a draft for the owner: it is a dry run by default and syncs only inside the `vervechka-landing` web root. Before the first deploy set `SITE_URL` in `src/config.ts` to the real origin.
