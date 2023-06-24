import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import { Details } from './pages/Details'

function App() {

  return (
    <>
    <Routes>
      <Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile/:id" element={<Details/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
