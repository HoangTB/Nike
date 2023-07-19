import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sideBarSlice",
  initialState: "",
  reducers: {
    setSideBar: (state, action) => (state = action.payload),
  },
});
export const { setSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
