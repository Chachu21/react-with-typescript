import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  url: string;
  price: number;
  quantity: number;
}

interface InitialState {
  cart: CartItem[];
}

interface IncreaseQuantityPayload {
  id: string;
}

interface DecreaseQuantityPayload {
  id: string;
}

interface RemoveItemPayload {
  id: string;
}

const initialState: InitialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      console.log("id:", id);
      const itemInCart = state.cart.find((item) => item.id === id);

      if (itemInCart) {
        // If item already exists in the cart, increase its quantity
        state.cart = state.cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If item doesn't exist in the cart, add it with quantity 1
        state.cart.push({ ...action.payload, quantity: 1 });
        console.log(itemInCart);
      }
    },
    increaseQuantity: (
      state,
      action: PayloadAction<IncreaseQuantityPayload>
    ) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity !== undefined) {
        item.quantity++;
      }
    },

    decreaseQuantity: (
      state,
      action: PayloadAction<DecreaseQuantityPayload>
    ) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity !== undefined && item.quantity > 1) {
        item.quantity--;
      }
    },

    removeItem: (state, action: PayloadAction<RemoveItemPayload>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
