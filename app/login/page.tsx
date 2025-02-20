import AuthContainer from "@/components/AuthContainer";
import LoginForm from "@/components/Login/LoginForm";
import MainContainer from "@/components/MainContainer";
import React from "react";

export default function Login() {
  return (
    <MainContainer classname="min-h-screen flex justify-center items-center">
      <AuthContainer text="Enter your email and we’ll send you a login code">
        <LoginForm />
      </AuthContainer>
    </MainContainer>
  );
}
