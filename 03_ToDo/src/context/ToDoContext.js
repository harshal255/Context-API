/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";


export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "To Do message",
            completed: false,
        }
    ],
    addToDo: (todo) => { },
    updateToDo: (id, todo) => { },
    deleteToDo: (id) => { },
    toggleComplete: (id) => { },
});


//used variables in components or pages
export const useToDo = () => {
    return useContext(ToDoContext);
}

export const ToDoProvider = ToDoContext.Provider;