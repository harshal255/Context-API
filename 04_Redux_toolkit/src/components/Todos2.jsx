import { useSelector } from "react-redux"
import TodoItem from "./TodoItem";


const Todos2 = () => {
    //use selector for getting data from the store
    const todos = useSelector(state => state.todo.todos);


    return (
        <div className="flex flex-wrap gap-y-3">
            {todos.map((ele) => <TodoItem key={ele.id} todo={ele} className="w-full"></TodoItem>)}
        </div>
    )
}

export default Todos2
