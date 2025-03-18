"use client";
import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import MainContainer from "../MainContainer";
import { useAppSelector } from "@/hooks/stateHooks";
import CartList from "./CartList";
import OrderSummary from "./OrderSummary";

const CartComp = () => {
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <>
      {cart && cart.length <= 0 ? (
        <div className="min-h-[calc(100vh-7.5rem)] w-full flex items-center justify-center">
          <p>You have no items in your cart.</p>
        </div>
      ) : (
        <MainContainer>
          <div className="flex items-center font-satoshi text-[1.8rem] text-black font-medium">
            <Link href="/">Home</Link>
            <FiChevronRight className=" mr-[1.6rem]" />
            <Link href="/collections">Collections</Link>
            <FiChevronRight className=" mr-[1.6rem]" />
            <p className="text-[#ADADAD]">Cart</p>
          </div>
          <p className="font-extrabold text-[4.8rem] font-monserrat uppercase my-[4.8rem]">
            your cart
          </p>
          <div className="flex ">
            <CartList cart={cart} />
            <OrderSummary cart={cart} />
          </div>
        </MainContainer>
      )}
    </>
  );
};

export default CartComp;
