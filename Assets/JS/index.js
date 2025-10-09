import { saveData, loadData } from "./modules/localStorage.js";
import { getProducts, getCategories, getProductById, searchProducts } from "./modules/api.js";
import { renderProductCard, renderProductDetails, renderCart, renderCategories, renderLoading, renderProductsList } from "./modules/view.js";
import { addToCart, getCart, removeFromCart, clearCart } from "./modules/cart.js";

async function initApp() {
  const app = document.querySelector("#app");
  const searchInput = document.querySelector("#search-input");
  const cartIcon = document.querySelector("header .cart");

  renderLoading();

  const products = await getProducts();
  const categories = await getCategories();

  renderProductsList(products);

  // Hvis man klikker på logoet
  const logo = document.querySelector("#logo");
  if (logo) {
    logo.addEventListener("click", () => {
      // Fjerner hvad der er i søgefeltet
      if (searchInput) searchInput.value = "";
      renderProductsList(products);
    });
  }

  // Klik på noget inde i #app
  app.addEventListener("click", async (e) => {
    // Hvis man klikker på køb-knap
    if (e.target.classList.contains("buy-btn")) {
      const id = e.target.dataset.id;
      const product = await getProductById(id);
      if (product) {
        addToCart(product);
        console.log("Produkt " + product.id + " lagt i kurven");
      }
      return;
    }

    // Hvis man klikker på fjern-knap
    if (e.target.classList.contains("remove-btn")) {
      const id = e.target.dataset.id;
      removeFromCart(Number(id));
      renderCart(getCart());
      return;
    }

    // Hvis man klikker på checkout-knap
    if (e.target.id === "checkout-btn") {
      alert("Checkout ikke implementeret endnu!");
      clearCart();
      renderCart(getCart());
      return;
    }

    // Hvis man klikker på et produktkort (men ikke køb-knappen)
    const productCard = e.target.closest(".product-card");
    if (productCard && !e.target.classList.contains("buy-btn")) {
      const id = productCard.dataset.id;
      const product = await getProductById(id);
      if (product) {
        renderProductDetails(product);
      }
      return;
    }
  });

  // Klik på kurvikon viser kurven
  if (cartIcon) {
    cartIcon.addEventListener("click", () => {
      const cartItems = getCart();
      renderCart(cartItems);
    });
  }

  // Søgefelt
  if (searchInput) {
    searchInput.addEventListener("input", async (e) => {
      const query = e.target.value.trim();
      if (query.length === 0) {
        renderProductsList(products);
        return;
      }

      renderLoading();

      const results = await searchProducts(encodeURIComponent(query));
      renderProductsList(results);
    });
  }

  console.log("Kategorier hentet:", categories);
}

initApp();
