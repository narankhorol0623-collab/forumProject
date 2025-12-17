import { isEmpty } from "./validation-utils";
export const validateStepOne = (formValues) => {
  const errors = {};
  if (isEmpty(formValues.lastName)) {
    errors.lastName = "Please! Enter your Last Name.";
  }
  if (isEmpty(formValues.firstName)) {
    errors.firstName = "Please! Enter your First Name.";
  }
  if (isEmpty(formValues.username)) {
    errors.username = "Please! Enter your Username.";
  }

  const isValid = Object.keys(errors);

  return { errors, isValid: true };
};
export const validateStepTwo = (formValues) => {};
export const validateStepThree = (formValues) => {};
