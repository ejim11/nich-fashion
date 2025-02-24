import React, { ReactNode } from "react";

const MainContainer: React.FC<{ children: ReactNode; classname?: string; customPadding?: string }> = ({
  children,
  classname,
  customPadding
}) => {
  return (
    <main
      className={` ${
        classname ? classname : ""
      } ${customPadding? customPadding:"px-[10rem] py-[7rem]"} bg-[#FFFBFB] px-[10rem] py-[7rem]`}
    >
      {children}
    </main>
  );
};

export default MainContainer;
