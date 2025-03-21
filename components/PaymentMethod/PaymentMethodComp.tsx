"use client";
import React, { useState } from "react";
import MainContainer from "../MainContainer";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { RiBankLine } from "react-icons/ri";
import { MdArrowForward } from "react-icons/md";
import { useRouter } from "next/navigation";

const PaymentMethodComp = () => {
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState<string>("pay-online");

  const methods = [
    {
      title: "pay online",
      method: "pay-online",
    },
    {
      title: "pay via bank transfer",
      method: "bank-transfer",
    },
  ];

  const paymentHandler = () => {
    if (paymentMethod === "bank-transfer") {
      router.push("/payment-method/bank-transfer");
      return;
    }
  };

  return (
    <MainContainer>
      <div className="flex items-center font-satoshi text-[1.8rem] text-black font-medium">
        <Link href="/">Home</Link>
        <FiChevronRight className=" mr-[1.6rem]" />
        <Link href="/payment-checkout">Payment checkout</Link>
        <FiChevronRight className=" mr-[1.6rem]" />
        <p className="text-[#ADADAD]">Payment method</p>
      </div>
      <div className="min-h-screen mt-[5rem]">
        <h3 className="font-monserrat text-[4.8rem] font-extrabold mb-[3.5rem] text-black uppercase">
          Payment method
        </h3>
        <div>
          {methods.map((item: { title: string; method: string }) => (
            <button
              key={item.title}
              type="button"
              className="flex bg-white items-center border rounded-[1.42rem] p-[2rem]  w-[48%] transition-all duration-150 ease-in mb-[1.6rem] last:mb-0"
              onClick={() => {
                setPaymentMethod(item.method);
              }}
            >
              <div className="w-[1.9rem] h-[1.9rem] rounded-full flex items-center justify-center border border-black mr-[1rem]">
                <div
                  className={`${
                    item.method === paymentMethod ? "bg-black" : "bg-white"
                  } w-[1.3rem] h-[1.3rem] rounded-full `}
                ></div>
              </div>
              <span className="font-satoshi  font-medium capitalize">
                {item.title}
              </span>
              {item.title.includes("transfer") && (
                <RiBankLine className="w-[2.6rem] h-[2.6rem] text-black ml-auto" />
              )}
            </button>
          ))}
        </div>
        <button
          onClick={paymentHandler}
          type="submit"
          className="flex py-[1.9rem] px-[5rem] bg-black text-white items-center justify-center font-satoshi font-medium rounded-[6.2rem] mt-[2.4rem]"
        >
          <span>Proceed to pay</span>
          <MdArrowForward className="w-[2.4rem] h-[2.4rem] ml-[1.2rem]" />
        </button>
      </div>
    </MainContainer>
  );
};

export default PaymentMethodComp;
