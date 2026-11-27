export const LANGS = ['uk', 'en'] as const;
export type Lang = (typeof LANGS)[number];

// Every page exists in both languages; '' is the home page.
export const PAGES = ['', 'product', 'schools', 'parents', 'roadmap', 'investors', 'contacts', 'license'] as const;
export type PageKey = (typeof PAGES)[number];

export type Status = 'available' | 'in-development' | 'planned';
export type Text = Record<Lang, string>;

export function href(lang: Lang, page: PageKey): string {
  const prefix = lang === 'uk' ? '/' : '/en/';
  return page === '' ? prefix : `${prefix}${page}/`;
}

export const ui = {
  uk: {
    skip: 'Перейти до основного змісту',
    navLabel: 'Основна навігація',
    nav: {
      product: 'Продукт',
      schools: 'Для шкіл',
      parents: 'Для батьків',
      roadmap: 'Що готово',
      investors: 'Інвесторам',
      contacts: 'Контакти',
    },
    switchTo: 'English',
    switchLabel: 'Read this page in English',
    status: {
      available: 'Готово',
      'in-development': 'У розробці',
      planned: 'Заплановано',
    },
    legendTitle: 'Що означають позначки',
    legend: {
      available: 'реалізовано в коді платформи. Школи ним ще не користуються: пілот не почався.',
      'in-development': 'робота триває, ще не завершено.',
      planned: 'є в плані розробки, робота ще не почалася. Порядок може змінитися.',
    },
    asOf: 'Стан на',
    phase: 'Фаза',
    progress: (done: number, total: number) => `готово ${done} з ${total}`,
    footerNote: 'Вервечка в розробці. На цьому сайті немає аналітики, файлів cookie й сторонніх запитів.',
    footerLicense: 'Тексти сайту — CC BY 4.0, код сайту — MIT. Назва й логотип «Вервечка» не ліцензуються.',
    licenseLink: 'Ліцензія',
    sourceLink: 'Код сайту',
    contactIssues: 'Написати через GitHub Issues',
    contactTopicSchool: 'Я представляю школу',
    contactTopicParent: 'Я батько чи мати учня',
    contactTopicPilot: 'Хочу пілот у своїй школі',
    contactSubjectSchool: 'Вервечка: питання від школи',
    contactSubjectParent: 'Вервечка: питання від батьків',
    contactSubjectPilot: 'Вервечка: пілот у школі',
    contactOrWrite: 'Або напишіть напряму:',
  },
  en: {
    skip: 'Skip to main content',
    navLabel: 'Main navigation',
    nav: {
      product: 'Product',
      schools: 'For schools',
      parents: 'For parents',
      roadmap: 'What is ready',
      investors: 'Investors',
      contacts: 'Contacts',
    },
    switchTo: 'Українська',
    switchLabel: 'Читати цю сторінку українською',
    status: {
      available: 'Available now',
      'in-development': 'In development',
      planned: 'Planned',
    },
    legendTitle: 'What the labels mean',
    legend: {
      available: 'implemented in the platform code. No school uses it yet: the pilot has not started.',
      'in-development': 'work is under way, not finished yet.',
      planned: 'in the development plan, work has not started. The order may change.',
    },
    asOf: 'Status as of',
    phase: 'Phase',
    progress: (done: number, total: number) => `${done} of ${total} done`,
    footerNote: 'Vervechka is in development. This site has no analytics, no cookies and no third-party requests.',
    footerLicense: 'Site texts: CC BY 4.0, site code: MIT. The name and logo "Vervechka" are not licensed.',
    licenseLink: 'License',
    sourceLink: 'Site source',
    contactIssues: 'Write to us via GitHub Issues',
    contactTopicSchool: 'I represent a school',
    contactTopicParent: 'I am a parent or guardian',
    contactTopicPilot: 'I want a pilot at my school',
    contactSubjectSchool: 'Vervechka: question from a school',
    contactSubjectParent: 'Vervechka: question from a parent',
    contactSubjectPilot: 'Vervechka: pilot at a school',
    contactOrWrite: 'Or write directly:',
  },
} as const;
