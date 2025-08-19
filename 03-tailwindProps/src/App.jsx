import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj={
    name:"sobiya",
    lastname:"ansari"
  }
  return (
    <>
    <h1 className='text-3xl font-bold underline bg-green-400 rounder-xl'>Tailwind CSS</h1>
    <Card title="Chai aur code"/>
        <Card  details={myObj}/>

    </>
  )
}

export default App
