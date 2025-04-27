"use client";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ShoppingItemSkeleton = () => {
  return (
    <div className="flex  flex-col relative z-20 w-full xmd:mb-[10rem]">
      <SkeletonTheme baseColor="#f1f3f5" highlightColor="#adb5bd">
        <div className="w-full h-[25rem] rounded-md mb-[1rem]">
          <Skeleton count={1} className="h-full" />
        </div>

        <div className="flex-1 h-[1.5rem]">
          <Skeleton count={2} className="h-full" />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default ShoppingItemSkeleton;
