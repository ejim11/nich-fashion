import React from "react";
import { FiChevronUp } from "react-icons/fi";
import { MdOutlineChevronRight } from "react-icons/md";
const DressStyle = () => {
  const filters: string[] = ["Casual", "Formal", "Party", "Gym"];

  return (
    <div className="w-full flex flex-col mt-[2.3rem]">
      <div className="w-full flex items-center justify-between ">
        <p className="text-[2rem] font-satoshi font-bold leading-[2.6rem]">
          Dress Style
        </p>
        <FiChevronUp className="w-[1.6rem] h-[1.6rem]" />
      </div>
      <div className="flex flex-col mt-[2.3rem] ">
        {filters.map((filter: string) => (
          <button
            type="button"
            key={filter}
            className="w-full text-[rgba(0,0,0,0.6)] font-satoshi leading-[2rem] flex items-center justify-between mb-[2rem] last:mb-0"
          >
            <span>{filter}</span>
            <MdOutlineChevronRight className="text-current w-[1.6rem] h-[1.6rem]" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default DressStyle;
