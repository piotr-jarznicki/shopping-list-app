export const getDataFromLocalStorage = () => {
  const products = [];
  for (let i in localStorage) {
    if (localStorage.hasOwnProperty(i) && localStorage[i] !== "INFO") {
      products.push(JSON.parse(localStorage[i]));
    }
  }
  return products;
};
