import React from "react";
import Container from "./layer/Container";
import { Link } from "react-router-dom";
import footerLogo from '/footerLogo.png';
import Image from "./layer/Image";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Li = ({ href, liText }) => {
  return (
    <Link to={href}>
      <li className="font-DM text-sm leading-6 text-[#6D6D6D]">{liText}</li>
    </Link>
  );
};

const Footer = () => {
  return (
    <Container className="pt-[6.625rem] ">
      <div className="main py-14 flex justify-between">
        <div className="left flex flex-col gap-y-16">
          <div className="up flex gap-x-36">
            <ul>
              <p className="font-DM font-bold leading-6 text-primary">MENU</p>
              <Li liText="Home" />
              <Li liText="Shop" />
              <Li liText="About" />
              <Li liText="Contact" />
              <Li liText="Journal" />
            </ul>
            <ul>
              <p className="font-DM font-bold leading-6 text-primary">SHOP</p>
              <Li liText="Category 1" />
              <Li liText="Category 2" />
              <Li liText="Category 3" />
              <Li liText="Category 4" />
              <Li liText="Category 5" />
            </ul>
            <ul>
              <p className="font-DM font-bold leading-6 text-primary">HELP</p>
              <Li liText="Privacy Policy" />
              <Li liText="Terms & Conditions" />
              <Li liText="Special E-shop" />
              <Li liText="Shipping" />
              <Li liText="Secure Payments" />
            </ul>
            <ul className="font-DM font-bold leading-7 text-primary">
              <Link>(052) 611-5711</Link>
              <br />
              <Link>company@domain.com</Link>
              <p className="font-DM text-sm leading-6 text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </ul>
          </div>
          <div className="down flex gap-x-6 text-[#373737]">
            <Link>
              <FaFacebookF/>
            </Link>
            <Link>
              <FaLinkedinIn/>
            </Link>
            <Link>
            <IoLogoInstagram/>
            </Link>
          </div>
        </div>
        <div className="right flex flex-col justify-between ">
          <div className="up">
            <Image src={footerLogo} href={'/'} />
          </div>
          <div className="down font-DM text-sm leading-6 text-[#6D6D6D]">
            <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
