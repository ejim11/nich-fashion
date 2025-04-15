"use client";
import { subscribeToNewsletterDispatch } from "@/actions/subscribersAction";
import { useAppDispatch } from "@/hooks/stateHooks";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { FallingLines } from "react-loader-spinner";

const SubscribeForm = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: any) => {
    setEmail(e.target.value);
  };

  const clearInputAndError = () => {
    setError("");
    setEmail("");
  };

  const handleSubscribeSubmit = async (e: any) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter a valid email");
      return;
    }

    dispatch(
      subscribeToNewsletterDispatch(
        email,
        setIsLoading,
        clearInputAndError,
        toastSuccess,
        toastError,
        <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
        <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />
      )
    );
  };

  return (
    <div className="">
      <form
        onSubmit={(e) => {
          handleSubscribeSubmit(e);
        }}
      >
        <div className="flex flex-col relative">
          <AiOutlineMail className="absolute w-[2.2rem] h-[2.2rem] top-[1.4rem] left-[1rem] text-[#FFFFFF66]" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleInputChange}
            id="email"
            className="border-b ring-0 outline-0 border-color-primary-1 pl-[4rem] pr-[2rem] py-[1.2rem]  bg-black text-color-white"
          />
          {error && <small className="text-color-red">{error}</small>}
        </div>
        <button className="mt-[2rem] flex items-center justify-center w-full bg-white rounded-[1rem] py-[1.2rem] font-satoshi font-medium ] text-color-black">
          {isLoading ? (
            <FallingLines
              height="25"
              width="25"
              color={"black"}
              visible={true}
            />
          ) : (
            "Subscribe to Newsletter"
          )}
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
