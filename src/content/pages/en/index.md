---
lang: en
page: ''
title: "Vervechka — a platform for private schools"
description: "A platform for small private schools, currently in development, with a separate database for each school, a parent app and a staff cabinet."
mockups: ['pupil-card', 'today']
---

Vervechka is a platform for small private schools: children and families, classes and combined classes, consents, and later the school day, payments by bank details, New Ukrainian School (NUS) assessment and an app for parents. It starts with primary school (grades 1–4).

> **Vervechka is in development.** No school runs on the platform yet: the pilot is targeted for Q1 2027 (a plan, not a promise). What the MVP includes and what comes next is on the [Roadmap](/en/roadmap/) page.

## Who this site is for

- **School owners and heads**: what the platform is and how it works. See [Product](/en/product/) and [For schools](/en/schools/).
- **Parents** whose school runs on Vervechka: what data about the child and family is stored, where, and who can see it. See [For parents](/en/parents/).
- **Anyone following the project**: [Roadmap](/en/roadmap/) and [Investors](/en/investors/).

## How it is built

- **One school, one database.** Each school gets its own application instance and its own database with its own database user. There is no database shared between schools.
- **Children's data first.** Guardians see only their own children and teachers only their own classes; viewing a child's card and changes to protected data are written to an audit log; sensitive fields are encrypted by the application.
- **No real data in development.** Code, tests and demos use invented names and contacts only.
- **The platform holds no money.** Parents will pay straight to the school's account by bank details (planned).

Questions, or want to become a pilot school? See [Contacts](/en/contacts/).
