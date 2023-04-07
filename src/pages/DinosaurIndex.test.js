import { render, screen } from '@testing-library/react'
import DinosaurIndex from './DinosaurIndex'
import { BrowserRouter } from 'react-router-dom'
import dinosaurs from '../mockDinosaurs'

describe("<DinosaurIndex />", () => {

  const homeRender = () => {
    render(
      <BrowserRouter>
        <DinosaurIndex dinosaurs={dinosaurs} />
      </BrowserRouter>,
    )
  }

  it ("renders dinosaur cards", () => {
    homeRender()
    dinosaurs.forEach(dino => {
      const dinoName = screen.getByText(dino.name)
      expect(dinoName).toBeInTheDocument()
    })
  })
})