import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { BrowserRouter } from "react-router-dom"

describe("<Footer />", () => {
    it("has a copyright, App name and Dev names", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )

        const footerCopyright = screen.getByText(/©/i)
        expect(footerCopyright).toBeInTheDocument()
        const footerName = screen.getByText(/Dinosaur Tinder/i)
        expect(footerName).toBeInTheDocument()
        const footerDevs = screen.getByText(/Josh and Michael/i)
        expect(footerDevs).toBeInTheDocument()
    })
})