import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";

const Li = ({ liText, icon }) => {
  return (
    <li className="flex justify-end items-center gap-x-4 ">
      <p className="font-DM text-secondary hover:font-bold hover:text-primary hover:cursor-pointer transition-all duration-300 md:text-sm lg:text-base ">
        {liText}
      </p>
      {icon}
    </li>
  );
};

const ProductItem = ({ className, src, pName, price, color, offer, offerEye }) => {

  let [OfferShow , setOfferShow] = useState(offerEye)


  let [show, setShow] = useState(true);

  useEffect(() => {
    function widthSize() {
      if (window.innerWidth >= 1023) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    widthSize();
    window.addEventListener("resize", widthSize);
  }, []);
  
// w-[44vw] sm:w-[19vw] md:w-[20.5vw]
  return (
    <div className={`w-[44vw] sm:w-[22%] 2xl:w-[370px] ${className}`}>
      <div className="image w-full h-[auto] 2xl:h-[370px] relative group">
        <button className={` absolute top-4 left-4 font-DM font-bold text-[10px] sm:text-xs lg:text-sm text-white bg-black ${OfferShow?" py-1 px-3 lg:py-2 lg:px-8":"p-0"} `}>
          {offer}
        </button>
        <img src={src} className=" w-full lg:h-full " alt="" />
        <div className={`${show?"overlay absolute bottom-0 left-0 w-full p-6 bg-white/45 opacity-0 invisible group-hover:opacity-100 group-hover:visible  transition-all duration-300":"hidden"}`}>
          <ul className="flex flex-col gap-y-3">
            <Li liText="Add to Wish List" icon={<FaHeart />} />
            <Li liText="Compare" icon={<LuRefreshCw />} />
            <Li liText="Add to Cart" icon={<FaShoppingCart />} />
          </ul>
        </div>
      </div>
      <div className="text">
        <div className="flex flex-col lg:flex-row justify-between">
          <p className="text-primary font-DM text-sm md:text-xl font-bold">{pName}</p>
          <span className="font-DM text-secondary text-sm lg:text-base sm:leading-5 xl:leading-[30px]">{price}</span>
        </div>
        <p className="font-DM text-secondary text-xs lg:text-base xl:leading-[30px]">{color}</p>
      </div>
    </div>
  );
};

export default ProductItem;
