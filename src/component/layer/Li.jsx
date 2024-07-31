import React from "react";
import { Link } from "react-router-dom";

const Li = ({ liText, className , href , children }) => {
  return (
    <li  className={`font-DM font-bold  text-t-primary transition-all duration-300 hover:text-t-primary-active ${className} `}>
      <Link className="block"  to={href} >{liText}</Link>
      {children}
    </li>
  );
};

export default Li;
