import React from "react";
import { FaHeart } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";

const Li = ({liText ,icon }) => {
  return (
    <li className="flex justify-end items-center gap-x-4 ">
      <p className="font-DM text-secondary hover:font-bold hover:text-primary hover:cursor-pointer transition-all duration-300  ">{liText}</p>
      {icon}
    </li>
  );
}

const ProductItem = ({ className , src , pName , price , color }) => {
  return (
    <div className={` w-[23.125rem] ${className}`}>
      <div className="image w-full h-[23.125rem] relative group">
        <img src={src} className=" w-full h-full " alt="" />
        <div className="overlay absolute bottom-0 left-0 w-full p-6 bg-white/45 opacity-0 invisible group-hover:opacity-100 group-hover:visible  transition-all duration-300" >
        <ul className="flex flex-col gap-y-3">
          <Li liText="Add to Wish List" icon={<FaHeart />}/>
          <Li liText="Compare" icon={<LuRefreshCw />}/>
          <Li liText="Add to Cart" icon={<FaShoppingCart />}/>
        </ul>
        </div>
      </div>
      <div className="text">
        <div className="flex justify-between">
          <p className="text-primary font-DM text-xl font-bold">
            {pName}
          </p>
          <span className="font-DM text-secondary leading-[30px]">{price}</span>
        </div>
        <p className="font-DM text-secondary leading-[30px]">{color}</p>
      </div>
    </div>
  );
};

export default ProductItem;
