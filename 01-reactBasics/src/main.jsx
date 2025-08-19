import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
// const reactElement={
//     type:'a',
//     props:{
//         href:"https://www.google.com",
//         target:'_blank'
//     },
//     children:"click me to visit google"
// }
const reactElement=React.createElement(
  'a',
  {
      href:"https://www.google.com",
        target:'_blank'
  },
  "click me to visit google"
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  reactElement()
  // </StrictMode>
)
