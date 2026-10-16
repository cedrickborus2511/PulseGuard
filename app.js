/**
 * PULSE GUARD // VERSION 4.0 JAVASCRIPT ENGINE
 * Soft Pastel Aesthetics & High-Contrast Daylight Mode
 * Edit Stock Capabilities in Every Box (Code, Name, Price, Cost, Profit, Dealer)
 * Multiple Managers & Shift Schedule Roster
 * FORCE AI Copilot // Friendly Store Pal Voice
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
    stock: 3, // Stage 3 Critical (28/wk -> 4/day -> 3/4 = 0.75 days left)
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
    stock: 8, // Stage 3 Critical (70/wk -> 10/day -> 8/10 = 0.8 days left)
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

// Clean Department Categories
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

  const profitPerUnit = prod.sellingPrice - prod.costPrice;
  const profitMarginPct = prod.sellingPrice > 0 ? ((profitPerUnit / prod.sellingPrice) * 100) : 0;
  const weeklyProfit = weekly * profitPerUnit;
  const upcomingLoss7Days = dailyBurn * 7 * profitPerUnit;
  const unitsNeededToClearStage3 = Math.max(0, Math.ceil(dailyBurn * 14) - stock);

  return {
    dailyBurn: dailyBurn.toFixed(2),
    daysLeft: daysLeft < 999 ? daysLeft.toFixed(1) : '99+',
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
    const nameEl = document.getElementById('sidebar-active-manager-name');
    const shiftEl = document.getElementById('sidebar-active-manager-shift');
    if (nameEl) nameEl.innerText = activeMgr.name;
    if (shiftEl) shiftEl.innerText = activeMgr.shift.split('(')[0].trim();
  }
}

/**
 * ==========================================================================
 * PAGE 1: ALERTS FEED
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
      problemText = "Complete stockout imminent. Empty shelves lead to lost customer loyalty and immediate revenue destruction.";
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
            <span class="horizon-days-big ${m.stage === 'STAGE3' ? 'text-red' : (m.stage === 'STAGE2' ? 'text-orange' : 'text-cyan')}">${m.daysLeft}d</span>
            <span class="horizon-label">Days Until Empty</span>
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

      <!-- Professional Action Strip with Edit Stock Button -->
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
  const labelColor = isLight ? '#0f172a' : '#f1f5f9';
  const tickColor = isLight ? '#334155' : '#94a3b8';
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
          isLight ? 'rgba(100, 116, 139, 0.4)' : 'rgba(148, 163, 184, 0.4)',
          isLight ? 'rgba(2, 132, 199, 0.45)' : 'rgba(56, 189, 248, 0.45)',
          isLight ? 'rgba(21, 128, 61, 0.55)' : 'rgba(74, 222, 128, 0.55)',
          isLight ? 'rgba(21, 128, 61, 0.8)' : 'rgba(74, 222, 128, 0.8)',
          isLight ? 'rgba(220, 38, 38, 0.7)' : 'rgba(248, 113, 113, 0.7)'
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
        x: { grid: { color: gridColor }, ticks: { color: tickColor, font: { family: 'Plus Jakarta Sans', size: 11, weight: 600 } } },
        y: {
          grid: { color: gridColor },
          ticks: {
            color: tickColor,
            font: { family: 'JetBrains Mono', size: 11, weight: 600 },
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

        <div class="pt-2 border-t border-white-5 flex justify-between items-center">
          <span class="${m.badgeClass}">${m.daysLeft}d left</span>
          <button class="btn btn-ghost btn-sm" onclick="openEditStockModal('${p.id}')">
            <i data-lucide="edit-3" class="w-3.5 h-3.5 text-cyan"></i>
            <span>Edit Stock</span>
          </button>
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

  // Grouped Stocks with Edit Button inside EVERY Card
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
                      <span class="${m.badgeClass}">${m.daysLeft}d left</span>
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

                  <!-- EDIT BUTTON IN EVERY STOCK BOX -->
                  <div class="pt-2 border-t border-white-5">
                    <button class="btn btn-ghost btn-sm w-full font-bold" onclick="openEditStockModal('${p.id}')">
                      <i data-lucide="edit-3" class="w-3.5 h-3.5 text-cyan"></i>
                      <span>Edit Stock Box</span>
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

  // Last Week Sales Separate Boxes (Ordered Top to Bottom) with Edit Button
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
            <div><span class="text-muted block text-[10px]">DEPLETION:</span><strong class="${m.stage === 'STAGE3' ? 'text-red' : (m.stage === 'STAGE2' ? 'text-orange' : 'text-green')}">${m.daysLeft}d</strong></div>
          </div>

          <div class="flex items-center gap-2">
            <label class="text-xs text-muted font-mono" for="inp-sales-${p.id}">Last Week Sales:</label>
            <input type="number" step="0.5" min="1" id="inp-sales-${p.id}" value="${p.lastWeekSales}" class="v-input-field" />
            <button class="btn btn-ghost btn-sm" onclick="saveWeeklySalesEntry('${p.id}')">Save Sales</button>
            <button class="btn btn-primary btn-sm" onclick="openEditStockModal('${p.id}')" title="Edit All Parameters For #${p.code}">
              <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
              <span>Edit Stock</span>
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

        <div class="mgr-contacts-row">
          <div><i data-lucide="mail" class="w-3 h-3 inline mr-1 text-muted"></i>${m.email}</div>
          <div><i data-lucide="phone" class="w-3 h-3 inline mr-1 text-muted"></i>${m.phone}</div>
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
 * "FORCE" AI COPILOT // FRIENDLY STORE PAL VOICE
 * ==========================================================================
 */
function openForceModal() {
  document.getElementById('modal-force').classList.remove('hidden');
  document.getElementById('force-user-input').focus();
}

function handleSendForceChat() {
  const input = document.getElementById('force-user-input');
  const txt = input.value.trim();
  if (!txt) return;

  const feed = document.getElementById('force-chat-container');
  feed.innerHTML += `<div class="chat-bubble user-bubble">${txt}</div>`;
  input.value = '';

  setTimeout(() => {
    let reply = "";
    const q = txt.toLowerCase();

    // VIOLATION GUARDRAIL
    const offTopic = ['weather', 'president', 'joke', 'movie', 'song', 'cricket', 'football', 'recipe', 'politics', 'sports'];
    if (offTopic.some(w => q.includes(w))) {
      reply = `
        <div class="text-red font-mono text-xs">
          <strong>[VIOLATION / IRRELEVANT INQUIRY]</strong><br/>
          Haha, good try my friend! As fun as that would be, I gotta stay locked on our store stocks, depletion stages, and profit calculations. Ask me about any 4-digit stock code or restocking advice!
        </div>
      `;
    } else {
      const match = q.match(/\b\d{4}\b/);
      if (match) {
        const prod = appState.products.find(p => p.code === match[0]);
        if (!prod) {
          reply = `
            <div class="text-orange font-mono text-xs">
              <strong>[NON-EXISTENT STOCK]</strong><br/>
              Hey buddy, I checked our store depot and records, but could not find anything registered under stock code <strong>#${match[0]}</strong>. Double-check that 4-digit code for me!
            </div>
          `;
        } else {
          const m = computeMetrics(prod);
          reply = `
            Hey pal! Here's the situation on <strong>#${prod.code} (${prod.name})</strong>:<br/>
            &bull; We currently have <strong>${prod.stock} stocks left</strong> in storage.<br/>
            &bull; At last week's pace (${prod.lastWeekSales}/week), we are selling about <strong>${m.dailyBurn} units per day</strong>.<br/>
            &bull; That gives us approximately <strong>${m.daysLeft} days until empty</strong> (${m.stageLabel})!<br/>
            &bull; Unit profit is <strong>₹${m.profitPerUnit} (${m.profitMarginPct}% margin)</strong>.<br/>
            ${m.stage === 'STAGE3' ? `<strong class="text-red">Crucial Action:</strong> We need to restock at least <strong>+${m.unitsNeededToClearStage3} units</strong> immediately to clear Stage 3 and protect ₹${parseFloat(m.upcomingLoss7Days).toLocaleString('en-IN')} in profit!` : `Looking steady right now, friend!`}
          `;
        }
      } else if (q.includes('stage 3') || q.includes('critical') || q.includes('empty') || q.includes('run out')) {
        const stage3Items = appState.products.filter(p => computeMetrics(p).stage === 'STAGE3');
        if (stage3Items.length === 0) {
          reply = `Great news friend! None of our products are at Stage 3 critical status right now. All shelves are looking safe!`;
        } else {
          reply = `Heads up buddy! We've got <strong>${stage3Items.length} stocks</strong> at Stage 3 Critical:<br/>` +
            stage3Items.map(p => {
              const m = computeMetrics(p);
              return `&bull; <strong>#${p.code} ${p.name}</strong> (${p.stock} units left &bull; Need <strong>+${m.unitsNeededToClearStage3} units</strong> to avoid stockout)`;
            }).join('<br/>') +
            `<br/><br/>Let's get those dealer orders sent out so we don't face empty shelf losses!`;
        }
      } else {
        reply = `Hey there friend! I'm tracking all <strong>${appState.products.length} stocks</strong> across our departments. You can ask me about any 4-digit stock code (like <em>1001</em>), check which stocks are about to run out, or ask how many units we need to restock!`;
      }
    }

    feed.innerHTML += `<div class="chat-bubble bot-bubble"><span class="chat-speaker">FORCE // YOUR STORE PAL</span><div>${reply}</div></div>`;
    feed.scrollTop = feed.scrollHeight;
  }, 200);
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
