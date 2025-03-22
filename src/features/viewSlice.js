import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isListView: false, 
};

export const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    toggleView: (state) => {
      state.isListView = !state.isListView;
    },
  },
});

export const { toggleView } = viewSlice.actions;
export default viewSlice.reducer;
