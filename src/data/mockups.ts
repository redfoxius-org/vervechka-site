// Simulated screenshots: HTML/CSS renditions of the product's designed screens
// (product repo docs/design/screens/*.dc.html). Data in them is invented.
// Status follows the product's docs/roadmap.md; `note` says which parts of the design are not built.
import type { Text } from '../i18n/ui';

export const MOCKUP_IDS = ['pupils', 'pupil-card', 'legal', 'brand', 'today', 'family'] as const;
export type MockupId = (typeof MOCKUP_IDS)[number];

export interface Mockup {
  device: 'browser' | 'phone';
  source: string; // design file in the product repo, for CONTENT_CLAIMS.md
  title: Text;
  label: Text; // aria-label of the picture: what the screen shows
  note: Text;
}

export const mockups: Record<MockupId, Mockup> = {
  pupils: {
    device: 'browser',
    source: 'docs/design/screens/StaffPupils.dc.html',
    title: { uk: "Кабінет персоналу: «Діти і сім'ї»", en: 'Staff cabinet: Children and families' },
    label: {
      uk: "Ілюстрація кабінету персоналу, розділ «Діти і сім'ї»: бічне меню школи, фільтр за класами й таблиця дітей з класом, опікунами, станом згод, оплати й харчування. Дані вигадані.",
      en: 'Illustration of the staff cabinet, Children and families section: the school side menu, a class filter and a table of children with class, guardians, consents, payment and meals. Invented data.',
    },
    note: {
      uk: 'У кабінеті вже є список: дитина, клас, опікуни, фільтр за класом, додавання дитини й імпорт з CSV. Колонки «Згоди», «Оплата», «Харчування» є лише в макеті й ще не зроблені.',
      en: 'The cabinet already has the list: child, class, guardians, class filter, adding a child and import from CSV. The Consents, Payment and Meals columns exist only in the design and are not built yet.',
    },
  },
  'pupil-card': {
    device: 'browser',
    source: 'docs/design/screens/StaffPupilCard.dc.html',
    title: { uk: 'Кабінет персоналу: картка дитини', en: "Staff cabinet: a child's card" },
    label: {
      uk: 'Ілюстрація картки дитини в кабінеті персоналу: клас і дата зарахування, опікуни з правами (застосунок, забирає, отримує рахунки), згоди з версіями документів і зашифрована нотатка про харчування. Дані вигадані.',
      en: "Illustration of a child's card in the staff cabinet: class and enrollment date, guardians with permissions (app, picks up, gets invoices), consents with document versions and an encrypted meals note. Invented data.",
    },
    note: {
      uk: 'У кабінеті вже є картка: зарахування, опікуни й права, згоди, редагування; перегляд записується в журнал дій. Блоки «Здоров’я і харчування», «Договір і оплати» та позначка присутності є лише в макеті.',
      en: 'The cabinet already has the card: enrollment, guardians and permissions, consents, editing; opening it is written to the audit log. The Health and meals and Contract and payments blocks and the attendance chip exist only in the design.',
    },
  },
  legal: {
    device: 'browser',
    source: 'docs/design/screens/SettingsLegal.dc.html',
    title: { uk: 'Налаштування: документи й згоди', en: 'Settings: documents and consents' },
    label: {
      uk: 'Ілюстрація налаштувань школи, вкладка «Документи й згоди»: документи для батьків з версіями й датами, скільки опікунів дали згоду чи ознайомились, і порада позначати суттєві зміни, щоб запитати згоду знову. Дані вигадані.',
      en: 'Illustration of the school settings, Documents and consents tab: documents for parents with versions and dates, how many guardians consented or acknowledged, and a hint to mark material changes to ask for consent again. Invented data.',
    },
    note: {
      uk: 'У кабінеті вже є перелік документів з версіями, новий документ і нова версія. Нагадування з макета й блок договору з платформою ще не зроблені.',
      en: 'The cabinet already has the list of documents with versions, a new document and a new version. The reminders in the design and the platform contract block are not built yet.',
    },
  },
  brand: {
    device: 'browser',
    source: 'docs/design/screens/SettingsSchool.dc.html',
    title: { uk: 'Налаштування: профіль і бренд школи', en: "Settings: the school's profile and brand" },
    label: {
      uk: 'Ілюстрація налаштувань школи, вкладка «Профіль і бренд»: назва й контакти, логотип, вибір акцентного кольору з перевіркою контрасту й попередній перегляд застосунку в кольорі школи. Дані вигадані.',
      en: "Illustration of the school settings, Profile and brand tab: name and contacts, logo, an accent colour picker with a contrast check and a preview of the app in the school's colour. Invented data.",
    },
    note: {
      uk: 'Екран уже є в кабінеті: назва й контакти, логотип, акцентний колір з перевіркою контрасту й попередній перегляд.',
      en: 'The screen already exists in the cabinet: name and contacts, logo, accent colour with a contrast check and a preview.',
    },
  },
  today: {
    device: 'phone',
    source: 'docs/design/screens/Today.dc.html',
    title: { uk: 'Застосунок для батьків: «Сьогодні»', en: 'Parent app: Today' },
    label: {
      uk: 'Ілюстрація застосунку для батьків, вкладка «Сьогодні»: перемикач дітей, що зараз і що далі, швидкі дії «Хворіє», «Заберу раніше», «Забере інший», рахунок за місяць і початок дня однією стрічкою. Дані вигадані.',
      en: 'Illustration of the parent app, Today tab: a child switcher, what is on now and next, quick actions Sick, Picking up early, Someone else picks up, the monthly invoice and the start of the day feed. Invented data.',
    },
    note: {
      uk: 'Застосунку для батьків ще немає. Показано верхню частину екрана.',
      en: 'The parent app does not exist yet. The top part of the screen is shown.',
    },
  },
  family: {
    device: 'phone',
    source: 'docs/design/screens/Family.dc.html',
    title: { uk: "Застосунок для батьків: «Сім'я»", en: 'Parent app: Family' },
    label: {
      uk: "Ілюстрація застосунку для батьків, вкладка «Сім'я»: діти, хто може забирати, алергени дитини й перший пункт меню, «Згоди». Дані вигадані.",
      en: "Illustration of the parent app, Family tab: the children, who may pick them up, the child's allergens and the first menu item, Consents. Invented data.",
    },
    note: {
      uk: 'Застосунку для батьків ще немає. Показано верхню частину екрана.',
      en: 'The parent app does not exist yet. The top part of the screen is shown.',
    },
  },
};
