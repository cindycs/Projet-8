import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Index from './pages'
import Header from './composants/Header/Header'
import FicheProjet from './pages/FicheProjet/FicheProjet'
import './styles/main.css'
import './App.css'


function App() {

  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <Routes>
          <Route path="/Projet-8" element={<Index />} />
          <Route path="/Projet-8/fiche-projet/:id" element={<FicheProjet />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
