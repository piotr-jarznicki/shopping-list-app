const get = (...args) => document.querySelector(...args);
const getAll = (...args) => document.querySelectorAll(...args);

const nav = get("[data-nav]");
const menuBars = get("[data-menu-bars]");

const toggleMobileMenu = () => {
  nav.classList.toggle("display");
};

menuBars.addEventListener("click", toggleMobileMenu);
