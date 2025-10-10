export function renderProductCard(product) {
  return `
  <div class="product-card" data-id="${product.id}">
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.price} kr</p>
      <button class="buy-btn" data-id="${product.id}">Køb</button>
  </div>
  `;
}

export function renderProductDetails(product) {
  const container = document.querySelector("#app");
  container.innerHTML = `
    <section class="product-details">
      <img src="${product.thumbnail}" alt="${product.title}">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p>${product.price} kr</p>
      <button class="buy-btn" data-id="${product.id}">Køb</button>
    </section>
  `;
}

export function renderCart(cartItems) {
  const container = document.querySelector("#app");

  if (cartItems.length === 0) {
    container.innerHTML = `
      <section class="cart">
        <h2>Din kurv</h2>
        <p>Kurven er tom</p>
      </section>
    `;
    return;
  }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  container.innerHTML = `
    <section class="cart">
      <h2>Din kurv</h2>
      <div class="cart-items">
        ${cartItems
          .map(
            (item) => `
          <div class="cart-item" data-id="${item.id}">
            <img src="${item.thumbnail}" alt="${item.title}">
            <div>
              <h3>${item.title}</h3>
              <p>${item.price} kr</p>
            </div>
            <button class="remove-btn" data-id="${item.id}">Fjern</button>
          </div>
        `
          )
          .join("")}
      </div>
      <div class="cart-total">
        <h3>Total: ${total.toFixed(2)} kr</h3>
        <button id="checkout-btn">Gå til betaling</button>
      </div>
    </section>
  `;
}

export function updateCartBadge(count) {
  const badge = document.querySelector(".cart-badge");
  if (!badge) return;
  const n = Number(count) || 0;
  if (n <= 0) {
    badge.textContent = "0";
    badge.style.display = "none";
  } else {
    badge.textContent = String(n);
    badge.style.display = "inline-flex";
  }
}

export function renderCategories(categories) {
  const container = document.querySelector("#app");
  container.innerHTML = `
    <section class="categories">
      <h2>Kategorier</h2>
      <div class="category-list">
        ${categories
          .map((cat) => {
            const name = String(cat);
            return `
          <button class="category-btn" data-category="${cat}">
            ${name.slice(0, 1).toUpperCase() + name.slice(1)}
          </button>
        `;
          })
          .join("")}
      </div>
    </section>
  `;
}

export function renderLoading() {
  const container = document.querySelector("#app");
  container.innerHTML = `
    <section class="loading">
      <p>Indlæser produkter...</p>
    </section>
  `;
}

export function renderProductsList(products) {
  const container = document.querySelector("#app");

  if (!products || products.length === 0) {
    container.innerHTML = `
			<section class="product-list">
				<p>Ingen produkter fundet.</p>
			</section>
		`;
    return;
  }

  container.innerHTML = `
		<section class="product-list">
			${products.map((p) => renderProductCard(p)).join("")}
		</section>
	`;
}
