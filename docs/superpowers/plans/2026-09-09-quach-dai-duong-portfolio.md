# Quách Đại Dương High-Tech Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete fullstack personal landing page with React (Vite), Express.js API, High-Tech Glassmorphism aesthetic (Ocean Blue + Snow White), live interactive MedPal AI terminal, and working contact pipeline.

**Architecture:** Split fullstack structure: `server/` running Express providing dynamic profile data, contact message persistence, telemetry, and MedPal AI simulation; `client/` running React + Vite with custom 3-layer CSS design tokens (glassmorphism, cybernetic grid, responsive layout) utilizing existing assets in `asset/`.

**Tech Stack:** React 18+, Vite, Node.js, Express, Lucide React, Vanilla CSS Design System (Glassmorphism), Google Fonts (Space Grotesk, Plus Jakarta Sans, JetBrains Mono).

**Spec:** [docs/superpowers/specs/2026-09-09-quach-dai-duong-portfolio-design.md](file:///d:/Projects/Landing%20page%20c%C3%A1%20nh%C3%A2n%20vibecode%20af/docs/superpowers/specs/2026-09-09-quach-dai-duong-portfolio-design.md)

## Global Constraints
- Theme: Bright crystalline light mode with ocean blue (`#0284C7`), cyan (`#06B6D4`), and royal blue (`#2563EB`) accents over pure/subtle white canvas (`#F8FAFC`).
- Contrast: WCAG AAA compliance with dark slate text (`#0F172A`).
- Assets: Must load actual image assets from `asset/` (portrait, MedPal UI, GDGOC award certificate).
- Responsive: Seamless display across Mobile (375px), Tablet (768px), and Desktop (1200px+).

---

### Task 1: Backend Express Server Setup & REST APIs
**Files:**
- Create: `server/package.json`
- Create: `server/index.js`
- Create: `server/routes/api.js`
- Create: `server/data/messages.json`
- Test: `server/test-api.js`

- [ ] Initialize server with Express, CORS, dotenv.
- [ ] Implement `/api/profile` returning verified information of Quách Đại Dương.
- [ ] Implement `/api/contact` storing message entries to `messages.json`.
- [ ] Implement `/api/stats` returning server status and visitor metrics.
- [ ] Implement `/api/medpal-simulate` returning structured diagnostic responses from MedGemma / FPT AI Factory.
- [ ] Run automated tests on backend endpoints.

---

### Task 2: Frontend React Project Scaffolding & Design System
**Files:**
- Create: `client/package.json`
- Create: `client/vite.config.js`
- Create: `client/index.html`
- Create: `client/src/styles/tokens.css`
- Create: `client/src/styles/index.css`
- Copy assets from `asset/` to `client/public/assets/`

- [ ] Setup Vite React app with `lucide-react`.
- [ ] Copy and link images from `asset/`.
- [ ] Build 3-tier CSS design tokens in `tokens.css` (Glassmorphism backdrop-blur, frosted glass cards, specular highlights, ocean gradients).
- [ ] Configure global typography and responsive resets in `index.css`.

---

### Task 3: Interactive Components Implementation
**Files:**
- Create: `client/src/components/Navbar.jsx`
- Create: `client/src/components/Hero.jsx`
- Create: `client/src/components/MedPalShowcase.jsx`
- Create: `client/src/components/DevTerminal.jsx`
- Create: `client/src/components/AwardsTimeline.jsx`
- Create: `client/src/components/SkillsRadar.jsx`
- Create: `client/src/components/ContactSection.jsx`
- Create: `client/src/components/Footer.jsx`
- Create: `client/src/App.jsx`
- Create: `client/src/main.jsx`

- [ ] Implement `Navbar.jsx` with floating glass dock, responsive menu, and live status.
- [ ] Implement `Hero.jsx` with 3D glass card containing Quách Đại Dương's portrait, verified badges, and quick CTA.
- [ ] Implement `MedPalShowcase.jsx` featuring `Medpal.png` and interactive architecture breakdown.
- [ ] Implement `DevTerminal.jsx` with live interactive API tester connecting to `/api/medpal-simulate`.
- [ ] Implement `AwardsTimeline.jsx` honoring the GDGOC 2026 Prospective Award with `Giải thưởng GDGOC.jpg` and career milestones.
- [ ] Implement `SkillsRadar.jsx` showcasing backend & AI engineering capabilities.
- [ ] Implement `ContactSection.jsx` with real-time form submission to `/api/contact` and social hubs.
- [ ] Implement `Footer.jsx` with system uptime and copyright.
- [ ] Assemble all components in `App.jsx`.

---

### Task 4: Fullstack Integration, Verification & Visual Polish
**Files:**
- Modify: `client/src/styles/index.css`
- Modify: `package.json` (root orchestrator script)

- [ ] Verify frontend build (`npm run build`).
- [ ] Launch both backend and frontend servers.
- [ ] Use browser subagent to visually verify glassmorphism styling, responsive layout, interactive terminal, and form submission.
- [ ] Create walkthrough documentation.
