import React from "react";
import { Input } from "../ui/Input";
import { Header } from "../ui/Header";
import Footer from "../ui/Footer";
import { steps } from "framer-motion";
import { motion } from "framer-motion";

export const ProfileImage = ({
  step,
  handleClick,
  handlePrev,
  handleChange,
  formValues,
  formErrors,
  isDragging,
  inputRef,
  handleBrowserClick,
  imageUrl,
  handleDrop,
  handleDragOver,
  handleDragLeave,
  handleChangeProfile,
  clearImage,
  setFormErrors,
}) => {
  const handleSubmitThird = () => {
    const { errors, isValid } = validateStepThree(formValues);

    setFormErrors(errors);

    if (isValid) {
      handleClick();
    }
    saveFormValues(formValues, step);
  };
  return (
    <motion.div
      className="space-y-3 pt-7  w-112.5 h-140 bg-gray-50 flex flex-col justify-center rounded-xl pr-5 pl-5 pb-10"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col p-8 items-center w-125 bg-gray-50 shadow-2xl rounded-lg">
        <Header />
        <div className="pt-7 flex flex-col">
          <Input
            type="date"
            name="birthDay"
            LabelValue={"Date of Birth"}
            onChange={handleChange}
            errors={formErrors}
            value={
              formValues && formValues.birthDay ? formValues.birthDay : ""
            }
          />
          <Input
            type="file"
            name="profile"
            LabelValue={"Profile image"}
            hidden
            errors={formErrors}
            onChange={handleChangeProfile}
            ref={inputRef}
          />

          <button
            onClick={clearImage}
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            x
          </button>
          <div
            onDrop={handleDrop}
            errors={formErrors}
            onChange={handleChange}
            onDragOver={handleDragOver}
            onClick={handleBrowserClick}
            onDragLeave={handleDragLeave}
            style={{
              width: 416,
              height: 180,
              borderRadius: 6,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 14,
              rowGap: 4,
              backgroundColor: "#7F7F800D",
              border: isDragging ? "1px solid black" : "1px solid transparent",
              position: "relative",
            }}
          >
            <div className="flex justify-center items-center rounded-full w-7 h-7 bg-white">
              <img src="/image.png" alt="" className="w-3 h-3" />
            </div>
            <div>Browse or drop image</div>
            {imageUrl && (
              <img
                src={imageUrl}
                alt="image"
                style={{
                  width: 416,
                  height: 180,
                  objectFit: "cover",
                  position: "absolute",
                }}
              />
            )}
          </div>
        </div>
        <Footer step={step} handleClick={handleClick} handlePrev={handlePrev} />
      </div>
    </motion.div>
  );
};
