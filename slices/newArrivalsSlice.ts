import { createSlice } from "@reduxjs/toolkit";

const newArrivalsSlice = createSlice({
  name: "newArrival",
  initialState: {
    isLoading: true,
    items: [],
  },
  reducers: {
    setNewArrivals(state, action) {
      state.items = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const newArrivalsActions = newArrivalsSlice.actions;

export default newArrivalsSlice;
