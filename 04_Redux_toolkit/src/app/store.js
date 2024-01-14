// if i have only one slice for configuration

// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../features/todo/todoSlice";


// export const store = configureStore({
//     //multiple reducer can be
//     reducer: todoReducer
// })

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import notificationReducer from '../features/notification/notificationSlice';

const rootReducer = combineReducers({
    todo: todoReducer,
    notification: notificationReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
