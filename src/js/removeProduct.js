import { renderProducts } from "./renderProducts";

export const removeProduct = (e) => {
  localStorage.removeItem(e.target.parentElement.id);
  renderProducts(currentActiveCategory);
};
