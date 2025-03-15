"use client";
import { ShoppingItem } from "@/types/shoppingItem";
import React from "react";
import Image from "next/image";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { checkoutActions } from "@/slices/checkoutSlice";
import Link from "next/link";

const CollectionItem = ({ collection }: { collection: ShoppingItem }) => {
  const dispatch = useAppDispatch();

  const iconClassname: string = "w-[2.4rem] h-[2.4rem] text-color-current";

  const toggleCheckoutHandler = () => {
    dispatch(checkoutActions.toggleItemCheckout(collection));
  };

  const { checkout } = useAppSelector((state) => state.checkout);

  const isChecked = (item: ShoppingItem): boolean => {
    const itemIsChecked: ShoppingItem | undefined = checkout.find(
      (it: ShoppingItem) => it.id === item.id
    );

    return !!itemIsChecked;
  };

  return (
    <Link
      href={`/collections/${collection.id}`}
      className="relative flex flex-col"
    >
      <div className="bg-color-grey-4 rounded-[2rem] px-[5rem] py-[1.8rem]">
        <Image
          src={collection.image}
          alt={`${collection.name} image`}
          priority
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
      <div className="flex w-full items-start mt-[1rem]">
        <p className=" text-[1.8rem] font-bold font-satoshi mr-[1rem]">
          {collection.name}
        </p>
        <button
          type="button"
          onClick={toggleCheckoutHandler}
          className={`${
            isChecked(collection) ? "text-yellow-500" : "text-black"
          } flex items-center ml-auto`}
        >
          {isChecked(collection) ? (
            <PiShoppingCartSimpleFill className={iconClassname} />
          ) : (
            <PiShoppingCartSimpleBold className={iconClassname} />
          )}
        </button>
      </div>
      <div className="text-[1.8rem] leading-[3.1rem] font-bold flex items-center">
        <p className="font-satoshi text-color-black   mr-[1rem]">
          {collection.discount > 0
            ? `$${
                collection.price -
                collection.price * (collection.discount / 100)
              }`
            : `$${collection.price}`}
        </p>
        {collection.discount > 0 && (
          <div className="flex items-center">
            <p className="text-[#00000066] line-through">${collection.price}</p>
            <p className="bg-color-red-2 text-color-red-1 text-[1rem] ml-[1rem] rounded-[6rem] px-[1.2rem] leading-[1.5rem] py-[0.5rem]  font-medium font-satoshi">
              -{collection.discount}%
            </p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CollectionItem;
