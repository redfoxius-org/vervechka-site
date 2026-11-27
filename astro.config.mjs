// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config.ts';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  // Separate CSS files only: no inline <style>, so a strict CSP (style-src 'self') works.
  build: { inlineStylesheets: 'never' },
  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'uk', locales: { uk: 'uk-UA', en: 'en-US' } },
      filter: (page) => !page.endsWith('/404/'),
    }),
  ],
});
