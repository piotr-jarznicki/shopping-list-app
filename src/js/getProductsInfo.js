export const getProductsInfo = (products) => {
  let weightOfAllProducts;
  let piecesAmountOfAllProducts;
  // Need to establish the type of product amount and
  if (products) {
    weightOfAllProducts = products.filter(
      (prod) => prod.amountType === "Kilos"
    );

    piecesAmountOfAllProducts = products.filter(
      (prod) => prod.amountType === "Pieces"
    );
  }

  // Need to ensure that there is more than one product with particular amount type
  if (weightOfAllProducts.length >= 2) {
    weightOfAllProducts = weightOfAllProducts
      .map((prod) => Number(prod.amount))
      .reduce((prevProd, nextProd) => prevProd + nextProd);
  } else {
    if (weightOfAllProducts.length === 1) {
      weightOfAllProducts = Number(weightOfAllProducts[0].amount);
    }
  }
  // Need to establish the type of product amount

  // Need to ensure that there is more than one product with particular amount type
  if (piecesAmountOfAllProducts.length >= 2) {
    piecesAmountOfAllProducts = piecesAmountOfAllProducts
      .map((prod) => Number(prod.amount))
      .reduce((prevProd, nextProd) => prevProd + nextProd);
  } else {
    if (piecesAmountOfAllProducts.length === 1) {
      piecesAmountOfAllProducts = Number(piecesAmountOfAllProducts[0].amount);
    }
  }
  return {
    weightOfAllProducts,
    piecesAmountOfAllProducts,
  };
};
