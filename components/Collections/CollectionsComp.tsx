/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAppSelector } from "@/hooks/stateHooks";
import { ShoppingItem } from "@/types/shoppingItem";
import React, { useEffect, useRef, useState } from "react";
import CollectionItem from "./CollectionItem";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ReactPaginate from "react-paginate";
import ShoppingItemSkeleton from "../skeletons/ShoppingItemSkeleton";

const CollectionsComp = () => {
  const sectionRef: any = useRef(null);

  const { items, isLoading } = useAppSelector((state) => state.collections);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = [...items].reverse().slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  const paginateNavStyle =
    "block  bg-color-white py-[0.5rem] px-[1rem] rounded-lg  border border-[rgba(0,0,0,0.1)] text-color-black hover:bg-color-[rgba(0,0,0,0.1)] transition-all tableData-200 ease-in capitalize ";

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  console.log(currentItems.length);

  return (
    <div className="">
      {isLoading ? (
        <div className="grid grid-cols-3  gap-x-[2rem] gap-y-[8rem]">
          <ShoppingItemSkeleton />
          <ShoppingItemSkeleton />
          <ShoppingItemSkeleton />
          <ShoppingItemSkeleton />
          <ShoppingItemSkeleton />
          <ShoppingItemSkeleton />
        </div>
      ) : !isLoading && currentItems.length <= 0 ? (
        <div className="w-full pt-[3rem]">
          <p className="text-center text-[3rem] text-color-black">
            No Products Available
          </p>
        </div>
      ) : (
        <div className="flex flex-col">
          <div
            ref={sectionRef}
            className="grid grid-cols-3 gap-x-[2rem] gap-y-[3rem]"
          >
            {currentItems.map((collection: ShoppingItem) => (
              <CollectionItem collection={collection} key={collection.id} />
            ))}
          </div>
          <div className="flex mt-[2rem] w-max ml-auto pt-[2rem] pb-[3rem] ">
            <ReactPaginate
              breakLabel="..."
              nextLabel={
                <p className="flex items-center ">
                  <span>next</span>
                  <MdKeyboardArrowRight className="text-color-current ml-[0.5rem] w-[2.2rem] h-[2.2rem]" />
                </p>
              }
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel={
                <p className="flex items-center bg-white ">
                  <MdKeyboardArrowLeft className="text-color-current mr-[0.5rem] w-[2.2rem] h-[2.2rem]" />
                  <span>previous</span>
                </p>
              }
              renderOnZeroPageCount={null}
              containerClassName="flex items-center ml-auto sm:ml-0 sm:mr-auto"
              previousClassName="mr-[1rem]"
              nextClassName="ml-[1rem]"
              previousLinkClassName={paginateNavStyle}
              nextLinkClassName={paginateNavStyle}
              pageLinkClassName="paginate-page-link"
              activeLinkClassName="paginate-active-page-link"
              onClick={() => {
                scrollToSection();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionsComp;
