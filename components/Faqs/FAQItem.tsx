"use client";
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQITem = ({
  index,
  expanded,
  setExpanded,
  title,
  text,
}: {
  expanded: boolean | number;
  index: number;
  setExpanded: Function;
  title: string;
  text: React.ReactNode;
}) => {
  const isOpen = index === expanded;

  const onToggleDisplayEventInfoHandler = () => {
    setExpanded(isOpen ? false : index);
  };

  return (
    <div
      className={`w-full  mb-[3rem] border rounded-[1.8rem]  transition-all duration-300 ease-in ${
        isOpen
          ? "bg-[#F5F7F9] border-black shadow-custom-3  "
          : "bg-color-white border-white shadow-custom-2"
      } font-nunito overflow-hidden  font-outfit`}
    >
      <motion.button
        className="w-full p-[2rem] flex justify-between items-center "
        onClick={onToggleDisplayEventInfoHandler}
        initial={false}
      >
        <span className="flex-1 font-bold text-color-black text-[2.2rem] leading-[2.8rem] font-satoshi  smd:text-left">
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 0 : -90 }}
          transition={{ duration: 0.2 }}
          className={`w-[8.4rem] smd:w-[5rem] smd:h-[5rem] shadow-custom h-[8.4rem]  ${
            isOpen ? "bg-black text-color-white" : "bg-white text-black"
          } rounded-full flex items-center justify-center`}
        >
          <IoIosArrowDown className="w-[2.3rem] h-[2.3rem] " />
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="p-[2rem] font-satoshi leading-[2.8rem] text-[rgba(47,47,47,1)]">
              {text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQITem;
