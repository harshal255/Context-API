import { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

const Login1 = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = () => {
        setUser({ username, password })
        setUsername("");
        setPassword("");
    }


    return (
        <div className='flex flex-col text-xl gap-10 h-[300px] w-screen items-center justify-center border'>
            <h2>Login 1</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' autoComplete="off"/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' autoComplete="off"/>
            <button onClick={() => handleSubmit()} className='bg-orange-500 p-5 hover:bg-orange-700 focus:bg-orange-700'>Submit</button>
        </div>
    )
}

export default Login1
