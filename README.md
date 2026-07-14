# Bushra Academy — Quran Journey

An online recitation academy website built with Next.js, featuring a 9-month Quran curriculum, interactive Tajweed lessons, and enrollment flow.

## Features

- **Landing page** — Hero with 3-module curriculum overview (Foundations, Expansion, Completion)
- **Curriculum page** — Timeline view with sample lesson links
- **Interactive lessons** — Alphabet grids, letter forms, and practice words with color-coded Tajweed highlights
- **Audio pronunciation** — Click letters/words to hear pronunciation via browser speech synthesis
- **Enrollment form** — Student registration with experience level selection
- **Islamic aesthetic** — Teal night-sky theme, gold accents, Arabic typography (Amiri font)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Enrollment form (Netlify)

The enrollment form uses **Netlify Forms**. A successful submit means Netlify **stored** the request — it does **not** send mail from anyone's Gmail **Sent** folder.

### Where to find submissions

1. Netlify dashboard → your site → **Forms** → `enrollment`
2. Open a submission to see name, email, phone, experience, and message

### Get email alerts in Gmail Inbox

1. Netlify → **Forms** → enable **Form detection** (if asked), then redeploy
2. **Configuration → Notifications → Form submission notifications** → **Add notification**
3. Choose **Email notification**, form `enrollment`, recipient `Bushraa786academy@gmail.com`
4. Check **Inbox** (and Spam) for messages from Netlify — not Gmail **Sent**

### Notes

- Works on the **live Netlify URL only**, not `localhost`
- Reply to the student using the email address inside the submission

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero and curriculum overview |
| `/curriculum` | Full 9-month curriculum timeline |
| `/lessons/alphabet` | Interactive Arabic alphabet lesson |
| `/lessons/hamza` | Hamza letter forms lesson |
| `/lessons/hamzat-al-wasl` | Hamzat al-Wasl practice words |
| `/lessons/alif-after-waw` | Alif after Waw of plurality |
| `/enroll` | Enrollment form |

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Google Fonts** — Cormorant Garamond, Outfit, Amiri

## Project Structure

```
src/
├── app/           # Pages and layouts
├── components/    # Reusable UI components
└── data/          # Curriculum and lesson content
```
# bushra_academy
