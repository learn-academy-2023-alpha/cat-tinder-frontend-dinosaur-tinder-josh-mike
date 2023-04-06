import { render, screen } from '@testing-library/react';
import DinosaurShow from './DinosaurShow';
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockDinosaurs from '../mockDinosaurs'

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/DinosaurShow/1"]}>
      <Routes>
        <Route path="/dinosaurshow/:id" element={<DinosaurShow mockDinosaurs={mockDinosaurs}/>}/>
      </Routes>
    </MemoryRouter>
  )
}

describe("DinosaurShow /", () => {
  it("renders dinosaur enjoys attribute", () => {
    renderShow()
    const enjoys = screen.getByText(`Enjoys: ${mockDinosaurs[0].enjoys}`)
    expect(enjoys).toBeInTheDocument()
  })
})