import React, { useState } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";

import banner1 from "/slider1.png";
import banner2 from "/slider2.png";
import Image from "../layer/Image";

const Banner = () => {
  let [active, setActive] = useState(0);

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          zIndex: "1000",
          width: "auto",
          height: "120px",
        }}
      >
        <ul className=" flex flex-col justify-between h-[120px] "> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-[1.875rem] h-[1.875rem] font-DM text-[0.625rem]  border-r-2 flex items-center ${
          active == i
            ? " text-primary  border-primary "
            : " text-transparent border-white "
        } `}
      >
        0{i + 1}
      </div>
    ),
    beforeChange: (a, b) => {
      setActive(b);
    },
    responsive: [
      {
        breakpoint: 680,
        settings: {
          appendDots: (dots) => (
            <div
              style={{
                // backgroundColor: "#cccccc",
                position: "absolute",
                bottom: "5%",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: "1000",
                width: "auto",
                height: "30px",
              }}
            >
              <ul className=" flex  justify-between h-[120px] "> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              className={`w-[18px] h-[20px] font-DM text-[10px]  border-b-2 flex justify-center${
                active == i
                  ? " text-primary  border-primary "
                  : " text-transparent border-white "
              } `}
            >
              0{i + 1}
            </div>
          ),
        },
      },
      {
        breakpoint: 1025,
        settings: {
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "10%",
                transform: "translateY(-50%)",
                zIndex: "1000",
                width: "auto",
                height: "120px",
              }}
            >
              <ul className=" flex flex-col justify-between h-[120px] ">
                {" "}
                {dots}{" "}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              className={`w-[25px] h-[25px] font-DM text-[10px]  border-r-2 flex items-center ${
                active == i
                  ? " text-primary  border-primary "
                  : " text-transparent border-white "
              } `}
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <Image imageClass="w-full" src={banner1} />
        <Image imageClass="w-full" src={banner2} />
        <Image imageClass="w-full" src={banner1} />
        <Image imageClass="w-full" src={banner2} />
      </Slider>
    </div>
  );
};

export default Banner;
