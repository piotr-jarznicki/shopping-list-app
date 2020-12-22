import { amountOfProducts, weightOfProducts } from "./htmlHandler";

export const setProductsAmountInfo = ({
  weightOfAllProducts,
  piecesAmountOfAllProducts,
}) => {
  if (weightOfAllProducts > 0) {
    weightOfProducts.textContent = weightOfAllProducts + " " + "kg";
  } else {
    weightOfProducts.textContent = 0 + " " + "kg";
  }

  if (piecesAmountOfAllProducts > 0) {
    amountOfProducts.textContent = piecesAmountOfAllProducts + " " + "pcs";
  } else {
    amountOfProducts.textContent = 0 + " " + "pcs";
  }
};
