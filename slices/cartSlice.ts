import { CartItem } from "@/types/cartItem";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItemToCart: (
      state: { cart: CartItem[] },
      action: { payload: CartItem }
    ) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
