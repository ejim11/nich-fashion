import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { searchAndFilterActions } from "@/slices/searchAndFilterSlice";
import { useRouter } from "next/navigation";

const SearchModal = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const { searchText } = useAppSelector((state) => state.searchAndFilter);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSearchInputChangeHandler = (e: any) => {
    if (e.target.value === "") {
      router.replace(`/collections?category=voltex`);
    }
    dispatch(searchAndFilterActions.setSearchText(e.target.value));
  };

  const onHideSearchModalHandler = () => {
    dispatch(searchAndFilterActions.toggleSearchModal(false));
    dispatch(searchAndFilterActions.setSearchText(""));
    // router.replace(`/collections?category=voltex`);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timer: any;

    if (searchText) {
      timer = setTimeout(() => {
        const search = searchText.slice().toLowerCase().split(" ").join("-");
        router.replace(`/collections?name=${search}`);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [router, searchText]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.15, ease: "easeIn" }}
      className="absolute w-full top-0 left-0 right-0 z-50 font-satoshi bg-white"
    >
      <div className="h-[10rem] px-[5rem] smd:px-[3rem] sm:px-[2rem] flex items-center  justify-between ">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo image"
            width={200}
            height={200}
            className="w-auto h-auto xmd:hidden"
          />
        </Link>
        <div className="flex  rounded-[5rem] bg-[rgba(244,244,244,1)] items-center px-[1.5rem] w-[50%] xmd:flex-1 xmd:mr-[2rem]">
          <CiSearch className="w-[2.2rem] h-[2.2rem] mr-[1rem] text-[rgba(34,34,34,0.7)] " />
          <input
            type="text"
            name="search-event"
            id="search-event"
            placeholder="Search"
            value={searchText}
            onChange={onSearchInputChangeHandler}
            className="bg-color-transparent py-[1rem] outline-none ring-0 flex-1 pr-[1rem]"
          />
        </div>
        <button
          type="button"
          onClick={onHideSearchModalHandler}
          className="hover:text-color-purple-1 transition-all duration-150 ease-in"
        >
          Cancel
        </button>
      </div>
    </motion.div>
  );
};

export default SearchModal;
