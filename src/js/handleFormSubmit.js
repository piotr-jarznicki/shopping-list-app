import { form } from "./htmlHandler";
import { getUserInput } from "./getUserInput";
import { validateForm } from "./validateForm";
import { submitFormButton } from "./htmlHandler";
import { setProductToLocalStorage } from "./setProductToLocalStorage";
import { displaySubmitResponse } from "./displaySubmitResponse";
const handleFormSubmit = (e) => {
  e.preventDefault();
  const product = getUserInput();
  const isFormDataValid = validateForm();
  isFormDataValid ? setProductToLocalStorage(JSON.stringify(product)) : false;
  displaySubmitResponse(isFormDataValid);
};

submitFormButton.addEventListener("click", handleFormSubmit);
