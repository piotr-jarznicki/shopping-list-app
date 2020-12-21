import { createProduct } from "./createProduct";
import { productsList } from "./htmlHandler";
export const renderProducts = () => {
  const htmlProducts = createProduct();
  htmlProducts.forEach((product) => {
    productsList.appendChild(product);
  });
};

window.addEventListener("DOMContentLoaded", renderProducts);
