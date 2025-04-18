/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import {
  getAllShoppingItemsDispatch,
  getProductsInACategoryDispatch,
} from "@/actions/productsActions";
import { searchAndFilterActions } from "@/slices/searchAndFilterSlice";

type FilterItem = {
  title: string;
  filters: string[];
};

const CollectionsNav: React.FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();

  const { filters } = useAppSelector((state) => state.searchAndFilter);

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

  const submitFilters = () => {
    const categoryFilters: any = filters.find(
      (item: FilterItem) => item.title === "category"
    );

    const priceFilters: any = filters.find(
      (item: FilterItem) => item.title === "price"
    );

    const clothTypeFilters: any = filters.find(
      (item: FilterItem) => item.title === "clothType"
    );

    const dressStyleFilters: any = filters.find(
      (item: FilterItem) => item.title === "dressStyle"
    );

    const colorsFilters: any = filters.find(
      (item: FilterItem) => item.title === "colors"
    );

    const sizesFilters: any = filters.find(
      (item: FilterItem) => item.title === "sizes"
    );

    const category: string = categoryFilters
      ? categoryFilters.filters.join(",").toLowerCase()
      : "";

    const price: string = priceFilters
      ? priceFilters.filters.join(",").toLowerCase()
      : "";

    const clothType: string = clothTypeFilters
      ? clothTypeFilters.filters.join(",").toLowerCase()
      : "";

    const dressStyle: string = dressStyleFilters
      ? dressStyleFilters.filters.join(",").toLowerCase()
      : "";

    const colors: string = colorsFilters ? colorsFilters.filters.join(",") : "";

    const sizes: string = sizesFilters ? sizesFilters.filters.join(",") : "";

    const filteredQuery = [
      category && `category=${category}`,
      clothType && `clothType=${clothType}`,
      price && `price=${price}`,
      dressStyle && `dressStyle=${dressStyle}`,
      colors && `colors=${colors}`,
      sizes && `sizes=${sizes}`,
    ]
      .filter((item) => !!item)
      .join("&");

    router.replace(
      `/collections?category=${searchParamsObject.category}&${filteredQuery}`
    );

    dispatch(searchAndFilterActions.emptyFilters());
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
    dispatch(getProductsInACategoryDispatch(category ?? ""));
  }, [dispatch, pathname, searchParamsObject]);

  useEffect(() => {
    dispatch(searchAndFilterActions.emptyFilters());
  }, [dispatch, searchParamsObject.category]);

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
          <FiltersComp category={searchParamsObject.category ?? ""} />
          <PriceRangeComp category={searchParamsObject.category ?? ""} />
          <ColorsComp category={searchParamsObject.category ?? ""} />
          <Sizes category={searchParamsObject.category ?? ""} />
          <DressStyle category={searchParamsObject.category ?? ""} />
          <button
            type="button"
            className="mt-[3rem] py-[1.5rem] bg-black text-white rounded-[6rem] w-full font-satoshi font-medium leading-[1.8rem] "
            onClick={submitFilters}
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
