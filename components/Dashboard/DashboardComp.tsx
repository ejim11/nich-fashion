"use client";

import React, { useEffect, useState } from "react";
import { BsBell } from "react-icons/bs";
import profile from "../../assets/admin/profile.png";
import Image from "next/image";
import OverviewCard from "./OverviewCard";
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { getAdminDashboardDispatch } from "@/actions/adminDashboardActions";
import RecentOrders from "./RecentOrders";

const DashboardComp = () => {
  const { token } = useAppSelector((state) => state.auth);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatchFn = useAppDispatch();

  useEffect(() => {
    dispatchFn(getAdminDashboardDispatch(setIsLoading, token));
  }, [dispatchFn, token]);

  return (
    <main className="flex flex-col w-full h-full overflow-y-auto">
      <section className="bg-[rgba(250,250,250,1)] h-[8.6rem] px-[6rem] py-[2rem] flex items-center">
        <div className="relative ml-auto w-max">
          <BsBell className="w-[2.5rem] h-[2.5rem]" />
          <div className="w-[0.8rem] h-[0.8rem] bg-[rgba(235,87,87,1)] rounded-full absolute top-0 right-0"></div>
        </div>
        <div className="w-[4.5rem] h-[4.5rem] ml-[3rem] mr-[1rem]">
          <Image
            src={profile}
            alt="admin profile"
            priority
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col font-satoshi ">
          <p className="font-medium text-black leading-[2.4rem]">Elvening</p>
          <p className="text-[1.4rem] text-[rgba(151,151,151,1)] leading-[2rem]">
            Admin
          </p>
        </div>
      </section>
      <section className=" bg-[rgba(241,242,244,1)] px-[6rem] py-[2.8rem] min-h-[calc(100vh-8.6rem)]">
        <OverviewCard isLoading />
        <RecentOrders isLoading />
      </section>
    </main>
  );
};

export default DashboardComp;
