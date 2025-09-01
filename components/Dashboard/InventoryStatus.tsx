"use client";
import { useAppSelector } from "@/hooks/stateHooks";
import React from "react";

export type InventoryItem = {
  id: string;
  name: string;
  stock: number;
};

const stockBgColors: Record<string, string> = {
  empty: "bg-[rgba(153,153,153,1)]",
  low: "bg-[rgba(92,92,92,1)]",
  full: "bg-black",
};

const InventoryStatus = () => {
  const { inventory } = useAppSelector((state) => state.adminDashboard);

  function getStockStatus(stock: number): string {
    if (stock === 0) return "empty";
    if (stock > 0 && stock <= 50) return "low";
    return "full";
  }

  return (
    <div className="bg-white rounded-[2rem] border border-[rgba(248,249,250,1)] flex flex-col px-[3rem] py-[2.3rem] shadow-custom-4 ">
      <h3 className="capitalize text-[2rem] mb-[3rem] font-bold font-satoshi">
        inventory status
      </h3>
      <div>
        {inventory.map((item: InventoryItem) => (
          <div
            key={item.id}
            className="flex justify-between py-[0.8rem] border-b border-b-[rgba(239,241,243,1)] last:border-0 capitalize mb-[1.6rem] last:mb-0"
          >
            <p className="font-satoshi font-medium text-[rgba(25,25,25,1)]">
              {item.name}
            </p>
            <p
              className={`${
                stockBgColors[getStockStatus(item.stock)]
              } text-white px-[0.8rem] py-[0.4rem] rounded-[3rem] font-satoshi text-[1.4rem]`}
            >
              {getStockStatus(item.stock) === "empty"
                ? "Out of stock"
                : getStockStatus(item.stock) === "low"
                ? "low stock"
                : "in stock"}{" "}
              ({item.stock})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryStatus;
