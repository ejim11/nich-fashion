"use client";
import React, { useEffect, useState } from "react";
import MainContainer from "../MainContainer";
import formatDate from "@/utils/formatDate";
import { OrderState } from "@/enums/orderState.enum";
import { FaCheck, FaRegCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import arrowImg from "../../assets/orders/arrow.svg";
import arrowDottedImg from "../../assets/orders/arrow2.svg";
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { getOrderByIdDispatch } from "@/actions/orderActions";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { LuBadgeAlert } from "react-icons/lu";

const orderStates = [
  {
    state: OrderState.PLACED,
    title: "placed",
  },
  {
    state: OrderState.PROCESSING,
    title: "processing",
  },
  {
    state: OrderState.SHIPPED,
    title: "shipped",
  },
  {
    state: OrderState.OUTFORDELIVERY,
    title: "Out for delivery",
  },
  {
    state: OrderState.DELIVERED,
    title: "delivered",
  },
];

const OrderItemDetail = ({ orderId }: { orderId: string }) => {
  const dispatch = useAppDispatch();

  const { token } = useAppSelector((state) => state.auth);

  const { email } = useAppSelector((state) => state.user.details);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [order, setOrder] = useState<{ [key: string]: any }>({});

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const formattedOrderCreatedDate = formatDate(order?.createdAt);
  const formattedOrderDeliveryDate = order.estimatedDeliveryDate
    ? formatDate(order.estimatedDeliveryDate)
    : "";

  const orderStateIndex = orderStates.findIndex(
    (item) => item.state === order.orderStatus
  );

  useEffect(() => {
    dispatch(
      getOrderByIdDispatch(
        orderId,
        token,
        setOrder,
        setIsLoading,
        toastSuccess,
        toastError,
        <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
        <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />
      )
    );
  }, [dispatch, orderId, token]);

  return (
    <MainContainer>
      <h3 className="font-extrabold text-[4.8rem] font-monserrat capitalize mb-[2.4rem] text-black">
        track your order
      </h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        order.id && (
          <>
            <div className="flex items-center justify-between w-full font-monserrat mb-[3rem]">
              <p className="text-[3.2rem] font-semibold text-black">
                Order {email.slice(0, 2).toUpperCase()}-{order.id.slice(10)}
              </p>
              <p className="text-[2.4rem] font-medium">
                Ordered: {formattedOrderCreatedDate?.month}{" "}
                {formattedOrderCreatedDate?.dateInNumber},{" "}
                {formattedOrderCreatedDate?.year}
              </p>
            </div>
            {formattedOrderDeliveryDate && (
              <div className="flex flex-col items-center text-center my-[10rem] font-monserrat">
                <p className=" font-semibold">Estimated Delivery</p>
                <p className="my-[3.6rem]  font-bold text-[2.4rem] leading-[100%]">
                  {formattedOrderDeliveryDate?.day},{" "}
                  {formattedOrderDeliveryDate?.month}{" "}
                  {formattedOrderDeliveryDate?.dateInNumber},{" "}
                  {formattedOrderDeliveryDate?.year}
                </p>
                <p className="font-semibold">Your package is on its way!</p>
              </div>
            )}
            <div className="bg-[rgba(255,255,255,1)] p-[5rem] ">
              <div className="bg-[rgba(217,217,217,1)] h-[1.1rem] w-full mb-[3rem] rounded-[3rem]">
                <div
                  style={{ width: `${(orderStateIndex + 1) * 20}%` }}
                  className="h-[1.1rem] rounded-[3rem] bg-black"
                ></div>
              </div>
              <div className="w-full flex mb-[5rem] overflow-x-auto order-states">
                <div className="  flex items-center ">
                  {orderStates
                    .slice(0, orderStateIndex + 1)
                    .map((item, index) => (
                      <div
                        key={item.title}
                        className={` flex  items-center text-center`}
                      >
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-[4.6rem] h-[4.6rem] bg-black text-white rounded-full flex items-center justify-center mb-[1.6rem]`}
                          >
                            <FaCheck className="w-[2.8rem] h-[2.8rem]" />
                          </div>
                          <p className="capitalize ">{item.title}</p>
                        </div>
                        {index !== orderStateIndex ? (
                          <div className="flex-1 mx-[1rem]">
                            <Image
                              src={arrowImg}
                              alt="arrow image"
                              priority
                              width={300}
                              height={50}
                              className="w-full h-full"
                            />
                          </div>
                        ) : index === orderStates.length - 1 ? null : (
                          <div className="flex-1 mx-[1rem] ">
                            <Image
                              src={arrowDottedImg}
                              alt="arrow image"
                              priority
                              width={300}
                              height={50}
                              className="w-full h-full"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                </div>
                <div className="flex-1 flex items-center justify-between pl-[3rem]">
                  {orderStates.slice(orderStateIndex + 1).map((item) => (
                    <div
                      key={item.title}
                      className={` flex flex-col items-center text-center mx-[1rem] capitalize`}
                    >
                      <div
                        className={`w-[3.5rem] h-[3.5rem] bg-transparent border border-[rgba(190,190,190,1)] text-white rounded-full flex items-center justify-center mb-[1.6rem]`}
                      >
                        <FaCheck className="w-[2rem] h-[2rem] text-[rgba(190,190,190,1)]" />
                      </div>

                      <p className="text-[rgba(190,190,190,1)]">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[rgba(243,243,243,1)] px-[7.6rem] py-[6.5rem] rounded-[1.6rem] border-[0.1rem] text-black border-[rgba(215,213,213,1)]">
                <p className="text-[3.2rem] font-semibold font-monserrat mb-[1.3rem] ">
                  Shipment Details
                </p>
                <p className="font-satoshi text-[2.4rem]">
                  Carrier: <span className="font-bold">{order.carrier}</span>
                </p>
                <p className="font-satoshi text-[2.4rem]">
                  Carrier Phone no:{" "}
                  <span className="font-bold">{order.carrierPhoneNumber}</span>
                </p>
                <p className="font-satoshi text-[2.4rem]">
                  Shipping Address:{" "}
                  <span className="font-bold capitalize">
                    {order.deliveryAddress}
                  </span>
                </p>
              </div>
              <div className="mt-[2rem] flex justify-end">
                <button
                  type="button"
                  className="bg-black text-white px-[3rem] py-[1rem] rounded-[2rem]"
                >
                  Contact support
                </button>
              </div>
            </div>
          </>
        )
      )}
    </MainContainer>
  );
};

export default OrderItemDetail;
