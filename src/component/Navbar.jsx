import React, { useEffect, useState } from "react";
import Container from "./layer/Container";
import Image from "./layer/Image";
import logo from "/Logo.png";
import Li from "./layer/Li";
import { TbGridDots } from "react-icons/tb";
import { FaCaretDown, FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    function widthSize() {
      if (window.innerWidth >= 768) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    widthSize();
    window.addEventListener("resize", widthSize);
  }, []);

  return (
    <>
      <nav className="bg-gray-200 ">
        <Container className=" py-4 md:py-8 px-3 md:px-0  flex justify-end gap-x-3 md:gap-x-0 md:justify-center  bg-gray-200">
          <Image
            className=" cursor-pointer absolute top-1/2 -translate-y-1/2 left-3 xl:left-0  md:left-3"
            href="/"
            src={logo}
            alt="/Logo.png"
          />

          <ul
            className={`transition-all duration-500 md:static gap-x-10  flex absolute left-0 top-full md:flex-row flex-col md:justify-center md:bg-transparent w-full px-3 md:px-0 z-20 bg-inherit ${
              show ? "opacity-100 visible " : " opacity-0 invisible"
            } `}
          >
            <Li className= "!text-primary " liText="Home" href="/" />
            <Li liText="Shop" href="/Shop" />
            <Li liText="About" href="/About" />
            <Li liText="Contacts" href="/Contacts" />
            <Li liText="Journal" href="/Journal" />
          </ul>

          <div className="account flex gap-x-3 md:gap-x-10 md:hidden">
            <div className="left flex md:gap-x-2.5">
              <FaUser />
              <FaCaretDown />
            </div>
            <div className="right">
              <FaShoppingCart />
            </div>
          </div>

          <div onClick={() => setShow(!show)} className=" block md:hidden">
            <TbGridDots />
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
