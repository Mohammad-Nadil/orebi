import React from 'react';
import Container from "./layer/Container";
import { RiNumber2 } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
const Intro2 = () => {
  return (
    <Container className="font-DM text-[#6D6D6D] py-2 md:py-8 flex justify-between text-[9px] sm:text-xs md:text-base">
      <div className="flex items-center  md:gap-x-4">
        <RiNumber2 className="md:text-2xl text-primary" />
        <p>Two years warranty</p>
      </div>
      <div className="flex items-center gap-x-4">
        <FaTruck className="md:text-2xl text-primary" />
        <p>Free shipping</p>
      </div>
      <div className="flex items-center gap-x-4">
        <IoMdRefresh className="md:text-2xl text-primary" />
        <p>Return policy in 30 days</p>
      </div>
    </Container>
  )
}

export default Intro2
