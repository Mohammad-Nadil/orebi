import React, { useEffect, useState } from "react";
import BreadCrum from "../BreadCrum";
import Container from "../layer/Container";
import { IoGrid } from "react-icons/io5";
import { FaBarsProgress } from "react-icons/fa6";
import { FaCaretDown, FaCaretUp, FaMinus, FaPlus } from "react-icons/fa";
import Paginate from "../Paginate";
import { useDispatch, useSelector } from "react-redux";
import { toggleView } from "../../features/viewSlice";
import {
  resetFilters,
  setBrand,
  setCategory,
  setPriceRange,
} from "../../features/filterSlice";
import products from "../../products";
import { use } from "react";

const Shop = () => {
  let dispatch = useDispatch();
  let isListView = useSelector((state) => state.view.isListView);
  let filters = useSelector((state) => state.filters);

  const filteredProducts = products.filter((product) => {
    return (
      (filters.searchQuery === "" ||
        product.title
          .toLowerCase()
          .includes(filters.searchQuery.toLowerCase())) &&
      (filters.brand === "" || product.brand === filters.brand) &&
      (filters.category === "" || product.category === filters.category) &&
      (filters.color === "" || product.color === filters.color) &&
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1]
    );
  });

  const categories = [
    ...new Set(
      useSelector((state) => state.allCart.items).map(
        (product) => product.category
      )
    ),
  ];
  const brand = [
    ...new Set(
      useSelector((state) => state.allCart.items).map(
        (product) => product.brand
      )
    ),
  ];

  const priceRanges = [
    { label: "$0 - $10", range: [0, 10] },
    { label: "$10 - $20", range: [10, 20] },
    { label: "$20 - $30", range: [20, 30] },
    { label: "$30 - $40", range: [30, 40] },
  ];

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };

  const handleBrandChange = (brand) => {
    dispatch(setBrand(brand));
  };

  const handlePriceChange = (range) => {
    dispatch(setPriceRange(range));
  };

  let [showNumber, setShowNumber] = useState(12);
  let numberUpdate = (element) => {
    let numberCollect = Number(element.target.value);
    setShowNumber(numberCollect);
  };

  useEffect(() => {
    dispatch(resetFilters());
    if (window.innerWidth < 640) {
      setShowCat(false);
      setShowBrand(false);
      setShowPrice(false);
    } else {
      setShowCat(true);
      setShowBrand(true);
      setShowPrice(true);
    }
  }, []);

  const handleCategoryToggle = () => {
    if (window.innerWidth < 640) {
      setShowCat(!showCat);
      setShowBrand(false);
      setShowPrice(false);
    } else {
      setShowCat(true);
    }
  };

  const handleBrandToggle = () => {
    if (window.innerWidth < 640) {
      setShowBrand(!showBrand);
      setShowCat(false);
      setShowPrice(false);
    } else {
      setShowBrand(true);
    }
  };

  const handlePriceToggle = () => {
    if (window.innerWidth < 640) {
      setShowPrice(!showPrice);
      setShowCat(false);
      setShowBrand(false);
    } else {
      setShowPrice(true);
    }
  };

  let [showCat, setShowCat] = useState(true);
  let [showBrand, setShowBrand] = useState(true);
  let [showPrice, setShowPrice] = useState(true);

  return (
    <>
      <Container className="overflow-hidden">
        <BreadCrum headerText={"Shop"} />
        <div className="flex flex-col sm:flex-row gap-y-3 sm:gap-10 justify-between pt-4 md:pt-16 ">
          <div className="filterClass w-full grid grid-cols-4  sm:w-1/4 md:w-1/4 sm:flex flex-col gap-5   ">
            <div className="categoryFilter">
              <div
                onClick={handleCategoryToggle}
                className=" relative font-DM font-bold text-primary flex justify-between items-center text-sm md:text-xl"
              >
                <p className="hidden md:flex">Shop by Category</p>
                <p className="md:hidden"> Category</p>
                {showCat ? <FaMinus /> : <FaPlus />}
              </div>
              <ul
                className={`absolute z-[99999] sm:static w-56 sm:w-full transition-all duration-500 font-DM leading-7 text-secondary flex flex-col gap-y-0.5 bg-white border sm:border-transparent px-2 sm:px-0 ${
                  showCat
                    ? "  max-h-96 visible opacity-100 py-1"
                    : " max-h-0 invisible opacity-0 "
                } `}
              >
                {categories.map((category, index) => (
                  <li key={index} className={`flex items-center gap-x-3 py-1`}>
                    <input
                      type="radio"
                      id={`category-${index}`}
                      name="category-selection"
                      onChange={() => handleCategoryChange(category)}
                      checked={filters.category === category}
                    />
                    <label
                      htmlFor={`category-${index}`}
                      className="flex items-center gap-x-3 cursor-pointer"
                    >
                      <p>{category}</p>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="brandFilter">
              <div
                onClick={handleBrandToggle}
                className=" relative font-DM font-bold text-primary flex justify-between items-center text-sm  md:text-xl"
              >
                <p className="hidden md:flex">Shop by Brand</p>
                <p className="md:hidden">Brand</p>
                {showBrand ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              <ul
                className={`absolute z-[99999] sm:static w-56 sm:w-full right-0 transition-all duration-500 font-DM leading-7 text-secondary flex flex-col gap-y-0.5 bg-white border sm:border-transparent px-2 sm:px-0 ${
                  showBrand
                    ? "  max-h-[200vh] visible opacity-100 py-1"
                    : " max-h-0 invisible opacity-0 "
                } `}
              >
                {brand.map((brand, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-x-3 py-1 ${
                      !brand == "" ? "" : "hidden"
                    } `}
                  >
                    <input
                      type="radio"
                      id={`brand-${index}`}
                      name="brand-selection"
                      onChange={() => handleBrandChange(brand)}
                      checked={filters.brand === brand}
                    />
                    <label
                      htmlFor={`brand-${index}`}
                      className="flex items-center gap-x-3 cursor-pointer "
                    >
                      <p>{brand}</p>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="priceFilter">
              <div
                onClick={handlePriceToggle}
                className="relative font-DM font-bold text-primary flex justify-between items-center text-sm md:text-xl "
              >
                <p className="hidden md:flex">Shop by Price</p>
                <p className="md:hidden">Price</p>
                {showPrice ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              <ul
                className={`absolute z-[99999] sm:static w-56 sm:w-full left-1/2 transition-all duration-500 font-DM leading-7 text-secondary flex flex-col gap-y-0.5 bg-white border sm:border-transparent px-2 sm:px-0${
                  showPrice
                    ? "  max-h-96 visible opacity-100 py-1"
                    : " max-h-0 invisible opacity-0 "
                } `}
              >
                {priceRanges.map((range, index) => (
                  <li key={index} className="w-full flex items-center">
                    <label className="flex items-center w-full gap-x-10 py-1">
                      <input
                        type="radio"
                        name="price"
                        onChange={() => handlePriceChange(range.range)}
                        checked={
                          filters.priceRange[0] === range.range[0] &&
                          filters.priceRange[1] === range.range[1]
                        }
                      />
                      {range.label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="btn grid place-content-center">
              <button
                className=" bg-secondary hover:bg-primary duration-300 text-white py0.5 px-2 md:py-3 md:px-5 text-[10px] text-nowrap sm:text-sm md:text-base"
                onClick={() => dispatch(resetFilters())}
              >
                Reset Filter
              </button>
            </div>
          </div>
          <div className="right w-full sm:w-3/4 flex flex-col gap-y-5 mdgap-y-10 xl:gap-y-14">
            <div className="up flex justify-between gap-x-3 ">
              <div
                onClick={() => dispatch(toggleView())}
                className="icon hidden sm:flex gap-x-5 cursor-pointer"
              >
                <div
                  className={`w-9 h-9 grid place-content-center rounded ${
                    !isListView
                      ? "bg-primary text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  <IoGrid />
                </div>
                <div
                  className={`w-9 h-9 grid place-content-center rounded ${
                    isListView
                      ? "bg-secondary text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  <FaBarsProgress />
                </div>
              </div>
              <div className="short flex justify-between w-full gap-x-1 sm:gap-x-3 md:gap-x-10 font-DM leading-7 text-secondary">
                <div className=" flex flex-row items-center gap-x-1 sm:gap-x-3 md:gap-x-9 text-sm sm:text-base">
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
                <div className=" flex flex-row items-center gap-x-1 sm:gap-x-3 md:gap-x-9 text-sm sm:">
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
            <div className="down w-full ">
              <Paginate
                filteredProducts={filteredProducts}
                itemsPerPage={showNumber}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Shop;
