import React from "react";
import { BsSliders2Vertical } from "react-icons/bs";
import { MdOutlineChevronRight } from "react-icons/md";
const FiltersComp = () => {
  const filters: string[] = ["T-shirts", "Shorts", "Skirts", "Hoodie", "Jeans"];

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex items-center justify-between pb-[2.3rem] border-b border-[rgba(0,0,0,0.1)]">
        <p className="text-[2rem] font-satoshi font-bold leading-[2.6rem]">
          Filters
        </p>
        <BsSliders2Vertical className="w-[2.4rem] h-[2.4rem] text-[rgba(0,0,0,0.4)]" />
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

export default FiltersComp;
