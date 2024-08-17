import Container from "./layer/Container";
import React from "react";
import TitleHeader from "./layer/TitleHeader";
import ProductItem from "./layer/ProductItem";
import p1 from "/Arrivals/productItem5.png";
import p2 from "/Arrivals/productItem6.png";
import p3 from "/Arrivals/productItem7.png";
import p4 from "/Arrivals/productItem8.png";

const BestSellers = () => {
  return (
    <>
      <Container className="mt-32">
        <TitleHeader headerText="Best Sellers" />
      </Container>
      <Container className="flex gap-x-10 flex-wrap">
        <ProductItem
          src={p1}
          pName="Basic Crew Neck Tee"
          price="$44.00"
          color="black"
          offer="10%"
          offerEye={true}
        />
        <ProductItem
          src={p2}
          pName="Basic Crew Neck Tee"
          price="$44.00"
          color="black"
          offer="50%"
          offerEye={true}
        />
        <ProductItem
          src={p3}
          pName="Basic Crew Neck Tee"
          price="$44.00"
          color="black"
          offerEye={false}
        />
        <ProductItem
          src={p4}
          pName="Basic Crew Neck Tee"
          price="$44.00"
          color="black"
          offer="new"
          offerEye={true}
        />
      </Container>
    </>
  );
};

export default BestSellers;
