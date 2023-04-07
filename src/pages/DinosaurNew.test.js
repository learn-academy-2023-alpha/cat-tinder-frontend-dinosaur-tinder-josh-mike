import { render, screen } from '@testing-library/react'
import DinosaurNew from './DinosaurNew'
import { BrowserRouter } from 'react-router-dom'

describe("<DinosaurNew />", () => {

  const indexRender = () => {
    render(
      <BrowserRouter>
        <DinosaurNew />
      </BrowserRouter>
    )
  }

  it("renders the DinosaurNew page for the user", () => {
    indexRender()
    const inputTitle = screen.getByText("Dinosaur Name:")
    expect(inputTitle).toBeInTheDocument()
  })

  it("has a form with entries for name, age, diet, enjoys, and image", () => {
    indexRender()
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