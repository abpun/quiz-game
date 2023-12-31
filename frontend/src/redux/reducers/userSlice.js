import { createSlice } from "@reduxjs/toolkit";
import { loggedInData } from "../../config/authData";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: loggedInData?.isLoggedIn || false,
    userDetails: loggedInData?.userDetails || {},
    token: loggedInData?.token || "",
  },
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
    logout: () => {
      return {
        isLoggedIn: false,
        userDetails: {},
        token: "",
      };
    },
  },
});

export const { login, logout } = userSlice.actions;
export const settingsSelector = (state) => state.user;
export default userSlice.reducer;
