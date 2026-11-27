---
lang: en
page: schools
title: "For schools"
description: "How Vervechka works for a school - a separate instance and a separate database, modules behind flags, updates in waves, leaving with your data."
---

Vervechka is designed for a small institution without its own IT person: setup should take an hour, not a week. The platform is in development; the first school will be connected during the pilot.

## A separate instance for each school

Each school gets its own application server (API and background worker) and **its own database with its own database user**, which has no rights to other schools' databases. There is no database shared between schools, and the schema does not even have a "school id" column: the database is the school.

What this gives the school:

- **Isolation of children's data.** One school's data is technically separate from another's, not just filtered in queries.
- **A clear exit.** If a school leaves, its database and files can be exported in full (full export is planned before the pilot).
- **Its own settings.** The school's colour and logo, name, language, enabled modules and parent sign-in methods. The brand in the interface is always the school's, not the platform's.

Shared by all schools: one application image and one code version (differences only in settings and modules, never code forks), shared servers and file storage. Each school's files sit under their own prefix with separate access keys.

## Updates

Database changes are backward compatible, so schools are updated in waves: first a demo school, then some schools, then the rest. Updates are not rolled out during lessons or in the last days of a term, when teachers prepare Certificates of Achievement. Automation of the waves is planned before the pilot.

## Divisions and combined classes

One school can have several divisions: a primary school, a kindergarten, a development center. Today only the primary school is being built, but the schema is not tied to grades 1–4. The year of study belongs to the child, not to the class, so in a combined class (for example grades 3–4) each child gets their own assessment scale and their own Certificate.

## Sign-in

- **Staff:** email and password plus a mandatory code from an authenticator app. Available now.
- **Parents:** the methods the school enables: an email code (default), an SMS code, or confirmation via the Telegram bot. The server side is ready; the screens come with the app.
- **SMS is a paid option for the school:** the school connects its own SMS gateway account; otherwise SMS is unavailable and the sign-in screen does not show it.

## How a school can get Vervechka

Right now, only as a pilot school. The pricing model laid down in the architecture is **a base package plus options** enabled in settings; at the start it is free until the product becomes genuinely useful for pilot schools. Pilot terms are agreed in writing: duration, regular feedback, the school's right to take its data, and the point from which payment begins. There are no prices yet.

Interested? Write to us via the [Contacts](/en/contacts/) page.
