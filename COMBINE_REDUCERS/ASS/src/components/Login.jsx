import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getToken } from '../Redux/AuthFeature/action'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [form, setForm] = useState({})
    const navigate = useNavigate()

    const {token} = useSelector((state) => state.AuthState)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        let {value, name} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

      

    const handleLogin = () => {
         axios
           .post("https://reqres.in/api/login", form)
           .then(function (response) {
             dispatch(getToken(response.data.token));
             navigate("/",{replace:true});
           })
           .catch(function (error) {
             alert("user not found");
             console.log(error);
           });
    }
    return (
        <div>
            <input type="text" placeholder='email' name='email' onChange={(e) => handleChange(e)}/>
            <input type="text" placeholder='password' name='password' onChange={(e) => handleChange(e)}/>
            <button onClick={handleLogin}>LOGIN</button>
        </div>
    )
}

export default Login
