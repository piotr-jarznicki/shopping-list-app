import { submitResponse } from "./htmlHandler";
export const displaySubmitResponse = (isFormDataValid) => {
  isFormDataValid
    ? (submitResponse.textContent = "Your product was added successfully!")
    : (submitResponse.textContent =
        "Error, please fill out the form correctly!");
};
