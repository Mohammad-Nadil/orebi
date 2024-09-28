import Container from "./layer/Container";
import React, { useEffect, useState } from "react";
import TitleHeader from "./layer/TitleHeader";
import ProductItem from "./layer/ProductItem";
import axios from "axios";

const BestSellers = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setItems(response.data.products);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Container className=" pt-5 sm:pt-10 lg:pt-32">
        <TitleHeader headerText="Best Sellers" />
      </Container>
      <Container className=" pt-2 flex justify-between 2xl:gap-x-10 gap-y-5 flex-wrap">
        {items.filter(( data , index ) => index < 4 ).map((item, i) => (
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

export default BestSellers;
