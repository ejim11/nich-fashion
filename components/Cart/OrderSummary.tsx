import { CartItem } from "@/types/cartItem";
import formatAmount from "@/utils/formatAmount";
import { getTotalPriceOfCartItems } from "@/utils/getTotalPriceInCart";
import Link from "next/link";
import React, { useState } from "react";
import { FiTag } from "react-icons/fi";
import { MdArrowForward } from "react-icons/md";

const OrderSummary = ({ cart }: { cart: CartItem[] }) => {
  const [promoCode, setPromoCode] = useState<string>("");

  const totalPrice = getTotalPriceOfCartItems(cart);

  const discount = 0.2 * totalPrice;

  const orderSummary = [
    {
      title: "Subtotal",
      amount: totalPrice,
    },
    {
      title: "Discount (-20%)",
      amount: discount,
    },
  ];

  const OnPromoCodeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCode(e.target.value);
  };

  return (
    <div className="border-[0.1rem] border-[rgba(0,0,0,0.1)] font-satoshi rounded-[2rem] w-[60rem] sticky top-0 right-0  h-auto self-start px-[2.4rem] py-[2rem]">
      <p className="font-bold text-[2.4rem] capitalize mb-[2.4rem]">
        order summary
      </p>
      <div className="border-b-[0.1rem] border-b-[rgba(0,0,0,0.1)]">
        {orderSummary.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between w-full mb-[2rem]  text-[2rem]"
          >
            <p className=" text-[rgba(0,0,0,0.6)]">{item.title}</p>
            <p
              className={`font-bold ${
                item.title.includes("Discount")
                  ? "text-[rgba(255,51,51,1)]"
                  : "text-black"
              } `}
            >
              {item.title.includes("Discount")
                ? `-N${formatAmount(String(item.amount))}`
                : `N${formatAmount(String(item.amount))}`}
            </p>
          </div>
        ))}
      </div>
      <div className="py-[2rem] w-full flex justify-between items-center text-[2rem] text-black">
        <p>Total</p>
        <p className="text-[2.4rem] font-bold">
          N{formatAmount(String(totalPrice - discount))}
        </p>
      </div>
      <div className="flex font-satoshi">
        <div className="flex-1 mr-[1.5rem] relative">
          <FiTag className="absolute top-[1.4rem] left-[1.8rem] text-[rgba(0,0,0,0.4)] w-[2.4rem] h-[2.4rem]" />
          <input
            type="text"
            name="promo"
            id="promo"
            value={promoCode}
            onChange={OnPromoCodeChangeHandler}
            placeholder="Add promo code"
            className="w-full ring-0 outline-none focus:ring-0 focus:outline-none py-[1.2rem] pl-[5.2rem] pr-[2rem] placeholder:text-[rgba(0,0,0,0.4)] bg-[rgba(240,240,240,1)] rounded-[6.2rem]"
          />
        </div>
        <button
          type="button"
          className="px-[3.8rem] py-[1.3rem] bg-black text-white rounded-[6.2rem] capitalize font-medium "
        >
          apply
        </button>
      </div>
      <Link
        href={"/payment-checkout"}
        className="flex py-[1.9rem] w-full bg-black text-white items-center justify-center font-satoshi font-medium rounded-[6.2rem] mt-[2.4rem]"
      >
        <span>Go to Checkout</span>
        <MdArrowForward className="w-[2.4rem] h-[2.4rem] ml-[1.2rem]" />
      </Link>
    </div>
  );
};

export default OrderSummary;
