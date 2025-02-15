import React from "react";
import SubscribeForm from "./SubscribeForm";

const SubscribeToNewsLetter = () => {
  return (
    <section className="bg-color-black w-full px-[6.4rem] py-[4.3rem] rounded-[2rem] flex justify-between">
      <div className="w-[48%]">
        <p className="text-color-white font-monserrat font-extrabold text-[4rem] leading-[4.5rem]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </p>
      </div>
      <div className="w-[45%]">
        <SubscribeForm />
      </div>
    </section>
  );
};

export default SubscribeToNewsLetter;
