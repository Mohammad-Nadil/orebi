import { createSlice } from "@reduxjs/toolkit";
import products from "../products";

const initialState = {
  cart: [],
  items: products,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index === -1) {
        state.cart.push({ ...action.payload, quantity: 1 });
      } else {
        state.cart[index].quantity += 1;
      }

      state.total = Math.max(0, state.total + action.payload.price);
    },
    removeFromCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        const itemToRemove = state.cart[index];

        // Subtract the total price of the item (price * quantity)
        state.total = Math.max(
          0,
          state.total - itemToRemove.price * itemToRemove.quantity
        );

        // Remove the item from the cart
        state.cart.splice(index, 1);
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.total += item.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.total = Math.max(0, state.total - item.price);
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
