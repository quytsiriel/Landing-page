# Technical Design Specification: Quách Đại Dương High-Tech Portfolio Landing Page

**Date:** 2026-09-09  
**Target:** Quách Đại Dương – Backend Developer & AI System Architect  
**Aesthetic Theme:** Crystal Tech & Ocean Glow (Light Mode Glassmorphism)  

---

## 1. Overview & Objectives

Develop a modern, high-tech, responsive fullstack portfolio web application for **Quách Đại Dương**, a 20-year-old Backend Developer at **Jupiter Solution** and student at **University of Engineering and Technology - Vietnam National University (UET - VNU)**, awarded the Prospective Prize (Giải Triển Vọng) at **Google Developer on Campus (GDGOC) 2026** for the AI Medical project **MedPal**.

The landing page showcases deep engineering credibility, cutting-edge UI/UX glassmorphic aesthetics, and live interactivity (including a live AI API terminal simulator and working backend message pipeline).

---

## 2. Design System & Visual Direction

* **Color Tokens:**
  * Background: `#F8FAFC` to `#F0F9FF` (Crisp crystalline canvas with radiant ocean blue/cyan ambient glows)
  * Surface/Card: `rgba(255, 255, 255, 0.75)` with `backdrop-filter: blur(16px)`
  * Borders: `1px solid rgba(255, 255, 255, 0.85)` with gradient accents `rgba(59, 130, 246, 0.2)`
  * Primary Accent: `#0284C7` (Ocean Azure)
  * Secondary Accent: `#06B6D4` (Electric Cyan)
  * Highlight Accent: `#2563EB` (Royal Blue)
  * Typography Dark: `#0F172A` (Deep Slate, WCAG AAA compliant contrast)
  * Typography Muted: `#475569` (Slate Muted)
* **Typography:**
  * Headings: `Space Grotesk` (futuristic tech aesthetic)
  * Body/Interface: `Plus Jakarta Sans` / `DM Sans` (clean, modern legibility)
  * Monospace / Code: `JetBrains Mono` (precise developer terminal typography)
* **Visual Effects:**
  * Multi-layer frosted glass cards with specular highlight borders
  * Floating luminous ambient mesh orbs
  * Interactive 3D tilt hover physics on cards
  * Real-time terminal typing & metric readout effects

---

## 3. Architecture & Components

```
├── server/                     # Backend Node.js / Express
│   ├── index.js                # API server entrypoint (Port 5000)
│   ├── routes/
│   │   ├── profile.js          # Profile data, bio, milestones
│   │   ├── contact.js          # Contact submission handler & data persistence
│   │   ├── stats.js            # Live telemetry, visitor counters, server status
│   │   └── medpal.js           # Interactive simulator endpoint for MedGemma LLM
│   ├── data/
│   │   └── messages.json       # Persisted user messages from contact form
│   └── package.json
│
├── client/                     # Frontend React + Vite
│   ├── public/
│   │   └── assets/             # Images synced from root asset/ directory
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx          # Glassmorphic floating navigation dock
│   │   │   ├── Hero.jsx            # 3D interactive hero with portrait & quick badges
│   │   │   ├── MedPalShowcase.jsx  # Flagship AI project architecture & demo
│   │   │   ├── DevTerminal.jsx     # Live interactive API test console
│   │   │   ├── AwardsTimeline.jsx  # GDGOC 2026 honor & UET/Jupiter milestones
│   │   │   ├── SkillsRadar.jsx     # Backend & AI engineering capabilities
│   │   │   ├── ContactSection.jsx  # Live form connected to backend API + Socials
│   │   │   └── Footer.jsx          # System status & copyright
│   │   ├── styles/
│   │   │   ├── tokens.css          # Design tokens (colors, blur, shadows, glass)
│   │   │   └── index.css           # Global typography, layout, animations
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
```

---

## 4. Key Interactive Flows

1. **Live AI Terminal Simulation (`DevTerminal.jsx` $\leftrightarrow$ `/api/medpal-simulate`):**
   * Pre-configured medical prompts (e.g. "Khám phá phân tích triệu chứng sốt và nhức đầu", "Kiểm tra tương tác thuốc", "Tìm kiếm trạm y tế gần nhất").
   * User triggers execution $\rightarrow$ Terminal displays request headers, synthetic latency (30-50ms), simulated streaming tokens from MedGemma on FPT AI Factory, and returns structured JSON diagnostic advice.

2. **Contact & Collaboration Pipeline (`ContactSection.jsx` $\leftrightarrow$ `/api/contact`):**
   * Client-side validation for Name, Email, Subject, and Message.
   * Dispatches POST request to backend.
   * Backend appends submission to `server/data/messages.json` with timestamp and IP/Agent info.
   * Responsive toast feedback with glassmorphic notification banner.

3. **MedPal Interactive Architecture Explorer:**
   * Interactive toggles highlighting the pipeline:
     * *Frontend Layer:* Flutter + Riverpod + GoRouter
     * *Backend Layer:* Python FastAPI + Agentic Workflows
     * *AI Core:* MedGemma LLM (Ollama / FPT AI Factory) + Whisper Voice-to-Text
     * *Database:* Firebase Cloud Firestore + Firebase Auth.

---

## 5. Verification & Testing

* **Backend verification:** Test API endpoints (`/api/profile`, `/api/contact`, `/api/stats`, `/api/medpal-simulate`) with curl or node test script.
* **Frontend verification:** Verify Vite build, test responsive breakpoints (375px mobile, 768px tablet, 1280px+ desktop), verify glassmorphism rendering across Chrome/Edge, verify image loading from `asset/`.
* **Browser visual verification:** Use browser subagent to render and confirm aesthetic polish, contrast, and interactive flows.
