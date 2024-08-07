import React from "react";
import p1 from "/Arrivals/productItem1.png";

const ProductItem = ({ className }) => {
  return (
    <div className={` w-[23.125rem] ${className}`}>
      <div className="image w-full h-[23.125rem] ">
        <img src={p1} className=" w-full h-full " alt="" />
      </div>
      <div className="text">
        <div className="flex justify-between">
            <p>Basic Crew Neck Tee</p>
            <span>$44.00</span>
        </div>
        <p>black</p>
      </div>
    </div>
  );
};

export default ProductItem;
