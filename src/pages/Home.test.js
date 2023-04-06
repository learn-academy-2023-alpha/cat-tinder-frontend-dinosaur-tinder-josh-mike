import { render, screen } from '@testing-library/react'
import Home from './Home'
import { BrowserRouter } from 'react-router-dom'

describe("<Home />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        const home = screen.getByRole('heading', {
            name: /home/i
        })
        expect(home).toBeInTheDocument()
    })

    it("renders an logo with a src and alt", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        const logo = screen.getByRole("img")
        expect(logo).toHaveAttribute("src", "https://cdn.pixabay.com/photo/2017/07/10/09/07/heart-2489450_1280.png")
        expect(logo).toHaveAttribute("alt", "Dinosaur heart logo")

    })

})