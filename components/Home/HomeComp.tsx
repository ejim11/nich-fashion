"use client";
import React, { useEffect, useState } from "react";
import MainContainer from "../MainContainer";
import FirstSection from "./FirstSection";
import DiscountComp from "./DiscountComp";
import ShopByCategory from "./ShopByCategory";
import SubscribeToNewsLetter from "./SubscribeToNewsLetter";
import ShortShoppingItemList from "../ShortShoppingItemList";
// import { newArrivals } from "@/data/newArrivals";
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { getNewArrivalsDispatch } from "@/actions/productsActions";
import { getTopSellingItems } from "@/services/productsService";
import { convertToShoppingItem } from "@/utils/convertJsonProductToShoppingItem";
const HomeComp = () => {
  const dispatch = useAppDispatch();

  const { isLoading, items } = useAppSelector((state) => state.newArrivals);

  const [isTopSellingLoading, setIsTopSellingLoading] = useState<boolean>(true);
  const [topSellings, setTopSellings] = useState([]);

  const getTopSellings = async () => {
    try {
      const res = await getTopSellingItems();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const products = res.data.data.data.map((item: any) =>
        convertToShoppingItem(item)
      );
      setIsTopSellingLoading(false);
      setTopSellings(products);
    } catch (err) {
      console.log(err);
      setIsTopSellingLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: -80, behavior: "smooth" });
  }, []);

  useEffect(() => {
    dispatch(getNewArrivalsDispatch());
    getTopSellings();
  }, [dispatch]);

  return (
    <MainContainer>
      <FirstSection />
      <ShortShoppingItemList
        title={"New Arrivals"}
        data={items}
        isLoading={isLoading}
        link="/collections?category=voltex&sort=newest"
        linkText="View all"
      />
      <ShortShoppingItemList
        title={"Top Selling"}
        data={topSellings}
        isLoading={isTopSellingLoading}
        link="/collections?category=voltex&sort=most_purchased&limit=10"
        linkText="View all"
      />
      <DiscountComp />
      <ShopByCategory />
      <SubscribeToNewsLetter />
    </MainContainer>
  );
};

export default HomeComp;
