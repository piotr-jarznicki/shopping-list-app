import { amountOfProducts, weightOfProducts } from "./htmlHandler";

export const setProductsAmountInfo = (productsAmountInfo) => {
  const { weightOfAllProducts, piecesAmountOfAllProducts } = productsAmountInfo;
  amountOfProducts.textContent = piecesAmountOfAllProducts + " " + "pc";
  weightOfProducts.textContent = weightOfAllProducts + " " + "kg";
};
