import { createSlice } from "@reduxjs/toolkit";
import products from "../products";

const initialState = {
  cart: [],
  items: products,
  total: 0,
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
