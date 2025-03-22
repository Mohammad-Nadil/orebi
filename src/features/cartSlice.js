import { createSlice } from "@reduxjs/toolkit";
import products from "../products";

const initialState = {
  cart: [],
  items: products,
  total: 0,
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "cart", // Fixed name
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const alreadyExists = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (alreadyExists === -1) {
        state.cart.push({ ...action.payload, quantity: 1 });
      } else {
        state.cart[alreadyExists].quantity += 1;
      }

      state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const alreadyExists = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (alreadyExists !== -1) {
        state.total -= state.cart[alreadyExists].price * state.cart[alreadyExists].quantity;
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
