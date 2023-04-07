import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from './Header';
import dinoHeaderLogo from '../assets/Tyrannosaur-in-love-by-Rones.png'

describe("<Header />", () => {

  // beforeEach(() => {
  //   render(
  //     <BrowserRouter>
  //       <Header />
  //     </BrowserRouter>
  //   )
  // })

  const headerRender = () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
  }
    
  it("renders an image", () => {
    headerRender()
    
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("src", dinoHeaderLogo)
    expect(image).toHaveAttribute("alt", "Dinosaur Tinder logo with dinosaur and heart")
    expect(image).toHaveClass("dino-logo")
  })
  it("renders app name", () => {
    headerRender()

    const headerAppName = screen.getByText(/Dinosaur Tinder/i)
    expect(headerAppName).toBeInTheDocument()
  })

  it("has clickable links", () => {
    headerRender()

    userEvent.click(screen.getByText("Home"))
    expect(screen.getByText("Home")).toBeInTheDocument()
    userEvent.click(screen.getByText("Meet the Eligable Fossils"))
    expect(screen.getByText("Meet the Eligable Fossils")).toBeInTheDocument()
  })
})