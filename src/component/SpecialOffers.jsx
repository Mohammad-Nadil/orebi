import Container from "./layer/Container";
import React, { useEffect, useState } from "react";
import TitleHeader from "./layer/TitleHeader";
import ProductItem from "./layer/ProductItem";
import axios from "axios";
import products from "../products";
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from '../features/cartSlice'
const SpecialOffers = () => {
  let [show, setShow] = useState(4);
  let items = useSelector((state)=> state.allCart.items)
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
  
  // let [items, setItems] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const allProducts = await axios.get("https://dummyjson.com/products");
  //       setItems(allProducts.data.products);
  //     } catch (error) {
  //       console.error("error in fetching api", error);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <>
      <Container className=" pt-5 sm:pt-10 lg:pt-32">
        <TitleHeader headerText="Special Offers" />
      </Container>
      <Container className="
      pt-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-10  gap-5 ">
        {items.filter(( data , index )=> index < show  ).map((item, i) => (
          <ProductItem
            src={item.thumbnail}
            pName={item.title}
            price={item.price}
            brand={item.brand}
            offer={item.discountPercentage}
            offerEye={true}
            key={i}
            id={item.id}
            onClick={()=> dispatch(addToCart(item))}
          />
        ))}
      </Container>
    </>
  );
};

export default SpecialOffers;
