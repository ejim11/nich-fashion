import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const CheckoutComp = () => {
  return (
    <div>
      <div className="flex items-center font-satoshi text-[1.8rem] text-black font-medium">
        <Link href="/">Home</Link>
        <FiChevronRight className=" mr-[1.6rem]" />
        <Link href="/collections">Collections</Link>
        <FiChevronRight className=" mr-[1.6rem]" />
        <p className="text-[#ADADAD]">Cart</p>
      </div>
    </div>
  );
};

export default CheckoutComp;
