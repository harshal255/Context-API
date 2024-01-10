import Login from "./components/Login";
import Profile from "./components/Profile";
import Profile1 from "./components/Profile1";
import UserContextProvider from "./context/UserContextProvider";
import Login1 from './components/Login1';

export default function App() {
  return (
    <UserContextProvider className="flex flex-col gap-5 ">
      <Login></Login>
      <Login1></Login1>
      <Profile></Profile>
      <Profile1></Profile1>
    </UserContextProvider>
  )
}