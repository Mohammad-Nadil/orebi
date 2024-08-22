import React from "react";
import Container from "../layer/Container";
import Input from "../layer/Input";
import TitleHeader from "../layer/TitleHeader";
import BreadCrum from "../BreadCrum";
import InpPasswd from "../layer/InpPasswd";
import CustomBtn from "../layer/CustomBtn";

const Login = () => {
  return (
    <div >
      <Container className="border-b border-[#D8D8D8]">
        <BreadCrum />
        <p className="font-DM leading-8 text-secondary max-w-[40.25rem] pt-[3.8125rem]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
      </Container>
      <Container className="pt-14 pb-[4.375rem] border-b border-[#D8D8D8]">
      <TitleHeader className="w-full" headerText="Returning Customer" />
      <div className="input flex flex-wrap gap-y-6 gap-x-10 pt-10 pb-7">
        <Input
          label="Email address"
          placeholder="company@domain.com"
          type="email"
          id="email"
        />
        <InpPasswd label="Password" placeholder="********" id="Password" /></div>
          <CustomBtn
            btnText="Log in"
            className="py-4 w-[12.5rem] "
          />
      </Container>
      <Container className="pt-14">
        <TitleHeader headerText="New Customer"/>
        <p className="font-DM leading-8 text-secondary max-w-[40.25rem] pt-[38px] pb-[3.1875rem]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
          <CustomBtn
            btnText="Continue"
            className="py-4 w-[12.5rem] "
          />
      </Container>
    </div>
  );
};

export default Login;
