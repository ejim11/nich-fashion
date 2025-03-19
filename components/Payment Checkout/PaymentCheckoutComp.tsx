"use client";
import React from "react";
import MainContainer from "../MainContainer";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { useAppSelector } from "@/hooks/stateHooks";

const PaymentCheckoutComp = () => {
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <MainContainer>
      <div className="flex items-center font-satoshi text-[1.8rem] text-black font-medium">
        <Link href="/">Home</Link>
        <FiChevronRight className=" mr-[1.6rem]" />
        <Link href="/collections">Collections</Link>
        <FiChevronRight className=" mr-[1.6rem]" />
        <p className="text-[#ADADAD]">Cart</p>
      </div>

      <div className="flex ">
        <form></form>
      </div>
    </MainContainer>
  );
};

export default PaymentCheckoutComp;
