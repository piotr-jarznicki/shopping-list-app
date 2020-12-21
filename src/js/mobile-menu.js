import { nav, menuBars } from "./htmlHandler";

const toggleMobileMenu = () => {
  nav.classList.toggle("display");
};

menuBars.addEventListener("click", toggleMobileMenu);
