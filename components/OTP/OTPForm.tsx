"use client";
import { loginWithOtpDispatch } from "@/actions/authActions";
import { useAppDispatch } from "@/hooks/stateHooks";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { FallingLines } from "react-loader-spinner";
import OtpInput from "react18-input-otp";

const OTPForm = () => {
  const dispatchFn = useAppDispatch();
  const [otp, setOtp] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: -80, behavior: "smooth" });
  }, []);

  const resetForm = () => {
    setOtp("");
    router.push("/");
  };

  const loginUserHandler = () => {
    dispatchFn(
      loginWithOtpDispatch(
        Number(otp),
        setIsLoading,
        toastSuccess,
        toastError,
        <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
        <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />,
        resetForm
      )
    );
  };

  return (
    <div>
      <div className="w-full flex flex-col items-center mt-[4rem]">
        <OtpInput
          value={otp}
          onChange={(enteredOtp: string) => {
            setOtp(enteredOtp);
            // dispatchFn(auth Actions.setResetOtp(enteredOtp));
          }}
          numInputs={6}
          isInputNum={true}
          successStyle={"!border-color-purple-1"}
          inputStyle="!border-[0.2rem] !border-color-purple-1 ring-0 outline-none focus:ring-0  focus:outline-0  !rounded-[0.8rem] !text-color-black-1 !active:border-color-purple-1 !:outline-color-purple   !w-[7rem] !h-[6rem] !text-[2rem] !font-outfit otp "
          separator={<span className="w-[2rem]"></span>}
        />
        <button
          disabled={!otp}
          type="submit"
          className={`mt-[3.5rem] py-[2rem] flex justify-center hover:shadow-lg  font-medium items-center bg-color-black text-color-white w-full border border-color-purple-1 hover:bg-color-purple-2 hover:border-color-purple-2  rounded-lg transition-all duration-150 ease-in  cursor-pointer disabled:bg-color-purple-3 disabled:border-color-purple-3`}
          onClick={loginUserHandler}
        >
          {isLoading ? (
            <FallingLines
              height="25"
              width="25"
              color={"white"}
              visible={true}
            />
          ) : (
            "Continue"
          )}
        </button>
      </div>
      {/* <div className="flex flex-col items-center mt-[2.4rem]">
        <div className="flex items-center">
          <p className="text-[#222222CC]">Didn’t receive the email? </p>
          <button
            type="button"
            className="text-color-purple-2 hover:text-color-purple-1 transition-all duration-150 ease-in ml-[0.5rem]"
          >
            Click to resend
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default OTPForm;
