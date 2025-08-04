import { configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "../index.js";

const store = configureStore({
    reducer: {
        login: LoginSlice
    }
});

export default store;