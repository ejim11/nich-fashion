import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    paymentInfo: {
      deliveryPicker: "",
      deliveryAddress: "",
      discountId: "",
      totalAmount: 0,
      products: [],
    },
  },
  reducers: {
    addPaymentInfo(state, action) {
      const {
        deliveryPicker,
        deliveryAddress,
        discountId,
        totalAmount,
        products,
      } = action.payload;

      state.paymentInfo.deliveryAddress = deliveryAddress;
      state.paymentInfo.deliveryPicker = deliveryPicker;
      state.paymentInfo.discountId = discountId;
      state.paymentInfo.totalAmount = totalAmount;
      state.paymentInfo.products = products;
    },
    resetPayment (state,) {
      state.paymentInfo.deliveryAddress = "";
      state.paymentInfo.deliveryPicker = "";
      state.paymentInfo.discountId = "";
      state.paymentInfo.totalAmount = 0;
      state.paymentInfo.products = [];
    }
  },
});

export const paymentActions = paymentSlice.actions;

export default paymentSlice;
