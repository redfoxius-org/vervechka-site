// Site-wide settings. The owner edits these before publishing.

// Public origin of the site. Used for canonical URLs, Open Graph, hreflang and the sitemap.
// Keep the trailing slash off.
export const SITE_URL = 'https://vervechka.pp.ua';

// The only contact channel published today: public GitHub issues of this site repository.
export const CONTACT = 'https://github.com/redfoxius-org/vervechka-site/issues';

// Public contact address (owner decision 2026-11-27). Set to null to remove every mailto: link from the site.
export const CONTACT_EMAIL: string | null = 'redfoxius@gmail.com';

export const REPO_URL = 'https://github.com/redfoxius-org/vervechka-site';

// Product repo commit the status data was synced from (docs/roadmap.md, docs/specs/README.md).
export const STATUS_AS_OF = { date: '2026-11-27', source: 'vervechka@4b7eb91 (origin main)' };

// Public demo school. Not deployed yet: null shows "coming soon" in the site banner.
// Set to 'https://demoschool.pp.ua' when it is live; the banner then renders a link.
export const DEMO_URL: string | null = null;
