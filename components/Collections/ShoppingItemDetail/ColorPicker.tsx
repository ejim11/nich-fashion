"use client";

import { Color } from "@/types/shoppingItem";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const ColorPicker = ({
  color,
  size,
  setQuantity,
  index,
}: {
  color: Color;
  size: {
    size: string;
    colors: { color: string; quantity: string; chosenQuantity: number }[];
  };
  setQuantity: (
    sizeCopy: {
      size: string;
      colors: { color: string; quantity: string; chosenQuantity: number }[];
    },
    color: string,
    calculationType: string
  ) => void;
  index: number;
}) => {
  const increaseQtyHandler = () => {
    if (size.colors[index].chosenQuantity === color.quantity) {
      return;
    }
    setQuantity(size, color.color, "add");
  };

  const decreaseQtyHandler = () => {
    if (size.colors[index].chosenQuantity === 0) {
      return;
    }
    setQuantity(size, color.color, "sub");
  };

  return (
    <div className=" w-[45%] flex items-center">
      <div className="flex items-center ">
        <div
          style={{ backgroundColor: color.color }}
          className={`  w-[1rem] h-[1rem] rounded-full`}
        ></div>
        <p className="capitalize ml-[0.5rem] text-[1.4rem]">{color.color}</p>
      </div>
      {/* quantity calc */}
      <div className="flex ml-auto bg-[rgba(240,240,240,1)] rounded-[1rem] overflow-hidden">
        <button
          type="button"
          onClick={decreaseQtyHandler}
          className="p-[1.5rem] hover:bg-gray-300"
        >
          <FaMinus />
        </button>
        <input
          value={size.colors[index].chosenQuantity}
          min={0}
          max={color.quantity}
          className="w-[8rem] text-center ring-0 focus:ring-0 outline-none focus:outline-none"
          readOnly
        />
        <button
          type="button"
          onClick={increaseQtyHandler}
          className="p-[1.5rem]"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
