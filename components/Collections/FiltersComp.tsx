import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { searchAndFilterActions } from "@/slices/searchAndFilterSlice";
import { ShoppingItem } from "@/types/shoppingItem";
import React from "react";
import { BsSliders2Vertical } from "react-icons/bs";
import { MdOutlineChevronRight } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
const FiltersComp = ({ category }: { category: string }) => {
  const dispatch = useAppDispatch();

  const { filters } = useAppSelector((state) => state.searchAndFilter);

  const { navItems } = useAppSelector((state) => state.collections);

  const filteredCollectionsByCategory = navItems.filter(
    (item: ShoppingItem) => item.category === category
  );

  const clothTypes: string[] = filteredCollectionsByCategory.map(
    (item: ShoppingItem) => item.clothType
  );

  const clothTypeFilter = filters.find(
    (filter: { title: string; filters: string[] }) =>
      filter.title === "clothType"
  ) ?? { title: "", filters: [""] };

  const addOrRemoveClothTypeFilterHandler = (filter: string): void => {
    dispatch(
      searchAndFilterActions.modifyFilters({
        title: "clothType",
        filter: filter,
      })
    );
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex items-center justify-between pb-[2.3rem] border-b border-[rgba(0,0,0,0.1)]">
        <p className="text-[2rem] font-satoshi font-bold leading-[2.6rem]">
          Filters
        </p>
        <BsSliders2Vertical className="w-[2.4rem] h-[2.4rem] text-[rgba(0,0,0,0.4)]" />
      </div>
      {clothTypes.length > 0 ? (
        <div className="flex flex-col mt-[2.3rem] ">
          {clothTypes.map((filter: string) => (
            <button
              type="button"
              key={filter}
              className={`${
                clothTypeFilter &&
                clothTypeFilter?.filters.length &&
                clothTypeFilter.filters.includes(filter)
                  ? "bg-gray-200 text-[rgba(0,0,0,0.9)]"
                  : "text-[rgba(0,0,0,0.6)]"
              } w-full font-satoshi leading-[2rem] flex items-center justify-between p-[1rem] rounded-[0.5rem] mb-[1rem] last:mb-0 capitalize transition-all duration-150 ease-in`}
              onClick={() => {
                addOrRemoveClothTypeFilterHandler(filter);
              }}
            >
              <span>{filter}</span>
              <MdOutlineChevronRight className="text-current w-[1.6rem] h-[1.6rem]" />
            </button>
          ))}
        </div>
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

export default FiltersComp;
