import React from "react";
import { Input } from "../ui/Input";
import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";
import { steps } from "framer-motion";
import { motion } from "framer-motion";

export const PrivateInfo = ({
  step,
  handleClick,
  handlePrev,
  handleChange,
  formValues,
  formErrors,
  setFormErrors,
}) => {
  const handleSubmitSecond = () => {
    const { errors, isValid } = validateStepTwo(formValues);

    setFormErrors(errors);

    if (isValid) {
      handleClick();
    }
    saveFormValues(formValues, step);
  };
  return (
    <motion.div
      className=" pt-7 bg-gray-50  h-147 flex flex-col shadow-2xl justify-center rounded-xl pl-5 pr-5 pb-7"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
    >
      <div className="space-y-3 pt-7">
        <Header />
        <div className="pt-7 space-y-3">
          <Input
            type="text"
            name="email"
            LabelValue={"Email"}
            placeholderName={"Enter your email"}
            onChange={handleChange}
            errors={formErrors}
            value={formValues && formValues.email ? formValues.email : ""}
          />
          <Input
            type="text"
            name="phoneNumber"
            LabelValue={"Phone number"}
            placeholderName={"Enter your phone number"}
            onChange={handleChange}
            errors={formErrors}
            value={
              formValues && formValues.phoneNumber ? formValues.phoneNumber : ""
            }
          />
          <Input
            type="password"
            name="password"
            LabelValue={"Password"}
            placeholderName={"Enter your password"}
            onChange={handleChange}
            errors={formErrors}
            value={formValues && formValues.password ? formValues.password : ""}
          />
          <Input
            type="password"
            name="confirmPassword"
            LabelValue={"Confirm password"}
            placeholderName={"Please confirm your password"}
            onChange={handleChange}
            errors={formErrors}
            value={
              formValues && formValues.confirmPassword
                ? formValues.confirmPassword
                : ""
            }
          />
        </div>
        <Footer step={step} handleClick={handleClick} handlePrev={handlePrev} />
      </div>
    </motion.div>
  );
};

export default PrivateInfo;
