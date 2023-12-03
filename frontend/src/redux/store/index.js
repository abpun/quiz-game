import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "../reducers/settingsSlice";
import userSlice from "../reducers/userSlice";

export default configureStore({
  reducer: {
    settings: settingsSlice,
    user: userSlice,
  },
});
