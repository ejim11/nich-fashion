import { Size } from "@/types/shoppingItem";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { ColorCopy } from "./ItemDetails";

export type SizeCopy = Size & {
  chosenQuantity: number;
};

const QuantityCalculator = ({
  size,
  color,
  setColorCopyQuantityHandler,
}: {
  size: SizeCopy;
  color: ColorCopy;
  setColorCopyQuantityHandler: (
    size: SizeCopy,
    color: ColorCopy,
    calcType: string
  ) => void;
}) => {
  const decreaseQtyHandler = (): void => {
    if (size.chosenQuantity === 0) {
      return;
    }
    setColorCopyQuantityHandler(size, color, "sub");
  };

  const increaseQtyHandler = (): void => {
    if (size.chosenQuantity === size.quantity) {
      return;
    }
    setColorCopyQuantityHandler(size, color, "add");
  };

  return (
    <div className="flex  w-max bg-[rgba(240,240,240,1)] rounded-[1rem] overflow-hidden">
      <button
        type="button"
        onClick={decreaseQtyHandler}
        className="p-[1.5rem] hover:bg-gray-300"
      >
        <FaMinus />
      </button>
      <input
        value={size.chosenQuantity}
        min={0}
        max={size.quantity}
        className="w-[8rem] text-center ring-0 focus:ring-0 outline-none focus:outline-none"
        readOnly
      />
      <button type="button" onClick={increaseQtyHandler} className="p-[1.5rem]">
        <FaPlus />
      </button>
    </div>
  );
};

export default QuantityCalculator;
