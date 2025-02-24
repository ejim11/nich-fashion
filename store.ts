import { configureStore } from "@reduxjs/toolkit";
import collectionsSlice from "./slices/collectionsSlice";
import checkoutSlice from "./slices/checkoutSlice";

const store = configureStore({
  reducer: {
    collections: collectionsSlice.reducer,
    checkout: checkoutSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
