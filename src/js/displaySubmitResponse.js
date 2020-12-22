import { submitResponse } from "./htmlHandler";
export const displaySubmitResponse = (isFormDataValid, name) => {
  isFormDataValid
    ? (submitResponse.textContent = `Your product ${name} was added successfully!`)
    : (submitResponse.textContent = `Error, please fill out the form correctly!`);
};
