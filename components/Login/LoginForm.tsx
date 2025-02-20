"use client";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "@/utils/inputValidator";
import InputComponent from "../InputComponent";
import { AiOutlineMail } from "react-icons/ai";
// import { IoMdLock } from "react-icons/io";
// import { useAppDispatch } from '@/hooks/;
// import { loginInvestorHandler } from '@/actions/investorAction';
// import { toastError, toastSuccess } from '@/utils/helperFns';
// import { FaRegCircleCheck } from "react-icons/fa6";
// import { LuBadgeAlert } from "react-icons/lu";
import { FallingLines } from "react-loader-spinner";
import { useRouter } from "next/navigation";

// import { useRouter } from "next/navigation";

const LoginForm = () => {
  type FormData = {
    email: string;
  };

  const router = useRouter();

  //   const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
    },
  });

  //   const resetForm = () => {
  //     reset({
  //       email: "",
  //     });
  //   };

  //   const navigateFunc = ({ id, name }: { id: string; name: string }) => {
  //     router.replace(
  //       `/dashboard/${name.toLowerCase().slice().split(" ").join("-")}`
  //     );
  //   };

  useEffect(() => {
    window.scrollTo({ top: -80, behavior: "smooth" });
  }, []);

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data);

    router.push("/otp");

    // dispatch(
    //   loginInvestorHandler(
    //     data,
    //     setIsLoading,
    //     toastSuccess,
    //     toastError,
    //     <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
    //     <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />,
    //     resetForm,
    //     navigateFunc
    //   )
    // );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <InputComponent
        placeholder={"Enter you mail address"}
        type={"email"}
        register={register}
        error={errors}
        label="Email"
        labelTextColor="text-[2rem] font-satoshi"
        name={"email"}
        validation={registrationOption.email}
        icon={
          <AiOutlineMail className="absolute w-[2.2rem] h-[2.2rem] top-[1.2rem] left-[1rem] text-color-primary-1" />
        }
      />

      <button
        disabled={isLoading}
        type="submit"
        className={`mt-[3rem] py-[1rem] flex justify-center items-center bg-color-black text-color-white w-full border border-color-primary-1 rounded-lg transition-all duration-300 ease-in ${
          isLoading && "opacity-75"
        }`}
      >
        {isLoading ? (
          <FallingLines height="25" width="25" color={"white"} visible={true} />
        ) : (
          "Continue"
        )}
      </button>
    </form>
  );
};

export default LoginForm;
