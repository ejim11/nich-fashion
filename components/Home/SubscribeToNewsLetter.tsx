import React from "react";
import SubscribeForm from "./SubscribeForm";

const SubscribeToNewsLetter = () => {
  return (
    <section className="bg-color-black w-full px-[6.4rem] xlg:px-[3rem] ssm:px-[2rem] xlg:py-[3rem] py-[4.3rem] rounded-[2rem] flex justify-between sm:flex-col sm:items-center">
      <div className="w-[48%] sm:w-full">
        <p className="text-color-white font-monserrat font-extrabold text-[4rem] xl:text-[3rem]  xmd:text-[2rem] leading-[4.5rem] sm:leading-[3rem] sm:text-center">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </p>
      </div>
      <div className="w-[45%] xmd:w-[50%] sm:w-full sm:mt-[3rem]">
        <SubscribeForm />
      </div>
    </section>
  );
};

export default SubscribeToNewsLetter;
