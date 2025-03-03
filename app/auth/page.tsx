"use client";
import AuthContainer from "@/components/AuthContainer";
import LoginForm from "@/components/Login/LoginForm";
import MainContainer from "@/components/MainContainer";

export default function Auth() {
  return (
    <MainContainer classname="min-h-screen flex justify-center items-center font-satoshi">
      <AuthContainer text="Enter your email and we’ll send you a login code">
        <LoginForm />
      </AuthContainer>
    </MainContainer>
  );
}
