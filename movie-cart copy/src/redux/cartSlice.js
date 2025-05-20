import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const movie = action.payload;
      if (!state.find((item) => item.imdbID === movie.imdbID)) {
        state.push(movie);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((movie) => movie.imdbID !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
