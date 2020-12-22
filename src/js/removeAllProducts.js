import { removeProductsButton } from "./htmlHandler";
import { renderProducts } from "./renderProducts";
export const removeAllProducts = () => {
  localStorage.clear();
  renderProducts();
};

removeProductsButton.addEventListener("click", removeAllProducts);
