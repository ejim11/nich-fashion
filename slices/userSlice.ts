import { createSlice } from "@reduxjs/toolkit";

type User = {
  details: {
    id: string;
    email: string;
    role: string;
  };
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    details: {
      id: "",
      email: "",
      role: "",
    },
  },
  reducers: {
    setUserDetails(
      state: User,
      action: { payload: { id: string; email: string; role: string } }
    ) {
      if (!action.payload) {
        state.details.id = "";
        state.details.email = "";
        state.details.role = "";
        return;
      }

      state.details.id = action.payload.id;
      state.details.email = action.payload.email;
      state.details.role = action.payload.role;

      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
