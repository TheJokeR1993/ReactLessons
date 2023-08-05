import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const button = createSlice({
  name: "buttonSlice",
  initialState,
  reducers: {
    updateButton: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { updateButton } = button.actions;

export default button.reducer;
