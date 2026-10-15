// ==========================================================================
// 🚀 LOUNIGEEK — ENGINE DE LOJA COMPLETA (INTERATIVIDADE, GSAP & CRO)
// Padrões: Cult UI, Skiper UI, OriginKit, Spell Motion
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const DATA = window.LOUNIGEEK_DATA || { categories: [], products: [], reviews: [], comparisons: {}, faqs: [] };

  // Estado Central da Aplicação
  const state = {
    currentCategory: 'todos',
    currentSort: 'popular',
    cart: JSON.parse(localStorage.getItem('lounigeek_cart')) || [],
    favorites: JSON.parse(localStorage.getItem('lounigeek_favs')) || [],
    searchQuery: ''
  };

  // Inicialização de Componentes
  initHeaderScroll();
  renderCategories();
  renderProducts();
  renderComparisonMatrix();
  renderFAQAccordion();
  renderReviews();
  initCart();
  initSearch();
  initMobileDock();
  initNewsletter();
  initGSAPAnimations();

  // ==========================================================================
  // 1. HEADER & NAVEGAÇÃO
  // ==========================================================================
  function initHeaderScroll() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ==========================================================================
  // 2. RENDERIZAÇÃO DE CATEGORIAS (CULT UI TABS)
  // ==========================================================================
  function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;

    grid.innerHTML = DATA.categories.map(cat => `
      <div class="category-card ${cat.isSpecial ? 'special-card' : ''} ${state.currentCategory === cat.slug ? 'active' : ''}" 
           onclick="window.filterByCategory('${cat.slug}')"
           role="button"
           tabindex="0"
           aria-label="Categoria ${cat.name}">
        <div class="category-img-box">
          <img src="${cat.image}" alt="${cat.name}" class="category-img" loading="eager" />
        </div>
        <div class="category-name">${cat.name}</div>
        <div class="category-count">${cat.count} produtos</div>
      </div>
    `).join('');
  }

  // ==========================================================================
  // 3. RENDERIZAÇÃO DE PRODUTOS & FILTRAGEM DINÂMICA
  // ==========================================================================
  function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    let filtered = [...DATA.products];

    // Filtro por Categoria
    if (state.currentCategory !== 'todos') {
      filtered = filtered.filter(p => p.categoryId === state.currentCategory);
    }

    // Filtro por Busca
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.subtitle.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    // Ordenação
    if (state.currentSort === 'menor-preco') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (state.currentSort === 'maior-preco') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (state.currentSort === 'popular') {
      filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: rgba(244, 241, 250, 0.75);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1rem; opacity: 0.5;">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: #fff; margin-bottom: 0.5rem;">Nenhum produto encontrado</h3>
          <p style="font-size: 0.95rem;">Tente ajustar os filtros ou a palavra-chave pesquisada.</p>
          <button class="btn-pill btn-primary" onclick="window.filterByCategory('todos')" style="margin-top: 1.5rem;">
            Ver Todos os Colecionáveis
          </button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(prod => {
      const isFav = state.favorites.includes(prod.id);
      const formattedPrice = prod.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      const formattedOldPrice = prod.oldPrice ? prod.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '';
      const formattedPix = prod.pixPrice ? prod.pixPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '';

      return `
        <article class="product-card" data-id="${prod.id}">
          <span class="product-card-badge badge-${prod.badgeType || 'japan'}">${prod.badge}</span>
          
          <button class="product-fav-btn ${isFav ? 'active' : ''}" 
                  onclick="window.toggleFavorite('${prod.id}')" 
                  title="${isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}"
                  aria-label="Favoritar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
          </button>

          <div class="product-img-box" onclick="window.openQuickView('${prod.id}')" style="cursor: pointer;">
            <img src="${prod.image}" alt="${prod.name}" class="product-img" loading="eager" />
            <button class="product-quick-view-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              Espiar
            </button>
          </div>

          <span class="product-category">${prod.category}</span>
          <h3 class="product-name" onclick="window.openQuickView('${prod.id}')" style="cursor: pointer;">${prod.name}</h3>
          <p class="product-subtitle">${prod.subtitle}</p>

          <div class="product-rating">
            <span>★★★★★</span>
            <span>(${prod.reviewsCount})</span>
          </div>

          <div class="product-footer">
            <div class="product-price-box">
              <span class="product-price">${formattedPrice}</span>
              ${formattedOldPrice ? `<span class="product-old-price">${formattedOldPrice}</span>` : ''}
              ${formattedPix ? `<span class="product-pix-tag">ou ${formattedPix} no Pix</span>` : ''}
            </div>

            <button class="product-add-btn" 
                    onclick="window.addToCart('${prod.id}')" 
                    title="Adicionar ao carrinho"
                    aria-label="Comprar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="8" cy="21" r="1"/>
                <circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
              </svg>
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  // Funções Globais de Filtragem
  window.filterByCategory = function(categorySlug) {
    state.currentCategory = categorySlug;
    renderCategories();
    renderProducts();

    // Atualizar Chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
      if (chip.getAttribute('data-category') === categorySlug) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });

    const el = document.getElementById('destaques');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  window.sortProducts = function(sortType) {
    state.currentSort = sortType;
    renderProducts();
  };

  // ==========================================================================
  // 4. CARRINHO DESLIZANTE & CÁLCULO DE FRETE GRÁTIS
  // ==========================================================================
  function initCart() {
    updateCartUI();
  }

  window.openCart = function() {
    document.getElementById('cartDrawer')?.classList.add('active');
    document.getElementById('modalOverlay')?.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartItems();
  };

  window.closeCart = function() {
    document.getElementById('cartDrawer')?.classList.remove('active');
    document.getElementById('modalOverlay')?.classList.remove('active');
    document.body.style.overflow = '';
  };

  window.addToCart = function(productId) {
    const prod = DATA.products.find(p => p.id === productId);
    if (!prod) return;

    const existing = state.cart.find(i => i.id === productId);
    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({
        id: prod.id,
        name: prod.name,
        price: prod.price,
        image: prod.image,
        qty: 1
      });
    }

    saveCart();
    updateCartUI();
    showToast(`"${prod.name}" adicionado ao carrinho!`, 'cart');
  };

  window.updateCartQty = function(productId, delta) {
    const item = state.cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      state.cart = state.cart.filter(i => i.id !== productId);
    }

    saveCart();
    updateCartUI();
  };

  window.removeFromCart = function(productId) {
    state.cart = state.cart.filter(i => i.id !== productId);
    saveCart();
    updateCartUI();
    showToast('Item removido do carrinho.');
  };

  function saveCart() {
    localStorage.setItem('lounigeek_cart', JSON.stringify(state.cart));
  }

  function updateCartUI() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
    
    // Badges do Header e Dock
    document.querySelectorAll('.cart-badge').forEach(badge => {
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? 'flex' : 'none';
    });

    renderCartItems();
  }

  function renderCartItems() {
    const body = document.getElementById('cartBody');
    const subtotalEl = document.getElementById('cartSubtotal');
    const progressEl = document.getElementById('shippingProgress');
    const shippingTextEl = document.getElementById('shippingText');
    if (!body) return;

    if (state.cart.length === 0) {
      body.innerHTML = `
        <div class="cart-empty">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1.25rem; opacity: 0.4;">
            <circle cx="8" cy="21" r="1"/>
            <circle cx="19" cy="21" r="1"/>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
          </svg>
          <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--secondary); margin-bottom: 0.5rem;">Seu carrinho está vazio</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.75rem;">Explore nossos action figures e mangás para começar sua coleção.</p>
          <button class="btn-pill btn-primary" onclick="window.closeCart(); window.filterByCategory('todos');">
            Explorar Colecionáveis
          </button>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = 'R$ 0,00';
      if (progressEl) progressEl.style.width = '0%';
      if (shippingTextEl) shippingTextEl.innerHTML = 'Faltam <strong>R$ 299,00</strong> para <strong>Frete Grátis</strong>';
      return;
    }

    let subtotal = 0;
    body.innerHTML = state.cart.map(item => {
      subtotal += item.price * item.qty;
      const totalItem = (item.price * item.qty).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${totalItem}</div>
            <div class="cart-qty-ctrl">
              <button class="qty-btn" onclick="window.updateCartQty('${item.id}', -1)" aria-label="Diminuir">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="window.updateCartQty('${item.id}', 1)" aria-label="Aumentar">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="window.removeFromCart('${item.id}')" title="Remover item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
            </svg>
          </button>
        </div>
      `;
    }).join('');

    if (subtotalEl) {
      subtotalEl.textContent = subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    // Barra de Frete Grátis (Meta R$ 299)
    const goal = 299;
    if (progressEl && shippingTextEl) {
      if (subtotal >= goal) {
        progressEl.style.width = '100%';
        shippingTextEl.innerHTML = '🎉 Parabéns! Você ganhou <strong>Frete Grátis para todo o Brasil!</strong>';
      } else {
        const remaining = (goal - subtotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const pct = Math.min(100, (subtotal / goal) * 100);
        progressEl.style.width = `${pct}%`;
        shippingTextEl.innerHTML = `Faltam <strong>${remaining}</strong> para liberar o <strong>Frete Grátis</strong>`;
      }
    }
  }

  window.checkoutOrder = function() {
    if (state.cart.length === 0) {
      showToast('Adicione produtos antes de finalizar!', 'warn');
      return;
    }
    showToast('Pedido preparado com segurança! Redirecionando para pagamento protegido...', 'success');
  };

  // ==========================================================================
  // 5. QUICK VIEW / MODAL DE DETALHES DE PRODUTO
  // ==========================================================================
  window.openQuickView = function(productId) {
    const prod = DATA.products.find(p => p.id === productId);
    if (!prod) return;

    const modal = document.getElementById('quickViewModal');
    const content = document.getElementById('quickViewContent');
    const overlay = document.getElementById('modalOverlay');
    if (!modal || !content) return;

    const specsHtml = prod.specs ? Object.entries(prod.specs).map(([key, val]) => `
      <div style="display: flex; justify-content: space-between; font-size: 0.85rem; padding: 0.4rem 0; border-bottom: 1px dashed rgba(35, 33, 95, 0.1);">
        <span style="font-weight: 700; color: var(--secondary); text-transform: capitalize;">${key}:</span>
        <span style="color: var(--text-muted);">${val}</span>
      </div>
    `).join('') : '';

    content.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1.25fr; gap: 2.5rem; align-items: start;">
        <div style="background: var(--bg-lavender); border-radius: var(--radius-lg); padding: 2.5rem; display: flex; align-items: center; justify-content: center; position: relative;">
          <span class="product-card-badge badge-${prod.badgeType || 'japan'}" style="top: 1rem; left: 1rem;">${prod.badge}</span>
          <img src="${prod.image}" alt="${prod.name}" style="max-height: 320px; object-fit: contain; filter: drop-shadow(0 15px 25px rgba(35, 33, 95, 0.15));" />
        </div>

        <div>
          <span style="font-size: 0.8rem; font-weight: 800; color: var(--accent); text-transform: uppercase; letter-spacing: 1px;">${prod.category}</span>
          <h2 style="font-size: 1.85rem; font-weight: 900; color: var(--secondary); margin: 0.35rem 0 0.5rem; line-height: 1.2;">${prod.name}</h2>
          <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1rem;">${prod.subtitle}</p>

          <div style="margin-bottom: 1.25rem;">
            <div style="font-size: 1.9rem; font-weight: 900; color: var(--secondary); line-height: 1;">
              ${prod.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </div>
            <div style="font-size: 0.85rem; color: #10B981; font-weight: 700; margin-top: 0.35rem;">
              Ou ${prod.pixPrice ? prod.pixPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : ''} à vista no Pix com 5% de desconto
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.2rem;">
              ${prod.installment || 'Em até 10x sem juros no cartão'}
            </div>
          </div>

          <p style="font-size: 0.92rem; color: var(--text-dark); line-height: 1.6; margin-bottom: 1.5rem;">
            ${prod.description}
          </p>

          ${specsHtml ? `
            <div style="margin-bottom: 1.75rem; background: var(--bg-light); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
              <h4 style="font-size: 0.85rem; font-weight: 800; color: var(--secondary); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px;">Especificações da Peça</h4>
              ${specsHtml}
            </div>
          ` : ''}

          <div style="display: flex; gap: 1rem;">
            <button class="shimmer-btn btn-primary" onclick="window.addToCart('${prod.id}'); window.closeQuickView();" style="flex: 1; padding: 1rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="8" cy="21" r="1"/>
                <circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
              </svg>
              Adicionar ao Carrinho
            </button>
            <button class="btn-outline" onclick="window.toggleFavorite('${prod.id}')" title="Favoritar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeQuickView = function() {
    document.getElementById('quickViewModal')?.classList.remove('active');
    document.getElementById('modalOverlay')?.classList.remove('active');
    document.body.style.overflow = '';
  };

  // ==========================================================================
  // 6. FAVORITOS / WISHLIST
  // ==========================================================================
  window.toggleFavorite = function(productId) {
    const idx = state.favorites.indexOf(productId);
    if (idx > -1) {
      state.favorites.splice(idx, 1);
      showToast('Item removido dos favoritos.');
    } else {
      state.favorites.push(productId);
      showToast('Item salvo nos seus favoritos!', 'fav');
    }
    localStorage.setItem('lounigeek_favs', JSON.stringify(state.favorites));
    renderProducts();
  };

  // ==========================================================================
  // 7. ORIGINKIT — MATRIZ COMPARATIVA ("NÓS VS OUTROS")
  // ==========================================================================
  function renderComparisonMatrix() {
    const container = document.getElementById('comparisonContainer');
    if (!container || !DATA.comparisons) return;

    const { items } = DATA.comparisons;
    container.innerHTML = `
      <div class="comparison-grid">
        <!-- Alternativas Comuns do Mercado -->
        <div class="comp-col-bad">
          <h3>
            <span>❌</span>
            Lojas Genéricas & Marketplaces
          </h3>
          <div class="comp-list">
            ${items.map(it => `
              <div class="comp-item comp-item-bad">
                <span class="icon">✕</span>
                <div>
                  <strong>${it.feature}:</strong> ${it.others}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Padrão Lounigeek -->
        <div class="comp-col-good">
          <div class="comp-good-badge">Padrão Lounigeek</div>
          <h3>
            <span>✨</span>
            Curadoria Oficial Lounigeek
          </h3>
          <div class="comp-list">
            ${items.map(it => `
              <div class="comp-item comp-item-good">
                <span class="icon">✓</span>
                <div>
                  <strong>${it.feature}:</strong> ${it.lounigeek}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // 8. ORIGINKIT — FAQ INTERATIVO EM ACORDEÃO
  // ==========================================================================
  function renderFAQAccordion() {
    const container = document.getElementById('faqAccordion');
    if (!container || !DATA.faqs) return;

    container.innerHTML = DATA.faqs.map((faq, index) => `
      <div class="faq-item ${index === 0 ? 'open' : ''}" id="${faq.id}">
        <button class="faq-trigger" onclick="window.toggleFAQ('${faq.id}')" aria-expanded="${index === 0}">
          <span>${faq.question}</span>
          <span class="faq-icon">${index === 0 ? '✕' : '+'}</span>
        </button>
        <div class="faq-body">
          <p>${faq.answer}</p>
        </div>
      </div>
    `).join('');
  }

  window.toggleFAQ = function(id) {
    const item = document.getElementById(id);
    if (!item) return;

    const isOpen = item.classList.contains('open');

    // Fechar todos
    document.querySelectorAll('.faq-item').forEach(el => {
      el.classList.remove('open');
      const icon = el.querySelector('.faq-icon');
      if (icon) icon.textContent = '+';
      el.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      const icon = item.querySelector('.faq-icon');
      if (icon) icon.textContent = '✕';
      item.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'true');
    }
  };

  // ==========================================================================
  // 9. REVIEWS / DEPOIMENTOS
  // ==========================================================================
  function renderReviews() {
    const grid = document.getElementById('reviewsGrid');
    if (!grid || !DATA.reviews) return;

    grid.innerHTML = DATA.reviews.map(rev => `
      <div class="review-card">
        <div class="review-header">
          <img src="${rev.avatar}" alt="${rev.name}" class="review-avatar" />
          <div class="review-user-info">
            <span class="review-author">${rev.name}</span>
            <span class="review-city">${rev.city} • ${rev.date}</span>
            <div class="review-stars">${'★'.repeat(rev.stars)}</div>
          </div>
        </div>
        <p class="review-quote">"${rev.text}"</p>
        <div class="review-product-tag">Item Comprado: ${rev.productName}</div>
      </div>
    `).join('');
  }

  // ==========================================================================
  // 10. MODAL DE BUSCA EM TEMPO REAL
  // ==========================================================================
  function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderProducts();
    });
  }

  window.openSearchModal = function() {
    document.getElementById('searchModal')?.classList.add('active');
    document.getElementById('modalOverlay')?.classList.add('active');
    document.getElementById('searchInput')?.focus();
    document.body.style.overflow = 'hidden';
  };

  window.closeSearchModal = function() {
    document.getElementById('searchModal')?.classList.remove('active');
    document.getElementById('modalOverlay')?.classList.remove('active');
    document.body.style.overflow = '';
  };

  // ==========================================================================
  // 11. MOBILE CONVERSION DOCK & MENU
  // ==========================================================================
  function initMobileDock() {
    const overlay = document.getElementById('modalOverlay');
    overlay?.addEventListener('click', () => {
      window.closeCart();
      window.closeQuickView();
      window.closeSearchModal();
      window.closeMobileMenu();
    });
  }

  window.openMobileMenu = function() {
    document.getElementById('mobileMenuDrawer')?.classList.add('active');
    document.getElementById('modalOverlay')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeMobileMenu = function() {
    document.getElementById('mobileMenuDrawer')?.classList.remove('active');
    document.getElementById('modalOverlay')?.classList.remove('active');
    document.body.style.overflow = '';
  };

  // ==========================================================================
  // 12. NEWSLETTER / CLUBE VIP
  // ==========================================================================
  function initNewsletter() {
    const form = document.getElementById('clubNewsletterForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast('🎉 Bem-vindo ao Clube Lounigeek! Cupom GEEK10 ativado com sucesso!', 'success');
        input.value = '';
      }
    });
  }

  // ==========================================================================
  // 13. TOAST NOTIFICATIONS
  // ==========================================================================
  function showToast(message, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    
    let iconSvg = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    `;

    if (type === 'cart' || type === 'success') {
      iconSvg = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
    }

    toast.innerHTML = `${iconSvg} <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
  window.showToast = showToast;

  // ==========================================================================
  // 14. GSAP & SCROLLTRIGGER ANIMATIONS
  // ==========================================================================
  function initGSAPAnimations() {
    if (typeof gsap === 'undefined') return;

    // Fade-in reveal no Hero
    gsap.from('.hero-content > *', {
      opacity: 0,
      y: 25,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    });

    gsap.from('.hero-glass-card', {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      delay: 0.3,
      ease: 'power2.out'
    });

    // Se ScrollTrigger estiver disponível
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray('.editorial-card, .duo-card, .comp-col-good, .comp-col-bad').forEach(el => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%'
          },
          opacity: 0,
          y: 35,
          duration: 0.8,
          ease: 'power2.out'
        });
      });
    }
  }
});
