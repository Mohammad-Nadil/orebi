import React from "react";
import paypal from "/paypal.png";
import bitcoin from "/bitcoin.png";
import visa from "/visa.webp";

const paymentMethods = [
  { id: "visa", src: visa, alt: "Visa" },
  { id: "paypal", src: paypal, alt: "PayPal" },
  { id: "bitcoin", src: bitcoin, alt: "Bitcoin" },
];

const BillingForm = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="head flex flex-col gap-y-3 border-b !border-secondary/50 py-5">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-DM font-bold" >Payment Method</h2>
        <p className="text-secondary">Please select a payment method</p>
      </div>
      <div className="options flex flex-col gap-y-3">
       
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            htmlFor={method.id}
            className="input flex items-center justify-between cursor-pointer border-b border-secondary/50"
          >
            <input required type="radio" name="payment" id={method.id} className="" />
            <img
              className="w-20 aspect-video object-contain"
              src={method.src}
              alt={method.alt}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default BillingForm;
