import { getProductsInfo } from "./getProductsInfo";
import { removeProduct } from "./removeProduct";
import { setProductsAmountInfo } from "./setProductsAmountInfo";
import { createHtmlElement } from "./createHtmlElement";
export const createProducts = () => {
  const products = [];
  const htmlProducts = [];
  for (let i in localStorage) {
    if (localStorage.hasOwnProperty(i) && localStorage[i] !== "INFO") {
      products.push(JSON.parse(localStorage[i]));
    }
  }

  products.forEach((product) => {
    //  to use: element, imgSrc, id cssClass, children, content, listener;

    const amountContent =
      product.amountType === "Kilos"
        ? product.amount + " " + "kg"
        : product.amount + " " + "pc";

    const productCategorySpan = createHtmlElement(
      "span",
      null,
      null,
      "category-span",
      null,
      product.category,
      null
    );

    const productAmountSpan = createHtmlElement(
      "span",
      null,
      null,
      "amount-span",
      null,
      amountContent,
      null
    );

    const buttonIcon = createHtmlElement(
      "img",
      "./img/icons/trash-icon.svg",
      null,
      "button-icon",
      null,
      null,
      null
    );

    const removeProductButton = createHtmlElement(
      "button",
      null,
      null,
      "remove-product-button",
      buttonIcon,
      null,
      removeProduct
    );

    const htmlProduct = createHtmlElement(
      "li",
      null,
      product.id,
      "product",
      [productAmountSpan, productCategorySpan, removeProductButton],
      product.name,
      null
    );

    htmlProducts.push(htmlProduct);
  });
  const productsAmountInfo = getProductsInfo(products);
  setProductsAmountInfo(productsAmountInfo);
  return htmlProducts;
};
