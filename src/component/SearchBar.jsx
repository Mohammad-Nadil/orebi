import React, { useEffect, useState } from "react";
import Container from "./layer/Container";
import { FaBarsStaggered, FaCaretDown, FaUser } from "react-icons/fa6";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Li from "./layer/Li";
import DDli from "./layer/DDli";
import CustomBtn from "./layer/CustomBtn";
import Image from "./layer/Image";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setSearchQuery } from "../features/filterSlice";
import CategoryMenu from "./layer/CategoryMenu";

const SearchBar = () => {
  let [show, setShow] = useState(false);
  let [cart, setCart] = useState(false);
  let [user, setUser] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  let [search, setSearch] = useState("");
  let [filterData, setFilterData] = useState([""]);

  let products = useSelector((state) => state.allCart.items);
  let cartItems = useSelector((state) => state.allCart.cart);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    dispatch(setSearchQuery(value));

    if (value === "") {
      setFilterData([]);
      setIsVisible(false); // Hide the dropdown when input is empty
    } else {
      // Filter products based on the search query
      const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilterData(filteredProducts);
      setIsVisible(true);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (filterData.length > 0) {
        navigate("/product");
      }
      setIsVisible(false);
    }
  };

  // Filter products on search value change
  useEffect(() => {
    if (search === "") {
      setFilterData([]);
      setIsVisible(false); // Hide the dropdown when input is empty
    }
  }, [search]);
  return (
    <div className="bg-white relative ">
      <Container className="py-0 md:py-6  flex md:justify-between gap-x-3 px-3 md:px-0  items-center relative">
        <div
          onClick={() => setShow(!show)}
          className="category hidden lg:flex md:gap-x-2.5 cursor-pointer"
        >
          <FaBarsStaggered />
          <p className="font-DM text-sm text-primary   hidden md:block">
            Shop by Category
          </p>
        </div>

        {show && <CategoryMenu />}

        <div className="input relative w-full md:w-auto">
          <input
            className="py-4 px-5 w-full  md:w-[37.5rem] outline-none"
            placeholder="Search Products"
            value={search}
            onKeyDown={handleKeyPress}
            onChange={handleSearchChange}
          />
          <Link
            to={"/product"}
            className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-5 p-3 "
          >
            <FaSearch />
          </Link>
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
                  className="text-white  !bg-[#979797] w-[200px] py-4"
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
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="item flex items-center justify-between p-5"
                >
                  <div className="img flex items-center gap-x-5 ">
                    <Image src={item.thumbnail}  className=" w-20 h-20" />
                    <div className="text flex flex-col">
                      <h1 className=" font-DM font-bold text-sm text-primary ">
                        {item.title}
                      </h1>
                      <p className=" font-DM font-bold text-sm text-primary ">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <MdClose />
                </div>
              ))}
            </div>
            <div className="down p-5 flex flex-col gap-y-3">
              <div className="price font-DM leading-6 text-t-primary">
                <p>
                  Subtotal:
                  <span className="text-primary  font-bold">$44.00</span>
                </p>
              </div>
              <div className="btn flex justify-center gap-x-5">
                <CustomBtn
                  href="/cart"
                  className=" py-4 "
                  btnText="View Cart"
                />
                <CustomBtn className=" py-4 " btnText="Checkout" />
              </div>
            </div>
          </div>
        )}
      </Container>

      {isVisible && filterData.length > 0 && (
        <ul className="absolute z-50 left-1/2 -translate-x-1/2 flex flex-col w-[90vw] sm:w-[37.5rem]  ">
          {filterData.map((item, index) => (
            <Link key={index} to={`product/details/${item.id}`}>
              <li
                className="flex items-center bg-[#E5E7EB]/90 rounded px-3 py-2  gap-x-3 border border-secondary/20 hover:border-secondary duration-300 cursor-pointer"
                key={index}
                onClick={() => setIsVisible(false)}
              >
                <div className=" w-full">
                  <div className="flex gap-10 items-center">
                    <h2 className="font-DM font-semibold text-xl">
                      {item.title}
                    </h2>
                    <p className="font-DM text-lg flex justify-between ">
                      {item.brand}
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
