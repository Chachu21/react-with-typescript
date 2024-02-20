import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice"; // Import your cartSlice reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // Assuming "cart" is the slice name for your cart reducer
  },
});

export default store;
