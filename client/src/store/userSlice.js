import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserAPI } from "../api/User";

export const login = createAsyncThunk("auth/login", async (userData) => {
  try {
    const response = await UserAPI.login(userData);
    console.log(222, response.data.user);
    if (response.data.user.status === 1) {
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.accessToken);
    } else {
      return { message: "Account has been locked" };
    }

    return response;
  } catch (error) {
    return error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: "",
    token: "",
    isLoggedIn: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.data = action.payload?.data?.user;
      state.token = action.payload?.data?.accessToken;
      state.isLoggedIn = true;
    },
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
