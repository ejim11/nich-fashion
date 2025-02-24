import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

const ColorsComp = () => {
  const [choosenColor, setChoosenColor] = useState<string>("");

  const colors: { colorName: string; styling: string }[] = [
    {
      colorName: "green",
      styling: "bg-[rgba(0,193,43,1)]",
    },
    {
      colorName: "red",
      styling: "bg-[rgba(245,6,6,1)]",
    },
    {
      colorName: "yellow",
      styling: "bg-[rgba(245,221,6,1)]",
    },
    {
      colorName: "orange",
      styling: "bg-[rgba(245,121,6,1)]",
    },
    {
      colorName: "light-blue",
      styling: "bg-[rgba(6,202,245,1)]",
    },
    {
      colorName: "deep-blue",
      styling: "bg-[rgba(6,58,245,1)]",
    },
    {
      colorName: "purple",
      styling: "bg-[rgba(125,6,245,1)]",
    },
    {
      colorName: "pink",
      styling: "bg-[rgba(245,6,164,1)]",
    },
    {
      colorName: "white",
      styling: "bg-[rgba(255,255,255,1)]",
    },
    {
      colorName: "black",
      styling: "bg-[rgba(0,0,0,1)]",
    },
  ];

  return (
    <div className="flex-col flex w-full  border-b border-[rgba(0,0,0,0.1)] py-[2.3rem]">
      <div className="w-full flex  items-center justify-between">
        <p className="text-[2rem] font-satoshi font-bold leading-[2.6rem]">
          Colors
        </p>
        <FiChevronUp className="w-[1.6rem] h-[1.6rem]" />
      </div>
      <div className="flex flex-wrap pt-[2rem]">
        {colors.map((color: { colorName: string; styling: string }) => (
          <button
            onClick={() => {
              if (color.colorName === choosenColor) {
                setChoosenColor("");
                return;
              }

              setChoosenColor(color.colorName);
            }}
            key={color.colorName}
            className={`w-[3.6rem] flex justify-center items-center h-[3.6rem] ${color.styling} mr-[1.5rem] mb-[1.5rem] rounded-full border border-[rgba(0,0,0,0.2)]`}
          >
            <FaCheck
              className={`w-[1.58rem] h-[1.58rem] ${
                choosenColor === color.colorName
                  ? `block ${
                      color.colorName === "white" ||
                      color.colorName === "yellow"
                        ? "text-black"
                        : "text-white"
                    }`
                  : "hidden"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorsComp;
