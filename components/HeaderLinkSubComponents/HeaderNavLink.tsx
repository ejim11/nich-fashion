"use client";
import { HeaderNavLink } from "@/types/headerNavLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

const HeaderNavigationLink = ({ navItem }: { navItem: HeaderNavLink }) => {
  const pathname = usePathname();

  return (
    <>
      {navItem.link ? (
        <Link
          href={navItem.link}
          className={`leading-[2.4rem] hover:text-[#00000099] duration-100 ease-in transition-all ${
            pathname === navItem.link ? "text-[#00000099]  " : ""
          } `}
          data-close="close"
        >
          {navItem.title}
        </Link>
      ) : (
        <button className="flex  items-center hover:text-[#00000099] duration-100 ease-in transition-all cursor-pointer">
          <p className="leading-[2.4rem] capitalize text-[1.8rem]">
            {navItem.title}
          </p>
          <FiChevronDown className="ml-[0.4rem] w-[1.6rem] h-[1.6rem]" />
        </button>
      )}
    </>
  );
};

export default HeaderNavigationLink;
