import React from "react";
import Container from "../layer/Container";
import BreadCrum from "../BreadCrum";
import img1 from "/placeHolder1.png";
import img2 from "/placeHolder2.png";
import { Link } from "react-router-dom";
import CustomBtn from "../layer/CustomBtn";
const About = () => {
  return (
    <div>
      <Container>
        <BreadCrum />
        <div className="main py-5 md:py-10 xl:py-32">
          <div className="images grid gap-5 xl:gap-10 grid-cols-2 px-3 xl:px-7">
            <div className="img1 aspect-square object-cover relative ">
              <CustomBtn
                btnText={"Our Brands"}
                href={"/"}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/3 lg:text-3xl text-nowrap w-2/3  sm:w-[40%] aspect-[3/1] "
              />
              <img src={img1} alt="image" />
            </div>
            <div className="img2 aspect-square object-cover relative ">
              <CustomBtn
                btnText={"Our Shop"}
                href={"/product"}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/3 lg:text-3xl text-nowrap  w-2/3 sm:w-[40%] aspect-[3/1] "
              />
              <img src={img2} alt="image" />
            </div>
          </div>
          <p className="heading text-2xl md:3xl xl:text-4xl  text-primary py-5 md:py-10">
            Orebi is one of the world’s leading ecommerce brands and is
            internationally recognized for celebrating the essence of classic
            Worldwide cool looking style.
          </p>
          <ul className="cards grid md:grid-cols-3 gap-10">
            <li className="flex flex-col gap-y-3" >
              <h2 className="text-2xl font-bold font-DM">Our Vision</h2>
              <p className="text-secondary" >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </li>
            <li className="flex flex-col gap-y-3" >
              <h2 className="text-2xl font-bold font-DM">Our Vision</h2>
              <p className="text-secondary" >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </li>
            <li className="flex flex-col gap-y-3" >
              <h2 className="text-2xl font-bold font-DM">Our Vision</h2>
              <p className="text-secondary" >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default About;
