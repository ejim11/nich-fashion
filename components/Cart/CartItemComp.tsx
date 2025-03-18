import { StaticImageData } from "next/image";
import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Image from "next/image";
import formatAmount from "@/utils/formatAmount";

const CartItemComp = ({
  image,
  name,
  sizes,
  colors,
  totalQuantity,
  price,
  index,
  cartLength,
}: {
  image: StaticImageData;
  name: string;
  sizes: string[];
  colors: string[];
  totalQuantity: number;
  price: number;
  index: number;
  cartLength: number;
}) => {
  return (
    <div
      className={`flex py-[2.7rem] ${
        index === cartLength - 1 ? "" : "border-b border-b-[rgba(0,0,0,0.1)]"
      } `}
    >
      <div className="w-[12.4rem] h-[12.4rem] flex p-[2rem] bg-[rgba(240,238,237,1)] rounded-[0.9rem] mr-[1.6rem]">
        <Image
          src={image}
          alt={`${name} image`}
          priority
          width={400}
          height={400}
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col font-satoshi flex-1">
        <p className="font-bold text-[2rem]">{name}</p>
        <div className="flex items-center text-[1.4rem] text-black capitalize">
          <p className="mr-[0.5rem]">Size: </p>
          {sizes.map((size: string) => (
            <p key={size} className="mr-[1rem]">
              {size}
            </p>
          ))}
        </div>
        <div className="flex items-center text-[1.4rem] text-black capitalize">
          <p className="mr-[0.5rem]">Color: </p>
          {colors.map((color: string) => (
            <p key={color} className="mr-[1rem]">
              {color}
            </p>
          ))}
        </div>
        <p className="text-[1.4rem]">{totalQuantity} item(s)</p>
        <p className="mt-auto font-bold text-[2.4rem]">
          N{formatAmount(String(price * totalQuantity))}
        </p>
      </div>
      <button type="button" className="ml-auto self-start">
        <RiDeleteBin5Fill className="text-[rgba(255,51,51,1)] w-[2.4rem] h-[2.4rem]" />
      </button>
    </div>
  );
};

export default CartItemComp;
