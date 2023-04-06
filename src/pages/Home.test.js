import { render, screen } from '@testing-library/react'
import Home from './Home'
import { BrowserRouter } from 'react-router-dom'

describe("<Home />", () => {

  const homeRender = () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    )
  }
  it("renders without crashing", () => {
    homeRender()

    const home = screen.getByRole('heading', {
      name: /home/i
    })
    expect(home).toBeInTheDocument()
  })

  it("renders an logo with a src and alt", () => {
    homeRender()

    const logo = screen.getByRole("img")
    expect(logo).toHaveAttribute("src", "https://cdn.pixabay.com/photo/2017/07/10/09/07/heart-2489450_1280.png")
    expect(logo).toHaveAttribute("alt", "Dinosaur heart logo")
  })
})