import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantitySelector = () => {

    let [quantity , setQuantity] = useState("1")

  return (
    <ul>
      <li className="flex items-center gap-x-7">
        <p className="font-DM font-bold leading-6 text-primary">QUANTITY:</p>
        <div className="flex  px-5 gap-x-8 items-center font-DM text-secondary ">
          <span className=" p-1" onClick={()=>setQuantity( quantity > 1 ? quantity-- : quantity)} ><FaMinus/></span>
          <span>{quantity}</span>
          <span className=" p-1" onClick={()=>setQuantity(quantity++)} ><FaPlus/></span>
        </div>
      </li>
    </ul>
  );
};

export default QuantitySelector;
