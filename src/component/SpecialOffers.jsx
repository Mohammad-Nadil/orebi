import Container from "./layer/Container";
import React from "react";
import TitleHeader from "./layer/TitleHeader";
import ProductItem from "./layer/ProductItem";
import p1 from "/Arrivals/productItem9.png";
import p2 from "/Arrivals/productItem10.png";
import p3 from "/Arrivals/productItem11.png";
import p4 from "/Arrivals/productItem12.png";

const SpecialOffers = () => {
  return (
    <>
      <Container className=" pt-8 sm:pt-10 lg:pt-32">
        <TitleHeader headerText="Special Offers" />
      </Container>
      <Container className="flex justify-between md:gap-x-10 flex-wrap">
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
          offerEye={false}
        />
        <ProductItem
          src={p3}
          pName="Basic Crew Neck Tee"
          price="$44.00"
          color="black"
          offer="50%"
          offerEye={true}
        />
        <ProductItem
          src={p4}
          pName="Basic Crew Neck Tee"
          price="$44.00"
          color="black"
          offer="new"
          offerEye={true}
          // className="hidden sm:block"
        />
      </Container>
    </>
  );
};

export default SpecialOffers;
