import { createSlice } from "@reduxjs/toolkit";



const initialState = {
 limit: 10,
 page: 1
};

export const dog = createSlice({
  name: "dogSlice",
  initialState,
  reducers: {
    changeLimit: (state, action) => {
      if(action.payload *state.page>808){
        state.page= Math.ceil(808/action.payload)
      } 
      state.limit = action.payload;
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { changePage,changeLimit } = dog.actions;

export default dog.reducer;