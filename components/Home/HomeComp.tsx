import React from "react";
import MainContainer from "../MainContainer";
import FirstSection from "./FirstSection";
import NewArrivals from "./NewArrivals";
import TopSelling from "./TopSelling";
import DiscountComp from "./DiscountComp";
import ShopByCategory from "./ShopByCategory";
import SubscribeToNewsLetter from "./SubscribeToNewsLetter";

const HomeComp = () => {
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
