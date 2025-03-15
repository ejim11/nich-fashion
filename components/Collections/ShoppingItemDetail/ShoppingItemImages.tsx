"use client";
import { StaticImageData } from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";

const ShoppingItemImages = ({
  imgs,
  itemName,
  chosenImgIndex,
  onSelectImgIndex,
}: {
  imgs: StaticImageData[];
  itemName?: string;
  chosenImgIndex: number;
  onSelectImgIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="ml-[2rem] flex flex-col overflow-hidden">
      <div className="w-full h-[50rem] bg-[rgba(240,238,237,1)] flex justify-center items-center rounded-[2.4rem]">
        <div className="w-[38rem] h-[43rem]">
          {imgs[chosenImgIndex] && (
            <Image
              src={imgs[chosenImgIndex]}
              alt={`${itemName} image`}
              className="w-full h-full"
              priority
              width={1000}
              height={1000}
            />
          )}
        </div>
      </div>
      <div className="flex   mt-[2.4rem] overflow-x-auto justify-between  scrollbar-hide py-[1rem]">
        {imgs.map((img: StaticImageData, i: number) => (
          <button
            type="button"
            onClick={() => {
              onSelectImgIndex(i);
            }}
            key={i}
            className={`w-[11.6rem] flex-none h-[12.2rem] block p-[1rem] rounded-[0.5rem] ${
              chosenImgIndex === i
                ? "bg-white border border-[rgba(117,117,117,1)]"
                : "bg-[rgba(240,238,237,1)]"
            } transition-all duration-150 ease-in mr-[1rem]`}
          >
            {img && (
              <Image
                src={img}
                alt={`${itemName} image`}
                width={200}
                height={200}
                className="w-full h-full"
                priority
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShoppingItemImages;
