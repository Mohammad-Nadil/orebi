import React, { useState } from "react";
import Container from "../layer/Container";
import TitleHeader from "../layer/TitleHeader";
import Input from "../layer/Input";
import InpPasswd from "../layer/InpPasswd";
import CustomBtn from "../layer/CustomBtn";
import { FaAngleRight } from "react-icons/fa";

const SignUp = () => {
  let [firstName, setFirstName] = useState("");
  let [firstNameErr, setFirstNameErr] = useState(true);
  let manageFirstName = (element) => {
    setFirstName(element.target.value);
    setFirstNameErr("");
  };

  let [lastName, setLastName] = useState("");
  let [lastNameErr, setLastNameErr] = useState(true);
  let manageLastName = (element) => {
    setLastName(element.target.value);
    setLastNameErr("");
  };

  let [email, setEmail] = useState("");
  let [emailErr, setEmailErr] = useState(true);
  let manageEmail = (element) => {
    setEmail(element.target.value);
    setEmailErr("");
  };

  let [inpNumber, setInpNumber] = useState("");
  let [inpNumberErr, setInpNumberErr] = useState(true);
  let manageInpNumber = (element) => {
    setInpNumber(element.target.value);
    setInpNumberErr("");
  };

  let [address1, setAddress1] = useState("");
  let [address1Err, setAddress1Err] = useState(true);
  let manageAddress1 = (element) => {
    setAddress1(element.target.value);
    setAddress1Err("");
  };

  let [address2, setAddress2] = useState("");
  let [address2Err, setAddress2Err] = useState(true);
  let manageAddress2 = (element) => {
    setAddress2(element.target.value);
    setAddress2Err("");
  };

  let [city, setCity] = useState("");
  let [cityErr, setCityErr] = useState("");
  let manageCity = (element) => {
    setCity(element.target.value);
    setCityErr("");
  };

  let [postCode, setPostCode] = useState("");
  let [postCodeErr, setPostCodeErr] = useState("");
  let managePostCode = (element) => {
    setPostCode(element.target.value);
    setPostCodeErr("");
  };

  let [inpPassword, setInpPassword] = useState("");
  let [inpPasswordErr, setInpPasswordErr] = useState(true);
  let managePassword = (element) => {
    setInpPassword(element.target.value);
    setInpPasswordErr("");
  };

  let [repeatPassword, setRepeatPassword] = useState("");
  let [repeatPasswordErr, setRepeatPasswordErr] = useState(true);
  let manageRepeatPassword = (element) => {
    setRepeatPassword(element.target.value);
    setRepeatPasswordErr("");
  };

  let manageSubmit = () => {
    if (!firstName) {
      setFirstNameErr("First name is required");
    }
    if (!lastName) {
      setLastNameErr("Last name is required");
    }
    if (!email) {
      setEmailErr("Email address is required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailErr("Please enter a valid email address");
    }
    if (!inpNumber) {
      setInpNumberErr("Phone number is required");
    }
    if (!address1) {
      setAddress1Err("Address 1 is required");
    }
    if (!address2) {
      setAddress2Err("Address 2 is required");
    }
    if (!city) {
      setCityErr("City is required");
    }
    if (!postCode) {
      setPostCodeErr("Post Code is required");
    }
    if (!inpPassword) {
      setInpPasswordErr("Password is required");
    } else if (
      !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(
        inpPassword
      )
    ) {
      setInpPasswordErr(
        "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long."
      );
    }
    if (!repeatPassword) {
      setRepeatPasswordErr("Repeat Password is required");
    }
    if (inpPassword !== repeatPassword) {
      setRepeatPasswordErr("Passwords do not match");
    }
  };

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
          <TitleHeader
            className="capitalize !text-5xl"
            headerText={`${window.location.pathname.split("/")[1]}
         ${window.location.pathname.split("/")[2]} `}
          />
          <p className="font-DM text-xs text-secondary flex items-center gap-x-2 capitalize">
            home <FaAngleRight />
            {window.location.pathname.split("/")[1]}{" "}
            {window.location.pathname.split("/")[2]}
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
          inputValue={firstName}
          onChange={manageFirstName}
        >
          <p className="text-xs text text-red-500 absolute ">{firstNameErr}</p>
        </Input>

        <Input
          label="Last Name"
          placeholder="Last Name"
          type="text"
          id="LastName"
          inputValue={lastName}
          onChange={manageLastName}
        >
          <p className="text-xs text text-red-500 absolute ">{lastNameErr}</p>
        </Input>

        <Input
          label="Email address"
          placeholder="company@domain.com"
          type="email"
          id="email"
          inputValue={email}
          onChange={manageEmail}
        >
          <p className="text-xs text text-red-500 absolute ">{emailErr}</p>
        </Input>

        <Input
          label="Telephone"
          placeholder="Your phone number"
          type="number"
          id="number"
          inputValue={inpNumber}
          onChange={manageInpNumber}
        >
          <p className="text-xs text text-red-500 absolute ">{inpNumberErr}</p>
        </Input>
      </Container>
      <Container className="flex flex-wrap gap-x-10 gap-y-6 border-b border-[#D8D8D8] py-14">
        <TitleHeader className="w-full" headerText="Your phone number" />
        <Input
          label="Address 1"
          placeholder="4279 Zboncak Port Suite 6212"
          type="text"
          id="Address1"
          inputValue={address1}
          onChange={manageAddress1}
        >
          <p className="text-xs text text-red-500 absolute ">{address1Err}</p>
        </Input>

        <Input
          label="Address 2"
          placeholder="-"
          type="text"
          id="Address2"
          inputValue={address2}
          onChange={manageAddress2}
        >
          <p className="text-xs text text-red-500 absolute ">{address2Err}</p>
        </Input>

        <Input
          label="City"
          placeholder="Your city"
          type="text"
          id="city"
          inputValue={city}
          onChange={manageCity}
        >
          <p className="text-xs text text-red-500 absolute ">{cityErr}</p>
        </Input>

        <Input
          label="Post Code"
          placeholder="05228"
          type="text"
          id="postCode"
          inputValue={postCode}
          onChange={managePostCode}
        >
          <p className="text-xs text text-red-500 absolute ">{postCodeErr}</p>
        </Input>

        <div className="border-b border-[#D8D8D8] w-[31.6875rem] flex flex-col">
          <label
            className="font-DM font-bold leading-6 text-primary"
            htmlFor="Division"
          >
            Division
          </label>
          <select
            className="block w-full font-DM text-sm  text-primary outline-none mt-2.5"
            id="Division"
          >
            <option value="PleaseSelect">Please select</option>
            {division.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
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
            className="block w-full font-DM text-sm  text-primary outline-none mt-2.5"
            id="District"
          >
            <option value="PleaseSelect">Please select</option>
            {district.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </Container>

      <Container className=" border-b border-[#D8D8D8] pt-14 pb-[4.375rem] ">
        <TitleHeader className="w-full" headerText="Your Password" />
        <div className="flex flex-wrap gap-y-6 gap-x-10 pt-11">
          <InpPasswd
            label="Password"
            placeholder="Password"
            id="Password"
            inputValue={inpPassword}
            onChange={managePassword}
          >
            <p className=" text-[9px] sm:text-xs text text-red-500 absolute top-3/4  sm:top-full">
              {inpPasswordErr}
            </p>
          </InpPasswd>
          <InpPasswd
            label="Repeat Password"
            placeholder="Repeat Password"
            id="RepeatPassword"
            inputValue={repeatPassword}
            onChange={manageRepeatPassword}
          >
            <p className="text-xs text text-red-500 absolute top-full">
              {repeatPasswordErr}
            </p>
          </InpPasswd>
        </div>
      </Container>
      <Container className="font-DM text-sm text-secondary flex flex-col gap-y-6 pt-16 ">
        <div className=" flex items-center gap-4">
          <input
            className="relative appearance-none h-[0.625rem] w-[0.625rem] border border-primary after:h-[0.4375rem] after:w-[0.4375rem] checked:after:bg-primary after:content-[''] after:absolute  after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
            type="checkbox"
            id="policy"
          />
          <label htmlFor="policy">
            I have read and agree to the Privacy Policy
          </label>
        </div>
        <div className="flex gap-x-9">
          <p>Subscribe Newsletter</p>
          <div className="flex items-center gap-x-4">
            <input
              className="relative appearance-none h-[0.625rem] w-[0.625rem] border border-primary after:h-[0.4375rem] after:w-[0.4375rem] checked:after:bg-primary after:content-[''] after:absolute  after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
              type="radio"
              name="newsLetter"
              id="Yes"
            />
            <label htmlFor="Yes">yes</label>
          </div>
          <div className="flex items-center gap-x-4">
            <input
              className="relative appearance-none h-[0.625rem] w-[0.625rem] border border-primary after:h-[0.4375rem] after:w-[0.4375rem] checked:after:bg-primary after:content-[''] after:absolute  after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
              type="radio"
              name="newsLetter"
              id="no"
            />
            <label htmlFor="no">no</label>
          </div>
        </div>
        <div>
          <CustomBtn
            btnText="Log in"
            className="py-4 w-[12.5rem] !bg-slate-400/80 "
            onClick={manageSubmit}
          />
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
