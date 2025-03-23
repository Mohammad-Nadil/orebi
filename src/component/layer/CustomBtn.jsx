import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CustomBtn = ({ className = "", btnText, onClick, href }) => {
  const buttonElement = (
    <button
      onClick={onClick}
      className={`w-[9.25rem] bg-white hover:!bg-primary border border-black text-primary hover:text-white font-DM font-bold text-sm duration-500 text-center ${className}`}
    >
      {btnText}
    </button>
  );

  return href ? <Link to={href}>{buttonElement}</Link> : buttonElement;
};

CustomBtn.propTypes = {
  className: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
};

export default CustomBtn;
