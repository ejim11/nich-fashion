import React, { ReactNode } from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";

const AuthContainer: React.FC<{
  children: ReactNode;
  text: string;
  width?: string;
}> = ({ children, text, width }) => {
  return (
    <div
      className={` ${
        width ? width : "w-[45%]"
      }  bg-white border border-[rgba(217,217,217,1)] p-[4rem] flex flex-col items-center rounded-[1.4rem]`}
    >
      <div className="w-[24.3rem] h-[11.3rem] mb-[1rem]">
        <Image
          src={logo}
          alt=" logo image"
          priority
          width={200}
          height={100}
          className="w-full h-full"
        />
      </div>
      <p className="font-satoshi font-medium text-[1.8rem] mb-[4rem]">{text}</p>
      <div className="w-full self-start">{children}</div>
    </div>
  );
};

export default AuthContainer;
