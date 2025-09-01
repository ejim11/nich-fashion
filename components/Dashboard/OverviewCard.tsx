"use client";
import React, { ReactNode } from "react";
import { useAppSelector } from "@/hooks/stateHooks";
import { BsBox } from "react-icons/bs";
import { CgLoadbarDoc } from "react-icons/cg";
import { LuUsersRound } from "react-icons/lu";
import formatAmount from "@/utils/formatAmount";

type AdminData = {
  text: string;
  value: number;
  percentGrowth: number;
  icon: ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OverviewCard = ({ isLoading }: { isLoading: boolean }) => {
  const iconClassname = `text-current w-[2.4rem] h-[2.4rem]`;

  const { overviewCard } = useAppSelector((state) => state.adminDashboard);

  const {
    totalSales,
    totalSalesGrowth,
    customers,
    customersGrowth,
    orders,
    ordersGrowth,
  } = overviewCard;

  const adminData: AdminData[] = [
    {
      text: "Total Sales",
      value: totalSales,
      percentGrowth: totalSalesGrowth,
      icon: <BsBox className={iconClassname} />,
    },
    {
      text: "orders",
      value: orders,
      percentGrowth: ordersGrowth,
      icon: <CgLoadbarDoc className={iconClassname} />,
    },
    {
      text: "customers",
      value: customers,
      percentGrowth: customersGrowth,
      icon: <LuUsersRound className={iconClassname} />,
    },
  ];

  return (
    <div className="bg-white rounded-[2rem] border border-[rgba(248,249,250,1)] flex flex-col px-[3rem] py-[2.3rem] shadow-custom-4">
      <h3 className="text-[2rem] font-bold font-satoshi">Overview card</h3>
      <div className="flex justify-between mt-[3rem] gap-[3rem] ">
        {adminData.map((data: AdminData) => (
          <div
            key={data.text}
            className="bg-black text-white p-[3rem] rounded-[1.6rem] flex-1"
          >
            <div className="bg-[rgba(31,37,46,1)] flex items-center justify-center rounded-full w-[4.6rem] h-[4.6rem]">
              {data.icon}
            </div>
            <p className="text-[2.4rem] font-medium font-satoshi mt-[1.6rem]">
              {data.text}
            </p>
            <p className="font-satoshi">
              <span className="text-[3.2rem] font-bold ">
                {data.text === "customers"
                  ? data.value
                  : `N${formatAmount(String(data.value))}`}
              </span>
              <span
                className={`${
                  data.percentGrowth > 0
                    ? "text-[rgba(0,224,150,1)]"
                    : "text-red-500"
                } ml-[1rem] text-[2.4rem]`}
              >
                {data.percentGrowth > 0 ? "+" : ""}
                {data.percentGrowth}%
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCard;
