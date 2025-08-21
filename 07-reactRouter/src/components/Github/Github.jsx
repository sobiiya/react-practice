import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
//     const [data,setData]=useState([])
//    useEffect(()=>{
//     fetch(`https://api.github.com/users/sobiiya`)
//     .then(response => response.json())
//     .then(data =>{
//         console.log(data);
//         setData(data)
        
//     })
//    },[])

  return (
    <>
     <div className='bg-gray-500 text-3xl p-4 text-white text-center'>Github followes: {data.followers}</div>
     <img src={data.avatar_url} alt="profile picture" />
     </>
    
  )
}

export default Github
export const gitHubInfo =async()=>{
   let response=await fetch(`https://api.github.com/users/sobiiya`)
   return response.json()
}
 