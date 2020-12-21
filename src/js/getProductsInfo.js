export const getProductsInfo = (products) => {
  // Need to establish the type of product amount
  let weightOfAllProducts = products.filter(
    (prod) => prod.amountType === "Kilos"
  );
  // Need to ensure that there is more than one product with particular amount type
  if (weightOfAllProducts.length > 1) {
    weightOfAllProducts = weightOfAllProducts
      .map((prod) => Number(prod.productAmount))
      .reduce((prevProd, nextProd) => prevProd + nextProd);
  } else {
    weightOfAllProducts = Number(weightOfAllProducts[0].productAmount);
  }
  // Need to establish the type of product amount
  let piecesAmountOfAllProducts = products.filter(
    (prod) => prod.amountType === "Pieces"
  );
  // Need to ensure that there is more than one product with particular amount type
  if (piecesAmountOfAllProducts.length > 1) {
    piecesAmountOfAllProducts = piecesAmountOfAllProducts
      .map((prod) => Number(prod.productAmount))
      .reduce((prevProd, nextProd) => prevProd + nextProd);
  } else {
    piecesAmountOfAllProducts = Number(
      piecesAmountOfAllProducts[0].productAmount
    );
  }
  return {
    weightOfAllProducts,
    piecesAmountOfAllProducts,
  };
};
