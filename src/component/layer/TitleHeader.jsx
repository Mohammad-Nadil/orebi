import React from "react";

const TitleHeader = ({ headerText, className }) => {
  return (
    <h2
      className={`text-primary  
         text-[2.4375rem] font-DM font-bold ${className}`}
    >
      {headerText}
    </h2>
  );
};

export default TitleHeader;
