import { searchInput } from "./htmlHandler";
import { getDataFromLocalStorage } from "./getDataFromLocalStorage";
import { renderProducts } from "./renderProducts";
export const searchProduct = (e) => {
  const products = getDataFromLocalStorage();
  renderProducts(currentActiveCategory, e.target.value.toLowerCase());
};

searchInput.addEventListener("keyup", searchProduct);
