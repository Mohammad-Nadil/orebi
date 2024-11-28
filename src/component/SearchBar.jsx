import React, { useEffect, useState } from "react";
import Container from "./layer/Container";
import { FaBarsStaggered, FaCaretDown, FaUser } from "react-icons/fa6";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Li from "./layer/Li";
import DDli from "./layer/DDli";
import CustomBtn from "./layer/CustomBtn";
import Image from "./layer/Image";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";

const SearchBar = () => {
  let [show, setShow] = useState(false);
  let [cart, setCart] = useState(false);
  let [user, setUser] = useState(false);

  let [search, setSearch] = useState("");
  let [filterData, setFilterData] = useState([""]);

  let manageSearch = (e) => {
    setSearch(e.target.value);
  };

  let products = useSelector((state) => state.allCart.items);
  let cartItems = useSelector((state) => state.allCart.cart);

  // let [products, setProducts] = useState([]);
  // useEffect(() => {
  //   let getData = async () => {try{
  //     const response = await fetch("https://dummyjson.com/products");
  //     const data = await response.json();
  //     setProducts(data.products);}catch(error){
  //       console.error("Error fetching data", error);
  //     }
  //   };
  //   getData();
  // }, []);

  useEffect(() => {
    if (search == "") {
      setFilterData("");
    } else {
      let searchData = products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilterData(searchData);
    }
  }, [search, products]);

  return (
    <div className="bg-[#F5F5F3] relative ">
      <Container className="py-0 md:py-6  flex md:justify-between gap-x-3 px-3 md:px-0  items-center relative">
        <div
          onClick={() => setShow(!show)}
          className="category  flex md:gap-x-2.5 cursor-pointer"
        >
          <FaBarsStaggered />
          <p className="font-DM text-sm text-primary   hidden md:block">
            Shop by Category
          </p>
        </div>

        {show && (
          <ul className="catddm absolute top-full left-0 w-[16.4375rem] bg-primary  z-[9999] ">
            <Li
              liText="Accesories"
              className=" text-white/70 hover:text-white py-4 px-5 hover:pl-[1.875rem]  w-full  border-b border-[#2D2D2D] group"
            >
              <div className="hidden  group-hover:flex absolute top-0 left-full z-10 bg-white h-full px-10 gap-x-12 ">
                <ul className="w-14 flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-primary  pb-2">Phones</p>
                  <DDli liText="phone 1" />
                  <DDli liText="phone 2" />
                  <DDli liText="phone 3" />
                  <DDli liText="phone 4" />
                  <DDli liText="phone 5" />
                  <DDli liText="phone 6" />
                  <DDli liText="phone 7" />
                </ul>
                <ul className="w-[5.5rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-primary  pb-2">
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
                  <p className="font-DM font-bold text-primary  pb-2">
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
                  <p className="font-DM font-bold text-primary  pb-2">
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
                  <p className="font-DM font-bold text-primary  pb-2">Phones</p>
                  <DDli liText="phone 1" />
                  <DDli liText="phone 2" />
                  <DDli liText="phone 3" />
                  <DDli liText="phone 4" />
                  <DDli liText="phone 5" />
                  <DDli liText="phone 6" />
                  <DDli liText="phone 7" />
                </ul>
                <ul className="w-[5.5rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-primary  pb-2">
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
                  <p className="font-DM font-bold text-primary  pb-2">
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
                  <p className="font-DM font-bold text-primary  pb-2">
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
                  <p className="font-DM font-bold text-primary  pb-2">
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
                  <p className="font-DM font-bold text-primary  pb-2">Phones</p>
                  <DDli liText="phone 1" />
                  <DDli liText="phone 2" />
                  <DDli liText="phone 3" />
                  <DDli liText="phone 4" />
                  <DDli liText="phone 5" />
                  <DDli liText="phone 6" />
                  <DDli liText="phone 7" />
                </ul>
                <ul className="w-[5.5rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-primary  pb-2">
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
                  <p className="font-DM font-bold text-primary  pb-2">
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
                  <p className="font-DM font-bold text-primary  pb-2">Phones</p>
                  <DDli liText="phone 1" />
                  <DDli liText="phone 2" />
                  <DDli liText="phone 3" />
                  <DDli liText="phone 4" />
                  <DDli liText="phone 5" />
                  <DDli liText="phone 6" />
                  <DDli liText="phone 7" />
                </ul>
                <ul className="w-[5.5rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-primary  pb-2">
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
                  <p className="font-DM font-bold text-primary  pb-2">
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
                  <p className="font-DM font-bold text-primary  pb-2">
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
                  <p className="font-DM font-bold text-primary  pb-2">Phones</p>
                  <DDli liText="phone 1" />
                  <DDli liText="phone 2" />
                  <DDli liText="phone 3" />
                  <DDli liText="phone 4" />
                  <DDli liText="phone 5" />
                  <DDli liText="phone 6" />
                  <DDli liText="phone 7" />
                </ul>
                <ul className="w-[5.5rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-primary  pb-2">
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
                  <p className="font-DM font-bold text-primary  pb-2">
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
                  <p className="font-DM font-bold text-primary  pb-2">
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
                  <p className="font-DM font-bold text-primary  pb-2">Phones</p>
                  <DDli liText="phone 1" />
                  <DDli liText="phone 2" />
                  <DDli liText="phone 3" />
                  <DDli liText="phone 4" />
                  <DDli liText="phone 5" />
                  <DDli liText="phone 6" />
                  <DDli liText="phone 7" />
                </ul>
                <ul className="w-[5.5rem] flex flex-col gap-y-3 justify-center">
                  <p className="font-DM font-bold text-primary  pb-2">
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
                  <p className="font-DM font-bold text-primary  pb-2">
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
                  <p className="font-DM font-bold text-primary  pb-2">
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
                  <p className="font-DM font-bold text-primary  pb-2">
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
            onChange={manageSearch}
            className="py-4 px-5 w-full  md:w-[37.5rem] outline-none"
            placeholder="Search Products"
            value={search}
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
                <div key={item.id} className="item flex items-center justify-between p-5">
                  <div className="img flex items-center gap-x-5 ">
                    <Image  className=" w-20 h-20 bg-[#D8D8D8]" />
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
                <CustomBtn href="/cart" className=" py-4 " btnText="View Cart" />
                <CustomBtn className=" py-4 " btnText="Checkout" />
              </div>
            </div>
          </div>
        )}
      </Container>

      {filterData.length > 0 && (
        <ul className="absolute z-50 left-1/2 -translate-x-1/2 flex flex-col gap-y-3 w-[90vw] sm:w-[37.5rem] 1">
          {filterData.map((item, index) => (
            <li
              className="flex items-center bg-[#E5E7EB]/90 rounded-md px-3  gap-x-3"
              key={index}
            >
              <div>
                <img
                  className="h-24 w-24 "
                  src={item.thumbnail}
                  alt={item.images}
                />{" "}
              </div>
              <div className="flex justify-between w-full">
                <div>
                  <h2 className="font-DM font-semibold text-xl">
                    {item.title}
                  </h2>
                  <p className="font-DM text-lg flex justify-between ">
                    {item.brand}
                  </p>
                  <p className="font-DM font-bold">{item.price} $</p>
                </div>
                <div className="btn hidden sm:flex flex-col gap-3">
                  <button className="bg-orange-200 font-DM font-bold p-1 rounded-md text-secondary hover:text-primary hover:bg-orange-400 transition-all duration-300 ">
                    Add to Wishlist
                  </button>
                  <button className="bg-orange-200 font-DM font-bold p-1 rounded-md text-secondary hover:text-primary hover:bg-orange-400 transition-all duration-300 ">
                    See product
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
