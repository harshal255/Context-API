import AddTodo from "./components/AddTodo";
import AddTodo2 from "./components/AddTodo2";
import Todos from "./components/Todos";
import Todos2 from "./components/Todos2";
import { AnimatePresence } from "framer-motion";
import Notification from "./components/Notification";
import { useSelector } from 'react-redux';

export default function App() {


  const notifications = useSelector((state) => state.notification.notifications);



  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="my-4">
          <AddTodo></AddTodo>
          <br className="h-2" />
          <Todos></Todos>
        </div>
        <br className="h-[5rem]" />
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos 2</h1>
        <div className="my-4">
          <AddTodo2></AddTodo2>
          <br className="h-2" />
          <Todos2></Todos2>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
        <AnimatePresence>
          {notifications.map((ele) => (
            <Notification {...ele} key={ele.id} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}