import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
import { BrowserRouter } from "react-router-dom"

describe("<NotFound />", () => {
  it("displays text telling my user the page is not found", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    //   screen.logTestingPlaygroundURL()
      const notFound = screen.getByRole('heading', {
        name: /error 404, dinosaur not found/i
      })
      expect(notFound).toBeInTheDocument()

      const image = screen.getByRole('img', {
        name: /Dinosaur rawred too loud and caused an error/i
      })
      expect(image).toBeInTheDocument()
  })
})