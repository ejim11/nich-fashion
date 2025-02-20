import React, { ReactNode } from "react";

const MainContainer: React.FC<{ children: ReactNode; classname?: string }> = ({
  children,
  classname,
}) => {
  return (
    <main
      className={` ${
        classname ? classname : ""
      } bg-[#FFFBFB] px-[10rem] py-[7rem]`}
    >
      {children}
    </main>
  );
};

export default MainContainer;
