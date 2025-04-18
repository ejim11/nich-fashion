import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { Color, ShoppingItem } from "@/types/shoppingItem";
import Skeleton from "react-loading-skeleton";
import { searchAndFilterActions } from "@/slices/searchAndFilterSlice";

const ColorsComp = ({ category }: { category: string }) => {
  const dispatch = useAppDispatch();

  const { filters } = useAppSelector((state) => state.searchAndFilter);

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const { navItems } = useAppSelector((state) => state.collections);

  const colors = [
    ...new Set(
      navItems
        .filter((item: ShoppingItem) => item.category === category)
        .map((shoppingItem: ShoppingItem) => shoppingItem.colors)
        .flat()
        .map((color: Color) => color.color)
    ),
  ];

  const toggleDisplayColorPickerHandler = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  const colorFilter = filters.find(
    (filter: { title: string; filters: string[] }) => filter.title === "colors"
  ) ?? { title: "", filters: [""] };

  const addOrRemoveColorFilterHandler = (filter: string): void => {
    dispatch(
      searchAndFilterActions.modifyFilters({
        title: "colors",
        filter: filter,
      })
    );
  };

  return (
    <div className="flex-col flex w-full  border-b border-[rgba(0,0,0,0.1)] py-[2.3rem] bg-white">
      <motion.button
        initial={false}
        type="button"
        onClick={toggleDisplayColorPickerHandler}
        className="w-full flex  items-center justify-between"
      >
        <p className="text-[2rem] font-satoshi font-bold leading-[2.6rem]">
          Colors
        </p>
        <FiChevronUp
          className={`w-[1.6rem] h-[1.6rem] ${
            isOpen ? "rotate-0" : "rotate-180"
          } transition-all ease-out duration-[0.3]`}
        />
      </motion.button>
      {colors.length > 0 ? (
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              animate={{ height: "auto", opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              className="flex flex-wrap pt-[2rem]"
            >
              {colors.map((color: string) => (
                <button
                  onClick={() => {
                    addOrRemoveColorFilterHandler(color);
                  }}
                  key={color}
                  style={{ backgroundColor: color }}
                  className={`w-[3.6rem] flex justify-center items-center h-[3.6rem] mr-[1.5rem] mb-[1.5rem] rounded-full border border-[rgba(0,0,0,0.2)]`}
                >
                  {colorFilter &&
                    colorFilter?.filters.length &&
                    colorFilter.filters.includes(color) && (
                      <div className="flex items-center justify-center w-full h-full bg-[rgba(255,255,255,0.5)] rounded-full">
                        <FaCheck
                          className={`w-[1.58rem] h-[1.58rem] text-black`}
                        />
                      </div>
                    )}
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

export default ColorsComp;
