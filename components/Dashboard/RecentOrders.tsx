"use client";
import { useAppSelector } from "@/hooks/stateHooks";
import formatAmount from "@/utils/formatAmount";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RecentOrders = ({ isLoading }: { isLoading: boolean }) => {
  const { recentOrders } = useAppSelector((state) => state.adminDashboard);

  const tableHeaders = ["order", "customer", "status", "amount"];

  type OrderStatus =
    | "placed"
    | "processing"
    | "shipped"
    | "delivery"
    | "delivered";

  const statusColors: Record<OrderStatus, string> = {
    placed: "bg-[rgba(251,246,200,1)] text-[rgba(127,88,53,1)]",
    processing: "text-[rgba(0,149,255,1)] bg-[rgba(182,225,255,1)]",
    shipped: "text-[rgba(0,111,74,1)] bg-[rgba(177,255,229,1)]",
    delivery: "text-purple-800 bg-purple-200",
    delivered: "text-gray-800 bg-gray-200 ",
  };

  return (
    <div className="bg-white rounded-[2rem] border border-[rgba(248,249,250,1)] flex flex-col px-[3rem] py-[2.3rem] shadow-custom-4 mt-[2.4rem]">
      <p className="capitalize text-[2rem] mb-[3rem] font-bold font-satoshi">
        recent orders
      </p>
      <div className="w-full">
        <table className="w-full">
          <thead className="">
            <tr className="text-left border border-[rgba(239,241,243,1)] bg-[rgba(243,243,243,1)] ">
              {tableHeaders.map((header: string, i: number) => (
                <th key={i} className="">
                  <span className=" capitalize text-nowrap text-[1.8rem] font-medium font-satoshi px-[1rem] py-[0.5rem]">
                    {header}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentOrders
              .map(
                (order: {
                  id: string;
                  user: { firstName: string; lastName: string };
                  orderStatus: OrderStatus;
                  totalAmount: number;
                }) => ({
                  id: order.id,
                  customer: `${order.user.firstName} ${order.user.lastName}`,
                  status: order.orderStatus,
                  amount: order.totalAmount,
                })
              )
              .map((or, i) => (
                <tr
                  key={i}
                  className="border-b border-b-[rgba(239,241,243,1)] "
                >
                  <td className="px-[1rem] py-[1rem] ">
                    #{or.id.split("-")[0]}
                  </td>
                  <td>{or.customer}</td>
                  <td className="pl-[1rem]">
                    <span
                      className={`${
                        statusColors[or.status]
                      } px-[0.8rem] py-[0.4rem] rounded-[3rem] capitalize`}
                    >
                      {or.status}
                    </span>
                  </td>
                  <td className="pl-[1.5rem]">
                    N{formatAmount(String(or.amount))}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
