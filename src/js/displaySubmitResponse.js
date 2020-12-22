import { submitResponse } from "./htmlHandler";
export const displaySubmitResponse = (isFormDataValid, name) => {
  submitResponse.style.visibility = "visible";
  setTimeout(() => {
    submitResponse.style.visibility = "hidden";
  }, 2000);
  isFormDataValid
    ? (submitResponse.textContent = `Your product ${name} was added successfully!`)
    : (submitResponse.textContent = `Error, please fill out the form correctly!`);
};
