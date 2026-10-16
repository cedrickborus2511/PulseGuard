# Pulse Guard // Store OS 4.0

> **Smart Multi-Departmental Store Stock Management & POS Reconciliation System**

![Pulse Guard Banner](https://img.shields.io/badge/Pulse%20Guard-Version%204.0-0284c7?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Ready-16a34a?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-HTML5%20%7C%20CSS3%20%7C%20JS-38bdf8?style=for-the-badge)

---

## 🌟 Key Features

- **3-Stage Low Stock Radar**:
  - Automatically predicts depletion horizons based on rolling weekly sales velocity:
    - **Stage 1 (Advisory)**: $\le 7$ days of inventory remaining.
    - **Stage 2 (Warning)**: $\le 4$ days of inventory remaining.
    - **Stage 3 (Critical)**: $\le 1.5$ days of inventory remaining (includes upcoming profit loss in ₹).
- **Edit Button in Every Stock Box**:
  - Direct edit access on every stock card and sales velocity box:
    - 4-Digit Unique Stock Code
    - Category & Product Name
    - Number of Stocks & Sales Speed
    - Buying Cost Price (₹) & Selling Retail Price (₹)
    - Live Real-Time Profit & Margin Preview
    - Wholesale Dealer Details (Name, Phone, Email)
- **POS Cashier Billing Gateway**:
  - Scan or enter 4-digit codes to add items to customer bill.
  - Automatically calculates Subtotal, 5% GST, and Estimated Profit.
  - One-click auto-deduction updates database stock levels instantly.
- **Multiple Store Managers & Shift Schedule Roster**:
  - Manage manager accounts with assigned shift timings (Morning, Evening, Night, General).
  - One-click "Set On Duty" updates active store lead across the system.
- **FORCE AI Copilot (Friendly Pal Voice)**:
  - Real-time inventory buddy providing depletion guidance, Stage 3 restock math, and guardrails against irrelevant inquiries.
- **Soothing Anti-Glare Daylight Mode & Charcoal Dark Mode**:
  - Gentle pastel color palette (Sky Blue, Mint Sage, Butter Yellow, Peach, Coral Rose, Lavender).
  - High-contrast, glare-free daylight mode for long shift readability.

---

## 📁 Repository Structure

```text
├── index.html       # Single-page multi-view application structure & modals
├── style.css        # Pastel design tokens, dark/light theme, glassmorphic layout
├── app.js           # Inventory calculations, chart engine, POS auto-deduct, AI buddy
└── README.md        # Documentation & deployment guide
```

---

## 🚀 Live Deployment Instructions

### Option 1: GitHub Pages
1. In your GitHub repository, navigate to **Settings** ➔ **Pages**.
2. Under **Build and deployment > Branch**, select `main` and `/ (root)`.
3. Click **Save**. Your site will be published at:
   `https://rakshavijaykumar28-glitch.github.io/PulseGuard/`

### Option 2: Netlify / Vercel
1. Connect this GitHub repository directly to [Netlify](https://app.netlify.com) or [Vercel](https://vercel.com).
2. Set build command to empty and publish directory to `./`.
3. Deploy!
