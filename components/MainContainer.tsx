import React, { ReactNode } from "react";

const MainContainer: React.FC<{
  children: ReactNode;
  classname?: string;
  customPadding?: string;
}> = ({ children, classname, customPadding }) => {
  return (
    <main
      className={` ${classname ? classname : ""} ${
        customPadding
          ? customPadding
          : "px-[8rem] sxl:px-[5rem] sxl:py-[5rem] xmd:px-[3rem] sm:px-[2rem] py-[8rem]"
      } bg-[#FFFBFB] `}
    >
      {children}
    </main>
  );
};

export default MainContainer;
