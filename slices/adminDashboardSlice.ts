import { createSlice } from "@reduxjs/toolkit";

// type AdminDashboard = {
//   overviewCard: {
//     totalSales: number;
//     totalSalesGrowth: number;
//     orders: number;
//     ordersGrowth: number;
//     customers: number;
//     customersGrowth: number;
//   };
// };

const adminDashboardSlice = createSlice({
  name: "adminDashboard",
  initialState: {
    overviewCard: {
      totalSales: 0,
      totalSalesGrowth: 0,
      orders: 0,
      ordersGrowth: 0,
      customers: 0,
      customersGrowth: 0,
    },
    recentOrders: [],
    inventory: [],
  },
  reducers: {
    setOverviewCardDetails: (state, action) => {
      const {
        customers,
        customersGrowth,
        totalSales,
        totalSalesGrowth,
        orders,
        ordersGrowth,
      } = action.payload;
      state.overviewCard.totalSales = totalSales;
      state.overviewCard.totalSalesGrowth = totalSalesGrowth;
      state.overviewCard.orders = orders;
      state.overviewCard.ordersGrowth = ordersGrowth;
      state.overviewCard.customers = customers;
      state.overviewCard.customersGrowth = customersGrowth;
    },
    setRecentOrders: (state, action) => {
      state.recentOrders = action.payload;
    },
  },
});

export const adminDashboardActions = adminDashboardSlice.actions;
export default adminDashboardSlice;
