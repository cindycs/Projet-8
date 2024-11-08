import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Index from './pages'
import Header from './composants/Header/Header'
import Footer from './composants/Footer/Footer'
import FicheProjet from './pages/FicheProjet/FicheProjet'
import Error from './pages/Error404/Error404'
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
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
