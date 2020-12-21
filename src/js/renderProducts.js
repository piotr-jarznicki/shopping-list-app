import { createProduct } from "./createProduct";
import { productsList, categorySpanText } from "./htmlHandler";
export const renderProducts = (activeCategory) => {
  const htmlProducts = createProduct();
  productsList.innerHTML = "";

  if (!activeCategory[0]) {
    htmlProducts.forEach((product) => productsList.appendChild(product));
  } else if (activeCategory[0].dataset.category === "all") {
    categorySpanText.textContent = "all products";
    htmlProducts.forEach((product) => productsList.appendChild(product));
  } else {
    categorySpanText.textContent =
      activeCategory[0].dataset.category + " " + "product";
    htmlProducts.forEach((product) => {
      product.innerHTML.includes(activeCategory[0].dataset.category)
        ? productsList.appendChild(product)
        : false;
    });
  }
};

window.addEventListener("DOMContentLoaded", renderProducts);
