import { createSlice } from "@reduxjs/toolkit";

let producstState = localStorage.getItem("products_cart") !== null
  ? JSON.parse(localStorage.getItem("products_cart"))
  : [];

let initialState = {
  productsCart: producstState
};

export let cartReducer = createSlice({
  initialState,
  name: "cartReducer",
  reducers: {
    addProduct: (state, action) => {
      let findProduct = state.productsCart.find((product) => product.id === action.payload.id);
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        let productClone = { ...action.payload, quantity: 1 };
        state.productsCart.push(productClone);
      }
      localStorage.setItem("products_cart", JSON.stringify(state.productsCart));
    },
    minProduct: (state, action) => {
      let finProduct = state.productsCart.find((product) => product.id === action.payload.id);
      if (finProduct) {
        if (finProduct.quantity > 1) {
          finProduct.quantity -= 1;
        }
      }
    },
    deleteProduct: (state, action) => {
      state.productsCart = state.productsCart.filter((product) => product.id !== action.payload.id);
      localStorage.setItem("products_cart", JSON.stringify(state.productsCart));
    },

    clearCart: (state, action) => {
      state.productsCart = [];
      localStorage.setItem("products_cart", JSON.stringify(state.productsCart));
    }
  }
});
export default cartReducer.reducer;
export let { addProduct, deleteProduct, clearCart, minProduct } = cartReducer.actions;