import { form, submitFormButton } from "./htmlHandler";
export const getUserInput = () => {
  const productName = form[0].value;
  const productCategory = form[1].value;
  const productAmount = form[2].value;
  const productAmountTypeKilos = form[3];
  const productAmountTypePieces = form[4];

  const amountType = productAmountTypeKilos.checked
    ? productAmountTypeKilos.value
    : productAmountTypePieces.value;

  const product = {
    id: localStorage.length + 1,
    productName,
    productCategory,
    productAmount,
    amountType,
  };

  return product;
};
