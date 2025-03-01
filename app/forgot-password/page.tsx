import AuthContainer from "@/components/AuthContainer";
import ForgotPasswordForm from "@/components/ForgotPassword/ForgotPasswordForm";
import MainContainer from "@/components/MainContainer";
import React from "react";

export default function ForgotPassword() {
  return (
    <MainContainer classname="min-h-screen flex justify-center items-center font-satoshi">
      <AuthContainer text="Retrieve your account easily though your mail">
        <ForgotPasswordForm />
      </AuthContainer>
    </MainContainer>
  );
}
