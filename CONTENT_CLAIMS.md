# Content claims register

Every factual claim the site makes, with its status label, its source in the product repo (`vervechka`, synced at origin `main` commit `7cd5281`, 2026-11-28; the local `main` of the product repo lags behind origin) and a column for the owner. Review before publishing; a claim that cannot be confirmed is removed from the site, not softened.

Status labels: **available** = marked **done** in `docs/roadmap.md`, or implemented and merged on product `main` while the roadmap row only awaits the mark (school calendar; implemented and merged; no school uses it, the pilot has not started); **in development** = unfinished work under way (school day: some rows done, the rest not started), work has started; **planned** = later phase or stage; **design** = a property of the architecture or schema, not a shipped feature; **site** = a fact about this website itself.

Pages: H = home, P = product, SC = screens, S = for schools, PA = for parents, R = roadmap, I = investors, C = contacts, L = license. Feature statuses live in `src/data/roadmap.ts` (P, R, PA). The site shows a product roadmap by quarter (owner's plan, shown as targets, not promises); engineering phase numbers and row numbers are internal and not shown, they are used only in the Source column below.

## Top 10 to verify first

1. #2 "No school runs on the platform yet; the pilot is targeted for Q1 2027 (plan)."
2. #6 / #37 Label semantics: "available now" means implemented in code, not usable by a school. Is the English label "Available now" acceptable, or should it be "Built"?
3. #40 / #72 / #75 Rows 2.1-2.10 and 3.1, 3.3 shown as "available" (all marked done in the roadmap; 3.1 and 3.3 server side only, the cabinet has no school-day screens); 3.2, 3.4, 3.5 are in specs only and shown as planned: confirm. #43 Quarter dates are the owner's plan.
4. #23 Pricing model "base + options, free at the start for pilot schools", and "no prices yet".
5. #44 / #45 Roles of school (controller) and platform (processor), "templates from the platform are being prepared".
6. #27 / #35 What is encrypted today vs later: diet/allergy/medical notes now (whole note); guardian tax number still "in development".
7. #57 Audit log readable by owner and administrator; #58 audit log has no retention period.
8. #61–#64 "What the platform does not do" list (especially Telegram group messages and photo consent, both planned).
9. #55 Diet/allergy notes: audience by account role (example teacher, extended-day carer), class staff read-only; known limit B-26 (audience matched to account roles, not `class_staff.role`).
10. #15 "Each school's files sit under their own prefix with separate access keys" (ops procedure, not yet exercised on a real provider).

## Register

| # | Claim | Page | Status | Source (product repo) | Owner to verify |
| --- | --- | --- | --- | --- | --- |
| 1 | Vervechka is a platform for small private schools; starts with primary school (grades 1–4) | H, S | design | `docs/architecture.md` intro; "Expansion to the whole school…" ("Right now we are building only the primary school") | [ ] |
| 2 | Vervechka is in development; no school runs on it; the pilot is targeted for Q1 2027 (plan, not a promise) | H, I, S, PA, R | planned | owner statement 2026-11-27; `docs/roadmap.md` Overview table (phases 8, 9 not done) | [ ] |
| 3 | Modules: children and families, classes, consents; later school day, payments, NUS assessment, parent app | H | mixed | `docs/roadmap.md` phases 2–7 | [ ] |
| 4 | One school = one database with its own DB user; no shared database | H, S, PA | design | `docs/architecture.md` "Deployment model", "Security… Data" bullet 1; `CLAUDE.md` "Database" | [ ] |
| 5 | Guardians see only their own children, teachers only their own classes | H, P, PA | available | `docs/roadmap.md` 1.3 (done); `docs/uk/specs/p1-policy-layer.md` | [ ] |
| 6 | Viewing a child's card and changes to protected data are written to an audit log | H, P, PA | available | `docs/roadmap.md` 1.4; `docs/uk/specs/p1-audit-log.md` | [ ] |
| 7 | Sensitive fields are encrypted by the application; key in instance secrets, not in the DB | H, P, PA | available | `docs/roadmap.md` 1.7; `docs/architecture.md` "Principles built into the schema" | [ ] |
| 8 | No real data in code, tests and demos; invented only | H, PA | design (rule) | `CLAUDE.md` "Children's data and security"; `docs/roadmap.md` 0.5 | [ ] |
| 9 | The platform holds no money; parents pay the school's account by bank details | H, PA, R | planned | `docs/architecture.md` "Technology stack" note on payments; `docs/roadmap.md` phase 6 goal | [ ] |
| 10 | Three parts: school server, staff web cabinet, parent mobile app (iOS, Android) | P | design | `docs/architecture.md` "Overall architecture", stack table | [ ] |
| 11 | Staff cabinet is built in code (sign-in, role navigation, lists and cards, create/edit forms, CSV import screen, school settings screens, audit log viewer), no school uses it yet; the demo is not live; app is planned | P | available / planned | `docs/roadmap.md` 2.8, 2.9, 2.10 (done); phase 4 | [ ] |
| 12 | Interface is bilingual uk/en; Certificate, invoices and statements are Ukrainian only | P | available (foundation) | `docs/roadmap.md` 0.3b; `docs/i18n/uk.md` "Юридичні тексти" | [ ] |
| 13 | Designed for an institution without an IT person; setup should take an hour, not a week | S | design (goal) | `docs/architecture.md` "Starting assumptions" last paragraph | [ ] |
| 14 | No "school id" column: the database is the school | S | design | `docs/architecture.md` "Deployment model" last paragraph | [ ] |
| 15 | One image, one code version for all schools; differences only in settings/modules; files under the school's prefix with separate access keys | S | design / available (1.5) | `docs/architecture.md` rule 1; `docs/ops/files.md` "Ключі доступу" | [ ] |
| 16 | Full export of a school's data on exit | S, PA | planned | `docs/roadmap.md` 8.7 | [ ] |
| 17 | School settings: colour, logo, name, language, modules, sign-in methods; brand is always the school's | S, P | available | `docs/roadmap.md` 1.8; `CLAUDE.md` "Working with SDD" (UI brand is the school's) | [ ] |
| 18 | Backward-compatible DB changes; updates in waves (demo school, some, rest); not during lessons or the last days of term | S | design; automation planned | `docs/architecture.md` "Version update"; `docs/roadmap.md` 8.6 | [ ] |
| 19 | Divisions (primary, kindergarten, development center); schema not tied to grades 1–4 | S | design | `docs/architecture.md` "Expansion…" | [ ] |
| 20 | Year belongs to the child; in a combined class each child gets own scale and Certificate | S | available (structure 2.4); scales planned (7.1) | `docs/architecture.md` "Combined classes"; `docs/roadmap.md` 2.4, 7.1 | [ ] |
| 21 | Staff sign-in: email + password + mandatory authenticator code; sign out of all devices | S, P | available | `docs/roadmap.md` 1.1 | [ ] |
| 22 | Parent sign-in methods chosen by the school: email (default), SMS, Telegram; server side ready, screens in phase 4; SMS is a paid school option via its own gateway | S, P | available (server) | `docs/roadmap.md` 1.2, 1.8, 4.2 | [ ] |
| 23 | Pricing: base package + options; free at the start until useful for pilot schools; no prices yet | S | design (decided model) | `docs/architecture.md` "Roadmap" → "Pricing model", open question 1 ticked | [ ] publish at all? |
| 24 | Pilot terms in writing: duration, feedback, right to take data, start of payment | S | design | `docs/architecture.md` "Pricing model" last sentence | [ ] |
| 25 | Files: private storage, short-lived signed links, no public links | PA, P | available | `docs/roadmap.md` 1.5; `docs/ops/files.md` "Бакет" | [ ] |
| 26 | TLS for connections | PA | design | `docs/architecture.md` "Security… Data" bullet 2 | [ ] |
| 27 | Encrypted today: e.g. staff sign-in secrets, school service keys | PA | available | `db/migrations/0001…sql` (`totp_secret_enc`, `sms_gateway_config.secret_enc`); `docs/roadmap.md` 1.7 | [ ] |
| 28 | Guardian contacts can be stored encrypted if the school chooses; search/sign-in via blind index | PA | available | `docs/uk/specs/p2-pupils-guardians.md` "Що і навіщо"; `docs/specs/README.md` p1-school-settings v0.4 | [ ] |
| 29 | Backups to another provider's storage, restore checks; target ≤ 5 min loss, restore ≤ 1 h | PA, P | planned | `docs/roadmap.md` 8.1, 8.2 | [ ] |
| 30 | Child data stored: surname, first name, birth date, division, class, year | PA | available | `db/migrations/0001…sql` `pupil`, `enrollment`; `docs/roadmap.md` 2.1, 2.5 | [ ] |
| 31 | Guardian data: name, phone, email, address; link permissions incl. court restrictions | PA | available | `0001…sql` `guardian`, `pupil_guardian`; `docs/roadmap.md` 2.1 | [ ] |
| 32 | Contact change history with old value encrypted | PA | available | `docs/uk/specs/p2-pupils-guardians.md`; `db/migrations/0013_pupils_guardians.sql` | [ ] |
| 33 | Consents: separate per purpose (personal data, photos inside, Telegram, public, medical); tied to the text version; paper with scan; withdrawal immediate; any refusal wins; re-ask on material change | PA | available (API); screens 4.4 | `docs/specs/p2-legal-consents/01-spec.md` glossary and scenarios; `docs/roadmap.md` 2.6 | [ ] |
| 34 | Trusted pickup persons (name, relationship, phone and document note sealed, photo, validity dates) added by school or guardian; forbidden persons (court restrictions) only by owner/admin, never shown to guardians; records revoked, not deleted | PA, P | available | `docs/roadmap.md` 2.2 (done); `docs/uk/specs/p2-pickup-persons.md` "Що і навіщо" | [ ] |
| 35 | Diet, medical and allergy notes: whole note encrypted, closed list of 14 allergen codes, version history, audited read and change (incl. guardians' reads), write needs `medical_info` consent | PA, P | available | `docs/roadmap.md` 2.7 (done); `docs/uk/specs/p2-sensitive-notes.md` "Що і навіщо", "Рішення і відхилення" | [ ] |
| 36 | Guardian tax number stored encrypted (contracts, statements) | PA | in development (column exists) | `0001…sql` `guardian.rnokpp_enc`; `docs/architecture.md` principles | [ ] |
| 37 | Status legend wording | all status pages | site | this repo `src/i18n/ui.ts` | [ ] |
| 38 | Foundation (engineering phase 0) is deliberately not shown on the site | R | site | `docs/roadmap.md` phase 0 (internal) | [ ] |
| 39 | Area "Sign-in and data protection" (phase 1: 1.1–1.8) available | R, P | available | `docs/roadmap.md` phase 1 | [ ] |
| 40 | Area "School and people" (phase 2): 2.1–2.10 all available (done in roadmap) | R, P, PA | available | `docs/roadmap.md` phase 2; `docs/specs/README.md` | [ ] |
| 41 | Areas "School day" (3.1, 3.3 available on the server, rest planned), "Parent app", "Announcements, photos and Telegram", "Payments by bank details", "Assessment and Certificate" (phases 4–7) and "Safety and reliability" (phase 8): features and goals, all planned | R, P, PA | mixed / planned | `docs/roadmap.md` phases 3–8; `docs/specs/README.md` rows p3-subjects-timetable, p3-school-calendar | [ ] |
| 42 | Stage 2 list (camp, control plane, card payments, Google Drive, CRM, meals, clubs, chats, portfolio, white-label) and stage 3 direction | R, P | planned | `docs/roadmap.md` "Stage 2", "Stage 3" | [ ] |
| 43 | Quarters: Q4 2026 MVP development; Q1 2027 searching for and starting pilot schools (safety and reliability); Q2–Q4 2027 improving the product based on pilot results (stage 2 list). Targets, not promises; the product roadmap deliberately has no calendar dates, so these are the owner's plan | R, H, I | planned (owner plan) | owner statement 2026-11-27; `docs/roadmap.md` size note (no dates), phases 8–9, "Stage 2" | [ ] confirm quarters |
| 44 | School is responsible for the data (controller), publishes its own policy, rules, consents; platform processes on its behalf (processor) | PA | design | `docs/architecture.md` "Legal layers" table | [ ] legal wording |
| 45 | Document texts are prepared by each school; platform templates are still being prepared | PA | planned | `docs/architecture.md` "Legal layers" (content agreed later); `docs/roadmap.md` open questions | [ ] |
| 46 | Parents should contact the school first about their data | PA, C | site (advice) | follows from #44 | [ ] |
| 47 | The app holds no data about other children and no internal staff notes | PA | design | `docs/architecture.md` "Default notifications" paragraph last sentence | [ ] |
| 48 | Privileged roles (owner, admin) granted only by the owner | PA | available | `docs/uk/specs/p2-staff-roles.md` | [ ] |
| 49 | Roles owner, administrator, teacher; invitations | P | available | `docs/roadmap.md` 2.3 | [ ] |
| 50 | School year, terms, divisions, combined classes | P | available | `docs/roadmap.md` 2.4 | [ ] |
| 51 | Enrollment with statuses | P | available | `docs/roadmap.md` 2.5 | [ ] |
| 52 | Background job queue without duplicates on retry | P | available | `docs/roadmap.md` 1.6, phase 1 exit criteria | [ ] |
| 53 | Every permission rule has tests | PA (FAQ) | available | `docs/roadmap.md` 1.3 ("negative tests for every rule") | [ ] |
| 54 | Withdrawal can be per purpose (Telegram, public) while keeping photos inside | PA (FAQ) | available (API) | `docs/specs/p2-legal-consents/01-spec.md` consent kinds | [ ] |
| 55 | Diet/medical notes visible only to the roles in the note's audience (e.g. teacher, extended-day carer) and the child's guardians; class staff read-only; not in lists, cards or logs | PA | available | `docs/uk/specs/p2-sensitive-notes.md` "Що і навіщо", "Рішення" (S2, S8 limit B-26) | [ ] |
| 56 | Audit covers card views, protected-data changes and exports | PA | available (catalog) | `docs/architecture.md` "Security… Data" bullet 4; `docs/roadmap.md` 1.4 | [ ] |
| 57 | Audit log is read by the school's owner and administrator | PA | available | `docs/uk/specs/p1-audit-log.md` ("API читання для власника й адміністратора") | [ ] |
| 58 | Audit log has no automatic clean-up period yet | PA | available (fact) | `docs/uk/specs/p1-audit-log.md` "Рішення": "Аудит не має строку зберігання" | [ ] |
| 59 | People are archived, never physically deleted | PA, S | design / available | `docs/architecture.md` principles; `CLAUDE.md` "Database" | [ ] |
| 60 | Consent proofs kept for the instance lifetime; erasure on school exit is 8.7 | PA | available / planned | `docs/specs/p2-legal-consents/01-spec.md` §8 row "legal retention period of proofs" | [ ] |
| 61 | Platform does not publish children's photos via open links | PA | available (files) | `docs/roadmap.md` 1.5 ("no public URLs at all") | [ ] |
| 62 | No photo shown to other families without consent; no photo to Telegram without separate consent | PA, P | planned | `docs/roadmap.md` 5.3, 5.8 | [ ] |
| 63 | By default only staff messages from Telegram groups are stored | PA | planned | `docs/roadmap.md` 5.6; `docs/architecture.md` "The school's existing chats" | [ ] |
| 64 | This site: no analytics, no cookies, no third-party requests | all (footer), PA | site | this repo: `scripts/check-site.mjs`, no scripts in `dist/` | [ ] |
| 65 | Parent app does not exist yet; features by phases 4–7 | PA | planned | `docs/roadmap.md` phases 4–7 | [ ] |
| 66 | Investors: no figures on purpose until pilot experience | I | site | owner decision in the site brief | [ ] |
| 67 | Contact channel: public GitHub Issues; no email yet | C | site | `src/config.ts` | [ ] |
| 68 | License split: content CC BY 4.0, code MIT, fonts OFL; name/logo and product code not licensed; product code is closed | L, footer | site | `NOTICE.md`, `LICENSE`, `LICENSE-CONTENT` | [ ] |
| 69 | QR code format for banking apps still being verified | P, R | planned | `docs/roadmap.md` 6.8, open questions | [ ] |
| 70 | Certificate of Achievement PDF unchanged after issue; grades 1–2 verbal, 3–4 four levels | P, R | planned | `docs/roadmap.md` 7.1, 7.5 | [ ] |
| 72 | Staff cabinet: sign-in, session, role navigation, lists and cards, create/edit forms (2.8), CSV import screen (2.9), settings screens: profile and brand, modules and Telegram bot, sign-in and SMS gateway, security and audit log viewer (2.10) | P, R | available | `docs/roadmap.md` 2.8, 2.9, 2.10 (done); `web/src/routes/` on main | [ ] |
| 73 | CSV import: dry run, all-or-nothing commit, UTF-8 and Windows-1251, no duplicates on repeat; screen in the web cabinet with confirmation and error report | R | available | `docs/roadmap.md` 2.9 (done); `web/src/routes/import/` | [ ] |
| 74 | Subjects, curriculum, bell schedules and weekly template timetable exist on the server (no screens) | R | available (server) | `docs/roadmap.md` 3.1 (done); `docs/specs/README.md` p3-subjects-timetable | [ ] |
| 75 | School calendar (days off, holidays, shortened days) exists on the server (no screens) | R | available (server) | `docs/roadmap.md` 3.3 (done) | [ ] |
| 71 | "Children in shelter" / "All clear" per division, logged | P, R | planned | `docs/roadmap.md` 3.10 | [ ] |
| 76 | Mockup "Children and families" (staff cabinet list): built (child, class, guardians, class filter, add child, CSV import); Consents/Payment/Meals columns are design only | SC, P | available | design `docs/design/screens/StaffPupils.dc.html`; `docs/roadmap.md` 2.8, 2.9; `web/src/routes/pupils/`, `web/src/routes/import/` on main | [ ] |
| 77 | Mockup "Child's card": built (enrollment, guardians and permissions, consents, editing; card view audited); Health and meals, Contract and payments blocks and attendance chip are design only | SC, H | available | design `docs/design/screens/StaffPupilCard.dc.html`; `docs/roadmap.md` 2.8; `web/src/routes/pupil/` on main | [ ] |
| 78 | Mockup "Documents and consents" (settings): built list with versions and coverage, new document, new version; reminders and the platform contract block not built | SC | available | design `docs/design/screens/SettingsLegal.dc.html`; `docs/roadmap.md` 2.6, 2.8; `web/src/routes/settings-legal/` on main | [ ] |
| 79 | Mockup "Profile and brand" (settings): built (name and contacts, logo, accent colour with contrast check, preview) | SC, P | available | design `docs/design/screens/SettingsSchool.dc.html`; `docs/roadmap.md` 2.10 (done); `web/src/routes/settings-school/` on main | [ ] |
| 80 | Mockup parent app "Today": the app does not exist yet | SC, H | planned | design `docs/design/screens/Today.dc.html`; `docs/roadmap.md` 4.3 | [ ] |
| 81 | Mockup parent app "Family": the app does not exist yet | SC | planned | design `docs/design/screens/Family.dc.html`; `docs/roadmap.md` 4.4 | [ ] |
| 82 | Mockups are illustrations of the interface design with invented data (demo school, names, `+380 00…` phones, `@example.test`), not screenshots; the UI shows the school's brand (neutral "sky" preset from `tokens.json`), never Vervechka's | SC, H, P | site | this repo `src/data/mockups.ts`, `src/components/mockups/`; product `docs/design/README.md` "Брендування школою", `docs/design/tokens.json` | [ ] |
| 83 | Site-wide banner: product under construction, pilot targeted for Q1 2027 (plan); demo school (demoschool.pp.ua) is live (public login admin/admin, nightly reset), the banner links to it | all | planned (owner plan) / site | owner statement 2026-11-27; see #2, #43; `src/config.ts` `DEMO_URL` | [ ] confirm; set `DEMO_URL` when live |

Not claimed on purpose: hosting provider or data location, compliance certifications, legal conformity with specific Ukrainian laws (the order number of the Certificate is left out because `docs/i18n/uk.md` marks its legal content as unverified), market figures, customers, prices, dates.

> Contact email (owner decision 2026-11-27): the Contacts page publishes `redfoxius@gmail.com` as plain `mailto:` links (no form, no backend). Set `CONTACT_EMAIL = null` in `src/config.ts` to remove it.


## Note 2026-11-28: product-language roadmap

Owner decision: the site no longer shows per-feature status labels, counters ("done N of M"), legend or engineering phase numbers. The roadmap lists what the MVP will include (basic primary-school functionality plus a basic parent app), the pilot (Q1 2027) and validation (Q2–Q4 2027). The single status is site-wide: in development, no school uses the platform. Status labels in rows above are historical (the register's own bookkeeping), not shown on the site.

Readiness (roadmap page): one figure, school portal core functionality = share of done product-plan items among sign-in, people, school day, announcements, photo albums, payments, NUS assessment (46 items; Telegram, push, parent-app tabs and foundation excluded): 20/46 = 43%. Parent app is not shown until its development starts. Recompute from `docs/roadmap.md` on every sync (`portalPercent` in `src/data/roadmap.ts`).
