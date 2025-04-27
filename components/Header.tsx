"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { HeaderNavLink } from "@/types/headerNavLink";
// import CollectionSubComponent from "./HeaderLinkSubComponents/CollectionSubComponent";
// import ShopSubComponent from "./HeaderLinkSubComponents/ShopSubComponent";
import { FiChevronDown } from "react-icons/fi";
import { LuSearch, LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import HeaderNavigationLink from "./HeaderLinkSubComponents/HeaderNavLink";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { userActions } from "@/slices/userSlice";
import { userLogout } from "@/actions/authActions";
import { AnimatePresence, motion } from "framer-motion";
import SearchModal from "./SearchModal";
import { searchAndFilterActions } from "@/slices/searchAndFilterSlice";
import { RiMenu3Line } from "react-icons/ri";

const headerNavLinks: HeaderNavLink[] = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "collections",
    link: "/collections?category=voltex",
  },
  {
    title: "contact",
    link: "/contact",
  },
  {
    title: "FAQs",
    link: "/faqs",
  },
];

const Header = () => {
  const dispatch = useAppDispatch();

  const { searchModalIsVisible } = useAppSelector(
    (state) => state.searchAndFilter
  );

  const { cart } = useAppSelector((state) => state.cart);

  const { details } = useAppSelector((state) => state.user);

  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const [scaleUp, setScaleUp] = useState<boolean>(false);

  const [profileModalIsVisible, setProfileModalIsVisible] =
    useState<boolean>(false);

  const logoutHandler = () => {
    setProfileModalIsVisible(false);

    dispatch(
      userActions.setUserDetails({
        id: "",
        email: "",
        role: "",
      })
    );
    dispatch(userLogout());
  };

  const toggleProfileModalVisibility = () => {
    setProfileModalIsVisible((prevState) => !prevState);
  };

  const openSearchModal = () => {
    dispatch(searchAndFilterActions.toggleSearchModal(true));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const closeMenuModal = (e: any) => {
    if (e.target.dataset.close) setIsMenuVisible(false);
  };

  useEffect(() => {
    setScaleUp(true);
    const timer = setTimeout(() => {
      setScaleUp(false);
    }, 200);

    return () => {
      clearTimeout(timer);
      setScaleUp(false);
    };
  }, [cart]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const details = JSON.parse(window.localStorage.getItem("user") || "{}");

      dispatch(userActions.setUserDetails(details));
    }
  }, [dispatch]);

  return (
    <div className="w-full flex flex-col fixed top-0 left-0 right-0 z-50 bg-white">
      {details && !details.email && (
        <div className="flex w-full h-[3.8rem] items-center bg-black text-color-white justify-center font-satoshi text-[1.4rem] leading-[1.8rem]">
          <p>Sign up and get 20% off to your first order. </p>
          <Link href={"/auth"} className="ml-[0.5rem] font-medium underline">
            Sign Up Now
          </Link>
        </div>
      )}
      <header className="flex h-[7.5rem]   items-center px-[8rem] sxl:px-[5rem] xmd:px-[3rem] sm:px-[2rem] bg-color-white justify-between border-b border-[#F0EEED]">
        <div className="w-[9.3rem] h-[4.3rem]">
          <Image
            src={logo}
            alt=" logo image"
            priority
            width={200}
            height={100}
            className="w-full h-full"
          />
        </div>

        <div
          className={`mx-auto smd:fixed smd:w-full smd:h-screen smd:top-0 smd:bottom-0 smd:left-0 smd:right-0 smd:z-[100] smd:bg-[rgba(0,0,0,0.4)] smd:transition-all smd:duration-150 smd:ease-in ${
            isMenuVisible
              ? "smd:opacity-100 smd:translate-x-0"
              : "smd:opacity-0 smd:-translate-x-[100%]"
          }`}
          data-close="close"
          onClick={closeMenuModal}
        >
          <nav className="smd:bg-gray-200 smd:h-full smd:w-[40%] sm:w-[60%] smd:p-[2rem]">
            <ul className="flex items-center smd:items-start smd:flex-col font-satoshi capitalize text-[1.8rem] text-color-black">
              {headerNavLinks.map((navItem: HeaderNavLink) => (
                <li
                  key={navItem.title}
                  className="mr-[5rem] last:mr-0 smd:mr-0 smd:mb-[1rem]"
                >
                  <HeaderNavigationLink navItem={navItem} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center text-color-black">
          <button onClick={openSearchModal}>
            <LuSearch className="w-[2.4rem] h-[2.4rem] text-color-current" />
          </button>
          <Link href={"/cart"} className="relative ml-[1.4rem] mr-[2rem] flex">
            <LuShoppingCart className="w-[2.4rem] h-[2.4rem] text-color-current " />
            <span
              className={`${cart.length > 0 ? "flex " : "hidden"} ${
                scaleUp ? "scale-125" : "scale-100"
              } text-white -top-[1rem] -right-[0.5rem] bg-red-600 w-[2rem] h-[2rem] text-[1.2rem] rounded-full absolute items-center justify-center transition-all ease-in duration-200`}
            >
              {cart.length}
            </span>
          </Link>
          {details && details.email ? (
            <div className="flex items-center">
              <button
                className="flex items-center "
                onClick={toggleProfileModalVisibility}
              >
                <FaRegUserCircle className="w-[2.4rem] h-[2.4rem] text-color-current mr-[0.3rem]" />
                <FiChevronDown
                  className={`w-[1.6rem] h-[1.6rem] text-color-current ${
                    !profileModalIsVisible ? "rotate-0" : "rotate-180"
                  }`}
                />
              </button>
              <p className="font-satoshi ml-[1.5rem] uppercase">
                {details.email.slice(0, 2)}
              </p>
              <AnimatePresence>
                {profileModalIsVisible && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    onClick={() => {
                      setProfileModalIsVisible(false);
                    }}
                    className="absolute top-[8rem] right-[10rem] bg-white flex flex-col shadow-lg rounded-[0.6rem] border border-gray-300"
                  >
                    <Link
                      href={"/orders"}
                      className="px-[3rem] py-[1rem] flex border-b border-b-gray-300 hover:bg-gray-100 text-black transition-all duration-150 ease-in"
                    >
                      Orders
                    </Link>
                    <button
                      onClick={logoutHandler}
                      type="button"
                      className="px-[3rem] py-[1rem] hover:bg-gray-100 text-black transition-all duration-150 ease-in"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              href={"/auth"}
              className="bg-black text-white px-[2rem] py-[1rem] rounded-[0.6rem]"
            >
              Login
            </Link>
          )}
          {!isMenuVisible && (
            <button
              type="button"
              className="ml-[2rem] hidden smd:block"
              onClick={() => {
                setIsMenuVisible(true);
              }}
            >
              <RiMenu3Line className="w-[2.4rem] h-[2.4rem] " />
            </button>
          )}
        </div>
        <AnimatePresence>
          {searchModalIsVisible && <SearchModal />}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;
