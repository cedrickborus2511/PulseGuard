/**
 * PULSE GUARD // VERSION 5.0 JAVASCRIPT ENGINE
 * Soft Pastel Aesthetics & Anti-Glare High-Contrast Daylight Mode
 * Edit & Delete Stock Capabilities in Every Box (Code, Name, Price, Cost, Profit, Dealer)
 * Exact Hours Depletion Formatting for Horizons Under 24h (< 1.0 Day)
 * Centered Store Manager Roster & Shift Schedules
 * Upgraded Realistic FORCE AI Copilot with Quick Prompt Chips & Store Floor Intelligence
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

// Seed Managers with Shift Schedules
const SEED_MANAGERS = [
  {
    id: "mgr-1",
    name: "Alexander Vance",
    role: "Senior Store Manager",
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
    role: "Inventory & Night Operations Lead",
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
 * INITIALIZATION & STORAGE RESTORATION
 */
function initApp() {
  const savedProds = localStorage.getItem('pulseguard_products');
  appState.products = savedProds ? JSON.parse(savedProds) : SEED_PRODUCTS;

  const savedCats = localStorage.getItem('pulseguard_categories');
  appState.categories = savedCats ? JSON.parse(savedCats) : SEED_CATEGORIES;

  const savedMgrs = localStorage.getItem('pulseguard_managers');
  appState.managers = savedMgrs ? JSON.parse(savedMgrs) : SEED_MANAGERS;

  const savedProfile = localStorage.getItem('pulseguard_profile');
  if (savedProfile) appState.storeProfile = JSON.parse(savedProfile);

  const savedTheme = localStorage.getItem('pulseguard_theme') || 'dark';
  applyTheme(savedTheme);

  renderAll();
  lucide.createIcons();
}

function saveState() {
  localStorage.setItem('pulseguard_products', JSON.stringify(appState.products));
  localStorage.setItem('pulseguard_categories', JSON.stringify(appState.categories));
  localStorage.setItem('pulseguard_managers', JSON.stringify(appState.managers));
  localStorage.setItem('pulseguard_profile', JSON.stringify(appState.storeProfile));
}

/**
 * THEME CONTROLLER (Dark & Anti-Glare High-Contrast Light Mode)
 */
function toggleTheme() {
  const next = appState.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
}

function applyTheme(theme) {
  appState.theme = theme;
  localStorage.setItem('pulseguard_theme', theme);

  const body = document.body;
  if (theme === 'light') {
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');
    const label = document.getElementById('theme-label-text');
    if (label) label.innerText = "Light Mode";
  } else {
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
    const label = document.getElementById('theme-label-text');
    if (label) label.innerText = "Dark Mode";
  }

  if (pnlChartInstance) {
    renderProductFocusedChart();
  }
  lucide.createIcons();
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
 * NAVIGATION ROUTER
 */
function switchPage(pageId) {
  appState.currentPage = pageId;

  ['home', 'insights', 'products', 'admin'].forEach(p => {
    document.getElementById(`page-${p}`)?.classList.toggle('active', p === pageId);
    document.getElementById(`sidebar-btn-${p}`)?.classList.toggle('active', p === pageId);
    document.getElementById(`bottom-btn-${p}`)?.classList.toggle('active', p === pageId);
  });

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
  lucide.createIcons();
}

function updateAlertBadge() {
  const alertCount = appState.products.filter(p => computeMetrics(p).numericDaysLeft <= 7.0).length;
  const el = document.getElementById('badge-alert-count');
  if (el) el.innerText = alertCount;
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
 * PAGE 1: ALERTS FEED (Under 7 Days Depletion)
 * ==========================================================================
 */
function renderHomePage() {
  const feed = document.getElementById('home-alerts-feed');
  if (!feed) return;
  feed.innerHTML = '';

  let items = appState.products.filter(p => computeMetrics(p).numericDaysLeft <= 7.0);

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
        <p class="text-xs mt-1">Zero items running out within the 7-day window under current filter.</p>
      </div>
    `;
    return;
  }

  items.sort((a, b) => computeMetrics(a).numericDaysLeft - computeMetrics(b).numericDaysLeft);

  items.forEach(p => {
    const m = computeMetrics(p);
    const card = document.createElement('article');
    card.className = "glass-card alert-card-shell";

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

    card.innerHTML = `
      <!-- Card Header -->
      <div class="alert-card-header">
        <div class="alert-card-identity">
          <div class="alert-category-icon-box">
            <i data-lucide="${getCategoryIconName(p.category)}"></i>
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="alert-code-tag">#${p.code}</span>
              <span class="text-muted text-xs">&bull;</span>
              <span class="text-xs text-muted font-mono uppercase">${p.category}</span>
            </div>
            <h2 class="alert-prod-title">${p.name}</h2>
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

        <!-- Tactical Resolution -->
        <div class="resolution-playbook-bar">
          <div class="resolution-playbook-text">
            <strong class="text-cyan font-mono block text-xs">HOW TO TACKLE:</strong>
            <span>Order minimum <strong>+${m.unitsNeededToClearStage3} units</strong> immediately to restore safety buffer.</span>
          </div>
          <button class="btn btn-primary btn-sm" onclick="quickRestockPrompt('${p.id}', ${m.unitsNeededToClearStage3})">
            +${m.unitsNeededToClearStage3} Restock
          </button>
        </div>
      </div>

      <!-- Professional Action Strip with Edit & Delete Stock Buttons -->
      <div class="alert-action-strip">
        <div class="action-strip-btns">
          <button class="btn btn-ghost btn-sm" onclick="copyProductCode('${p.code}')" title="Copy Stock Code">
            <i data-lucide="copy" class="w-3.5 h-3.5 text-cyan"></i>
            <span>Copy Code</span>
          </button>
          <button class="btn btn-ghost btn-sm" onclick="openDealerEmailPrompt('${p.id}')" title="Dispatch PO to Wholesale Dealer">
            <i data-lucide="mail" class="w-3.5 h-3.5 text-cyan"></i>
            <span>Email Dealer</span>
          </button>
          <button class="btn btn-ghost btn-sm" onclick="openEditStockModal('${p.id}')" title="Edit All Details For This Stock">
            <i data-lucide="edit-3" class="w-3.5 h-3.5 text-cyan"></i>
            <span>Edit Stock</span>
          </button>
          <button class="btn btn-ghost btn-sm btn-delete" onclick="promptDeleteStock('${p.id}')" title="Delete Stock #${p.code}">
            <i data-lucide="trash-2" class="w-3.5 h-3.5 text-red"></i>
            <span>Delete</span>
          </button>
        </div>
        <div class="text-xs font-mono text-muted">
          Retail: ₹${p.sellingPrice.toFixed(2)} &bull; Cost: ₹${p.costPrice.toFixed(2)}
        </div>
      </div>
    `;

    feed.appendChild(card);
  });
}

function filterHomeAlerts(type) {
  appState.homeFilter = type;
  renderHomePage();
  lucide.createIcons();
}

function filterHomeByDept(dept) {
  appState.homeFilter = dept;
  renderHomePage();
  lucide.createIcons();
}

function copyProductCode(code) {
  navigator.clipboard.writeText(code);
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
  const labelColor = isLight ? '#090d16' : '#f1f5f9';
  const tickColor = isLight ? '#1e293b' : '#94a3b8';
  const gridColor = isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.06)';

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
          isLight ? 'rgba(100, 116, 139, 0.45)' : 'rgba(148, 163, 184, 0.4)',
          isLight ? 'rgba(2, 132, 199, 0.55)' : 'rgba(56, 189, 248, 0.45)',
          isLight ? 'rgba(21, 128, 61, 0.65)' : 'rgba(74, 222, 128, 0.55)',
          isLight ? 'rgba(21, 128, 61, 0.85)' : 'rgba(74, 222, 128, 0.8)',
          isLight ? 'rgba(220, 38, 38, 0.8)' : 'rgba(248, 113, 113, 0.7)'
        ],
        borderColor: isLight 
          ? ['#64748b', '#0284c7', '#15803d', '#15803d', '#dc2626']
          : ['#94a3b8', '#38bdf8', '#4ade80', '#4ade80', '#f87171'],
        borderWidth: 1.5,
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: labelColor, font: { family: 'Plus Jakarta Sans', size: 12, weight: 700 } } }
      },
      scales: {
        x: { grid: { color: gridColor }, ticks: { color: tickColor, font: { family: 'Plus Jakarta Sans', size: 11, weight: 700 } } },
        y: {
          grid: { color: gridColor },
          ticks: {
            color: tickColor,
            font: { family: 'JetBrains Mono', size: 11, weight: 700 },
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
            <span class="font-mono text-xs font-bold text-cyan">#${p.code}</span>
            <h4 class="font-bold text-white text-sm">${p.name}</h4>
            <span class="text-xs text-muted font-mono uppercase">${p.category}</span>
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

        <div class="pt-2 border-t border-white-5 flex justify-between items-center gap-2">
          <span class="${m.badgeClass}">${m.timeLeftBadge}</span>
          <div class="flex items-center gap-1.5">
            <button class="btn btn-ghost btn-sm" onclick="openEditStockModal('${p.id}')" title="Edit Stock Details">
              <i data-lucide="edit-3" class="w-3.5 h-3.5 text-cyan"></i>
              <span>Edit</span>
            </button>
            <button class="btn btn-ghost btn-sm btn-delete" onclick="promptDeleteStock('${p.id}')" title="Delete Stock #${p.code}">
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
            <span>${c.name}</span>
            <span class="text-xs text-muted font-normal font-mono">(${prods.length} Stocks)</span>
          </div>

          <div class="dept-items-grid">
            ${prods.map(p => {
              const m = computeMetrics(p);
              return `
                <div class="dept-sku-card" id="card-${p.id}">
                  <div>
                    <div class="flex justify-between items-start">
                      <span class="font-mono text-xs font-bold text-cyan">#${p.code}</span>
                      <span class="${m.badgeClass}">${m.timeLeftBadge}</span>
                    </div>
                    <h4 class="font-bold text-white text-sm mt-1">${p.name}</h4>
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
                      Dealer: ${p.dealer?.name || 'Direct Wholesale'} (${p.dealer?.phone || 'N/A'})
                    </div>
                  </div>

                  <!-- ACTIONS: EDIT & DELETE BUTTONS IN EVERY STOCK BOX -->
                  <div class="pt-2 border-t border-white-5 flex items-center gap-2">
                    <button class="btn btn-ghost btn-sm flex-1 font-bold" onclick="openEditStockModal('${p.id}')" title="Edit details for #${p.code}">
                      <i data-lucide="edit-3" class="w-3.5 h-3.5 text-cyan"></i>
                      <span>Edit</span>
                    </button>
                    <button class="btn btn-ghost btn-sm btn-delete font-bold px-2.5" onclick="promptDeleteStock('${p.id}')" title="Delete #${p.code} (${p.name})">
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
            <span class="v-sku-pill">#${p.code}</span>
            <div>
              <strong class="text-white text-sm block">${p.name}</strong>
              <div class="text-xs text-muted font-mono uppercase">${p.category} &bull; Retail: ₹${p.sellingPrice.toFixed(2)} &bull; Profit: ₹${m.profitPerUnit}</div>
            </div>
          </div>

          <div class="flex items-center gap-4 text-xs font-mono">
            <div><span class="text-muted block text-[10px]">CURRENT STOCK:</span><strong class="${p.stock <= 3 ? 'text-red' : 'text-white'}">${p.stock} units</strong></div>
            <div><span class="text-muted block text-[10px]">DAILY SPEED:</span><strong class="text-cyan">${m.dailyBurn}/d</strong></div>
            <div><span class="text-muted block text-[10px]">DEPLETION:</span><strong class="${m.stage === 'STAGE3' ? 'text-red' : (m.stage === 'STAGE2' ? 'text-orange' : 'text-green')}">${m.timeFormatted}</strong></div>
          </div>

          <div class="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <label class="text-xs text-muted font-mono" for="inp-sales-${p.id}">Last Week Sales:</label>
            <input type="number" step="0.5" min="1" id="inp-sales-${p.id}" value="${p.lastWeekSales}" class="v-input-field" />
            <button class="btn btn-ghost btn-sm" onclick="saveWeeklySalesEntry('${p.id}')">Save</button>
            <button class="btn btn-primary btn-sm" onclick="openEditStockModal('${p.id}')" title="Edit All Parameters For #${p.code}">
              <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
              <span>Edit</span>
            </button>
            <button class="btn btn-ghost btn-sm btn-delete" onclick="promptDeleteStock('${p.id}')" title="Delete Stock #${p.code}">
              <i data-lucide="trash-2" class="w-3.5 h-3.5 text-red"></i>
              <span>Delete</span>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }
}

function selectInventoryCat(cat) {
  appState.selectedCategory = cat;
  renderProductsPage();
  lucide.createIcons();
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

  document.getElementById('modal-edit-stock').classList.remove('hidden');
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
    msgEl.innerHTML = `Are you sure you want to permanently delete <strong>#${prod.code} ${prod.name}</strong> (${prod.category})?<br/><br/><span class="text-xs text-muted font-mono">Current Stock: ${prod.stock} units &bull; Price: ₹${prod.sellingPrice.toFixed(2)}</span>`;
  }

  document.getElementById('modal-delete-confirm')?.classList.remove('hidden');
}

function executeDeleteStock() {
  const targetId = document.getElementById('delete-target-id')?.value;
  if (!targetId) return;

  const prod = appState.products.find(p => p.id === targetId);
  if (!prod) {
    closeModal('modal-delete-confirm');
    return;
  }

  // Remove from products and cart
  appState.products = appState.products.filter(p => p.id !== targetId);
  appState.cart = appState.cart.filter(item => item.id !== targetId);

  saveState();
  closeModal('modal-delete-confirm');
  renderAll();
  showToast(`Stock #${prod.code} (${prod.name}) permanently removed from inventory.`, "info");
}

/**
 * ==========================================================================
 * MODALS: REGISTER NEW STOCK & NEW CATEGORY
 * ==========================================================================
 */
function openNewProductModal() {
  const sel = document.getElementById('inp-prod-cat');
  if (sel) sel.innerHTML = appState.categories.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
  document.getElementById('modal-new-product').classList.remove('hidden');
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
}

function openNewCategoryModal() {
  document.getElementById('modal-new-category').classList.remove('hidden');
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
 * PAGE 4: ADMIN / ACCOUNTS & MULTIPLE MANAGERS + SHIFTS
 * ==========================================================================
 */
function renderAdminPage() {
  document.getElementById('admin-disp-store-name').innerText = appState.storeProfile.storeName;
  document.getElementById('admin-stat-skus').innerText = appState.products.length;
  document.getElementById('admin-stat-depts').innerText = appState.categories.length;
  document.getElementById('admin-stat-alerts').innerText = appState.products.filter(p => computeMetrics(p).numericDaysLeft <= 7.0).length;

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
    if (m.shift.toLowerCase().includes("morning")) shiftBadgeClass = "shift-morning";
    else if (m.shift.toLowerCase().includes("evening")) shiftBadgeClass = "shift-evening";
    else if (m.shift.toLowerCase().includes("night")) shiftBadgeClass = "shift-night";

    const initials = m.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

    return `
      <div class="manager-card ${m.active ? 'is-active-duty' : ''}">
        <div class="manager-card-header">
          <div class="mgr-avatar">${initials}</div>
          <div class="mgr-info-block">
            <h4 class="mgr-info-name">${m.name}</h4>
            <span class="mgr-info-role">${m.role}</span>
          </div>
        </div>

        <div>
          <span class="shift-tag-badge ${shiftBadgeClass}">
            <i data-lucide="clock" class="w-3 h-3"></i>
            <span>${m.shift}</span>
          </span>
        </div>

        <div class="mgr-contacts-grid">
          <div class="mgr-contact-chip" title="Manager Email">
            <i data-lucide="mail" class="w-3.5 h-3.5 text-cyan shrink-0"></i>
            <span class="truncate">${m.email}</span>
          </div>
          <div class="mgr-contact-chip" title="Manager Phone Number">
            <i data-lucide="phone" class="w-3.5 h-3.5 text-cyan shrink-0"></i>
            <span class="truncate">${m.phone}</span>
          </div>
        </div>

        <div class="manager-card-footer">
          <div class="duty-status-pill ${m.active ? 'active' : 'inactive'}">
            <span class="${m.active ? 'status-online-dot' : 'w-2 h-2 rounded-full bg-slate-500'}"></span>
            <span>${m.active ? 'Active On Duty' : 'Off Shift'}</span>
          </div>

          <div class="flex items-center gap-1.5">
            ${!m.active ? `
              <button class="btn btn-ghost btn-sm" onclick="setActiveManager('${m.id}')" title="Set this manager as currently active on duty">
                Set On Duty
              </button>
            ` : `
              <span class="text-xs text-green font-mono font-bold">Current</span>
            `}
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
  document.getElementById('modal-add-manager').classList.remove('hidden');
}

function handleAddManager(e) {
  e.preventDefault();
  const name = document.getElementById('inp-mgr-name').value.trim();
  const email = document.getElementById('inp-mgr-email').value.trim();
  const phone = document.getElementById('inp-mgr-phone').value.trim();
  const role = document.getElementById('inp-mgr-role').value;
  const shift = document.getElementById('inp-mgr-shift').value;

  if (!name || !email) return showToast("Name and email are required", "error");

  const newMgr = {
    id: `mgr-${Date.now()}`,
    name,
    email,
    phone: phone || "+91-98000-00000",
    role,
    shift,
    active: false
  };

  appState.managers.push(newMgr);
  saveState();
  closeModal('modal-add-manager');
  renderAll();
  showToast(`Manager account created for ${name} (${role})!`, "success");
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
  document.getElementById('modal-edit-store').classList.remove('hidden');
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
    <div class="pos-sku-chip" onclick="addToCart('${p.id}')">
      <span class="text-cyan font-mono font-bold text-xs">#${p.code}</span>
      <div class="truncate text-white text-xs font-semibold mt-1">${p.name}</div>
      <div class="text-green font-mono text-xs font-bold mt-1">₹${p.sellingPrice.toFixed(2)}</div>
    </div>
  `).join('');
  renderCart();
  document.getElementById('modal-billing').classList.remove('hidden');
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
  appState.cart.forEach(c => {
    const p = appState.products.find(x => x.id === c.id);
    if (p) {
      p.stock = Math.max(0, p.stock - c.qty);
      p.lastWeekSales = parseFloat((p.lastWeekSales + c.qty * 0.5).toFixed(1));
    }
  });
  appState.cart = [];
  saveState();
  closeModal('modal-billing');
  renderAll();
  showToast("Bill completed! Stocks automatically deducted from inventory.", "success");
}

/**
 * ==========================================================================
 * "FORCE" AI COPILOT // REALISTIC STORE OPERATIONS SPECIALIST
 * ==========================================================================
 */
function openForceModal() {
  document.getElementById('modal-force').classList.remove('hidden');
  document.getElementById('force-user-input')?.focus();
}

function sendQuickPrompt(promptText) {
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
        const hourItems = appState.products.filter(p => computeMetrics(p).numericDaysLeft < 1.0);
        if (hourItems.length === 0) {
          reply = `
            <strong>Depletion Horizon Status:</strong><br/>
            Great news! No stocks are depleting within the next 24 hours. The fastest-depleting stock is healthy enough to last past today.
          `;
        } else {
          reply = `
            <strong class="text-red">Depleting Within Hours Today (${hourItems.length} Stocks):</strong><br/>
            <div class="mt-1.5 space-y-1.5 text-xs">
              ${hourItems.map(p => {
                const m = computeMetrics(p);
                return `<div>&bull; <strong>#${p.code} ${p.name}</strong> &mdash; <span class="text-red font-bold font-mono">${m.hoursLeft}h left</span> (${p.stock} units in stock, burns ${m.dailyBurn}/day). Needs <strong>+${m.unitsNeededToClearStage3} units</strong>.</div>`;
              }).join('')}
            </div>
            <div class="text-xs text-muted mt-2">Tip: Contact suppliers now or dispatch emergency purchase orders to prevent stockouts today.</div>
          `;
        }
      } else if (q.includes('stage 3') || q.includes('critical') || q.includes('emergency') || q.includes('alert')) {
        const stage3 = appState.products.filter(p => computeMetrics(p).stage === 'STAGE3');
        if (stage3.length === 0) {
          reply = `Zero stocks in Stage 3 Critical! All inventory lines have safe depletion horizons above 1.5 days.`;
        } else {
          let loss = 0;
          stage3.forEach(p => loss += parseFloat(computeMetrics(p).upcomingLoss7Days));
          reply = `
            <strong class="text-red">Stage 3 Critical Alert (${stage3.length} Items &bull; ₹${loss.toLocaleString('en-IN')} at risk):</strong><br/>
            <div class="mt-1.5 space-y-1 text-xs">
              ${stage3.map(p => {
                const m = computeMetrics(p);
                return `<div>&bull; <strong>#${p.code} ${p.name}</strong>: ${m.timeFormatted} (${p.stock} left) &rarr; Restock <strong>+${m.unitsNeededToClearStage3} units</strong></div>`;
              }).join('')}
            </div>
          `;
        }
      } else if (q.includes('loss') || q.includes('money') || q.includes('highest') || q.includes('risk')) {
        const sortedLoss = [...appState.products].sort((a, b) => parseFloat(computeMetrics(b).upcomingLoss7Days) - parseFloat(computeMetrics(a).upcomingLoss7Days)).slice(0, 3);
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
            <div>&bull; <strong>Shift Hours:</strong> ${activeMgr.shift}</div>
            <div>&bull; <strong>Direct Email:</strong> ${activeMgr.email}</div>
            <div>&bull; <strong>Phone:</strong> ${activeMgr.phone}</div>
            <div class="text-muted mt-1">Total registered managers on staff: ${appState.managers.length}. You can reassign active duty in the Store Profile & Roster panel.</div>
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
        const needsRestock = appState.products.filter(p => computeMetrics(p).numericDaysLeft <= 4.0);
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
          Hey! I'm your realistic store operations copilot. Here are quick things I can help you with right now:
          <div class="mt-1.5 text-xs space-y-1">
            <div>&bull; Type any 4-digit code (e.g. <code>1001</code>) for full unit metrics, burn rate, and hours left</div>
            <div>&bull; Ask <em>"Which stocks run out in hours?"</em> for immediate depletion alerts</div>
            <div>&bull; Ask <em>"Who is on duty?"</em> to check shift schedules</div>
            <div>&bull; Ask <em>"Store financial health"</em> for weekly margins and revenue breakdown</div>
          </div>
        `;
      }
    }

    feed.innerHTML += `
      <div class="chat-bubble bot-bubble">
        <span class="chat-speaker">FORCE // STORE OPERATIONS SPECIALIST</span>
        <div>${reply}</div>
      </div>
    `;
    feed.scrollTop = feed.scrollHeight;
    lucide.createIcons();
  }, 220);
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// HELPERS
function getCategoryIconName(catName) {
  const cat = appState.categories.find(c => c.name === catName);
  return cat ? (cat.icon || 'package') : 'package';
}

function closeModal(id) {
  document.getElementById(id)?.classList.add('hidden');
}

function quickRestockPrompt(id, qty) {
  const p = appState.products.find(x => x.id === id);
  if (p) {
    p.stock += qty;
    saveState();
    renderAll();
    showToast(`Restocked +${qty} units for #${p.code} (${p.name})! Stage 3 stockout avoided.`, "success");
  }
}

function openDealerEmailPrompt(id) {
  const p = appState.products.find(x => x.id === id);
  if (!p) return;
  showToast(`Wholesale order notice drafted to ${p.dealer?.name || 'Dealer'} (${p.dealer?.email || 'N/A'})!`, "success");
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
