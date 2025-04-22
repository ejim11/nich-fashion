import { createSlice } from "@reduxjs/toolkit";

const deliveryStateSlice = createSlice({
  name: "deliveryState",
  initialState: {
    id: "",
    userState: "",
    fee: 0,
  },
  reducers: {
    addDeliveryState(state, action) {
      const { id, userState, fee } = action.payload;

      state.id = id;
      state.userState = userState;
      state.fee = fee;
    },
  },
});

export const deliveryStateActions = deliveryStateSlice.actions;

export default deliveryStateSlice;
