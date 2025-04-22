import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setOrders(state: any, action) {
      state.orders = [...action.payload];
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice;
