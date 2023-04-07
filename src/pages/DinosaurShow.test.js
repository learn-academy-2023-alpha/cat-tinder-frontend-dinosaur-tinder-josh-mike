import { render, screen } from '@testing-library/react';
import DinosaurShow from './DinosaurShow';
import { MemoryRouter, Routes, Route } from "react-router-dom"
import dinosaurs from '../mockDinosaurs'

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/DinosaurShow/1"]}>
      <Routes>
        <Route path="/dinosaurshow/:id" element={<DinosaurShow dinosaurs={dinosaurs}/>}/>
      </Routes>
    </MemoryRouter>
  )
}

describe("DinosaurShow /", () => {
  it("renders dinosaur enjoys attribute", () => {
    renderShow()
    const enjoys = screen.getByText(`Enjoys: ${dinosaurs[0].enjoys}`)
    expect(enjoys).toBeInTheDocument()
  })
})