import { configureStore } from "@reduxjs/toolkit";
import shoppingListsReducer from "../slices/shoppingListsSlice";

export const store = configureStore({
  reducer: {
    shoppingLists: shoppingListsReducer,
  },
});

export default store;
