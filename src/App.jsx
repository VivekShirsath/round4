import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home'
import { Route,Routes } from 'react-router-dom'


function App() {

  return (
    <>
    <Routes>
      <Route>
        <Route path="/" element={<Home/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
