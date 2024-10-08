import React from "react";
import Container from "../component/layer/Container";
import ad1 from "/SaleOffer/Ad1.png";
import ad2 from "/SaleOffer/Ad2.png";
import ad3 from "/SaleOffer/Ad3.png";
import Image from "./layer/Image";
import { useNavigate } from "react-router-dom";

const SaleOffer = () => {
  let navigate = useNavigate();

  return (
    <Container className="pt-4 sm:pt-10 lg:pt-[10.875rem]">
      <div className="main h-auto 2xl:h-[48.75rem]  grid gap-3 md:gap-10  sm:grid-cols-2 sm:grid-rows-2">
        <img
          src={ad1}
          className="object-cover h-full w-full row-span-2 cursor-pointer"
          onClick={() => navigate("/shop")}
        />
        <img
          src={ad2}
          className="object-cover h-full w-full cursor-pointer"
          onClick={() => navigate("/about")}
        />
        <img
          src={ad3}
          className="object-cover h-full w-full cursor-pointer"
          onClick={() => navigate("/contacts")}
        />
      </div>
    </Container>
  );
};
``;
export default SaleOffer;
