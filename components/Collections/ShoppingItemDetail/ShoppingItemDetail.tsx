import { collections } from "@/data/collections";
import { ShoppingItem } from "@/types/shoppingItem";
import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const ShoppingItemDetail = ({ itemId }: { itemId: string }) => {
  const shoppingItem: ShoppingItem | undefined = collections.find(
    (item: ShoppingItem) => item.id === itemId
  );

  return (
    <div>
      <div className="flex items-center font-satoshi text-[1.8rem] text-black font-medium">
        <Link href="/">Home</Link>
        <FiChevronRight className=" mr-[1.6rem]" />
        <Link href="/collections">Collections</Link>
        <FiChevronRight className=" mr-[1.6rem]" />
        <p className="text-[#ADADAD]">{shoppingItem?.name}</p>
      </div>
      <div>
        {/* first */}
        {/* second */}
        {/* third */}
      </div>
    </div>
  );
};

export default ShoppingItemDetail;
