# Pulse Guard // Store OS 6.0

> **Smart Multi-Departmental Store Stock Management, Operations & POS Reconciliation System**

![Pulse Guard Banner](https://img.shields.io/badge/Pulse%20Guard-Version%206.0-0284c7?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Ready-16a34a?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-HTML5%20%7C%20CSS3%20%7C%20JS-38bdf8?style=for-the-badge)

---

## 🌟 What's New in Version 6.0

- **Soothing Anti-Glare Gray Background in Light Mode**:
  - Completely removed eye-straining white backgrounds in favor of a modern, soothing matte slate-gray canvas (`#cfd8e3`) and elevated slate cards (`#e3ebf4`).
  - Darkened all light/pastel accents, texts, and logo elements into deep jet-black (`#050811`) and rich dark navy (`#026aa2`) for maximum contrast and daylight clarity.
- **Thickened Border Radii (+10px Across Entire System)**:
  - System-wide border radius upgrade (+10px) applied to cards (`26px`), buttons (`18px`), inputs (`18px`), modals (`28px`), and chips (`18px`), delivering a modern, cohesive aesthetic.
- **Alert Shortage Resolution via Dealer Email**:
  - In situations with inventory shortages, clicking the **Mail & Resolve** / **Email Dealer** button marks the problem as resolved and smoothly clears it from the active Alert Feed.
  - A dedicated **Resolved Orders** log allows store leads to review and reopen dispatched wholesale purchase orders.
- **Customizable Manager Shift Schedules**:
  - Added an **Edit Shift** button in the store manager roster. Shift timings are now 100% customizable with freeform working hours (e.g. `08:30 AM - 05:00 PM`) and convenient quick-fill presets rather than rigid pre-loaded restrictions.
- **Non-Blocking Docked Side Grid for FORCE AI Copilot**:
  - Replaced the full-window modal with an edge-to-edge docked side grid companion box (`#force-side-dock`).
  - Users can view and interact with all tables, charts, POS cashier lines, and stock grids simultaneously while chatting with FORCE AI, without hiding any details.
- **Proactive Task Appreciation & Congratulations**:
  - After completing tasks (mailing wholesale dealers, restocking, finalizing customer bills, customizing shift schedules, editing stocks), FORCE AI proactively congratulates and celebrates the user with real-time profit and operational feedback.
- **Exact Hours Depletion Telemetry**:
  - Depletion horizons under 24 hours ($\le 1.0$ day) automatically display in exact hours (e.g. `18h`, `19h left`) instead of decimal days.

---

## 📁 Repository Structure

```text
├── index.html       # Single-page multi-view application structure, side dock & modals
├── style.css        # Version 6.0 design tokens, gray light mode, +10px radii, side grid
├── app.js           # Version 6.0 JS engine, PO mail resolution, custom shifts, FORCE appreciation
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
1. Connected automatically via GitHub repository [cedrickborus2511/PulseGuard](https://github.com/cedrickborus2511/PulseGuard).
2. Every push to `main` auto-triggers continuous deployment with instantaneous global CDN propagation!
