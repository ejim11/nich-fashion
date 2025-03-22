import React from "react";
import MainContainer from "../MainContainer";
import { orders } from "@/data/orders";
import { OrderItem } from "@/types/orderItem";
import Link from "next/link";

const OrdersComp = () => {
  return (
    <MainContainer classname="min-h-screen">
      <h3 className="font-extrabold text-[4.8rem] font-monserrat uppercase mb-[4.8rem]">
        Orders
      </h3>
      <div className="w-full flex flex-col">
        {orders.map((item: OrderItem) => (
          <Link
            key={item.id}
            href={`/orders/${item.id}`}
            className="flex flex-col p-[3rem] border border-gray-200 rounded-[2rem] mb-[3rem] last:mb-0 hover:bg-gray-100 transition-all duration-150 ease-in"
          >
            <span className="font-bold text-[2rem] font-satoshi">
              {item.id}
            </span>
          </Link>
        ))}
      </div>
    </MainContainer>
  );
};

export default OrdersComp;
