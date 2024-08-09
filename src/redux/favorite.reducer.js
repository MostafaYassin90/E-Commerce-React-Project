import { createSlice } from "@reduxjs/toolkit";

let favoriteProducts = localStorage.getItem("favorite_products") !== null ?
  JSON.parse(localStorage.getItem("favorite_products")) : [];

let initialState = {
  favoriteProducts: favoriteProducts
};

export let favoriteReducer = createSlice({
  initialState,
  name: "favoriteReducer",
  reducers: {
    addProductFav: (state, action) => {
      let findProduct = state.favoriteProducts.find((product) => product.id === action.payload.id);
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        let productClone = { ...action.payload, quantity: 1 };
        state.favoriteProducts.push(productClone);
      }
      localStorage.setItem("favorite_products", JSON.stringify(state.favoriteProducts));
    },
    deleteFavoriteProduct: (state, action) => {
      state.favoriteProducts =
        state.favoriteProducts.filter((product) => product.id !== action.payload.id);
      localStorage.setItem("favorite_products", JSON.stringify(state.favoriteProducts));
    }
  }
});
export default favoriteReducer.reducer;
export let { addProductFav, deleteFavoriteProduct } = favoriteReducer.actions;