# Pulse Guard // Store OS 5.0

> **Smart Multi-Departmental Store Stock Management, Operations & POS Reconciliation System**

![Pulse Guard Banner](https://img.shields.io/badge/Pulse%20Guard-Version%205.0-0284c7?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Ready-16a34a?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-HTML5%20%7C%20CSS3%20%7C%20JS-38bdf8?style=for-the-badge)

---

## 🌟 What's New in Version 5.0

- **Edit & Delete in Every Stock Box**:
  - Direct Edit and Delete actions present adjacent to each other on every stock box across category grids, sales velocity strips, alert cards, and the P&L ledger.
  - Safe confirmation modal prevents accidental deletions while keeping database state synchronized.
- **Enhanced Anti-Glare Daylight Mode**:
  - Light mode overhauled with deep slate text (`#090d16`, `#1e293b`), high contrast ratios exceeding WCAG AAA, and a soothing, glare-free matte canvas (`#edf2f7`) for bright store environments.
- **Exact Hours Depletion Telemetry**:
  - Depletion horizons under 24 hours ($\le 1.0$ day) automatically format in exact hours (e.g. `18h`, `18h left`) instead of confusing decimal days.
- **Admin & Accounts Profile Button**:
  - Relocated from main sidebar links directly to the bottom profile slot, displaying live active manager shift status.
- **Centered Manager Shift Schedule**:
  - Email addresses and phone numbers positioned in dedicated, precisely centered chips with matching icons.
- **Upgraded Realistic FORCE AI Copilot**:
  - Real-time retail floor specialist intelligence with quick interactive prompt chips, financial risk prioritization, hours-based stockout forecasts, and staff shift lookups.
- **Fluid Full-Width Layout**:
  - Modern edge-to-edge layout filling 100% of available viewport width with smooth horizontal category scrollbars.

---

## 📁 Repository Structure

```text
├── index.html       # Single-page multi-view application structure & modals
├── style.css        # Pastel design tokens, anti-glare light/dark theme, responsive styles
├── app.js           # Version 5.0 JS engine, hours telemetry, POS deduction, FORCE Copilot
└── README.md        # Documentation & deployment guide
```

---

## 🚀 Live Deployment Instructions

### Option 1: GitHub Pages
1. In your GitHub repository, navigate to **Settings** ➔ **Pages**.
2. Under **Build and deployment > Branch**, select `main` and `/ (root)`.
3. Click **Save**. Your site will be published at:
   `https://cedrickborus2511.github.io/PulseGuard/`

### Option 2: Vercel
1. Import this GitHub repository directly into [Vercel](https://vercel.com/new).
2. Project name: `pulseguard` (or `pulse-guard`).
3. Root Directory: `./` (leave default).
4. Click **Deploy**. Vercel will deploy instantly with continuous deployment on every git push!
