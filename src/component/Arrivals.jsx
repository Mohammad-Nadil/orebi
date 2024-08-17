import Container from "./layer/Container";
import React from "react";
import TitleHeader from "./layer/TitleHeader";
import ProductItem from "./layer/ProductItem";
import p1 from "/Arrivals/productItem1.png";
import p2 from "/Arrivals/productItem2.png";
import p3 from "/Arrivals/productItem3.png";
import p4 from "/Arrivals/productItem4.png";

const Arrivals = () => {
  return (
    <>
      <Container className="mt-32">
        <TitleHeader headerText="New Arrivals" />
      </Container>
      <Container className="flex gap-x-10 flex-wrap">
        <ProductItem
          src={p1}
          pName="Basic Crew Neck Tee"
          price="$44.00"
          color="black"
        />
        <ProductItem
          src={p2}
          pName="Basic Crew Neck Tee"
          price="$44.00"
          color="black"
        />
        <ProductItem
          src={p3}
          pName="Basic Crew Neck Tee"
          price="$44.00"
          color="black"
        />
        <ProductItem
          src={p4}
          pName="Basic Crew Neck Tee"
          price="$44.00"
          color="black"
        />
      </Container>
    </>
  );
};

export default Arrivals;
