import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { searchAndFilterActions } from "@/slices/searchAndFilterSlice";
import { Color, ShoppingItem, Size } from "@/types/shoppingItem";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import Skeleton from "react-loading-skeleton";

const Sizes = ({ category }: { category: string }) => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const { filters } = useAppSelector((state) => state.searchAndFilter);

  const { navItems } = useAppSelector((state) => state.collections);

  const sizes = [
    ...new Set(
      navItems
        .filter((item: ShoppingItem) => item.category === category)
        .map((shoppingItem: ShoppingItem) => shoppingItem.colors)
        .flat()
        .map((color: Color) => color.sizes)
        .flat()
        .map((size: Size) => size.size)
    ),
  ];

  const sizeFilter = filters.find(
    (filter: { title: string; filters: string[] }) => filter.title === "sizes"
  ) ?? { title: "", filters: [""] };

  const addOrRemoveSizeFilterHandler = (filter: string): void => {
    dispatch(
      searchAndFilterActions.modifyFilters({
        title: "sizes",
        filter: filter,
      })
    );
  };

  const toggleDisplaySizePickerHandler = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="flex-col flex w-full  border-b border-[rgba(0,0,0,0.1)] py-[2.3rem] bg-white">
      <motion.button
        initial={false}
        type="button"
        onClick={toggleDisplaySizePickerHandler}
        className="w-full flex  items-center justify-between"
      >
        <p className="text-[2rem] font-satoshi font-bold leading-[2.6rem]">
          Size
        </p>
        <FiChevronUp
          className={`w-[1.6rem] h-[1.6rem] ${
            isOpen ? "rotate-0" : "rotate-180"
          } transition-all ease-out duration-[0.3]`}
        />
      </motion.button>
      {sizes.length > 0 ? (
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              className="pt-[2rem] flex flex-wrap "
            >
              {sizes.map((size: string) => (
                <button
                  onClick={() => {
                    addOrRemoveSizeFilterHandler(size);
                  }}
                  key={size}
                  className={`py-[1rem] px-[2rem] rounded-[6rem] mr-[1rem] mb-[1rem] ${
                    sizeFilter &&
                    sizeFilter?.filters.length &&
                    sizeFilter.filters.includes(size)
                      ? "bg-black text-white"
                      : "text-black bg-[rgba(240,240,240,1)]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <div>
          <div className="flex-1 h-[2.5rem] mt-[1.5rem]">
            <Skeleton count={1} className="h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sizes;
