import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        level: "Explorer 2",
        totalQuestion: "5",
    },
    reducers: {
        update: (state, action) => {
            const { level, totalQuestion } = action.payload;

            state.level = level;
            state.totalQuestion = totalQuestion;
        },
    },
});

export const { update } = settingsSlice.actions;
export const settingsSelector = (state) => state.settings;
export default settingsSlice.reducer;
