import { getProductsInfo } from "./getProductsInfo";
import { setProductsAmountInfo } from "./setProductsAmountInfo";
export const createProduct = () => {
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

    amountSpan.classList.add("amount-span");
    htmlProduct.classList.add("product");

    product.amountType === "Kilos"
      ? (amountSpan.textContent = product.productAmount + " " + "kg")
      : (amountSpan.textContent = product.productAmount + " " + "pc");
    htmlProduct.textContent = product.productName;
    htmlProduct.appendChild(amountSpan);
    htmlProducts.push(htmlProduct);
  });
  const productsAmountInfo = getProductsInfo(products);
  setProductsAmountInfo(productsAmountInfo);
  return htmlProducts;
};
