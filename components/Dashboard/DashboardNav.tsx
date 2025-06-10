import React, { ReactNode } from "react";

const DashboardNav: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen ">
      <nav className="w-[34.5rem] bg-black text-white">Navigation</nav>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashboardNav;
