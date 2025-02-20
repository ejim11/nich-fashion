import React, { ReactNode } from "react";
import MainContainer from "../MainContainer";
import ContactUsForm from "./ContactUsForm";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const ContactComp = () => {
  const iconClassname = "w-[3rem] h-[3rem] text-color-black mr-[1rem]";

  const contactUsInfo: { text: string; icon: ReactNode }[] = [
    {
      text: "+1012 3456 789",
      icon: <FaPhoneVolume className={iconClassname} />,
    },
    {
      text: "demo@gmail.com",
      icon: <FaEnvelope className={iconClassname} />,
    },
    {
      text: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
      icon: <ImLocation className={iconClassname} />,
    },
  ];

  return (
    <MainContainer>
      <section>
        <h2 className="text-[4.8rem] font-monserrat font-extrabold text-center mb-[5rem]">
          Contact Us
        </h2>
        <div className="w-full flex justify-between">
          <ContactUsForm />
          <div className="w-[48%] bg-[#D9D9D9] px-[4.6rem] rounded-[2rem] flex flex-col justify-center">
            {contactUsInfo.map((item: { text: string; icon: ReactNode }) => (
              <div
                key={item.text}
                className="flex items-center mb-[1.6rem] font-satoshi text-[2rem]"
              >
                <div>{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainContainer>
  );
};

export default ContactComp;
