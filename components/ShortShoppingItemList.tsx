"use client";
import { ShoppingItem } from "@/types/shoppingItem";
import Link from "next/link";
import React from "react";
import ShoppingItemSkeleton from "./skeletons/ShoppingItemSkeleton";
import CollectionItem from "./Collections/CollectionItem";
import TitleAndBodyContainer from "./TitleAndBodyContainer";

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
      <TitleAndBodyContainer title={title}>
        {isLoading ? (
          <div className="grid-cols-4 xmd:grid-cols-2 vssm:grid-cols-1 gap-[10rem] 2xl:gap-[7rem] xl:gap-[4rem] xlg:gap-[3rem] sm:gap-[2rem] grid w-full">
            <ShoppingItemSkeleton />
            <ShoppingItemSkeleton />
            <ShoppingItemSkeleton />
            <ShoppingItemSkeleton />
          </div>
        ) : (
          <div className="grid-cols-4 xmd:grid-cols-2 vssm:grid-cols-1  gap-[10rem] 2xl:gap-[7rem] xl:gap-[4rem] xlg:gap-[3rem] sm:gap-[2rem] grid w-full">
            {data.map((item: ShoppingItem) => (
              <CollectionItem collection={item} key={item.id} />
            ))}
          </div>
        )}
        {!isLoading && link && (
          <Link
            href={link}
            className="mt-[4rem] text-center block py-[1.6rem] px-[5.4rem] border border-[#0000001A] rounded-[6.2rem] w-max hover:bg-[#0000001A] transition-all duration-100 ease-in font-satoshi font-medium  leading-[2.1rem]"
          >
            {linkText}
          </Link>
        )}
      </TitleAndBodyContainer>
    </section>
  );
};

export default ShortShoppingItemList;
