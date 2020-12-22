import { createProducts } from "./createProducts";
import { productsList, categorySpanText } from "./htmlHandler";
export const renderProducts = (activeCategory, userInput) => {
  const htmlProducts = createProducts();
  productsList.innerHTML = "";

  if (userInput) {
    if (activeCategory === "all") {
      categorySpanText.textContent = activeCategory + " " + "product";
      htmlProducts.forEach((product) => {
        if (product.firstChild.textContent) {
          product.firstChild.textContent.toLowerCase().includes(userInput)
            ? productsList.appendChild(product)
            : false;
        }
      });
    } else {
      categorySpanText.textContent = activeCategory + " " + "product";
      htmlProducts.forEach((product) => {
        product.innerHTML.includes(activeCategory) &&
        product.firstChild.textContent.toLowerCase().includes(userInput)
          ? productsList.appendChild(product)
          : false;
      });
    }
  } else {
    if (activeCategory === "all") {
      categorySpanText.textContent = activeCategory + " " + "product";
      htmlProducts.forEach((product) => {
        productsList.appendChild(product);
      });
    } else {
      categorySpanText.textContent = activeCategory + " " + "product";
      htmlProducts.forEach((product) => {
        product.innerHTML.includes(activeCategory)
          ? productsList.appendChild(product)
          : false;
      });
    }
  }
};

window.addEventListener("DOMContentLoaded", renderProducts("all"));
