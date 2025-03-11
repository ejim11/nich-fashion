"use client";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import Image from "next/image";

const ShoppingItemImages = ({
  imgs,
  itemName,
}: {
  imgs: StaticImageData[];
  itemName?: string;
}) => {
  const [choosenImg, setChoosenImg] = useState<StaticImageData | undefined>(
    imgs[0]
  );

  return (
    <div className="w-[45%] flex flex-col overflow-hidden">
      <div className="w-full h-[50rem] bg-[rgba(240,238,237,1)] flex justify-center items-center rounded-[2.4rem]">
        <div className="w-[38rem] h-[43rem]">
          {choosenImg && (
            <Image
              src={choosenImg}
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
              setChoosenImg(img);
            }}
            key={i}
            className={`w-[11.6rem] flex-none h-[12.2rem] block p-[1rem] rounded-[0.5rem] ${
              choosenImg === img
                ? "bg-white border border-[rgba(117,117,117,1)]"
                : "bg-[rgba(240,238,237,1)]"
            } transition-all duration-150 ease-in mr-[1rem]`}
          >
            {choosenImg && (
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
