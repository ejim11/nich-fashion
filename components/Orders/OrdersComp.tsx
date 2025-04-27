"use client";
import React, { useEffect, useMemo, useState } from "react";
import MainContainer from "../MainContainer";
import { OrderItem } from "@/types/orderItem";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { getUserOrdersDispatch } from "@/actions/orderActions";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { LuBadgeAlert } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useSearchParams } from "next/navigation";

const OrdersComp = () => {
  const dispatch = useAppDispatch();

  const searchParams = useSearchParams();

  // Convert searchParams to an object if needed
  const searchParamsObject = useMemo(
    () => ({
      success: searchParams.get("success") || undefined,
    }),
    [searchParams]
  );

  const { id: userId, email } = useAppSelector((state) => state.user.details);

  const { token } = useAppSelector((state) => state.auth);

  const { orders } = useAppSelector((state) => state.orders);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const { success } = searchParamsObject;

    if (success) {
      toastSuccess(
        "Order Created Successfully",
        <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />
      );
    }
  }, [searchParamsObject]);

  useEffect(() => {
    dispatch(
      getUserOrdersDispatch(
        userId,
        token,
        setIsLoading,
        toastSuccess,
        toastError,
        <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
        <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />
      )
    );
  }, [dispatch, token, userId]);

  return (
    <MainContainer classname="min-h-screen">
      <h3 className="font-extrabold text-[4.8rem]  xl:text-[4rem] smd:text-[2.8rem] font-monserrat uppercase mb-[4.8rem]">
        Orders
      </h3>
      <div className="w-full flex flex-col">
        {isLoading ? (
          <p>Loading...</p>
        ) : !isLoading && orders.length <= 0 ? (
          <p className="text-[2rem] font-satoshi font-700">
            You have no orders
          </p>
        ) : (
          orders.map((item: OrderItem) => (
            <Link
              key={item.id}
              href={`/orders/${item.id}`}
              className="flex flex-col p-[3rem] smd:p-[2rem] sm:p-[1.5rem] border border-gray-200 rounded-[2rem] mb-[3rem] last:mb-0 hover:bg-gray-100 transition-all duration-150 ease-in"
            >
              <span className="font-bold text-[2rem] sm:text-[1.8rem] font-satoshi uppercase">
                {email.slice(0, 2)}-{item.id}
              </span>
            </Link>
          ))
        )}
      </div>
    </MainContainer>
  );
};

export default OrdersComp;
