/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const userManagementSlice = createSlice({
  name: "userManagement",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    addUser(state: any, action: any) {
      state.users = [...state.users, action.payload];
    },
  },
});

export const userManagementActions = userManagementSlice.actions;

export default userManagementSlice;
