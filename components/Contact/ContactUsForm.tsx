"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "@/utils/inputValidator";
import InputComponent from "../InputComponent";
import { FallingLines } from "react-loader-spinner";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const ContactUsForm = () => {
  const [message, setMessage] = useState<string>("");
  const [msgError, setMsgError] = useState<string>("");
  const [loading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    console.log(data);
    if (!message) {
      setMsgError("Please enter some message");
      return;
    }
    if (message.length > 150) {
      setMsgError("Message should not exceed 150 characters");
      return;
    }

    // const modifiedData = {
    //   name: data.fullName,
    //   email: data.email,
    //   number: data.phoneNumber,
    //   message,
    // };

    setIsLoading(true);

    try {
      //   await sendMessageToMe(modifiedData);
      reset({
        fullName: "",
        email: "",
        phoneNumber: "",
      });
      setMessage("");
      setIsLoading(false);
      toastSuccess(
        "Message sent successfully!",
        <FaRegCircleCheck className="text-[rgba(30,129,176)] w-[2.2rem] h-[2.2rem]" />
      );
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      toastError(
        "Something went wrong, Please try again!",
        <LuBadgeAlert className="text-color-red w-[2.2rem] h-[2.2rem]" />
      );
    }
  };

  return (
    <div className="w-[45%]">
      <p className="font-satoshi text-[2rem] leading-[2.9rem] mb-[2.4rem]">
        Feel free to contact us anytime. We will get back to you as soon as we
        can.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          placeholder={"Enter your name"}
          type={"text"}
          register={register}
          error={errors}
          name={"fullName"}
          label="Name"
          pl="pl-[1rem]"
          containerWidth="w-full"
          validation={registrationOption.name}
        />
        <InputComponent
          placeholder={"Enter your email"}
          type={"email"}
          register={register}
          error={errors}
          name={"email"}
          label="Email"
          pl="pl-[1rem]"
          containerWidth="w-full"
          validation={registrationOption.email}
        />

        <div className="flex flex-col w-full">
          <label className="mb-[0.5rem] ">Message</label>
          <textarea
            rows={6}
            maxLength={150}
            required
            value={message}
            placeholder="Enter your message"
            onChange={(e: { target: { value: string } }) => {
              setMessage(e.target.value);
            }}
            className="rounded-md border border-[#D9D9D9] resize-none focus:ring-0 focus:outline-none outline-none ring-0 p-[1rem] "
          />
          <small>{msgError}</small>
        </div>
        <button
          type="submit"
          className="mt-[3rem] flex items-center justify-center w-full py-[1rem] text-center text-[2rem] font-medium rounded-md bg-color-black text-color-white"
        >
          {loading ? (
            <FallingLines color="#ffffff" width="30" visible={true} />
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
