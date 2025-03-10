"use client";
import React, { useEffect } from "react";
import MainContainer from "../MainContainer";
import FirstSection from "./FirstSection";
import TopSelling from "./TopSelling";
import DiscountComp from "./DiscountComp";
import ShopByCategory from "./ShopByCategory";
import SubscribeToNewsLetter from "./SubscribeToNewsLetter";
import ShortShoppingItemList from "../ShortShoppingItemList";
import { newArrivals } from "@/data/newArrivals";
const HomeComp = () => {
  useEffect(() => {
    window.scrollTo({ top: -80, behavior: "smooth" });
  }, []);

  return (
    <MainContainer>
      <FirstSection />
      <ShortShoppingItemList
        title={"New Arrivals"}
        data={newArrivals}
        link="/collections"
        linkText="View all"
      />
      <TopSelling />
      <DiscountComp />
      <ShopByCategory />
      <SubscribeToNewsLetter />
    </MainContainer>
  );
};

export default HomeComp;
