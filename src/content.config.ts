import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { LANGS, PAGES } from './i18n/ui';
import { MOCKUP_IDS } from './data/mockups';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    lang: z.enum(LANGS),
    page: z.enum(PAGES),
    title: z.string(),
    description: z.string(),
    // Data-driven block rendered after the Markdown body.
    widget: z.enum(['features', 'roadmap', 'parent-app', 'contact', 'status']).optional(),
    // Simulated screenshots rendered after the body, before the widget (src/data/mockups.ts).
    mockups: z.array(z.enum(MOCKUP_IDS)).optional(),
  }),
});

export const collections = { pages };
