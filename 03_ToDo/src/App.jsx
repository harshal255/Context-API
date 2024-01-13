import { useEffect, useState } from "react"
import { ToDoProvider, NotificationProvider } from "./context";
import { TodoForm, TodoItem, TodoForm2 } from "./components";
import { AnimatePresence } from "framer-motion";
import Notification from "./components/Notification";

export default function App() {

  const [todos, setTodos] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const addToDo = (todo) => {
    setTodos([...todos, { id: Date.now(), ...todo }]);
    setNotifications([{
      id: Date.now(),
      text: "Todo added",
      typed: {
        added: true,
        removed: false,
        edited: false,
        archived: false,
        unarchived: false,
      }
    }, ...notifications]);
  }

  const deleteToDo = (id) => {
    setTodos([...todos.filter(ele => ele.id !== id)]);
    setNotifications([{
      id: Date.now(),
      text: "Todo removed Successfully",
      typed: {
        added: false,
        removed: true,
        edited: false,
        archived: false,
        unarchived: false,
      }
    }, ...notifications]);
  }

  const toggleComplete = (id) => {
    setTodos([...todos.map(ele => ele.id === id ? { ...ele, completed: !ele.completed } : ele)])
  }

  const updateToDo = (id, todo) => {
    setTodos([...todos.map((ele) => ele.id === id ? todo : ele)]);
    setNotifications([{
      id: Date.now(), text: "Todo updated", typed: {
        added: false,
        removed: false,
        edited: true,
        archived: false
      }
    }, ...notifications]);
  }

  const setNotification = (notification, typed) => {
    setNotifications([...notifications, { id: Date.now(), text: notification, typed: { [typed]: true } }]);
  }

  const removeNotif = (id) => {
    console.log("remove")
    setNotifications((pv) => pv.filter((n) => n.id !== id));
  };


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
    <NotificationProvider value={{ notifications, setNotification }}>
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
          <br className="h-[5rem]" />
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos 2</h1>
            <div className="mb-4">
              <TodoForm2></TodoForm2>
            </div>
            <div className="flex flex-wrap gap-y-3">
              {todos.map((ele, index) => <TodoItem key={index} todo={ele} className="w-full"></TodoItem>)}
            </div>
          </div>
          <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
            <AnimatePresence>
              {notifications.map((ele) => (
                <Notification removeNotif={removeNotif} {...ele} key={ele.id} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </ToDoProvider>
    </NotificationProvider>
  )
}