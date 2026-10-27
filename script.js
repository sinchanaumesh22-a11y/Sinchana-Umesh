/**
 * AURA Artisanal Roastery & Café - Interactive Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. Menu Dataset
  // ==========================================================================
  const menuData = [
    {
      id: 'c1',
      title: 'Ethiopian Yirgacheffe V60',
      category: 'coffee',
      price: 6.25,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      tag: "Roaster's Choice",
      isSignature: true,
      isVegan: true,
      isGf: true,
      desc: 'Single-origin heirloom varietal. Slow hand-poured with notes of fragrant bergamot, jasmine honey, and peach crisp.',
      customizable: true
    },
    {
      id: 'c2',
      title: 'Spanish Velvet Latte',
      category: 'coffee',
      price: 6.75,
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
      tag: 'Bestseller',
      isSignature: true,
      isVegan: false,
      isGf: true,
      desc: 'Double shot of house espresso folded into condensed milk, whole milk, and dusted with fragrant Ceylon cinnamon.',
      customizable: true
    },
    {
      id: 'c3',
      title: 'Cortado & Sparkling Water',
      category: 'coffee',
      price: 5.25,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      tag: 'Classic',
      isSignature: false,
      isVegan: false,
      isGf: true,
      desc: 'Equal parts velvety micro-foamed milk and espresso extracted through our custom brass portafilters.',
      customizable: true
    },
    {
      id: 'c4',
      title: 'Pistachio Cream Cold Brew',
      category: 'cold',
      price: 7.00,
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
      tag: 'Seasonal',
      isSignature: true,
      isVegan: false,
      isGf: true,
      desc: '18-hour cold steeped Colombian beans topped with handcrafted salted pistachio cold foam.',
      customizable: true
    },
    {
      id: 'c5',
      title: 'Nitro Cascade Stout Brew',
      category: 'cold',
      price: 6.50,
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
      tag: 'On Tap',
      isSignature: false,
      isVegan: true,
      isGf: true,
      desc: 'Infused with food-grade pure nitrogen for a velvety, Guinness-like cascading crema and chocolate finish.',
      customizable: false
    },
    {
      id: 'c6',
      title: 'Ceremonial Uji Matcha Latte',
      category: 'tea',
      price: 6.95,
      image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
      tag: 'Artisan',
      isSignature: true,
      isVegan: true,
      isGf: true,
      desc: 'First-harvest stone-ground green tea from Kyoto whisked with steamed oat milk and vanilla blossom.',
      customizable: true
    },
    {
      id: 'c7',
      title: 'Almond Twice-Baked Croissant',
      category: 'bakery',
      price: 5.75,
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
      tag: 'Oven Warm',
      isSignature: true,
      isVegan: false,
      isGf: false,
      desc: 'Laminated French butter croissant filled with homemade almond frangipane and toasted sliced almonds.',
      customizable: false
    },
    {
      id: 'c8',
      title: 'Wild Berry Cruffin',
      category: 'bakery',
      price: 6.25,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
      tag: 'Fresh Bake',
      isSignature: false,
      isVegan: false,
      isGf: false,
      desc: 'Flaky hybrid croissant muffin rolled in vanilla sugar, filled with house-simmered blackberry curd.',
      customizable: false
    },
    {
      id: 'c9',
      title: 'Truffle Avocado Brioche',
      category: 'brunch',
      price: 13.50,
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
      tag: "Chef's Special",
      isSignature: true,
      isVegan: false,
      isGf: false,
      desc: 'Hass avocado smash on toasted brioche, white truffle glaze, pickled watermelon radish, and poached egg.',
      customizable: false
    },
    {
      id: 'c10',
      title: 'Rustic Shakshuka Skillet',
      category: 'brunch',
      price: 14.50,
      image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
      tag: 'Warm Comfort',
      isSignature: false,
      isVegan: false,
      isGf: true,
      desc: 'Two farm eggs gently poached in spiced San Marzano tomato sauce, goat feta, and warm zaatar sourdough.',
      customizable: false
    }
  ];

  // ==========================================================================
  // 2. Roast Profile Data
  // ==========================================================================
  const roastData = {
    light: {
      name: 'Yirgacheffe Bloom (Nordic Light Roast)',
      altitude: '2,150 MASL • Washed Process',
      tags: ['Bergamot', 'Jasmine Flower', 'Wild Honey', 'Bright Citric'],
      acidity: '88%',
      sweetness: '80%',
      body: '45%'
    },
    medium: {
      name: 'Huila Velvet (Balanced Medium Roast)',
      altitude: '1,850 MASL • Honey Process',
      tags: ['Milk Chocolate', 'Toasted Hazelnut', 'Brown Butter', 'Red Apple'],
      acidity: '55%',
      sweetness: '90%',
      body: '75%'
    },
    dark: {
      name: 'Midnight Obsidian (Artisan Dark Roast)',
      altitude: '1,600 MASL • Natural Wet-Hulled',
      tags: ['Dark Cacao (85%)', 'Smoky Molasses', 'Cedarwood', 'Heavy Crema'],
      acidity: '25%',
      sweetness: '65%',
      body: '95%'
    }
  };

  // ==========================================================================
  // 3. State Management
  // ==========================================================================
  let currentCategory = 'all';
  let currentDiet = 'all';
  let searchQuery = '';
  let cart = [];
  let tipPercent = 15;
  let orderMode = 'dine-in';
  let activeModalItem = null;
  let modalCustomSelections = {
    size: 'Regular',
    sizePrice: 0,
    milk: 'Whole Milk',
    sweetness: '50%'
  };
  let modalQuantity = 1;

  // Brew Calculator State
  let currentBrewMethod = 'v60';
  let currentCups = 2;
  let currentStrength = 'balanced';
  let brewTimerInterval = null;
  let brewTimerSeconds = 0;
  let isTimerRunning = false;

  // ==========================================================================
  // 4. DOM Elements
  // ==========================================================================
  const menuGrid = document.getElementById('menuGrid');
  const catPills = document.querySelectorAll('.cat-pill');
  const dietaryChips = document.querySelectorAll('.dietary-chip');
  const menuSearchInput = document.getElementById('menuSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const siteHeader = document.getElementById('siteHeader');
  const themeToggleBtn = document.getElementById('themeToggleBtn');

  // Cart Drawer Elements
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartBadgeCount = document.getElementById('cartBadgeCount');
  const drawerCartCount = document.getElementById('drawerCartCount');
  const cartItemsList = document.getElementById('cartItemsList');
  const emptyCartState = document.getElementById('emptyCartState');
  const cartDrawerFooter = document.getElementById('cartDrawerFooter');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartTax = document.getElementById('cartTax');
  const cartTipAmount = document.getElementById('cartTipAmount');
  const cartGrandTotal = document.getElementById('cartGrandTotal');
  const tipPercentageText = document.getElementById('tipPercentageText');
  const tipButtons = document.querySelectorAll('.tip-btn');
  const modeButtons = document.querySelectorAll('.mode-btn');
  const checkoutBtn = document.getElementById('checkoutBtn');

  // Item Modal Elements
  const itemModalBackdrop = document.getElementById('itemModalBackdrop');
  const itemCustomModal = document.getElementById('itemCustomModal');
  const closeItemModalBtn = document.getElementById('closeItemModalBtn');
  const modalItemImg = document.getElementById('modalItemImg');
  const modalItemTags = document.getElementById('modalItemTags');
  const modalItemCategory = document.getElementById('modalItemCategory');
  const modalItemTitle = document.getElementById('modalItemTitle');
  const modalItemPrice = document.getElementById('modalItemPrice');
  const modalItemDesc = document.getElementById('modalItemDesc');
  const modalQtyVal = document.getElementById('modalQtyVal');
  const modalQtyMinus = document.getElementById('modalQtyMinus');
  const modalQtyPlus = document.getElementById('modalQtyPlus');
  const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
  const modalAddPrice = document.getElementById('modalAddPrice');

  // Reservation Modal Elements
  const tableBookingForm = document.getElementById('tableBookingForm');
  const resSuccessBackdrop = document.getElementById('resSuccessBackdrop');
  const resSuccessModal = document.getElementById('resSuccessModal');
  const closeResSuccessBtn = document.getElementById('closeResSuccessBtn');
  const finishResBtn = document.getElementById('finishResBtn');

  // Checkout Receipt Elements
  const checkoutSuccessBackdrop = document.getElementById('checkoutSuccessBackdrop');
  const checkoutSuccessModal = document.getElementById('checkoutSuccessModal');
  const closeCheckoutSuccessBtn = document.getElementById('closeCheckoutSuccessBtn');
  const closeReceiptBtn = document.getElementById('closeReceiptBtn');

  // Toast Container
  const toastContainer = document.getElementById('toastContainer');

  // Mobile Drawer
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeMobileDrawer = document.getElementById('closeMobileDrawer');

  // ==========================================================================
  // 5. Ambient Canvas Animation (Coffee Steam Particles)
  // ==========================================================================
  const canvas = document.getElementById('ambientCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 50;
      this.radius = Math.random() * 3 + 1;
      this.speedY = Math.random() * 0.6 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.alpha = Math.random() * 0.4 + 0.1;
      this.fade = Math.random() * 0.003 + 0.001;
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.alpha -= this.fade;
      if (this.alpha <= 0 || this.y < -20) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 163, 89, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 45; i++) {
    particles.push(new Particle());
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // ==========================================================================
  // 6. Header Scroll & Mobile Navigation
  // ==========================================================================
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  mobileMenuToggle.addEventListener('click', () => {
    mobileDrawer.classList.add('open');
  });

  closeMobileDrawer.addEventListener('click', () => {
    mobileDrawer.classList.remove('open');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  });

  // ==========================================================================
  // 7. Theme Switcher (Dark Mode vs Golden Hour Mode)
  // ==========================================================================
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);

    const icon = themeToggleBtn.querySelector('.theme-icon');
    const text = themeToggleBtn.querySelector('.theme-text');

    if (newTheme === 'light') {
      icon.className = 'fa-solid fa-sun theme-icon';
      text.textContent = 'Golden Hour';
      showToast('Switched to Sunlit Golden Hour Ambiance ☀️');
    } else {
      icon.className = 'fa-solid fa-moon theme-icon';
      text.textContent = 'Midnight';
      showToast('Switched to Midnight Roast Ambiance ☕');
    }
  });

  // ==========================================================================
  // 8. Menu Rendering & Filtering
  // ==========================================================================
  function renderMenu() {
    const filtered = menuData.filter(item => {
      // Category filter
      const matchesCategory = currentCategory === 'all' || item.category === currentCategory;

      // Dietary filter
      let matchesDiet = true;
      if (currentDiet === 'signature') matchesDiet = item.isSignature;
      else if (currentDiet === 'vegan') matchesDiet = item.isVegan;
      else if (currentDiet === 'gf') matchesDiet = item.isGf;

      // Search query filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q)
      );

      return matchesCategory && matchesDiet && matchesSearch;
    });

    if (filtered.length === 0) {
      menuGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
          <i class="fa-solid fa-mug-saucer" style="font-size: 3rem; color: var(--border-medium); margin-bottom: 16px; display: block;"></i>
          <h3 style="font-family: var(--font-serif); font-size: 1.6rem; margin-bottom: 8px;">No creations match your search</h3>
          <p style="color: var(--text-secondary); margin-bottom: 20px;">Try adjusting your keywords or clearing selected filters.</p>
          <button class="btn btn-outline" id="resetFiltersBtn">Reset All Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', resetAllFilters);
      }
      return;
    }

    menuGrid.innerHTML = filtered.map(item => `
      <div class="menu-item-card" data-id="${item.id}">
        <div class="item-img-box">
          <img src="${item.image}" alt="${item.title}" class="item-img" loading="lazy">
          <span class="item-tag-pill">${item.tag}</span>
          <button class="item-quick-btn" title="Quick Customizer" data-quick-id="${item.id}">
            <i class="fa-solid fa-expand"></i>
          </button>
        </div>
        <div class="item-content">
          <div class="item-header">
            <h3 class="item-title">${item.title}</h3>
            <span class="item-price">$${item.price.toFixed(2)}</span>
          </div>
          <p class="item-desc">${item.desc}</p>
          <div class="item-meta-row">
            <div class="item-diet-badges">
              ${item.isVegan ? '<span class="diet-icon-badge" title="100% Plant-Based"><i class="fa-solid fa-leaf"></i> Vegan</span>' : ''}
              ${item.isGf ? '<span class="diet-icon-badge" title="Gluten-Free Recipe"><i class="fa-solid fa-wheat-awn"></i> GF</span>' : ''}
            </div>
            <button class="item-add-btn" data-add-id="${item.id}">
              <i class="fa-solid fa-plus"></i> Add to Bag
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach Event Listeners to cards
    document.querySelectorAll('.item-quick-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-quick-id');
        openCustomModal(id);
      });
    });

    document.querySelectorAll('.item-add-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-add-id');
        const item = menuData.find(i => i.id === id);
        if (item.customizable) {
          openCustomModal(id);
        } else {
          addToCartDirect(item);
        }
      });
    });
  }

  function resetAllFilters() {
    currentCategory = 'all';
    currentDiet = 'all';
    searchQuery = '';
    menuSearchInput.value = '';
    searchClearBtn.style.display = 'none';

    catPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-category') === 'all'));
    dietaryChips.forEach(c => c.classList.toggle('active', c.getAttribute('data-diet') === 'all'));

    renderMenu();
  }

  // Category Pill Clicks
  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-category');
      renderMenu();
    });
  });

  // Dietary Chip Clicks
  dietaryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      dietaryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentDiet = chip.getAttribute('data-diet');
      renderMenu();
    });
  });

  // Search input
  menuSearchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    searchClearBtn.style.display = searchQuery.length > 0 ? 'block' : 'none';
    renderMenu();
  });

  searchClearBtn.addEventListener('click', () => {
    menuSearchInput.value = '';
    searchQuery = '';
    searchClearBtn.style.display = 'none';
    renderMenu();
  });

  // ==========================================================================
  // 9. Interactive Roast Profile Explorer
  // ==========================================================================
  const roastTabs = document.querySelectorAll('.roast-tab');
  const roastName = document.getElementById('roastName');
  const roastAltitude = document.getElementById('roastAltitude');
  const roastNotes = document.getElementById('roastNotes');
  const meterAcidity = document.getElementById('meterAcidity');
  const meterSweetness = document.getElementById('meterSweetness');
  const meterBody = document.getElementById('meterBody');

  roastTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      roastTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const roastKey = tab.getAttribute('data-roast');
      const r = roastData[roastKey];

      roastName.textContent = r.name;
      roastAltitude.innerHTML = `<i class="fa-solid fa-mountain"></i> ${r.altitude}`;
      roastNotes.innerHTML = r.tags.map(t => `<span class="flavor-tag">${t}</span>`).join('');
      meterAcidity.style.width = r.acidity;
      meterSweetness.style.width = r.sweetness;
      meterBody.style.width = r.body;
    });
  });

  // ==========================================================================
  // 10. Precision Brew Ratio Calculator
  // ==========================================================================
  const brewMethodBtns = document.querySelectorAll('.brew-method-btn');
  const cupsRange = document.getElementById('cupsRange');
  const cupsValueDisplay = document.getElementById('cupsValueDisplay');
  const strengthPills = document.querySelectorAll('.strength-pill');

  const calcCoffeeDose = document.getElementById('calcCoffeeDose');
  const calcWaterWeight = document.getElementById('calcWaterWeight');
  const calcWaterTemp = document.getElementById('calcWaterTemp');
  const calcGrindSize = document.getElementById('calcGrindSize');
  const calcBrewTime = document.getElementById('calcBrewTime');
  const calcBloom = document.getElementById('calcBloom');

  const brewMethodSpecs = {
    v60: {
      ratios: { delicate: 17, balanced: 16, rich: 14.5 },
      temp: '93°C (200°F)',
      grind: 'Medium-Fine (Kosher Salt)',
      time: '3 min 15 sec'
    },
    chemex: {
      ratios: { delicate: 16.5, balanced: 15, rich: 13.5 },
      temp: '94°C (202°F)',
      grind: 'Medium-Coarse (Rough Sand)',
      time: '4 min 00 sec'
    },
    frenchpress: {
      ratios: { delicate: 15, balanced: 14, rich: 12 },
      temp: '95°C (204°F)',
      grind: 'Coarse (Sea Salt)',
      time: '4 min 30 sec'
    },
    aeropress: {
      ratios: { delicate: 14, balanced: 12, rich: 10 },
      temp: '88°C (190°F)',
      grind: 'Fine (Table Salt)',
      time: '2 min 00 sec'
    }
  };

  function updateBrewCalculator() {
    const spec = brewMethodSpecs[currentBrewMethod];
    const ratio = spec.ratios[currentStrength];
    const totalWaterMl = currentCups * 250;
    const coffeeGrams = (totalWaterMl / ratio).toFixed(1);
    const bloomWater = Math.round(coffeeGrams * 2.2);

    cupsValueDisplay.textContent = `${currentCups} ${currentCups === 1 ? 'Cup' : 'Cups'} (${totalWaterMl} ml)`;
    calcCoffeeDose.innerHTML = `${coffeeGrams} <span class="unit">g</span>`;
    calcWaterWeight.innerHTML = `${totalWaterMl} <span class="unit">g / ml</span>`;
    calcWaterTemp.textContent = spec.temp;
    calcGrindSize.textContent = spec.grind;
    calcBrewTime.textContent = spec.time;
    calcBloom.textContent = `${bloomWater} g`;
  }

  brewMethodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      brewMethodBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentBrewMethod = btn.getAttribute('data-method');
      updateBrewCalculator();
    });
  });

  cupsRange.addEventListener('input', (e) => {
    currentCups = parseInt(e.target.value, 10);
    updateBrewCalculator();
  });

  strengthPills.forEach(pill => {
    pill.addEventListener('click', () => {
      strengthPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentStrength = pill.getAttribute('data-strength');
      updateBrewCalculator();
    });
  });

  // Brew Timer Functionality
  const brewTimerDisplay = document.getElementById('brewTimerDisplay');
  const startTimerBtn = document.getElementById('startTimerBtn');
  const resetTimerBtn = document.getElementById('resetTimerBtn');
  const timerStepGuide = document.getElementById('timerStepGuide');

  startTimerBtn.addEventListener('click', () => {
    if (!isTimerRunning) {
      isTimerRunning = true;
      startTimerBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Pause Timer';
      startTimerBtn.classList.replace('btn-gold', 'btn-outline');

      brewTimerInterval = setInterval(() => {
        brewTimerSeconds++;
        const mins = String(Math.floor(brewTimerSeconds / 60)).padStart(2, '0');
        const secs = String(brewTimerSeconds % 60).padStart(2, '0');
        brewTimerDisplay.textContent = `${mins}:${secs}`;

        // Step Guide Prompts
        if (brewTimerSeconds < 45) {
          timerStepGuide.textContent = 'Step 1: Pour bloom water evenly in spirals. Let de-gas for 45s.';
        } else if (brewTimerSeconds < 120) {
          timerStepGuide.textContent = 'Step 2: Steady concentric pour up to 60% total water weight.';
        } else if (brewTimerSeconds < 195) {
          timerStepGuide.textContent = 'Step 3: Top off remaining water weight gently. Give one gentle swirl.';
        } else {
          timerStepGuide.textContent = 'Step 4: Drawdown complete! Discard filter and serve into preheated cup.';
        }
      }, 1000);
    } else {
      isTimerRunning = false;
      clearInterval(brewTimerInterval);
      startTimerBtn.innerHTML = '<i class="fa-solid fa-play"></i> Resume Timer';
      startTimerBtn.classList.replace('btn-outline', 'btn-gold');
    }
  });

  resetTimerBtn.addEventListener('click', () => {
    clearInterval(brewTimerInterval);
    isTimerRunning = false;
    brewTimerSeconds = 0;
    brewTimerDisplay.textContent = '00:00';
    startTimerBtn.innerHTML = '<i class="fa-solid fa-play"></i> Start Brew Timer';
    startTimerBtn.classList.replace('btn-outline', 'btn-gold');
    timerStepGuide.textContent = 'Click start when initiating first water pour';
  });

  // ==========================================================================
  // 11. Quick View & Customization Modal
  // ==========================================================================
  function openCustomModal(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;

    activeModalItem = item;
    modalQuantity = 1;
    modalCustomSelections = {
      size: 'Regular',
      sizePrice: 0,
      milk: 'Whole Milk',
      sweetness: '50%'
    };

    modalItemImg.src = item.image;
    modalItemImg.alt = item.title;
    modalItemCategory.textContent = item.category.toUpperCase();
    modalItemTitle.textContent = item.title;
    modalItemPrice.textContent = `$${item.price.toFixed(2)}`;
    modalItemDesc.textContent = item.desc;
    modalQtyVal.textContent = '1';

    modalItemTags.innerHTML = `
      <span class="item-tag-pill">${item.tag}</span>
      ${item.isSignature ? '<span class="item-tag-pill" style="background:var(--gold-primary);color:#120e0a;">Signature</span>' : ''}
    `;

    // Reset pill selections
    document.querySelectorAll('.option-pill').forEach(pill => {
      const type = pill.getAttribute('data-option-type');
      const val = pill.getAttribute('data-val');
      if (type === 'size') pill.classList.toggle('active', val === 'Regular');
      if (type === 'milk') pill.classList.toggle('active', val === 'Whole Milk');
      if (type === 'sweetness') pill.classList.toggle('active', val === '50%');
    });

    updateModalPrice();

    itemModalBackdrop.classList.add('open');
    itemCustomModal.classList.add('open');
  }

  function closeCustomModal() {
    itemModalBackdrop.classList.remove('open');
    itemCustomModal.classList.remove('open');
    activeModalItem = null;
  }

  closeItemModalBtn.addEventListener('click', closeCustomModal);
  itemModalBackdrop.addEventListener('click', closeCustomModal);

  // Modal Option Pills
  document.querySelectorAll('.option-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const type = pill.getAttribute('data-option-type');
      const parent = pill.parentElement;
      parent.querySelectorAll('.option-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      if (type === 'size') {
        modalCustomSelections.size = pill.getAttribute('data-val');
        modalCustomSelections.sizePrice = parseFloat(pill.getAttribute('data-price')) || 0;
      } else if (type === 'milk') {
        modalCustomSelections.milk = pill.getAttribute('data-val');
      } else if (type === 'sweetness') {
        modalCustomSelections.sweetness = pill.getAttribute('data-val');
      }
      updateModalPrice();
    });
  });

  function updateModalPrice() {
    if (!activeModalItem) return;
    const base = activeModalItem.price + modalCustomSelections.sizePrice;
    const total = base * modalQuantity;
    modalAddPrice.textContent = `$${total.toFixed(2)}`;
  }

  modalQtyMinus.addEventListener('click', () => {
    if (modalQuantity > 1) {
      modalQuantity--;
      modalQtyVal.textContent = modalQuantity;
      updateModalPrice();
    }
  });

  modalQtyPlus.addEventListener('click', () => {
    modalQuantity++;
    modalQtyVal.textContent = modalQuantity;
    updateModalPrice();
  });

  modalAddToCartBtn.addEventListener('click', () => {
    if (!activeModalItem) return;

    const unitPrice = activeModalItem.price + modalCustomSelections.sizePrice;
    const cartEntry = {
      cartId: `${activeModalItem.id}-${modalCustomSelections.size}-${modalCustomSelections.milk}-${modalCustomSelections.sweetness}`,
      id: activeModalItem.id,
      title: activeModalItem.title,
      image: activeModalItem.image,
      unitPrice: unitPrice,
      quantity: modalQuantity,
      details: `${modalCustomSelections.size} • ${modalCustomSelections.milk} • ${modalCustomSelections.sweetness}`
    };

    const existingIndex = cart.findIndex(item => item.cartId === cartEntry.cartId);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += modalQuantity;
    } else {
      cart.push(cartEntry);
    }

    closeCustomModal();
    updateCartUI();
    openCartDrawer();
    showToast(`Added ${modalQuantity}x ${activeModalItem.title} to your bag ☕`);
  });

  function addToCartDirect(item) {
    const cartEntry = {
      cartId: `${item.id}-default`,
      id: item.id,
      title: item.title,
      image: item.image,
      unitPrice: item.price,
      quantity: 1,
      details: 'Artisan Batch • Freshly Prepared'
    };

    const existingIndex = cart.findIndex(c => c.cartId === cartEntry.cartId);
    if (existingIndex > -1) {
      cart[existingIndex].quantity++;
    } else {
      cart.push(cartEntry);
    }

    updateCartUI();
    openCartDrawer();
    showToast(`Added ${item.title} to your bag! 🥐`);
  }

  // ==========================================================================
  // 12. Cart Drawer & Calculations
  // ==========================================================================
  function openCartDrawer() {
    cartDrawer.classList.add('open');
    cartBackdrop.classList.add('open');
  }

  function closeCartDrawer() {
    cartDrawer.classList.remove('open');
    cartBackdrop.classList.remove('open');
  }

  openCartBtn.addEventListener('click', openCartDrawer);
  closeCartBtn.addEventListener('click', closeCartDrawer);
  cartBackdrop.addEventListener('click', closeCartDrawer);

  document.querySelectorAll('.close-cart-link').forEach(link => {
    link.addEventListener('click', closeCartDrawer);
  });

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      orderMode = btn.getAttribute('data-mode');
      showToast(`Switched order mode to: ${orderMode === 'dine-in' ? 'Dine-In' : 'Express Takeaway'}`);
    });
  });

  tipButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tipButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      tipPercent = parseInt(btn.getAttribute('data-tip'), 10) || 0;
      tipPercentageText.textContent = `${tipPercent}%`;
      updateCartTotals();
    });
  });

  function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadgeCount.textContent = totalItems;
    drawerCartCount.textContent = `(${totalItems} ${totalItems === 1 ? 'item' : 'items'})`;

    if (cart.length === 0) {
      cartItemsList.innerHTML = '';
      cartItemsList.appendChild(emptyCartState);
      emptyCartState.style.display = 'block';
      cartDrawerFooter.style.display = 'none';
      return;
    }

    emptyCartState.style.display = 'none';
    cartDrawerFooter.style.display = 'block';

    cartItemsList.innerHTML = cart.map(item => `
      <div class="cart-item-row" data-cart-id="${item.cartId}">
        <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.title}</h4>
          <p class="cart-item-customs">${item.details}</p>
          <div class="cart-item-bottom">
            <span class="cart-item-price">$${(item.unitPrice * item.quantity).toFixed(2)}</span>
            <div class="item-qty-controls">
              <button class="qty-btn qty-minus" data-id="${item.cartId}">&minus;</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn qty-plus" data-id="${item.cartId}">&plus;</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Attach quantity stepper events
    document.querySelectorAll('.qty-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        modifyCartQuantity(id, -1);
      });
    });

    document.querySelectorAll('.qty-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        modifyCartQuantity(id, 1);
      });
    });

    updateCartTotals();
  }

  function modifyCartQuantity(cartId, delta) {
    const itemIndex = cart.findIndex(item => item.cartId === cartId);
    if (itemIndex > -1) {
      cart[itemIndex].quantity += delta;
      if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
      }
      updateCartUI();
    }
  }

  function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
    const tax = subtotal * 0.0825;
    const tip = subtotal * (tipPercent / 100);
    const grandTotal = subtotal + tax + tip;

    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTax.textContent = `$${tax.toFixed(2)}`;
    cartTipAmount.textContent = `$${tip.toFixed(2)}`;
    cartGrandTotal.textContent = `$${grandTotal.toFixed(2)}`;
  }

  // Checkout Action
  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;

    const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
    const tax = subtotal * 0.0825;
    const tip = subtotal * (tipPercent / 100);
    const grandTotal = subtotal + tax + tip;

    const orderNumber = `AUR-${Math.floor(100 + Math.random() * 900)}`;
    document.getElementById('orderNumberTxt').textContent = `#${orderNumber}`;
    document.getElementById('orderModeBadge').textContent = orderMode === 'dine-in' ? 'Dine-In • Table Service' : 'Express Takeaway • Bar Pickup';
    document.getElementById('receiptTotalPaid').textContent = `$${grandTotal.toFixed(2)}`;

    const itemsSummary = document.getElementById('receiptItemsSummary');
    itemsSummary.innerHTML = cart.map(item => `
      <div class="receipt-item-line">
        <span>${item.quantity}x ${item.title}</span>
        <strong>$${(item.unitPrice * item.quantity).toFixed(2)}</strong>
      </div>
    `).join('');

    // Clear cart
    cart = [];
    updateCartUI();
    closeCartDrawer();

    // Show confirmation modal
    checkoutSuccessBackdrop.classList.add('open');
    checkoutSuccessModal.classList.add('open');
  });

  closeCheckoutSuccessBtn.addEventListener('click', () => {
    checkoutSuccessBackdrop.classList.remove('open');
    checkoutSuccessModal.classList.remove('open');
  });

  closeReceiptBtn.addEventListener('click', () => {
    checkoutSuccessBackdrop.classList.remove('open');
    checkoutSuccessModal.classList.remove('open');
  });

  // ==========================================================================
  // 13. Table Reservation Booking Flow
  // ==========================================================================
  // Set default min date to today
  const resDateInput = document.getElementById('resDate');
  const today = new Date().toISOString().split('T')[0];
  resDateInput.min = today;
  resDateInput.value = today;

  tableBookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('resName').value.trim();
    const guests = document.getElementById('resGuests').value;
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    const zone = document.querySelector('input[name="seatingZone"]:checked')?.value || 'Main Roastery Bar';

    // Generate random luxury booking ticket
    const ticketCode = `AUR-${Math.floor(10000 + Math.random() * 90000)}`;

    document.getElementById('ticketCode').textContent = ticketCode;
    document.getElementById('ticketGuestName').textContent = name;
    document.getElementById('ticketPartySize').textContent = `${guests} ${guests === '1' ? 'Guest' : 'Guests'}`;
    document.getElementById('ticketDate').textContent = date;
    document.getElementById('ticketTime').textContent = time;
    document.getElementById('ticketZone').textContent = zone;

    resSuccessBackdrop.classList.add('open');
    resSuccessModal.classList.add('open');

    tableBookingForm.reset();
    resDateInput.value = today;
  });

  closeResSuccessBtn.addEventListener('click', () => {
    resSuccessBackdrop.classList.remove('open');
    resSuccessModal.classList.remove('open');
  });

  finishResBtn.addEventListener('click', () => {
    resSuccessBackdrop.classList.remove('open');
    resSuccessModal.classList.remove('open');
    showToast('Reservation registered! Confirmation sent to your inbox.');
  });

  // ==========================================================================
  // 14. Reviews Carousel
  // ==========================================================================
  const reviewsTrack = document.getElementById('reviewsTrack');
  const carouselDots = document.querySelectorAll('.carousel-dots .dot');
  let currentReviewIndex = 0;

  function setReviewIndex(idx) {
    currentReviewIndex = idx;
    carouselDots.forEach((d, i) => d.classList.toggle('active', i === idx));
    const offset = idx * 100;
    reviewsTrack.style.transform = `translateX(-${offset}%)`;
  }

  carouselDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      setReviewIndex(idx);
    });
  });

  // Auto rotate every 6s
  setInterval(() => {
    const nextIdx = (currentReviewIndex + 1) % carouselDots.length;
    setReviewIndex(nextIdx);
  }, 6000);

  // ==========================================================================
  // 15. FAQ Accordion
  // ==========================================================================
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.parentElement;
      const content = item.querySelector('.accordion-content');
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Close all other open items
      document.querySelectorAll('.accordion-item').forEach(other => {
        if (other !== item && other.classList.contains('active')) {
          other.classList.remove('active');
          other.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
          other.querySelector('.accordion-content').style.maxHeight = null;
        }
      });

      if (!isExpanded) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      }
    });
  });

  // ==========================================================================
  // 16. Quick Film Modal / Roaster Tour Button
  // ==========================================================================
  const quickBrewModalBtn = document.getElementById('quickBrewModalBtn');
  if (quickBrewModalBtn) {
    quickBrewModalBtn.addEventListener('click', () => {
      showToast('✨ Roasting Batch In Progress: Direct Trade Ethiopian Yirgacheffe G1 at 204°C');
      const storySection = document.getElementById('story');
      if (storySection) storySection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 17. Newsletter Form
  // ==========================================================================
  const newsletterForm = document.getElementById('newsletterForm');
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsEmailInput').value;
    if (email) {
      showToast('Welcome to the AURA Connoisseur Circle! 15% code sent to your email 🎉');
      newsletterForm.reset();
    }
  });

  // ==========================================================================
  // 18. Toast Notification Helper
  // ==========================================================================
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast success';
    toast.innerHTML = `
      <i class="fa-solid fa-circle-check"></i>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  // Initialize
  renderMenu();
  updateBrewCalculator();
  updateCartUI();
});
