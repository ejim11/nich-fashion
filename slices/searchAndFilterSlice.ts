import { createSlice } from "@reduxjs/toolkit";

const searchAndFilterSlice = createSlice({
  name: "searchAndFilter",
  initialState: {
    searchText: "",
    searchModalIsVisible: false,
  },
  reducers: {
    toggleSearchModal(state, action) {
      state.searchModalIsVisible = action.payload;
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
  },
});

export const searchAndFilterActions = searchAndFilterSlice.actions;

export default searchAndFilterSlice;
