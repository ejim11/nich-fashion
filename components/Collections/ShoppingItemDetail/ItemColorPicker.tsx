"use client";

import { Color } from "@/types/shoppingItem";
import React, { Dispatch, SetStateAction } from "react";
import { MdOutlineCheck } from "react-icons/md";

const ItemColorPicker = ({
  colors,
  selectedColor,
  onSelectColor,
}: {
  colors: Color[];
  selectedColor: string;
  onSelectColor: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-col font-satoshi">
      <p className="text-[rgba(0,0,0,0.6)] mb-[1rem]">Select color</p>
      <div>
        {colors.map((color: Color) => (
          <div
            key={color.color}
            className="flex items-center cursor-pointer mb-[1.6rem] last:mb-0"
            onClick={() => {
              if (color.color === selectedColor) {
                onSelectColor("");
                return;
              }
              onSelectColor(color.color);
            }}
          >
            <div
              className={`w-[1.8rem] h-[1.8rem] flex items-center justify-center border ${
                color.color === selectedColor
                  ? "border-black"
                  : "border-[rgba(117,117,117,1)]"
              }  mr-[1.7rem]`}
            >
              {color.color === selectedColor && (
                <MdOutlineCheck className="w-[1.5rem] h-[1.5rem] text-black" />
              )}
            </div>
            {color.color !== selectedColor && (
              <div
                style={{ backgroundColor: color.color }}
                className="w-[3.7rem] h-[3.7rem] rounded-full mr-[1rem] border border-gray-100"
              ></div>
            )}
            <p
              style={{
                backgroundColor:
                  color.color === selectedColor ? color.color : "transparent",
              }}
              className={`capitalize text-[1.8rem] ${
                color.color === selectedColor
                  ? "text-white px-[3rem] py-[1rem] rounded-[2.7rem]"
                  : " text-black"
              }`}
            >
              {color.color}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemColorPicker;
