import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Product from "../api/Product";

export const getProduct = createAsyncThunk("product/get", async () => {
  const response = await Product.getProduct();
  return response;
});

const productSlice = createSlice({
  name: "product",
  initialState: [],
  extraReducers: {
    [getProduct.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
  },
});
export const {} = productSlice.actions;
export default productSlice.reducer;
