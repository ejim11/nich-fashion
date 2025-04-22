import { createSlice } from "@reduxjs/toolkit";

const discountSlice = createSlice({
  name: "discounts",
  initialState: {
    promoInfo: {
      id: "",
      percentOff: 0,
      code: "",
    },
  },
  reducers: {
    addPromoInfo(state, action) {
      const { id, percentOff, code } = action.payload;
      state.promoInfo.id = id;
      state.promoInfo.percentOff = percentOff;
      state.promoInfo.code = code;
    },
  },
});

export const discountsActions = discountSlice.actions;

export default discountSlice;
