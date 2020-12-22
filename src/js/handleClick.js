import { getCurrentActiveCategory } from "./getCurrentActiveCategory";
import { productsCategoryList } from "./htmlHandler";
import { renderProducts } from "./renderProducts";

export const handleClick = (e) => {
  const target = e.target;
  const activeCategory = getCurrentActiveCategory(target);
  renderProducts(activeCategory);
};

productsCategoryList.forEach((el) => el.addEventListener("click", handleClick));
