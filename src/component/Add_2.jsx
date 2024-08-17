import React from "react";
import Container from "./layer/Container";
import add2 from "/add_2/add_2.png";
import { useNavigate } from "react-router-dom";

const Add_2 = () => {

    let navigate = useNavigate()

  return (
    <Container className="pt-[5.625rem] ">
        <img src={add2} alt="" className="cursor-pointer"
         onClick={()=> navigate("/shop")} />
    </Container>
  );
};

export default Add_2;
