import { createSlice } from "@reduxjs/toolkit";

const collectionsSlice = createSlice({
  name: "collections",
  initialState: {
    isLoading: true,
    items: [],
    navItems: [],
  },
  reducers: {
    setIsLoading(state, action: { payload: boolean }) {
      state.isLoading = action.payload;
    },
    setCollections(state, action) {
      state.items = action.payload;
    },
    setNavItems(state, action) {
      state.navItems = action.payload;
    },
  },
});

export const collectionsActions = collectionsSlice.actions;

export default collectionsSlice;
