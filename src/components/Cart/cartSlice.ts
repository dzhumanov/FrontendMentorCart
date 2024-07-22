import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Item } from "../../types";
import { RootState } from "../../app/store";

export interface CartState {
  items: CartItem[];
  modalStatus: boolean;
}

export const initialState: CartState = {
  items: [],
  modalStatus: false,
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
    decreaseAmount: (state, { payload: item }: PayloadAction<Item>) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.item.id === item.id
      );

      if (index !== -1) {
        if (state.items[index].amount > 1) {
          state.items[index].amount--;
        } else {
          state.items.splice(index, 1);
        }
      }
    },
    deleteFromCart: (state, { payload: id }: PayloadAction<string>) => {
      state.items = state.items.filter((cartItem) => cartItem.item.id !== id);
    },
    emptyCart: (state) => {
      state.items = [];
    },
    toggleModal: (state) => {
      state.modalStatus = !state.modalStatus;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  decreaseAmount,
  deleteFromCart,
  emptyCart,
  toggleModal,
} = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectModalStatus = (state: RootState) => state.cart.modalStatus;
