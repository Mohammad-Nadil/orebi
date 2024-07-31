import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "/slider1.png";
import banner2 from "/slider2.png";
import Image from "./layer/Image";

const Banner = () => {
  let [active, setActive] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translateY(-10%)",
          zIndex: "10",
        }}
      >
        <ul className=" flex flex-col"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={` w-6 text-[0.625rem] h-7 flex items-center font-DM text-t-primary-active  border-t-primary-active border-r-2  ${
          active == i
            ? "text-t-primary-active border-t-primary-active"
            : " text-transparent border-white "
        } `}
      >
        0{i + 1}
      </div>
    ),
    beforeChange: (a, b) => {
      setActive(b);
    },
  };

  return (
    <Slider {...settings}>
      <Image className="w-full" src={banner1} />
      <Image className="w-full" src={banner2} />
      <Image className="w-full" src={banner1} />
      <Image className="w-full" src={banner2} />
    </Slider>
  );
};

export default Banner;
