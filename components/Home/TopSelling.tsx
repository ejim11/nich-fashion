import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ShoppingItem } from "@/types/shoppingItem";
import { topSellings } from "@/data/topSelling";

const TopSelling = () => {
  return (
    <section className="mb-[10rem] flex flex-col items-center ">
      <h2 className="text-center  font-montserrat text-[4.5rem] uppercase font-extrabold leading-[5rem] mb-[5rem]">
        Top Selling
      </h2>
      <div className="grid-cols-4 gap-[10rem] grid w-full">
        {topSellings.map((item: ShoppingItem) => (
          <div key={item.name} className="relative flex flex-col">
            {item.soldOut && (
              <p className="absolute top-[2.2rem] left-[1.5rem] bg-black text-white font-satoshi font-bold py-[0.3rem] px-[0.6rem] rounded-[0.27rem]">
                Sold Out
              </p>
            )}
            <div className="bg-color-grey-4 rounded-[2rem] px-[5rem] py-[1.8rem]">
              <Image
                src={item.image}
                alt={`${item.name} image`}
                priority
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
            <p className="mt-[1rem] text-[1.9rem] font-bold font-satoshi">
              {item.name}
            </p>
            <div className="text-[2rem] leading-[3.1rem] font-bold flex items-center">
              <p className="font-satoshi text-color-black   mr-[1rem]">
                {item.discount > 0
                  ? `$${item.price - item.price * (item.discount / 100)}`
                  : `$${item.price}`}
              </p>
              {item.discount > 0 && (
                <div className="flex items-center">
                  <p className="text-[#00000066] line-through">${item.price}</p>
                  <p className="bg-color-red-2 text-color-red-1 text-[1rem] ml-[1rem] rounded-[6rem] px-[1.2rem] leading-[1.5rem] py-[0.5rem]  font-medium font-satoshi">
                    -{item.discount}%
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <Link
        href={"/collections"}
        className="mt-[4rem] text-center block py-[1.6rem] px-[5.4rem] border border-[#0000001A] rounded-[6.2rem] w-max hover:bg-[#0000001A] transition-all duration-100 ease-in font-satoshi font-medium  leading-[2.1rem]"
      >
        View all
      </Link>
    </section>
  );
};

export default TopSelling;
