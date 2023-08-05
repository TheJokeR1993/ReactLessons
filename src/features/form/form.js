import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
// const time = "2023-07-30T21:00:00Z";
const initialState = {
  form: {
    first_name: "",
    last_name: "",
    age: "",
    zip: "",
    is_married: false,
    date: "",
  },
};
export const form = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    changeForm: (state, action) => {
      state.form = { ...action.payload };
    },
    clearForm: (state, action) => {
      state.form = {
        first_name: "",
        last_name: "",
        age: "",
        zip: "",
        is_married: false,
        date: dayjs(),
      };
    },
  },
});

export const { changeForm, clearForm } = form.actions;

export default form.reducer;
