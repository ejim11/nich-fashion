"use client";
import { ShoppingItem } from "@/types/shoppingItem";
import Link from "next/link";
import React from "react";
import ShoppingItemSkeleton from "./skeletons/ShoppingItemSkeleton";
import CollectionItem from "./Collections/CollectionItem";

const ShortShoppingItemList = ({
  title,
  data,
  link,
  isLoading,
  linkText,
}: {
  title: string;
  data: ShoppingItem[];
  isLoading: boolean;
  link?: string;
  linkText?: string;
}) => {
  console.log("data:", data);
  return (
    <section className="my-[10rem] flex flex-col items-center ">
      <h2 className="text-center  font-montserrat text-[4.5rem] uppercase font-extrabold leading-[5rem] mb-[5rem]">
        {title}
      </h2>
      {isLoading ? (
        <div className="grid grid-cols-4 w-full mb-[3rem] gap-[4rem]">
          <ShoppingItemSkeleton />
          <ShoppingItemSkeleton />
          <ShoppingItemSkeleton />
          <ShoppingItemSkeleton />
        </div>
      ) : (
        <div className="grid-cols-4 gap-[10rem] grid w-full">
          {data.map((item: ShoppingItem) => (
            <CollectionItem collection={item} key={item.id} />
          ))}
        </div>
      )}
      {link && (
        <Link
          href={link}
          className="mt-[4rem] text-center block py-[1.6rem] px-[5.4rem] border border-[#0000001A] rounded-[6.2rem] w-max hover:bg-[#0000001A] transition-all duration-100 ease-in font-satoshi font-medium  leading-[2.1rem]"
        >
          {linkText}
        </Link>
      )}
    </section>
  );
};

export default ShortShoppingItemList;
