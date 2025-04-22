import React, { Suspense, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import RangeForm from "./Range";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingItem } from "@/types/shoppingItem";
import { useAppSelector } from "@/hooks/stateHooks";
import { getPriceRange } from "@/utils/getPriceRange";
import Skeleton from "react-loading-skeleton";

const PriceRangeComp = ({ category }: { category: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const { navItems } = useAppSelector((state) => state.collections);

  const filteredCollectionsByCategory = navItems.filter(
    (item: ShoppingItem) => item.category === category
  );

  const priceRange =
    filteredCollectionsByCategory.length > 0 &&
    getPriceRange(filteredCollectionsByCategory);

  const toggleDisplayPriceRangeHandler = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="flex-col flex w-full mt-[2.3rem] border-b border-t border-[rgba(0,0,0,0.1)] py-[2.3rem]">
      <motion.button
        initial={false}
        type="button"
        onClick={toggleDisplayPriceRangeHandler}
        className="w-full flex  items-center justify-between"
      >
        <p className="text-[2rem] font-satoshi font-bold leading-[2.6rem]">
          Price
        </p>
        <FiChevronUp
          className={`w-[1.6rem] h-[1.6rem] ${
            isOpen ? "rotate-0" : "rotate-180"
          } transition-all ease-out duration-[0.3]`}
        />
      </motion.button>
      <Suspense>
        {priceRange ? (
          <AnimatePresence initial={false}>
            {isOpen && <RangeForm range={priceRange} />}
          </AnimatePresence>
        ) : (
          <div>
            <div className="flex-1 h-[2.5rem] mt-[1.5rem]">
              <Skeleton count={1} className="h-full" />
            </div>
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default PriceRangeComp;
