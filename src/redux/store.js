import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-reducer/cart-reducer";
import favoriteReducer from "./favorite.reducer";

export let store = configureStore({
  reducer: {
    productsCart: cartReducer,
    productsFavorite: favoriteReducer
  }
});