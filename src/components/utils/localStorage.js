export const saveFormValues = (formValues, step) => {
  localStorage.setItem(
    "formValues",
    JSON.stringify({ ...formValues, step: step + 1 }),
  );
};

export const retrieveFormValues = () => {
  const value = localStorage.getItem("formValues");

  return value ? JSON.parse(value) : null;
};
