"use client";

import Image from "next/image";
import React, { ReactNode } from "react";
import logoImg from "../../assets/admin/logo.svg";
import { IoMenu } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { LuUsersRound } from "react-icons/lu";
import { BsBell, BsBoxSeam } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsBox } from "react-icons/bs";
import { SiSimpleanalytics } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { userActions } from "@/slices/userSlice";
import { userLogout } from "@/actions/authActions";
import profileImage from "../../assets/admin/profile.png";

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
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  const { details } = useAppSelector((state) => state.user);

  const logoutHandler = () => {
    dispatch(
      userActions.setUserDetails({
        id: "",
        email: "",
        role: "",
      })
    );
    dispatch(userLogout());
  };

  return (
    <div className="flex max-h-screen max-w-screen overflow-hidden">
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
              <button
                className="flex items-center capitalize text-white text-[1.8rem] font-satoshi px-[4.5rem] py-[1.6rem] "
                onClick={logoutHandler}
              >
                <RiLogoutBoxRLine className={iconClassname} />
                <span className="ml-[2rem]">Sign out</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="bg-[rgba(250,250,250,1)] w-full shadow-md h-[8.6rem] px-[3rem] py-[2rem] flex items-center">
          <div className="relative ml-auto  w-max ">
            <BsBell className="w-[2.5rem] h-[2.5rem]" />
            <div className="w-[0.8rem] h-[0.8rem] bg-[rgba(235,87,87,1)] rounded-full absolute top-0 right-0"></div>
          </div>
          <div className="w-[4.5rem] h-[4.5rem] ml-[3rem] mr-[1rem]">
            <Image
              src={profileImage}
              alt="admin profile"
              priority
              width={200}
              height={200}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col font-satoshi capitalize">
            <p className="font-medium text-black leading-[2.4rem]">
              {details.firstName}
            </p>
            <p className="text-[1.4rem] text-[rgba(151,151,151,1)] leading-[2rem]">
              {details.role}
            </p>
          </div>
        </div>
        <main className="h-[calc(100vh-8.6rem)]  bg-[rgba(241,242,244,1)] overflow-y-auto flex flex-col px-[3rem] py-[2.8rem]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardNav;
