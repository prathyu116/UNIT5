import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'

const Login = () => {
    const { handleAuth  } = useContext(AuthContext);
    const navigate = useNavigate()
  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='name'/>{" "}
        <input type="password" placeholder='password'/>
        <input onClick={()=>{
            handleAuth(true)
            navigate("/users") //for after login
            // or -2
        }}
        type="submit" value="submit" />
    </div>
  )
}

export default Login