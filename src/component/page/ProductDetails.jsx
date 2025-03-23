import React, { useEffect, useState } from "react";
import Container from "../layer/Container.jsx";
import TitleHeader from "../layer/TitleHeader.jsx";
import CustomBtn from "../layer/CustomBtn.jsx";
import { FaAngleDown, FaAngleRight, FaStar } from "react-icons/fa";
import SizeSelector from "../layer/SizeSelector.jsx";
import QuantitySelector from "../layer/QuantitySelector.jsx";
import { Image } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import Loader from "../Loader.jsx";
const ProductDetails = () => {
  const [loading, setLoading] = useState(true);
  let [accordion2, setAccordion2] = useState(false);
  let [accordion, setAccordion] = useState(false);

  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { id } = useParams();
  let products = useSelector((state) =>
    state.allCart.items.find((item) => item.id === Number(id))
  );

 
  useEffect(() => {
    const fetchProductData = async () => {
      if (!products) {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }

      if (!products) {
        navigate("/error"); 
      } else {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [products, id, navigate]);

  if (loading) {
    return <Loader />;
  }

  if (!products) {
    return null;
  }

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
        <div className=" w-full   grid grid-cols-2 grid-rows-2 sm:grid-cols-4 sm:grid-rows-1">
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
              <p className="font-DM font-bold leading-6 text-primary">SIZE:</p>
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
          <div className="flex gap-x-5 pt-7 pb-7 border- border-[#D8D8D8]">
            {/* <CustomBtn className="py-4 w-48" btnText="Add to Wish List" /> */}
            <CustomBtn
              className="py-4 w-48"
              btnText="Add to Cart"
              onClick={() => dispatch(addToCart(products))}
              href={"/cart"}
            />
          </div>
          <ul className=" ">
            <li
              onClick={() => setAccordion(!accordion)}
              className="py-6 border-t border-b border-[#D8D8D8]"
            >
              <p className="font-DM font-bold leading-6 text-primary flex justify-between items-center">
                FEATURES & DETAILS
                <p>
                  <FaAngleDown
                    className={` duration-300 ${accordion ? "rotate-180" : ""}`}
                  />
                </p>
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
            <li
              onClick={() => setAccordion2(!accordion2)}
              className="py-6  border-b border-[#D8D8D8]"
            >
              <p className="font-DM font-bold leading-6 text-primary flex justify-between items-center">
                SHIPPING & RETURNS
                <p>
                  <FaAngleDown
                    className={` duration-300 ${
                      accordion2 ? "rotate-180" : ""
                    }`}
                  />
                </p>
              </p>
              <div
                className={`transition-all duration-400 ${
                  accordion2
                    ? "h-auto overflow-auto py-5"
                    : "h-0 overflow-hidden p-0"
                }`}
              >
                <h2>{products.shippingInformation}</h2>
                <p>{products.returnPolicy}</p>
              </div>
            </li>
          </ul>
          <div>
            <div className="head border-b border-[#D8D8D8] flex flex-col gap-y-11 py-4 ">
              <div className="heading flex items-center gap-x-16 text-xl">
                <p>Description</p>
                <p className="font-bold">Reviews ({products.reviews.length})</p>
              </div>
              <p>
                {products.reviews.length} reviews for {products.title}
              </p>
            </div>
            <ul className="reviews ">
              {products.reviews.map((review, index) => (
                <li
                  className="border-b border-[#D8D8D8] py-5 flex flex-col gap-y-4"
                  key={index}
                >
                  <div className="head flex items-center gap-x-9">
                    <p>{review.reviewerName}</p>
                    <p className="flex items-center gap-1 text-yellow-300">
                      {Array.from({ length: review.rating || 0 }).map(
                        (_, i) => (
                          <span key={i}>
                            <FaStar />
                          </span>
                        )
                      )}
                    </p>
                  </div>
                  <p className="review text-base text-secondary">
                    {review.comment}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
