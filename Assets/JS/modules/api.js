// Hent alle produkter
export async function getProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) throw new Error("Noget gik galt med hentningen");
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.error("Fejl:", error);
    return [];
  }
}

// Hent alle kategorier
export async function getCategories() {
  try {
    const response = await fetch("https://dummyjson.com/products/categories");
    if (!response.ok) throw new Error("Noget gik galt med hentningen");
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error("Fejl:", error);
    return [];
  }
}

// Hent ét produkt ud fra ID
export async function getProductById(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) throw new Error("Produkt ikke fundet");
    const product = await response.json();
    return product;
  } catch (error) {
    console.error("Fejl:", error);
    return null;
  }
}

// Søg efter produkter
export async function searchProducts(query) {
  try {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    if (!response.ok) throw new Error("Noget gik galt med søgningen");
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.error("Fejl:", error);
    return [];
  }
}
