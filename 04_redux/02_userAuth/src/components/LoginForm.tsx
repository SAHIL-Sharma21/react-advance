import React, { useState } from 'react';
import {login} from '../features/userAuthSlice'
import {useDispatch} from 'react-redux'

const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const dispatch = useDispatch();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(username))
    setUsername("")
  }

  return (
    <div>

        <form onSubmit={handleLogin}>
            <label htmlFor="username">username</label>
            <input type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default LoginForm;