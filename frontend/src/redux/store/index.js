import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "../reducers/settingsSlice";

export default configureStore({
    reducer: {
        settings: settingsSlice,
    },
});
