import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantitySelector = () => {
  let [quantity, setQuantity] = useState(1);

  return (
        <div className="flex  px-5 gap-x-8 items-center font-DM text-secondary ">
          <span
            className=" p-1"
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
          >
            <FaMinus />
          </span>
          <span>{quantity}</span>
          <span
            className=" p-1"
            onClick={() => setQuantity((quantity = quantity += 1))}
          >
            <FaPlus />
          </span>
        </div>
  );
};

export default QuantitySelector;
