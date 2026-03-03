import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  ContactInfo,
  PrivateInfo,
  ProfileImage,
  Success,
} from "@/components/steps";
const Home = () => {
  const [step, setStep] = useState(0);
  const handlePrev = () => {
    setStep(step - 1);
  };
  const handleClick = () => {
    setStep(step + 1);
  };

  const Container = [ContactInfo, PrivateInfo, ProfileImage, Success][step];

  return (
    <div className="">
      <div
        className="flex justify-center shadow-2xl items-center w-full min-h-screen text-black 
      "
      >
        <div>
          <AnimatePresence mode="wait">
            <Container
              handlePrev={handlePrev}
              handleClick={handleClick}
              step={step}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Home;
