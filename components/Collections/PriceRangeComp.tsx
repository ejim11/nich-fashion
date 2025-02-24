import React from "react";
import { FiChevronUp } from "react-icons/fi";
import RangeForm from "./Range";

const PriceRangeComp = () => {
  return (
    <div className="flex-col flex w-full mt-[2.3rem] border-b border-t border-[rgba(0,0,0,0.1)] py-[2.3rem]">
      <div className="w-full flex  items-center justify-between">
        <p className="text-[2rem] font-satoshi font-bold leading-[2.6rem]">
          Price
        </p>
        <FiChevronUp className="w-[1.6rem] h-[1.6rem]" />
      </div>
      <RangeForm />
    </div>
  );
};

export default PriceRangeComp;
