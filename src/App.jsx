import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tareas from './pages/Tareas'
import Header from './assets/Header/Header'

function App() {

  return (
    <>
        <Header></Header>
        <Tareas></Tareas>
    </>
  )
}

export default App
