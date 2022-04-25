import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams,Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const UserDetails = () => {
  const [data, setdata] = useState({})
    const { id } = useParams()
    const {isAuth} = useContext(AuthContext)
    useEffect(()=>{
      axios.get(`https://reqres.in/api/users/${id}`).then(({data})=>{
        setdata(data.data)
      })
    },[])
    if(!isAuth){
      return <Navigate to={"/login "}/>
    }
  return (
    <div>
       <img src={data.avatar} alt="" />
        <h2>FitsrName :{data.first_name}</h2>
        <h2>FitsrName :{data.last_name}</h2>
    </div>
  )
}

export default UserDetails