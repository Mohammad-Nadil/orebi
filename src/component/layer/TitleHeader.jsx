import React from "react";

const TitleHeader = ({ headerText, className }) => {
  return (
    <h2
      className={`text-primary  text-3xl md:text-4xl 
         lg:text-[39px] font-DM font-bold ${className}`}>
      {headerText}
    </h2>
  );
};

export default TitleHeader;
