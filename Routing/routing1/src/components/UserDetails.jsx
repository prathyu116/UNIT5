import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const { id } = useParams()
  return (
    <div>
        <h2>UserId:{id}</h2>
    </div>
  )
}

export default UserDetails