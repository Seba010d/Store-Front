import { saveData, loadData } from "./localStorage.js";

const CART_KEY = "store_cart";

function persist(cart) {
  saveData({ [CART_KEY]: cart });
}

function read() {
  const data = loadData();
  if (!data) return [];
  return data[CART_KEY] || [];
}

export function addToCart(product) {
  const cart = read();
  // store a simplified item
  const item = {
    id: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
  };
  cart.push(item);
  persist(cart);
  return cart;
}

export function getCart() {
  return read();
}

export function removeFromCart(id) {
  const cart = read().filter((i) => Number(i.id) !== Number(id));
  persist(cart);
  return cart;
}

export function clearCart() {
  persist([]);
  return [];
}
