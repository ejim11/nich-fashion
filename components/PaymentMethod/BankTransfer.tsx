"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import React, { useState } from "react";
import Image from "next/image";
import {
  checkImageSize,
  fileHandler,
} from "@/utils/imageFileReaderAndSizeChecker";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { LuBadgeAlert } from "react-icons/lu";
import MainContainer from "../MainContainer";
import formatAmount from "@/utils/formatAmount";
import { FallingLines } from "react-loader-spinner";
import { saveBankTransferDetailsDispatch } from "@/actions/bankTransferActions";
import { toastError, toastSuccess } from "@/utils/toastFuncs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const paymentDetails = [
  {
    title: "Account Name",
    value: "ADION ELEVATION",
  },
  {
    title: "Account Number",
    value: "ADION ELEVATION",
  },
  {
    title: "Bank Name",
    value: "Access Bank (Diamond)",
  },
];

const BankTransferComp = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const { paymentInfo } = useAppSelector((state) => state.payment);

  const { token } = useAppSelector((state) => state.auth);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [imageObj, setImageObj] = useState();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [image, setImage] = useState<any>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setImg = (file: any) => {
    setImageObj(file);
    setImage(fileHandler(file));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeImageHandler = (e: any) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      checkImageSize(
        file,
        <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] text-color-red" />,
        setImg
      );
    }
  };

  const paymentHandler = () => {
    const trfDetails = {
      ...paymentInfo,
      file: imageObj,
    };

    const navFunc = () => {
      router.push("/orders?success=yes");
    };

    dispatch(
      saveBankTransferDetailsDispatch(
        trfDetails,
        token,
        setIsLoading,
        toastSuccess,
        toastError,
        <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
        <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />,
        navFunc
      )
    );
  };

  return (
    <MainContainer>
      <div className="p-[3rem] border-b-[0.1rem] border-b-[rgba(175,175,175,1)] ">
        <p className="text-[1.4rem] leading-[2.4rem] text-[rgba(25,25,25,1)] ">
          Amount to pay
        </p>
        <p className="text-[3.2rem] font-[900] leading-[2.9rem]">
          NGN {formatAmount(String(paymentInfo.totalAmount))}
        </p>
      </div>
      <div className="p-[3rem] font-satoshi">
        <p className="font-medium text-[2.8rem] leading-[2.1rem] text-black mb-[1.6rem]">
          Payment Method: Bank Transfer
        </p>
        <p className="text-[2rem] leading-[2.1rem]">
          Important Note: Please you must click on “I have made payment” button
          for your order to be processed.
        </p>
        <div className="mt-[2.4rem] font-satoshi">
          {paymentDetails.map((detail) => (
            <div
              key={detail.title}
              className="flex w-[70%] justify-between items-center text-black mb-[1.4rem] last:mb-0"
            >
              <p className="font-medium leading-[2.1rem]">{detail.title}</p>
              <p className="font-bold leading-[2.1rem]">{detail.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-[3rem] pb-[3rem] font-satoshi text-black">
        <p className="text-[2.4rem] font-medium leading-[2.1rem]">
          Proof of Payment
        </p>
        <p className="leading-[2.1rem] mt-[1rem] mb-[2.4rem]">
          You can also add your proof of payment if available
        </p>
        <div
          className="flex flex-col w-[60%] mx-auto items-center px-[1.5rem] py-[3rem] text-center border-2 border-black rounded-[0.6rem] border-dotted"
          // onDrop={onDropEventImageHandler}
          // onDragOver={handleDragOver}
        >
          {image ? (
            <div className="w-[5rem] h-[5rem]">
              <Image
                src={image}
                alt="bank-transfer-reciept-image"
                priority
                width={20}
                height={20}
                className="w-full h-full rounded-[0.6rem]"
              />
            </div>
          ) : (
            <label htmlFor="reciept-image" className="cursor-pointer">
              <AiOutlineCloudUpload className=" w-[4.6rem] h-[4.6rem]" />
            </label>
          )}
          <label
            htmlFor="reciept-image"
            className="flex flex-col cursor-pointer border border-gray-400 my-[1.5rem] p-[1.2rem] rounded-[0.6rem]"
          >
            <p className="font-medium leading-[2.1rem] text-center capitalize ">
              Upload image
            </p>
          </label>
          <p className="leading-[2.1rem] ">(Max file size : 3mb)</p>
        </div>
        <input
          type="file"
          name="reciept-image"
          accept="image/*"
          id="reciept-image"
          className="border hidden"
          onChange={onChangeImageHandler}
        />
        <button
          onClick={paymentHandler}
          type="submit"
          className="flex py-[1.9rem] w-full px-[5rem] bg-black text-white items-center justify-center font-satoshi font-medium rounded-[6.0.8rem] mt-[2.4rem]"
        >
          {isLoading ? (
            <FallingLines
              height="25"
              width="25"
              color={"white"}
              visible={true}
            />
          ) : (
            "I have made payment"
          )}
        </button>
      </div>
    </MainContainer>
  );
};

export default BankTransferComp;
