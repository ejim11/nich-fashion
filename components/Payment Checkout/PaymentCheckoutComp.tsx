"use client";
import React, { useState } from "react";
import MainContainer from "../MainContainer";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { useAppSelector } from "@/hooks/stateHooks";
import InputComponent from "../InputComponent";
import { SubmitHandler, useForm } from "react-hook-form";
import { registrationOption } from "@/utils/inputValidator";
import {
  getTotalPriceOfCartItems,
  getTotalQuantityOfCartItems,
} from "@/utils/getTotalPriceInCart";
import formatAmount from "@/utils/formatAmount";
import { MdArrowForward } from "react-icons/md";
import { useRouter } from "next/navigation";
// import { toastError, toastSuccess } from "@/utils/toastFuncs";

type FormData = {
  firstName: "";
  lastName: "";
  streetAddress: "";
  city: "";
  state: "";
  zipCode?: "";
  phoneNumber: "";
  email: "";
  country: "";
  stateDelivery: "";
  cityDelivery: "";
  streetDelivery: "";
};

const PaymentCheckoutComp = () => {
  const router = useRouter();

  const { cart } = useAppSelector((state) => state.cart);

  const [billingAddressType, setBillingAddressType] = useState<string>("same");
  const [shippingMethod, setShippingMethod] = useState<string>("pick-up");

  const totalPrice = getTotalPriceOfCartItems(cart);

  const totalQty = getTotalQuantityOfCartItems(cart);

  const discount = 0.2 * totalPrice;

  const grandTotal = totalPrice - discount + 4000;

  const orderSummary = [
    {
      title: "items",
      value: totalQty,
    },
    {
      title: "Sub Total",
      value: totalPrice,
    },
    {
      title: "Delivery",
      value: shippingMethod === "pick-up" ? 0 : 4000,
    },
    {
      title: "Coupon discount",
      value: discount,
    },
  ];

  const deliveryAddressData: { title: string; type: string }[] = [
    {
      title: "Same as home address",
      type: "same",
    },
    {
      title: "Use a different address",
      type: "different",
    },
  ];

  const shippingMethods = [
    {
      title: "Customer pick-up",
      method: "pick-up",
    },
    {
      title: "Delivery",
      method: "delivery",
    },
  ];

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      email: "",
      country: "",
      stateDelivery: "",
      cityDelivery: "",
      streetDelivery: "",
    },
  });

  const submitPaymentCheckout: SubmitHandler<FormData> = (data) => {
    console.log(data);
    router.push("/payment-method");
  };

  return (
    <MainContainer>
      <div className="flex items-center font-satoshi text-[1.8rem] text-black font-medium">
        <Link href="/">Home</Link>
        <FiChevronRight className=" mr-[1.6rem]" />
        <Link href="/cart">Cart</Link>
        <FiChevronRight className=" mr-[1.6rem]" />
        <p className="text-[#ADADAD]">Payment Checkout</p>
      </div>
      <form
        className="flex relative mt-[5rem]"
        noValidate
        onSubmit={handleSubmit(submitPaymentCheckout)}
      >
        <div className="flex-1 mr-[2.4rem] font-satoshi">
          <p className="font-monserrat text-[4.8rem] font-extrabold mb-[3.5rem] text-black">
            PAYMENT CHECKOUT
          </p>
          <p className="font-satoshi text-[2.2rem] text-black mb-[3.6rem]">
            Billing Details
          </p>
          <div className="flex w-full justify-between">
            <InputComponent
              placeholder={"Enter your first name"}
              type={"text"}
              register={register}
              error={errors}
              label="First name"
              labelTextColor="text-[2rem] font-satoshi font-medium"
              name={"firstName"}
              validation={registrationOption.firstName}
              pl="pl-[2rem]"
              containerWidth="w-[48%]"
            />
            <InputComponent
              placeholder={"Enter your last name"}
              type={"text"}
              register={register}
              error={errors}
              label="Last name"
              labelTextColor="text-[2rem] font-satoshi font-medium"
              name={"lastName"}
              validation={registrationOption.lastName}
              pl="pl-[2rem]"
              containerWidth="w-[48%]"
            />
          </div>

          <InputComponent
            placeholder={"Enter your mail address"}
            type={"email"}
            register={register}
            error={errors}
            label="Email"
            labelTextColor="text-[2rem] font-satoshi font-medium"
            name={"email"}
            pl="pl-[2rem]"
            validation={registrationOption.email}
          />
          <InputComponent
            placeholder={"Enter your phone number"}
            type={"text"}
            register={register}
            error={errors}
            label="Phone number"
            labelTextColor="text-[2rem] font-satoshi font-medium"
            name={"phoneNumber"}
            pl="pl-[2rem]"
            validation={registrationOption.phoneNumber}
          />
          <InputComponent
            placeholder={"Enter your Country"}
            type={"text"}
            register={register}
            error={errors}
            label="Country"
            labelTextColor="text-[2rem] font-satoshi font-medium"
            name={"country"}
            pl="pl-[2rem]"
            validation={registrationOption.country}
          />
          <InputComponent
            placeholder={"Enter your state"}
            type={"text"}
            register={register}
            error={errors}
            label="State"
            labelTextColor="text-[2rem] font-satoshi font-medium"
            name={"state"}
            pl="pl-[2rem]"
            validation={registrationOption.state}
          />
          <InputComponent
            placeholder={"Enter your city"}
            type={"text"}
            register={register}
            error={errors}
            label="City"
            labelTextColor="text-[2rem] font-satoshi font-medium"
            name={"city"}
            pl="pl-[2rem]"
            validation={registrationOption.city}
          />
          <InputComponent
            placeholder={"Enter your street address"}
            type={"text"}
            register={register}
            error={errors}
            label="Street address"
            labelTextColor="text-[2rem] font-satoshi font-medium"
            name={"streetAddress"}
            pl="pl-[2rem]"
            validation={registrationOption.streetAddress}
          />
          <InputComponent
            placeholder={"Enter your zip code"}
            type={"number"}
            register={register}
            error={errors}
            label="Zip code (optional)"
            labelTextColor="text-[2rem] font-satoshi font-medium"
            name={"zipcode"}
            pl="pl-[2rem]"
            validation={registrationOption.zipCode}
          />
          <div>
            <p className="font-satoshi text-[2rem] font-medium mb-[1.5rem]">
              Shipping Method
            </p>
            <div className="flex w-full justify-between mb-[2rem]">
              {shippingMethods.map(
                (data: { title: string; method: string }) => (
                  <button
                    key={data.title}
                    type="button"
                    className="flex bg-white items-center border rounded-[1.42rem] py-[1rem] px-[1.5rem] w-[48%] transition-all duration-150 ease-in"
                    onClick={() => {
                      setShippingMethod(data.method);
                    }}
                  >
                    <div className="w-[1.9rem] h-[1.9rem] rounded-full flex items-center justify-center border border-black mr-[1rem]">
                      <div
                        className={`${
                          data.method === shippingMethod
                            ? "bg-black"
                            : "bg-white"
                        } w-[1.3rem] h-[1.3rem] rounded-full `}
                      ></div>
                    </div>
                    <span className="font-satoshi  font-medium">
                      {data.title}
                    </span>
                  </button>
                )
              )}
            </div>
          </div>
          {shippingMethod === "delivery" && (
            <div>
              <p className="font-satoshi text-[2rem] font-medium mb-[1.5rem]">
                Delivery Address
              </p>
              <div className="flex w-full justify-between mb-[2rem]">
                {deliveryAddressData.map(
                  (data: { title: string; type: string }) => (
                    <button
                      key={data.title}
                      type="button"
                      className="flex bg-white items-center border rounded-[1.42rem] py-[1rem] px-[1.5rem] w-[48%] transition-all duration-150 ease-in"
                      onClick={() => {
                        setBillingAddressType(data.type);
                      }}
                    >
                      <div className="w-[1.9rem] h-[1.9rem] rounded-full flex items-center justify-center border border-black mr-[1rem]">
                        <div
                          className={`${
                            data.type === billingAddressType
                              ? "bg-black"
                              : "bg-white"
                          } w-[1.3rem] h-[1.3rem] rounded-full `}
                        ></div>
                      </div>
                      <span className="font-satoshi  font-medium">
                        {data.title}
                      </span>
                    </button>
                  )
                )}
              </div>
              {billingAddressType === "different" && (
                <div className="w-full">
                  <InputComponent
                    placeholder={"Enter the state"}
                    type={"text"}
                    label="State"
                    register={register}
                    error={errors}
                    labelTextColor="text-[2rem] font-satoshi font-medium"
                    name={"stateDelivery"}
                    pl="pl-[2rem]"
                    validation={registrationOption.stateBillingAddress}
                  />
                  <InputComponent
                    placeholder={"Enter the city"}
                    type={"text"}
                    label="City"
                    register={register}
                    error={errors}
                    labelTextColor="text-[2rem] font-satoshi font-medium"
                    name={"cityDelivery"}
                    pl="pl-[2rem]"
                    validation={registrationOption.cityBillingAddress}
                  />
                  <InputComponent
                    placeholder={"Enter the street address"}
                    type={"text"}
                    label="Street Address"
                    register={register}
                    error={errors}
                    labelTextColor="text-[2rem] font-satoshi font-medium"
                    name={"streetDelivery"}
                    pl="pl-[2rem]"
                    validation={registrationOption.streetBillingAddress}
                  />
                </div>
              )}
            </div>
          )}
        </div>
        <div className="w-[60rem] border rounded-[2rem] sticky self-start top-[7.5rem] py-[2rem] px-[2.4rem]">
          <p className="font-bold text-[2.4rem] capitalize mb-[2.4rem]">
            order summary
          </p>
          <div className="border-b-[0.1rem] border-b-[rgba(0,0,0,0.1)]">
            {orderSummary.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between w-full mb-[2rem]  text-[2rem]"
              >
                <p className=" text-[rgba(0,0,0,0.6)]">{item.title}</p>
                <p
                  className={`font-bold ${
                    item.title.includes("discount")
                      ? "text-[rgba(255,51,51,1)]"
                      : "text-black"
                  } `}
                >
                  {item.title.includes("discount")
                    ? `-N${formatAmount(String(item.value))}`
                    : `${item.title.includes("items") ? "" : "N"}${formatAmount(
                        String(item.value)
                      )}`}
                </p>
              </div>
            ))}
          </div>
          <div className="py-[2rem] w-full flex justify-between items-center text-[2rem] text-black">
            <p>Total</p>
            <p className="text-[2.4rem] font-bold">
              N{formatAmount(String(grandTotal))}
            </p>
          </div>
          <button
            type="submit"
            className="flex py-[1.9rem] w-full bg-black text-white items-center justify-center font-satoshi font-medium rounded-[6.2rem] mt-[2.4rem]"
          >
            <span>Proceed</span>
            <MdArrowForward className="w-[2.4rem] h-[2.4rem] ml-[1.2rem]" />
          </button>
        </div>
      </form>
    </MainContainer>
  );
};

export default PaymentCheckoutComp;
