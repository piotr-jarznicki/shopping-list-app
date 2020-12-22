export const setProductToLocalStorage = (product) => {
  localStorage.setItem(JSON.parse(product).id, product);
};
