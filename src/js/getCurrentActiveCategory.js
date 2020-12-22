import { productsCategoryList } from "./htmlHandler";

export const getCurrentActiveCategory = (target) => {
  let arrayOfProductsCategories = Array.from(productsCategoryList);
  // Making sure that only one category is active
  arrayOfProductsCategories = arrayOfProductsCategories.map((el) => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
      return el;
    } else {
      return el;
    }
  });
  target.classList.add("active");
  const activeCategory = arrayOfProductsCategories.filter((el) =>
    el.classList.contains("active") ? el : false
  );
  currentActiveCategory = activeCategory[0].dataset.category;
  return activeCategory[0].dataset.category;
};
