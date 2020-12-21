export const get = (...args) => document.querySelector(...args);
export const getAll = (...args) => document.querySelectorAll(...args);

export const menuBars = get("[data-menu-bars]");
export const nav = get("[data-nav]");
export const form = get("[data-form]");
export const submitFormButton = get("[data-submit-form]");
export const submitResponse = get("[data-submit-response]");
export const productsList = get("[data-products-list]");
export const amountOfProducts = get("[data-products-pieces]");
export const weightOfProducts = get("[data-products-weight]");
