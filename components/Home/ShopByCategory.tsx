import { categories } from "@/data/categories";
import { ItemCategory } from "@/types/itemCategory";
import React from "react";
import Image from "next/image";
import TitleAndBodyContainer from "../TitleAndBodyContainer";

const ShopByCategory = () => {
  const widths: string[] = [
    "w-[40%] mb-[3rem] xmd:w-full xmd:mb-0",
    "w-[58%] mb-[3rem] xmd:w-full xmd:mb-0",
    "w-[58%] xmd:w-full",
    "w-[40%] xmd:w-full",
  ];

  const imgStyle: string[] = [
    "top-0 -right-[2rem] bottom-0 ",
    "top-0 right-[2rem] xmd:right-0 bottom-0 ",
    "top-0 right-[2rem] bottom-0 xmd:right-0  ",
    "top-[2rem] right-0 bottom-0 xmd:top-0 ",
  ];

  return (
    <section className="mb-[10rem]">
      <TitleAndBodyContainer title="shop by category">
        <div className="flex flex-wrap w-full justify-between  mx-auto xmd:grid xmd:grid-cols-2 xmd:gap-[3rem] sm:grid-cols-1">
          {categories.map((item: ItemCategory, i: number) => (
            <div
              key={item.title}
              className={`${widths[i]} xmd:flex-col overflow-hidden h-[35rem] xmd:h-auto relative flex border-[0.15rem] rounded-[2rem] bg-color-grey-4 border-color-grey-5 `}
            >
              <p className="px-[3.6rem] xlg:px-[1.5rem] py-[2.5rem] text-[3.6rem] smd:text-[2.5rem] font-satoshi font-bold capitalize">
                {item.title}
              </p>
              <div
                className={`${imgStyle[i]}  absolute xmd:relative  xmd:h-full`}
              >
                <Image
                  src={item.image}
                  alt={`${item.title} image`}
                  priority
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </TitleAndBodyContainer>
    </section>
  );
};

export default ShopByCategory;
