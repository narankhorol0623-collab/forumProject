import React from "react";
import { Input } from "../ui/Input";
import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";
import { motion } from "framer-motion";

export const ContactInfo = ({
  step,
  handleClick,
  handleChange,
  formValues,
  formErrors,
  setFormErrors,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepOne(formValues);

    setFormErrors(errors);

    if (isValid) {
      handleClick();
    }
    saveFormValues(formValues, step);
  };
  return (
    <motion.div
      className="space-y-3 pt-7 bg-gray-50 w-112.5 h-125 flex flex-col justify-center rounded-xl p-5 shadow-2xl"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
    >
      <div className="">
        <Header />

        <div className="space-y-3 pt-7">
          <Input
            LabelValue={"First name"}
            placeholderName={"Enter your first name"}
            name="firstName"
            onChange={handleChange}
            errors={formErrors}
            value={
              formValues && formValues.firstName ? formValues.firstName : ""
            }
          />

          <Input
            LabelValue={"Last name"}
            name="lastName"
            placeholderName={"Enter your last name"}
            onChange={handleChange}
            errors={formErrors}
            value={formValues && formValues.lastName ? formValues.lastName : ""}
          />

          <Input
            LabelValue={"Username"}
            placeholderName={"Enter your username"}
            name="userName"
            onChange={handleChange}
            errors={formErrors}
            value={formValues && formValues.userName ? formValues.userName : ""}
          />
        </div>
      </div>

      <Footer step={step} handleClick={handleClick} />
    </motion.div>
  );
};
