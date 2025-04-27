"use client";
import React, { useEffect, useState } from "react";
import MainContainer from "../MainContainer";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
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
import { getDeliveryStateDispatch } from "@/actions/deliveryStateAction";
import { FallingLines } from "react-loader-spinner";
import { updateUserDispatch } from "@/actions/userActions";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { convertProductData } from "@/utils/convertCartItemsToDtoItems";
import { paymentActions } from "@/slices/paymentSlice";

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

type FormData = {
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  zipCode?: string;
  phoneNumber: string;
  email: string;
  country: string;
  cityDelivery: string;
  deliveryPicker: string;
  streetDelivery: string;
};

const PaymentCheckoutComp = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const { cart } = useAppSelector((state) => state.cart);

  const {
    firstName,
    lastName,
    city,
    country,
    state,
    phoneNumber,
    streetAddress,
    email,
    zipCode,
  } = useAppSelector((state) => state.user.details);

  const { token } = useAppSelector((state) => state.auth);

  const { id: discountId, percentOff } = useAppSelector(
    (state) => state.discounts.promoInfo
  );

  const { fee } = useAppSelector((state) => state.deliveryState);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [billingAddressType, setBillingAddressType] = useState<string>("same");

  const [shippingMethod, setShippingMethod] = useState<string>("pick-up");

  const [userStateLocation, setUserStateLocation] = useState<string>(
    state ?? ""
  );

  const [userStateLocationErrorText, setUserStateLocationErrorText] =
    useState<string>("");

  const [deliveryPickerStateErrorText, setDeliveryPickerStateErrorText] =
    useState<string>("");

  const [deliveryPickerState, setDeliveryPickerState] = useState<string>("");

  const totalPrice = getTotalPriceOfCartItems(cart);

  const totalQty = getTotalQuantityOfCartItems(cart);

  const delivery = shippingMethod === "pick-up" ? 0 : fee ? fee : 4000;

  const discount = (percentOff / 100) * totalPrice;

  const grandTotal = totalPrice - discount + delivery;

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
      value: delivery,
    },
    {
      title: "Coupon discount",
      value: discount,
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: firstName ?? "",
      lastName: lastName ?? "",
      streetAddress: streetAddress ?? "",
      city: city ?? "",
      zipCode: zipCode ?? "",
      phoneNumber: phoneNumber ?? "",
      email: email ?? "",
      country: country ?? "",
      deliveryPicker: "",
      cityDelivery: "",
      streetDelivery: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeUserStateLocationHandler = (e: any) => {
    if (e.target.value) setUserStateLocationErrorText("");
    setUserStateLocation(e.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeDeliveryPickerStateHandler = (e: any) => {
    if (e.target.value) setDeliveryPickerStateErrorText("");
    setDeliveryPickerState(e.target.value);
  };

  const resetForm = () => {
    reset({
      firstName: firstName ?? "",
      lastName: lastName ?? "",
      streetAddress: streetAddress ?? "",
      city: city ?? "",
      zipCode: zipCode ?? "",
      phoneNumber: phoneNumber ?? "",
      email: email ?? "",
      country: country ?? "",
      deliveryPicker: "",
      cityDelivery: "",
      streetDelivery: "",
    });

    router.push("/payment-method");
  };

  const submitPaymentCheckout: SubmitHandler<FormData> = (data) => {
    if (!userStateLocation) {
      setUserStateLocationErrorText("State is required");
      return;
    }

    if (billingAddressType === "different" && !deliveryPickerState) {
      setDeliveryPickerStateErrorText("State is required");
      return;
    }

    const userData = Object.fromEntries(
      Object.entries({
        firstName: data.firstName,
        lastName: data.lastName,
        city: data.city,
        country: data.country,
        phoneNumber: data.phoneNumber,
        state: userStateLocation,
        streetAddress: data.streetAddress,
        zipCode: data.zipCode,
      }).filter(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, value]) =>
          value !== "undefined" && value !== undefined && value !== ""
      )
    );

    const deliveryPicker =
      billingAddressType === "different"
        ? `${data.deliveryPicker}`
        : `${firstName} ${lastName}`;

    const deliveryAddress =
      billingAddressType === "different"
        ? `${data.streetDelivery}, ${data.cityDelivery}, ${deliveryPickerState}`
        : `${data.streetAddress}, ${data.city}, ${userStateLocation}`;

    const products = convertProductData(cart);

    const paymentInfo = {
      deliveryPicker,
      deliveryAddress,
      discountId: discountId ?? "",
      totalAmount: grandTotal,
      products,
      shippingMethod: shippingMethod,
    };
    dispatch(paymentActions.addPaymentInfo(paymentInfo));

    dispatch(
      updateUserDispatch(
        userData,
        token,
        setIsLoading,
        toastSuccess,
        toastError,
        <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
        <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />,
        resetForm
      )
    );
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timer: any;
    if (billingAddressType === "different" && deliveryPickerState) {
      timer = setTimeout(() => {
        dispatch(getDeliveryStateDispatch(deliveryPickerState));
      }, 1000);
      return;
    }

    if (userStateLocation && billingAddressType === "same") {
      timer = setTimeout(() => {
        dispatch(getDeliveryStateDispatch(userStateLocation));
      }, 1000);
      return;
    }

    return () => {
      clearTimeout(timer);
    };
  }, [billingAddressType, deliveryPickerState, dispatch, userStateLocation]);

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
        className="flex relative mt-[5rem] w-full xmd:flex-wrap"
        noValidate
        onSubmit={handleSubmit(submitPaymentCheckout)}
      >
        <div className="flex-1 mr-[2.4rem] font-satoshi xmd:w-full xmd:flex-none">
          <p className="font-monserrat text-[4.8rem] xl:text-[4rem] smd:text-[2.8rem]  font-extrabold mb-[3.5rem] text-black">
            PAYMENT CHECKOUT
          </p>
          <p className="font-satoshi text-[2.2rem] text-black mb-[3.6rem]">
            Billing Details
          </p>
          <div className="flex w-full justify-between sm:flex-wrap">
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
              containerWidth="w-[48%] sm:w-full"
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
              containerWidth="w-[48%] sm:w-full"
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
            placeholder={"Enter your country"}
            type={"text"}
            register={register}
            error={errors}
            label="Country"
            labelTextColor="text-[2rem] font-satoshi font-medium"
            name={"country"}
            pl="pl-[2rem]"
            validation={registrationOption.country}
          />
          <div className="w-full flex flex-col mb-[2rem]">
            <label
              htmlFor="state"
              className="capitalize   mb-[.5rem] text-[2rem] font-satoshi font-medium"
            >
              State
            </label>
            <div className="w-full flex flex-col">
              <input
                type="text"
                name="state"
                id="state"
                placeholder="Enter your state"
                value={userStateLocation}
                onChange={onChangeUserStateLocationHandler}
                className={`${
                  userStateLocationErrorText
                    ? "border-red-500 text-red-500"
                    : "border-[#D9D9D9]"
                } px-[2rem] py-[1.5rem] bg-white border w-full ring-0 outline-none focus:ring-0 rounded-lg focus:outline-none `}
              />
              {userStateLocationErrorText && (
                <small className="text-red-500 mt-[0.5rem]">
                  {userStateLocationErrorText}
                </small>
              )}
            </div>
          </div>

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
            name={"zipCode"}
            pl="pl-[2rem]"
            validation={registrationOption.zipCode}
          />
          <div>
            <p className="font-satoshi text-[2rem] font-medium mb-[1.5rem]">
              Shipping Method
            </p>
            <div className="flex w-full justify-between mb-[2rem] sm:flex-wrap">
              {shippingMethods.map(
                (data: { title: string; method: string }) => (
                  <button
                    key={data.title}
                    type="button"
                    className="flex bg-white items-center border rounded-[1.42rem] py-[1rem] px-[1.5rem] w-[48%] sm:w-full sm:mb-[2rem] sm:last:mb-0 transition-all duration-150 ease-in"
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
              <div className="flex w-full justify-between mb-[2rem] sm:flex-wrap">
                {deliveryAddressData.map(
                  (data: { title: string; type: string }) => (
                    <button
                      key={data.title}
                      type="button"
                      className="flex bg-white items-center border rounded-[1.42rem] py-[1rem] px-[1.5rem] w-[48%] sm:w-full sm:mb-[2rem] sm:last:mb-0 transition-all duration-150 ease-in"
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
                    placeholder={"Enter full name"}
                    type={"text"}
                    label="Fullname"
                    register={register}
                    error={errors}
                    labelTextColor="text-[2rem] font-satoshi font-medium"
                    name={"deliveryPicker"}
                    pl="pl-[2rem]"
                    validation={registrationOption.fullname}
                  />
                  <div className="w-full flex flex-col mb-[2rem]">
                    <label
                      htmlFor="delivery-state"
                      className="capitalize   mb-[.5rem] text-[2rem] font-satoshi font-medium"
                    >
                      State
                    </label>
                    <div className="w-full flex flex-col">
                      <input
                        type="text"
                        name="delivery-state"
                        id="delivery-state"
                        placeholder="Enter your state"
                        value={deliveryPickerState}
                        onChange={onChangeDeliveryPickerStateHandler}
                        className={`${
                          deliveryPickerStateErrorText
                            ? "border-red-500 text-red-500"
                            : "border-[#D9D9D9]"
                        } px-[2rem] py-[1.5rem] bg-white border w-full ring-0 outline-none focus:ring-0 rounded-lg focus:outline-none `}
                      />
                      {deliveryPickerStateErrorText && (
                        <small className="text-red-500 mt-[0.5rem]">
                          {deliveryPickerStateErrorText}
                        </small>
                      )}
                    </div>
                  </div>
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
        <div className="w-[60rem] border rounded-[2rem] sticky self-start top-[7.5rem] py-[2rem] px-[2.4rem] sm:px-[2rem] 2xl:w-[50rem] xlg:w-[45rem] xmd:w-full xmd:mt-[3rem]">
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
          {token ? (
            <button
              type="submit"
              className="flex py-[1.9rem] w-full bg-black text-white items-center justify-center font-satoshi font-medium rounded-[6.2rem] mt-[2.4rem]"
            >
              {isLoading ? (
                <FallingLines
                  height="25"
                  width="25"
                  color={"white"}
                  visible={true}
                />
              ) : (
                <>
                  <span>Proceed</span>
                  <MdArrowForward className="w-[2.4rem] h-[2.4rem] ml-[1.2rem]" />
                </>
              )}
            </button>
          ) : (
            <p className="font-600 font-satoshi text-[1.8rem]">
              Please login to proceed.
            </p>
          )}
        </div>
      </form>
    </MainContainer>
  );
};

export default PaymentCheckoutComp;
