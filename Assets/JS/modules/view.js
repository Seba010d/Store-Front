function renderProductCard(product) {
  return `
  <div class="product-card" data-id="${product.id}">
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.price} kr</p>
      <button class="buy-btn" data-id="${product.id}">Køb</button>
  </div>
  `;
}

function renderProductDetails(product) {
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
