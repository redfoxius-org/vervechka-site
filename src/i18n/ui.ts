export const LANGS = ['uk', 'en'] as const;
export type Lang = (typeof LANGS)[number];

// Every page exists in both languages; '' is the home page.
export const PAGES = ['', 'product', 'screens', 'schools', 'parents', 'roadmap', 'investors', 'contacts', 'license'] as const;
export type PageKey = (typeof PAGES)[number];

export type Text = Record<Lang, string>;

export function href(lang: Lang, page: PageKey): string {
  const prefix = lang === 'uk' ? '/' : '/en/';
  return page === '' ? prefix : `${prefix}${page}/`;
}

export const ui = {
  uk: {
    banner: 'Продукт у розробці — пілот орієнтовно в I кварталі 2027',
    demoSoon: 'Демо-школа — незабаром',
    demoLink: 'Подивитись демо →',
    skip: 'Перейти до основного змісту',
    navLabel: 'Основна навігація',
    nav: {
      product: 'Продукт',
      screens: 'Екрани',
      schools: 'Для шкіл',
      parents: 'Для батьків',
      roadmap: 'Дорожня карта',
      investors: 'Інвесторам',
      contacts: 'Контакти',
    },
    switchTo: 'English',
    switchLabel: 'Read this page in English',
    target: 'план',
    mvpReady: 'MVP готовий приблизно на',
    ready: 'готовність',
    readyMethod: 'Це частка виконаних робіт плану MVP; обсяг робіт різний, тож цифра орієнтовна. Пілотів ще не було, тому вимірюваних показників зручності й швидкості поки немає: додамо їх, коли продукт обкатають зі школами.',
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
    mockupDisclaimer: 'Ілюстрація дизайну інтерфейсу з вигаданими даними, а не знімок робочої системи.',
    mockupSource: 'Макет',
  },
  en: {
    banner: 'The product is under construction — pilot targeted for Q1 2027',
    demoSoon: 'Demo school — coming soon',
    demoLink: 'See the demo →',
    skip: 'Skip to main content',
    navLabel: 'Main navigation',
    nav: {
      product: 'Product',
      screens: 'Screens',
      schools: 'For schools',
      parents: 'For parents',
      roadmap: 'Roadmap',
      investors: 'Investors',
      contacts: 'Contacts',
    },
    switchTo: 'Українська',
    switchLabel: 'Читати цю сторінку українською',
    target: 'target',
    mvpReady: 'The MVP is about',
    ready: 'ready',
    readyMethod: 'This is the share of finished work in the MVP plan; the pieces of work differ in size, so the figure is approximate. There have been no pilots yet, so there are no measured figures for convenience or speed: we will add them once the product has been tried with schools.',
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
    mockupDisclaimer: 'An illustration of the interface design with invented data, not a screenshot of a working system.',
    mockupSource: 'Design',
  },
} as const;
