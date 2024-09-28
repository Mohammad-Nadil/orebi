import Container from "./layer/Container";
import React, { useEffect, useState } from "react";
import TitleHeader from "./layer/TitleHeader";
import ProductItem from "./layer/ProductItem";
import axios from "axios";
const SpecialOffers = () => {
  let [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const allProducts = await axios.get("https://dummyjson.com/products");
        setItems(allProducts.data.products);
      } catch (error) {
        console.error("error in fetching api", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Container className=" pt-5 sm:pt-10 lg:pt-32">
        <TitleHeader headerText="Special Offers" />
      </Container>
      <Container className="
      pt-2 flex justify-between 2xl:gap-x-10 gap-y-5 flex-wrap">
        {items.filter(( data , index )=> index > 12 && index <= 16  ).map((item, i) => (
          <ProductItem
            src={item.thumbnail}
            pName={item.title}
            price={item.price}
            brand={item.brand}
            offer={item.discountPercentage}
            offerEye={true}
            key={i}
          />
        ))}
      </Container>
    </>
  );
};

export default SpecialOffers;
