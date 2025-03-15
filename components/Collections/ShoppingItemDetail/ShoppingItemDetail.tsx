"use client";
import { collections } from "@/data/collections";
import { ShoppingItem } from "@/types/shoppingItem";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import ItemDescription from "./ItemDescription";
import AdditionalInfo from "./Additional-Info";
import Reviews from "./Reviews";
import SubscribeToNewsLetter from "@/components/Home/SubscribeToNewsLetter";
import ShortShoppingItemList from "@/components/ShortShoppingItemList";
import { newArrivals } from "@/data/newArrivals";
import ShoppingItemImages from "./ShoppingItemImages";
// import ItemDetails from "./ItemDetails";
import ItemColorPicker from "./ItemColorPicker";

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

const ShoppingItemDetail: React.FC<{ itemId: string }> = ({ itemId }) => {
  const shoppingItem: ShoppingItem | undefined = collections.filter(
    (item: ShoppingItem) => item.id === itemId
  )[0];

  const [detailsType, setDetailsType] = useState<string>("description");

  const [itemColorImgs, setItemColorImgs] = useState(
    shoppingItem.colors[0].images
  );

  const [choosenImgIndex, setChoosenImgIndex] = useState<number>(0);

  const [selectedColor, setSelectedColor] = useState<string>("");

  const onSelectColorImgs = (index: number) => {
    setItemColorImgs(shoppingItem.colors[index].images);
  };

  const componentViewed = (): ReactNode => {
    switch (detailsType) {
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
        <div className="my-[6rem] flex  w-full">
          {/* first */}
          <ItemColorPicker
            colors={shoppingItem.colors}
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
            onSelectColorImgs={onSelectColorImgs}
            onSelectImgIndex={setChoosenImgIndex}
          />
          <ShoppingItemImages
            imgs={itemColorImgs}
            itemName={shoppingItem?.name}
            chosenImgIndex={choosenImgIndex}
            onSelectImgIndex={setChoosenImgIndex}
          />
          {/* second */}
          {/* <ItemDetails
            name={shoppingItem.name}
            price={shoppingItem.price}
            discount={shoppingItem.discount}
            sizes={shoppingItem.sizes}
            shortDescription={shoppingItem.shortDescription}
          /> */}
        </div>
      </div>
      <div className="mt-[4rem]">
        {/* other infos */}
        <div className=" w-full flex justify-evenly relative">
          {detailsNav.map((item: { text: string; slug: string }) => (
            <button
              key={item.slug}
              className={`capitalize flex text-[2.4rem] font-bold font-satoshi py-[1.6rem] border-b-[0.6rem] relative z-[20] transition-all duration-150 ease-in ${
                detailsType === item.slug
                  ? "text-black border-black"
                  : "border-transparent text-[#757575]"
              }`}
              onClick={() => {
                setDetailsType(item.slug);
              }}
            >
              {item.text}
            </button>
          ))}
          <div className="h-[0.6rem] bg-[#E5E2E2] absolute bottom-0 left-0 right-0 z-10 w-full"></div>
        </div>
        <div>
          {/* {switch} */}
          {componentViewed()}
        </div>
      </div>
      <ShortShoppingItemList title={"You may also like"} data={newArrivals} />
      <SubscribeToNewsLetter />
    </div>
  );
};

export default ShoppingItemDetail;
