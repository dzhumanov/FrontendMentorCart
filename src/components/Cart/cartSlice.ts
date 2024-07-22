import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Item } from "../../types";
import { RootState } from "../../app/store";

export interface cartState {
  items: CartItem[];
}

export const initialState: cartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload: item }: PayloadAction<Item>) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.item.id === item.id
      );

      if (index !== -1) {
        state.items[index].amount++;
      } else {
        state.items.push({
          amount: 1,
          item,
        });
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
