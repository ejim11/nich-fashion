import { Size } from "@/types/shoppingItem";
import React from "react";

const ItemDetailsAndQuantityPicker = ({
  name,
  price,
  discount,
  sizes,
  shortDescription,
}: {
  name: string;
  price: number;
  discount: number;
  sizes: Size[];
  shortDescription: string;
}) => {
  return (
    <div className="w-[50%] font-satoshi">
      <h2 className="text-[4.8rem]  font-bold text-black">{name}</h2>
      <div className="flex text-[3.2rem] font-bold my-[2.4rem]">
        <p className=" text-color-black   mr-[1rem]">
          {discount > 0 ? `N${price - price * (discount / 100)}` : `N${price}`}
        </p>
        {discount > 0 && (
          <div className="flex items-center">
            <p className="text-[#00000066] line-through">N{price}</p>
            <p className="bg-color-red-2 text-color-red-1 text-[1rem] ml-[1rem] rounded-[6rem] px-[1.2rem] leading-[1.5rem] py-[0.5rem]   ">
              -{discount}%
            </p>
          </div>
        )}
      </div>
      <p className="leading-[2.2rem] text-[rgba(0,0,0,0.6)]">
        {shortDescription}
      </p>
      <div className="flex items-center py-[2.4rem] border-t border-b border-[rgba(0,0,0,0.1)] my-[2.4rem]">
        <div className="w-[3.7rem] h-[3.7rem] rounded-full bg-blue-900 mr-[1rem]"></div>
        <p>3 units</p>
      </div>
      <div>
        <p className="text-[rgba(0,0,0,0.6)]">Choose size</p>
      </div>
    </div>
  );
};

export default ItemDetailsAndQuantityPicker;
