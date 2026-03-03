import React from "react";
import SuccessInfo from "./SuccessInfo";
import { motion } from "framer-motion";

export const Success = () => {
  return (
    <motion.div
      className="space-y-3 pt-7 bg-gray-50 shadow-2xl w-112.5 h-60 flex flex-col justify-center rounded-xl pr-5 pl-5 pb-15"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
    >
      <div className="space-y-3 pt-7">
        <SuccessInfo />
      </div>
    </motion.div>
  );
};
