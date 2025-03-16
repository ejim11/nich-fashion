"use client";

import { Color, Size } from "@/types/shoppingItem";
import React, { useEffect, useMemo, useState } from "react";
import { StaticImageData } from "next/image";
import QuantityCalculator, { SizeCopy } from "./QuantityCalculator";

export type ColorCopy = {
  color: string;
  images: StaticImageData[];
  sizes: {
    size: string;
    quantity: number;
    chosenQuantity: number;
  }[];
};
const ItemDetails = ({
  name,
  price,
  discount,
  colors,
  shortDescription,
  colorIndex,
}: {
  name: string;
  price: number;
  discount: number;
  shortDescription: string;
  colors: Color[];
  colorIndex: number;
}) => {
  // const [expanded, setExpanded] = useState<false | number>(false);

  const colorsCopy: ColorCopy[] = useMemo(() => {
    return colors.map((color: Color) => ({
      color: color.color,
      images: color.images,
      sizes: color.sizes.map((size: Size) => ({
        size: size.size,
        quantity: size.quantity,
        chosenQuantity: 0,
      })),
    }));
  }, [colors]);

  const [colorsCopyState, setColorsCopyState] =
    useState<ColorCopy[]>(colorsCopy);

  console.log(colorsCopy);

  const chosenColorsAndQuantity = colorsCopyState.filter((color: ColorCopy) =>
    color.sizes.some((size: SizeCopy) => size.chosenQuantity > 0)
  );

  const totalSizesPickedInAColor = colorsCopyState
    .filter((color: ColorCopy) =>
      color.sizes.some((size: SizeCopy) => size.chosenQuantity > 0)
    )
    .map((color: ColorCopy) => color.sizes)
    .flat()
    .filter((size: SizeCopy) => size.chosenQuantity > 0);
  // .map((size:SizeCopy) =>)
  // .map((size: SizeCopy) => )
  // .reduce((acc, cur) => acc + cur, 0);

  console.log(totalSizesPickedInAColor);

  console.log(chosenColorsAndQuantity);

  // console.log(chosenColorsAndQuantity);

  // const combinedByColor = Object.values(
  //   chosenColorsAndQuantity.reduce(
  //     (
  //       acc: { [x: string]: any },
  //       item: { color: string | number; chosenQuantity: any }
  //     ) => {
  //       // If this color already exists in our accumulator
  //       if (acc[item.color]) {
  //         // Add the chosenQuantity to the existing entry
  //         acc[item.color].chosenQuantity += item.chosenQuantity;
  //       } else {
  //         // Create a new entry for this color
  //         acc[item.color] = { ...item };
  //       }
  //       return acc;
  //     },
  //     {}
  //   )
  // );

  const onSetChosenColorSizeQuantityHandler = (
    size: SizeCopy,
    color: ColorCopy,
    calculationType: string
  ): void => {
    // find the color index

    const colorIndex = colorsCopyState.findIndex(
      (clr: ColorCopy) => color.color === clr.color
    );

    // find the size index

    const sizeIndex = colorsCopyState[colorIndex].sizes.findIndex(
      (sz: SizeCopy) => size.size === sz.size
    );

    // go to the color through the index and size through the index and make changes

    const newColorsCopyArr = colorsCopyState.slice();

    if (calculationType === "add") {
      newColorsCopyArr[colorIndex].sizes[sizeIndex] = {
        ...newColorsCopyArr[colorIndex].sizes[sizeIndex],
        chosenQuantity:
          newColorsCopyArr[colorIndex].sizes[sizeIndex].chosenQuantity + 1,
      };

      setColorsCopyState(newColorsCopyArr);
    } else {
      newColorsCopyArr[colorIndex].sizes[sizeIndex] = {
        ...newColorsCopyArr[colorIndex].sizes[sizeIndex],
        chosenQuantity:
          newColorsCopyArr[colorIndex].sizes[sizeIndex].chosenQuantity - 1,
      };

      setColorsCopyState(newColorsCopyArr);
    }
  };

  useEffect(() => {
    setColorsCopyState(colorsCopy);
  }, [colorsCopy]);

  return (
    <div className="ml-[2rem] flex-1 font-satoshi flex flex-col">
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
        {chosenColorsAndQuantity.length > 0 ? (
          chosenColorsAndQuantity.map((clr: ColorCopy, i) => (
            <div key={i} className="flex items-center mr-[1rem] last:mr-0">
              <div
                style={{ backgroundColor: clr.color }}
                className="w-[3.7rem] h-[3.7rem] rounded-full  mr-[1rem]"
              ></div>
              {/* <p>{clr.chosenQuantity} units</p> */}
            </div>
          ))
        ) : (
          <p>No Units Chosen</p>
        )}
      </div>
      <div className="mb-[1.5rem] flex flex-col">
        <p className="text-[rgba(0,0,0,0.6)] mb-[2.4rem]">Choose size</p>
        <div className="flex flex-col h-[20rem] overflow-y-auto chosenColorSizes">
          {colorsCopyState[colorIndex].sizes.map((size: SizeCopy) => (
            <div key={size.size} className="flex items-center mb-[1.6rem]">
              <p className="w-[10rem] bg-[rgba(194,194,194,1)] mr-[2.4rem] font-medium font-satoshi text-[rgba(0,0,0,1)] text-center capitalize text-[1.4rem] py-[1.2rem] rounded-[2rem]">
                {size.size}
              </p>
              <QuantityCalculator
                size={size}
                color={colorsCopyState[colorIndex]}
                setColorCopyQuantityHandler={
                  onSetChosenColorSizeQuantityHandler
                }
              />
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
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;
