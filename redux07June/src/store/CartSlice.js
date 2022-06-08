// const { createSlice } = require("@reduxjs/toolkit");

// const initialState = [];

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     add(state, action) {
//     //   redux: redux kehta h directly hum state ko mutate ni kr skte but hum
//     //    ek createSlice method use kr r h aur create slice ye kehti h ki hum directly state ko mutate kr skte h.
//     // return [...state, action.payload];
//       state.push(action.payload);
//     },
//     remove(state, action) {
//         state: state.filter(item => item.id !== action.payload);
//     },
//   },
// });

// export const { add,remove} = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload); //This is createSlice method
    },
    
    remove(state, action) {
      state = state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
