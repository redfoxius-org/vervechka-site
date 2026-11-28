// Product roadmap by quarter, in product language: what the product will be able to do, not how far the code is.
// No per-feature statuses, counters or engineering phase numbers on purpose (owner decision 2026-11-28: they say
// nothing to a school, a parent or an investor). The one honest status is site-wide: in development, no school uses it.
// Quarter dates are the owner's plan (targets, not promises). See CONTENT_CLAIMS.md.
import type { Text } from '../i18n/ui';

export interface Area {
  id: string;
  quarter: string; // Quarter.id
  title: Text;
  goal: Text;
  onProductPage: boolean;
  features: Text[];
}

export interface Quarter {
  id: string;
  when: Text;
  title: Text;
  goal: Text;
}

const t = (uk: string, en: string): Text => ({ uk, en });

export const quarters: Quarter[] = [
  {
    id: 'q4-26',
    when: t('IV квартал 2026', 'Q4 2026'),
    title: t('Розробка MVP', 'MVP development'),
    goal: t(
      'MVP — це базовий функціонал початкової школи (діти й родини, шкільний день, оцінювання за НУШ, оплати за реквізитами) та базовий застосунок для батьків. Із цим школа вже може жити без паперів і розсилок у месенджерах.',
      'The MVP is the basic functionality of a primary school (children and families, the school day, NUS assessment, payments by bank details) plus a basic app for parents. With it a school can run without paper and messenger broadcasts.',
    ),
  },
  {
    id: 'q1-27',
    when: t('I квартал 2027', 'Q1 2027'),
    title: t('Пошук пілотних шкіл і старт пілоту', 'Finding pilot schools and starting the pilot'),
    goal: t(
      'Шукаємо школи, які готові спробувати Вервечку, доводимо надійність і безпеку до рівня, при якому не страшно довірити дані дітей реальної школи, і запускаємо перший пілот.',
      'We look for schools ready to try Vervechka, bring reliability and safety to the level where a real school’s children data can be trusted to it, and start the first pilot.',
    ),
  },
  {
    id: 'q2-q4-27',
    when: t('II–IV квартали 2027', 'Q2–Q4 2027'),
    title: t('Валідація й розвиток за результатами пілотів', 'Validation and growth based on pilot results'),
    goal: t(
      'Школи працюють на платформі, ми перевіряємо, що справді допомагає, збираємо відгуки, доводимо продукт і вирішуємо стратегію розвитку проєкту. Перелік нижче орієнтовний; порядок залежить від пілотів.',
      'Schools run on the platform, we check what really helps, collect feedback, refine the product and decide the strategy of the project. The list below is tentative; the order depends on the pilots.',
    ),
  },
];

export const areas: Area[] = [
  {
    id: 'people',
    quarter: 'q4-26',
    title: t('Школа, діти й родини', 'School, children and families'),
    goal: t('Уся школа в одному місці замість таблиць і паперових списків.', 'The whole school in one place instead of spreadsheets and paper lists.'),
    onProductPage: true,
    features: [
      t('Картки дітей і опікунів з правами: хто бачить, хто забирає, хто отримує рахунки', 'Pupil and guardian cards with permissions: who sees, who picks up, who gets invoices'),
      t('Довірені особи для забирання; особи, яким забирати заборонено (за рішенням суду)', 'Trusted persons for pickup; forbidden persons (court restrictions)'),
      t('Класи, зокрема класи-комплекти, навчальний рік, зарахування', 'Classes, including combined classes, school year, enrollment'),
      t('Імпорт дітей і опікунів із таблиці', 'Importing children and guardians from a spreadsheet'),
      t('Згоди й документи школи з версіями, у тому числі паперові зі сканом', 'Consents and school documents with versions, including paper ones with a scan'),
      t('Харчові й медичні нотатки та алергени дитини', 'Dietary and medical notes and allergens'),
      t('Вебкабінет для адміністрації та вчителів, налаштування школи під свій бренд', 'A web cabinet for administrators and teachers; school settings and branding'),
    ],
  },
  {
    id: 'school-day',
    quarter: 'q4-26',
    title: t('Шкільний день', 'School day'),
    goal: t('Відповідь на питання «що зараз із моєю дитиною».', 'An answer to "what is happening with my child right now".'),
    onProductPage: true,
    features: [
      t('Розклад уроків, заміни й скасування; у класі-комплекті дитина бачить лише свій рік навчання', 'Timetable, substitutions and cancellations; in a combined class a child sees only their own year'),
      t('Календар школи: вихідні, канікули, скорочені дні', 'School calendar: days off, holidays, shortened days'),
      t('Відвідуваність; батьки повідомляють «хворіє»', 'Attendance; parents report "sick"'),
      t('Хто й коли забрав дитину, з перевіркою довірених осіб і судових обмежень', 'Who picked up a child and when, checked against trusted persons and court restrictions'),
      t('Режим дня, меню з підсвіткою алергенів дитини', 'Daily routine, menu highlighting the child’s allergens'),
      t('Кнопка «Діти в укритті» / «Відбій» із сповіщенням батьків', '"Children in shelter" / "All clear" button that notifies parents'),
    ],
  },
  {
    id: 'parent-app',
    quarter: 'q4-26',
    title: t('Застосунок для батьків', 'Parent app'),
    goal: t('Мобільний застосунок для iOS і Android: «як моя дитина просто зараз».', 'A mobile app for iOS and Android: "how is my child doing right now".'),
    onProductPage: true,
    features: [
      t('Вхід способом, який обрала школа: код на пошту, SMS чи Telegram; повторний вхід біометрією або PIN', 'Sign-in with the method the school chose: email code, SMS or Telegram; re-entry with biometrics or PIN'),
      t('Екран «Сьогодні»: зараз і далі, меню, «хворіє», «заберу раніше»', '"Today" screen: now and next, menu, "sick", "will pick up earlier"'),
      t('Розклад на будь-який день, календар відвідуваності, меню на тиждень', 'Timetable for any day, attendance calendar, weekly menu'),
      t('Родина: діти, довірені особи, харчові обмеження, згоди, документи школи', 'Family: children, trusted persons, dietary restrictions, consents, school documents'),
      t('Кілька дітей в одному застосунку', 'Several children in one app'),
    ],
  },
  {
    id: 'communication',
    quarter: 'q4-26',
    title: t('Оголошення, фото й Telegram', 'Announcements, photos and Telegram'),
    goal: t('Школа не розсилає повідомлення вручну; фото з класного чату самі складаються в альбом дня.', 'The school stops sending messages by hand; photos from the class chat become the day’s album.'),
    onProductPage: true,
    features: [
      t('Оголошення для класу чи всієї школи з позначкою прочитання та push-сповіщеннями', 'Announcements for a class or the school with read receipts and push notifications'),
      t('Фотоальбоми за днями й фільтр «з моєю дитиною»; без згоди фото не бачать інші родини', 'Photo albums by day and a "with my child" filter; without consent other families do not see a photo'),
      t('Бот школи в Telegram: оголошення, альбоми, особисті сповіщення замість SMS', 'The school’s Telegram bot: announcements, albums, personal notifications instead of SMS'),
    ],
  },
  {
    id: 'payments',
    quarter: 'q4-26',
    title: t('Оплата за реквізитами', 'Payments by bank details'),
    goal: t('Адміністратор не звіряє оплати вручну. Платформа не тримає грошей: батьки платять на рахунок школи.', 'The administrator stops reconciling payments by hand. The platform holds no money: parents pay the school’s account.'),
    onProductPage: true,
    features: [
      t('Послуги, ціни, знижки, договори', 'Services, prices, discounts, contracts'),
      t('Щомісячні рахунки без подвійного виставлення, нагадування батькам', 'Monthly invoices without double billing, reminders to parents'),
      t('«Я оплатив» з квитанцією й підтвердженням школою', '"I paid" with a receipt, confirmed by the school'),
      t('Довідка для податкової знижки', 'Statement for the tax deduction'),
      t('Фінансові екрани адміністратора', 'Administrator finance screens'),
    ],
  },
  {
    id: 'assessment',
    quarter: 'q4-26',
    title: t('Оцінювання НУШ і Свідоцтво досягнень', 'NUS assessment and Certificate of Achievement'),
    goal: t('Вчителі оцінюють за НУШ, батьки бачать поступ без таблиці балів, наприкінці року — Свідоцтво досягнень.', 'Teachers assess under the New Ukrainian School (NUS) approach, parents see progress without a points table, and at year end there is a Certificate of Achievement.'),
    onProductPage: true,
    features: [
      t('Словесне оцінювання в 1–2 класах і чотири рівні в 3–4 класах', 'Verbal assessment in grades 1–2 and four levels in grades 3–4'),
      t('Формувальне й підсумкове оцінювання, наскрізні вміння, домашні завдання', 'Formative and summative assessment, cross-cutting skills, homework'),
      t('Журнал вчителя', 'Teacher’s gradebook'),
      t('Свідоцтво досягнень у PDF, незмінне після видачі', 'Certificate of Achievement as a PDF, unchanged after issue'),
    ],
  },
  {
    id: 'reliability',
    quarter: 'q1-27',
    title: t('Надійність і безпека для пілоту', 'Safety and reliability for the pilot'),
    goal: t('Усе, що потрібно, щоб безпечно зберігати дані дітей реальної школи.', 'Everything needed to hold the data of a real school’s children safely.'),
    onProductPage: true,
    features: [
      t('Резервні копії в іншому місці й регулярна перевірка відновлення', 'Backups stored elsewhere and regular restore drills'),
      t('Моніторинг і сповіщення про збої', 'Monitoring and failure alerts'),
      t('Незалежна перевірка безпеки', 'A security review'),
      t('Швидке підключення нової школи; повний експорт даних, якщо школа йде', 'Quick onboarding of a new school; a full data export if a school leaves'),
      t('Застосунок в App Store і Google Play', 'The app in the App Store and Google Play'),
    ],
  },
  {
    id: 'later',
    quarter: 'q2-q4-27',
    title: t('Далі (за результатами пілотів)', 'Next (based on the pilots)'),
    goal: t('Орієнтовний перелік; що з цього робити першим, покажуть школи.', 'A tentative list; the schools will show what to do first.'),
    onProductPage: false,
    features: [
      t('Канікулярний табір', 'Holiday camp'),
      t('Оплата карткою через платіжного провайдера школи', 'Card payments via the school’s payment provider'),
      t('Гуртки й група подовженого дня, замовлення харчування', 'Clubs and extended-day group, meal ordering'),
      t('Чати в застосунку, портфоліо дитини', 'In-app chats, pupil portfolio'),
      t('Вступна кампанія (CRM вступу)', 'Enrollment campaign (admissions CRM)'),
      t('Застосунок під брендом школи', 'App under the school’s own brand'),
      t('Подальший напрям: експорт для бухгалтерії, аналітика для власника, садочок, 5–12 класи', 'Longer term: accounting export, owner analytics, kindergarten, grades 5–12'),
    ],
  },
];
