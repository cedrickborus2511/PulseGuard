/**
 * PULSE GUARD // VERSION 6.0 JAVASCRIPT ENGINE
 * Soft Pastel Aesthetics & Anti-Glare Soothing Gray Canvas in Light Mode
 * Edit & Delete Stock Capabilities in Every Box (Code, Name, Price, Cost, Profit, Dealer)
 * Exact Hours Depletion Formatting for Horizons Under 24h (< 1.0 Day)
 * Alert Feed PO Mailing Resolution: Shortage Problems Disappear When Solved via Mail
 * Customizable Shift Schedules (Edit Button in Shift Roster with Freeform Working Hours)
 * Non-Blocking Docked Side Grid for FORCE AI Copilot
 * Real-Time Task Appreciation & Congratulations from FORCE Copilot
 * POS Auto-Stock Deduction & Reconciled Financials
 */

// Multi-Department Seed Inventory in Indian Rupees (₹)
const SEED_PRODUCTS = [
  // 1. Stationeries
  {
    id: "stk-1001",
    code: "1001",
    name: "Rotring 600 Precision Drafting Pen 0.5mm",
    category: "Stationeries",
    stock: 3, // Stage 3 Critical (28/wk -> 4/day -> 3/4 = 0.75 days = 18 hours left)
    costPrice: 1450.00,
    sellingPrice: 2650.00,
    lastWeekSales: 28,
    dealer: { name: "Helena Rostova", company: "Nordic Drafting Supplies Co.", phone: "+91-98440-10921", email: "orders@nordicdrafting.in" }
  },
  {
    id: "stk-1002",
    code: "1002",
    name: "Rhodia DotGrid A4 Wirebound Notebooks",
    category: "Stationeries",
    stock: 22, // Stage 1 Advisory (35/wk -> 5/day -> 22/5 = 4.4 days left)
    costPrice: 420.00,
    sellingPrice: 850.00,
    lastWeekSales: 35,
    dealer: { name: "Jean-Pierre Laurent", company: "Clairefontaine Distribution LLC", phone: "+91-98210-44901", email: "procure@clairefontaine.in" }
  },

  // 2. Electronics
  {
    id: "stk-2001",
    code: "2001",
    name: "Anker Prime 100W GaN Fast Charger",
    category: "Electronics",
    stock: 5, // Stage 2 Warning (14/wk -> 2/day -> 5/2 = 2.5 days left)
    costPrice: 2900.00,
    sellingPrice: 4999.00,
    lastWeekSales: 14,
    dealer: { name: "Marcus Vance", company: "Silicon Logistics International", phone: "+91-99001-33118", email: "vance.m@siliconlogistics.in" }
  },
  {
    id: "stk-2002",
    code: "2002",
    name: "Keychron K2 Wireless Mechanical Keyboard",
    category: "Electronics",
    stock: 2, // Stage 3 Critical (10.5/wk -> 1.5/day -> 2/1.5 = 1.33 days left)
    costPrice: 4800.00,
    sellingPrice: 7999.00,
    lastWeekSales: 10.5,
    dealer: { name: "Arthur Pendelton", company: "Apex Tech Distributors", phone: "+91-97422-55610", email: "orders@apextechdist.in" }
  },

  // 3. Decors
  {
    id: "stk-3001",
    code: "3001",
    name: "Minimalist Brushed Brass Ambient Desk Sconce",
    category: "Decors",
    stock: 45, // Healthy (7/wk -> 1/day -> 45 days left)
    costPrice: 1800.00,
    sellingPrice: 3499.00,
    lastWeekSales: 7,
    dealer: { name: "Seraphina Lin", company: "Luminary Living Interiors", phone: "+91-98450-88741", email: "seraphina@luminaryliving.in" }
  },
  {
    id: "stk-3002",
    code: "3002",
    name: "Acoustic Felt Geometric Wall Panels (Pack of 6)",
    category: "Decors",
    stock: 12, // Stage 2 Warning (28/wk -> 4/day -> 12/4 = 3.0 days left)
    costPrice: 1650.00,
    sellingPrice: 3199.00,
    lastWeekSales: 28,
    dealer: { name: "Seraphina Lin", company: "Luminary Living Interiors", phone: "+91-98450-88741", email: "seraphina@luminaryliving.in" }
  },

  // 4. Medicals & Drugs
  {
    id: "stk-4001",
    code: "4001",
    name: "Paracetamol 500mg IP Rapid Release (100 Tabs)",
    category: "Medicals & Drugs",
    stock: 8, // Stage 3 Critical (70/wk -> 10/day -> 8/10 = 0.8 days = 19 hours left)
    costPrice: 120.00,
    sellingPrice: 280.00,
    lastWeekSales: 70,
    dealer: { name: "Dr. Evelyn Reed, PharmD", company: "BioCare Pharma Wholesale", phone: "+91-99880-21045", email: "orders@biocarepharma.in" }
  },
  {
    id: "stk-4002",
    code: "4002",
    name: "Multivitamin Active Defense Gummies 90s",
    category: "Medicals & Drugs",
    stock: 40, // Stage 1 Advisory (49/wk -> 7/day -> 40/7 = 5.7 days left)
    costPrice: 650.00,
    sellingPrice: 1250.00,
    lastWeekSales: 49,
    dealer: { name: "Dr. Evelyn Reed, PharmD", company: "BioCare Pharma Wholesale", phone: "+91-99880-21045", email: "orders@biocarepharma.in" }
  },

  // 5. Pet & Pet Care
  {
    id: "stk-5001",
    code: "5001",
    name: "Wild Atlantic Salmon Grain-Free Canine Chow 5kg",
    category: "Pet & Pet Care",
    stock: 6, // Stage 2 Warning (21/wk -> 3/day -> 6/3 = 2.0 days left)
    costPrice: 1850.00,
    sellingPrice: 3200.00,
    lastWeekSales: 21,
    dealer: { name: "Garrison Fox", company: "Apex Pet Nutrition Group", phone: "+91-98800-34199", email: "dispatch@apexpetcare.in" }
  },
  {
    id: "stk-5002",
    code: "5002",
    name: "Enzymatic Dental Chews for Cats & Dogs",
    category: "Pet & Pet Care",
    stock: 55, // Healthy (14/wk -> 2/day -> 27.5 days left)
    costPrice: 380.00,
    sellingPrice: 799.00,
    lastWeekSales: 14,
    dealer: { name: "Garrison Fox", company: "Apex Pet Nutrition Group", phone: "+91-98800-34199", email: "dispatch@apexpetcare.in" }
  }
];

// Department Categories
const SEED_CATEGORIES = [
  { name: "Stationeries", icon: "edit-3" },
  { name: "Electronics", icon: "cpu" },
  { name: "Decors", icon: "lamp" },
  { name: "Medicals & Drugs", icon: "activity" },
  { name: "Pet & Pet Care", icon: "paw-print" }
];

// Seed Managers with Customizable Shift Schedules
const SEED_MANAGERS = [
  {
    id: "mgr-1",
    name: "Alexander Vance",
    role: "Senior Store Operations Head",
    shift: "Morning Shift (08:00 AM - 04:00 PM)",
    shiftType: "morning",
    email: "alexander@pulseguard.store",
    phone: "+91-98765-43210",
    active: true
  },
  {
    id: "mgr-2",
    name: "Priya Sharma",
    role: "Assistant Store Manager",
    shift: "Evening Shift (03:30 PM - 11:30 PM)",
    shiftType: "evening",
    email: "priya@pulseguard.store",
    phone: "+91-98111-22334",
    active: false
  },
  {
    id: "mgr-3",
    name: "Rahul Verma",
    role: "Night Logistics & Inventory Lead",
    shift: "Night Shift (11:00 PM - 07:00 AM)",
    shiftType: "night",
    email: "rahul@pulseguard.store",
    phone: "+91-98222-33445",
    active: false
  }
];

// Application State
let appState = {
  theme: 'dark', // 'dark' | 'light'
  currentPage: 'home',
  products: [],
  categories: [],
  managers: [],
  cart: [],
  resolvedAlerts: {}, // { prodId: { id, code, name, shortageUnits, dealerName, dealerEmail, profitProtected, resolvedAt } }
  forceDockOpen: true,
  homeFilter: 'ALL',
  selectedCategory: 'ALL',
  storeProfile: {
    storeName: "Pulse Guard Megastore #042",
    managerName: "Alexander Vance",
    managerEmail: "alexander@pulseguard.store",
    managerPin: "8844"
  }
};

/**
 * PRODUCTION-GRADE STORAGE & SANITIZATION UTILITIES
 */
const memoryStorage = {};

function safeStorageGet(key, defaultVal = null) {
  try {
    const val = localStorage.getItem(key);
    return val !== null ? val : defaultVal;
  } catch (err) {
    console.warn(`[PulseGuard] LocalStorage read failed for ${key}, falling back to memory storage.`, err);
    return Object.prototype.hasOwnProperty.call(memoryStorage, key) ? memoryStorage[key] : defaultVal;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, String(value));
  } catch (err) {
    console.warn(`[PulseGuard] LocalStorage write failed for ${key}, storing in memory.`, err);
    memoryStorage[key] = String(value);
  }
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

let iconRefreshPending = false;
function refreshIcons() {
  if (iconRefreshPending) return;
  iconRefreshPending = true;
  requestAnimationFrame(() => {
    try {
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    } catch (e) {
      console.warn('[PulseGuard] Lucide icon refresh error', e);
    }
    iconRefreshPending = false;
  });
}

/**
 * INITIALIZATION & STORAGE RESTORATION
 */
function initApp() {
  try {
    const savedProds = safeStorageGet('pulseguard_products');
    appState.products = savedProds ? JSON.parse(savedProds) : SEED_PRODUCTS;
  } catch (_) {
    appState.products = SEED_PRODUCTS;
  }

  try {
    const savedCats = safeStorageGet('pulseguard_categories');
    appState.categories = savedCats ? JSON.parse(savedCats) : SEED_CATEGORIES;
  } catch (_) {
    appState.categories = SEED_CATEGORIES;
  }

  try {
    const savedMgrs = safeStorageGet('pulseguard_managers');
    appState.managers = savedMgrs ? JSON.parse(savedMgrs) : SEED_MANAGERS;
  } catch (_) {
    appState.managers = SEED_MANAGERS;
  }

  try {
    const savedProfile = safeStorageGet('pulseguard_profile');
    if (savedProfile) appState.storeProfile = JSON.parse(savedProfile);
  } catch (_) {}

  try {
    const savedResolved = safeStorageGet('pulseguard_resolved_alerts');
    if (savedResolved) appState.resolvedAlerts = JSON.parse(savedResolved);
  } catch (_) {}

  const savedTheme = safeStorageGet('pulseguard_theme', 'dark');
  applyTheme(savedTheme);

  const savedDock = safeStorageGet('pulseguard_force_dock');
  appState.forceDockOpen = savedDock !== null ? savedDock === 'true' : true;
  toggleForceDock(appState.forceDockOpen);

  // Setup modal click-outside and accessible event listeners
  setupAccessibleModalEvents();

  renderAll();
  initHorizontalScrollWheels();
  refreshIcons();
}

function initHorizontalScrollWheels() {
  const scrollers = [
    document.getElementById('inventory-category-pills'),
    document.querySelector('.stories-strip-wrapper')
  ];

  scrollers.forEach(el => {
    if (!el || el.dataset.wheelBound) return;
    el.dataset.wheelBound = "true";
    el.addEventListener('wheel', (evt) => {
      if (evt.deltaY !== 0 && !evt.shiftKey) {
        if (el.scrollWidth > el.clientWidth) {
          evt.preventDefault();
          el.scrollBy({ left: evt.deltaY * 1.25, behavior: 'auto' });
        }
      }
    }, { passive: false });
  });
}

function saveState() {
  safeStorageSet('pulseguard_products', JSON.stringify(appState.products));
  safeStorageSet('pulseguard_categories', JSON.stringify(appState.categories));
  safeStorageSet('pulseguard_managers', JSON.stringify(appState.managers));
  safeStorageSet('pulseguard_profile', JSON.stringify(appState.storeProfile));
  safeStorageSet('pulseguard_resolved_alerts', JSON.stringify(appState.resolvedAlerts));
  safeStorageSet('pulseguard_force_dock', String(appState.forceDockOpen));
}

/**
 * THEME CONTROLLER (Dark Charcoal & Soothing Anti-Glare Gray Background)
 */
function toggleTheme() {
  const next = appState.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
}

function applyTheme(theme) {
  appState.theme = theme;
  safeStorageSet('pulseguard_theme', theme);

  const metaTheme = document.getElementById('theme-color-meta');
  const label = document.getElementById('theme-label-text');
  const microPill = document.getElementById('theme-micro-pill');
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const mobileToggleBtn = document.getElementById('mobile-theme-toggle-btn');

  if (theme === 'light') {
    document.body.classList.remove('theme-dark');
    document.body.classList.add('theme-light');
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');

    if (label) label.innerText = "Light Mode";
    if (microPill) microPill.innerText = "Light";
    if (metaTheme) metaTheme.setAttribute('content', '#f4f4f5');

    const lightTooltip = "Currently in Light Mode. Click to switch to Dark Mode";
    if (toggleBtn) {
      toggleBtn.setAttribute('title', lightTooltip);
      toggleBtn.setAttribute('aria-label', lightTooltip);
    }
    if (mobileToggleBtn) {
      mobileToggleBtn.setAttribute('title', lightTooltip);
      mobileToggleBtn.setAttribute('aria-label', lightTooltip);
    }
  } else {
    document.body.classList.remove('theme-light');
    document.body.classList.add('theme-dark');
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');

    if (label) label.innerText = "Dark Mode";
    if (microPill) microPill.innerText = "Dark";
    if (metaTheme) metaTheme.setAttribute('content', '#09090b');

    const darkTooltip = "Currently in Dark Mode. Click to switch to Light Mode";
    if (toggleBtn) {
      toggleBtn.setAttribute('title', darkTooltip);
      toggleBtn.setAttribute('aria-label', darkTooltip);
    }
    if (mobileToggleBtn) {
      mobileToggleBtn.setAttribute('title', darkTooltip);
      mobileToggleBtn.setAttribute('aria-label', darkTooltip);
    }
  }

  if (pnlChartInstance) {
    renderProductFocusedChart();
  }
  refreshIcons();
}

/**
 * 3-STAGE ALERT & METRIC COMPUTATION
 * Daily Sales Speed = lastWeekSales / 7
 * Days Left = stock / Daily Sales Speed
 * Exact Hours Conversion: If daysLeft < 1.0, marked in hours (e.g. 18h) instead of decimal days!
 */
function computeMetrics(prod) {
  const weekly = Number(prod.lastWeekSales) || 1;
  const dailyBurn = weekly / 7.0;
  const stock = Number(prod.stock) || 0;
  const daysLeft = dailyBurn > 0 ? (stock / dailyBurn) : 999;

  let stage = 'HEALTHY';
  let stageLabel = 'Healthy';
  let badgeClass = 'badge-healthy';

  if (daysLeft <= 1.5 || stock === 0) {
    stage = 'STAGE3';
    stageLabel = 'Stage 3: CRITICAL';
    badgeClass = 'badge-stage3';
  } else if (daysLeft <= 4.0) {
    stage = 'STAGE2';
    stageLabel = 'Stage 2: WARNING';
    badgeClass = 'badge-stage2';
  } else if (daysLeft <= 7.0) {
    stage = 'STAGE1';
    stageLabel = 'Stage 1: ADVISORY';
    badgeClass = 'badge-stage1';
  }

  // Exact hours conversion for depletions under 1 day (24 hours)
  let timeFormatted = '';
  let timeLeftBadge = '';
  let horizonLabel = 'Days Until Empty';
  let hoursLeft = 0;
  const isHours = daysLeft < 1.0;

  if (stock === 0) {
    timeFormatted = '0h';
    timeLeftBadge = 'Empty (0h)';
    horizonLabel = 'Depletion Reached';
    hoursLeft = 0;
  } else if (daysLeft < 1.0) {
    hoursLeft = Math.max(1, Math.round(daysLeft * 24));
    timeFormatted = `${hoursLeft}h`;
    timeLeftBadge = `${hoursLeft}h left`;
    horizonLabel = hoursLeft === 1 ? 'Hour Until Empty' : 'Hours Until Empty';
  } else if (daysLeft < 999) {
    timeFormatted = `${daysLeft.toFixed(1)}d`;
    timeLeftBadge = `${daysLeft.toFixed(1)}d left`;
    horizonLabel = 'Days Until Empty';
    hoursLeft = Math.round(daysLeft * 24);
  } else {
    timeFormatted = '99+d';
    timeLeftBadge = '99+d left';
    horizonLabel = 'Days Until Empty';
    hoursLeft = 9999;
  }

  const profitPerUnit = prod.sellingPrice - prod.costPrice;
  const profitMarginPct = prod.sellingPrice > 0 ? ((profitPerUnit / prod.sellingPrice) * 100) : 0;
  const weeklyProfit = weekly * profitPerUnit;
  const upcomingLoss7Days = dailyBurn * 7 * profitPerUnit;
  const unitsNeededToClearStage3 = Math.max(0, Math.ceil(dailyBurn * 14) - stock);

  return {
    dailyBurn: dailyBurn.toFixed(2),
    daysLeft: timeFormatted,
    timeFormatted,
    timeLeftBadge,
    horizonLabel,
    hoursLeft,
    isHours,
    numericDaysLeft: daysLeft,
    stage,
    stageLabel,
    badgeClass,
    profitPerUnit: profitPerUnit.toFixed(2),
    profitMarginPct: profitMarginPct.toFixed(1),
    weeklyProfit: weeklyProfit.toFixed(2),
    upcomingLoss7Days: upcomingLoss7Days.toFixed(2),
    unitsNeededToClearStage3
  };
}

/**
 * NAVIGATION ROUTER (Desktop Sidebar & Mobile Bottom Bar Synchronized)
 */
function switchPage(pageId) {
  appState.currentPage = pageId;

  ['home', 'insights', 'products', 'admin'].forEach(p => {
    const isTarget = (p === pageId);
    const pageEl = document.getElementById(`page-${p}`);
    if (pageEl) pageEl.classList.toggle('active', isTarget);

    const sideBtn = document.getElementById(`sidebar-btn-${p}`);
    if (sideBtn) {
      sideBtn.classList.toggle('active', isTarget);
      if (isTarget) sideBtn.setAttribute('aria-current', 'page');
      else sideBtn.removeAttribute('aria-current');
    }

    const mobBtn = document.getElementById(`mob-btn-${p}`);
    if (mobBtn) {
      mobBtn.classList.toggle('active', isTarget);
      if (isTarget) mobBtn.setAttribute('aria-current', 'page');
      else mobBtn.removeAttribute('aria-current');
    }
  });

  // Toggle active class on sidebar profile button if page is admin
  const adminBtn = document.getElementById('sidebar-btn-admin');
  if (adminBtn) {
    adminBtn.classList.toggle('active', pageId === 'admin');
    if (pageId === 'admin') adminBtn.setAttribute('aria-current', 'page');
    else adminBtn.removeAttribute('aria-current');
  }

  renderAll();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderAll() {
  updateAlertBadge();
  renderHomePage();
  renderInsightsPage();
  renderProductsPage();
  renderAdminPage();
  renderActiveDutyHeader();
  refreshIcons();
}

function updateAlertBadge() {
  // Only count unresolved alerts
  const alertCount = appState.products.filter(p => computeMetrics(p).numericDaysLeft <= 7.0 && !appState.resolvedAlerts[p.id]).length;
  const el = document.getElementById('badge-alert-count');
  if (el) el.innerText = alertCount;
  const mobEl = document.getElementById('mob-badge-alerts');
  if (mobEl) mobEl.innerText = alertCount;
}

function renderActiveDutyHeader() {
  const activeMgr = appState.managers.find(m => m.active) || appState.managers[0];
  if (activeMgr) {
    const shiftEl = document.getElementById('sidebar-active-manager-shift');
    if (shiftEl) shiftEl.innerText = `${activeMgr.name} (${activeMgr.shift.split('(')[0].trim()})`;
  }
}

/**
 * ==========================================================================
 * PAGE 1: ALERTS FEED (Shortage Resolution by Email & Auto Disappear)
 * ==========================================================================
 */
function renderHomePage() {
  const feed = document.getElementById('home-alerts-feed');
  if (!feed) return;
  feed.innerHTML = '';

  const resolvedKeys = Object.keys(appState.resolvedAlerts);
  const resolvedCountEl = document.getElementById('count-resolved-alerts');
  if (resolvedCountEl) resolvedCountEl.innerText = resolvedKeys.length;

  // VIEW 1: RESOLVED ORDERS TAB
  if (appState.homeFilter === 'RESOLVED') {
    const heading = document.getElementById('alerts-heading-text');
    const sub = document.getElementById('alerts-sub-text');
    if (heading) heading.innerText = "Resolved Wholesale Orders";
    if (sub) sub.innerText = "Stock shortages and depletion risks that have been tackled by mailing wholesale dealers.";

    if (resolvedKeys.length === 0) {
      feed.innerHTML = `
        <div class="glass-card p-5 text-center text-muted font-mono">
          <i data-lucide="check-circle" class="w-10 h-10 mx-auto mb-2 text-green"></i>
          <div class="text-white font-bold text-sm">No Resolved Orders in Log</div>
          <p class="text-xs mt-1">When an alert shortage is tackled via the Mail button, it logs here and clears from the active radar.</p>
        </div>
      `;
      refreshIcons();
      return;
    }

    resolvedKeys.forEach(id => {
      const item = appState.resolvedAlerts[id];
      const card = document.createElement('article');
      card.className = "glass-card alert-card-shell";
      card.id = `resolved-card-${id}`;

      card.innerHTML = `
        <div class="alert-card-header">
          <div class="alert-card-identity">
            <div class="alert-category-icon-box text-green">
              <i data-lucide="check-check"></i>
            </div>
            <div>
              <div class="flex items-center gap-1.5">
                <span class="alert-code-tag">#${escapeHtml(item.code)}</span>
                <span class="text-muted text-xs">&bull;</span>
                <span class="text-xs text-muted font-mono uppercase">${escapeHtml(item.category)}</span>
              </div>
              <h2 class="alert-prod-title">${escapeHtml(item.name)}</h2>
            </div>
          </div>
          <span class="badge-healthy font-mono text-xs">RESOLVED VIA DEALER PO</span>
        </div>

        <div class="alert-card-body">
          <div class="unattended-box border-green-500/30">
            <div class="unattended-title text-green">
              <i data-lucide="mail-check" class="w-4 h-4"></i>
              <span>PURCHASE ORDER MAILED TO WHOLESALE DEALER:</span>
            </div>
            <p class="text-xs text-secondary">
              Dispatched order for <strong>+${item.shortageUnits} units</strong> to <strong>${escapeHtml(item.dealerName)}</strong> (${escapeHtml(item.dealerEmail)} &bull; ${escapeHtml(item.dealerPhone)}).
            </p>
            <div class="unattended-loss-row">
              <span class="text-green font-bold">Revenue Safeguarded:</span>
              <strong class="text-green font-mono">₹${parseFloat(item.profitProtected).toLocaleString('en-IN')}</strong>
            </div>
          </div>
        </div>

        <div class="alert-action-strip">
          <div class="text-xs text-muted font-mono">
            Mailed at ${escapeHtml(item.resolvedAt)}
          </div>
          <div class="action-strip-btns">
            <button class="btn btn-ghost btn-sm" onclick="unresolveAlert('${id}')" title="Reopen this alert into active feed">
              <i data-lucide="rotate-ccw" class="w-3.5 h-3.5 text-cyan"></i>
              <span>Reopen Alert</span>
            </button>
            <button class="btn btn-ghost btn-sm" onclick="openEditStockModal('${id}')">
              <i data-lucide="edit-3" class="w-3.5 h-3.5 text-cyan"></i>
              <span>Edit Stock</span>
            </button>
          </div>
        </div>
      `;
      feed.appendChild(card);
    });
    refreshIcons();
    return;
  }

  // VIEW 2: ACTIVE UNRESOLVED ALERTS
  const heading = document.getElementById('alerts-heading-text');
  const sub = document.getElementById('alerts-sub-text');
  if (heading) heading.innerText = "Critical Low-Stock Alerts";
  if (sub) sub.innerText = "Items depleting within 7 days based on sales velocity. Shortages under 24 hours are marked in exact hours. Mail dealer to mark problem solved and clear from feed.";

  let items = appState.products.filter(p => computeMetrics(p).numericDaysLeft <= 7.0 && !appState.resolvedAlerts[p.id]);

  if (appState.homeFilter === 'STAGE3') items = items.filter(p => computeMetrics(p).stage === 'STAGE3');
  else if (appState.homeFilter === 'STAGE2') items = items.filter(p => computeMetrics(p).stage === 'STAGE2');
  else if (appState.homeFilter === 'STAGE1') items = items.filter(p => computeMetrics(p).stage === 'STAGE1');
  else if (appState.homeFilter !== 'ALL') items = items.filter(p => p.category === appState.homeFilter);

  let totalLoss = 0;
  items.forEach(p => totalLoss += parseFloat(computeMetrics(p).upcomingLoss7Days));
  const lossEl = document.getElementById('home-total-loss');
  if (lossEl) lossEl.innerText = `₹${totalLoss.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

  if (items.length === 0) {
    feed.innerHTML = `
      <div class="glass-card p-5 text-center text-muted font-mono">
        <i data-lucide="shield-check" class="w-10 h-10 mx-auto mb-2 text-green"></i>
        <div class="text-white font-bold text-sm">All Stock Depletion Lines Secured</div>
        <p class="text-xs mt-1">Zero unresolved shortages under current radar filter.</p>
      </div>
    `;
    refreshIcons();
    return;
  }

  items.sort((a, b) => computeMetrics(a).numericDaysLeft - computeMetrics(b).numericDaysLeft);

  items.forEach(p => {
    const m = computeMetrics(p);
    const card = document.createElement('article');
    card.className = "glass-card alert-card-shell";
    card.id = `alert-card-${p.id}`;

    let problemText = "";
    if (m.stage === 'STAGE3') {
      problemText = m.isHours 
        ? `Complete stockout imminent within ${m.hoursLeft} hours. Empty shelves lead to lost customer loyalty and immediate revenue destruction.`
        : "Complete stockout imminent. Empty shelves lead to lost customer loyalty and immediate revenue destruction.";
    } else if (m.stage === 'STAGE2') {
      problemText = "Stock levels are critically low. High risk of stockout within 48 to 96 hours without fresh dealer purchase orders.";
    } else {
      problemText = "Depot stock buffer has fallen below standard safety threshold. Escalates to critical warning if not replenished this week.";
    }

    const shortageUnits = m.unitsNeededToClearStage3 > 0 ? m.unitsNeededToClearStage3 : 50;

    card.innerHTML = `
      <!-- Card Header -->
      <div class="alert-card-header">
        <div class="alert-card-identity">
          <div class="alert-category-icon-box">
            <i data-lucide="${getCategoryIconName(p.category)}"></i>
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="alert-code-tag">#${escapeHtml(p.code)}</span>
              <span class="text-muted text-xs">&bull;</span>
              <span class="text-xs text-muted font-mono uppercase">${escapeHtml(p.category)}</span>
            </div>
            <h2 class="alert-prod-title">${escapeHtml(p.name)}</h2>
          </div>
        </div>
        <span class="${m.badgeClass}">${m.stageLabel}</span>
      </div>

      <!-- Card Body -->
      <div class="alert-card-body">
        <div class="horizon-telemetry-row">
          <div>
            <span class="horizon-days-big ${m.stage === 'STAGE3' ? 'text-red' : (m.stage === 'STAGE2' ? 'text-orange' : 'text-cyan')}">${m.timeFormatted}</span>
            <span class="horizon-label">${m.horizonLabel}</span>
          </div>
          <div class="text-right">
            <span class="stock-balance-big text-white font-mono">${p.stock} Stocks Left</span>
            <div class="text-xs text-muted font-mono">Sales Speed: ${m.dailyBurn}/day (${p.lastWeekSales}/wk)</div>
          </div>
        </div>

        <!-- Problem If Unattended & Upcoming Loss -->
        <div class="unattended-box">
          <div class="unattended-title ${m.stage === 'STAGE3' ? 'text-red' : 'text-orange'}">
            <i data-lucide="alert-octagon" class="w-3.5 h-3.5"></i>
            <span>PROBLEM IF UNATTENDED:</span>
          </div>
          <p class="unattended-text">${problemText}</p>
          <div class="unattended-loss-row">
            <span class="text-red font-bold">Upcoming 7-Day Profit Lost:</span>
            <strong class="text-red font-mono">-₹${parseFloat(m.upcomingLoss7Days).toLocaleString('en-IN')} <span class="text-xs text-muted font-normal">(${m.profitMarginPct}% margin)</span></strong>
          </div>
        </div>

        <!-- Tactical Resolution: Shortage can be ordered by mailing dealer -->
        <div class="resolution-playbook-bar">
          <div class="resolution-playbook-text">
            <strong class="text-cyan font-mono block text-xs">HOW TO TACKLE SHORTAGE:</strong>
            <span>Shortage of <strong>+${shortageUnits} units</strong>. Mail dealer to order and resolve.</span>
          </div>
          <div class="flex items-center gap-2">
            <button class="btn btn-primary btn-sm" onclick="quickRestockPrompt('${p.id}', ${shortageUnits})">
              +${shortageUnits} Restock
            </button>
            <button class="btn btn-success btn-sm font-bold" onclick="resolveAlertByMail('${p.id}')" title="Email dealer purchase order and resolve alert">
              <i data-lucide="mail" class="w-3.5 h-3.5"></i>
              <span>Mail & Resolve</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Professional Action Strip with Edit, Delete & Mail Buttons -->
      <div class="alert-action-strip">
        <div class="action-strip-btns">
          <button class="btn btn-ghost btn-sm" onclick="copyProductCode('${p.code}')" title="Copy Stock Code">
            <i data-lucide="copy" class="w-3.5 h-3.5 text-cyan"></i>
            <span>Copy Code</span>
          </button>
          <button class="btn btn-ghost btn-sm text-green font-bold" onclick="resolveAlertByMail('${p.id}')" title="Dispatch PO via Email & Resolve Alert">
            <i data-lucide="mail" class="w-3.5 h-3.5 text-green"></i>
            <span>Email Dealer</span>
          </button>
          <button class="btn btn-ghost btn-sm" onclick="openEditStockModal('${p.id}')" title="Edit All Details For This Stock">
            <i data-lucide="edit-3" class="w-3.5 h-3.5 text-cyan"></i>
            <span>Edit Stock</span>
          </button>
          <button class="btn btn-ghost btn-sm btn-delete" onclick="promptDeleteStock('${p.id}')" title="Delete Stock #${escapeHtml(p.code)}">
            <i data-lucide="trash-2" class="w-3.5 h-3.5 text-red"></i>
            <span>Delete</span>
          </button>
        </div>
        <div class="text-xs font-mono text-muted">
          Dealer: ${escapeHtml(p.dealer?.name || 'Direct Wholesale')} (${escapeHtml(p.dealer?.email || 'orders@dealer.in')})
        </div>
      </div>
    `;

    feed.appendChild(card);
  });
  refreshIcons();
}

/**
 * ALERT SHORTAGE RESOLUTION VIA EMAIL DEALER
 * When mailed, marks problem solved, removes card from feed, and triggers FORCE appreciation!
 */
function resolveAlertByMail(id) {
  const prod = appState.products.find(p => p.id === id);
  if (!prod) return;

  const m = computeMetrics(prod);
  const shortageUnits = m.unitsNeededToClearStage3 > 0 ? m.unitsNeededToClearStage3 : 50;

  // Mark as resolved in state
  appState.resolvedAlerts[id] = {
    id: prod.id,
    code: prod.code,
    name: prod.name,
    category: prod.category,
    shortageUnits: shortageUnits,
    dealerName: prod.dealer?.name || "Direct Wholesale Partner",
    dealerEmail: prod.dealer?.email || "orders@dealer.in",
    dealerPhone: prod.dealer?.phone || "+91-98000-00000",
    profitProtected: m.upcomingLoss7Days,
    resolvedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  saveState();

  // Smooth fade-out animation on the card
  const cardEl = document.getElementById(`alert-card-${id}`);
  if (cardEl) {
    cardEl.classList.add('anim-fade-out');
    setTimeout(() => {
      renderHomePage();
      updateAlertBadge();
    }, 320);
  } else {
    renderHomePage();
    updateAlertBadge();
  }

  showToast(`Wholesale PO for +${shortageUnits} units mailed to ${prod.dealer?.name || 'Dealer'}! Problem marked as resolved & alert cleared from feed.`, "success");

  // FORCE Copilot Real-Time Appreciation
  triggerForceAppreciation('mail_dealer', {
    code: prod.code,
    name: prod.name,
    units: shortageUnits,
    dealer: prod.dealer?.name || "Wholesale Partner",
    profit: m.upcomingLoss7Days
  });
}

function unresolveAlert(id) {
  const prod = appState.products.find(p => p.id === id);
  delete appState.resolvedAlerts[id];
  saveState();
  renderHomePage();
  updateAlertBadge();
  showToast(`Alert for #${prod?.code || ''} reopened to active radar feed.`, "info");
}

function filterHomeAlerts(type) {
  appState.homeFilter = type;
  
  // Highlight active story pill
  const pills = document.querySelectorAll('.stories-strip-wrapper .story-pill');
  pills.forEach(pill => pill.classList.remove('active-pill'));

  renderHomePage();
  refreshIcons();
}

function filterHomeByDept(dept) {
  appState.homeFilter = dept;
  renderHomePage();
  refreshIcons();
}

function copyProductCode(code) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code);
    }
  } catch (_) {}
  showToast(`Stock #${code} copied to clipboard!`, 'info');
}

/**
 * ==========================================================================
 * PAGE 2: P&L INSIGHTS // PRODUCT GRAPH IN ₹ & %
 * ==========================================================================
 */
let pnlChartInstance = null;

function renderInsightsPage() {
  let totalProfit = 0, totalRev = 0, totalLoss = 0;

  appState.products.forEach(p => {
    const m = computeMetrics(p);
    totalProfit += parseFloat(m.weeklyProfit);
    totalRev += (p.lastWeekSales * p.sellingPrice);
    if (m.stage === 'STAGE3' || m.stage === 'STAGE2') {
      totalLoss += parseFloat(m.upcomingLoss7Days);
    }
  });

  const overallMargin = totalRev > 0 ? ((totalProfit / totalRev) * 100).toFixed(1) : "0.0";
  const profitEl = document.getElementById('ins-total-profit');
  const marginEl = document.getElementById('ins-overall-margin');
  const lossEl = document.getElementById('ins-total-loss');

  if (profitEl) profitEl.innerText = `₹${totalProfit.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
  if (marginEl) marginEl.innerText = `Margin: ${overallMargin}%`;
  if (lossEl) lossEl.innerText = `-₹${totalLoss.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

  const select = document.getElementById('pnl-product-select');
  if (select) {
    const prev = select.value;
    select.innerHTML = appState.products.map(p => `<option value="${p.id}">#${p.code} - ${p.name} (${p.category})</option>`).join('');
    if (prev && appState.products.some(p => p.id === prev)) select.value = prev;
  }

  renderProductFocusedChart();
  renderAllProductsLedger();
}

function renderProductFocusedChart() {
  const select = document.getElementById('pnl-product-select');
  if (!select || !select.value) return;

  const prod = appState.products.find(p => p.id === select.value);
  if (!prod) return;

  const m = computeMetrics(prod);

  const container = document.getElementById('focused-metrics-container');
  if (container) {
    container.innerHTML = `
      <div class="glass-card p-3">
        <span class="text-xs text-muted font-mono block">Buying Cost Price</span>
        <div class="font-mono font-bold text-white text-base mt-1">₹${prod.costPrice.toFixed(2)}</div>
      </div>
      <div class="glass-card p-3">
        <span class="text-xs text-muted font-mono block">Retail Selling Price</span>
        <div class="font-mono font-bold text-white text-base mt-1">₹${prod.sellingPrice.toFixed(2)}</div>
      </div>
      <div class="glass-card p-3">
        <span class="text-xs text-green font-mono block">Profit / Unit in ₹ & %</span>
        <div class="font-mono font-bold text-green text-base mt-1">₹${m.profitPerUnit} (${m.profitMarginPct}%)</div>
      </div>
      <div class="glass-card p-3">
        <span class="text-xs text-green font-mono block">Weekly Realized Profit</span>
        <div class="font-mono font-bold text-green text-base mt-1">₹${parseFloat(m.weeklyProfit).toLocaleString('en-IN')}</div>
      </div>
      <div class="glass-card p-3">
        <span class="text-xs text-red font-mono block">Money Lost If Empty</span>
        <div class="font-mono font-bold text-red text-base mt-1">-₹${parseFloat(m.upcomingLoss7Days).toLocaleString('en-IN')}</div>
      </div>
    `;
  }

  const ctx = document.getElementById('product-pnl-canvas')?.getContext('2d');
  if (!ctx) return;
  if (pnlChartInstance) pnlChartInstance.destroy();

  const isLight = appState.theme === 'light';
  const labelColor = isLight ? '#18181b' : '#f4f4f5';
  const tickColor = isLight ? '#52525b' : '#a1a1aa';
  const gridColor = isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.06)';

  pnlChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Buying Cost (₹)', 'Selling Price (₹)', 'Profit Per Unit (₹)', 'Weekly Profit (₹)', '7d Loss If Out (₹)'],
      datasets: [{
        label: `Financials (₹) - #${prod.code} ${prod.name}`,
        data: [
          prod.costPrice,
          prod.sellingPrice,
          parseFloat(m.profitPerUnit),
          parseFloat(m.weeklyProfit),
          parseFloat(m.upcomingLoss7Days)
        ],
        backgroundColor: [
          isLight ? 'rgba(113, 113, 122, 0.45)' : 'rgba(113, 113, 122, 0.4)',
          isLight ? 'rgba(37, 99, 235, 0.65)' : 'rgba(59, 130, 246, 0.55)',
          isLight ? 'rgba(21, 128, 61, 0.7)' : 'rgba(16, 185, 129, 0.6)',
          isLight ? 'rgba(21, 128, 61, 0.9)' : 'rgba(16, 185, 129, 0.85)',
          isLight ? 'rgba(185, 28, 28, 0.85)' : 'rgba(239, 68, 68, 0.75)'
        ],
        borderColor: isLight 
          ? ['#71717a', '#2563eb', '#15803d', '#15803d', '#b91c1c']
          : ['#a1a1aa', '#3b82f6', '#10b981', '#10b981', '#ef4444'],
        borderWidth: 1.5,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: labelColor, font: { family: 'Inter', size: 12, weight: 800 } } }
      },
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: {
            color: tickColor,
            font: { family: 'Inter', size: window.innerWidth < 640 ? 10 : 11, weight: 700 },
            maxRotation: window.innerWidth < 640 ? 45 : 0,
            minRotation: window.innerWidth < 640 ? 25 : 0,
            callback: function(val) {
              const fullLabel = this.getLabelForValue(val);
              if (window.innerWidth < 480) {
                const shortMap = {
                  'Buying Cost (₹)': 'Cost',
                  'Selling Price (₹)': 'Price',
                  'Profit Per Unit (₹)': 'Margin',
                  'Weekly Profit (₹)': 'Profit',
                  '7d Loss If Out (₹)': '7d Loss'
                };
                return shortMap[fullLabel] || fullLabel;
              }
              return fullLabel;
            }
          }
        },
        y: {
          grid: { color: gridColor },
          ticks: {
            color: tickColor,
            font: { family: 'JetBrains Mono', size: window.innerWidth < 640 ? 10 : 11, weight: 700 },
            callback: v => '₹' + v.toLocaleString('en-IN')
          }
        }
      }
    }
  });
}

function renderAllProductsLedger() {
  const grid = document.getElementById('all-products-pnl-grid');
  if (!grid) return;

  const sorted = [...appState.products].sort((a, b) => a.code.localeCompare(b.code));

  grid.innerHTML = sorted.map(p => {
    const m = computeMetrics(p);
    return `
      <div class="ledger-card">
        <div class="flex justify-between items-start">
          <div>
            <span class="font-mono text-xs font-bold text-cyan">#${escapeHtml(p.code)}</span>
            <h4 class="font-bold text-white text-sm">${escapeHtml(p.name)}</h4>
            <span class="text-xs text-muted font-mono uppercase">${escapeHtml(p.category)}</span>
          </div>
          <span class="font-mono text-xs font-bold ${m.stage === 'STAGE3' ? 'text-red' : 'text-green'}">
            ${m.profitMarginPct}% margin
          </span>
        </div>

        <div class="space-y-1 text-xs font-mono pt-2 border-t border-white-5">
          <div class="flex justify-between text-muted"><span>Selling Price:</span><strong class="text-white">₹${p.sellingPrice.toFixed(2)}</strong></div>
          <div class="flex justify-between text-muted"><span>Buying Cost:</span><span>₹${p.costPrice.toFixed(2)}</span></div>
          <div class="flex justify-between text-green font-bold"><span>Profit / Unit:</span><span>₹${m.profitPerUnit}</span></div>
          <div class="flex justify-between text-white"><span>Weekly Realized:</span><span>₹${parseFloat(m.weeklyProfit).toLocaleString('en-IN')}</span></div>
          <div class="flex justify-between text-red"><span>Risk If Unattended:</span><span>-₹${parseFloat(m.upcomingLoss7Days).toLocaleString('en-IN')}</span></div>
        </div>

        <div class="ledger-card-footer pt-2 border-t border-white-5">
          <span class="${m.badgeClass}">${m.timeLeftBadge}</span>
          <div class="flex items-center gap-1.5 ledger-card-actions">
            <button class="btn btn-ghost btn-sm" onclick="openEditStockModal('${p.id}')" title="Edit Stock Details">
              <i data-lucide="edit-3" class="w-3.5 h-3.5 text-cyan"></i>
              <span>Edit</span>
            </button>
            <button class="btn btn-ghost btn-sm btn-delete" onclick="promptDeleteStock('${p.id}')" title="Delete Stock #${escapeHtml(p.code)}">
              <i data-lucide="trash-2" class="w-3.5 h-3.5 text-red"></i>
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * ==========================================================================
 * PAGE 3: STOCKS LIST & SEPARATE LAST WEEK SALES BOXES (TOP TO BOTTOM)
 * ==========================================================================
 */
function renderProductsPage() {
  // Category filter pills
  const pills = document.getElementById('inventory-category-pills');
  if (pills) {
    pills.innerHTML = `
      <button class="cat-pill-btn ${appState.selectedCategory === 'ALL' ? 'active' : ''}" onclick="selectInventoryCat('ALL')">
        <i data-lucide="layers" class="w-3.5 h-3.5"></i>
        <span>All (${appState.products.length})</span>
      </button>
    ` + appState.categories.map(c => `
      <button class="cat-pill-btn ${appState.selectedCategory === c.name ? 'active' : ''}" onclick="selectInventoryCat('${c.name}')">
        <i data-lucide="${c.icon || 'package'}" class="w-3.5 h-3.5"></i>
        <span>${c.name} (${appState.products.filter(p => p.category === c.name).length})</span>
      </button>
    `).join('');
  }

  // Grouped Stocks with Edit & Delete Buttons inside EVERY Box
  const container = document.getElementById('products-grouped-container');
  if (container) {
    const q = (document.getElementById('inventory-search-input')?.value || '').toLowerCase().trim();
    let cats = appState.selectedCategory === 'ALL' ? appState.categories : appState.categories.filter(c => c.name === appState.selectedCategory);

    container.innerHTML = cats.map(c => {
      let prods = appState.products.filter(p => p.category === c.name && (!q || p.code.includes(q) || p.name.toLowerCase().includes(q)));
      if (prods.length === 0 && appState.selectedCategory === 'ALL') return '';
      prods.sort((a, b) => a.code.localeCompare(b.code));

      return `
        <div class="category-dept-block">
          <div class="category-dept-title">
            <i data-lucide="${c.icon || 'package'}" class="w-4 h-4 text-cyan"></i>
            <span>${escapeHtml(c.name)}</span>
            <span class="text-xs text-muted font-normal font-mono">(${prods.length} Stocks)</span>
          </div>

          <div class="dept-items-grid">
            ${prods.map(p => {
              const m = computeMetrics(p);
              return `
                <div class="dept-sku-card" id="card-${p.id}">
                  <div>
                    <div class="flex justify-between items-start">
                      <span class="font-mono text-xs font-bold text-cyan">#${escapeHtml(p.code)}</span>
                      <span class="${m.badgeClass}">${m.timeLeftBadge}</span>
                    </div>
                    <h4 class="font-bold text-white text-sm mt-1">${escapeHtml(p.name)}</h4>
                  </div>

                  <div class="space-y-1.5 pt-2 border-t border-white-5 text-xs font-mono">
                    <div class="flex justify-between">
                      <span class="text-muted">Retail Price:</span>
                      <strong class="text-cyan font-bold">₹${p.sellingPrice.toFixed(2)}</strong>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-muted">Buying Cost:</span>
                      <span class="text-white">₹${p.costPrice.toFixed(2)}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-green font-bold">Profit Per Unit:</span>
                      <span class="text-green font-bold">₹${m.profitPerUnit} (${m.profitMarginPct}%)</span>
                    </div>
                    <div class="flex justify-between pt-1 border-t border-white-5">
                      <span class="${p.stock <= 3 ? 'text-red font-bold' : 'text-white'}">In Stock: ${p.stock} units</span>
                      <span class="text-muted">Last Wk: ${p.lastWeekSales}/wk</span>
                    </div>
                    <div class="text-[11px] text-muted truncate">
                      Dealer: ${escapeHtml(p.dealer?.name || 'Direct Wholesale')} (${escapeHtml(p.dealer?.phone || 'N/A')})
                    </div>
                  </div>

                  <!-- ACTIONS: EDIT & DELETE BUTTONS IN EVERY STOCK BOX -->
                  <div class="pt-2 border-t border-white-5 flex items-center gap-2">
                    <button class="btn btn-ghost btn-sm flex-1 font-bold" onclick="openEditStockModal('${p.id}')" title="Edit details for #${escapeHtml(p.code)}">
                      <i data-lucide="edit-3" class="w-3.5 h-3.5 text-cyan"></i>
                      <span>Edit</span>
                    </button>
                    <button class="btn btn-ghost btn-sm btn-delete font-bold px-2.5" onclick="promptDeleteStock('${p.id}')" title="Delete #${escapeHtml(p.code)} (${escapeHtml(p.name)})">
                      <i data-lucide="trash-2" class="w-3.5 h-3.5 text-red"></i>
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  // Last Week Sales Separate Boxes (Ordered Top to Bottom) with Edit & Delete Buttons
  const verticalBoxContainer = document.getElementById('sales-boxes-vertical-container');
  if (verticalBoxContainer) {
    const sorted = [...appState.products].sort((a, b) => a.code.localeCompare(b.code));
    verticalBoxContainer.innerHTML = sorted.map(p => {
      const m = computeMetrics(p);
      return `
        <div class="velocity-unit-box">
          <div class="flex items-center gap-3">
            <span class="v-sku-pill">#${escapeHtml(p.code)}</span>
            <div>
              <strong class="text-white text-sm block">${escapeHtml(p.name)}</strong>
              <div class="text-xs text-muted font-mono uppercase">${escapeHtml(p.category)} &bull; Retail: ₹${p.sellingPrice.toFixed(2)} &bull; Profit: ₹${m.profitPerUnit}</div>
            </div>
          </div>

          <div class="velocity-telemetry-row flex items-center gap-4 text-xs font-mono">
            <div><span class="text-muted block text-[10px]">CURRENT STOCK:</span><strong class="${p.stock <= 3 ? 'text-red' : 'text-white'}">${p.stock} units</strong></div>
            <div><span class="text-muted block text-[10px]">DAILY SPEED:</span><strong class="text-cyan">${m.dailyBurn}/d</strong></div>
            <div><span class="text-muted block text-[10px]">DEPLETION:</span><strong class="${m.stage === 'STAGE3' ? 'text-red' : (m.stage === 'STAGE2' ? 'text-orange' : 'text-green')}">${m.timeFormatted}</strong></div>
          </div>

          <div class="velocity-actions-row flex items-center gap-2 flex-wrap">
            <div class="flex items-center gap-2 flex-1 min-w-[200px]">
              <label class="text-xs text-muted font-mono whitespace-nowrap" for="inp-sales-${p.id}">Last Wk:</label>
              <input type="number" step="0.5" min="1" id="inp-sales-${p.id}" value="${p.lastWeekSales}" class="v-input-field" />
              <button class="btn btn-ghost btn-sm" onclick="saveWeeklySalesEntry('${p.id}')">Save</button>
            </div>
            <div class="flex items-center gap-2">
              <button class="btn btn-primary btn-sm" onclick="openEditStockModal('${p.id}')" title="Edit All Parameters For #${escapeHtml(p.code)}">
                <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                <span>Edit</span>
              </button>
              <button class="btn btn-ghost btn-sm btn-delete" onclick="promptDeleteStock('${p.id}')" title="Delete Stock #${escapeHtml(p.code)}">
                <i data-lucide="trash-2" class="w-3.5 h-3.5 text-red"></i>
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}

function selectInventoryCat(cat) {
  appState.selectedCategory = cat;
  renderProductsPage();
  refreshIcons();
}

function saveWeeklySalesEntry(id) {
  const input = document.getElementById(`inp-sales-${id}`);
  const val = parseFloat(input?.value);
  if (isNaN(val) || val <= 0) return showToast("Enter a valid weekly sales number", "error");

  const prod = appState.products.find(p => p.id === id);
  if (prod) {
    prod.lastWeekSales = val;
    saveState();
    renderAll();
    showToast(`Updated Last Week Sales for #${prod.code} to ${val} units/wk!`, "success");
    triggerForceAppreciation('edit_stock', { code: prod.code, name: prod.name });
  }
}

/**
 * ==========================================================================
 * EDIT STOCK MODAL LOGIC (Edit Name, Code, Prices, Profit, Dealer Details)
 * ==========================================================================
 */
function openEditStockModal(id) {
  const p = appState.products.find(x => x.id === id);
  if (!p) return showToast("Stock not found", "error");

  document.getElementById('edit-stock-id').value = p.id;
  document.getElementById('edit-stock-code').value = p.code;
  document.getElementById('edit-stock-name').value = p.name;
  document.getElementById('edit-stock-qty').value = p.stock;
  document.getElementById('edit-stock-sales').value = p.lastWeekSales;
  document.getElementById('edit-stock-cost').value = p.costPrice;
  document.getElementById('edit-stock-price').value = p.sellingPrice;

  // Populate Categories
  const catSelect = document.getElementById('edit-stock-category');
  if (catSelect) {
    catSelect.innerHTML = appState.categories.map(c => `<option value="${c.name}" ${c.name === p.category ? 'selected' : ''}>${c.name}</option>`).join('');
  }

  // Populate Wholesale Dealer Details
  document.getElementById('edit-stock-dealer-name').value = p.dealer?.name || '';
  document.getElementById('edit-stock-dealer-phone').value = p.dealer?.phone || '';
  document.getElementById('edit-stock-dealer-email').value = p.dealer?.email || '';

  // Update Live Profit Preview
  updateLiveProfitPreview();
  openModal('modal-edit-stock');
}

function updateLiveProfitPreview() {
  const cost = parseFloat(document.getElementById('edit-stock-cost')?.value) || 0;
  const price = parseFloat(document.getElementById('edit-stock-price')?.value) || 0;
  const profit = price - cost;
  const margin = price > 0 ? ((profit / price) * 100).toFixed(1) : "0.0";

  const previewEl = document.getElementById('edit-preview-profit');
  if (previewEl) {
    if (profit >= 0) {
      previewEl.className = "text-green font-bold";
      previewEl.innerText = `+₹${profit.toFixed(2)} (${margin}% profit margin)`;
    } else {
      previewEl.className = "text-red font-bold";
      previewEl.innerText = `-₹${Math.abs(profit).toFixed(2)} (${margin}% loss margin)`;
    }
  }
}

function handleSaveEditedStock(e) {
  e.preventDefault();
  const id = document.getElementById('edit-stock-id').value;
  const code = document.getElementById('edit-stock-code').value.trim();
  const name = document.getElementById('edit-stock-name').value.trim();
  const category = document.getElementById('edit-stock-category').value;
  const stock = parseInt(document.getElementById('edit-stock-qty').value) || 0;
  const lastWeekSales = parseFloat(document.getElementById('edit-stock-sales').value) || 1;
  const costPrice = parseFloat(document.getElementById('edit-stock-cost').value) || 0;
  const sellingPrice = parseFloat(document.getElementById('edit-stock-price').value) || 0;

  const dealerName = document.getElementById('edit-stock-dealer-name').value.trim();
  const dealerPhone = document.getElementById('edit-stock-dealer-phone').value.trim();
  const dealerEmail = document.getElementById('edit-stock-dealer-email').value.trim();

  if (code.length !== 4 || isNaN(code)) {
    return showToast("Stock code must be exactly a 4-digit number", "error");
  }

  // Ensure 4-digit uniqueness among other stocks
  if (appState.products.some(p => p.id !== id && p.code === code)) {
    return showToast(`Stock code #${code} is already in use by another item`, "error");
  }

  const prod = appState.products.find(p => p.id === id);
  if (!prod) return showToast("Stock record not found", "error");

  prod.code = code;
  prod.name = name;
  prod.category = category;
  prod.stock = Math.max(0, stock);
  prod.lastWeekSales = Math.max(0.5, lastWeekSales);
  prod.costPrice = costPrice;
  prod.sellingPrice = sellingPrice;

  prod.dealer = {
    name: dealerName || "Direct Wholesale Partner",
    company: prod.dealer?.company || `${category} Supplies`,
    phone: dealerPhone || "+91-98000-00000",
    email: dealerEmail || "orders@dealer.in"
  };

  saveState();
  closeModal('modal-edit-stock');
  renderAll();
  showToast(`Successfully updated all parameters for Stock #${code} (${name})!`, "success");
  triggerForceAppreciation('edit_stock', { code, name });
}

/**
 * ==========================================================================
 * STOCK DELETION LOGIC (Prompt & Confirmation)
 * ==========================================================================
 */
function promptDeleteStock(id) {
  const prod = appState.products.find(p => p.id === id);
  if (!prod) return showToast("Stock not found", "error");

  const targetInput = document.getElementById('delete-target-id');
  if (targetInput) targetInput.value = id;

  const msgEl = document.getElementById('delete-confirm-msg');
  if (msgEl) {
    msgEl.innerHTML = `Are you sure you want to permanently delete <strong>#${escapeHtml(prod.code)} ${escapeHtml(prod.name)}</strong> (${escapeHtml(prod.category)})?<br/><br/><span class="text-xs text-muted font-mono">Current Stock: ${prod.stock} units &bull; Price: ₹${prod.sellingPrice.toFixed(2)}</span>`;
  }

  openModal('modal-delete-confirm');
}

function executeDeleteStock() {
  const targetId = document.getElementById('delete-target-id')?.value;
  if (!targetId) return;

  const prod = appState.products.find(p => p.id === targetId);
  if (!prod) {
    closeModal('modal-delete-confirm');
    return;
  }

  const code = prod.code;
  const name = prod.name;

  // Remove from products and cart and resolved alerts
  appState.products = appState.products.filter(p => p.id !== targetId);
  appState.cart = appState.cart.filter(item => item.id !== targetId);
  delete appState.resolvedAlerts[targetId];

  saveState();
  closeModal('modal-delete-confirm');
  renderAll();
  showToast(`Stock #${code} (${name}) permanently removed from inventory.`, "info");
  triggerForceAppreciation('delete_stock', { code, name });
}

/**
 * ==========================================================================
 * MODALS: REGISTER NEW STOCK & NEW CATEGORY
 * ==========================================================================
 */
function openNewProductModal() {
  const sel = document.getElementById('inp-prod-cat');
  if (sel) sel.innerHTML = appState.categories.map(c => `<option value="${escapeHtml(c.name)}">${escapeHtml(c.name)}</option>`).join('');
  openModal('modal-new-product');
}

function handleCreateProduct(e) {
  e.preventDefault();
  const code = document.getElementById('inp-prod-code').value.trim();
  const name = document.getElementById('inp-prod-name').value.trim();
  const category = document.getElementById('inp-prod-cat').value;
  const stock = parseInt(document.getElementById('inp-prod-stock').value) || 0;
  const cost = parseFloat(document.getElementById('inp-prod-cost').value) || 0;
  const price = parseFloat(document.getElementById('inp-prod-price').value) || 0;
  const avg = parseFloat(document.getElementById('inp-prod-avg').value) || 14;

  if (code.length !== 4 || isNaN(code)) return showToast("Code must be a 4-digit number", "error");
  if (appState.products.some(p => p.code === code)) return showToast(`Code #${code} already registered`, "error");

  appState.products.push({
    id: `stk-${code}`,
    code,
    name,
    category,
    stock,
    costPrice: cost,
    sellingPrice: price,
    lastWeekSales: avg,
    dealer: { name: "Authorized Wholesale Dealer", company: `${category} Supplies`, phone: "+91-98000-00000", email: "orders@dealer.in" }
  });

  saveState();
  closeModal('modal-new-product');
  renderAll();
  showToast(`Stock #${code} (${name}) registered successfully!`, "success");
  triggerForceAppreciation('new_stock', { code, name, category });
}

function openNewCategoryModal() {
  openModal('modal-new-category');
}

function handleCreateCategory(e) {
  e.preventDefault();
  const name = document.getElementById('inp-cat-name').value.trim();
  const icon = document.getElementById('inp-cat-icon').value.trim() || 'package';

  if (appState.categories.some(c => c.name.toLowerCase() === name.toLowerCase())) {
    return showToast("Category already exists", "error");
  }

  appState.categories.push({ name, icon });
  saveState();
  closeModal('modal-new-category');
  renderAll();
  showToast(`Category '${name}' created!`, "success");
}

/**
 * ==========================================================================
 * PAGE 4: ADMIN / ACCOUNTS & MULTIPLE MANAGERS + CUSTOM SHIFTS
 * ==========================================================================
 */
function renderAdminPage() {
  document.getElementById('admin-disp-store-name').innerText = appState.storeProfile.storeName;
  document.getElementById('admin-stat-skus').innerText = appState.products.length;
  document.getElementById('admin-stat-depts').innerText = appState.categories.length;
  document.getElementById('admin-stat-alerts').innerText = appState.products.filter(p => computeMetrics(p).numericDaysLeft <= 7.0 && !appState.resolvedAlerts[p.id]).length;

  const mgrCountEl = document.getElementById('admin-stat-managers');
  if (mgrCountEl) mgrCountEl.innerText = appState.managers.length;

  // Render Multiple Managers & Shift Schedule Roster
  renderManagersList();

  // Financial Drafts
  let weekRev = 0, weekCogs = 0, weekLoss = 0;
  appState.products.forEach(p => {
    const m = computeMetrics(p);
    weekRev += p.lastWeekSales * p.sellingPrice;
    weekCogs += p.lastWeekSales * p.costPrice;
    if (m.stage === 'STAGE3' || m.stage === 'STAGE2') weekLoss += parseFloat(m.upcomingLoss7Days);
  });

  const weekProfit = weekRev - weekCogs;
  const weekMargin = weekRev > 0 ? ((weekProfit / weekRev) * 100).toFixed(1) : "0.0";

  document.getElementById('draft-week-rev').innerText = `₹${weekRev.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
  document.getElementById('draft-week-cogs').innerText = `₹${weekCogs.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
  document.getElementById('draft-week-profit').innerText = `₹${weekProfit.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
  document.getElementById('draft-week-margin').innerText = `${weekMargin}%`;
  document.getElementById('draft-week-loss').innerText = `-₹${weekLoss.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

  const monthRev = weekRev * 4.3;
  const monthCogs = weekCogs * 4.3;
  const monthProfit = monthRev - monthCogs;
  const monthMargin = monthRev > 0 ? ((monthProfit / monthRev) * 100).toFixed(1) : "0.0";

  document.getElementById('draft-month-rev').innerText = `₹${monthRev.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
  document.getElementById('draft-month-cogs').innerText = `₹${monthCogs.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
  document.getElementById('draft-month-profit').innerText = `₹${monthProfit.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
  document.getElementById('draft-month-margin').innerText = `${monthMargin}%`;
  document.getElementById('draft-month-loss').innerText = `-₹${(weekLoss * 4.0).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
}

function renderManagersList() {
  const container = document.getElementById('managers-list-container');
  if (!container) return;

  container.innerHTML = appState.managers.map(m => {
    let shiftBadgeClass = "shift-general";
    const sLower = m.shift.toLowerCase();
    if (sLower.includes("morning")) shiftBadgeClass = "shift-morning";
    else if (sLower.includes("evening")) shiftBadgeClass = "shift-evening";
    else if (sLower.includes("night")) shiftBadgeClass = "shift-night";

    const initials = m.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

    return `
      <div class="manager-card ${m.active ? 'is-active-duty' : ''}">
        <div class="manager-card-header">
          <div class="mgr-avatar">${escapeHtml(initials)}</div>
          <div class="mgr-info-block">
            <h4 class="mgr-info-name">${escapeHtml(m.name)}</h4>
            <span class="mgr-info-role">${escapeHtml(m.role)}</span>
          </div>
        </div>

        <div>
          <span class="shift-tag-badge ${shiftBadgeClass}">
            <i data-lucide="clock" class="w-3 h-3"></i>
            <span>${escapeHtml(m.shift)}</span>
          </span>
        </div>

        <div class="mgr-contacts-grid">
          <div class="mgr-contact-chip" title="Manager Email">
            <i data-lucide="mail" class="w-3.5 h-3.5 text-cyan shrink-0"></i>
            <span class="truncate">${escapeHtml(m.email)}</span>
          </div>
          <div class="mgr-contact-chip" title="Manager Phone Number">
            <i data-lucide="phone" class="w-3.5 h-3.5 text-cyan shrink-0"></i>
            <span class="truncate">${escapeHtml(m.phone)}</span>
          </div>
        </div>

        <div class="manager-card-footer">
          <div class="duty-status-pill ${m.active ? 'active' : 'inactive'}">
            <span class="${m.active ? 'status-online-dot' : 'w-2 h-2 rounded-full bg-slate-500'}"></span>
            <span>${m.active ? 'Active On Duty' : 'Off Shift'}</span>
          </div>

          <div class="flex items-center gap-1.5 flex-wrap">
            ${!m.active ? `
              <button class="btn btn-ghost btn-sm" onclick="setActiveManager('${m.id}')" title="Set this manager as currently active on duty">
                Set On Duty
              </button>
            ` : `
              <span class="text-xs text-green font-mono font-bold">Current</span>
            `}
            <!-- EDIT SHIFT BUTTON (Customizable rather than pre-loaded!) -->
            <button class="btn btn-ghost btn-sm" onclick="openEditManagerModal('${m.id}')" title="Edit Manager & Custom Shift Schedule">
              <i data-lucide="calendar" class="w-3.5 h-3.5 text-cyan"></i>
              <span>Edit Shift</span>
            </button>
            ${appState.managers.length > 1 ? `
              <button class="btn btn-ghost btn-sm text-red" onclick="deleteManager('${m.id}')" title="Remove this manager account">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openAddManagerModal() {
  document.getElementById('inp-mgr-shift').value = "Morning Shift (08:00 AM - 04:00 PM)";
  openModal('modal-add-manager');
}

function handleAddManager(e) {
  e.preventDefault();
  const name = document.getElementById('inp-mgr-name').value.trim();
  const email = document.getElementById('inp-mgr-email').value.trim();
  const phone = document.getElementById('inp-mgr-phone').value.trim();
  const role = document.getElementById('inp-mgr-role').value.trim();
  const shift = document.getElementById('inp-mgr-shift').value.trim();

  if (!name || !email || !shift) return showToast("Name, email, and shift timings are required", "error");

  const newMgr = {
    id: `mgr-${Date.now()}`,
    name,
    email,
    phone: phone || "+91-98000-00000",
    role: role || "Shift Supervisor",
    shift,
    active: false
  };

  appState.managers.push(newMgr);
  saveState();
  closeModal('modal-add-manager');
  renderAll();
  showToast(`Manager account created for ${name} with shift: ${shift}!`, "success");
  triggerForceAppreciation('shift_updated', { managerName: name, shift });
}

function openEditManagerModal(id) {
  const mgr = appState.managers.find(m => m.id === id);
  if (!mgr) return showToast("Manager not found", "error");

  document.getElementById('edit-mgr-id').value = mgr.id;
  document.getElementById('edit-mgr-name').value = mgr.name;
  document.getElementById('edit-mgr-email').value = mgr.email;
  document.getElementById('edit-mgr-phone').value = mgr.phone;
  document.getElementById('edit-mgr-role').value = mgr.role;
  document.getElementById('edit-mgr-shift').value = mgr.shift;

  openModal('modal-edit-manager');
}

function handleSaveEditedManager(e) {
  e.preventDefault();
  const id = document.getElementById('edit-mgr-id').value;
  const name = document.getElementById('edit-mgr-name').value.trim();
  const email = document.getElementById('edit-mgr-email').value.trim();
  const phone = document.getElementById('edit-mgr-phone').value.trim();
  const role = document.getElementById('edit-mgr-role').value.trim();
  const shift = document.getElementById('edit-mgr-shift').value.trim();

  const mgr = appState.managers.find(m => m.id === id);
  if (!mgr) return showToast("Manager record not found", "error");

  mgr.name = name;
  mgr.email = email;
  mgr.phone = phone;
  mgr.role = role;
  mgr.shift = shift;

  saveState();
  closeModal('modal-edit-manager');
  renderAll();
  showToast(`Custom shift schedule saved for ${name} (${shift})!`, "success");
  triggerForceAppreciation('shift_updated', { managerName: name, shift });
}

function setShiftPreset(target, value) {
  if (target === 'edit') {
    const el = document.getElementById('edit-mgr-shift');
    if (el) el.value = value;
  } else if (target === 'add') {
    const el = document.getElementById('inp-mgr-shift');
    if (el) el.value = value;
  }
}

function setActiveManager(id) {
  appState.managers.forEach(m => {
    m.active = (m.id === id);
  });
  saveState();
  renderAll();
  const active = appState.managers.find(m => m.id === id);
  showToast(`${active.name} is now the Active Store Manager On Duty!`, "success");
}

function deleteManager(id) {
  if (appState.managers.length <= 1) return showToast("At least one store manager is required", "error");
  const mgr = appState.managers.find(m => m.id === id);
  if (mgr && mgr.active) {
    appState.managers = appState.managers.filter(m => m.id !== id);
    appState.managers[0].active = true;
  } else {
    appState.managers = appState.managers.filter(m => m.id !== id);
  }
  saveState();
  renderAll();
  showToast("Manager account removed from roster", "info");
}

function openEditStoreModal() {
  document.getElementById('inp-edit-store-name').value = appState.storeProfile.storeName;
  document.getElementById('inp-edit-manager-name').value = appState.storeProfile.managerName;
  document.getElementById('inp-edit-manager-email').value = appState.storeProfile.managerEmail;
  document.getElementById('inp-edit-manager-pin').value = appState.storeProfile.managerPin;
  openModal('modal-edit-store');
}

function handleSaveStoreProfile(e) {
  e.preventDefault();
  appState.storeProfile.storeName = document.getElementById('inp-edit-store-name').value.trim();
  appState.storeProfile.managerName = document.getElementById('inp-edit-manager-name').value.trim();
  appState.storeProfile.managerEmail = document.getElementById('inp-edit-manager-email').value.trim();
  appState.storeProfile.managerPin = document.getElementById('inp-edit-manager-pin').value.trim();
  saveState();
  closeModal('modal-edit-store');
  renderAll();
  showToast("Store profile updated successfully!", "success");
}

/**
 * ==========================================================================
 * POS CASHIER BILLING (Auto-Stock Deduction)
 * ==========================================================================
 */
function openBillingModal() {
  document.getElementById('pos-quick-items-grid').innerHTML = appState.products.map(p => `
    <div class="pos-sku-chip" onclick="addToCart('${p.id}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' ')addToCart('${p.id}')" aria-label="Add #${escapeHtml(p.code)} ${escapeHtml(p.name)} to cart">
      <span class="text-cyan font-mono font-bold text-xs">#${escapeHtml(p.code)}</span>
      <div class="truncate text-white text-xs font-semibold mt-1">${escapeHtml(p.name)}</div>
      <div class="text-green font-mono text-xs font-bold mt-1">₹${p.sellingPrice.toFixed(2)}</div>
    </div>
  `).join('');
  renderCart();
  openModal('modal-billing');
}

function handlePosAddByCode() {
  const code = document.getElementById('pos-search-code').value.trim();
  const prod = appState.products.find(p => p.code === code);
  if (!prod) return showToast(`Stock code #${code} not found in inventory`, "error");
  addToCart(prod.id);
  document.getElementById('pos-search-code').value = '';
}

function addToCart(id) {
  const prod = appState.products.find(p => p.id === id);
  if (!prod || prod.stock <= 0) return showToast("Physical stock exhausted for this item", "error");

  const exist = appState.cart.find(c => c.id === id);
  if (exist) {
    if (exist.qty + 1 > prod.stock) return showToast("Cannot exceed available physical stock", "error");
    exist.qty += 1;
  } else {
    appState.cart.push({ id, qty: 1 });
  }
  renderCart();
}

function renderCart() {
  const box = document.getElementById('pos-cart-lines');
  let subtotal = 0, cost = 0;

  if (appState.cart.length === 0) {
    box.innerHTML = `<span class="text-muted text-xs font-mono">Cart is empty. Tap any stock above to add to bill.</span>`;
    document.getElementById('btn-complete-bill').disabled = true;
  } else {
    document.getElementById('btn-complete-bill').disabled = false;
    box.innerHTML = appState.cart.map(c => {
      const p = appState.products.find(x => x.id === c.id);
      if (!p) return '';
      subtotal += p.sellingPrice * c.qty;
      cost += p.costPrice * c.qty;
      return `<div class="flex justify-between items-center text-xs"><span>#${p.code} ${p.name} (${c.qty}x)</span><strong class="font-mono">₹${(p.sellingPrice * c.qty).toFixed(2)}</strong></div>`;
    }).join('');
  }

  const gst = subtotal * 0.05;
  document.getElementById('pos-disp-subtotal').innerText = `₹${subtotal.toFixed(2)}`;
  document.getElementById('pos-disp-gst').innerText = `₹${gst.toFixed(2)}`;
  document.getElementById('pos-disp-profit').innerText = `₹${(subtotal - cost).toFixed(2)}`;
  document.getElementById('pos-disp-total').innerText = `₹${(subtotal + gst).toFixed(2)}`;
}

function clearCart() {
  appState.cart = [];
  renderCart();
}

function processPOSCheckout() {
  let totalBilled = 0, costBilled = 0, totalItems = 0;

  appState.cart.forEach(c => {
    const p = appState.products.find(x => x.id === c.id);
    if (p) {
      p.stock = Math.max(0, p.stock - c.qty);
      p.lastWeekSales = parseFloat((p.lastWeekSales + c.qty * 0.5).toFixed(1));
      totalBilled += p.sellingPrice * c.qty;
      costBilled += p.costPrice * c.qty;
      totalItems += c.qty;
    }
  });

  const netProfit = (totalBilled - costBilled).toFixed(2);
  const totalWithTax = (totalBilled * 1.05).toFixed(2);

  appState.cart = [];
  saveState();
  closeModal('modal-billing');
  renderAll();
  showToast("Bill completed! Stocks automatically deducted from inventory.", "success");

  // FORCE Copilot Appreciation for completing checkout!
  triggerForceAppreciation('pos_checkout', {
    total: totalWithTax,
    profit: netProfit,
    itemsCount: totalItems
  });
}

/**
 * ==========================================================================
 * FORCE COPILOT DOCKED SIDE GRID (Non-Blocking Companion)
 * ==========================================================================
 */
function toggleForceDock(forceState) {
  const dock = document.getElementById('force-side-dock');
  const pill = document.getElementById('force-dock-pill');
  const navBtn = document.getElementById('sidebar-btn-force');

  if (forceState !== undefined) {
    appState.forceDockOpen = forceState;
  } else {
    appState.forceDockOpen = !appState.forceDockOpen;
  }

  if (appState.forceDockOpen) {
    dock?.classList.remove('collapsed');
    pill?.classList.add('hidden');
    navBtn?.classList.add('active');
  } else {
    dock?.classList.add('collapsed');
    pill?.classList.remove('hidden');
    navBtn?.classList.remove('active');
  }

  saveState();
}

function clearForceChat() {
  const feed = document.getElementById('force-chat-container');
  if (feed) {
    feed.innerHTML = `
      <div class="chat-bubble bot-bubble">
        <span class="chat-speaker">OPERATIONS LOG // KITCHEN & BAR</span>
        <p>Log thread cleared. Monitoring live inventory velocity, burn rates, and shift coverage in real time.</p>
      </div>
    `;
    refreshIcons();
  }
}

function sendQuickPrompt(promptText) {
  // Ensure side dock is open
  if (!appState.forceDockOpen) {
    toggleForceDock(true);
  }
  const input = document.getElementById('force-user-input');
  if (!input) return;
  input.value = promptText;
  handleSendForceChat();
}

function handleSendForceChat() {
  const input = document.getElementById('force-user-input');
  const txt = input.value.trim();
  if (!txt) return;

  const feed = document.getElementById('force-chat-container');
  feed.innerHTML += `<div class="chat-bubble user-bubble">${escapeHtml(txt)}</div>`;
  input.value = '';
  feed.scrollTop = feed.scrollHeight;

  setTimeout(() => {
    let reply = "";
    const q = txt.toLowerCase();

    // Guardrail against off-topic inquiries
    const offTopic = ['weather', 'president', 'joke', 'movie', 'song', 'cricket', 'football', 'recipe', 'politics', 'sports', 'crypto', 'bitcoin'];
    if (offTopic.some(w => q.includes(w))) {
      reply = `
        <div class="text-secondary text-xs">
          <strong>Store Copilot Guardrail:</strong><br/>
          I'm calibrated specifically for <em>${appState.storeProfile.storeName}</em> inventory operations, depletion telemetry, POS cashier billing, and profit margins. Let's keep our shelves stocked and revenue flowing! Ask me about any 4-digit stock code, urgent depletion in hours, or restocking recommendations.
        </div>
      `;
    } else {
      // 1. Stock Code Search (e.g. 1001, 2001, etc.)
      const match = q.match(/\b\d{4}\b/);
      const namedProd = !match ? appState.products.find(p => q.includes(p.name.toLowerCase().split(' ')[0])) : null;
      const targetProd = match ? appState.products.find(p => p.code === match[0]) : namedProd;

      if (match && !targetProd) {
        reply = `
          <div class="text-orange text-xs font-mono">
            <strong>Stock #${match[0]} Not Found</strong><br/>
            I searched our active registry of ${appState.products.length} products, but could not locate code <strong>#${match[0]}</strong>. Check the 4-digit code in the Inventory tab or register it as a new stock!
          </div>
        `;
      } else if (targetProd) {
        const m = computeMetrics(targetProd);
        const depletionPhrase = m.isHours 
          ? `<strong class="text-red">${m.hoursLeft} hours until empty</strong>` 
          : `<strong>${m.timeFormatted} until empty</strong>`;

        reply = `
          <strong>Inventory Dossier: #${targetProd.code} - ${targetProd.name}</strong><br/>
          <div class="mt-1.5 space-y-1 text-xs">
            <div>&bull; <strong>Department:</strong> ${targetProd.category}</div>
            <div>&bull; <strong>Physical Stock:</strong> ${targetProd.stock} units currently on shelf</div>
            <div>&bull; <strong>Sales Velocity:</strong> ${m.dailyBurn} units/day (${targetProd.lastWeekSales} units last week)</div>
            <div>&bull; <strong>Depletion Horizon:</strong> ${depletionPhrase} (${m.stageLabel})</div>
            <div>&bull; <strong>Unit Economics:</strong> Retail ₹${targetProd.sellingPrice.toFixed(2)} | Buying ₹${targetProd.costPrice.toFixed(2)} | Profit ₹${m.profitPerUnit} (${m.profitMarginPct}%)</div>
            <div>&bull; <strong>Weekly Profit Contribution:</strong> ₹${parseFloat(m.weeklyProfit).toLocaleString('en-IN')}</div>
            ${m.stage === 'STAGE3' 
              ? `<div class="p-2 rounded bg-red-500/10 border border-red-500/20 text-red mt-2">
                   <strong>URGENT RESTOCK REQUIRED:</strong> Shelf runs out in ${m.timeFormatted}. Order at least <strong>+${m.unitsNeededToClearStage3} units</strong> immediately from ${targetProd.dealer?.name || 'wholesale partner'} (${targetProd.dealer?.phone || 'N/A'}) to avoid ₹${parseFloat(m.upcomingLoss7Days).toLocaleString('en-IN')} in lost profit!
                 </div>`
              : `<div class="text-green mt-1">Buffer is stable for the next ${m.timeFormatted}. Keep monitor active.</div>`}
          </div>
        `;
      } else if (q.includes('hour') || q.includes('today') || q.includes('running out') || q.includes('deplet')) {
        const hourItems = appState.products.filter(p => computeMetrics(p).numericDaysLeft < 1.0 && !appState.resolvedAlerts[p.id]);
        if (hourItems.length === 0) {
          reply = `
            <strong>Depletion Horizon Status:</strong><br/>
            Great news! No unresolved stocks are depleting within the next 24 hours. All shelves have safe buffers past today.
          `;
        } else {
          reply = `
            <strong class="text-red">Depleting Within Hours Today (${hourItems.length} Stocks):</strong><br/>
            <div class="mt-1.5 space-y-1.5 text-xs">
              ${hourItems.map(p => {
                const m = computeMetrics(p);
                return `<div>&bull; <strong>#${p.code} ${p.name}</strong> &mdash; <span class="text-red font-bold font-mono">${m.hoursLeft}h left</span> (${p.stock} units in stock). Shortage of <strong>+${m.unitsNeededToClearStage3} units</strong>. Tap "Mail & Resolve" to tackle it!</div>`;
              }).join('')}
            </div>
          `;
        }
      } else if (q.includes('stage 3') || q.includes('critical') || q.includes('emergency') || q.includes('alert')) {
        const stage3 = appState.products.filter(p => computeMetrics(p).stage === 'STAGE3' && !appState.resolvedAlerts[p.id]);
        if (stage3.length === 0) {
          reply = `Zero active stocks in Stage 3 Critical! All inventory lines have safe depletion horizons above 1.5 days.`;
        } else {
          let loss = 0;
          stage3.forEach(p => loss += parseFloat(computeMetrics(p).upcomingLoss7Days));
          reply = `
            <strong class="text-red">Stage 3 Critical Alert (${stage3.length} Items &bull; ₹${loss.toLocaleString('en-IN')} at risk):</strong><br/>
            <div class="mt-1.5 space-y-1 text-xs">
              ${stage3.map(p => {
                const m = computeMetrics(p);
                return `<div>&bull; <strong>#${p.code} ${p.name}</strong>: ${m.timeFormatted} (${p.stock} left) &rarr; Shortage of <strong>+${m.unitsNeededToClearStage3} units</strong></div>`;
              }).join('')}
            </div>
          `;
        }
      } else if (q.includes('loss') || q.includes('money') || q.includes('highest') || q.includes('risk')) {
        const sortedLoss = [...appState.products]
          .filter(p => !appState.resolvedAlerts[p.id])
          .sort((a, b) => parseFloat(computeMetrics(b).upcomingLoss7Days) - parseFloat(computeMetrics(a).upcomingLoss7Days))
          .slice(0, 3);
        reply = `
          <strong>Top 3 Stocks with Highest Financial Risk if Unattended:</strong><br/>
          <div class="mt-1.5 space-y-1.5 text-xs">
            ${sortedLoss.map((p, idx) => {
              const m = computeMetrics(p);
              return `<div><strong>${idx + 1}. #${p.code} ${p.name}</strong><br/>
                &nbsp;&nbsp;Potential 7-Day Loss: <span class="text-red font-mono font-bold">-₹${parseFloat(m.upcomingLoss7Days).toLocaleString('en-IN')}</span> &bull; Horizon: ${m.timeFormatted}</div>`;
            }).join('')}
          </div>
        `;
      } else if (q.includes('manager') || q.includes('duty') || q.includes('shift') || q.includes('who is')) {
        const activeMgr = appState.managers.find(m => m.active) || appState.managers[0];
        reply = `
          <strong>Store Manager Roster:</strong><br/>
          <div class="mt-1.5 text-xs space-y-1">
            <div>&bull; <strong>Active On Duty:</strong> <span class="text-green font-bold">${activeMgr.name}</span> (${activeMgr.role})</div>
            <div>&bull; <strong>Shift Timing:</strong> ${activeMgr.shift}</div>
            <div>&bull; <strong>Direct Email:</strong> ${activeMgr.email}</div>
            <div>&bull; <strong>Phone:</strong> ${activeMgr.phone}</div>
            <div class="text-muted mt-1">Total registered managers on staff: ${appState.managers.length}. You can customize their shift schedules in the Store Profile & Roster panel!</div>
          </div>
        `;
      } else if (q.includes('profit') || q.includes('margin') || q.includes('health') || q.includes('revenue') || q.includes('p&l')) {
        let rev = 0, cogs = 0, profit = 0;
        appState.products.forEach(p => {
          const m = computeMetrics(p);
          rev += p.lastWeekSales * p.sellingPrice;
          cogs += p.lastWeekSales * p.costPrice;
          profit += parseFloat(m.weeklyProfit);
        });
        const margin = rev > 0 ? ((profit / rev) * 100).toFixed(1) : "0.0";
        reply = `
          <strong>Store Financial Performance Summary:</strong><br/>
          <div class="mt-1.5 text-xs space-y-1 font-mono">
            <div>&bull; Weekly Gross Sales: <strong>₹${rev.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</strong></div>
            <div>&bull; Buying Cost (COGS): ₹${cogs.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</div>
            <div>&bull; Weekly Net Profit: <strong class="text-green">₹${profit.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</strong></div>
            <div>&bull; Store-wide Profit Margin: <strong class="text-green">${margin}%</strong></div>
          </div>
        `;
      } else if (q.includes('restock') || q.includes('order') || q.includes('dealer') || q.includes('supplier')) {
        const needsRestock = appState.products.filter(p => computeMetrics(p).numericDaysLeft <= 4.0 && !appState.resolvedAlerts[p.id]);
        if (needsRestock.length === 0) {
          reply = `Inventory buffers are healthy across all departments! No urgent purchase orders required today.`;
        } else {
          reply = `
            <strong>Recommended Wholesale Purchase Orders:</strong><br/>
            <div class="mt-1.5 text-xs space-y-1.5">
              ${needsRestock.map(p => {
                const m = computeMetrics(p);
                return `<div>&bull; <strong>#${p.code} ${p.name}</strong> &mdash; Order <strong>+${m.unitsNeededToClearStage3} units</strong> from ${p.dealer?.name || 'Dealer'} (${p.dealer?.phone || 'N/A'})</div>`;
              }).join('')}
            </div>
          `;
        }
      } else {
        reply = `
          Ready to assist with inventory, order logs, and shift rosters. Quick queries:
          <div class="mt-1.5 text-xs space-y-1">
            <div>&bull; Enter any 4-digit stock code (e.g. <code>1001</code>) for stock level, burn rate, and depletion horizon</div>
            <div>&bull; Ask <em>"Which stocks run out in hours?"</em> for immediate depletion alerts</div>
            <div>&bull; Ask <em>"Who is on duty?"</em> to inspect active shift coverage</div>
            <div>&bull; Ask <em>"Store financial health"</em> for weekly margins and revenue breakdown</div>
          </div>
        `;
      }
    }

    feed.innerHTML += `
      <div class="chat-bubble bot-bubble">
        <span class="chat-speaker">OPERATIONS LOG // KITCHEN & BAR</span>
        <div>${reply}</div>
      </div>
    `;
    feed.scrollTop = feed.scrollHeight;
    refreshIcons();
  }, 220);
}

/**
 * FORCE COPILOT TASK APPRECIATION & CONGRATULATIONS ENGINE
 * Proactively congratulates the user in the side grid upon completing key tasks!
 */
function triggerForceAppreciation(taskType, data = {}) {
  let title = "CONGRATULATIONS & APPRECIATION!";
  let message = "";
  let badgeIcon = "sparkles";

  switch (taskType) {
    case 'mail_dealer':
      badgeIcon = "mail-check";
      title = "🎉 PROBLEM SOLVED & SHORTAGE COVERED!";
      message = `Outstanding work! You just dispatched an official PO to wholesale partner <strong>${escapeHtml(data.dealer)}</strong> for <strong>#${escapeHtml(data.code)} (${escapeHtml(data.name)})</strong> covering the shortage of <strong>+${data.units} units</strong>.<br/><br/>You successfully safeguarded <strong class="text-green">₹${parseFloat(data.profit).toLocaleString('en-IN')}</strong> in upcoming store profits! The issue has been marked resolved and cleared from the live feed. Stellar store management!`;
      break;

    case 'restock':
      badgeIcon = "shield-check";
      title = "⭐ SHELF DEFENSE RESTORED!";
      message = `Brilliant move! You just replenished <strong>+${data.qty} physical units</strong> for <strong>#${escapeHtml(data.code)} (${escapeHtml(data.name)})</strong>. Depletion stage cleared and customer stockout risk eliminated!`;
      break;

    case 'pos_checkout':
      badgeIcon = "receipt";
      title = "🧾 CASHIER REVENUE LOCKED IN!";
      message = `Cha-ching! Successfully finalized customer invoice for <strong>₹${data.total}</strong> across <strong>${data.itemsCount} items</strong>.<br/><br/>You secured <strong class="text-green">+₹${data.profit}</strong> in net gross profit for our store account, and physical stocks were auto-deducted!`;
      break;

    case 'shift_updated':
      badgeIcon = "clock";
      title = "⏱️ ROSTER & SHIFT DIALED IN!";
      message = `Superb scheduling! Custom shift hours for <strong>${escapeHtml(data.managerName)}</strong> updated to <strong>${escapeHtml(data.shift)}</strong>. Precision shifts mean zero coverage gaps on the retail floor!`;
      break;

    case 'edit_stock':
      badgeIcon = "sliders";
      title = "💼 INVENTORY TUNED TO PERFECTION!";
      message = `Great attention to detail! All operational parameters for <strong>#${escapeHtml(data.code)} (${escapeHtml(data.name)})</strong> were verified and updated. Clean inventory data drives maximum profit margins!`;
      break;

    case 'delete_stock':
      badgeIcon = "trash-2";
      title = "🧹 INVENTORY STREAMLINED!";
      message = `Cleaned up! Decommissioned <strong>#${escapeHtml(data.code)} (${escapeHtml(data.name)})</strong> from active stock shelves and ledger records.`;
      break;

    case 'new_stock':
      badgeIcon = "package-plus";
      title = "📦 NEW PRODUCT ON SHELVES!";
      message = `Awesome addition! Registered <strong>#${escapeHtml(data.code)} (${escapeHtml(data.name)})</strong> in the ${escapeHtml(data.category)} department. Let's start moving those units!`;
      break;
  }

  // Append appreciation message to chat thread
  const feed = document.getElementById('force-chat-container');
  if (feed) {
    feed.innerHTML += `
      <div class="chat-bubble bot-bubble appreciation-bubble">
        <div class="flex items-center gap-1.5 text-green font-bold text-xs mb-1">
          <i data-lucide="${badgeIcon}" class="w-3.5 h-3.5"></i>
          <span>${title}</span>
        </div>
        <div>${message}</div>
      </div>
    `;
    feed.scrollTop = feed.scrollHeight;
    refreshIcons();
  }

  // Ensure side dock is visible so the user sees FORCE AI's celebration!
  if (!appState.forceDockOpen) {
    toggleForceDock(true);
  }
}

// ACCESSIBLE MODAL CONTROLLER & FOCUS MANAGEMENT
let lastFocusedElement = null;

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  lastFocusedElement = document.activeElement;
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');

  requestAnimationFrame(() => {
    const focusable = modal.querySelectorAll('input:not([type="hidden"]), select, textarea, button:not([disabled])');
    if (focusable.length > 0) {
      focusable[0].focus();
    }
    refreshIcons();
  });
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('hidden');
  }
  const remainingOpen = document.querySelectorAll('.modal-backdrop:not(.hidden)');
  if (remainingOpen.length === 0) {
    document.body.classList.remove('modal-open');
  }
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    try {
      lastFocusedElement.focus();
    } catch (_) {}
    lastFocusedElement = null;
  }
}

function setupAccessibleModalEvents() {
  // Backdrop click dismisses modal
  document.querySelectorAll('.modal-backdrop').forEach(bd => {
    bd.addEventListener('click', (e) => {
      if (e.target === bd) {
        closeModal(bd.id);
      }
    });
  });

  // Global keyboard trap and Escape dismissal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModals = document.querySelectorAll('.modal-backdrop:not(.hidden)');
      if (openModals.length > 0) {
        const topModal = openModals[openModals.length - 1];
        closeModal(topModal.id);
      }
    } else if (e.key === 'Tab') {
      const openModals = document.querySelectorAll('.modal-backdrop:not(.hidden)');
      if (openModals.length > 0) {
        const topModal = openModals[openModals.length - 1];
        const focusables = Array.from(topModal.querySelectorAll('input:not([type="hidden"]), select, textarea, button:not([disabled]), [tabindex="0"]'));
        if (focusables.length > 0) {
          const first = focusables[0];
          const last = focusables[focusables.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }
  });
}

// HELPERS
function getCategoryIconName(catName) {
  const cat = appState.categories.find(c => c.name === catName);
  return cat ? (cat.icon || 'package') : 'package';
}

function quickRestockPrompt(id, qty) {
  const p = appState.products.find(x => x.id === id);
  if (p) {
    p.stock += qty;
    saveState();
    renderAll();
    showToast(`Restocked +${qty} units for #${p.code} (${p.name})! Stage 3 stockout avoided.`, "success");
    triggerForceAppreciation('restock', { code: p.code, name: p.name, qty });
  }
}

let toastTimer;
function showToast(msg, type = 'info') {
  const toast = document.getElementById('pg-toast');
  const txt = document.getElementById('toast-msg-text');
  if (!toast) return;

  txt.innerText = msg;
  toast.classList.remove('hidden');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add('hidden'), 3500);
}

window.addEventListener('DOMContentLoaded', initApp);
