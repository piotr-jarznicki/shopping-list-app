import { getProductsInfo } from "./getProductsInfo";
import { removeProduct } from "./removeProduct";
import { setProductsAmountInfo } from "./setProductsAmountInfo";
export const createProducts = () => {
  const products = [];
  const htmlProducts = [];
  for (let i in localStorage) {
    if (localStorage.hasOwnProperty(i) && localStorage[i] !== "INFO") {
      products.push(JSON.parse(localStorage[i]));
    }
  }

  products.forEach((product) => {
    const htmlProduct = document.createElement("li");
    const amountSpan = document.createElement("div");
    const categorySpan = document.createElement("div");
    const removeProductButton = document.createElement("button");
    const buttonIcon = document.createElement("img");

    buttonIcon.src = "./img/icons/trash-icon.svg";
    buttonIcon.classList.add("button-icon");
    categorySpan.classList.add("category-span");
    amountSpan.classList.add("amount-span");
    htmlProduct.classList.add("product");
    removeProductButton.classList.add("remove-product-button");
    removeProductButton.addEventListener("click", removeProduct);
    product.amountType === "Kilos"
      ? (amountSpan.textContent = product.amount + " " + "kg")
      : (amountSpan.textContent = product.amount + " " + "pc");
    htmlProduct.textContent = product.name;
    htmlProduct.id = product.id;
    categorySpan.textContent = product.category;
    htmlProduct.appendChild(amountSpan);
    htmlProduct.appendChild(categorySpan);
    removeProductButton.appendChild(buttonIcon);
    htmlProduct.appendChild(removeProductButton);
    htmlProducts.push(htmlProduct);
  });
  const productsAmountInfo = getProductsInfo(products);
  setProductsAmountInfo(productsAmountInfo);
  return htmlProducts;
};
