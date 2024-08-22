import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Container from "./layer/Container";
import TitleHeader from "./layer/TitleHeader";

const BreadCrum = () => {
  return (
    <div>
      <Container className="flex flex-col gap-y-3">
        <TitleHeader className="capitalize !text-5xl" headerText={`${window.location.pathname.split('/')[1]} `} />
        <p className="font-DM text-xs text-secondary flex items-center gap-x-2 capitalize">
          home <FaAngleRight />
          {window.location.pathname.split('/')[1]}
        </p>
      </Container>
    </div>
  );
};

export default BreadCrum;
