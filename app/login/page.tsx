import AuthContainer from "@/components/AuthContainer";
import LoginForm from "@/components/Login/LoginForm";
import MainContainer from "@/components/MainContainer";
import React from "react";

export default function Login() {
  return (
    <MainContainer classname="min-h-screen flex justify-center items-center font-satoshi">
      <AuthContainer text="Enter your email and password to login">
        <LoginForm />
      </AuthContainer>
    </MainContainer>
  );
}
