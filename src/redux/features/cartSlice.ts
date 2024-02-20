import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  amount: number;
}

const initialState: InitialState = {
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
     state.amount += action.payload;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
