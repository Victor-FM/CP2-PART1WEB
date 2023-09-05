import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Menu.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
       
      <Menu/>
      <Outlet/>
    </>
  )
}


