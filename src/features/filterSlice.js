import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  category: "",
  brand: "",
  priceRange: [0, 1000],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});

export const {
  setSearchQuery,
  setCategory,
  setBrand,
  setPriceRange,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
