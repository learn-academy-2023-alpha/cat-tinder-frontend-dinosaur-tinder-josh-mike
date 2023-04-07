import { render, screen } from '@testing-library/react'
import DinosaurEdit from './DinosaurEdit'
import { MemoryRouter, Routes, Route } from "react-router-dom"
import dinosaurs from '../mockDinosaurs'

describe("<DinosaurEdit />", () => {

  const editRender = () => {
    render(
        <MemoryRouter initialEntries={["/DinosaurEdit/1"]}>
            <Routes>
                <Route path="/dinosauredit/:id" element={<DinosaurEdit dinosaurs={dinosaurs}/>}/>
            </Routes>
        </MemoryRouter>
    )
  }

  it("renders the DinosaurEdit page for the user", () => {
    editRender()
    const inputTitle = screen.getByText("Modify the Fossil Record")
    expect(inputTitle).toBeInTheDocument()
  })

  it("has a form with entries for name, age, diet, enjoys, and image", () => {
    editRender()
    const formName = screen.getByText(/Dinosaur Name:/i)
    expect(formName.getAttribute("for")).toEqual("name")

    const formAge = screen.getByText(/Dinosaur Age:/i)
    expect(formAge.getAttribute("for")).toEqual("age")

    const formDiet = screen.getByText(/Dinosaur Diet:/i)
    expect(formDiet.getAttribute("for")).toEqual("diet")

    const formEnjoys = screen.getByText(/Dinosaur Enjoys:/i)
    expect(formEnjoys.getAttribute("for")).toEqual("enjoys")

    const formImage = screen.getByText(/Image URL/i)
    expect(formImage.getAttribute("for")).toEqual("image")
  })
})