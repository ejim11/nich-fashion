import { categories } from "@/data/categories";
import { ItemCategory } from "@/types/itemCategory";
import React from "react";
import Image from "next/image";

const ShopByCategory = () => {
  const widths: string[] = [
    "w-[35%] mb-[3rem]",
    "w-[63%] mb-[3rem]",
    "w-[63%]",
    "w-[35%]",
  ];

  const imgStyle: string[] = [
    "top-0 -right-[2rem] bottom-0 ",
    "top-0 right-[2rem] bottom-0 ",
    "top-0 right-[2rem] bottom-0 ",
    "top-[2rem] right-0 bottom-0 ",
  ];

  return (
    <section className="mb-[10rem]">
      <h2 className="text-center  font-montserrat text-[4.5rem] uppercase font-extrabold leading-[5rem] mb-[5rem]">
        shop by category
      </h2>
      <div className="flex flex-wrap w-[90%] justify-between  mx-auto">
        {categories.map((item: ItemCategory, i: number) => (
          <div
            key={item.title}
            className={`${widths[i]} overflow-hidden h-[35rem] relative flex border-[0.15rem] rounded-[2rem] bg-color-grey-4 border-color-grey-5 `}
          >
            <p className="px-[3.6rem] py-[2.5rem] text-[3.6rem] font-satoshi font-bold capitalize">
              {item.title}
            </p>
            <div className={`${imgStyle[i]}  absolute `}>
              <Image
                src={item.image}
                alt={`${item.title} image`}
                priority
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
