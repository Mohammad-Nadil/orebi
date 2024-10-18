import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const SizeSelector = ({ className }) => {
  let [show, setShow] = useState(false);
  let [size, setSize] = useState("S");
  let manage = (element) => {
    setSize(element.target.innerText);
  };

  return (
    <div className={className}>
      <div
        onClick={() => setShow(!show)}
        className="flex items-center gap-x-[4.75rem] py-1 px-5 border border-secondary !relative"
      >
        <p>{size}</p>
        <FaCaretDown />
        <ul
          onClick={manage}
          className={`w-full bottom-0 translate-y-full left-0 z-50 absolute transition-all duration-300 bg-white ${
            show ? "visible opacity-100" : " invisible opacity-0"
          }`}
        >
          <li className="border border-secondary w-full cursor-default text-center">
            S
          </li>
          <li className="border border-secondary w-full cursor-default text-center">
            M
          </li>
          <li className="border border-secondary w-full cursor-default text-center">
            L
          </li>
          <li className="border border-secondary w-full cursor-default text-center">
            XL
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SizeSelector;
