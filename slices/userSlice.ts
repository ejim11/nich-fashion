import { createSlice } from "@reduxjs/toolkit";

type User = {
  details: {
    id: string;
    email: string;
    role: string;
    city?: string;
    country?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    state?: string;
    streetAddress?: string;
    zipCode?: string;
  };
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    details: {
      id: "",
      email: "",
      role: "",
      city: "",
      country: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      state: "",
      streetAddress: "",
      zipCode: "",
    },
  },
  reducers: {
    setUserDetails(
      state: User,
      action: {
        payload: {
          id: string;
          email: string;
          role: string;
          city?: string;
          country?: string;
          firstName?: string;
          lastName?: string;
          phoneNumber?: string;
          state?: string;
          streetAddress?: string;
          zipCode?: string;
        };
      }
    ) {
      if (!action.payload) {
        state.details.id = "";
        state.details.email = "";
        state.details.role = "";
        state.details.city = "";
        state.details.country = "";
        state.details.firstName = "";
        state.details.lastName = "";
        state.details.phoneNumber = "";
        state.details.state = "";
        state.details.streetAddress = "";
        state.details.zipCode = "";
        return;
      }

      state.details.id = action.payload.id;
      state.details.email = action.payload.email;
      state.details.role = action.payload.role;
      state.details.city = action.payload.city;
      state.details.country = action.payload.country;
      state.details.firstName = action.payload.firstName;
      state.details.lastName = action.payload.lastName;
      state.details.phoneNumber = action.payload.phoneNumber;
      state.details.state = action.payload.state;
      state.details.streetAddress = action.payload.streetAddress;
      state.details.zipCode = action.payload.zipCode;

      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
