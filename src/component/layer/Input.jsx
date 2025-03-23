import React from "react";

const Input = ({
  className,
  id,
  placeholder,
  type,
  label,
  children,
  inputValue,
  onChange,
}) => {
  return (
    <div
      className={`border-b border-[#D8D8D8] min-w-[310px] md:w-[43%] lg:w-[31.6875rem] relative ${className}`}
    >
      <label htmlFor={id} className="font-DM font-bold leading-6 text-primary">
        {label}
      </label>
      <input
        className="block w-full font-DM text-sm placeholder:text-secondary text-primary outline-none mt-2.5"
        onChange={onChange}
        value={inputValue}
        id={id}
        type={type}
        placeholder={placeholder}
        
      />
      {children}
    </div>
  );
};

export default Input;
