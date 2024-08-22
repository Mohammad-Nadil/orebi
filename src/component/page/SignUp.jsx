import React from "react";
import Container from "../layer/Container";
import TitleHeader from "../layer/TitleHeader";
import BreadCrum from "../BreadCrum";
import Input from "../layer/Input";
import InpPasswd from "../layer/InpPasswd";
import CustomBtn from "../layer/CustomBtn";
import { FaAngleRight } from "react-icons/fa";

const SignUp = () => {
  let division = [
    "Barishal",
    "Chattogram",
    "Dhaka",
    "Khulna",
    "Rajshahi",
    "Rangpur",
    "Mymensingh",
    "Sylhet",
  ];
  let district = [
    "Bandarban",
    "Barguna",
    "Barisal",
    "Bhola",
    "Bogra",
    "Brahmanbaria",
    "Chandpur",
    "Chattogram",
    "Chuadanga",
    "Cox's Bazar",
    "Dhaka",
    "Dinajpur",
    "Faridpur",
    "Feni",
    "Gaibandha",
    "Gazipur",
    "Gopalganj",
    "Habiganj",
    "Jamai",
    "Jamalpur",
    "Jashore",
    "Jhalokati",
    "Jhenidah",
    "Joypurhat",
    "Khagrachari",
    "Khulna",
    "Kishoreganj",
    "Kurigram",
    "Kushtia",
    "Lakshmipur",
    "Lalmonirhat",
    "Madaripur",
    "Magura",
    "Manikganj",
    "Meherpur",
    "Moulvibazar",
    "Mymensingh",
    "Naogaon",
    "Narail",
    "Narayanganj",
    "Narsingdi",
    "Natore",
    "Netrakona",
    "Nilphamari",
    "Noakhali",
    "Pabna",
    "Panchagarh",
    "Patuakhali",
    "Pirojpur",
    "Rajbari",
    "Rajshahi",
    "Rangamati",
    "Rangpur",
    "Satkhira",
    "Shariatpur",
    "Sherpur",
    "Sirajganj",
    "Sunamganj",
    "Sylhet",
    "Tangail",
    "Thakurgaon",
  ];

  return (
    <div>
      <Container className="border-b border-[#D8D8D8]">
        
      <Container className="flex flex-col gap-y-3">
        <TitleHeader className="capitalize !text-5xl" headerText={`${window.location.pathname.split('/')[1]} ${window.location.pathname.split('/')[2]} `} />
        <p className="font-DM text-xs text-secondary flex items-center gap-x-2 capitalize">
          home <FaAngleRight />
          {window.location.pathname.split('/')[1]}
            {" "}
          {window.location.pathname.split('/')[2]}
        </p>
      </Container>
        <p className="font-DM leading-8 text-secondary max-w-[40.25rem] pt-[3.8125rem]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
      </Container>
      <Container className="flex flex-wrap gap-x-10 gap-y-6 border-b border-[#D8D8D8] pt-[7.4375rem] pb-[4.3125rem]">
        <TitleHeader className="w-full" headerText="Your phone number" />
        <Input
          label="First Name"
          placeholder="First Name"
          type="text"
          id="FirstName"
        />

        <Input
          label="Last Name"
          placeholder="Last Name"
          type="text"
          id="LastName"
        />

        <Input
          label="Email address"
          placeholder="company@domain.com"
          type="email"
          id="email"
        />

        <Input
          label="Telephone"
          placeholder="Your phone number"
          type="number"
          id="number"
        />
      </Container>
      <Container className="flex flex-wrap gap-x-10 gap-y-6 border-b border-[#D8D8D8] py-14">
        <TitleHeader className="w-full" headerText="Your phone number" />
        <Input
          label="Address 1"
          placeholder="4279 Zboncak Port Suite 6212"
          type="text"
          id="Address1"
        />

        <Input label="Address 2" placeholder="-" type="text" id="Address2" />

        <Input label="City" placeholder="Your city" type="text" id="city" />

        <Input
          label="Post Code"
          placeholder="05228"
          type="text"
          id="postCode"
        />

        <div className="border-b border-[#D8D8D8] w-[31.6875rem] flex flex-col">
          <label
            className="font-DM font-bold leading-6 text-primary"
            htmlFor="Division"
          >
            Division
          </label>
          <select
            className="block w-full font-DM text-sm  text-primary  mt-2.5"
            id="Division"
          >
            <option value="PleaseSelect">Please select</option>
            {division.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="border-b border-[#D8D8D8] w-[31.6875rem] flex flex-col">
          <label
            className="font-DM font-bold leading-6 text-primary"
            htmlFor="District"
          >
            District
          </label>
          <select
            className="block w-full font-DM text-sm  text-primary  mt-2.5"
            id="District"
          >
            <option value="PleaseSelect">Please select</option>
            {district.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
      </Container>

      <Container className=" border-b border-[#D8D8D8] pt-14 pb-[4.375rem] ">
        <TitleHeader className="w-full" headerText="Your Password" />
        <div className="flex flex-wrap gap-y-6 gap-x-10 pt-11">
          <InpPasswd label="Password" placeholder="Password" id="Password" />
          <InpPasswd
            label="Repeat Password"
            placeholder="Repeat Password"
            id="RepeatPassword"
          />
        </div>
      </Container>
      <Container className="font-DM text-sm text-secondary flex flex-col gap-y-6 pt-16 ">
        <div className=" flex items-center gap-4">
          <input type="checkbox" id="policy" />
          <label htmlFor="policy">
            I have read and agree to the Privacy Policy
          </label>
        </div>
        <div className="flex gap-x-9">
          <p>Subscribe Newsletter</p>
          <div className="flex items-center gap-x-4">
            <input type="radio" name="newsLetter" id="newsYes" />
            <label htmlFor="newsYes">yes</label>
          </div>
          <div className="flex items-center gap-x-4">
            <input type="radio" name="newsLetter" id="newsYes" />
            <label htmlFor="newsNo">no</label>
          </div>
        </div>
        <div>
            <CustomBtn btnText="Log in" className="py-4 w-[12.5rem] !bg-slate-400/80 "/>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
