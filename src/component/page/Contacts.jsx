import React, { useState } from "react";
import Container from "../layer/Container";
import BreadCrum from "../BreadCrum";
import Input from "../layer/Input";
import CustomBtn from "../layer/CustomBtn";

const Contacts = () => {
  let [name, setName] = useState("");
  let [nameErr, setNameErr] = useState(true);
  let manageName = (element) => {
    setName(element.target.value);
    setNameErr("");
  };

  let [email, setEmail] = useState("");
  let [emailErr, setEmailErr] = useState(true);
  let manageEmail = (element) => {
    setEmail(element.target.value);
    setEmailErr("");
  };

  let [message, setMessage] = useState("");
  let [messageErr, setMessageErr] = useState(true);
  let manageMessage = (element) => {
    setMessage(element.target.value);
    setMessageErr("");
  };

  let manageSubmit = () => {
    event.preventDefault(); 
    if (!name) {
      setNameErr("First name is required");
    }
    if (!email) {
      setEmailErr("Email address is required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailErr("Please enter a valid email address");
    }
    if (!message) {
      setMessageErr("Message is required");
    }
  };

  return (
    <div>
      <Container className=" flex flex-col gap-y-8 xl:gap-y-16 pt-8 md:pt-16 xl:pt-32">
        <BreadCrum />
        <div className="form flex flex-col gap-y-10 ">
          <h2 className=" text-3xl font-semibold md:text-4xl md:font-bold font-DM">
            Fill up a Form
          </h2>
          <form action="" className="flex flex-col  gap-y-5 ">
            <Input
              label="Name"
              placeholder="Name"
              type="text"
              id="FirstName"
              inputValue={name}
              onChange={manageName}
            >
              <p className="text-xs text text-red-500 absolute ">{nameErr}</p>
            </Input>

            <Input
              label="Email address"
              placeholder="Your email address"
              type="email"
              id="email"
              inputValue={email}
              onChange={manageEmail}
            >
              <p className="text-xs text text-red-500 absolute ">{emailErr}</p>
            </Input>

            <Input label="Message" placeholder="Your message here" id="message">
              <p>
                <p className="text-xs text text-red-500 absolute ">
                  {emailErr}
                </p>
              </p>
            </Input>
            <CustomBtn
              btnText="post"
              className="md:py-2  md:px-5 py-2 px-5 text-2xl w-auto xl:px-10 xl:text-xl text-nowrap !bg-slate-400/80 "
              onClick={(event)=>manageSubmit(event)}
            />
          </form>
        </div>
        <div className="map w-full aspect-video">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6143.093997808466!2d90.3862628175337!3d23.722207023399964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1742736609256!5m2!1sen!2sbd"  className="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
