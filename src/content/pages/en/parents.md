---
lang: en
page: parents
title: "For parents"
description: "Does your school run on Vervechka? What data about your child and family is stored, where and how, who can see it, and what the parent app does today versus what is only planned."
widget: parent-app
---

This page is for you if your school uses Vervechka. We are being honest: the platform is still in development, and every capability says whether it is ready or only planned.

## Who is responsible for your data

The data about your child and family belongs to the school. **The school** decides what to collect and answers to you for it: it publishes its own privacy policy, rules and consent texts. **The platform** processes the data on the school's behalf and only for it. Each school prepares its own document texts; templates from the platform are still being prepared. For questions about your data, contact the school first.

## Where the data is stored

- **A separate database for each school.** Your school's data does not sit in the same database as other schools' data.
- **Files** (consent scans, later photos) are kept in private storage under the school's own prefix. A file opens only through a signed link that is valid for a short time; there are no public links. *Available now.*
- **Encryption.** Connections use TLS. The most sensitive fields are additionally encrypted by the application itself, and the key is kept in the school's secrets, not in the database. Today this covers, for example, staff sign-in secrets and keys of the school's services. *Available now.* Notes about a child's diet, health and allergies are encrypted by the application as a whole (the entire note text). *Available now.* A guardian's tax number (for contracts and statements) will be stored in an encrypted field once those features ship. *In development.*
- **Guardian contacts** (phone, email, address) can also be stored encrypted if the school chooses; search and sign-in then work without decrypting them. *Available now, enabled by the school.*
- **Backups** to another provider's storage, with restore checks. *Planned before the pilot.*

## What data is stored

| What | Why | Status |
| --- | --- | --- |
| Child: surname, first name, date of birth, division and class, year of study | child's card, classes, enrollment | Available now |
| Guardians: name, phone, email, address; link to the child and permissions (app access, pickup, receiving invoices, restrictions by court decision) | sign-in, notifications, who may do what | Available now |
| History of contact changes (old value encrypted) | so a change can be checked | Available now |
| Consents and acknowledgements of school documents: which text version you saw, when and how (in the app or on paper with a scan) | proof of consent | Available now |
| Trusted persons who may pick up the child (name, relationship, phone and a document note, encrypted; photo), and persons forbidden to pick up, under a court restriction | safe pickup | Available now |
| Dietary and medical notes and allergens (encrypted, with version history) | menu and the child's safety | Available now |
| Attendance, who picked up the child and when | the school day | Planned |
| Photos tagged with who is in them | albums and the "with my child" filter | Planned |
| NUS assessment and the Certificate of Achievement | learning | Planned |
| Contracts, invoices, payments | payment by bank details | Planned |

## Consents

There is a separate consent for each purpose: processing of personal data, photos inside the school, photos in Telegram, public photos, medical information. Each consent is tied to the exact text version you saw. Until the app exists, the school can record your paper consent with a scan of the signed form. Withdrawal takes effect immediately. If one guardian grants a consent and another refuses, the refusal wins. When the school materially changes a text, the system asks for consent again. *Available now (app screens will come with the app).*

## Who sees what

- **You**: only your own children, and only what the school allowed for your link to the child. The app holds no data about other children and no internal staff notes.
- **A teacher**: only their own classes.
- **The school's administrator and owner**: the school's data within their role; privileged roles are granted only by the owner.
- **Dietary and medical notes and allergens** are visible only to the roles in the note's audience (for example a teacher or an extended-day group carer) and to the child's own guardians. Allergens are recorded from a closed list of 14 codes. Notes do not appear in lists, cards or logs; every read and every change is written to the audit log, and earlier versions are kept. Class staff can only read; the owner, the administrator and the child's guardians can write. Writing requires the medical-information consent. *Available now.*
- **Persons who pick up a child.** Trusted persons are added by the school or by a guardian; forbidden persons (court restrictions) are entered only by the owner or an administrator, and guardians never see them. Records are revoked, not deleted. *Available now.* The act of pickup itself (who picked up the child and when) is *planned.*
- **Audit log.** Viewing a child's card, changes to protected data and exports are written to a log that the school's owner and administrator can read. *Available now.*

## Retention and archiving

- People are not physically deleted but archived, so history is kept (for example, who picked up a child).
- Proof of consent is kept for as long as the school's instance exists.
- The audit log has no automatic clean-up period yet.
- If a school leaves the platform, its data is exported and its database deleted in full. *Planned.*

## What the platform does not do

- It does not hold or transfer money: payments will go straight to the school's account.
- It does not publish children's photos via open links.
- It does not show your child's photos to other families without your consent, and does not send them to Telegram without a separate consent. *Planned with the photo features.*
- By default it does not store parents' messages in the school's Telegram groups, only staff messages (announcements, photos). *Planned.*
- It does not use real data in development or demos: invented data only.
- This site has no analytics, no cookies and no third-party requests.

## Frequently asked questions

### Can other parents see my child's data?
No. A guardian sees only their own children. This is checked on the server in one place, and every rule has tests.

### Can I withdraw a photo consent?
Yes. Withdrawal takes effect immediately; you can withdraw photos in Telegram or public photos separately and keep photos inside the school.

### Do I need to install the app now?
No, the app does not exist yet. When it arrives, you will sign in with the methods your school has enabled.

### Whom do I contact about my data?
Your school: it is responsible for the data and keeps the consents. Questions about the platform itself go to the [Contacts](/en/contacts/) page.

## The parent app: what is coming

The app does not exist yet. Below is what is planned for it.
