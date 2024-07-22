import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../../types";
import { RootState } from "../../app/store";
import data from "../../data/data.json";

export interface ProductsState {
  products: Item[];
}

export const initialState = {
  products: data,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const productsReducer = productsSlice.reducer;

export const selectProducts = (state: RootState) => state.products.products;
