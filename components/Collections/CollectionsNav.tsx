"use client";
import React, { ReactNode, useEffect, useMemo } from "react";
import { CollectionCategory } from "./enum/collectionCategory.enum";
import MainContainer from "../MainContainer";
import FiltersComp from "./FiltersComp";
import PriceRangeComp from "./PriceRangeComp";
import ColorsComp from "./ColorsComp";
import Sizes from "./Sizes";
import DressStyle from "./DressStyle";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/hooks/stateHooks";
import { getAllShoppingItemsDispatch } from "@/actions/productsActions";

const CollectionsNav: React.FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const searchParams = useSearchParams();

  const pathname: string = usePathname().slice(13);

  const collectionCategories = [
    CollectionCategory.Voltex,
    CollectionCategory.Haven,
    CollectionCategory.Flux,
    CollectionCategory.Prism,
    CollectionCategory.Echo,
  ];

  // Convert searchParams to an object if needed
  const searchParamsObject = useMemo(
    () => ({
      name: searchParams.get("name") || undefined,
      category: searchParams.get("category") || undefined,
      clothType: searchParams.get("clothType") || undefined,
      price: searchParams.get("price") || undefined,
      dressStyle: searchParams.get("dressStyle") || undefined,
      sort: searchParams.get("sort") || undefined,
      colors: searchParams.get("colors") || undefined,
      sizes: searchParams.get("sizes") || undefined,
      limit: searchParams.get("limit") || undefined,
    }),
    [searchParams]
  );

  const onChooseCategoryHandler = (cat: CollectionCategory): void => {
    const { sort } = searchParamsObject;

    router.replace(
      `${
        sort ? `?category=${cat}&sort=${sort}&limit=${10}` : `?category=${cat}`
      }`
    );
  };

  useEffect(() => {
    const {
      name,
      category,
      clothType,
      dressStyle,
      price,
      sort,
      colors,
      sizes,
      limit,
    } = searchParamsObject;

    dispatch(
      getAllShoppingItemsDispatch(
        name,
        category,
        clothType,
        dressStyle,
        price,
        sort,
        colors,
        sizes,
        limit
      )
    );
  }, [dispatch, pathname, searchParamsObject]);

  useEffect(() => {
    window.scrollTo({ top: -80, behavior: "smooth" });
  }, []);

  return (
    <MainContainer customPadding={` px-[8rem] py-[7rem]`}>
      <div className={`${pathname ? "hidden" : "flex"}`}>
        {collectionCategories.map((cat: CollectionCategory) => (
          <button
            onClick={() => {
              onChooseCategoryHandler(cat);
            }}
            key={cat}
            className={`${
              searchParamsObject.category === cat
                ? "bg-black text-white"
                : "bg-[rgba(244,244,244,1)] text-black"
            } capitalize py-[1.4rem] px-[5.4rem] rounded-[6rem] mr-[1.6rem] last:mr-0 transition-all duration-300 ease-in`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="w-full flex  mt-[4.1rem] relative">
        <div
          className={`w-[45rem] ${
            pathname ? " hidden" : "flex flex-col"
          } h-max sticky top-[8rem] px-[2.3rem] py-[1.9rem] left-0 bg-white border border-[rgba(0,0,0,0.1)] rounded-[2rem]`}
        >
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
        <div className="flex-1 ml-[3.4rem] ">{children}</div>
      </div>
    </MainContainer>
  );
};

export default CollectionsNav;
