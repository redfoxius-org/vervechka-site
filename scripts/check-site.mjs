// Post-build checks over dist/: uk/en page parity, internal links resolve,
// no external resources (only <a> may point outside), no inline <script>.
// shortcut: regex HTML scanning, fine for Astro's own output; switch to a parser if pages get hand-written HTML.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, relative, dirname, posix } from 'node:path';
import assert from 'node:assert/strict';

const DIST = new URL('../dist/', import.meta.url).pathname;
const IGNORED_PARITY = new Set(['404.html']);

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );

export function checkParity(htmlRelPaths) {
  const errors = [];
  const pages = htmlRelPaths.filter((p) => !IGNORED_PARITY.has(p));
  const en = new Set(pages.filter((p) => p.startsWith('en/')).map((p) => p.slice(3)));
  const uk = new Set(pages.filter((p) => !p.startsWith('en/')));
  for (const p of uk) if (!en.has(p)) errors.push(`uk page without en counterpart: ${p}`);
  for (const p of en) if (!uk.has(p)) errors.push(`en page without uk counterpart: en/${p}`);
  return errors;
}

export function checkHtml(html, file, resolves) {
  const errors = [];
  for (const m of html.matchAll(/<script\b([^>]*)>/gi)) {
    if (!/\bsrc\s*=/.test(m[1])) errors.push(`${file}: inline <script>`);
  }
  if (/\son[a-z]+\s*=/i.test(html.replace(/<(script|style)[\s\S]*?<\/\1>/gi, ''))) errors.push(`${file}: inline event handler`);
  for (const m of html.matchAll(/<(\w+)\b([^>]*)>/g)) {
    const [, tag, attrs] = m;
    for (const a of attrs.matchAll(/\b(href|src|srcset|poster|data)\s*=\s*"([^"]*)"/gi)) {
      const [, name, value] = a;
      const isAnchor = tag.toLowerCase() === 'a' && name.toLowerCase() === 'href';
      const isMetaLink = tag.toLowerCase() === 'link' && /rel="(canonical|alternate)"/.test(attrs);
      if (/^(https?:)?\/\//i.test(value)) {
        if (!isAnchor && !isMetaLink) errors.push(`${file}: external resource <${tag} ${name}="${value}">`);
        continue;
      }
      if (/^(#|mailto:|tel:|data:)/i.test(value) || value === '') continue;
      if (!resolves(value, file)) errors.push(`${file}: broken internal link ${value}`);
    }
  }
  return errors;
}

export function checkCss(css, file) {
  return [...css.matchAll(/url\(\s*['"]?((https?:)?\/\/[^'")]+)/gi)].map((m) => `${file}: external url() ${m[1]}`);
}

function resolvesIn(dist) {
  return (link, fromFile) => {
    const path = link.split(/[?#]/)[0];
    const abs = path.startsWith('/') ? path : posix.join('/', dirname(fromFile), path);
    const target = join(dist, decodeURIComponent(abs));
    if (existsSync(target) && statSync(target).isFile()) return true;
    return existsSync(join(target, 'index.html'));
  };
}

function selfTest() {
  assert.deepEqual(checkParity(['index.html', 'en/index.html', '404.html']), []);
  assert.equal(checkParity(['a/index.html']).length, 1);
  const ok = () => true;
  assert.equal(checkHtml('<script>alert(1)</script>', 'x', ok).length, 1);
  assert.equal(checkHtml('<script type="module" src="/a.js"></script>', 'x', ok).length, 0);
  assert.equal(checkHtml('<img src="https://cdn.example/a.png">', 'x', ok).length, 1);
  assert.equal(checkHtml('<a href="https://example.org/">x</a>', 'x', ok).length, 0);
  assert.equal(checkHtml('<a href="/missing/">x</a>', 'x', () => false).length, 1);
  assert.equal(checkCss('a{background:url(https://x.test/a.png)}', 'c').length, 1);
  assert.equal(checkCss('a{background:url(/_astro/a.woff2)}', 'c').length, 0);
}

selfTest();
assert.ok(existsSync(DIST), 'dist/ is missing: run the build first');
const files = walk(DIST).map((f) => relative(DIST, f).split('\\').join('/'));
const html = files.filter((f) => f.endsWith('.html'));
const resolves = resolvesIn(DIST);
const errors = [
  ...checkParity(html),
  ...html.flatMap((f) => checkHtml(readFileSync(join(DIST, f), 'utf8'), f, resolves)),
  ...files.filter((f) => f.endsWith('.css')).flatMap((f) => checkCss(readFileSync(join(DIST, f), 'utf8'), f)),
];
if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`\ncheck-site: ${errors.length} problem(s)`);
  process.exit(1);
}
console.log(`check-site: OK (${html.length} HTML pages, ${files.length} files)`);
