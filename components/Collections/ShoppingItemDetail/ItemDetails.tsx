/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Color, Size } from "@/types/shoppingItem";
import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

type SizeCopy = {
  size: string;
  colors: { color: string; quantity: string; chosenQuantity: number }[];
};

const ItemDetails = ({
  name,
  price,
  discount,
  sizes,
  shortDescription,
}: {
  name: string;
  price: number;
  discount: number;
  sizes: Size[];
  shortDescription: string;
}) => {
  const [expanded, setExpanded] = useState<false | number>(false);

  const sizesCopy = sizes.map((size: Size) => ({
    size: size.size,
    colors: size.colors.map((color: Color) => ({
      color: color.color,
      quantity: color.quantity,
      chosenQuantity: 0,
    })),
  }));

  const [chosenSizes, setChosenSizes] = useState<any>(sizesCopy);

  const chosenColorsAndQuantity = chosenSizes
    .map((size: SizeCopy) => size.colors)
    .flat()
    .filter(
      (item: { color: string; quantity: string; chosenQuantity: number }) =>
        item.chosenQuantity > 0
    );

  const combinedByColor = Object.values(
    chosenColorsAndQuantity.reduce(
      (
        acc: { [x: string]: any },
        item: { color: string | number; chosenQuantity: any }
      ) => {
        // If this color already exists in our accumulator
        if (acc[item.color]) {
          // Add the chosenQuantity to the existing entry
          acc[item.color].chosenQuantity += item.chosenQuantity;
        } else {
          // Create a new entry for this color
          acc[item.color] = { ...item };
        }
        return acc;
      },
      {}
    )
  );

  const onToggleDisplayEventInfoHandler = (index: number) => {
    setExpanded(expanded === index ? false : index);
  };

  const onSetChosenSizeHandler = (
    sizeCopy: SizeCopy,
    color: string,
    calculationType: string
  ) => {
    // find the index of the size and color of what you want to change

    const sizeIndex = chosenSizes.findIndex(
      (size: SizeCopy) => size.size === sizeCopy.size
    );

    // find color index

    const colorIndex = chosenSizes[sizeIndex].colors.findIndex(
      (clr: { color: string; quantity: string; chosenQuantity: number }) =>
        clr.color === color
    );

    const newSizesArr = chosenSizes.slice();

    if (calculationType === "add") {
      // change the value and save state

      newSizesArr[sizeIndex].colors[colorIndex] = {
        ...newSizesArr[sizeIndex].colors[colorIndex],
        chosenQuantity:
          newSizesArr[sizeIndex].colors[colorIndex].chosenQuantity + 1,
      };

      setChosenSizes(newSizesArr);
    } else {
      // change the value and save state

      newSizesArr[sizeIndex].colors[colorIndex] = {
        ...newSizesArr[sizeIndex].colors[colorIndex],
        chosenQuantity:
          newSizesArr[sizeIndex].colors[colorIndex].chosenQuantity - 1,
      };
      setChosenSizes(newSizesArr);
    }
  };

  return (
    <div className="w-[50%] font-satoshi flex flex-col">
      <h2 className="text-[4.8rem]  font-bold text-black">{name}</h2>
      <div className="flex text-[3.2rem] font-bold my-[2.4rem]">
        <p className=" text-color-black   mr-[1rem]">
          {discount > 0 ? `N${price - price * (discount / 100)}` : `N${price}`}
        </p>
        {discount > 0 && (
          <div className="flex items-center">
            <p className="text-[#00000066] line-through">N{price}</p>
            <p className="bg-color-red-2 text-color-red-1 text-[1rem] ml-[1rem] rounded-[6rem] px-[1.2rem] leading-[1.5rem] py-[0.5rem]   ">
              -{discount}%
            </p>
          </div>
        )}
      </div>
      <p className="leading-[2.2rem] text-[rgba(0,0,0,0.6)]">
        {shortDescription}
      </p>
      <div className="flex items-center py-[2.4rem] border-t border-b border-[rgba(0,0,0,0.1)] my-[2.4rem]">
        {combinedByColor.length > 0 ? (
          combinedByColor.map((cmbClr: any, i) => (
            <div key={i} className="flex items-center mr-[1rem] last:mr-0">
              <div
                style={{ backgroundColor: cmbClr.color }}
                className="w-[3.7rem] h-[3.7rem] rounded-full  mr-[1rem]"
              ></div>
              <p>{cmbClr.chosenQuantity} units</p>
            </div>
          ))
        ) : (
          <p>No Units Chosen</p>
        )}
      </div>
      <div className="mb-[1.5rem]">
        <p className="text-[rgba(0,0,0,0.6)]">Choose size</p>
        <div className="mt-[1rem] h-[20rem] sizes-container overflow-y-auto pr-[2rem]">
          {sizes.map((size: Size, index: number) => (
            <div
              key={index}
              className={`w-full  mb-[1rem] border rounded-[1.8rem]  transition-all duration-300 ease-in ${
                index === expanded
                  ? "bg-[#F5F7F9] border-black shadow-custom-3  "
                  : "bg-color-white border-white shadow-custom-2"
              } font-nunito overflow-hidden  font-outfit`}
            >
              <motion.button
                className="w-full p-[2rem] flex justify-between items-center "
                onClick={() => {
                  onToggleDisplayEventInfoHandler(index);
                }}
                initial={false}
              >
                <span className="font-bold text-color-black text-[2.2rem] leading-[2.8rem] font-satoshi ">
                  {size.size}
                </span>
                <motion.div
                  animate={{ rotate: index === expanded ? 0 : -90 }}
                  transition={{ duration: 0.2 }}
                  className={``}
                >
                  <IoIosArrowDown className="w-[2.3rem] h-[2.3rem] " />
                </motion.div>
              </motion.button>
              <AnimatePresence initial={false}>
                {expanded === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap justify-between overflow-hidden px-[2rem] pb-[2rem]">
                      {chosenSizes[index].colors.map(
                        (color: any, i: number) => (
                          <ColorPicker
                            color={color}
                            key={color.color}
                            size={chosenSizes[index]}
                            setQuantity={onSetChosenSizeHandler}
                            index={i}
                          />
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-between mt-auto font-satoshi font-medium text-center">
        <button
          type="button"
          className="w-[48%] bg-black text-white py-[1.5rem] rounded-[6.2rem] border border-black "
        >
          Order now
        </button>
        <button
          type="button"
          className="w-[48%] bg-white text-black border border-black py-[1.5rem] rounded-[6.2rem] "
        >
          Add to cart{" "}
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;
