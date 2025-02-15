import React, { ReactNode } from "react";

const MainContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="bg-[#FFFBFB] px-[10rem] py-[7rem] min-h-screen">
      {children}
    </main>
  );
};

export default MainContainer;
