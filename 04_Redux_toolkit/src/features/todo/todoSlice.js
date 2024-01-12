import { createSlice, nanoid } from "@reduxjs/toolkit";

//nanoid generate unique random id
const initialState = {
    todos: [{ id: 1, text: "Hello World", completed: false }],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                // payload just a object we can also write text:action.payload.text
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            // console.log("remove todolist")
            state.todos = state.todos.filter((ele) => ele.id !== action.payload);
        },
        updateTodo: (state, action) => {
            // console.log("update todo");
            state.todos = state.todos.map(ele => ele.id === action.payload.id ? { ...ele, text: action.payload.text } : ele)
        },
        toggleComplete: (state, action) => {
            state.todos = state.todos.map(ele => ele.id === action.payload ? { ...ele, completed: !ele.completed } : ele);

        }
    }
});

export const { addTodo, removeTodo, updateTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer