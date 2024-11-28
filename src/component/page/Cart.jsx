import React from "react";
import BreadCrum from "../BreadCrum";
import Container from "../layer/Container";
import QuantitySelector from "../layer/QuantitySelector";
import SizeSelector from "../layer/SizeSelector";
import CustomBtn from "../layer/CustomBtn";
import { IoCloseSharp } from "react-icons/io5";
import { Image } from "antd";
import cartPic from "../../assets/cart_image.jpg";
import { useSelector } from "react-redux";

const Cart = () => {
  let items = useSelector((state) => state.allCart.cart);
  return (
    <Container className="flex flex-col gap-y-40 py-32">
      <BreadCrum />
      <div className="main font-DM flex flex-col gap-y-14">
        <div className="products">
          <div className="head grid grid-cols-5 bg-[#F5F5F3] p-5 font-bold text-primary">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Size</p>
            <p>Total</p>
          </div>
          <div className="list">
            {items.map((item) => (
              <div className=" py-7 grid grid-cols-5 border border-[#F0F0F0]">
                <div className="img flex items-center justify-between px-4">
                  <IoCloseSharp />
                  <Image
                    width={"100px"}
                    className="aspect-square"
                    src={item.thumbnail}
                  />
                  <p className="font-bold text-primary">{item.title}</p>
                </div>
                <div className="price flex items-center">
                  <p className="font-bold text-primary text-xl">${item.price}</p>
                </div>
                <div className="quantity flex items-center">
                  <QuantitySelector />
                </div>
                <div className="size flex items-center">
                  <SizeSelector className="gap-x-5" />
                </div>
                <div className="total flex items-center">
                  <p className="font-bold text-primary text-xl">$44.00</p>
                </div>
              </div>
            ))}
          </div>
          <div className="coupon  flex justify-end px-10 py-5">
            <div className="code flex items-center w-2/6  ">
              <input
                className=" p-2 border outline-none"
                type="text"
                name=""
                id=""
                placeholder="Coupon Code"
              />
              <div className="font-bold border p-2 bg-primary hover:bg-secondary duration-300 text-white text-sm">
                Apply coupon{" "}
              </div>
            </div>
            <div className="btn w-1/6  grid place-content-center ">
              <button className="border hover:bg-secondary hover:text-white duration-300 py-2 px-4  rounded-md">
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
                389.99 $
              </td>
            </tr>
            <tr>
              <td className="border border-[#F0F0F0] w-80 py-3 px-5 font-bold ">
                Total
              </td>
              <td className="border border-[#F0F0F0] w-80 py-3 px-5 text-secondary ">
                389.99 $
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
