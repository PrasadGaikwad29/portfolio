# 🎬 Prasad Gaikwad — MERN Portfolio

A production-ready personal portfolio website built with the MERN stack.
Netflix-inspired dark theme with smooth Framer Motion animations, Redux Toolkit state management, lazy loading, and a Nodemailer-powered contact form.

## 🛠 Tech Stack

**Frontend:** React 18 · Redux Toolkit · Tailwind CSS · Framer Motion · React Router · React Icons · Vite

**Backend:** Node.js · Express · Nodemailer · express-validator · express-rate-limit · helmet · CORS


## ✨ Key Features

| Feature | Implementation |
| Netflix dark theme | Tailwind custom config + CSS variables |
| Horizontal scroll rows | CSS `overflow-x: auto` + arrow buttons |
| Active section nav | `react-intersection-observer` + Redux |
| Lazy loading | `React.lazy` + `Suspense` per section |
| Code splitting | Vite `manualChunks` (vendor, redux, motion) |
| Skeleton loaders | CSS shimmer animation on `LazyImage` |
| Smooth animations | Framer Motion (staggered, scroll-triggered) |
| Contact form | Redux Toolkit async thunk → Express → Nodemailer |
| Form validation | Client (inline) + Server (`express-validator`) |
| Rate limiting | `express-rate-limit` (5 requests / 15 min) |
| Security headers | `helmet` middleware |
| Memoization | `React.memo`, `useCallback`, `useMemo` |
| Accessibility | ARIA roles, semantic HTML, sr-only labels |
| SEO | Meta tags, OG tags, semantic structure |

## 📁 Folder Structure

```
portfolio/
├── frontend/                   # React + Vite + Tailwind
│   ├── public/
│   │   └── resume.pdf          # ← Put your resume PDF here
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar/         # Sticky navbar, active section highlight
│   │   │   ├── Hero/           # Hero with animated intro
│   │   │   ├── About/          # About me with skill cards
│   │   │   ├── TechStack/      # Tech icons grouped by category
│   │   │   ├── Projects/       # Netflix-style horizontal scroll
│   │   │   │   ├── Projects.jsx
│   │   │   │   ├── ProjectRow.jsx
│   │   │   │   └── ProjectCard.jsx
│   │   │   ├── Contact/        # Form → Redux → API → Nodemailer
│   │   │   └── Shared/         # PageLoader, Footer
│   │   ├── hooks/
│   │   │   └── useSectionObserver.js  # Tracks active section
│   │   ├── store/
│   │   │   ├── store.js
│   │   │   └── slices/
│   │   │       ├── contactSlice.js    # Async contact form state
│   │   │       └── uiSlice.js         # Active section + nav scroll
│   │   ├── utils/
│   │   │   └── projectsData.js        # All project data lives here
│   │   ├── styles/
│   │   │   └── index.css
│   │   ├── App.jsx             # Lazy loads all sections
│   │   └── main.jsx
│   ├── .env
│   ├── index.html
│   ├── vite.config.js          # Proxy to backend, code splitting
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/                    # Node.js + Express
│   ├── config/
│   │   └── mailer.js           # Nodemailer transporter
│   ├── controllers/
│   │   └── contactController.js
│   ├── middleware/
│   │   └── validate.js         # express-validator rules
│   ├── routes/
│   │   └── contact.js          # Rate-limited POST /api/contact
│   ├── server.js               # Express entry point
│   ├── .env.example            # Copy to .env and fill in values
│   └── package.json
│
├── .gitignore
└── README.md
```
