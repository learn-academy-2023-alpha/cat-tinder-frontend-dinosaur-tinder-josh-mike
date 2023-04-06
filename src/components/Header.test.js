import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from './Header';
import dinoHeaderLogo from '../assets/Tyrannosaur-in-love-by-Rones.png'

describe("<Header />", () => {
    
    it("renders an image", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        const image = screen.getByRole("img")
        expect(image).toHaveAttribute("src", dinoHeaderLogo)
        expect(image).toHaveAttribute("alt", "Dinosaur Tinder logo with dinosaur and heart")
        expect(image).toHaveClass("dino-logo")
    })
    it("renders app name", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        const headerAppName = screen.getByText(/Dinosaur Tinder/i)
        expect(headerAppName).toBeInTheDocument()
    })

    it("has clickable links", () => {
        render(
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        )
        userEvent.click(screen.getByText("Home"))
        expect(screen.getByText("Home")).toBeInTheDocument()
        userEvent.click(screen.getByText("Meet the Eligable Fossils"))
        expect(screen.getByText("Meet the Eligable Fossils")).toBeInTheDocument()
      })
})