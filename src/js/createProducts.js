import { getProductsInfo } from "./getProductsInfo";
import { removeProduct } from "./removeProduct";
import { setProductsAmountInfo } from "./setProductsAmountInfo";
import { createHtmlElement } from "./createHtmlElement";
import { getDataFromLocalStorage } from "./getDataFromLocalStorage";
export const createProducts = () => {
  const htmlProducts = [];
  const products = getDataFromLocalStorage();

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

    const productText = createHtmlElement(
      "span",
      null,
      null,
      null,
      null,
      product.name,
      null
    );
    const htmlProduct = createHtmlElement(
      "li",
      null,
      product.id,
      "product",
      [
        productText,
        productAmountSpan,
        productCategorySpan,
        removeProductButton,
      ],
      null,
      null
    );

    htmlProducts.push(htmlProduct);
  });
  const productsAmountInfo = getProductsInfo(products);
  setProductsAmountInfo(productsAmountInfo);
  return htmlProducts;
};
