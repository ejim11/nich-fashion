import { ShoppingItem } from "@/types/shoppingItem";
import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkout: [],
  },
  reducers: {
    toggleItemCheckout: (state: { checkout: ShoppingItem[] }, action) => {
      const existingItem = state.checkout.find(
        (item: ShoppingItem) => item.id === action.payload.id
      );

      if (existingItem) {
        state.checkout = state.checkout.filter(
          (item: ShoppingItem) => item.id !== action.payload.id
        );
        return;
      }

      state.checkout = [...state.checkout, action.payload];
    },
  },
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice;
