import { applyForDiscountDispatch } from "@/actions/discountsActions";
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { CartItem } from "@/types/cartItem";
import formatAmount from "@/utils/formatAmount";
import { getTotalPriceOfCartItems } from "@/utils/getTotalPriceInCart";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiTag } from "react-icons/fi";
import { LuBadgeAlert } from "react-icons/lu";
import { MdArrowForward } from "react-icons/md";
import { FallingLines } from "react-loader-spinner";

const OrderSummary = ({ cart }: { cart: CartItem[] }) => {
  const dispatch = useAppDispatch();

  const { token } = useAppSelector((state) => state.auth);

  const { percentOff } = useAppSelector((state) => state.discounts.promoInfo);

  const [promoCode, setPromoCode] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const totalPrice = getTotalPriceOfCartItems(cart);

  const orderSummary = [
    {
      title: "Subtotal",
      amount: totalPrice,
    },
    {
      title: `Discount (${percentOff ?? 0}%)`,
      amount: percentOff ? (percentOff / 100) * totalPrice : 0,
    },
  ];

  const OnPromoCodeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCode(e.target.value);
  };

  const resetPromoCodeInput = () => {
    setPromoCode("");
  };

  const applyForDiscountHandler = () => {
    if (!promoCode) {
      return;
    }

    dispatch(
      applyForDiscountDispatch(
        promoCode,
        token,
        setIsLoading,
        toastSuccess,
        toastError,
        <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
        <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />,
        resetPromoCodeInput
      )
    );
  };

  return (
    <div className="border-[0.1rem] border-[rgba(0,0,0,0.1)] font-satoshi rounded-[2rem] w-[60rem] xl:w-[48%] xmd:w-full sticky top-0 right-0  h-auto self-start px-[2.4rem] sm:px-[2rem] py-[2rem]">
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
          {percentOff
            ? `N${formatAmount(
                String(totalPrice - (percentOff / 100) * totalPrice)
              )}`
            : `N${formatAmount(String(totalPrice))}`}
        </p>
      </div>
      {token ? (
        <div className="flex flex-col">
          <div className="flex font-satoshi sm:flex-wrap">
            <div className="flex-1 mr-[1.5rem] relative sm:flex-none sm:w-full">
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
              className="px-[3.8rem] sm:w-full sm:mt-[2rem] py-[1.3rem] bg-black text-white rounded-[6.2rem] capitalize font-medium "
              onClick={applyForDiscountHandler}
            >
              {isLoading ? (
                <FallingLines
                  height="25"
                  width="25"
                  color={"white"}
                  visible={true}
                />
              ) : (
                "Apply"
              )}
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
      ) : (
        <p className="font-satoshi ">Please login to proceed to checkout.</p>
      )}
    </div>
  );
};

export default OrderSummary;
