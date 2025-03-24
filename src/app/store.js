import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import viewSlice from "../features/viewSlice";
import filterSlice from "../features/filterSlice";

export const store = configureStore({
  reducer: {
    allCart: cartSlice,
    view: viewSlice,
    filters: filterSlice,
  },
});
