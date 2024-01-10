import { useContext } from "react"
import UserContext from "../context/UserContext"


const Profile = () => {
    const { user } = useContext(UserContext);
    console.log(user);
    if (!user) return <div className="flex w-screen h-[75px] justify-center items-center text-3xl text-red-600 border">Please Login</div>
    return (
        <div className="flex w-screen h-[75px] justify-center items-center text-3xl text-green-600">
            Welcome to  <div> {user.username}</div>
        </div>
    )
}

export default Profile
