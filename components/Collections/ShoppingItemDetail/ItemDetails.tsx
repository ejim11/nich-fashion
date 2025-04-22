"use client";

import { Color, ShoppingItem, Size } from "@/types/shoppingItem";
import React, { useMemo, useState } from "react";
import { StaticImageData } from "next/image";
import QuantityCalculator, { SizeCopy } from "./QuantityCalculator";
import { useAppDispatch } from "@/hooks/stateHooks";
import { CartItem } from "@/types/cartItem";
import { cartActions } from "@/slices/cartSlice";
import { useRouter } from "next/navigation";
import formatAmount from "@/utils/formatAmount";

export type ColorCopy = {
  id?: string;
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
  shoppingItem,
}: {
  name: string;
  price: number;
  discount: number;
  shortDescription: string;
  colors: Color[];
  colorIndex: number;
  shoppingItem: ShoppingItem;
}) => {
  const dispatchFn = useAppDispatch();

  const router = useRouter();

  const colorsCopy: ColorCopy[] = useMemo(() => {
    return colors.map((color: Color) => ({
      id: color.id,
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

  const totalSizesPickedInAColor = colorsCopyState
    .filter((color: ColorCopy) =>
      color.sizes.some((size: SizeCopy) => size.chosenQuantity > 0)
    )
    .map((color: ColorCopy) => {
      const totalChosenQuantity = color.sizes
        .filter((size: SizeCopy) => size.chosenQuantity > 0)
        .map((size: SizeCopy) => size.chosenQuantity)
        .reduce((acc, cur) => acc + cur, 0);

      return {
        id: color.id,
        color: color.color,
        totalQuantityChosen: totalChosenQuantity,
      };
    });

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

  const onAddItemToCartHandler = (): void => {
    // 1. get the colors with the sizes and quantities
    const newColors = colorsCopyState
      .filter((color: ColorCopy) =>
        color.sizes.some((size: SizeCopy) => size.chosenQuantity > 0)
      )
      .map((color: ColorCopy) => {
        const chosenSizes = color.sizes.filter(
          (size: SizeCopy) => size.chosenQuantity > 0
        );

        return {
          id: color.id,
          color: color.color,
          sizes: chosenSizes,
        };
      });

    // if the newColors array is empty, return because user has not chosen any size in a color
    if (newColors.length <= 0) {
      return;
    }

    // 2. get the shopping item - a prop
    //3. substitute the colors in the shopping item for the one you got at 1
    const cartItem: CartItem = {
      ...shoppingItem,
      colors: newColors,
      price: shoppingItem.discount
        ? shoppingItem.price -
          shoppingItem.price * (shoppingItem.discount / 100)
        : shoppingItem.price,
    };

    // 4 .add the item to the cart slice
    dispatchFn(cartActions.addItemToCart(cartItem));

    // 5 .revert the changes in the colorCopyState
    const defaultColorsCopy = shoppingItem.colors
      .slice()
      .map((color: Color) => ({
        id: color.id,
        color: color.color,
        images: color.images,
        sizes: color.sizes.map((size: Size) => ({
          size: size.size,
          quantity: size.quantity,
          chosenQuantity: 0,
        })),
      }));

    setColorsCopyState(defaultColorsCopy);
  };

  const orderItemsHandler = () => {
    // add items to the cart
    onAddItemToCartHandler();

    // nav to the cart page
    router.push("/cart");
  };

  return (
    <div className="ml-[2rem] flex-1 font-satoshi flex flex-col">
      <h2 className="text-[4.8rem]  font-bold text-black capitalize">{name}</h2>
      <div className="flex text-[3.2rem] font-bold my-[2.4rem]">
        <p className=" text-color-black   mr-[1rem]">
          {discount > 0
            ? `N${formatAmount(String(price - price * (discount / 100)))}`
            : `N${formatAmount(String(price))}`}
        </p>
        {discount > 0 && (
          <div className="flex items-center">
            <p className="text-[#00000066] line-through">
              N{formatAmount(String(price))}
            </p>
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
        {totalSizesPickedInAColor.length > 0 ? (
          totalSizesPickedInAColor.map(
            (
              clr: { color: string; totalQuantityChosen: number },
              i: number
            ) => (
              <div key={i} className="flex items-center mr-[1rem] last:mr-0">
                <div
                  style={{ backgroundColor: clr.color }}
                  className="w-[3.7rem] h-[3.7rem] rounded-full  mr-[1rem]"
                ></div>
                <p>{clr.totalQuantityChosen} units</p>
              </div>
            )
          )
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
              <div className="flex items-center ml-auto">
                <div className="w-[1.3rem] h-[1.3rem] bg-[rgba(0,128,0,1)] rounded-full mr-[1rem]"></div>
                <p className="font-satoshi text-[1.8rem] text-black">
                  In Stock
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-between mt-auto font-satoshi font-medium text-center">
        <button
          onClick={orderItemsHandler}
          type="button"
          className="w-[48%] bg-black text-white py-[1.5rem] rounded-[6.2rem] border border-black "
        >
          Order now
        </button>
        <button
          onClick={onAddItemToCartHandler}
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
