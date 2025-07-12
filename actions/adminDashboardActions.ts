import {
  getAdminDashboard,
  getRecentOrders,
} from "@/services/adminDashboardService";
import { adminDashboardActions } from "@/slices/adminDashboardSlice";
import { Dispatch, SetStateAction } from "react";

export const getAdminDashboardDispatch =
  (setIsLoading: Dispatch<SetStateAction<boolean>>, token: string) =>
  async (
    dispatch: (arg0: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      payload: any;
      type:
        | "adminDashboard/setOverviewCardDetails"
        | "adminDashboard/setRecentOrders";
    }) => void
  ) => {
    setIsLoading(true);

    try {
      const res = await getAdminDashboard(token);

      const recentOrders = await getRecentOrders(token);

      dispatch(adminDashboardActions.setOverviewCardDetails(res.data.data));
      dispatch(
        adminDashboardActions.setRecentOrders(recentOrders.data.data.data)
      );
    } catch (err) {
      console.log(err);
    }
  };
