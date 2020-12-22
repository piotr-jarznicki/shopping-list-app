import { removeProductsButton } from "./htmlHandler";
import { renderProducts } from "./renderProducts";
export const removeAllProducts = () => {
  if (localStorage.length >= 2) {
    localStorage.clear();
    renderProducts(currentActiveCategory);
  }
};

removeProductsButton.addEventListener("click", removeAllProducts);
