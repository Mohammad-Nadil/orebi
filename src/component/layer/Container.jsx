import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-[100rem] mx-auto relative ${className} px-2 md:px-3 2xl:px-0 `}>
      {children}
      </div>
  );
};

export default Container;
