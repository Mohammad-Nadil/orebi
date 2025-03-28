import Container from "./layer/Container";
import React, { useEffect, useState } from "react";
import TitleHeader from "./layer/TitleHeader";
import ProductItem from "./layer/ProductItem";
import axios from "axios";
import products from "../products";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

const BestSellers = () => {
  let items = useSelector((state)=> state.allCart.items)
  let [show, setShow] = useState(4);
  let dispatch = useDispatch()
  
  useEffect(() => {
    function widthSize() {
      if (window.innerWidth >= (1563)) {
        setShow(4);
      } 
      else if (window.innerWidth >= 1280) {
        setShow(4);
      }
      else if (window.innerWidth >= 1024) {
        setShow(3);
      }
      else if (window.innerWidth >= 768) {
        setShow(3);
      }
      else if (window.innerWidth >= 640) {
        setShow(2);
      }
      else{
        setShow(2);
      }
    }
    widthSize();
    window.addEventListener("resize", widthSize);
  }, []);
  
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get("https://dummyjson.com/products");
  //       setItems(response.data.products);
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <>
      <Container className=" pt-5 sm:pt-10 lg:pt-32">
        <TitleHeader headerText="Best Sellers" />
      </Container>
      <Container className=" pt-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-10  gap-5  ">
        {items
          .filter((data, index) => index < show).map((item, i) => (
            <ProductItem
              src={item.thumbnail}
              pName={item.title}
              price={item.price}
              brand={item.brand}
              offer={item.discountPercentage}
              offerEye={true}
              key={i}
              id={item.id}
              product={item}
            />
          ))}
      </Container>
    </>
  );
};

export default BestSellers;
