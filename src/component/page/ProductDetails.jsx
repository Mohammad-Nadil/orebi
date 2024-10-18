import React, { useState } from "react";
import Container from "../layer/Container.jsx";
import TitleHeader from "../layer/TitleHeader.jsx";
import CustomBtn from "../layer/CustomBtn.jsx";
import { FaAngleRight, FaStar } from "react-icons/fa";
import productImage from "/productDetails/Image_4.jpg";
import SizeSelector from "../layer/SizeSelector.jsx";
import QuantitySelector from "../layer/QuantitySelector.jsx";
const ProductDetails = () => {
  let [accordion, setAccordion] = useState(false);

  return (
    <div>
      <Container>
        <TitleHeader
          className="capitalize !text-5xl"
          headerText={`${window.location.pathname.split("/")[1]}
         ${window.location.pathname.split("/")[2]} `}
        />
        <p className="font-DM text-xs text-secondary flex items-center gap-x-2 capitalize">
          home <FaAngleRight />
          {window.location.pathname.split("/")[1]}{" "}
          {window.location.pathname.split("/")[2]}
        </p>
        <div className=" w-full  h-[100rem] grid grid-cols-2 grid-rows-2">
          <div className="h-full w-full ">
            <img
              className="h-full w-full object-cover"
              src={productImage}
              alt=""
            />
          </div>
          <div className="h-full w-full ">
            <img
              className="h-full w-full object-cover"
              src={productImage}
              alt=""
            />
          </div>
          <div className="h-full w-full ">
            <img
              className="h-full w-full object-cover"
              src={productImage}
              alt=""
            />
          </div>
          <div className="h-full w-full ">
            <img
              className="h-full w-full object-cover"
              src={productImage}
              alt=""
            />
          </div>
        </div>
        <div className="productInformation w-[780px] flex flex-col gap-y-7">
          <div className="flex flex-col ">
            <TitleHeader headerText="Product" />
            <div className="reviewIcons pt-4 pb-5 flex gap-0.5 text-[#FFD881]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <p>1 Review</p>
            </div>
            <p className="flex items-center gap-6 pb-5 border-b border-[#D8D8D8]">
              <del className="text-red-500">
                <span className="text-secondary">$88.00</span>
              </del>
              <span className="text-primary text-xl">
                <b>$44.00</b>
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
                <p className="font-DM leading-7 text-secondary">In Stock</p>
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
                    <h2>Lorem ipsum dolor sit amet !</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis voluptate consequuntur minima doloribus,
                      necessitatibus qui dolores aspernatur molestiae dolor,
                      delectus consectetur quas autem! Similique fugiat, optio
                      quas omnis aliquam exercitationem.
                    </p>
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
