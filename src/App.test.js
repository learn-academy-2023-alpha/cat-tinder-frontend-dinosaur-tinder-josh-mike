import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom"

describe("<App />", () => {

  const appRender = () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
  }

  it("renders a greeting", () => {
    appRender()

    const greeting = screen.getByText("Dinosaur Tinder")
    expect(greeting).toBeInTheDocument()
  })

  it("renders a heading", () => {
    appRender()
    
    const heading = screen.getByText("Welcome To Dinosaur Tinder")
    expect(heading).toBeInTheDocument()
  })
})