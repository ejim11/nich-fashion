import { configureStore } from "@reduxjs/toolkit";
import collectionsSlice from "./slices/collectionsSlice";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";
import authSlice from "./slices/authSlice";
import newArrivalsSlice from "./slices/newArrivalsSlice";
import searchAndFilterSlice from "./slices/searchAndFilterSlice";

const store = configureStore({
  reducer: {
    collections: collectionsSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    auth: authSlice.reducer,
    newArrivals: newArrivalsSlice.reducer,
    searchAndFilter: searchAndFilterSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
