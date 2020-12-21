import { productsCategoryList, categorySpanText } from "./htmlHandler";
export const establishProductsCategory = (target) => {
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
  return activeCategory;
};
