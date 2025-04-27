import React from "react";

const TitleAndBodyContainer: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({ children, title }) => {
  return (
    <>
      <h2 className="text-center  font-montserrat text-[4.5rem] uppercase font-extrabold leading-[5rem] mb-[5rem] xl:text-[3.5rem] smd:text-[2.8rem]">
        {title}
      </h2>
      <>{children}</>
    </>
  );
};

export default TitleAndBodyContainer;
