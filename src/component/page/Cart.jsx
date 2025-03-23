import React from "react";
import BreadCrum from "../BreadCrum";
import Container from "../layer/Container";
import SizeSelector from "../layer/SizeSelector";
import { IoCloseSharp } from "react-icons/io5";
import { Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../features/cartSlice";

const Cart = () => {
  let items = useSelector((state) => state.allCart.cart);
  let total = useSelector((state) => state.allCart.total);
  let dispatch = useDispatch();
  return (
    <Container className="flex flex-col gap-y-5 sm:gap-y-10 2xl:gap-y-40 py-5 2xl:py-32">
      <BreadCrum />
      <div className="main font-DM flex flex-col gap-y-14">
        <div className="products">
          <div className="head grid grid-cols-3 sm:grid-cols-5 bg-[#F5F5F3] p-5 font-bold text-primary">
            <p className=" hidden sm:flex">Product</p>
            <p className=" hidden sm:flex">Price</p>
            <p className=" hidden sm:flex">Quantity</p>
            <p className=" hidden sm:flex">Size</p>
            <p className=" hidden sm:flex">Total</p>
            <p className="sm:hidden text-nowrap">Product Details</p>
          </div>
          <div className="list ">
            {items.map((item) => (
              <div className=" w-full  py-7 flex flex-col  gap-y-1 sm:grid grid-cols-1 grid-rows-3 sm:grid-cols-4 sm:grid-rows-2 xl:grid-cols-5 border border-[#F0F0F0]">
                <div className="img w-full flex sm:w-auto xl:flex xl:items-center justify-between xl:px-4  sm:col-span-4 xl:col-span-1 sm:grid grid-cols-4">
                  <div className="close flex items-center justify-center cursor-pointer" onClick={() => dispatch(removeFromCart(item))}>
                    <IoCloseSharp className=" text-xl" />
                  </div>
                  <Image
                    width={"100px"}
                    className="aspect-square col-span-1 "
                    src={item.thumbnail}
                  />
                  <p className="font-bold text-primary  sm:col-span-2">
                    {item.title}
                  </p>
                </div>
                <div className="price flex items-center justify-between px-2 sm:px-0 w-full">
                  <p className="sm:hidden text-xl">Price :</p>
                  <p className="font-bold text-primary text-xl">
                    ${item.price}
                  </p>
                </div>
                <div className="quantity flex items-center justify-between px-2 sm:px-0 w-full ">
                  <p className="sm:hidden text-xl">Quantity :</p>
                  <div className="flex  px-5 gap-x-8 items-center font-DM text-secondary ">
                    <span
                      className=" p-1"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      <FaMinus />
                    </span>
                    <span>{item.quantity}</span>
                    <span
                      className=" p-1"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      <FaPlus />
                    </span>
                  </div>
                </div>
                <div className="size flex items-center justify-between w-full px-2 sm:px-0">
                  <p className="sm:hidden text-xl">size :</p>
                  <SizeSelector className="gap-x-1 sm:gap-x-5" />
                </div>
                <div className="total flex items-center justify-between w-full px-2 sm:px-0">
                  <p className="sm:hidden text-xl">Total :</p>
                  <p className="font-bold text-primary text-xl">
                    {(item.quantity * item.price).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="coupon border  flex flex-col sm:flex-wrap-reverse justify-end sm:px-10 gap-x-5 py-5">
            <div className="code flex items-center lg:w-2/6  ">
              <input
                className=" p-2 border outline-none w-3/4"
                type="text"
                name=""
                id=""
                placeholder="Coupon Code"
              />
              <div className="font-bold border p-2 bg-primary hover:bg-secondary duration-300 text-white text-sm text-nowrap">
                Apply coupon{" "}
              </div>
            </div>
            <div className="btn lg:w-1/6  grid sm:place-content-center ">
              <button className="border hover:bg-secondary hover:text-white duration-300 py-2 px-4  rounded-md text-nowrap">
                Update cart
              </button>
            </div>
          </div>
        </div>
        <div className="total flex flex-col gap-y-7 items-end ">
          <p className="font-bold text-xl text-primary">Cart totals</p>
          <table>
            <tr>
              <td className="border border-[#F0F0F0] w-80 py-3 px-5 font-bold ">
                Subtotal
              </td>
              <td className="border border-[#F0F0F0] w-80 py-3 px-5 text-secondary ">
                {total.toFixed(2)} $
              </td>
            </tr>
            <tr>
              <td className="border border-[#F0F0F0] w-80 py-3 px-5 font-bold ">
                Total
              </td>
              <td className="border border-[#F0F0F0] w-80 py-3 px-5 text-secondary ">
                {total.toFixed(2)} $
              </td>
            </tr>
          </table>
          <button className="bg-primary text-white py-4 px-6 hover:bg-secondary duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
