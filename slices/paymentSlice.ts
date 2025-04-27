import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    paymentInfo: {
      deliveryPicker: "",
      deliveryAddress: "",
      discountId: "",
      totalAmount: 0,
      shippingMethod: "",
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
        shippingMethod,
      } = action.payload;

      state.paymentInfo.deliveryAddress = deliveryAddress;
      state.paymentInfo.deliveryPicker = deliveryPicker;
      state.paymentInfo.discountId = discountId;
      state.paymentInfo.totalAmount = totalAmount;
      state.paymentInfo.products = products;
      state.paymentInfo.shippingMethod = shippingMethod;
    },
    resetPayment(state) {
      state.paymentInfo.deliveryAddress = "";
      state.paymentInfo.deliveryPicker = "";
      state.paymentInfo.discountId = "";
      state.paymentInfo.totalAmount = 0;
      state.paymentInfo.products = [];
    },
  },
});

export const paymentActions = paymentSlice.actions;

export default paymentSlice;
