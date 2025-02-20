import AuthContainer from "@/components/AuthContainer";
import OTPForm from "@/components/Login/OTPForm";
import MainContainer from "@/components/MainContainer";
import React from "react";

export default function OTP() {
  return (
    <MainContainer classname="min-h-screen flex justify-center items-center font-satoshi">
      <AuthContainer
        width="w-[50%]"
        text={"Enter 6 digit code sent to adc@gmail.com"}
      >
        <OTPForm />
      </AuthContainer>
    </MainContainer>
  );
}
