import { form } from "./htmlHandler";
import { resetForm } from "./resetForm";
export const validateForm = () => {
  // Checking if user inserted correct data
  const isFormDataValid = form[0].value && form[2].value !== "" ? true : false;
  isFormDataValid ? resetForm() : false;
  return isFormDataValid;
};
