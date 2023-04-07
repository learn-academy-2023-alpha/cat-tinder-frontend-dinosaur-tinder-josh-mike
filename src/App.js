import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import DinosaurIndex from "./pages/DinosaurIndex"
import DinosaurShow from "./pages/DinosaurShow"
import DinosaurNew from "./pages/DinosaurNew"
import DinosaurEdit from "./pages/DinosaurEdit"
import NotFound from "./pages/NotFound"
import './App.css'
import dinosaurs from './mockDinosaurs'

const App = () => {

  const [mockDinosaurs, setMockDinosaurs] = useState(dinosaurs)

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dinosaurindex" element={<DinosaurIndex mockDinosaurs={mockDinosaurs} />}/>
          <Route path="/dinosaurshow/:id" element={<DinosaurShow mockDinosaurs={mockDinosaurs} />}/>
          <Route path="/dinosaurnew" element={<DinosaurNew />}/>
          <Route path="/dinosauredit" element={<DinosaurEdit />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App