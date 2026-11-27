// Site-wide settings. The owner edits these before publishing.

// TODO(owner): replace with the real public origin of the site. Used for canonical URLs,
// Open Graph, hreflang and the sitemap. Keep the trailing slash off.
export const SITE_URL = 'https://vervechka.example';

// The only contact channel published today: public GitHub issues of this site repository.
export const CONTACT = 'https://github.com/redfoxius-org/vervechka-site/issues';

// TODO(owner): confirm a contact email. While null, no email address and no mailto: link is published.
export const CONTACT_EMAIL: string | null = null;

export const REPO_URL = 'https://github.com/redfoxius-org/vervechka-site';

// Product repo commit the status data was synced from (docs/roadmap.md, docs/specs/README.md).
export const STATUS_AS_OF = { date: '2026-11-27', source: 'vervechka@fe39d88' };
