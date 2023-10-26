import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        level: "Navigator 2",
        difficulty: "hard",
    },
    reducers: {
        update: (state, action) => {
            const { level, difficulty } = action.payload;

            state.level = level;
            state.difficulty = difficulty;
        },
    },
});

export const { update } = settingsSlice.actions;
export const settingsSelector = (state) => state.settings;
export default settingsSlice.reducer;
