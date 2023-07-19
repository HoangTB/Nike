import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LoginAdmin } from "../api/loginAdmin";

export const login = createAsyncThunk("admin/login", async (adminData) => {
  try {
    const response = await LoginAdmin.login(adminData);

    localStorage.setItem("admin", JSON.stringify(response.data.user));
    localStorage.setItem("token", response.data.accessToken);
    return response;
  } catch (error) {
    return error;
  }
});

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    data: "",
    token: "",
    isLoggedIn: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.data = action.payload?.data?.admin;
      state.token = action.payload?.data?.accessToken;
      state.isLoggedIn = true;
    },
  },
});

export const {} = adminSlice.actions;
export default adminSlice.reducer;
