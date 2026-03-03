export const Footer = ({ step, handlePrev, handleClick }) => {
  return (
    <div className="flex justify-evenly pt-4 gap-3 bg-gray-50">
      <div
        className={`h-11 w-30 cursor-pointer flex items-center justify-center rounded-md text-black border-2 ${
          step === 0 ? "hidden" : "block"
        } ${step === 3 ? "hidden" : "block"}`}
      >
        <button onClick={handlePrev}>Previous</button>
      </div>
      <div className="bg-black h-11 w-70 cursor-pointer text-white flex items-center rounded-md justify-center gap-2">
        <button
          onClick={handleClick}
          className={`${step === 3 ? "hidden" : "block"}`}
        >
          {step === 2 ? `Submit ${step + 1}/3` : `Continue ${step + 1}/3`}
        </button>

        <img src="chevron.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
