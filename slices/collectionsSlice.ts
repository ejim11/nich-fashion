import { collections } from "@/data/collections";
import { createSlice } from "@reduxjs/toolkit";

const collectionsSlice = createSlice({
  name: "collections",
  initialState: {
    items: collections,
  },
  reducers: {},
});

export const collectionsActions = collectionsSlice.actions;

export default collectionsSlice;
