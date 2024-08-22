import React from "react";

const CustomBtn = ({ className, btnText }) => {
  return (
    <button
      className={`w-[9.25rem] bg-white hover:!bg-primary  border border-black text-primary  hover:text-white font-DM font-bold text-sm duration-500 text-center ${className} `}
    >
      {btnText}
    </button>
  );
};

export default CustomBtn;
