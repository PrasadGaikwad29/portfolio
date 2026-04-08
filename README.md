# 🎬 Prasad Gaikwad — MERN Portfolio

A production-ready personal portfolio website built with the MERN stack.
Netflix-inspired dark theme with smooth Framer Motion animations, Redux Toolkit state management, lazy loading, and a Nodemailer-powered contact form.

---

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

---

## ⚡ Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/portfolio.git
cd portfolio
```

### 2. Set up the Backend

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` with your values:
```
PORT=5000
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password   # See note below
EMAIL_TO=your_gmail@gmail.com
CLIENT_URL=http://localhost:3000
```

> **Gmail App Password:** Go to Google Account → Security → 2-Step Verification → App Passwords → Generate one for "Mail". Use that 16-character password here — NOT your real Gmail password.

Start the backend:
```bash
npm run dev       # development (nodemon)
npm start         # production
```

### 3. Set up the Frontend

```bash
cd ../frontend
npm install
npm run dev       # Starts on http://localhost:3000
```

The Vite dev server proxies `/api` requests to `localhost:5000` automatically.

---

## 🎯 Customization Checklist

### Personal Info
- [ ] `frontend/src/components/Hero/Hero.jsx` — Change name, role, tagline, stats
- [ ] `frontend/src/components/About/About.jsx` — Update bio text and skill cards
- [ ] `frontend/src/components/Shared/Footer.jsx` — Update social links
- [ ] `frontend/index.html` — Update SEO meta tags (name, description, URL)

### Projects
- [ ] `frontend/src/utils/projectsData.js` — Replace with your real projects
  - Update `image`, `title`, `description`, `techStack`, `liveUrl`, `githubUrl`

### Resume
- [ ] Place your `resume.pdf` in `frontend/public/resume.pdf`
  - It will automatically open when "Resume" is clicked

### Tech Stack
- [ ] `frontend/src/components/TechStack/TechStack.jsx` — Add/remove technologies

### Contact
- [ ] `backend/.env` — Add your real Gmail + App Password
- [ ] `frontend/src/components/Contact/Contact.jsx` — Update email/LinkedIn/GitHub links

---

## 🚀 Deployment

### Frontend → Vercel
```bash
cd frontend
npm run build         # Creates dist/ folder
# Push to GitHub, connect to Vercel, set root to /frontend
```

### Backend → Render (Free Tier)
1. Push to GitHub
2. Create new Web Service on render.com
3. Root directory: `backend`
4. Build command: `npm install`
5. Start command: `node server.js`
6. Add environment variables from `.env`

> After deploying backend, update `CLIENT_URL` in Render env vars to your Vercel URL.

---

## ✨ Key Features

| Feature | Implementation |
|---|---|
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

---

## 🛠 Tech Stack

**Frontend:** React 18 · Redux Toolkit · Tailwind CSS · Framer Motion · React Router · React Icons · Vite

**Backend:** Node.js · Express · Nodemailer · express-validator · express-rate-limit · helmet · CORS

---
