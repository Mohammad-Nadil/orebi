import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { Image } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/cartSlice";

const Li = ({ liText, icon, onClick }) => {
  return (
    <li
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick();
      }}
      className="flex justify-end items-center gap-x-4 "
    >
      <p className="font-DM text-secondary hover:font-bold hover:text-primary hover:cursor-pointer transition-all duration-300 md:text-sm lg:text-base ">
        {liText}
      </p>
      {icon}
    </li>
  );
};

const ProductItem = ({
  className,
  src,
  pName,
  price,
  brand,
  offer,
  offerEye,
  id,
  product,
}) => {
  let [OfferShow, setOfferShow] = useState(offerEye);

  let [show, setShow] = useState(true);
  let dispatch = useDispatch();

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

  return (
    <div className={` w-full sm:w-auto ${className}`}>
      <Link to={`/product/details/${id}`}>
        <div className="image w-full h-5/6 aspect-square relative group">
          <button
            className={` absolute top-4 left-4 font-DM font-bold text-[10px] sm:text-xs lg:text-sm text-white bg-black ${
              OfferShow ? " py-1 px-3 lg:py-2 lg:px-8" : "p-0"
            } `}
          >
            {offer} % off
          </button>
          <img
            className="w-full h-full aspect-square"
            src={src}
            width={"100%"}
            height={"100%"}
            alt=""
          />
          <div
            className={`${
              show
                ? "overlay absolute bottom-0 left-0 w-full p-6 bg-white/45 opacity-0 invisible group-hover:opacity-100 group-hover:visible  transition-all duration-300"
                : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-y-3 relative z-50">
              {/* <Li liText="Add to Wish List" icon={<FaHeart />} /> */}
              <Li liText="Compare" icon={<LuRefreshCw />} />
              <Li
                onClick={() => dispatch(addToCart(product))}
                liText="Add to Cart"
                icon={<FaShoppingCart />}
              />
            </ul>
          </div>
        </div>
        <div className="text">
          <div className="flex flex-col lg:flex-row justify-between gap-x-5">
            <p className="text-primary font-DM text-sm md:text-xl font-bold text-wrap">
              {pName}
            </p>
            <span className="font-DM text-secondary text-sm lg:text-base sm:leading-5 xl:leading-[30px]">
              {price}
            </span>
          </div>
          <p className="font-DM text-secondary text-xs lg:text-base xl:leading-[30px]">
            {brand}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
