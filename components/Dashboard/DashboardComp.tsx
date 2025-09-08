"use client";

import React, { useEffect, useState } from "react";
import OverviewCard from "./OverviewCard";
import { useAppDispatch, useAppSelector } from "@/hooks/stateHooks";
import { getAdminDashboardDispatch } from "@/actions/adminDashboardActions";
import RecentOrders from "./RecentOrders";
import InventoryStatus from "./InventoryStatus";

const DashboardComp = () => {
  const { token } = useAppSelector((state) => state.auth);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatchFn = useAppDispatch();

  useEffect(() => {
    dispatchFn(getAdminDashboardDispatch(setIsLoading, token));
  }, [dispatchFn, token]);

  return (
    <>
      <OverviewCard isLoading />
      <RecentOrders isLoading />
      <InventoryStatus />
    </>
  );
};

export default DashboardComp;
