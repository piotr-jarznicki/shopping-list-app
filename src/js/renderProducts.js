import { createProducts } from "./createProducts";
import { productsList, categorySpanText } from "./htmlHandler";
export const renderProducts = (activeCategory) => {
  const htmlProducts = createProducts();
  productsList.innerHTML = "";
  if (typeof activeCategory !== "string" || activeCategory === "all") {
    categorySpanText.textContent = "all products";
    htmlProducts.forEach((product) => productsList.appendChild(product));
  } else {
    categorySpanText.textContent = activeCategory + " " + "product";
    htmlProducts.forEach((product) => {
      product.innerHTML.includes(activeCategory)
        ? productsList.appendChild(product)
        : false;
    });
  }
};

window.addEventListener("DOMContentLoaded", renderProducts);
