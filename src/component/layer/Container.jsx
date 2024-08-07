import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-[100rem] mx-auto relative ${className} md:px-3 xl:px-0`}>
      {children}
      </div>
  );
};

export default Container;
