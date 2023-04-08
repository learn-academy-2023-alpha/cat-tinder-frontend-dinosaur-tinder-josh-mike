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
import cDinosaurs from './mockDinosaurs'

const App = () => {

  const [dinosaurs, setDinosaurs] = useState(cDinosaurs)

  const createDinosaur = (newDino) => {
    console.log("Created dinosaur:", newDino)
  }

  const updateDinosaur = (dino, id) => {
    console.log("dino:", dino)
    console.log("id:", id)
  }

  const deleteDinosaur = (dino, id) => {
    console.log("Deleted dinosaur:", dino)
    console.log("id:", id)

  }

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dinosaurindex" element={<DinosaurIndex dinosaurs={dinosaurs} />}/>
          <Route path="/dinosaurshow/:id" element={<DinosaurShow dinosaurs={dinosaurs} deleteDinosaur={deleteDinosaur}/>}/>
          <Route path="/dinosaurnew" element={<DinosaurNew createDinosaur={createDinosaur}/>}/>
          <Route path="/dinosauredit/:id" element={<DinosaurEdit dinosaurs={dinosaurs} updateDinosaur={updateDinosaur}/>}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App