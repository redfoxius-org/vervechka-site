// Mirror of docs/roadmap.md in the product repo (phases, features, statuses).
// Rule: a feature is 'available' only if docs/roadmap.md marks it **done**; unfinished features of
// the current phases are 'in-development' (work under way); everything else is 'planned'. See CONTENT_CLAIMS.md.
import type { Status, Text } from '../i18n/ui';

export interface Feature {
  ref: string; // roadmap row number, e.g. "2.1"
  status: Status;
  title: Text;
}

export interface Phase {
  id: string;
  status: Status;
  title: Text;
  goal: Text;
  onProductPage: boolean;
  features: Feature[];
}

const f = (ref: string, status: Status, uk: string, en: string): Feature => ({ ref, status, title: { uk, en } });

export const phases: Phase[] = [
  {
    id: '0',
    status: 'available',
    title: { uk: 'Фундамент', en: 'Foundation' },
    goal: {
      uk: 'Технічні рішення, каркас репозиторію, CI, міграції й тести бази даних.',
      en: 'Technical decisions, repository skeleton, CI, database migrations and tests.',
    },
    onProductPage: false,
    features: [
      f('0.1', 'available', 'Технічні рішення, зафіксовані письмово (ADR)', 'Technical decisions recorded in writing (ADRs)'),
      f('0.2', 'available', 'Один застосунок у двох режимах: API і фонові задачі', 'One application binary with two modes: API and background worker'),
      f('0.3', 'available', 'Міграції бази даних і тести схеми', 'Database migrations and schema tests'),
      f('0.3b', 'available', 'Двомовність інтерфейсу: українська й англійська', 'Bilingual interface foundation: Ukrainian and English'),
      f('0.4', 'available', 'Контракт API (OpenAPI) і згенеровані клієнти', 'API contract (OpenAPI) and generated clients'),
      f('0.5', 'available', 'Локальне середовище з вигаданими даними, без реальних персональних даних', 'Local environment with invented data, no real personal data'),
      f('0.6', 'available', 'Один образ Docker для всіх шкіл і конвеєр перевірок', 'One Docker image for all schools and a CI pipeline'),
    ],
  },
  {
    id: '1',
    status: 'available',
    title: { uk: 'Ядро платформи', en: 'Platform core' },
    goal: {
      uk: 'Вхід, права доступу, журнал дій, файли, фонові задачі, шифрування, налаштування школи.',
      en: 'Sign-in, permissions, audit log, files, background jobs, encryption, school settings.',
    },
    onProductPage: true,
    features: [
      f('1.1', 'available', 'Вхід персоналу: пароль і обов’язкова двофакторна перевірка, вихід на всіх пристроях', 'Staff sign-in: password and mandatory two-factor check, sign out of all devices'),
      f('1.2', 'available', 'Вхід батьків способами, які вмикає школа: код на пошту, код у SMS, через Telegram (серверна частина)', 'Parent sign-in with the methods the school enables: email code, SMS code, Telegram (server side)'),
      f('1.3', 'available', 'Єдиний шар перевірки прав: батьки бачать лише своїх дітей, вчитель — свої класи', 'One permission layer: guardians see only their own children, teachers only their own classes'),
      f('1.4', 'available', 'Журнал дій (аудит): перегляд картки дитини, зміни захищених даних', 'Audit log: viewing a child’s card, changes to protected data'),
      f('1.5', 'available', 'Файли в приватному сховищі, лише короткочасні підписані посилання', 'Files in private storage, only short-lived signed links'),
      f('1.6', 'available', 'Черга фонових задач без дублювання при повторі', 'Background job queue that does not duplicate work on retry'),
      f('1.7', 'available', 'Шифрування чутливих полів застосунком, з ротацією ключа', 'Application-level encryption of sensitive fields, with key rotation'),
      f('1.8', 'available', 'Налаштування школи: бренд, модулі, способи входу', 'School settings: brand, modules, sign-in methods'),
    ],
  },
  {
    id: '2',
    status: 'in-development',
    title: { uk: 'Люди й структура', en: 'People and structure' },
    goal: {
      uk: 'Школа існує в системі: діти, опікуни, персонал, класи (зокрема класи-комплекти), зарахування, згоди.',
      en: 'The school exists in the system: pupils, guardians, staff, classes (including combined classes), enrollment, consents.',
    },
    onProductPage: true,
    features: [
      f('2.1', 'available', 'Картка дитини й опікуни: права (застосунок, забирання, рахунки, судові обмеження), архів замість видалення, шифрування контактів на вибір школи', 'Pupil card and guardians: permissions (app, pickup, invoices, court restrictions), archiving instead of deletion, contact encryption if the school chooses it'),
      f('2.2', 'available', 'Довірені особи, які можуть забирати дитину, і особи, яким забирати заборонено (судові обмеження; опікуни їх не бачать)', 'Trusted persons who may pick up a child, and forbidden persons (court restrictions; guardians never see them)'),
      f('2.3', 'available', 'Персонал і ролі (власник, адміністратор, вчитель), запрошення', 'Staff and roles (owner, administrator, teacher), invitations'),
      f('2.4', 'available', 'Навчальний рік, семестри, підрозділи, класи-комплекти', 'School year, terms, divisions, combined classes'),
      f('2.5', 'available', 'Зарахування зі статусами', 'Enrollment with statuses'),
      f('2.6', 'available', 'Згоди й документи школи з версіями; паперові згоди зі сканом', 'Consents and school documents with versions; paper consents with a scan'),
      f('2.7', 'available', 'Харчові, медичні нотатки й алергени (закритий список із 14 кодів): шифрується вся нотатка, доступ за роллю, версії, запис у журнал при кожному читанні', 'Dietary and medical notes and allergens (closed list of 14 codes): the whole note is encrypted, role-based access, versions, every read is written to the audit log'),
      f('2.8', 'in-development', 'Вебкабінет персоналу: вхід, навігація за роллю, списки й картки лише для читання вже є; форми створення й редагування ще в розробці', 'Staff web cabinet: sign-in, role-based navigation and read-only lists and cards exist; forms to create and edit are still in development'),
      f('2.9', 'in-development', 'Імпорт дітей, опікунів і класів з CSV: серверна частина є (пробний запуск, усе або нічого, UTF-8 і Windows-1251, без дублів при повторі); екран імпорту ще в розробці', 'Import of pupils, guardians and classes from CSV: the server side exists (dry run, all-or-nothing, UTF-8 and Windows-1251, no duplicates on repeat); the import screen is still in development'),
      f('2.10', 'planned', 'Екрани налаштувань школи у вебкабінеті', 'School settings screens in the web cabinet'),
    ],
  },
  {
    id: '3',
    status: 'in-development',
    title: { uk: 'Шкільний день', en: 'School day' },
    goal: {
      uk: 'Відповідь на питання «що зараз із моєю дитиною»: розклад, відвідуваність, забирання, режим дня, меню.',
      en: 'An answer to "what is happening with my child right now": timetable, attendance, pickup, daily routine, menu.',
    },
    onProductPage: true,
    features: [
      f('3.1', 'available', 'Предмети, навчальний план, розклад дзвінків і шаблон тижневого розкладу (серверна частина)', 'Subjects, curriculum, bell schedules and the weekly template timetable (server side)'),
      f('3.2', 'planned', 'Уроки дня, заміни й скасування; у класі-комплекті дитина бачить лише свій рік навчання', 'Lessons of the day, substitutions and cancellations; in a combined class a pupil sees only their own year'),
      f('3.3', 'in-development', 'Календар школи: вихідні, канікули, скорочені дні', 'School calendar: days off, holidays, shortened days'),
      f('3.4', 'planned', 'Відвідуваність; «хворіє» від батьків', 'Attendance; "sick" reported by parents'),
      f('3.5', 'planned', 'Хто й коли забрав дитину, з перевіркою довірених осіб і судових обмежень', 'Who picked up a child and when, checked against trusted persons and court restrictions'),
      f('3.6', 'planned', 'Режим дня для шкільних і табірних днів', 'Daily routine for school and camp days'),
      f('3.7', 'planned', 'Меню на день і тиждень з підсвіткою алергенів дитини', 'Menu for the day and week, highlighting the pupil’s allergens'),
      f('3.8', 'planned', 'Стрічка дня й «зараз і далі»', 'Day feed and "now and next"'),
      f('3.9', 'planned', 'Екрани вчителя: розклад, відмітки відвідуваності, список забирання', 'Teacher screens: timetable, attendance marking, pickup list'),
      f('3.10', 'planned', 'Кнопка «Діти в укритті» / «Відбій» для підрозділу, з записом у журнал', '"Children in shelter" / "All clear" button per division, logged in the audit log'),
    ],
  },
  {
    id: '4',
    status: 'planned',
    title: { uk: 'Застосунок для батьків', en: 'Parent app' },
    goal: {
      uk: 'Мобільний застосунок для iOS і Android: «як моя дитина просто зараз».',
      en: 'A mobile app for iOS and Android: "how is my child doing right now".',
    },
    onProductPage: true,
    features: [
      f('4.1', 'planned', 'Застосунок з п’ятьма вкладками й перемикачем дітей', 'App with five tabs and a child switcher'),
      f('4.2', 'planned', 'Вхід способами школи, повторний вхід біометрією або PIN', 'Sign-in with the school’s methods, re-entry with biometrics or PIN'),
      f('4.3', 'planned', 'Вкладка «Сьогодні»: зараз і далі, меню з алергенами, «хворіє», «заберу раніше»', '"Today" tab: now and next, menu with allergens, "sick", "will pick up earlier"'),
      f('4.4', 'planned', 'Вкладка «Сім’я»: діти й опікуни, довірені особи, харчові обмеження, згоди, документи школи', '"Family" tab: children and guardians, trusted persons, dietary restrictions, consents, school documents'),
      f('4.5', 'planned', 'Розклад на будь-який день, календар відвідуваності, меню на тиждень', 'Timetable for any day, attendance calendar, weekly menu'),
      f('4.6', 'planned', 'Сумісність старої версії застосунку з новим сервером', 'Old app versions keep working with a newer server'),
      f('4.7', 'planned', 'Тестові збірки й політика конфіденційності застосунку', 'Test builds and the app privacy policy'),
    ],
  },
  {
    id: '5',
    status: 'planned',
    title: { uk: 'Комунікація й Telegram', en: 'Communication and Telegram' },
    goal: {
      uk: 'Школа не розсилає повідомлення вручну; фото з класного чату самі складаються в альбом дня.',
      en: 'The school stops sending messages by hand; photos from the class chat become the day’s album.',
    },
    onProductPage: true,
    features: [
      f('5.1', 'planned', 'Оголошення для класу чи школи з позначкою прочитання', 'Announcements for a class or the school with read receipts'),
      f('5.2', 'planned', 'Push-сповіщення з налаштуваннями за замовчуванням', 'Push notifications with default settings'),
      f('5.3', 'planned', 'Фотоальбоми за днями, фільтр «з моєю дитиною»; без згоди фото не бачать інші родини', 'Photo albums by day, "with my child" filter; without consent other families do not see a photo'),
      f('5.4', 'planned', 'Вкладка «Фото» в застосунку', '"Photos" tab in the app'),
      f('5.5', 'planned', 'Бот школи публікує оголошення й альбоми в Telegram', 'School bot publishes announcements and albums to Telegram'),
      f('5.6', 'planned', 'Фото з чату класу автоматично стають альбомом дня', 'Photos from the class chat automatically become the day’s album'),
      f('5.7', 'planned', 'Особисті сповіщення в Telegram замість SMS', 'Personal notifications in Telegram instead of SMS'),
      f('5.8', 'planned', 'Фото дитини йде в Telegram лише за окремою згодою', 'A child’s photo goes to Telegram only with a separate consent'),
      f('5.9', 'planned', 'Сповіщення про укриття й відбій опікунам дітей цього підрозділу', 'Shelter and all-clear notifications to guardians of children in that division'),
    ],
  },
  {
    id: '6',
    status: 'planned',
    title: { uk: 'Оплата за реквізитами', en: 'Payments by bank details' },
    goal: {
      uk: 'Адміністратор не звіряє оплати вручну. Платформа не тримає грошей: батьки платять на рахунок школи за реквізитами.',
      en: 'The administrator stops reconciling payments by hand. The platform holds no money: parents pay the school’s account by bank details.',
    },
    onProductPage: true,
    features: [
      f('6.1', 'planned', 'Послуги, ціни, знижки', 'Services, prices, discounts'),
      f('6.2', 'planned', 'Шаблони реквізитів для кількох отримувачів', 'Bank details templates for several recipients'),
      f('6.3', 'planned', 'Договори', 'Contracts'),
      f('6.4', 'planned', 'Щомісячні рахунки без подвійного виставлення', 'Monthly invoices without double billing'),
      f('6.5', 'planned', '«Я оплатив» з квитанцією, підтвердження школою', '"I paid" with a receipt, confirmed by the school'),
      f('6.6', 'planned', 'Ручне зарахування; один переказ закриває кілька рахунків', 'Manual payment entry; one transfer can settle several invoices'),
      f('6.7', 'planned', 'Надсилання рахунків і нагадувань', 'Sending invoices and reminders'),
      f('6.8', 'planned', 'QR-код для банківського застосунку (формат ще перевіряється)', 'QR code for the banking app (format still being verified)'),
      f('6.9', 'planned', 'Вкладка «Оплати» в застосунку', '"Payments" tab in the app'),
      f('6.10', 'planned', 'Довідка для податкової знижки', 'Statement for the tax deduction'),
      f('6.11', 'planned', 'Фінансові екрани адміністратора', 'Administrator finance screens'),
    ],
  },
  {
    id: '7',
    status: 'planned',
    title: { uk: 'Оцінювання НУШ і Свідоцтво досягнень', en: 'NUS assessment and Certificate of Achievement' },
    goal: {
      uk: 'Вчителі оцінюють за НУШ, батьки бачать поступ без таблиці балів, наприкінці року — Свідоцтво досягнень.',
      en: 'Teachers assess under the New Ukrainian School (NUS) approach, parents see progress without a points table, and at year end there is a Certificate of Achievement.',
    },
    onProductPage: true,
    features: [
      f('7.1', 'planned', 'Шкали за роком навчання: 1–2 клас — словесне оцінювання, 3–4 клас — чотири рівні', 'Scales by year: grades 1–2 verbal assessment, grades 3–4 four levels'),
      f('7.2', 'planned', 'Формувальне оцінювання з коментарем', 'Formative assessment with a comment'),
      f('7.3', 'planned', 'Підсумкове оцінювання й наскрізні вміння', 'Summative assessment and cross-cutting skills'),
      f('7.4', 'planned', 'Домашні завдання', 'Homework'),
      f('7.5', 'planned', 'Свідоцтво досягнень у PDF, незмінне після видачі', 'Certificate of Achievement as a PDF, unchanged after issue'),
      f('7.6', 'planned', 'Вкладка «Навчання» в застосунку', '"Learning" tab in the app'),
      f('7.7', 'planned', 'Журнал вчителя', 'Teacher’s gradebook'),
    ],
  },
  {
    id: '8',
    status: 'planned',
    title: { uk: 'Готовність до пілоту', en: 'Pilot readiness' },
    goal: {
      uk: 'Усе, що потрібно, щоб безпечно зберігати дані дітей реальної школи.',
      en: 'Everything needed to hold the data of a real school’s children safely.',
    },
    onProductPage: true,
    features: [
      f('8.1', 'planned', 'Резервні копії в сховищі іншого провайдера; ціль — втрата не більше 5 хвилин даних, відновлення школи за годину', 'Backups to another provider’s storage; target: at most 5 minutes of data loss, a school restored within an hour'),
      f('8.2', 'planned', 'Регулярна перевірка відновлення з копії', 'Regular restore drills from a backup'),
      f('8.3', 'planned', 'Моніторинг і сповіщення про збої', 'Monitoring and failure alerts'),
      f('8.4', 'planned', 'Перевірка безпеки всього коду', 'Security review of all code'),
      f('8.5', 'planned', 'Створення інстансу школи одним скриптом', 'Creating a school instance with one script'),
      f('8.6', 'planned', 'Оновлення хвилями, не наприкінці семестру', 'Updates in waves, never at the end of a term'),
      f('8.7', 'planned', 'Повний експорт даних школи, якщо вона йде', 'Full export of a school’s data if it leaves'),
      f('8.8', 'planned', 'Публікація застосунку в App Store і Google Play', 'Publishing the app to the App Store and Google Play'),
      f('8.9', 'planned', 'Інструкція запуску пілоту', 'Pilot launch runbook'),
    ],
  },
  {
    id: '9',
    status: 'planned',
    title: { uk: 'Пілот: семестр', en: 'Pilot: one term' },
    goal: {
      uk: 'Школа працює на платформі один семестр, ми щотижня збираємо відгуки.',
      en: 'A school runs on the platform for a term; we collect feedback every week.',
    },
    onProductPage: false,
    features: [],
  },
  {
    id: 'S2',
    status: 'planned',
    title: { uk: 'Етап 2 (після пілоту)', en: 'Stage 2 (after the pilot)' },
    goal: {
      uk: 'Орієнтовний порядок, уточнюється після пілоту.',
      en: 'Tentative order, refined after the pilot.',
    },
    onProductPage: true,
    features: [
      f('10', 'planned', 'Канікулярний табір', 'Holiday camp'),
      f('11', 'planned', 'Повна панель керування школами', 'Full control plane for schools'),
      f('12', 'planned', 'Оплата карткою через платіжних провайдерів школи', 'Card payments via the school’s own payment provider'),
      f('13', 'planned', 'Google Диск школи: оригінали фото й додаткова копія', 'School Google Drive: original photos and an extra backup copy'),
      f('14', 'planned', 'CRM вступу', 'Enrollment CRM'),
      f('15', 'planned', 'Замовлення харчування', 'Meal ordering'),
      f('16', 'planned', 'Гуртки й група подовженого дня', 'Clubs and extended-day group'),
      f('17', 'planned', 'Чати в застосунку', 'In-app chats'),
      f('18', 'planned', 'Портфоліо дитини', 'Pupil portfolio'),
      f('19', 'planned', 'Застосунок під брендом школи (white-label)', 'App under the school’s own brand (white-label)'),
    ],
  },
  {
    id: 'S3',
    status: 'planned',
    title: { uk: 'Етап 3 (напрям)', en: 'Stage 3 (direction)' },
    goal: {
      uk: 'Експорт для АІКОМ і бухгалтерії, кадри, аналітика для власника, садочок, центр розвитку, 5–12 класи.',
      en: 'Export for AIKOM and accounting, HR, owner analytics, kindergarten, development center, grades 5–12.',
    },
    onProductPage: false,
    features: [],
  },
];
