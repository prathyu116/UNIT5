import React, { useState } from 'react'

const From = () => {
    const [formData, setformData] = useState({
        // username:"",
        // age:"",    automatically create avum
        // email:""
    })
const handleChange = (e) => {
    const {id,value} = e.target
    setformData({
        ...formData,
        [id]:value
    })
    
}
const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    fetch("",{
      method:"POST",
      body:JSON.stringify(formData)
    })
}
  return (
    <form onSubmit={handleSubmit}>
      <input id="username" type="text" onChange={handleChange} placeholder="name" />
      <input id="age"  type="number" onChange={handleChange} placeholder="age" />
      <input id="email"  type="text" onChange={handleChange} placeholder="age" />
      <input type="submit" value="submit" />
    </form>
  );
}

export default From