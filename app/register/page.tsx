import AuthContainer from "@/components/AuthContainer";
import MainContainer from "@/components/MainContainer";
import RegisterForm from "@/components/Register/RegisterForm";
import React from "react";

export default function Register() {
  return (
    <MainContainer classname="min-h-screen flex justify-center items-center font-satoshi">
      <AuthContainer text="Enter your details, we’ll send you an otp code">
        <RegisterForm />
      </AuthContainer>
    </MainContainer>
  );
}
