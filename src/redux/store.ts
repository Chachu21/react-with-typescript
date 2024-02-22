import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice"; // Import your cartSlice reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // Assuming "cart" is the slice name for your cart reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
