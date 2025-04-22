import { CartItem } from "@/types/cartItem";
import { updateItemIfExists } from "@/utils/addItemToCart";
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
      const newCart = updateItemIfExists(state.cart, action.payload);

      state.cart = newCart;
    },
    removeItemFromCart: (
      state: { cart: CartItem[] },
      action: { payload: string }
    ) => {
      const filteredCart = state.cart
        .slice()
        .filter((item: CartItem) => item.id !== action.payload);

      state.cart = filteredCart;
    },
    resetCart(state) {
      state.cart = [];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
