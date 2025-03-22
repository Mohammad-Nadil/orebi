import React, { useState } from "react";
import Container from "../layer/Container.jsx";
import TitleHeader from "../layer/TitleHeader.jsx";
import CustomBtn from "../layer/CustomBtn.jsx";
import { FaAngleRight, FaStar } from "react-icons/fa";
import productImage from "/productDetails/Image_4.jpg";
import SizeSelector from "../layer/SizeSelector.jsx";
import QuantitySelector from "../layer/QuantitySelector.jsx";
import { Image } from "antd";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const ProductDetails = () => {
  let [accordion, setAccordion] = useState(false);

  let { id } = useParams();
  let products = useSelector((state) =>
    state.allCart.items.find((item) => item.id === Number(id))
  );

  return (
    <div>
      <Container>
        <TitleHeader
          className="capitalize  xl:text-5xl"
          headerText={`${window.location.pathname.split("/")[1]}
         ${window.location.pathname.split("/")[2]} `}
        />
        <p className="font-DM text-xs text-secondary flex items-center gap-x-2 capitalize">
          home <FaAngleRight />
          {window.location.pathname.split("/")[1]}{" "}
          {window.location.pathname.split("/")[2]}
        </p>
        <div className=" w-full   grid grid-cols-2 grid-rows-2 4">
          <div className="h-full w-full object-cover ">
            <Image
              className="!h-full !w-full aspect-square "
              src={products.images[0]}
              alt=""
            />
          </div>
          <div className="h-full w-full object-cover ">
            <Image
              className="!h-full !w-full aspect-square "
              src={products.images[0]}
              alt=""
            />
          </div>
          <div className="h-full w-full object-cover ">
            <Image
              className="!h-full !w-full aspect-square "
              src={products.images[0]}
              alt=""
            />
          </div>
          <div className="h-full w-full object-cover ">
            <Image
              className="!h-full !w-full aspect-square "
              src={products.images[0]}
              alt=""
            />
          </div>
        </div>
        <div className="productInformation w-full flex flex-col gap-y-7">
          <div className="flex flex-col ">
            <TitleHeader headerText={products.title} />
            <div className="reviewIcons pt-4 pb-5 flex gap-1 text-[#FFD881] items-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <p>{products.reviews.length} Review</p>
            </div>
            <p className="flex items-center gap-6 pb-5 border-b border-[#D8D8D8]">
              <span className="text-primary text-xl">
                <b>${products.price}</b>
              </span>
            </p>
          </div>
          <div>
            <ul className="flex gap-y-7 flex-col  border-b border-[#D8D8D8] pb-7">
              <li className="flex gap-x-14">
                <p className="font-DM font-bold leading-6 text-primary ">
                  COLOR:
                </p>
                <div className="flex gap-x-4">
                  <span className="h-5 w-5 bg-slate-500 rounded-full"></span>
                  <span className="h-5 w-5 bg-slate-500 rounded-full"></span>
                  <span className="h-5 w-5 bg-slate-500 rounded-full"></span>
                  <span className="h-5 w-5 bg-slate-500 rounded-full"></span>
                  <span className="h-5 w-5 bg-slate-500 rounded-full"></span>
                </div>
              </li>
              <div className="size flex gap-x-[4.75rem] items-center ">
                <p className="font-DM font-bold leading-6 text-primary">
                  SIZE:
                </p>
                <li>
                  <SizeSelector />
                </li>
              </div>
              <div className=" quantity flex items-center gap-x-7">
                <p className="font-DM font-bold leading-6 text-primary">
                  QUANTITY:
                </p>
                <QuantitySelector />
              </div>
              <li className="flex gap-x-7 ">
                <p className="font-DM font-bold leading-6 text-primary">
                  STATUS:
                </p>
                <p className="font-DM leading-7 text-secondary">
                  {products.availabilityStatus}
                </p>
              </li>
            </ul>
            <div className="flex gap-x-5 pt-7 pb-7 border-b border-[#D8D8D8]">
              <CustomBtn className="py-4 w-48" btnText="Add to Wish List" />
              <CustomBtn className="py-4 w-48" btnText="Add to Cart" />
            </div>
            <div>
              <ul className="mt-6">
                <li>
                  <p
                    onClick={() => setAccordion(!accordion)}
                    className="font-DM font-bold leading-6 text-primary "
                  >
                    FEATURES & DETAILS
                  </p>
                  <div
                    className={`transition-all duration-400 ${
                      accordion
                        ? "h-auto overflow-auto py-5"
                        : "h-0 overflow-hidden p-0"
                    }`}
                  >
                    <h2>{products.title}</h2>
                    <p>{products.description}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
