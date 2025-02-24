"use client";
import React, { ReactNode, useState } from "react";
import { CollectionCategory } from "./enum/collectionCategory.enum";
import MainContainer from "../MainContainer";
import FiltersComp from "./FiltersComp";
import PriceRangeComp from "./PriceRangeComp";
import ColorsComp from "./ColorsComp";
import Sizes from "./Sizes";
import DressStyle from "./DressStyle";

const CollectionsNav: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [category, setCategory] = useState<CollectionCategory>(
    CollectionCategory.Voltex
  );

  const collectionCategories = [
    CollectionCategory.Voltex,
    CollectionCategory.Haven,
    CollectionCategory.Flux,
    CollectionCategory.Prism,
    CollectionCategory.Echo,
  ];

  const onChooseCategoryHandler = (cat: CollectionCategory): void => {
    setCategory(cat);
  };

  return (
    <MainContainer customPadding="px-[8rem] py-[7rem]">
      <div className="flex ">
        {collectionCategories.map((cat: CollectionCategory) => (
          <button
            onClick={() => {
              onChooseCategoryHandler(cat);
            }}
            key={cat}
            className={`${
              category === cat
                ? "bg-black text-white"
                : "bg-[rgba(244,244,244,1)] text-black"
            } capitalize py-[1.4rem] px-[5.4rem] rounded-[6rem] mr-[1.6rem] last:mr-0 transition-all duration-300 ease-in`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="w-full flex  mt-[4.1rem] relative">
        <div className="w-[45rem] h-max sticky top-[8rem] px-[2.3rem] py-[1.9rem] left-0 bg-white border border-[rgba(0,0,0,0.1)] rounded-[2rem]">
          <FiltersComp />
          <PriceRangeComp />
          <ColorsComp />
          <Sizes />
          <DressStyle />
          <button
            type="button"
            className="mt-[3rem] py-[1.5rem] bg-black text-white rounded-[6rem] w-full font-satoshi font-medium leading-[1.8rem] "
          >
            Apply Filter
          </button>
        </div>
        <div className="flex-1 ml-[3.4rem] bg-red-400 ">{children}</div>
      </div>
    </MainContainer>
  );
};

export default CollectionsNav;
