import React, { ReactNode } from "react";

const MainContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <main className="bg-[#FFFBFB] px-[10rem] py-[7rem]">{children}</main>;
};

export default MainContainer;
