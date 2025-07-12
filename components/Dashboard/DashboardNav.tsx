"use client";

import Image from "next/image";
import React, { ReactNode } from "react";
import logoImg from "../../assets/admin/logo.svg";
import { IoMenu } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { LuUsersRound } from "react-icons/lu";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsBox } from "react-icons/bs";
import { SiSimpleanalytics } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

type AdminDashboardNav = {
  icon: ReactNode;
  text: string;
  link: string;
};

const iconClassname = "w-[2.8rem] h-[2.8rem] text-current";

const adminDashboardNav: AdminDashboardNav[] = [
  {
    icon: <RxDashboard className={iconClassname} />,
    text: "dashboard",
    link: "",
  },
  {
    icon: <LuUsersRound className={iconClassname} />,
    text: "User Management",
    link: "/user-management",
  },
  {
    icon: <BsBoxSeam className={iconClassname} />,
    text: "product management",
    link: "/product-management",
  },
  {
    icon: <MdOutlineShoppingCart className={iconClassname} />,
    text: "order management",
    link: "/order-management",
  },
  {
    icon: <BsBox className={iconClassname} />,
    text: "inventory",
    link: "/inventory",
  },
  {
    icon: <LuUsersRound className={iconClassname} />,
    text: "customers",
    link: "/customers",
  },
  {
    icon: <SiSimpleanalytics className={iconClassname} />,
    text: "Report & Analytics",
    link: "/report-analytics",
  },
  {
    icon: <IoSettingsOutline className={iconClassname} />,
    text: "settings",
    link: "/settings",
  },
];

const DashboardNav: React.FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex h-screen ">
      <div className="w-[34.5rem] bg-black text-white ">
        <div className="flex justify-between items-center px-[4.5rem] py-[2.5rem]">
          <div className="w-[7rem] h-[3rem]">
            <Image
              src={logoImg}
              alt="logo image"
              priority
              width={200}
              height={200}
              className="w-full h-full"
            />
          </div>
          <button type="button">
            <IoMenu className="w-[3rem] h-[3rem]" />
          </button>
        </div>
        <nav className="mt-[4rem]">
          <ul>
            {adminDashboardNav.map((link: AdminDashboardNav) => (
              <li key={link.text} className="">
                <Link
                  href={`/dashboard${link.link}`}
                  className={` ${
                    pathname === `/dashboard${link.link}`
                      ? "bg-[rgba(31,37,46,1)]"
                      : ""
                  }  px-[4.5rem] py-[1.6rem]  flex items-center capitalize text-white transition-all duration-150 ease-in text-[1.8rem] font-satoshi `}
                >
                  {link.icon}
                  <span className="ml-[2rem]">{link.text}</span>
                </Link>
              </li>
            ))}
            <li>
              <button className="flex items-center capitalize text-white text-[1.8rem] font-satoshi px-[4.5rem] py-[1.6rem] ">
                <RiLogoutBoxRLine className={iconClassname} />
                <span className="ml-[2rem]">Sign out</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DashboardNav;
