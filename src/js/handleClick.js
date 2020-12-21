import { establishProductsCategory } from "./establishProductsCategory";
import { productsCategoryList } from "./htmlHandler";
import { renderProducts } from "./renderProducts";

export const handleClick = (e) => {
  const target = e.target;
  const activeCategory = establishProductsCategory(target);
  renderProducts(activeCategory);
};

productsCategoryList.forEach((el) => el.addEventListener("click", handleClick));
