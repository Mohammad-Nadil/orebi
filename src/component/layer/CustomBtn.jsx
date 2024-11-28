import React from "react";
import { Link } from "react-router-dom";

const CustomBtn = ({ className, btnText, onClick , href }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[9.25rem] bg-white hover:!bg-primary  border border-black text-primary  hover:text-white font-DM font-bold text-sm duration-500 text-center ${className} `}
    >
      <Link to={href}>{btnText}</Link>
    </button>
  );
};

export default CustomBtn;
