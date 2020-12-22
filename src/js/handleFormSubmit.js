import { getUserInput } from "./getUserInput";
import { validateForm } from "./validateForm";
import { setProductToLocalStorage } from "./setProductToLocalStorage";
import { displaySubmitResponse } from "./displaySubmitResponse";
import { submitFormButton } from "./htmlHandler";
import { renderProducts } from "./renderProducts";
const handleFormSubmit = (e) => {
  e.preventDefault();
  const product = getUserInput();
  const isFormDataValid = validateForm();
  isFormDataValid ? setProductToLocalStorage(JSON.stringify(product)) : false;
  displaySubmitResponse(isFormDataValid, product.name);
  renderProducts("all");
};

submitFormButton.addEventListener("click", handleFormSubmit);
// Change to form submit
