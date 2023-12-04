import { createSlice } from "@reduxjs/toolkit";
import { loggedInData } from "../../config/authData";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    level: loggedInData?.user?.level || "Explorer 2",
    totalQuestion: "5",
  },
  reducers: {
    update: (state, action) => {
      console.log(action.payload);
      const { level, totalQuestion } = action.payload;

      state.level = level;
      state.totalQuestion = totalQuestion;
    },
  },
});

export const { update } = settingsSlice.actions;
export const settingsSelector = (state) => state.settings;
export default settingsSlice.reducer;
