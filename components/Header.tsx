"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { HeaderNavLink } from "@/types/headerNavLink";
// import CollectionSubComponent from "./HeaderLinkSubComponents/CollectionSubComponent";
import ShopSubComponent from "./HeaderLinkSubComponents/ShopSubComponent";
import { FiChevronDown } from "react-icons/fi";
import { LuSearch, LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import HeaderNavigationLink from "./HeaderLinkSubComponents/HeaderNavLink";
import Link from "next/link";
import { useAppSelector } from "@/hooks/stateHooks";

const Header = () => {
  const { checkout } = useAppSelector((state) => state.checkout);

  const [scaleUp, setScaleUp] = useState<boolean>(false);

  const headerNavLinks: HeaderNavLink[] = [
    {
      title: "home",
      link: "/",
    },
    {
      title: "collections",
      link: "/collections",
      // subComponent: <CollectionSubComponent />,
    },
    // {
    //   title: "products",
    //   link: "/products",
    // },
    {
      title: "shop",
      subComponent: <ShopSubComponent />,
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

  useEffect(() => {
    setScaleUp(true);
    const timer = setTimeout(() => {
      setScaleUp(false);
    }, 200);

    return () => {
      clearTimeout(timer);
      setScaleUp(false);
    };
  }, [checkout]);

  return (
    <header className="flex h-[7.5rem] fixed top-0 left-0 right-0 z-50 items-center px-[8rem] bg-color-white justify-between border-b border-[#F0EEED]">
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
      <div>
        <nav>
          <ul className="flex items-center font-satoshi capitalize text-[1.8rem] text-color-black">
            {headerNavLinks.map((navItem: HeaderNavLink) => (
              <li key={navItem.title} className="mr-[5rem] last:mr-0">
                <HeaderNavigationLink navItem={navItem} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center text-color-black">
        <button>
          <LuSearch className="w-[2.4rem] h-[2.4rem] text-color-current" />
        </button>
        <button className="relative ml-[1.4rem] mr-[2rem]">
          <LuShoppingCart className="w-[2.4rem] h-[2.4rem] text-color-current " />
          <span
            className={`${checkout.length > 0 ? "flex " : "hidden"} ${
              scaleUp ? "scale-125" : "scale-100"
            } text-white -top-[1rem] -right-[0.5rem] bg-red-600 w-[2rem] h-[2rem] text-[1.2rem] rounded-full absolute items-center justify-center transition-all ease-in duration-200`}
          >
            {checkout.length}
          </span>
        </button>
        <div className="hidden">
          <button className="flex items-center ">
            <FaRegUserCircle className="w-[2.4rem] h-[2.4rem] text-color-current mr-[0.3rem]" />
            <FiChevronDown className="w-[1.6rem] h-[1.6rem] text-color-current" />
          </button>
          <p className="font-satoshi ml-[1.5rem]">NA</p>
        </div>
        <Link
          href={"/login"}
          className="bg-black text-white px-[2rem] py-[1rem] rounded-[0.6rem]"
        >
          Login
        </Link>

        {/* <div className="fixed top-[8rem] right-[5rem] w-[20rem] h-[20rem] shadow-lg bg-white"></div> */}
      </div>
    </header>
  );
};

export default Header;
