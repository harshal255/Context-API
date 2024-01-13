/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux"
import { removeTodo, updateTodo, toggleComplete } from "../features/todo/todoSlice"
import { useState } from "react";
import { useEffect } from "react";

const TodoItem = ({ todo }) => {
    const { id, text, completed } = todo;
    //using dispatch for setting data to the store;
    const dispatch = useDispatch();
    const [todoMsg, setTodoMsg] = useState(text);
    const [isTodoEditable, setIsTodoEditable] = useState(false);

    const updatetodo = () => {
        dispatch(updateTodo({ id: id, text: todoMsg }));
        setIsTodoEditable(false);
    }

    useEffect(() => {
        setTodoMsg(text);
    }, [text])

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black w-full ${completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={completed}
                onChange={() => dispatch(toggleComplete(id))}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (completed) return;

                    if (isTodoEditable) {
                        updatetodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => dispatch(removeTodo(id))}
            >
                ❌
            </button>
        </div>
    )
}

export default TodoItem
