import React, { ReactNode } from "react";

const MainContainer: React.FC<{
  children: ReactNode;
  classname?: string;
  customPadding?: string;
}> = ({ children, classname, customPadding }) => {
  return (
    <main
      className={` ${classname ? classname : ""} ${
        customPadding ? customPadding : "px-[10rem] py-[10rem]"
      } bg-[#FFFBFB] `}
    >
      {children}
    </main>
  );
};

export default MainContainer;
