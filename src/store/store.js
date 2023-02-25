import { configureStore } from "@reduxjs/toolkit";
import playerReducers from "./createSlice"

export const store=configureStore({
    reducer:{
        playQueue:playerReducers,
    }
})