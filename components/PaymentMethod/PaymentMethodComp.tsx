"use client";
import React, { useState } from "react";
import MainContainer from "../MainContainer";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { RiBankLine } from "react-icons/ri";
import { MdArrowForward } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { initiatePaymentDispatch } from "@/actions/paystackActions";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { FallingLines } from "react-loader-spinner";
import { checkProductVariantsAvailabilityDispatch } from "@/actions/productVariantsActions";

const PaymentMethodComp = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [paymentMethod, setPaymentMethod] = useState<string>("pay-online");

  const { paymentInfo } = useAppSelector((state) => state.payment);

  const { token } = useAppSelector((state) => state.auth);

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

  const navFunc = (url: string): void => {
    router.push(url);
  };

  const navToBankTransferConfirmPage = () => {
    router.push("/payment-method/bank-transfer");
  };

  const paymentHandler = () => {
    if (paymentMethod === "bank-transfer") {
      dispatch(
        checkProductVariantsAvailabilityDispatch(
          paymentInfo.products,
          setIsLoading,
          toastSuccess,
          toastError,
          <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
          <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />,
          navToBankTransferConfirmPage
        )
      );
      return;
    }

    dispatch(
      initiatePaymentDispatch(
        paymentInfo,
        token,
        setIsLoading,
        toastSuccess,
        toastError,
        <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
        <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />,
        navFunc
      )
    );
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
        <h3 className="font-monserrat text-[4.8rem] xl:text-[4rem] smd:text-[2.8rem]  font-extrabold mb-[3.5rem] text-black uppercase">
          Payment method
        </h3>
        <div>
          {methods.map((item: { title: string; method: string }) => (
            <button
              key={item.title}
              type="button"
              className="flex bg-white items-center border rounded-[1.42rem] p-[2rem]  w-[48%] xmd:w-[50%] smd:w-[60%] sm:w-full transition-all duration-150 ease-in mb-[1.6rem] last:mb-0"
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
          className="flex py-[1.9rem] sm:w-full px-[5rem] bg-black text-white items-center justify-center font-satoshi font-medium rounded-[6.2rem] mt-[2.4rem]"
        >
          {isLoading ? (
            <FallingLines
              height="25"
              width="25"
              color={"white"}
              visible={true}
            />
          ) : (
            <>
              <span>Proceed to pay</span>
              <MdArrowForward className="w-[2.4rem] h-[2.4rem] ml-[1.2rem]" />
            </>
          )}
        </button>
      </div>
    </MainContainer>
  );
};

export default PaymentMethodComp;
