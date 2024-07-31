import React, { useState } from "react";
import Container from "./layer/Container";
import { FaBarsStaggered, FaCaretDown, FaUser } from "react-icons/fa6";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Li from "./layer/Li";
import DDli from "./layer/DDli";
import CustomBtn from "./layer/CustomBtn";
import Image from "./layer/Image";
import { MdClose } from "react-icons/md";

const SearchBar = () => {
  let [show, setShow] = useState(false);
  let [cart, setCart] = useState(false);
  let [user, setUser] = useState(false);

  return (
    <div className="bg-[#F5F5F3] relative ">
      <Container className="py-6  flex md:justify-between gap-x-3 px-3 md:px-0 items-center relative">
        <div
          onClick={() => setShow(!show)}
          className="category  flex md:gap-x-2.5 cursor-pointer"
        >
          <FaBarsStaggered />
          <p className="font-DM text-sm text-t-primary-active  hidden md:block">
            Shop by Category
          </p>
        </div>

        {show && (
          <ul className="catddm absolute top-full left-0 w-[16.4375rem] bg-t-primary-active z-10 ">
            <Li
              liText="Accesories"
              className=" text-white/70 hover:text-white py-4 px-5 hover:pl-[1.875rem]  w-full  border-b border-[#2D2D2D] group"
            >
              <div className="hidden  group-hover:flex absolute top-0 left-full z-10 bg-white h-full px-10 gap-x-12 ">
                <ul className="w-14 flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Phones
                  </p>
                  <DDli liText="phone 1" />
                  <DDli liText="phone 2" />
                  <DDli liText="phone 3" />
                  <DDli liText="phone 4" />
                  <DDli liText="phone 5" />
                  <DDli liText="phone 6" />
                  <DDli liText="phone 7" />
                </ul>
                <ul className="w-[5.5rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Computers
                  </p>
                  <DDli liText="Computer 1" />
                  <DDli liText="Computer 2" />
                  <DDli liText="Computer 3" />
                  <DDli liText="Computer 4" />
                  <DDli liText="Computer 5" />
                  <DDli liText="Computer 6" />
                  <DDli liText="Computer 7" />
                </ul>
                <ul className="w-[7.375rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Smart watches
                  </p>
                  <DDli liText="Smart watch 1" />
                  <DDli liText="Smart watch 2" />
                  <DDli liText="Smart watch 3" />
                  <DDli liText="Smart watch 4" />
                  <DDli liText="Smart watch 5" />
                  <DDli liText="Smart watch 6" />
                  <DDli liText="Smart watch 7" />
                </ul>
                <ul className="w-[4.375rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Cameras
                  </p>
                  <DDli liText="Camera 1" />
                  <DDli liText="Camera 2" />
                  <DDli liText="Camera 3" />
                  <DDli liText="Camera 4" />
                  <DDli liText="Camera 5" />
                  <DDli liText="Camera 6" />
                  <DDli liText="Camera 7" />
                </ul>
              </div>
            </Li>
            <Li
              liText="Furniture"
              className=" text-white/70 hover:text-white py-4 px-5 hover:pl-[1.875rem]  w-full  border-b border-[#2D2D2D] group"
            >
              <div className="hidden  group-hover:flex absolute top-0 left-full z-10 bg-white h-full px-10 gap-x-12 ">
                <ul className="w-14 flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Phones
                  </p>
                  <DDli liText="phone 1" />
                  <DDli liText="phone 2" />
                  <DDli liText="phone 3" />
                  <DDli liText="phone 4" />
                  <DDli liText="phone 5" />
                  <DDli liText="phone 6" />
                  <DDli liText="phone 7" />
                </ul>
                <ul className="w-[5.5rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Computers
                  </p>
                  <DDli liText="Computer 1" />
                  <DDli liText="Computer 2" />
                  <DDli liText="Computer 3" />
                  <DDli liText="Computer 4" />
                  <DDli liText="Computer 5" />
                  <DDli liText="Computer 6" />
                  <DDli liText="Computer 7" />
                </ul>
                <ul className="w-[7.375rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Smart watches
                  </p>
                  <DDli liText="Smart watch 1" />
                  <DDli liText="Smart watch 2" />
                  <DDli liText="Smart watch 3" />
                  <DDli liText="Smart watch 4" />
                  <DDli liText="Smart watch 5" />
                  <DDli liText="Smart watch 6" />
                  <DDli liText="Smart watch 7" />
                </ul>
                <ul className="w-[4.375rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Cameras
                  </p>
                  <DDli liText="Camera 1" />
                  <DDli liText="Camera 2" />
                  <DDli liText="Camera 3" />
                  <DDli liText="Camera 4" />
                  <DDli liText="Camera 5" />
                  <DDli liText="Camera 6" />
                  <DDli liText="Camera 7" />
                </ul>
                <ul className="w-[4.375rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Cameras
                  </p>
                  <DDli liText="Camera 1" />
                  <DDli liText="Camera 2" />
                  <DDli liText="Camera 3" />
                  <DDli liText="Camera 4" />
                  <DDli liText="Camera 5" />
                  <DDli liText="Camera 6" />
                  <DDli liText="Camera 7" />
                </ul>
              </div>
            </Li>
            <Li
              liText="Electronics"
              className=" text-white/70 hover:text-white py-4 px-5 hover:pl-[1.875rem]  w-full  border-b border-[#2D2D2D] group"
            >
              <div className="hidden  group-hover:flex absolute top-0 left-full z-10 bg-white h-full px-10 gap-x-12 ">
                <ul className="w-14 flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Phones
                  </p>
                  <DDli liText="phone 1" />
                  <DDli liText="phone 2" />
                  <DDli liText="phone 3" />
                  <DDli liText="phone 4" />
                  <DDli liText="phone 5" />
                  <DDli liText="phone 6" />
                  <DDli liText="phone 7" />
                </ul>
                <ul className="w-[5.5rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Computers
                  </p>
                  <DDli liText="Computer 1" />
                  <DDli liText="Computer 2" />
                  <DDli liText="Computer 3" />
                  <DDli liText="Computer 4" />
                  <DDli liText="Computer 5" />
                  <DDli liText="Computer 6" />
                  <DDli liText="Computer 7" />
                </ul>
                <ul className="w-[7.375rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Smart watches
                  </p>
                  <DDli liText="Smart watch 1" />
                  <DDli liText="Smart watch 2" />
                  <DDli liText="Smart watch 3" />
                  <DDli liText="Smart watch 4" />
                  <DDli liText="Smart watch 5" />
                  <DDli liText="Smart watch 6" />
                  <DDli liText="Smart watch 7" />
                </ul>
              </div>
            </Li>
            <Li
              liText="Clothes"
              className=" text-white/70 hover:text-white py-4 px-5 hover:pl-[1.875rem]  w-full  border-b border-[#2D2D2D] group"
            >
              <div className="hidden  group-hover:flex absolute top-0 left-full z-10 bg-white h-full px-10 gap-x-12 ">
                <ul className="w-14 flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Phones
                  </p>
                  <DDli liText="phone 1" />
                  <DDli liText="phone 2" />
                  <DDli liText="phone 3" />
                  <DDli liText="phone 4" />
                  <DDli liText="phone 5" />
                  <DDli liText="phone 6" />
                  <DDli liText="phone 7" />
                </ul>
                <ul className="w-[5.5rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Computers
                  </p>
                  <DDli liText="Computer 1" />
                  <DDli liText="Computer 2" />
                  <DDli liText="Computer 3" />
                  <DDli liText="Computer 4" />
                  <DDli liText="Computer 5" />
                  <DDli liText="Computer 6" />
                  <DDli liText="Computer 7" />
                </ul>
                <ul className="w-[7.375rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Smart watches
                  </p>
                  <DDli liText="Smart watch 1" />
                  <DDli liText="Smart watch 2" />
                  <DDli liText="Smart watch 3" />
                  <DDli liText="Smart watch 4" />
                  <DDli liText="Smart watch 5" />
                  <DDli liText="Smart watch 6" />
                  <DDli liText="Smart watch 7" />
                </ul>
                <ul className="w-[4.375rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Cameras
                  </p>
                  <DDli liText="Camera 1" />
                  <DDli liText="Camera 2" />
                  <DDli liText="Camera 3" />
                  <DDli liText="Camera 4" />
                  <DDli liText="Camera 5" />
                  <DDli liText="Camera 6" />
                  <DDli liText="Camera 7" />
                </ul>
              </div>
            </Li>
            <Li
              liText="Bags"
              className=" text-white/70 hover:text-white py-4 px-5 hover:pl-[1.875rem]  w-full  border-b border-[#2D2D2D] group"
            >
              <div className="hidden  group-hover:flex absolute top-0 left-full z-10 bg-white h-full px-10 gap-x-12 ">
                <ul className="w-14 flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Phones
                  </p>
                  <DDli liText="phone 1" />
                  <DDli liText="phone 2" />
                  <DDli liText="phone 3" />
                  <DDli liText="phone 4" />
                  <DDli liText="phone 5" />
                  <DDli liText="phone 6" />
                  <DDli liText="phone 7" />
                </ul>
                <ul className="w-[5.5rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Computers
                  </p>
                  <DDli liText="Computer 1" />
                  <DDli liText="Computer 2" />
                  <DDli liText="Computer 3" />
                  <DDli liText="Computer 4" />
                  <DDli liText="Computer 5" />
                  <DDli liText="Computer 6" />
                  <DDli liText="Computer 7" />
                </ul>
                <ul className="w-[7.375rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Smart watches
                  </p>
                  <DDli liText="Smart watch 1" />
                  <DDli liText="Smart watch 2" />
                  <DDli liText="Smart watch 3" />
                  <DDli liText="Smart watch 4" />
                  <DDli liText="Smart watch 5" />
                  <DDli liText="Smart watch 6" />
                  <DDli liText="Smart watch 7" />
                </ul>
                <ul className="w-[4.375rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Cameras
                  </p>
                  <DDli liText="Camera 1" />
                  <DDli liText="Camera 2" />
                  <DDli liText="Camera 3" />
                  <DDli liText="Camera 4" />
                  <DDli liText="Camera 5" />
                  <DDli liText="Camera 6" />
                  <DDli liText="Camera 7" />
                </ul>
              </div>
            </Li>
            <Li
              liText="Home appliances"
              className=" text-white/70 hover:text-white py-4 px-5 hover:pl-[1.875rem]  w-full  border-b border-[#2D2D2D] group"
            >
              <div className="hidden  group-hover:flex absolute top-0 left-full z-10 bg-white h-full px-10 gap-x-12 ">
                <ul className="w-14 flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Phones
                  </p>
                  <DDli liText="phone 1" />
                  <DDli liText="phone 2" />
                  <DDli liText="phone 3" />
                  <DDli liText="phone 4" />
                  <DDli liText="phone 5" />
                  <DDli liText="phone 6" />
                  <DDli liText="phone 7" />
                </ul>
                <ul className="w-[5.5rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Computers
                  </p>
                  <DDli liText="Computer 1" />
                  <DDli liText="Computer 2" />
                  <DDli liText="Computer 3" />
                  <DDli liText="Computer 4" />
                  <DDli liText="Computer 5" />
                  <DDli liText="Computer 6" />
                  <DDli liText="Computer 7" />
                </ul>
                <ul className="w-[7.375rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Smart watches
                  </p>
                  <DDli liText="Smart watch 1" />
                  <DDli liText="Smart watch 2" />
                  <DDli liText="Smart watch 3" />
                  <DDli liText="Smart watch 4" />
                  <DDli liText="Smart watch 5" />
                  <DDli liText="Smart watch 6" />
                  <DDli liText="Smart watch 7" />
                </ul>
                <ul className="w-[4.375rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Cameras
                  </p>
                  <DDli liText="Camera 1" />
                  <DDli liText="Camera 2" />
                  <DDli liText="Camera 3" />
                  <DDli liText="Camera 4" />
                  <DDli liText="Camera 5" />
                  <DDli liText="Camera 6" />
                  <DDli liText="Camera 7" />
                </ul>
                <ul className="w-[4.375rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-t-primary-active pb-2">
                    Cameras
                  </p>
                  <DDli liText="Camera 1" />
                  <DDli liText="Camera 2" />
                  <DDli liText="Camera 3" />
                  <DDli liText="Camera 4" />
                  <DDli liText="Camera 5" />
                  <DDli liText="Camera 6" />
                  <DDli liText="Camera 7" />
                </ul>
              </div>
            </Li>
          </ul>
        )}

        <div className="input relative w-full md:w-auto">
          <input
            className="py-4 px-5 w-full  md:w-[37.5rem] "
            placeholder="Search Products"
            type="search"
          />
          <FaSearch className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-5" />
        </div>
        <div className="account md:flex gap-x-4 md:gap-x-10 hidden">
          <div
            className="profile flex md:gap-x-2.5"
            onClick={() => setUser(!user)}
          >
            <FaUser />
            <FaCaretDown />
          </div>

          {user && (
            <div className="accountDDL absolute  z-10 top-full right-0 -translate-x-1/3">
              <div className="up ">
                <CustomBtn
                  btnText="My Account"
                  className="text-white bg-gray-400 w-[200px] py-4"
                />
              </div>
              <div className="down ">
                <CustomBtn btnText="Log Out" className=" w-[200px] py-4" />
              </div>
            </div>
          )}

          <div className="cart cursor-pointer" onClick={() => setCart(!cart)}>
            <FaShoppingCart />
          </div>
        </div>

        {cart && (
          <div className="cartDDL w-[22.5rem] bg-white absolute right-0 top-full z-10 ">
            <div className="up">
              <div className="item flex items-center justify-between p-5">
                <div className="img flex items-center gap-x-5 ">
                  <Image className=" w-20 h-20 bg-[#D8D8D8]" />
                  <div className="text flex flex-col">
                    <h1 className=" font-DM font-bold text-sm text-t-primary-active">
                      Black Smart Watch
                    </h1>
                    <p className=" font-DM font-bold text-sm text-t-primary-active">
                      $44.00
                    </p>
                  </div>
                </div>
                <MdClose />
              </div>
            </div>
            <div className="down p-5 flex flex-col gap-y-3">
              <div className="price font-DM leading-6 text-t-primary">
                <p>
                  Subtotal:
                  <span className="text-t-primary-active font-bold">
                    $44.00
                  </span>
                </p>
              </div>
              <div className="btn flex justify-center gap-x-5">
                <CustomBtn className=" py-4 " btnText="View Cart" />
                <CustomBtn className=" py-4 " btnText="Checkout" />
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default SearchBar;
