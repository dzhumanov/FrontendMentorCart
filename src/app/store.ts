import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../components/Cart/cartSlice";
import { productsReducer } from "../components/Products/ProductsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
