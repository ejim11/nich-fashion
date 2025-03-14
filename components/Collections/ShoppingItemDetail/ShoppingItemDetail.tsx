"use client";
import { collections } from "@/data/collections";
import { ShoppingItem } from "@/types/shoppingItem";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { ReactNode, useMemo } from "react";
import { FiChevronRight } from "react-icons/fi";
import ItemDescription from "./ItemDescription";
import AdditionalInfo from "./Additional-Info";
import Reviews from "./Reviews";
import SubscribeToNewsLetter from "@/components/Home/SubscribeToNewsLetter";
import ShortShoppingItemList from "@/components/ShortShoppingItemList";
import { newArrivals } from "@/data/newArrivals";
import ShoppingItemImages from "./ShoppingItemImages";
import ItemDetails from "./ItemDetails";

const ShoppingItemDetail: React.FC<{ itemId: string }> = ({ itemId }) => {
  const detailsNav: { text: string; slug: string }[] = [
    {
      text: "description",
      slug: "description",
    },
    {
      text: "additional information",
      slug: "additional-info",
    },
    {
      text: "reviews",
      slug: "review",
    },
  ];

  const shoppingItem: ShoppingItem | undefined = collections.filter(
    (item: ShoppingItem) => item.id === itemId
  )[0];

  const searchParams = useSearchParams();

  // Convert searchParams to an object if needed
  const { type } = useMemo(
    () => ({
      type: searchParams.get("type") || undefined,
    }),
    [searchParams]
  );

  const componentViewed = (type: string): ReactNode => {
    switch (type) {
      case "description":
        return (
          <ItemDescription texts={shoppingItem?.longDescription || [""]} />
        );
      case "additional-info":
        return <AdditionalInfo shoppingItem={shoppingItem} />;
      case "review":
        return <Reviews reviews={shoppingItem?.reviews} />;
      default:
        return (
          <ItemDescription texts={shoppingItem?.longDescription || [""]} />
        );
    }
  };

  return (
    <div className="w-full flex flex-col overflow-hidden">
      <div className="w-full flex flex-col">
        <div className="flex items-center font-satoshi text-[1.8rem] text-black font-medium">
          <Link href="/">Home</Link>
          <FiChevronRight className=" mr-[1.6rem]" />
          <Link href="/collections">Collections</Link>
          <FiChevronRight className=" mr-[1.6rem]" />
          <p className="text-[#ADADAD]">{shoppingItem?.name}</p>
        </div>
        <div className="my-[6rem] flex justify-between max-w-full">
          {/* first */}
          <ShoppingItemImages
            imgs={shoppingItem?.otherImages}
            itemName={shoppingItem?.name}
          />
          {/* second */}
          <ItemDetails
            name={shoppingItem.name}
            price={shoppingItem.price}
            discount={shoppingItem.discount}
            sizes={shoppingItem.sizes}
            shortDescription={shoppingItem.shortDescription}
          />
        </div>
      </div>
      <div className="mt-[4rem]">
        {/* other infos */}
        <div className=" w-full flex justify-evenly relative">
          {detailsNav.map((item: { text: string; slug: string }) => (
            <Link
              key={item.slug}
              className={`capitalize flex text-[2.4rem] font-bold font-satoshi py-[1.6rem] border-b-[0.6rem] relative z-[20] transition-all duration-150 ease-in ${
                type === item.slug
                  ? "text-black border-black"
                  : "border-transparent text-[#757575]"
              }`}
              href={`/collections/${itemId}?type=${item.slug}`}
            >
              {item.text}
            </Link>
          ))}
          <div className="h-[0.6rem] bg-[#E5E2E2] absolute bottom-0 left-0 right-0 z-10 w-full"></div>
        </div>
        <div>
          {/* {switch} */}
          {componentViewed(type || "")}
        </div>
      </div>
      <ShortShoppingItemList title={"You may also like"} data={newArrivals} />
      <SubscribeToNewsLetter />
    </div>
  );
};

export default ShoppingItemDetail;
