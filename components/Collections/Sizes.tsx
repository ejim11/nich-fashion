import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";

const Sizes = () => {
  const [chosenSize, setChosenSize] = useState<string>("");

  const sizes: string[] = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  return (
    <div className="flex-col flex w-full  border-b border-[rgba(0,0,0,0.1)] py-[2.3rem]">
      <div className="w-full flex  items-center justify-between">
        <p className="text-[2rem] font-satoshi font-bold leading-[2.6rem]">
          Size
        </p>
        <FiChevronUp className="w-[1.6rem] h-[1.6rem]" />
      </div>
      <div className="pt-[2rem] flex flex-wrap ">
        {sizes.map((size: string) => (
          <button
            onClick={() => {
              if (chosenSize === size) {
                setChosenSize("");
                return;
              }

              setChosenSize(size);
            }}
            key={size}
            className={`py-[1rem] px-[2rem] rounded-[6rem] mr-[1rem] mb-[1rem] ${
              chosenSize === size
                ? "bg-black text-white"
                : "text-black bg-[rgba(240,240,240,1)]"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sizes;
