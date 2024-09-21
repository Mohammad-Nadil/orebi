import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";

const Li = ({ liText, icon }) => {
  return (
    <li className="flex flex-row-reverse justify-end items-center gap-x-4 ">
      <p className="font-DM text-secondary hover:font-bold hover:text-primary hover:cursor-pointer transition-all duration-300 md:text-sm lg:text-base ">
        {liText}
      </p>
      {icon}
    </li>
  );
};

const VerticalProductItem = ({
  className,
  src,
  pName,
  price,
  brand,
  offer,
  offerEye,
  description,
}) => {
  let [OfferShow, setOfferShow] = useState(offerEye);

  return (
    <div className={`w-full grid grid-cols-8 h-44 ${className}`}>
      <div className="image overflow-hidden grid content-center h-44 relative group ">
        <button
          className={` absolute top-4 left-4 font-DM font-bold text-[10px] sm:text-xs lg:text-sm text-white bg-black ${
            OfferShow ? " py-1 px-2 " : "p-0"
          } `}
        >
          {offer} % off
        </button>
        <img src={src} className=" w-44   " alt="" />
      </div>
      <div className="text py-3 px-2 flex flex-col justify-between col-span-5 " >
          <p className="text-primary font-DM text-sm md:text-xl font-bold">
            {pName}
          </p>
          <span className="font-DM text-secondary text-sm lg:text-base sm:leading-5 xl:leading-[30px]">
            {price}
          </span>
        <p className="font-DM text-secondary text-xs lg:text-base xl:leading-[30px]">
          {brand}
        </p>
        <p className="font-DM text-secondary">{description}</p>
      </div>
      <div className=" col-span-2 p-6 flex flex-col  justify-between   transition-all duration-300">
        <ul className="flex flex-col gap-y-3">
          <Li liText="Add to Wish List" icon={<FaHeart />} />
          <Li liText="Compare" icon={<LuRefreshCw />} />
          <Li liText="Add to Cart" icon={<FaShoppingCart />} />
        </ul>
      </div>
    </div>
  );
};

export default VerticalProductItem;
