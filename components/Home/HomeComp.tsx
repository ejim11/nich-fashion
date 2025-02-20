"use client";
import React, { useEffect } from "react";
import MainContainer from "../MainContainer";
import FirstSection from "./FirstSection";
import NewArrivals from "./NewArrivals";
import TopSelling from "./TopSelling";
import DiscountComp from "./DiscountComp";
import ShopByCategory from "./ShopByCategory";
import SubscribeToNewsLetter from "./SubscribeToNewsLetter";

const HomeComp = () => {
  useEffect(() => {
    window.scrollTo({ top: -80, behavior: "smooth" });
  }, []);

  return (
    <MainContainer>
      <FirstSection />
      <NewArrivals />
      <TopSelling />
      <DiscountComp />
      <ShopByCategory />
      <SubscribeToNewsLetter />
    </MainContainer>
  );
};

export default HomeComp;
