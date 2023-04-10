import React, { useEffect, useState } from 'react'
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

  const [dinosaurs, setDinosaurs] = useState([])

  useEffect(() => {
    readDinosaur()
  }, [])

  const readDinosaur = () => {
    fetch("http://localhost:3000/dinosaurs")
      .then((reponse) => reponse.json())
      .then((payload) => {
        setDinosaurs(payload)
      })
      .catch((error) => console.log(error))
  }

  const createDinosaur = (newDino) => {
    fetch("http://localhost:3000/dinosaurs", {
      body: JSON.stringify(newDino),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((reponse) => reponse.json())
      .then((payload) => {
        readDinosaur()
      })
      .catch((error) => console.log("Dinosaur create errors:", error))
  }


  const updateDinosaur = (dino, id) => {
    fetch(`http://localhost:3000/dinosaurs/${id}`, {
      body: JSON.stringify(dino),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((reponse) => reponse.json())
      .then((payload) => {
        readDinosaur()
      })
      .catch((error) => console.log("Dinosaur update errors:", error))
  }

  const deleteDinosaur = (dino, id) => {
    fetch(`http://localhost:3000/dinosaurs/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((reponse) => reponse.json())
      .then((payload) => {
        readDinosaur()
      })
      .catch((error) => console.log("Dinosaur delete errors:", error))
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