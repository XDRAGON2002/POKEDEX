import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CardList from './components/CardList'
import './styles/globals.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
