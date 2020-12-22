import { nav, menuBars, box } from "./htmlHandler";

const toggleMobileMenu = () => {
  nav.classList.toggle("display");
  box.classList.toggle("display-block");
  // box.style.display = "flex";
};

menuBars.addEventListener("click", toggleMobileMenu);
