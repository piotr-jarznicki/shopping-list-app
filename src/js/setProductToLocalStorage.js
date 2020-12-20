export const setProductToLocalStorage = (product) => {
  console.log(product);
  localStorage.setItem(JSON.parse(product).id, product);
};
