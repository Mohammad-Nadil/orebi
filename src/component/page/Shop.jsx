import React, { useState } from "react";
import BreadCrum from "../BreadCrum";
import Container from "../layer/Container";
import { IoGrid } from "react-icons/io5";
import { FaBarsProgress } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import Paginate from "../Paginate";

const Shop = () => {

  let [showNumber, setShowNumber] = useState(12)
  let numberUpdate = (element)=>{
    let numberCollect = Number(element.target.value)
    setShowNumber(numberCollect)
  }

  return (
    <>
      <Container>
        <BreadCrum />
        <div className="flex gap-10 justify-between pt-32">
          <div className="left w-[23.3125rem] bg-slate-400 "></div>
          <div className="right w-[74.375rem] flex flex-col gap-y-[3.75rem]">
            <div className="up flex justify-between ">
              <div className="icon flex gap-x-5">
                <div className=" w-9 h-9 bg-primary text-white grid place-content-center" >
                <IoGrid />
                </div>
                <div className=" w-9 h-9 bg text-secondary grid place-content-center" >
                <FaBarsProgress />
                </div>
              </div>
              <div className="short flex gap-x-10 font-DM leading-7 text-secondary">
                <div className=" flex items-center gap-x-9" >
                  <p>short by:</p>
                  <select className="border border-[#F0F0F0]" name="" id="">
                    <option value="popularity">popularity</option>
                    <option value="rating">rating</option>
                    <option value="price: low to high">price: low to high</option>
                    <option value="price: high to low">price: high to low</option>
                  </select>
                </div>
                <div className=" flex items-center gap-x-9" >
                  <p>short by:</p>
                  <select className="border border-[#F0F0F0]" onChange={numberUpdate} name="" id="">
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="48">48</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="down">
              <Paginate itemsPerPage={showNumber} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Shop;
