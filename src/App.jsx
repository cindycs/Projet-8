import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom"
import Index from './pages'
import Header from './composants/Header/Header'
import './styles/main.css'

import './App.css'

function App() {

  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <Routes>
          <Route path="/Projet-8" element={<Index />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
