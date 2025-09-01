import {
  getAdminDashboard,
  getRecentOrders,
  getRecentProductInventory,
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
        | "adminDashboard/setRecentOrders"
        | "adminDashboard/setInventory";
    }) => void
  ) => {
    setIsLoading(true);

    try {
      const [stats, recentOrders, products] = await Promise.all([
        getAdminDashboard(token),
        getRecentOrders(token),
        getRecentProductInventory(token),
      ]);

      const inventory = products.data.data.map(
        (item: {
          product_id: string;
          product_name: string;
          totalquantity: string;
        }) => ({
          id: item.product_id,
          name: item.product_name,
          stock: Number(item.totalquantity),
        })
      );

      dispatch(adminDashboardActions.setOverviewCardDetails(stats.data.data));
      dispatch(adminDashboardActions.setRecentOrders(recentOrders.data.data));
      dispatch(adminDashboardActions.setInventory(inventory));
    } catch (err) {
      console.log(err);
    }
  };
