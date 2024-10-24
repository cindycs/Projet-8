import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom"
import Index from '../pages'

import './App.css'

function App() {

  return (
    <div className='App'>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
