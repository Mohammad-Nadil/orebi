import React, { useState } from "react";
import Container from "../layer/Container";
import BreadCrum from "../BreadCrum";
import Input from "../layer/Input";
import { useSelector } from "react-redux";
import BillingForm from "../layer/BillingForm";
import CustomBtn from "../layer/CustomBtn";

const Checkout = () => {
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
  let [companyName, setCompanyName] = useState("");
  let manageCompanyName = (element) => {
    setCompanyName(element.target.value);
  };

  let [street, setStreet] = useState("");
  let [streetErr, setStreetErr] = useState(true);
  let manageStreet = (element) => {
    setStreet(element.target.value);
    setStreetErr("");
  };

  let [apartment, setApartment] = useState("");
  let manageApartment = (element) => {
    setApartment(element.target.value);
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

  let [orderNotes, setOrderNotes] = useState("");
  let manageOrderNotes = (element) => {
    setOrderNotes(element.target.value);
  };

  let country = [
    "Bangladesh",
    "United States",
    "Canada",
    "United Kingdom",
    "Pakistan",
  ];

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
    if (!city) {
      setCityErr("City is required");
    }
    if (!postCode) {
      setPostCodeErr("Post Code is required");
    }
    if (!street) {
      setStreetErr("Street is required");
    }

    if (
      !(
        firstName ||
        lastName ||
        email ||
        inpNumber ||
        city ||
        postCode ||
        street
      )
    ) {
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit();
  };

  let productName = useSelector((state) => state.allCart.cart);
  let total = useSelector((state) => state.allCart.total);
  return (
    <div>
      <Container className="flex flex-col gap-y-5 sm:gap-y-10 md:gap-y-20 2xl:gap-y-40 py-5 2xl:py-32">
        <BreadCrum />
        <div className="billingDetails flex flex-col gap-y-10">
          <h2 className="font-bold lg:text-4xl">Billing Details</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
            <div className="name flex flex-col sm:flex-row justify-between  gap-y-3 gap-x-10">
              <Input
                id="firstName"
                label="First Name *"
                placeholder="First Name"
                inputValue={firstName}
                onChange={manageFirstName}
                className="sm:w-1/2"
              >
                <p className="text-xs text-red-500 absolute ">{firstNameErr}</p>
              </Input>
              <Input
                id="lastName"
                label="Last Name *"
                placeholder="Last Name"
                inputValue={lastName}
                onChange={manageLastName}
                className="sm:w-1/2"
              >
                <p className="text-xs text-red-500 absolute ">{lastNameErr}</p>
              </Input>
            </div>
            <Input
              id="companyName"
              label="Company Name (optional)"
              placeholder="Company Name"
              inputValue={companyName}
              onChange={manageCompanyName}
              className="w-full"
            />
            <div className="border-b border-[#D8D8D8] w-full flex flex-col">
              <label
                className="font-DM font-bold leading-6 text-primary"
                htmlFor="country"
              >
                Country *
              </label>
              <select
                className="block w-full font-DM text-sm  text-primary  mt-2.5 outline-none"
                id="country"
              >
                <option className="outline-none" value="PleaseSelect">
                  Please select
                </option>
                {country.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <Input
              id="street"
              label="Street Address *"
              placeholder="House number and street name"
              type="address"
              inputValue={street}
              onChange={manageStreet}
            >
              <p className="text-xs text-red-500 absolute ">{streetErr}</p>
            </Input>
            <Input
              id="apartment"
              placeholder="Apartment, suite, unit etc. (optional)"
              type="apartment"
              inputValue={apartment}
              onChange={manageApartment}
            />
            <Input
              id="city"
              label="Town / City *"
              placeholder="Town / City"
              inputValue={city}
              onChange={manageCity}
            >
              <p className="text-xs text-red-500 absolute ">{cityErr}</p>
            </Input>
            <Input
              id="postCode"
              label="Postcode / ZIP *"
              placeholder="Postcode / ZIP"
              inputValue={postCode}
              onChange={managePostCode}
            >
              <p className="text-xs text-red-500 absolute ">{postCodeErr}</p>
            </Input>
            <Input
              id="phone"
              label="Phone *"
              placeholder="Phone"
              inputValue={inpNumber}
              onChange={manageInpNumber}
            >
              <p className="text-xs text-red-500 absolute ">{inpNumberErr}</p>
            </Input>
            <Input
              id="email"
              label="Email Address *"
              placeholder="Email Address"
              inputValue={email}
              onChange={manageEmail}
            >
              <p className="text-xs text-red-500 absolute ">{emailErr}</p>
            </Input>
          </form>
        </div>
        <div className="additionalInfo flex flex-col gap-y-10">
          <h2 className="font-bold lg:text-4xl">Additional Information</h2>
          <form action="" className="flex flex-col gap-y-6">
            <Input
              id="orderNotes"
              label="Order Notes (optional)"
              placeholder="Order Notes"
              inputValue={orderNotes}
              onChange={manageOrderNotes}
              className="w-full"
            />
          </form>
        </div>
        <div className="order">
          <h2 className="font-bold text-4xl border-b-2 border-secondary pb-2 mb-4">
            Your Order
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full max-w-lg border border-gray-300 text-left">
              {/* Table Head */}
              <thead className="bg-gray-200">
                <tr className="border-b">
                  <th className="py-2 px-4">Product</th>
                  <th className="py-2 px-4 text-right">Total</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {productName.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">
                      {item.title}
                      <span className="text-gray-500"> x {item.quantity}</span>
                    </td>
                    <td className="py-2 px-4 text-right">
                      {item.price * item.quantity} $
                    </td>
                  </tr>
                ))}

                {/* Subtotal Row */}
                <tr className="font-semibold border-t">
                  <td className="py-2 px-4">Subtotal</td>
                  <td className="py-2 px-4 text-right">{total} $</td>
                </tr>

                {/* Total Row */}
                <tr className="font-bold border-t bg-gray-100">
                  <td className="py-3 px-4">Total</td>
                  <td className="py-3 px-4 text-right">{total} $</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bank w-full sm:w-1/2">
          <BillingForm />
        </div>
        <div className="btn">
          <CustomBtn
            btnText="Place Order"
            onClick={manageSubmit}
            className="py-4 px-6 md:px-10 text-nowrap text-xl sm:text-2xl  w-auto"
          />
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
