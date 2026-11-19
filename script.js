/* ==================== RASM GENERATORI (OFFLINE / FALLBACK UCHUN) ==================== */
function createProductImage(title, subtitle, accentColor = "#FF5A00", emoji = "🍔") {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#141418"/>
          <stop offset="100%" stop-color="#271b14"/>
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#bg)"/>
      <circle cx="510" cy="80" r="110" fill="${accentColor}" fill-opacity="0.16"/>
      <circle cx="95" cy="330" r="130" fill="${accentColor}" fill-opacity="0.12"/>
      <text x="300" y="155" font-size="78" text-anchor="middle" dominant-baseline="middle">${emoji}</text>
      <text x="300" y="245" fill="#FFFFFF" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="800" text-anchor="middle">${title}</text>
      <text x="300" y="282" fill="#FF9457" font-family="Inter, Arial, sans-serif" font-size="17" font-weight="600" text-anchor="middle">${subtitle}</text>
    </svg>
  `.trim();
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

/* ==================== MAHSULOTLAR BAZASI (3 KATEGORIYA) ==================== */
const PRODUCTS = [
  // --- FAST FOOD ---
  {
    id: "burger",
    name: "Burger",
    category: "Fast Food",
    price: 34000,
    popular: true,
    description: "Shirali mol go‘shti kotleti, cheddar pishloq, yangi sabzavot va maxsus sousli yumshoq bulochka.",
    image: createProductImage("Burger", "Shirali kotlet & Cheddar", "#FF5A00", "🍔")
  },
  {
    id: "hot-dog",
    name: "Hot Dog",
    category: "Fast Food",
    price: 22000,
    popular: false,
    description: "Dudlangan sosiska, karamellashgan piyoz, xantal va ketchup bilan yumshoq bulochkada.",
    image: createProductImage("Hot Dog", "Issiq sosiska & Sous", "#FF6B1A", "🌭")
  },
  {
    id: "lavash",
    name: "Lavash",
    category: "Fast Food",
    price: 32000,
    popular: true,
    description: "Yupqa lavash xamirida grilda pishirilgan go‘sht, pomidor, bodring, chips va oq-qizil sous.",
    image: createProductImage("Lavash", "Gril go'sht & Maxsus sous", "#FF5A00", "🌯")
  },
  {
    id: "pizza",
    name: "Pizza",
    category: "Fast Food",
    price: 68000,
    popular: true,
    description: "Yupqa xamir, mozzarella pishloqi, pepperoni, zaytun va xushbo‘y tomat sousi bilan pechda pishirilgan.",
    image: createProductImage("Pizza", "Mozzarella & Pepperoni", "#FF4500", "🍕")
  },
  {
    id: "fri-kartoshka",
    name: "Fri kartoshka",
    category: "Fast Food",
    price: 18000,
    popular: false,
    description: "Tashqarisi qarsildoq, ichi yumshoq oltinrang kartoshka bo‘laklari, tuz va sous bilan.",
    image: createProductImage("Fri kartoshka", "Qarsildoq oltin bo'laklar", "#FF8800", "🍟")
  },
  {
    id: "sendvich",
    name: "Sendvich",
    category: "Fast Food",
    price: 28000,
    popular: false,
    description: "Tosterlangan non bo‘laklari orasida tovuq filesi, pishloq, salat bargi va qaymoqli sous.",
    image: createProductImage("Sendvich", "Tost non & Tovuq filesi", "#FF701F", "🥪")
  },

  // --- ICHIMLIKLAR ---
  {
    id: "coca-cola",
    name: "Coca-Cola",
    category: "Ichimliklar",
    price: 12000,
    popular: true,
    description: "Muzdek gazlangan klassik Coca-Cola — fast food taomlari bilan eng zo‘r juftlik.",
    image: createProductImage("Coca-Cola", "Muzdek gazlangan ichimlik", "#E11D48", "🥤")
  },
  {
    id: "fanta",
    name: "Fanta",
    category: "Ichimliklar",
    price: 12000,
    popular: false,
    description: "Apelsin ta’mli tetiklashtiruvchi gazlangan ichimlik, sovuq holda tortiladi.",
    image: createProductImage("Fanta", "Apelsin ta'mli tetiklik", "#FF7700", "🍊")
  },
  {
    id: "sprite",
    name: "Sprite",
    category: "Ichimliklar",
    price: 12000,
    popular: false,
    description: "Limon va laym ta’miga ega yengil va tetiklashtiruvchi gazlangan ichimlik.",
    image: createProductImage("Sprite", "Limon-laym salqinligi", "#10B981", "🍋")
  },
  {
    id: "sharbat",
    name: "Sharbat",
    category: "Ichimliklar",
    price: 15000,
    popular: false,
    description: "Tabiiy mevalardan tayyorlangan shirin va foydali sharbat.",
    image: createProductImage("Sharbat", "Tabiiy meva sharbati", "#F59E0B", "🧃")
  },
  {
    id: "milkshake",
    name: "Milkshake",
    category: "Ichimliklar",
    price: 24000,
    popular: true,
    description: "Qaymoqli muzqaymoq va sut asosida ko‘pirtirilgan quyuq hamda mazali kokteyl.",
    image: createProductImage("Milkshake", "Qaymoqli shirin kokteyl", "#EC4899", "🥛")
  },

  // --- DESERTLAR ---
  {
    id: "tort",
    name: "Tort",
    category: "Desertlar",
    price: 36000,
    popular: false,
    description: "Mayin biskvit qatlamlari va shokoladli-qaymoqli krem bilan bezatilgan nafis tort bo‘lagi.",
    image: createProductImage("Tort", "Mayin biskvit & Krem", "#D97706", "🍰")
  },
  {
    id: "donut",
    name: "Donut",
    category: "Desertlar",
    price: 16000,
    popular: true,
    description: "Yumshoq shirin halqasimon ponchik ustida shokoladli glazur va rangli bezaklar.",
    image: createProductImage("Donut", "Glazurli shirin ponchik", "#F43F5E", "🍩")
  },
  {
    id: "muzqaymoq",
    name: "Muzqaymoq",
    category: "Desertlar",
    price: 15000,
    popular: false,
    description: "Sovuq, qaymoqli va nihoyatda yoqimli vanilli-shokoladli muzqaymoq.",
    image: createProductImage("Muzqaymoq", "Sovuq qaymoqli desert", "#38BDF8", "🍨")
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    category: "Desertlar",
    price: 38000,
    popular: false,
    description: "Pishloqli kremli qatlam va pechenye asosida tayyorlangan klassik chizkeyk.",
    image: createProductImage("Cheesecake", "Klassik pishloqli desert", "#FBBF24", "🍮")
  }
];

/* ==================== KONSTANTALAR VA HOLAT (STATE) ==================== */
const DELIVERY_FEE = 15000;
const FREE_DELIVERY_THRESHOLD = 100000;

const PROMO_CODES = {
  TEZ10: 0.10 // 10% chegirma
};

let state = {
  activeCategory: "all",
  cart: [], // { id, name, price, image, qty }
  appliedPromo: null, // { code: "TEZ10", rate: 0.10 } yoki null
  lastOrder: null
};

/* ==================== YORDAMCHI FUNKSIYALAR ==================== */
function formatPrice(amount) {
  return `${Math.round(amount).toLocaleString("ru-RU").replace(/,/g, " ")} so‘m`;
}

function getProductById(id) {
  return PRODUCTS.find((item) => item.id === id);
}

function showToast(message) {
  const toastEl = document.getElementById("cartToast");
  const msgEl = document.getElementById("cartToastMessage");
  if (!toastEl || !msgEl) return;
  msgEl.textContent = message;
  const toast = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 2200 });
  toast.show();
}

function saveStateToStorage() {
  try {
    localStorage.setItem(
      "tezfood_state_v1",
      JSON.stringify({
        cart: state.cart,
        appliedPromo: state.appliedPromo
      })
    );
  } catch (e) {
    // localStorage bloklangan bo'lsa xatolik chiqarmaslik
  }
}

function loadStateFromStorage() {
  try {
    const raw = localStorage.getItem("tezfood_state_v1");
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed.cart)) {
      state.cart = parsed.cart.filter((item) => getProductById(item.id) && item.qty > 0);
    }
    if (parsed.appliedPromo && PROMO_CODES[parsed.appliedPromo.code]) {
      state.appliedPromo = parsed.appliedPromo;
    }
  } catch (e) {
    // Xato bo'lsa boshlang'ich holatda qoladi
  }
}

/* ==================== NARXLARNI HISOBLASH ==================== */
function calculateTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (subtotal === 0) {
    return {
      subtotal: 0,
      discountAmount: 0,
      deliveryFee: 0,
      total: 0
    };
  }

  const discountRate = state.appliedPromo ? state.appliedPromo.rate : 0;
  const discountAmount = Math.round(subtotal * discountRate);
  const afterDiscount = Math.max(0, subtotal - discountAmount);
  const deliveryFee = afterDiscount >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = afterDiscount + deliveryFee;

  return {
    subtotal,
    discountAmount,
    deliveryFee,
    total
  };
}

/* ==================== MAHSULOT KARTALARINI RENDER QILISH ==================== */
function createProductCardHTML(product) {
  return `
    <div class="col-sm-6 col-lg-4">
      <div class="tf-product-card">
        <div class="tf-product-img-wrap">
          <img
            src="${product.image}"
            alt="${product.name}"
            class="tf-product-img"
            loading="lazy"
          />
          <span class="tf-cat-badge">${product.category}</span>
          ${product.popular ? '<span class="tf-popular-badge"><i class="bi bi-fire"></i> Mashhur</span>' : ""}
        </div>
        <div class="tf-product-body">
          <h5 class="tf-product-title">${product.name}</h5>
          <p class="tf-product-desc">${product.description}</p>
          <div class="d-flex justify-content-between align-items-center gap-2 pt-2 border-top border-light-subtle">
            <span class="tf-product-price">${formatPrice(product.price)}</span>
            <button
              type="button"
              class="btn tf-buy-btn"
              data-add-to-cart="${product.id}"
            >
              <i class="bi bi-cart-plus me-1"></i>Sotib olish
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderPopularProducts() {
  const grid = document.getElementById("popularProductsGrid");
  if (!grid) return;
  const popularItems = PRODUCTS.filter((p) => p.popular);
  grid.innerHTML = popularItems.map(createProductCardHTML).join("");
}

function renderMenuProducts() {
  const grid = document.getElementById("menuProductsGrid");
  if (!grid) return;

  const filtered =
    state.activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === state.activeCategory);

  grid.innerHTML = filtered.map(createProductCardHTML).join("");
}

function setActiveCategory(category) {
  state.activeCategory = category;

  document.querySelectorAll("#categoryTabs .tf-cat-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });

  renderMenuProducts();
}

/* ==================== SAVATCHA AMALLARI ==================== */
function addToCart(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const existing = state.cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveStateToStorage();
  renderCart();
  showToast(`"${product.name}" savatchaga qo‘shildi!`);
}

function changeCartQty(productId, delta) {
  const index = state.cart.findIndex((item) => item.id === productId);
  if (index === -1) return;

  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }

  saveStateToStorage();
  renderCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  saveStateToStorage();
  renderCart();
}

function renderCart() {
  const countBadge = document.getElementById("navbarCartCount");
  const container = document.getElementById("cartItemsContainer");
  const checkoutBtn = document.getElementById("openCheckoutBtn");

  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  if (countBadge) {
    countBadge.textContent = totalCount;
  }

  if (container) {
    if (state.cart.length === 0) {
      container.innerHTML = `
        <div class="text-center py-5">
          <i class="bi bi-bag-x fs-1 text-muted d-block mb-2"></i>
          <h6 class="fw-bold mb-1">Savatchangiz bo‘sh</h6>
          <p class="text-muted small mb-3">
            Menyudan yoqtirgan mahsulotingizni tanlab, "Sotib olish" tugmasini bosing.
          </p>
          <a href="#menyu" class="btn tf-btn-primary btn-sm" data-bs-dismiss="offcanvas">
            Menyuga o‘tish
          </a>
        </div>
      `;
    } else {
      container.innerHTML = state.cart
        .map(
          (item) => `
          <div class="tf-cart-item mb-2">
            <div class="d-flex align-items-center gap-3">
              <img src="${item.image}" alt="${item.name}" class="tf-cart-img" />
              <div class="flex-grow-1 min-w-0">
                <div class="d-flex justify-content-between align-items-start gap-2">
                  <h6 class="fw-bold mb-0 text-truncate">${item.name}</h6>
                  <button
                    type="button"
                    class="btn btn-sm text-danger p-0 border-0"
                    title="O‘chirish"
                    data-remove-item="${item.id}"
                  >
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                </div>
                <div class="small text-muted">${formatPrice(item.price)} / dona</div>
                <div class="d-flex justify-content-between align-items-center mt-2">
                  <div class="d-flex align-items-center gap-2">
                    <button
                      type="button"
                      class="tf-qty-btn"
                      data-qty-change="${item.id}"
                      data-delta="-1"
                      aria-label="Kamaytirish"
                    >−</button>
                    <span class="fw-bold small px-1">${item.qty}</span>
                    <button
                      type="button"
                      class="tf-qty-btn"
                      data-qty-change="${item.id}"
                      data-delta="1"
                      aria-label="Oshirish"
                    >+</button>
                  </div>
                  <span class="fw-bold small text-orange">
                    ${formatPrice(item.price * item.qty)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        `
        )
        .join("");
    }
  }

  if (checkoutBtn) {
    checkoutBtn.disabled = state.cart.length === 0;
  }

  renderCartTotals();
}

function renderCartTotals() {
  const { subtotal, discountAmount, deliveryFee, total } = calculateTotals();

  const subtotalEl = document.getElementById("cartSubtotalText");
  const discountRow = document.getElementById("cartDiscountRow");
  const discountLabel = document.getElementById("appliedPromoLabel");
  const discountEl = document.getElementById("cartDiscountText");
  const deliveryEl = document.getElementById("cartDeliveryText");
  const totalEl = document.getElementById("cartTotalText");

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);

  if (discountRow) {
    if (state.appliedPromo && subtotal > 0) {
      discountRow.style.setProperty("display", "flex", "important");
      if (discountLabel) {
        discountLabel.textContent = `${state.appliedPromo.code} -${Math.round(state.appliedPromo.rate * 100)}%`;
      }
      if (discountEl) {
        discountEl.textContent = `-${formatPrice(discountAmount)}`;
      }
    } else {
      discountRow.style.setProperty("display", "none", "important");
    }
  }

  if (deliveryEl) {
    if (subtotal === 0) {
      deliveryEl.textContent = formatPrice(0);
    } else if (deliveryFee === 0) {
      deliveryEl.innerHTML = `<span class="text-success">Bepul</span>`;
    } else {
      deliveryEl.textContent = formatPrice(deliveryFee);
    }
  }

  if (totalEl) totalEl.textContent = formatPrice(total);
}

/* ==================== PROMO KOD TIZIMI ==================== */
function handleApplyPromo() {
  const input = document.getElementById("promoCodeInput");
  const msgEl = document.getElementById("promoMessage");
  if (!input || !msgEl) return;

  const rawCode = input.value.trim().toUpperCase();

  if (!rawCode) {
    state.appliedPromo = null;
    saveStateToStorage();
    renderCartTotals();
    msgEl.className = "small mt-1 text-danger fw-medium";
    msgEl.textContent = "Iltimos, promo kodni kiriting (masalan: TEZ10).";
    return;
  }

  if (PROMO_CODES[rawCode]) {
    state.appliedPromo = {
      code: rawCode,
      rate: PROMO_CODES[rawCode]
    };
    input.value = rawCode;
    saveStateToStorage();
    renderCartTotals();
    msgEl.className = "small mt-1 text-success fw-semibold";
    msgEl.textContent = `✓ "${rawCode}" promo kodi qo‘llandi (${Math.round(PROMO_CODES[rawCode] * 100)}% chegirma).`;
  } else {
    state.appliedPromo = null;
    saveStateToStorage();
    renderCartTotals();
    msgEl.className = "small mt-1 text-danger fw-medium";
    msgEl.textContent = `✕ Noto‘g‘ri promo kod: "${rawCode}". Sinab ko‘ring: TEZ10.`;
  }
}

/* ==================== BUYURTMANI RASMIYLASHTIRISH VA TASDIQLASH ==================== */
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("Avval savatchaga mahsulot qo‘shing!");
    return;
  }

  // Savatcha offcanvasini yopish
  const offcanvasEl = document.getElementById("cartOffcanvas");
  const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl);
  if (offcanvasInstance) {
    offcanvasInstance.hide();
  }

  // Xulosa ma'lumotlarini to'ldirish
  const itemsListEl = document.getElementById("checkoutItemsList");
  const { subtotal, discountAmount, deliveryFee, total } = calculateTotals();

  if (itemsListEl) {
    itemsListEl.innerHTML = state.cart
      .map(
        (item) => `
        <div class="d-flex justify-content-between align-items-center">
          <span>${item.name} <strong>× ${item.qty}</strong></span>
          <span class="fw-semibold">${formatPrice(item.price * item.qty)}</span>
        </div>
      `
      )
      .join("");
  }

  const subEl = document.getElementById("checkoutSubtotal");
  const discRow = document.getElementById("checkoutDiscountRow");
  const discEl = document.getElementById("checkoutDiscount");
  const delEl = document.getElementById("checkoutDelivery");
  const totEl = document.getElementById("checkoutTotal");

  if (subEl) subEl.textContent = formatPrice(subtotal);
  if (discRow) {
    discRow.style.display = discountAmount > 0 ? "flex" : "none";
  }
  if (discEl) discEl.textContent = `-${formatPrice(discountAmount)}`;
  if (delEl) {
    delEl.innerHTML = deliveryFee === 0 ? `<span class="text-success">Bepul</span>` : formatPrice(deliveryFee);
  }
  if (totEl) totEl.textContent = formatPrice(total);

  // Validatsiya holatini tozalash
  clearCheckoutValidation();

  const modalEl = document.getElementById("checkoutModal");
  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
  modalInstance.show();
}

function clearCheckoutValidation() {
  ["customerName", "customerPhone", "customerAddress"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("is-invalid");
  });
}

function validateCheckoutForm() {
  const nameInput = document.getElementById("customerName");
  const phoneInput = document.getElementById("customerPhone");
  const addressInput = document.getElementById("customerAddress");

  let isValid = true;
  clearCheckoutValidation();

  const nameVal = nameInput.value.trim();
  if (nameVal.length < 3) {
    nameInput.classList.add("is-invalid");
    isValid = false;
  }

  // O'zbekiston yoki xalqaro formatdagi raqamni tekshirish (kamida 9 ta raqam)
  const digitsOnly = phoneInput.value.replace(/\D/g, "");
  if (digitsOnly.length < 9) {
    phoneInput.classList.add("is-invalid");
    isValid = false;
  }

  const addressVal = addressInput.value.trim();
  if (addressVal.length < 6) {
    addressInput.classList.add("is-invalid");
    isValid = false;
  }

  return isValid;
}

function handleOrderSubmit(e) {
  e.preventDefault();

  if (state.cart.length === 0) {
    showToast("Savatcha bo‘sh!");
    return;
  }

  if (!validateCheckoutForm()) {
    return;
  }

  const customerName = document.getElementById("customerName").value.trim();
  const customerPhone = document.getElementById("customerPhone").value.trim();
  const customerAddress = document.getElementById("customerAddress").value.trim();
  const paymentMethod =
    document.querySelector('input[name="paymentMethod"]:checked')?.value || "Naqd pul";

  const totals = calculateTotals();
  const orderId = `TF-${Math.floor(100000 + Math.random() * 900000)}`;
  const orderItems = state.cart.map((item) => ({ ...item }));
  const promoCodeUsed = state.appliedPromo ? state.appliedPromo.code : null;

  const orderSummary = {
    orderId,
    customerName,
    customerPhone,
    customerAddress,
    paymentMethod,
    promoCodeUsed,
    items: orderItems,
    ...totals
  };

  state.lastOrder = orderSummary;

  // Savatcha va promo kodni tozalash
  state.cart = [];
  state.appliedPromo = null;
  const promoInput = document.getElementById("promoCodeInput");
  const promoMsg = document.getElementById("promoMessage");
  if (promoInput) promoInput.value = "";
  if (promoMsg) promoMsg.textContent = "";

  saveStateToStorage();
  renderCart();

  // Checkout modalni yopish va tasdiq modalini ko'rsatish
  const checkoutModalEl = document.getElementById("checkoutModal");
  const checkoutModal = bootstrap.Modal.getInstance(checkoutModalEl);
  if (checkoutModal) checkoutModal.hide();

  renderOrderReceipt(orderSummary);

  const successModalEl = document.getElementById("orderSuccessModal");
  const successModal = bootstrap.Modal.getOrCreateInstance(successModalEl);
  successModal.show();

  document.getElementById("checkoutForm").reset();
}

function renderOrderReceipt(order) {
  const receiptBox = document.getElementById("orderReceiptDetails");
  if (!receiptBox) return;

  const itemsHtml = order.items
    .map(
      (item) =>
        `<li>${item.name} × ${item.qty} — <strong>${formatPrice(item.price * item.qty)}</strong></li>`
    )
    .join("");

  receiptBox.innerHTML = `
    <div class="mb-2"><strong>Buyurtma raqami:</strong> <span class="text-orange">${order.orderId}</span></div>
    <div class="mb-1"><strong>Mijoz:</strong> ${order.customerName}</div>
    <div class="mb-1"><strong>Telefon:</strong> ${order.customerPhone}</div>
    <div class="mb-1"><strong>Manzil:</strong> ${order.customerAddress}</div>
    <div class="mb-2"><strong>To‘lov usuli:</strong> ${order.paymentMethod}</div>
    <div class="mb-1"><strong>Mahsulotlar:</strong></div>
    <ul class="ps-3 mb-2">${itemsHtml}</ul>
    ${
      order.discountAmount > 0
        ? `<div class="text-success mb-1"><strong>Chegirma (${order.promoCodeUsed}):</strong> -${formatPrice(order.discountAmount)}</div>`
        : ""
    }
    <div class="mb-1"><strong>Yetkazib berish:</strong> ${order.deliveryFee === 0 ? "Bepul" : formatPrice(order.deliveryFee)}</div>
    <div class="pt-2 border-top fs-6"><strong>Jami to‘lov:</strong> <span class="text-orange fw-bold">${formatPrice(order.total)}</span></div>
  `;
}

/* ==================== HODISALARNI ULASH (EVENT LISTENERS) ==================== */
function bindEvents() {
  // "Sotib olish" tugmalariga delegatsiya
  document.addEventListener("click", (e) => {
    const buyBtn = e.target.closest("[data-add-to-cart]");
    if (buyBtn) {
      addToCart(buyBtn.dataset.addToCart);
      return;
    }

    const qtyBtn = e.target.closest("[data-qty-change]");
    if (qtyBtn) {
      const id = qtyBtn.dataset.qtyChange;
      const delta = Number(qtyBtn.dataset.delta);
      changeCartQty(id, delta);
      return;
    }

    const removeBtn = e.target.closest("[data-remove-item]");
    if (removeBtn) {
      removeFromCart(removeBtn.dataset.removeItem);
      return;
    }

    const quickCatLink = e.target.closest("[data-quick-cat]");
    if (quickCatLink) {
      setActiveCategory(quickCatLink.dataset.quickCat);
    }
  });

  // Kategoriya tugmalari
  document.querySelectorAll("#categoryTabs .tf-cat-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setActiveCategory(btn.dataset.category);
    });
  });

  // Promo kod tugmasi va Enter tugmasi
  const applyPromoBtn = document.getElementById("applyPromoBtn");
  const promoInput = document.getElementById("promoCodeInput");
  if (applyPromoBtn) {
    applyPromoBtn.addEventListener("click", handleApplyPromo);
  }
  if (promoInput) {
    promoInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleApplyPromo();
      }
    });
  }

  // Buyurtmani rasmiylashtirish oynasini ochish
  const openCheckoutBtn = document.getElementById("openCheckoutBtn");
  if (openCheckoutBtn) {
    openCheckoutBtn.addEventListener("click", openCheckoutModal);
  }

  // Buyurtmani tasdiqlash formasi
  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", handleOrderSubmit);
  }
}

/* ==================== DASTURNI ISHGA TUSHIRISH ==================== */
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const heroImg = document.getElementById("heroBannerImg");
  if (heroImg && !heroImg.src) {
    heroImg.src = createProductImage(
      "TEZFOOD COMBO",
      "Burger • Fri • Ichimlik • 30 daq yetkazish",
      "#FF5A00",
      "🍔"
    );
  }

  if (state.appliedPromo) {
    const promoInput = document.getElementById("promoCodeInput");
    const promoMsg = document.getElementById("promoMessage");
    if (promoInput) promoInput.value = state.appliedPromo.code;
    if (promoMsg) {
      promoMsg.className = "small mt-1 text-success fw-semibold";
      promoMsg.textContent = `✓ "${state.appliedPromo.code}" promo kodi faol (${Math.round(state.appliedPromo.rate * 100)}% chegirma).`;
    }
  }

  loadStateFromStorage();
  renderPopularProducts();
  renderMenuProducts();
  renderCart();
  bindEvents();
});