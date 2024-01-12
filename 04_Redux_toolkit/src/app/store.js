import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";


export const store = configureStore({
    //multiple reducer can be
    reducer: todoReducer
})