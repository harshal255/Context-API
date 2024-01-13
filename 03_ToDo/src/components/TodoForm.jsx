import { useState } from "react"
import { useToDo } from "../context";
import { useNotificaton } from "../context";



const TodoForm = () => {

    const [todo, setTodo] = useState("");
    const { addToDo } = useToDo();
    const { setNotification } = useNotificaton();

    const changeInput = (e) => {
        setTodo(e.target.value);
        console.log(todo);
    }

    const add = (e) => {
        e.preventDefault();
        if (!todo) {
            setNotification("Please Type something...", "error");
            return;
        }
        addToDo({ id: Date.now(), todo, completed: false })
        setTodo("");
    }

    return (
        <>
            <form className="flex" onSubmit={(e) => add(e)}>
                <input
                    type="text"
                    placeholder="Write Todo..."
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                    value={todo}
                    onChange={(e) => changeInput(e)}
                />
                <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                    Add 1
                </button>
            </form>

        </>
    )
}

export default TodoForm;



