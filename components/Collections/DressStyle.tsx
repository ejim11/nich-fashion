import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { searchAndFilterActions } from "@/slices/searchAndFilterSlice";
import { ShoppingItem } from "@/types/shoppingItem";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { MdOutlineChevronRight } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
const DressStyle = ({ category }: { category: string }) => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const { filters } = useAppSelector((state) => state.searchAndFilter);

  console.log(filters);

  const { navItems } = useAppSelector((state) => state.collections);

  const dressStyles: string[] = navItems
    .filter((item: ShoppingItem) => item.category === category)
    .map((item: ShoppingItem) => item.dressStyle);

  const dressStyleFilter = filters.find(
    (filter: { title: string; filters: string[] }) =>
      filter.title === "dressStyle"
  ) ?? { title: "", filters: [""] };

  const toggleDisplayDressStylePickerHandler = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  const addOrRemoveClothTypeFilterHandler = (filter: string): void => {
    dispatch(
      searchAndFilterActions.modifyFilters({
        title: "dressStyle",
        filter: filter,
      })
    );
  };

  return (
    <div className="w-full flex flex-col mt-[2.3rem]">
      <motion.button
        initial={false}
        onClick={toggleDisplayDressStylePickerHandler}
        type="button"
        className="w-full flex items-center justify-between "
      >
        <p className="text-[2rem] font-satoshi font-bold leading-[2.6rem]">
          Dress Style
        </p>
        <FiChevronUp
          className={`w-[1.6rem] h-[1.6rem] ${
            isOpen ? "rotate-0" : "rotate-180"
          } transition-all ease-out duration-[0.3]`}
        />
      </motion.button>
      {dressStyles.length > 0 ? (
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              animate={{ height: "auto", opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              className="flex flex-col mt-[2.3rem] "
            >
              {dressStyles.map((style: string) => (
                <button
                  type="button"
                  key={style}
                  className={`${
                    dressStyleFilter &&
                    dressStyleFilter?.filters.length &&
                    dressStyleFilter.filters.includes(style)
                      ? "bg-gray-200 text-[rgba(0,0,0,0.9)]"
                      : "text-[rgba(0,0,0,0.6)]"
                  } w-full font-satoshi leading-[2rem] flex items-center justify-between p-[1rem] rounded-[0.5rem] mb-[1rem] last:mb-0 capitalize transition-all duration-150 ease-in`}
                  onClick={() => {
                    addOrRemoveClothTypeFilterHandler(style);
                  }}
                >
                  <span>{style}</span>
                  <MdOutlineChevronRight className="text-current w-[1.6rem] h-[1.6rem]" />
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <div className="h-[10rem]">
          <div className="flex-1 h-[2.5rem] mt-[1.5rem]">
            <Skeleton count={3} className="h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DressStyle;
