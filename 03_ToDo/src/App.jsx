import { useEffect, useState } from "react"
import { ToDoProvider } from "./context";
import { TodoForm, TodoItem, TodoForm2 } from "./components";

export default function App() {

  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    setTodos([...todos, { id: Date.now(), ...todo }]);
  }

  const deleteToDo = (id) => {
    setTodos([...todos.filter(ele => ele.id !== id)]);
  }

  const toggleComplete = (id) => {
    setTodos([...todos.map(ele => ele.id === id ? { ...ele, completed: !ele.completed } : ele)])
  }

  const updateToDo = (id, todo) => {
    setTodos([...todos.map((ele) => ele.id === id ? todo : ele)]);

  }


  //while first time load web app
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todokey"));
    if (todos && todos.length) {
      setTodos(todos);
    }
  }, [])
  //whenever changes in todos array
  useEffect(() => {
    localStorage.setItem("todokey", JSON.stringify(todos));
  }, [todos])

  return (
    <ToDoProvider value={{ addToDo, deleteToDo, toggleComplete, updateToDo, todos }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm></TodoForm>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((ele, index) => <TodoItem key={index} todo={ele} className="w-full"></TodoItem>)}
          </div>
        </div>
        <hr className="h-[5rem]" />
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos 2</h1>
          <div className="mb-4">
            <TodoForm2></TodoForm2>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((ele, index) => <TodoItem key={index} todo={ele} className="w-full"></TodoItem>)}
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}