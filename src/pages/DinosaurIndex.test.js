import { render, screen } from '@testing-library/react'
import DinosaurIndex from './DinosaurIndex'
import { BrowserRouter } from 'react-router-dom'
import mockDinosaurs from '../mockDinosaurs'

describe("<DinosaurIndex />", () => {

  const homeRender = () => {
    render(
      <BrowserRouter>
        <DinosaurIndex mockDinosaurs={mockDinosaurs} />
      </BrowserRouter>,
    )
  }

  it ("renders dinosaur cards", () => {
    homeRender()
    mockDinosaurs.forEach(dino => {
      const dinoName = screen.getByText(dino.name)
      expect(dinoName).toBeInTheDocument()
    })
  })
})