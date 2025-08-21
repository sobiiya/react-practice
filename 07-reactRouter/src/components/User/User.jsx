import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    let {userId}=useParams()
  return (
    <div className='bg-gray-500 text-3xl p-4 text-white text-center'>User:{userId}</div>
  )
}

export default User