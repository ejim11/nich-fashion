"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "@/utils/inputValidator";
import InputComponent from "../InputComponent";
import { FallingLines } from "react-loader-spinner";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { useAppDispatch } from "@/hooks/stateHooks";
import { contactUsDispatch } from "@/actions/contactUsActions";

type FormData = {
  fullName: string;
  email: string;
};

const ContactUsForm = () => {
  const dispatch = useAppDispatch();

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
    },
  });

  const resetForm = () => {
    reset({
      fullName: "",
      email: "",
    });
    setMessage("");
  };

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    if (!message) {
      setMsgError("Please enter some message");
      return;
    }
    if (message.length > 150) {
      setMsgError("Message should not exceed 150 characters");
      return;
    }

    dispatch(
      contactUsDispatch(
        setIsLoading,
        data.fullName,
        data.email,
        message,
        toastSuccess,
        toastError,
        <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
        <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />,
        resetForm
      )
    );
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
          validation={registrationOption.fullname}
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
