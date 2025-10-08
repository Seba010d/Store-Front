import { saveData, loadData } from "./modules/localStorage.js";
import { getProducts, getCategories, getProductById, searchProducts } from "./modules/api.js";

(async () => {
  console.log("=== TESTER getProducts ===");
  console.log(await getProducts());

  console.log("=== TESTER getProductById(1) ===");
  console.log(await getProductById(1));

  console.log('=== TESTER searchProducts("phone") ===');
  console.log(await searchProducts("phone"));

  console.log("=== TESTER getCategories ===");
  console.log(await getCategories());
})();
