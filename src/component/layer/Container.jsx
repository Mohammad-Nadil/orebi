import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-[100rem] mx-auto relative ${className} `}>
      {children}
      </div>
  );
};

export default Container;
