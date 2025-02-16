"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FallingLines } from "react-loader-spinner";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubscribeSubmit = async (e: any) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter a valid email");
      return;
    }
    setIsLoading(true);

    try {
      //   await addSubscriberEmail(email);
      setIsLoading(false);
    } catch (e: any) {
      setIsLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars
      const errMsg: string = e.response?.data?.message.includes("duplicate")
        ? "You have already subscribed."
        : e.message;
    }

    setError("");
    setEmail("");
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
