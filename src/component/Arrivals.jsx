import Container from "./layer/Container";
import React, { useState } from "react";
import TitleHeader from "./layer/TitleHeader";
import ProductItem from "./layer/ProductItem";
import p1 from "/Arrivals/productItem1.png";
import p2 from "/Arrivals/productItem2.png";
import p3 from "/Arrivals/productItem3.png";
import p4 from "/Arrivals/productItem4.png";
import p5 from "/Arrivals/productItem10.png";
import Slider from "react-slick";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=" absolute top-1/2 -translate-y-1/2 left-0 translate-x-1/3 z-50 h-10 lg:h-16 w-10 lg:w-16 rounded-full bg-[#979797] grid place-content-center text-white"
      onClick={onClick}
    >
      <FaLongArrowAltLeft />
    </div>
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=" absolute top-1/2 -translate-y-1/2 right-0 -translate-x-1/3 z-50 h-10 lg:h-16 w-10 lg:w-16 rounded-full bg-[#979797] grid place-content-center text-white"
      onClick={onClick}
    >
      <FaLongArrowAltRight />
    </div>
  );
}

const Arrivals = () => {

  
  let [active, setActive] = useState(0);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      // {
      //   breakpoint: 1536,
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 1,
      //   },
      // },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
    appendDots: (dots) => (
      <div
        className="flex "
        // style={{
        //   backgroundColor: "#ddd",
        //   borderRadius: "10px",
        //   padding: "10px",
        //   display: "flex",

        // }}
      >
        <ul
          className="flex  justify-center gap-x-2 pt-5"
          style={{ margin: "0px" }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`grid place-content-center rounded-full h-1 w-8 text-transparent ${ active == i ? "bg-gray-500 " : "bg-gray-400/60" } `}
        // style={{
        //   width: "30px",
        //   color: "blue",
        //   border: "1px blue solid",
        //   display: "flex"
        // }}
      >
        {i + 1}
      </div>
    ),
    beforeChange: (a, b) => {
      setActive(b);
    },
  };

  return (
    <>
      <Container className="pt-10 lg:pt-32">
        <TitleHeader headerText="New Arrivals" />
      </Container>
      <Container className=" !px-0 max-w-[1640px]">
        <div>
          <Slider {...settings}>
            <ProductItem
              src={p1}
              pName="Basic Crew Neck Tee"
              price="$44.00"
              color="black"
              offer="10%"
              offerEye={true}
              className="!w-full px-5"
            />
            <ProductItem
              src={p2}
              pName="Basic Crew Neck Tee"
              price="$44.00"
              color="black"
              offerEye={false}
              className="!w-full px-5"
            />
            <ProductItem
              src={p3}
              pName="Basic Crew Neck Tee"
              price="$44.00"
              color="black"
              offer="50%"
              offerEye={true}
              className="!w-full px-5"
            />
            <ProductItem
              src={p4}
              pName="Basic Crew Neck Tee"
              price="$44.00"
              color="black"
              offerEye={false}
              className="!w-full px-5"
            />
            <ProductItem
              src={p5}
              pName="Basic Crew Neck Tee"
              price="$44.00"
              color="black"
              offer="new"
              offerEye={true}
              className="!w-full px-5"
            />
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default Arrivals;
