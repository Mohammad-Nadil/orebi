import React, { useState } from "react";
import BreadCrum from "../BreadCrum";
import Container from "../layer/Container";
import { IoGrid } from "react-icons/io5";
import { FaBarsProgress } from "react-icons/fa6";
import {
  FaArrowUp,
  FaCaretDown,
  FaCaretUp,
  FaCircle,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import Paginate from "../Paginate";

const Shop = () => {
  let [showNumber, setShowNumber] = useState(12);
  let numberUpdate = (element) => {
    let numberCollect = Number(element.target.value);
    setShowNumber(numberCollect);
  };
  let [showCat, setShowCat] = useState(true);
  let [showColor, setShowColor] = useState(true);
  let [showBrand, setShowBrand] = useState(true);
  let [showPrice, setShowPrice] = useState(true);

  return (
    <>
      <Container>
        <BreadCrum />
        <div className="flex gap-10 justify-between pt-32">
          <div className="filterClass flex flex-col gap-5 w-[23.3125rem]  ">
            <div className="categoryFilter">
              <div
                onClick={() => setShowCat(!showCat)}
                className="font-DM font-bold text-xl text-primary flex justify-between items-center "
              >
                <p>Shop by Category</p>
                {showCat ? <FaMinus /> : <FaPlus />}
              </div>
              <ul
                className={` transition-all duration-300 font-DM leading-7 text-secondary flex flex-col gap-y-10 ${
                  showCat
                    ? "  h-auto visible opacity-100 py-9"
                    : " h-0 invisible opacity-0 "
                } `}
              >
                <li>Category 1</li>
                <li>Category 2</li>
                <li>Category 3</li>
                <li>Category 4</li>
                <li>Category 5</li>
              </ul>
            </div>
            <div className="colorFilter">
              <div
                onClick={() => setShowColor(!showColor)}
                className="font-DM font-bold text-xl text-primary flex justify-between items-center "
              >
                <p>Shop by Color</p>
                {showColor ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              <ul
                className={` transition-all duration-300 font-DM leading-7 text-secondary flex flex-col gap-y-10 ${
                  showColor
                    ? "  h-auto visible opacity-100 py-9"
                    : " h-0 invisible opacity-0 "
                } `}
              >
                <li className="flex items-center gap-x-3">
                  <FaCircle className="text-black" />
                  <p>Color 1</p>
                </li>
                <li className="flex items-center gap-x-3">
                  <FaCircle className="text-[#FF8686]" />
                  <p>Color 2</p>
                </li>
                <li className="flex items-center gap-x-3">
                  <FaCircle className="text-[#7ED321]" />
                  <p>Color 3</p>
                </li>
                <li className="flex items-center gap-x-3">
                  <FaCircle className="text-[#B6B6B6]" />
                  <p>Color 4</p>
                </li>
                <li className="flex items-center gap-x-3">
                  <FaCircle className="text-[#15CBA5]" />
                  <p>Color 5</p>
                </li>
              </ul>
            </div>
            <div className="brandFilter">
              <div
                onClick={() => setShowBrand(!showBrand)}
                className="font-DM font-bold text-xl text-primary flex justify-between items-center "
              >
                <p>Shop by Brand</p>
                {showBrand ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              <ul
                className={` transition-all duration-300 font-DM leading-7 text-secondary flex flex-col gap-y-10 ${
                  showBrand
                    ? "  h-auto visible opacity-100 py-9"
                    : " h-0 invisible opacity-0 "
                } `}
              >
                <li>Brand 1</li>
                <li>Brand 2</li>
                <li>Brand 3</li>
                <li>Brand 4</li>
                <li>Brand 5</li>
              </ul>
            </div>
            <div className="colorFilter">
              <div
                onClick={() => setShowPrice(!showPrice)}
                className="font-DM font-bold text-xl text-primary flex justify-between items-center "
              >
                <p>Shop by Price</p>
                {showPrice ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              <ul
                className={` transition-all duration-300 font-DM leading-7 text-secondary flex flex-col gap-y-10 ${
                  showPrice
                    ? "  h-auto visible opacity-100 py-9"
                    : " h-0 invisible opacity-0 "
                } `}
              >
                <li>$0.00 - $9.99</li>
                <li>$10.00 - $19.99</li>
                <li>$20.00 - $29.99</li>
                <li>$30.00 - $39.99</li>
                <li>$40.00 - $49.99</li>
              </ul>
            </div>
          </div>
          <div className="right w-[74.375rem] flex flex-col gap-y-[3.75rem]">
            <div className="up flex justify-between ">
              <div className="icon flex gap-x-5">
                <div className=" w-9 h-9 bg-primary text-white grid place-content-center">
                  <IoGrid />
                </div>
                <div className=" w-9 h-9 bg text-secondary grid place-content-center">
                  <FaBarsProgress />
                </div>
              </div>
              <div className="short flex gap-x-10 font-DM leading-7 text-secondary">
                <div className=" flex items-center gap-x-9">
                  <p>short by:</p>
                  <select className="border border-[#F0F0F0]" name="" id="">
                    <option value="popularity">popularity</option>
                    <option value="rating">rating</option>
                    <option value="price: low to high">
                      price: low to high
                    </option>
                    <option value="price: high to low">
                      price: high to low
                    </option>
                  </select>
                </div>
                <div className=" flex items-center gap-x-9">
                  <p>short by:</p>
                  <select
                    className="border border-[#F0F0F0]"
                    onChange={numberUpdate}
                    name=""
                    id=""
                  >
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
